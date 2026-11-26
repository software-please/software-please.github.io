/* ============================================================================
   DayLevel Domain Object (Prop-Driven Level Configuration & Factory)
   ============================================================================ */

import { t, getRaw } from '../i18n/index.js';
import { Ledger } from '../ledger/Ledger.js';

export class DayLevel {
  /**
   * @param {object} props
   */
  constructor(props) {
    this.day = props.day;
    this.dateStr = props.dateStr;
    this.hasMemo = Boolean(props.hasMemo);
    this.isCampaignFinalDay = Boolean(props.isCampaignFinalDay);
    this.expenses = Array.isArray(props.expenses) ? props.expenses.slice() : [];
    this.statusRules = Array.isArray(props.statusRules) ? props.statusRules.slice() : [];
    this.clockSpeed = props.clockSpeed !== undefined ? props.clockSpeed : 1;
    this.newspaperVariant = props.newspaperVariant || null;
    this.corpBribe = props.corpBribe || null;
    this.features = Object.assign(
      {
        analyzer: this.day >= 2,
        reverser: this.day >= 3,
        emulator: this.day >= 3,
        polygraph: this.day >= 3,
        ban: this.day >= 3,
        envSwitcher: this.day >= 4,
        sensors: this.day >= 4,
        ageProfile: this.day >= 5,
        hookProbe: this.day >= 6
      },
      props.features || {}
    );
  }

  hasFeature(name) {
    return Boolean(this.features[name]);
  }

  getClockMultiplier(run) {
    if (typeof this.clockSpeed === 'function') {
      return this.clockSpeed(run) || 1;
    }
    return Number(this.clockSpeed) || 1;
  }

  isCorpBribeCase(caseData) {
    if (!this.corpBribe || !caseData || typeof caseData.pkg !== 'string') return false;
    return caseData.pkg.indexOf(this.corpBribe.pkgPrefix) === 0;
  }

  getNewspaper(run) {
    const prefix = 'days.' + this.day;
    const baseBody = getRaw(prefix + '.newspaper.body');
    const baseNews = {
      headline: t(prefix + '.newspaper.headline'),
      subhead: t(prefix + '.newspaper.subhead'),
      body: Array.isArray(baseBody) ? baseBody.slice() : [],
      ticker: t(prefix + '.newspaper.ticker')
    };
    const unlocksRaw = getRaw(prefix + '.unlocks');
    const unlocks = Array.isArray(unlocksRaw) ? unlocksRaw.slice() : [];

    let news = baseNews;
    let artOpts = {};

    if (this.newspaperVariant && typeof this.newspaperVariant.when === 'function' && this.newspaperVariant.when(run)) {
      const varKey = this.newspaperVariant.i18nKey || 'bribeNewspaper';
      const varBody = getRaw(prefix + '.' + varKey + '.body');
      if (Array.isArray(varBody) && varBody.length) {
        news = {
          headline: t(prefix + '.' + varKey + '.headline'),
          subhead: t(prefix + '.' + varKey + '.subhead'),
          body: varBody.slice(),
          ticker: t(prefix + '.' + varKey + '.ticker')
        };
        artOpts = Object.assign({}, this.newspaperVariant.artOpts || {});
      }
    }

    return {
      day: this.day,
      dateStr: this.dateStr,
      news,
      unlocks,
      artOpts
    };
  }

  getMemo() {
    if (!this.hasMemo) return null;
    const prefix = 'days.' + this.day;
    return {
      title: t(prefix + '.memo.title'),
      body: t(prefix + '.memo.body')
    };
  }

  /**
   * Build a Nightly Ledger instance from this level's expense/status props.
   * @param {import('../campaign/CampaignRun.js').CampaignRun} run
   * @param {import('../shift/ShiftSession.js').ShiftSession} session
   * @returns {Ledger}
   */
  buildLedger(run, session) {
    const incomeRows = [
      {
        id: 'normal',
        label: t('game.ledger.normal_row', { count: session.normalCount }),
        amount: session.normalEarned,
        sign: '+',
        tone: ''
      },
      {
        id: 'rogue',
        label: t('game.ledger.rogue_row', { count: session.rogueCount }),
        amount: session.rogueEarned,
        sign: '+',
        tone: 'plus'
      }
    ];

    if (session.bannedCount > 0) {
      incomeRows.push({
        id: 'ban',
        label: t('game.ledger.ban_row', { count: session.bannedCount }),
        amount: session.bannedEarned,
        sign: '+',
        tone: 'plus'
      });
    }

    if (session.bonusEarned > 0) {
      incomeRows.push({
        id: 'bonus',
        label: t('game.ledger.bonus_row'),
        amount: session.bonusEarned,
        sign: '+',
        tone: 'plus'
      });
    }

    incomeRows.push({
      id: 'fine',
      label: t('game.ledger.fine_row', { count: session.citations }),
      amount: session.finesTotal,
      sign: '-',
      tone: 'minus'
    });

    const activeExpenses = this.expenses
      .filter((prop) => (typeof prop.when === 'function' ? prop.when(run, session) : true))
      .map((prop) => ({
        id: prop.id,
        labelKey: prop.labelKey,
        cost: prop.cost,
        checked: prop.defaultChecked !== undefined ? Boolean(prop.defaultChecked) : true,
        forced: Boolean(prop.forced),
        onApply: prop.onApply
      }));

    return new Ledger({
      day: this.day,
      preBalance: run.balance,
      powerSkippedStreak: run.powerSkippedStreak,
      isCampaignFinalDay: this.isCampaignFinalDay,
      incomeRows,
      expenses: activeExpenses,
      statusRules: this.statusRules
    });
  }

  /** Produce legacy day config shape for backward-compatible Rules.getDayConfig(day). */
  toLegacyConfig() {
    const prefix = 'days.' + this.day;
    const body = getRaw(prefix + '.newspaper.body');
    const unlocks = getRaw(prefix + '.unlocks');
    const expenseMap = { power: 0, food: 0, coffee: 0 };
    this.expenses.forEach((exp) => {
      if (!exp.when) {
        expenseMap[exp.id] = exp.cost;
      }
    });

    const cfg = {
      day: this.day,
      dateStr: this.dateStr,
      title: t(prefix + '.title'),
      newspaper: {
        headline: t(prefix + '.newspaper.headline'),
        subhead: t(prefix + '.newspaper.subhead'),
        body: Array.isArray(body) ? body.slice() : [],
        ticker: t(prefix + '.newspaper.ticker')
      },
      unlocks: Array.isArray(unlocks) ? unlocks.slice() : [],
      expenses: expenseMap
    };

    const bribeBody = getRaw(prefix + '.bribeNewspaper.body');
    if (Array.isArray(bribeBody) && bribeBody.length) {
      cfg.bribeNewspaper = {
        headline: t(prefix + '.bribeNewspaper.headline'),
        subhead: t(prefix + '.bribeNewspaper.subhead'),
        body: bribeBody.slice(),
        ticker: t(prefix + '.bribeNewspaper.ticker')
      };
    }

    const memo = this.getMemo();
    if (memo) cfg.memo = memo;
    return cfg;
  }
}
