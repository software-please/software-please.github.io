/* ============================================================================
   InspectController — Inspect & Polygraph Overlay, Two-Item Matching
   ============================================================================ */

import { el } from '../core/dom.js';
import { Audio } from '../core/audio.js';
import { t } from '../i18n/index.js';
import { Apps } from '../apps/index.js';

function isPolygraphTargetKey(key) {
  return key === 'dev_claim' || key === 'reverse_code' || key === 'sniffer' || key === 'hook';
}

function isInspectTargetKey(key) {
  return key !== 'dev_claim' && key !== 'reverse_code';
}

function pairMatches(pair, a, b) {
  return (pair[0] === a && pair[1] === b) || (pair[0] === b && pair[1] === a);
}

export class InspectController {
  constructor(desk) {
    this.desk = desk;
  }

  clearFirstInspect() {
    this.desk.firstInspect = null;
    this.desk.secondInspect = null;
    document.querySelectorAll('.inspectable.clue-selected').forEach(function (node) {
      node.classList.remove('clue-selected');
    });
  }

  updateBanner(text, tone) {
    const banner = el('inspect-banner');
    const txt = el('inspect-banner-text');
    if (!banner || !txt) return;
    this.desk.clearBannerTimer();
    txt.textContent = text || '';
    banner.classList.remove('is-conflict', 'is-clean');
    if (tone === 'conflict') banner.classList.add('is-conflict');
    if (tone === 'clean') banner.classList.add('is-clean');
    banner.classList.toggle('hidden', !this.desk.inspectMode && !this.desk.polygraphMode && !text);
  }

  togglePolygraphMode(force, quiet) {
    const next = typeof force === 'boolean' ? force : !this.desk.polygraphMode;
    const changed = next !== this.desk.polygraphMode;
    if (next && this.desk.inspectMode) {
      this.toggleInspectMode(false, true);
    }
    this.desk.polygraphMode = next;
    this.clearFirstInspect();
    this.desk.clearBannerTimer();

    const screen = el('screen-game');
    const mask = el('inspect-desk-mask');
    const surface = el('desk-surface');
    const left = el('left-column');
    const polyBtn = el('btn-polygraph');
    const exitBtn = el('btn-exit-inspect');
    const bannerRbBtn = el('btn-banner-rulebook');
    const bannerAskBtn = el('btn-banner-interrogate');

    if (screen) screen.classList.toggle('polygraph-mode-on', this.desk.polygraphMode);
    if (mask) mask.classList.toggle('hidden', !this.desk.inspectMode && !this.desk.polygraphMode);
    if (surface) surface.classList.toggle('polygraph-active', this.desk.polygraphMode);
    if (left) left.classList.toggle('polygraph-active', this.desk.polygraphMode);
    if (polyBtn) {
      polyBtn.classList.toggle('btn-polygraph-on', this.desk.polygraphMode);
      const label = polyBtn.querySelector('.intercom-label');
      if (label && !this.desk.inspectMode) {
        label.textContent = this.desk.polygraphMode ? t('game.hud.polygraph_active') : t('game.hud.polygraph');
      }
    }
    if (this.desk.polygraphMode) {
      if (exitBtn) exitBtn.textContent = t('desk.polygraph_mode.exit_btn');
      if (bannerRbBtn) bannerRbBtn.classList.add('hidden');
      if (bannerAskBtn) bannerAskBtn.classList.add('hidden');
      this.updateBanner(t('desk.polygraph_mode.banner_default'), '');
    } else if (!this.desk.inspectMode) {
      if (exitBtn) exitBtn.textContent = t('ui.hud.exit_inspect');
      if (bannerRbBtn) bannerRbBtn.classList.remove('hidden');
      const banner = el('inspect-banner');
      if (banner) {
        banner.classList.remove('is-conflict', 'is-clean');
        banner.classList.add('hidden');
      }
    }
    if (!quiet && changed) {
      Audio.play('click');
    }
    if (changed && this.desk.booth) {
      this.desk.booth.updatePolygraphButton();
    }
    return this.desk.polygraphMode;
  }

