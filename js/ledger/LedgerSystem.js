/* ============================================================================
   LedgerSystem — Nightly Settlement UI Driven by Prop-Configured Ledger Object
   ============================================================================ */

import { el } from '../core/dom.js';
import { Audio } from '../core/audio.js';
import { t } from '../i18n/index.js';
import { Subsystem } from '../core/Subsystem.js';

export class LedgerSystem extends Subsystem {
  constructor(kernel) {
    super(kernel);
    this.currentLedger = null;

    this.campaign = null;
    this.shift = null;
    this.screen = null;
    this.newspaper = null;
    this.ending = null;
  }

  connect(kernel) {
    this.campaign = kernel.campaign;
    this.shift = kernel.shift;
    this.screen = kernel.screen;
    this.newspaper = kernel.newspaper;
    this.ending = kernel.ending;
  }

  open() {
    const run = this.campaign.run;
    const session = this.shift.session;
    const level = this.campaign.getCurrentLevel();
    const ledger = level.buildLedger(run, session);
    this.currentLedger = ledger;

    el('ledger-day').textContent = t('game.ledger.title', { day: ledger.day });
    const rowsHtml = ledger.incomeRows
      .map(function (row) {
        const cls = 'ledger-row' + (row.tone ? ' ' + row.tone : '');
        return '<div class="' + cls + '"><span>' + row.label + '</span><strong>' + row.sign + '¥' + row.amount.toFixed(2) + '</strong></div>';
      })
      .join('');

    el('ledger-rows').innerHTML =
      rowsHtml +
      '<div class="ledger-row" style="border-top:1px dashed #444752;padding-top:6px;"><span>' +
      t('game.ledger.pre_balance') +
      '</span><strong>¥' +
      ledger.preBalance.toFixed(2) +
      '</strong></div>';

    const expBox = el('ledger-expenses');
    expBox.innerHTML = '';

    ledger.expenses.forEach((exp) => {
      const label = document.createElement('label');
      label.className = 'expense-toggle' + (exp.forced ? ' is-forced' : '');
      label.innerHTML =
        '<span><input type="checkbox" data-exp-id="' + exp.id + '" data-cost="' + exp.cost + '"' +
        (exp.checked ? ' checked' : '') + (exp.forced ? ' disabled' : '') + '>' + t(exp.labelKey) + '</span>' +
        '<strong>-¥' + exp.cost.toFixed(2) + '</strong>';
      const cb = label.querySelector('input[type="checkbox"]');
      if (cb) {
        cb.addEventListener('change', () => {
          Audio.play('click');
          ledger.setExpenseChecked(exp.id, cb.checked);
          this.renderSummary();
        });
      }
      expBox.appendChild(label);
    });

    this.renderSummary();
    this.screen.show('screen-ledger');
    Audio.play('ledger_open');
  }

  renderSummary() {
    const ledger = this.currentLedger;
    if (!ledger) return;

    const net = ledger.getNetBalance();
    const netEl = el('ledger-net');
    netEl.textContent = '¥' + net.toFixed(2);
    netEl.classList.toggle('negative', net < 0);

    el('ledger-self-status').textContent = t(ledger.getSelfStatusKey());
    el('ledger-extra-status').textContent = t(ledger.getPowerStatusKey());

    const warnKey = ledger.getWarningKey();
    el('ledger-warning').textContent = warnKey ? t(warnKey) : '';
  }

  confirm() {
    if (!this.currentLedger) return;
    Audio.play('cash_register');
    const run = this.campaign.run;
    const { outcome } = this.currentLedger.applyToRun(run);
    this.currentLedger = null;

    if (outcome === 'bankrupt') {
      this.ending.trigger('bankrupt');
      return;
    }
    if (outcome === 'campaign_complete') {
      this.ending.trigger('complete');
      return;
    }

    run.day += 1;
    this.campaign.saveCheckpoint();
    this.newspaper.open(run.day);
  }
}
