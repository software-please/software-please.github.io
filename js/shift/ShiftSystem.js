/* ============================================================================
   ShiftSystem — Daily Shift Lifecycle & Cross-Subsystem Orchestration
   ============================================================================ */

import { el } from '../core/dom.js';
import { Audio } from '../core/audio.js';
import { t } from '../i18n/index.js';
import { Cases } from '../cases/index.js';
import { Subsystem } from '../core/Subsystem.js';
import { ShiftSession } from './ShiftSession.js';

export class ShiftSystem extends Subsystem {
  constructor(kernel) {
    super(kernel);
    this.session = new ShiftSession([]);
    this.nextTimer = null;

    this.campaign = null;
    this.clock = null;
    this.booth = null;
    this.desk = null;
    this.emulator = null;
    this.interrogation = null;
    this.verdict = null;
    this.newspaper = null;
    this.ledger = null;
    this.ending = null;
    this.whack = null;
    this.takeover = null;
    this.screen = null;
    this.intro = null;
  }

  connect(kernel) {
    this.campaign = kernel.campaign;
    this.clock = kernel.clock;
    this.booth = kernel.booth;
    this.desk = kernel.desk;
    this.emulator = kernel.emulator;
    this.interrogation = kernel.interrogation;
    this.verdict = kernel.verdict;
    this.newspaper = kernel.newspaper;
    this.ledger = kernel.ledger;
    this.ending = kernel.ending;
    this.whack = kernel.whack;
    this.takeover = kernel.takeover;
    this.screen = kernel.screen;
    this.intro = kernel.intro;
  }

  clearNextTimer() {
    clearTimeout(this.nextTimer);
    this.nextTimer = null;
  }

  isCaseLocked() {
    return this.session.isLocked();
  }

  startNewCampaign(startDay = 1) {
    const run = this.campaign.startNewRun(startDay);
    this.newspaper.open(run.day);
  }

  continueCampaign() {
    const run = this.campaign.restoreFromCheckpoint();
    this.newspaper.open(run.day);
  }

  startShift() {
    const run = this.campaign.run;
    this.clearNextTimer();
    this.verdict.clearTimer();
    this.interrogation.clearTimers();
    this.booth.clearDialogueTimers();

    this.session = new ShiftSession(Cases.getDayCases(run.day));

    this.screen.show('screen-game', { fade: true });
    this.booth.refreshMuteButton();
    this.booth.setAppIcon(null);
    this.booth.setHint(t('game.shift.start_hint'));
    this.booth.clearDialogue();
    this.booth.setNextEnabled(true);
    this.booth.setInspectEnabled(false);

    this.booth.resetOverlays();
    this.booth.updateActionButtons();
    this.desk.resetForCase(null, run.day);
    this.emulator.loadCase(null, run.day);
    this.booth.updateHud();
    this.clock.start();
  }

  callNextApplicant() {
    const run = this.campaign.run;
    const session = this.session;
    if (session.currentCase || session.shiftEnded) return;

    if (!session.hasMoreCases()) {
      this.finishShift();
      return;
    }

    session.index += 1;
    const c = session.queue[session.index];
    session.enterCase(c);

    Audio.play('bell');

    this.booth.resetOverlays();
    this.booth.setNextEnabled(false);
    this.booth.setInspectEnabled(true);
    this.booth.setAppIcon(c.icon);
    this.booth.setHint(
      c.isFinaleStatsApp
        ? t('game.shift.finale_stats_hint')
        : (c.isFinalChoice
          ? t('game.shift.final_case_hint')
          : t('game.shift.pay_hint'))
    );

    this.booth.clearDialogue();
    this.booth.pushDialogue('auditor', t('game.shift.auditor_next'));
    this.booth.scheduleGreeting(c.id, c.dialogue.greeting);

    this.booth.updateActionButtons();
    this.desk.resetForCase(c, run.day);
    this.emulator.loadCase(c, run.day);
    this.booth.updateHud();
  }

  scheduleNextOrEnd(delayMs) {
    this.clearNextTimer();
    this.nextTimer = setTimeout(() => {
      this.nextTimer = null;
      const session = this.session;
      this.booth.resetOverlays();
      if (session.citations >= 5) {
        this.ending.trigger('fired');
        return;
      }

      session.clearCurrentCase();
      this.booth.updateActionButtons();
      this.desk.clearMaterials();

      if (!session.hasMoreCases()) {
        this.booth.renderQueueBay();
        this.finishShift();
      } else {
        this.booth.renderQueueBay();
        this.booth.setNextEnabled(true);
        this.booth.setAppIcon(null);
        this.booth.setHint(t('game.shift.next_hint'));
      }
    }, delayMs);
  }

  finishShift() {
    this.clock.stop();
    this.session.shiftEnded = true;
    this.ledger.open();
  }

  abortActiveShift(opts = {}) {
    this.clock.stop();
    this.whack.stop();
    this.takeover.stop();
    this.clearNextTimer();
    this.verdict.clearTimer();
    this.interrogation.clearTimers();
    this.booth.clearDialogueTimers();
    this.intro.clearTimer();
    this.booth.resetOverlays();
    this.desk.toggleInspectMode(false, true);
    this.desk.togglePolygraphMode(false, true);
    this.desk.clearCitationSlips();
    if (!opts.keepFinaleFade) {
      const finaleModal = el('modal-finale-stats');
      if (finaleModal) {
        finaleModal.classList.add('hidden');
        finaleModal.classList.remove('is-entering', 'is-fading-out');
      }
    }
    this.emulator.loadCase(null, this.campaign.run.day);
  }

  returnToTitle() {
    this.abortActiveShift();
    this.screen.refreshTitle();
    this.screen.show('screen-title');
  }
}
