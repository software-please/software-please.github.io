/* ============================================================================
   InterrogationSystem — Conflict Interrogation, Polygraph & Direct Ban Flow
   ============================================================================ */

import { Audio } from '../core/audio.js';
import { t } from '../i18n/index.js';
import { Apps } from '../apps/index.js';
import { Subsystem } from '../core/Subsystem.js';

export class InterrogationSystem extends Subsystem {
  constructor(kernel) {
    super(kernel);
    this.interrogateTimer = null;

    this.campaign = null;
    this.shift = null;
    this.booth = null;
    this.desk = null;
    this.clock = null;
  }

  connect(kernel) {
    this.campaign = kernel.campaign;
    this.shift = kernel.shift;
    this.booth = kernel.booth;
    this.desk = kernel.desk;
    this.clock = kernel.clock;
  }

  clearTimers() {
    clearTimeout(this.interrogateTimer);
    this.interrogateTimer = null;
  }

  hasPendingInterrogation() {
    const session = this.shift.session;
    return !!(
      session.currentCase &&
      !session.caseLocked &&
      session.activeConflict &&
      !session.isConflictInterrogated(session.activeConflict.id)
    );
  }

  isConflictInterrogated(id) {
    return this.shift.session.isConflictInterrogated(id);
  }

  isConflictPolygraphEligible(conflict) {
    if (!conflict) return false;
    if (conflict.isSuspiciousR4) return true;
    const pairs = Array.isArray(conflict.pairs) ? conflict.pairs : [];
    const functionalKeys = {
      rule_R4: true,
      rule_R5: true,
      rule_R6: true,
      rule_R7: true,
      rule_R8: true,
      rule_R9: true,
      sniffer: true,
      hook: true
    };
    return pairs.some(function (pair) {
      return pair.some(function (k) {
        return !!functionalKeys[k] || (typeof k === 'string' && k.indexOf('perm_') === 0);
      });
    });
  }

  onConflictDetected(conflict) {
    const run = this.campaign.run;
    const session = this.shift.session;
    if (!session.currentCase || session.caseLocked) return;

    session.conflictFound = true;
    session.activeConflict = conflict;

    const alreadyAsked = session.isConflictInterrogated(conflict.id);
    const eligible = this.isConflictPolygraphEligible(conflict);
    if (alreadyAsked && eligible) {
      session.polygraphEligible = true;
    }
    if (!alreadyAsked) {
      this.booth.setHint(
        conflict.isSuspiciousR4
          ? t('game.interrogation.hint_suspicious_r4')
          : t('game.interrogation.hint_conflict')
      );
    } else if (!eligible) {
      this.booth.setHint(t('game.interrogation.hint_hard_rule'));
    } else if (run.day >= 3 && !session.polygraphTested) {
      this.booth.setHint(t('game.interrogation.hint_ready_polygraph'));
    }
    this.booth.updateActionButtons();
  }

  interrogate() {
    const run = this.campaign.run;
    const session = this.shift.session;
    if (!session.currentCase || session.caseLocked || session.interrogating || session.polygraphRunning) return;
    const conflict = session.activeConflict;
    if (!conflict || session.isConflictInterrogated(conflict.id)) return;

    this.desk.toggleInspectMode(false, true);
    this.desk.togglePolygraphMode(false, true);
    session.interrogating = true;
    this.booth.setInspectEnabled(false);
    this.booth.updateActionButtons();

    Audio.play('intercom');

    const questionText = conflict.question || t('game.interrogation.default_question');
    this.booth.setHint(t('game.interrogation.asking_hint'));
    this.booth.pushDialogue('auditor', questionText);

    clearTimeout(this.interrogateTimer);
    this.interrogateTimer = setTimeout(() => {
      this.interrogateTimer = null;
      session.interrogating = false;
      session.interrogated = true;
      session.interrogatedIds[conflict.id] = true;
      this.booth.setInspectEnabled(true);

      const audit = Apps.getReverseAudit(session.currentCase);
      const eligible = this.isConflictPolygraphEligible(conflict);
      if (eligible) {
        session.polygraphEligible = true;
      }

      this.booth.pushDialogue(
        'dev',
        conflict.excuse,
        (run.day >= 3 && eligible)
          ? {
              inspectKey: 'dev_claim',
              inspectLabel: t('game.booth.dev_claim_label'),
              isHonestClaim: !!conflict.isHonestClaim
            }
          : null
      );

      if (!eligible) {
        this.booth.setHint(t('game.interrogation.hint_hard_rule'));
      } else if (audit && audit.admitsViolation) {
        this.booth.setHint(t('game.interrogation.admit_hint'));
      } else if (run.day >= 3 && !session.polygraphTested) {
        this.booth.setHint(t('game.interrogation.reverse_hint'));
      } else {
        this.booth.setHint(t('game.interrogation.responded_hint'));
      }
      this.booth.updateActionButtons();
    }, 580);
  }

