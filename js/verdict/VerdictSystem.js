/* ============================================================================
   VerdictSystem — Stamp Verdict Resolution, Bribes, Fines & Takeover Failure
   ============================================================================ */

import { Audio } from '../core/audio.js';
import { t } from '../i18n/index.js';
import { Subsystem } from '../core/Subsystem.js';

export class VerdictSystem extends Subsystem {
  constructor(kernel) {
    super(kernel);
    this.verdictTimer = null;

    this.campaign = null;
    this.shift = null;
    this.booth = null;
    this.desk = null;
    this.interrogation = null;
    this.whack = null;
    this.ending = null;
  }

  connect(kernel) {
    this.campaign = kernel.campaign;
    this.shift = kernel.shift;
    this.booth = kernel.booth;
    this.desk = kernel.desk;
    this.interrogation = kernel.interrogation;
    this.whack = kernel.whack;
    this.ending = kernel.ending;
  }

  clearTimer() {
    clearTimeout(this.verdictTimer);
    this.verdictTimer = null;
  }

  submitStamp(stampType) {
    const run = this.campaign.run;
    const session = this.shift.session;
    if (!session.currentCase || session.caseLocked) return;
    const c = session.currentCase;
    if (c.isFinaleStatsApp) {
      this.booth.setHint(t('game.shift.finale_stats_hint'));
      Audio.play('discrepancy');
      return;
    }
    const approved = stampType === 'approve';
    const level = this.campaign.getCurrentLevel();

    session.caseLocked = true;
    this.interrogation.clearTimers();
    session.interrogating = false;
    session.polygraphRunning = false;

    this.desk.toggleInspectMode(false, true);
    this.booth.setInspectEnabled(false);
    this.booth.updateActionButtons();

    if (c.isFinalChoice) {
      const reply = approved ? c.dialogue.onApprove : c.dialogue.onReject;
      this.booth.pushDialogue('dev', reply);
      this.booth.pushDialogue('auditor', approved ? t('game.shift.auditor_approve') : t('game.shift.auditor_reject'));
      Audio.play(approved ? 'hook_zap' : 'stamp');
      this.clearTimer();
      this.verdictTimer = setTimeout(() => {
        this.verdictTimer = null;
        this.ending.trigger(approved ? 'whistleblower' : 'obedient');
      }, 2200);
      return;
    }

    run.stats.totalReviewed += 1;

    if (c.isSupervisorBribe) {
      if (approved) {
        run.bribeAccepted = true;
        run.stats.conscience -= 1;
        session.bonusEarned += 5.0;
        run.balance += 5.0;
        Audio.play('bonus');
        this.booth.setHint(t('game.shift.bribe_reward'));
        this.booth.pushDialogue('dev', c.dialogue.onApprove);
      } else {
        run.bribeAccepted = false;
        run.stats.conscience += 1;
        run.stats.roguesCaught += 1;
        run.stats.correctCount += 1;
        session.rogueCount += 1;
        session.rogueEarned += 2.5;
        run.balance += 2.5;
        Audio.play('bonus');
        this.booth.setHint(t('game.shift.bribe_rejected'));
        this.booth.pushDialogue('dev', c.dialogue.onReject);
      }
    } else if (level.isCorpBribeCase(c) && approved) {
      run.corpBribeTriggered = true;
      run.corpBribeApprovedCount = (run.corpBribeApprovedCount || 0) + 1;
      run.stats.conscience -= 1;
      session.normalCount += 1;
      session.normalEarned += 1.0;
      run.balance += 1.0;
      const totalCorp = session.queue.filter((x) => level.isCorpBribeCase(x)).length;
      if (totalCorp > 0 && run.corpBribeApprovedCount >= totalCorp && !run.corpBribePaid) {
        run.corpBribePaid = true;
        const bonus = (level.corpBribe && level.corpBribe.bonus) || 50.0;
        session.bonusEarned += bonus;
        run.balance += bonus;
        Audio.play('bonus');
        this.booth.setHint(t('game.shift.corp_bribe_paid'));
      } else {
        this.booth.setHint(t('game.shift.normal_reward'));
        Audio.play('coin');
      }
      this.booth.pushDialogue('dev', c.dialogue.onApprove);
      this.booth.updateHud();
      this.clearTimer();
      this.verdictTimer = setTimeout(() => {
        this.verdictTimer = null;
        this.whack.start({
          appName: c.name,
          onComplete: (res) => {
            const added = res.citationsAdded || 0;
            for (let i = 0; i < added; i += 1) {
              session.citations += 1;
              const fine = session.citations >= 2 ? 3.0 : 0;
              if (fine > 0) {
                session.finesTotal += fine;
                run.balance -= fine;
              }
              this.desk.showCitationSlip(
                t('game.whack.citation_reason', { missed: res.missed, suppressed: res.suppressed }),
                fine,
                session.citations,
                c.name
              );
            }
            this.booth.setHint(
              added > 0
                ? t('game.whack.hint_citations', { citations: added })
                : t('game.whack.hint_clean', { suppressed: res.suppressed })
            );
            this.booth.updateHud();
            this.shift.scheduleNextOrEnd(1400);
          }
        });
      }, 850);
      return;
    } else {
      const isCorrect = approved === c.shouldApprove;
      const reply = approved ? c.dialogue.onApprove : c.dialogue.onReject;
      this.booth.pushDialogue('dev', reply);

      if (isCorrect) {
        run.stats.correctCount += 1;
        if (!approved && c.isRogue) {
          session.rogueCount += 1;
          session.rogueEarned += 2.5;
          run.balance += 2.5;
          run.stats.roguesCaught += 1;
          this.booth.setHint(t('game.shift.rogue_reward'));
          Audio.play('bonus');
        } else {
          session.normalCount += 1;
          session.normalEarned += 1.0;
          run.balance += 1.0;
          this.booth.setHint(t('game.shift.normal_reward'));
          Audio.play('coin');
        }
      } else {
        session.citations += 1;
        const fine = session.citations >= 2 ? 3.0 : 0;
        if (fine > 0) {
          session.finesTotal += fine;
          run.balance -= fine;
        }
        this.desk.showCitationSlip(c.violationSummary, fine, session.citations, c.name);
        this.booth.setHint(fine > 0 ? t('game.shift.fine_hint') : t('game.shift.warning_hint'));
      }
    }

    this.booth.updateHud();
    this.shift.scheduleNextOrEnd(1500);
  }

  handleTakeoverFailure(caseData) {
    const run = this.campaign.run;
    const session = this.shift.session;
    const target = caseData || session.currentCase;
    if (!session.currentCase || session.caseLocked || !target) return;

    session.caseLocked = true;
    this.interrogation.clearTimers();
    session.interrogating = false;
    session.polygraphRunning = false;

    this.desk.toggleInspectMode(false, true);
    this.desk.togglePolygraphMode(false, true);
    this.booth.setInspectEnabled(false);
    this.booth.updateActionButtons();

    this.desk.hideSubmissionDoc();
    run.stats.totalReviewed += 1;
    session.citations += 1;
    const fine = 5.0;
    session.finesTotal += fine;
    run.balance -= fine;

    this.desk.showCitationSlip(
      t('game.takeover.citation_reason', { name: target.name }),
      fine,
      session.citations,
      target.name
    );
    this.booth.setHint(t('game.takeover.fail_hint'));
    if (target.dialogue && target.dialogue.onApprove) {
      this.booth.pushDialogue('dev', target.dialogue.onApprove);
    }
    Audio.play('citation');
    this.booth.updateHud();
    this.shift.scheduleNextOrEnd(1600);
  }
}
