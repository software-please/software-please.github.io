/* ============================================================================
   Ledger Domain Object (Prop-Driven Nightly Settlement Model)
   ============================================================================ */

export class Ledger {
  /**
   * @param {object} props
   */
  constructor(props = {}) {
    this.day = props.day || 1;
    this.preBalance = typeof props.preBalance === 'number' ? props.preBalance : 0;
    this.powerSkippedStreak = props.powerSkippedStreak || 0;
    this.isCampaignFinalDay = Boolean(props.isCampaignFinalDay);
    this.incomeRows = Array.isArray(props.incomeRows) ? props.incomeRows.slice() : [];
    this.expenses = (Array.isArray(props.expenses) ? props.expenses : []).map(Ledger.normalizeExpense);
    this.statusRules = Array.isArray(props.statusRules) ? props.statusRules.slice() : [];
  }

  static normalizeExpense(prop) {
    return {
      id: prop.id,
      labelKey: prop.labelKey,
      cost: Number(prop.cost) || 0,
      checked: prop.checked !== undefined ? Boolean(prop.checked) : (prop.defaultChecked !== undefined ? Boolean(prop.defaultChecked) : true),
      forced: Boolean(prop.forced),
      onApply: typeof prop.onApply === 'function' ? prop.onApply : null
    };
  }

  addIncomeRow(row) {
    this.incomeRows.push(row);
  }

  addExpense(prop) {
    this.expenses.push(Ledger.normalizeExpense(prop));
  }

  getExpense(id) {
    return this.expenses.find((e) => e.id === id) || null;
  }

  hasExpense(id) {
    return !!this.getExpense(id);
  }

  isPaid(id) {
    const exp = this.getExpense(id);
    return !!(exp && exp.checked);
  }

  setExpenseChecked(id, checked) {
    const exp = this.getExpense(id);
    if (!exp || exp.forced) return false;
    exp.checked = Boolean(checked);
    return true;
  }

  getTotalExpenses() {
    return this.expenses.reduce((sum, e) => sum + (e.checked ? e.cost : 0), 0);
  }

  getNetBalance() {
    return Number((this.preBalance - this.getTotalExpenses()).toFixed(2));
  }

  getSelfStatusKey() {
    const ctx = {
      ledger: this,
      day: this.day,
      isPaid: (id) => this.isPaid(id),
      hasExpense: (id) => this.hasExpense(id)
    };

    for (let i = 0; i < this.statusRules.length; i += 1) {
      const rule = this.statusRules[i];
      if (typeof rule.when === 'function' && rule.when(ctx)) {
        return rule.statusKey;
      }
    }

    if (this.hasExpense('food') && !this.isPaid('food')) return 'game.ledger.status_hungry';
    if (this.hasExpense('heating') && !this.isPaid('heating')) return 'game.ledger.status_cold';
    if (this.hasExpense('treat') && this.isPaid('treat')) return 'game.ledger.status_treat';
    if (this.hasExpense('coffee') && !this.isPaid('coffee')) return 'game.ledger.status_tired';
    return 'game.ledger.status_ok';
  }

  getPowerStatusKey() {
    if (!this.isPaid('power')) {
      return this.powerSkippedStreak >= 1
        ? 'game.ledger.power_critical'
        : 'game.ledger.power_warn';
    }
    return 'game.ledger.power_ok';
  }

  getWarningKey() {
    const net = this.getNetBalance();
    if (net < 0) return 'game.ledger.warn_bankrupt';
    if (!this.isPaid('power') && this.powerSkippedStreak >= 1) return 'game.ledger.warn_power';
    return '';
  }

  /**
   * Apply selected expenses to CampaignRun and determine next campaign outcome.
   * @param {import('../campaign/CampaignRun.js').CampaignRun} run
   * @returns {{ outcome: 'bankrupt' | 'campaign_complete' | 'next_day', netBalance: number }}
   */
  applyToRun(run) {
    const totalCost = this.getTotalExpenses();
    const payPower = this.isPaid('power');
    const payFood = this.isPaid('food');
    const payCoffee = this.hasExpense('coffee') ? this.isPaid('coffee') : true;

    run.balance = Number((run.balance - totalCost).toFixed(2));
    run.powerSkippedStreak = payPower ? 0 : run.powerSkippedStreak + 1;
    run.hungerDays = payFood ? 0 : run.hungerDays + 1;
    if (!payCoffee && run.day >= 2) {
      run.fatigueDays += 1;
    }

    this.expenses.forEach((exp) => {
      if (exp.onApply) {
        exp.onApply(run, exp.checked);
      }
    });

    if (run.balance < 0 || run.powerSkippedStreak >= 2) {
      return { outcome: 'bankrupt', netBalance: run.balance };
    }
    if (this.isCampaignFinalDay) {
      return { outcome: 'campaign_complete', netBalance: run.balance };
    }
    return { outcome: 'next_day', netBalance: run.balance };
  }
}