  togglePolygraph() {
    const run = this.campaign.run;
    const session = this.shift.session;
    if (run.day < 3 || !session.currentCase || session.caseLocked || session.interrogating || session.polygraphRunning) return;

    this.desk.togglePolygraphMode();
    this.booth.updatePolygraphButton();
  }

  executeDirectBan() {
    const run = this.campaign.run;
    const session = this.shift.session;
    if (!session.currentCase || session.currentCase.isFinalChoice) return;
    const c = session.currentCase;
    const poly = c.polygraph || {};

    this.desk.hideSubmissionDoc();
    this.booth.showBanShutter(c.developer);
    Audio.play('ban');

    if (c.isSupervisorBribe) {
      run.bribeAccepted = false;
      run.stats.conscience += 1;
    }

    run.stats.totalReviewed += 1;
    run.stats.correctCount += 1;
    run.stats.roguesCaught += 1;
    run.stats.bannedCount += 1;
    session.bannedCount += 1;
    session.bannedEarned += 5.0;
    run.balance += 5.0;

    this.booth.setHint(t('game.ban.success_hint'));
    this.booth.pushDialogue('dev', poly.banReaction || c.dialogue.onReject);
    this.booth.pushDialogue('auditor', t('game.ban.auditor_ban'));
    this.booth.updateHud();
    this.shift.scheduleNextOrEnd(1750);
  }

  attemptDirectBan() {
    const run = this.campaign.run;
    const session = this.shift.session;
    if (run.day < 3 || !session.currentCase || session.caseLocked || session.interrogating || session.polygraphRunning) return;
    const c = session.currentCase;
    if (c.isFinalChoice || c.isFinaleStatsApp) {
      this.booth.setHint(c.isFinaleStatsApp ? t('game.shift.finale_stats_hint') : t('game.ban.final_choice_guard'));
      return;
    }

    const poly = c.polygraph || {};
    const audit = Apps.getReverseAudit(c);
    const isLiarsCase = !!(audit ? audit.isLying : poly.isLying === true);
    const hasPolygraphProof = !!session.lieConfirmed;

    session.caseLocked = true;
    this.clearTimers();
    session.interrogating = false;
    session.polygraphRunning = false;
    this.desk.toggleInspectMode(false, true);
    this.desk.togglePolygraphMode(false, true);
    this.booth.setInspectEnabled(false);
    this.booth.updateActionButtons();

    if (isLiarsCase && hasPolygraphProof) {
      this.executeDirectBan();
      return;
    }

    this.desk.hideSubmissionDoc();
    run.stats.totalReviewed += 1;
    session.citations += 1;
    const fine = 5.0;
    session.finesTotal += fine;
    run.balance -= fine;
    const errReason = !hasPolygraphProof
      ? t('game.ban.err_no_polygraph')
      : ((audit && audit.admitsViolation)
          ? t('game.ban.err_admitted')
          : t('game.ban.err_honest'));
    this.desk.showCitationSlip(errReason, fine, session.citations, c.name);
    this.booth.setHint(t('game.ban.fine_hint'));
    this.booth.pushDialogue('dev', !hasPolygraphProof ? t('game.ban.no_proof_reply') : (poly.honestReply || t('game.ban.honest_reply')));
    this.booth.updateHud();
    this.shift.scheduleNextOrEnd(1500);
  }

  onPhoneRogueExposed(_reason) {
    if (!this.shift.session.currentCase) return;
    this.booth.updateBanButton();
  }

  onReverseCompareResult(isLying, _audit) {
    const session = this.shift.session;
    if (!session.currentCase || session.caseLocked) return;
    if (!session.polygraphTested) {
      this.clock.advance(5);
    }
    session.polygraphTested = true;
    if (isLying) {
      session.lieConfirmed = true;
      this.booth.setHint(t('game.reverse.lying_hint'));
    } else if (!session.lieConfirmed) {
      session.lieConfirmed = false;
      this.booth.setHint(t('game.reverse.consistent_hint'));
    }
    this.booth.updatePolygraphButton();
    this.booth.updateBanButton();
  }
}