  toggleInspectMode(force, quiet) {
    const next = typeof force === 'boolean' ? force : !this.desk.inspectMode;
    const changed = next !== this.desk.inspectMode;
    if (next && this.desk.polygraphMode) {
      this.togglePolygraphMode(false, true);
    }
    this.desk.inspectMode = next;
    this.clearFirstInspect();
    this.desk.clearBannerTimer();

    const screen = el('screen-game');
    const mask = el('inspect-desk-mask');
    const surface = el('desk-surface');
    const left = el('left-column');
    const btn = el('btn-inspect-mode');
    const exitBtn = el('btn-exit-inspect');
    const bannerRbBtn = el('btn-banner-rulebook');
    const bannerAskBtn = el('btn-banner-interrogate');
    if (screen) screen.classList.toggle('inspect-mode-on', this.desk.inspectMode);
    if (mask) mask.classList.toggle('hidden', !this.desk.inspectMode && !this.desk.polygraphMode);
    if (surface) surface.classList.toggle('inspect-active', this.desk.inspectMode);
    if (left) left.classList.toggle('inspect-active', this.desk.inspectMode);
    if (btn) {
      btn.classList.toggle('btn-inspect-on', this.desk.inspectMode);
      const label = btn.querySelector('.intercom-label');
      if (label) {
        label.textContent = this.desk.inspectMode ? t('desk.inspect.btn_active') : t('desk.inspect.btn_idle');
      }
    }
    if (bannerAskBtn) {
      const hasPending = this.desk.interrogation.hasPendingInterrogation();
      bannerAskBtn.classList.toggle('hidden', !this.desk.inspectMode || !hasPending);
    }
    if (this.desk.inspectMode) {
      if (exitBtn) exitBtn.textContent = t('ui.hud.exit_inspect');
      if (bannerRbBtn) bannerRbBtn.classList.remove('hidden');
      this.updateBanner(t('desk.inspect.banner_default'), '');
    } else if (!this.desk.polygraphMode) {
      if (exitBtn) exitBtn.textContent = t('ui.hud.exit_inspect');
      if (bannerRbBtn) bannerRbBtn.classList.remove('hidden');
      const banner = el('inspect-banner');
      if (banner) {
        banner.classList.remove('is-conflict', 'is-clean');
        banner.classList.add('hidden');
      }
    }
    if (!quiet && changed) {
      Audio.play('click');
    }
    return this.desk.inspectMode;
  }

  flagMatchedKey(key) {
    this.desk.flaggedKeys[key] = true;
    document.querySelectorAll('.inspectable[data-inspect-key="' + key + '"]').forEach(function (node) {
      node.classList.remove('clue-clean', 'clue-selected');
      node.classList.add('clue-flagged');
    });
  }

  bindInspectables() {
    document.addEventListener('click', (e) => {
      if ((!this.desk.inspectMode && !this.desk.polygraphMode) || !this.desk.currentCase || this.desk.returning) return;
      const target = e.target.closest('.inspectable');
      if (!target) return;
      const key = target.getAttribute('data-inspect-key');
      if (!key) return;
      if (this.desk.inspectMode && !isInspectTargetKey(key)) return;
      if (this.desk.polygraphMode && !isPolygraphTargetKey(key)) return;
      e.stopPropagation();

      const label = target.getAttribute('data-inspect-label') || key;

      if (this.desk.secondInspect) {
        this.clearFirstInspect();
        Audio.play('click');
        this.updateBanner(
          this.desk.polygraphMode ? t('desk.polygraph_mode.banner_default') : t('desk.inspect.banner_default'),
          ''
        );
        return;
      }

      if (!this.desk.firstInspect) {
        this.desk.firstInspect = { key, label, el: target };
        target.classList.add('clue-selected');
        Audio.play('inspect');
        this.updateBanner(
          this.desk.polygraphMode
            ? t('desk.polygraph_mode.first_selected', { label })
            : t('desk.inspect.first_selected', { label }),
          ''
        );
        return;
      }

      if (this.desk.firstInspect.key === key) {
        this.clearFirstInspect();
        Audio.play('click');
        this.updateBanner(
          this.desk.polygraphMode ? t('desk.polygraph_mode.banner_default') : t('desk.inspect.banner_default'),
          ''
        );
        return;
      }

      const first = this.desk.firstInspect;
      const exposed = this.desk.emulator.isRogueExposed();

      if (this.desk.polygraphMode) {
        const isCodeClaimPair = pairMatches(['reverse_code', 'dev_claim'], first.key, key);
        const isRuntimeClaimPair =
          pairMatches(['sniffer', 'dev_claim'], first.key, key) ||
          pairMatches(['hook', 'dev_claim'], first.key, key);

        if (isCodeClaimPair || (isRuntimeClaimPair && this.desk.currentDay >= 4 && exposed)) {
          const audit = Apps.getReverseAudit(this.desk.currentCase);
          const claimEl = first.key === 'dev_claim' ? first.el : (key === 'dev_claim' ? target : null);
          const evidenceKey = first.key === 'dev_claim' ? key : first.key;
          const claimIsHonest = !!(claimEl && claimEl.getAttribute('data-claim-honest') === 'true');
          const caughtLying = !!(!claimIsHonest && audit && audit.isLying && !this.desk.currentCase.isFinalChoice);

          if (caughtLying) {
            this.clearFirstInspect();
            if (claimEl) {
              claimEl.classList.remove('clue-clean', 'clue-selected');
              claimEl.classList.add('clue-flagged');
            }
            this.flagMatchedKey(evidenceKey);
            Audio.play('polygraph_lie');
            this.desk.tools.updateReverserUI(audit, 'lying');
            const lieReason = (audit && audit.decompiledSummary) || t('desk.polygraph_mode.reverse_lying_default');
            this.updateBanner(t('desk.polygraph_mode.reverse_lying', { reason: lieReason }), 'conflict');
            this.desk.interrogation.onReverseCompareResult(true, audit);
          } else {
            this.desk.secondInspect = { key, label, el: target };
            target.classList.add('clue-selected');
            Audio.play('polygraph_pass');
            this.desk.tools.updateReverserUI(audit, 'consistent');
            this.updateBanner(t('desk.polygraph_mode.reverse_clean'), 'clean');
            this.desk.interrogation.onReverseCompareResult(false, audit);
          }
          return;
        }

        this.desk.secondInspect = { key, label, el: target };
        target.classList.add('clue-selected');
        Audio.play('no_conflict');
        this.updateBanner(
          isRuntimeClaimPair
            ? ((this.desk.currentCase.reverseBlocked || this.desk.currentCase.isQuickApp)
                ? t('desk.polygraph_mode.need_emulator_proof')
                : t('desk.polygraph_mode.need_reverse_code'))
            : t('desk.polygraph_mode.need_dev_claim'),
          'clean'
        );
        return;
      }

      const conflicts = Array.isArray(this.desk.currentCase.conflicts) ? this.desk.currentCase.conflicts : [];
      let matched = null;

      conflicts.forEach((cf) => {
        const hit = (cf.pairs || []).some((pair) => {
          if (this.desk.currentCase.isQuickApp && (pair[0] === 'rule_R8' || pair[1] === 'rule_R8' || pair[0] === 'rule_R9' || pair[1] === 'rule_R9')) {
            return false;
          }
          return pairMatches(pair, first.key, key);
        });
        if (!hit) return;
        if (!cf.requiresPhoneExposed || exposed) {
          if (!matched) matched = cf;
        }
      });

      const bannerAskBtn = el('btn-banner-interrogate');
      const isPermRulePair =
        (first.key === 'rule_R7' && key.indexOf('perm_') === 0) ||
        (key === 'rule_R7' && first.key.indexOf('perm_') === 0);

      if (isPermRulePair && this.desk.currentCase.isQuickApp) {
        const permKey = first.key.indexOf('perm_') === 0 ? first.key : key;
        const permLabel = first.key === permKey ? first.label : label;
        this.desk.secondInspect = { key, label, el: target };
        target.classList.add('clue-selected');
        Audio.play('no_conflict');
        this.updateBanner(t('desk.inspect.quick_app_exempt', { label: permLabel }), 'clean');
        return;
      }

      const isR4Pair =
        (first.key === 'rule_R4' && key.indexOf('perm_') === 0) ||
        (key === 'rule_R4' && first.key.indexOf('perm_') === 0);

      if (isR4Pair) {
        const permKey = first.key.indexOf('perm_') === 0 ? first.key : key;
        const permLabel = first.key === permKey ? first.label : label;
        const clueObj = this.desk.currentCase.inspectClues && this.desk.currentCase.inspectClues[permKey];
        const clueExcuse = clueObj && clueObj.excuse;
        const cleanPerm = permLabel.replace(/^(?:权限：|Perm:\s*)/, '');
        const isHonestPerm = !matched && !(clueObj && clueObj.isViolation === true);

        const suspectConflict = matched
          ? Object.assign({}, matched, {
              isSuspiciousR4: true,
              isHonestClaim: !!matched.isHonestClaim
            })
          : {
              id: 'r4_suspect_' + permKey,
              isSuspiciousR4: true,
              isHonestClaim: isHonestPerm,
              summary: t('desk.inspect.r4_summary', { label: permLabel }),
              question: t('desk.inspect.r4_question', { perm: cleanPerm }),
              excuse: clueExcuse || t('desk.inspect.r4_default_excuse', { name: this.desk.currentCase.name })
            };

        this.clearFirstInspect();
        this.flagMatchedKey(first.key);
        this.flagMatchedKey(key);
        Audio.play('discrepancy');
        const alreadyAsked = this.desk.interrogation.isConflictInterrogated(suspectConflict.id);
        this.desk.interrogation.onConflictDetected(suspectConflict);
        if (bannerAskBtn) bannerAskBtn.classList.toggle('hidden', alreadyAsked);
        this.updateBanner(
          t('desk.inspect.r4_banner', {
            label: permLabel,
            suffix: alreadyAsked ? t('desk.inspect.asked_suffix') : t('desk.inspect.r4_ask_suffix')
          }),
          'conflict'
        );
        return;
      }

      if (matched) {
        this.clearFirstInspect();
        this.flagMatchedKey(first.key);
        this.flagMatchedKey(key);
        Audio.play('discrepancy');
        const alreadyAsked = this.desk.interrogation.isConflictInterrogated(matched.id);
        this.desk.interrogation.onConflictDetected(matched);
        if (bannerAskBtn) bannerAskBtn.classList.toggle('hidden', alreadyAsked);
        this.updateBanner(
          t('desk.inspect.conflict_banner', {
            summary: matched.summary,
            suffix: alreadyAsked ? t('desk.inspect.asked_suffix') : t('desk.inspect.ask_suffix')
          }),
          'conflict'
        );
        return;
      }

      if (bannerAskBtn) {
        bannerAskBtn.classList.toggle('hidden', !this.desk.interrogation.hasPendingInterrogation());
      }

      this.desk.secondInspect = { key, label, el: target };
      target.classList.add('clue-selected');

      Audio.play('no_conflict');
      this.updateBanner(
        t('desk.inspect.no_conflict', { first: first.label, second: label }),
        'clean'
      );
    });
  }

  bindControls() {
    const exitInspectBtn = el('btn-exit-inspect');
    if (exitInspectBtn) {
      exitInspectBtn.addEventListener('click', () => {
        if (this.desk.polygraphMode) {
          this.togglePolygraphMode(false);
        } else {
          this.toggleInspectMode(false);
        }
      });
    }

    const bannerRbBtn = el('btn-banner-rulebook');
    if (bannerRbBtn) {
      bannerRbBtn.addEventListener('click', () => this.desk.layout.toggleRulebook());
    }

    const bannerAskBtn = el('btn-banner-interrogate');
    if (bannerAskBtn) {
      bannerAskBtn.addEventListener('click', () => this.desk.interrogation.interrogate());
    }

    const deskMask = el('inspect-desk-mask');
    if (deskMask) {
      deskMask.addEventListener('click', () => {
        if ((!this.desk.inspectMode && !this.desk.polygraphMode) || (!this.desk.firstInspect && !this.desk.secondInspect)) return;
        this.clearFirstInspect();
        Audio.play('click');
        this.updateBanner(
          this.desk.polygraphMode ? t('desk.polygraph_mode.banner_default') : t('desk.inspect.banner_default'),
          ''
        );
      });
    }
  }
}
