/* ============================================================================
   DeskToolsWidget — Material Tray, APK Static Analyzer & DEX Reverse Analyzer
   ============================================================================ */

import { el } from '../core/dom.js';
import { Audio } from '../core/audio.js';
import { t } from '../i18n/index.js';
import { Apps } from '../apps/index.js';

export class DeskToolsWidget {
  constructor(desk) {
    this.desk = desk;
  }

  getAnalyzerOutputSummary(day) {
    if (day >= 6) return t('desk.analyzer.sum_d6');
    if (day >= 5) return t('desk.analyzer.sum_d5');
    if (day >= 4) return t('desk.analyzer.sum_d4');
    if (day >= 3) return t('desk.analyzer.sum_d3');
    return t('desk.analyzer.sum_d2');
  }

  renderMaterialList() {
    const list = el('booth-material-list');
    const hint = el('material-list-hint');
    if (!list) return;

    if (!this.desk.currentCase) {
      if (hint) hint.textContent = t('desk.materials.waiting');
      list.innerHTML = '<div class="material-empty">' + t('desk.materials.empty') + '</div>';
      return;
    }

    const apkInstalled = this.desk.emulator.isInstalled();
    const day = this.desk.currentDay;

    if (hint) {
      if (!this.desk.submissionOnDesk) {
        hint.textContent = t('desk.materials.hint_drag_desk');
      } else if (day >= 3 && (!apkInstalled || !this.desk.apkAnalyzed || !this.desk.apkReversed)) {
        if (this.desk.apkAnalyzing) {
          hint.textContent = t('desk.materials.hint_analyzing');
        } else if (this.desk.apkReversing) {
          hint.textContent = t('desk.materials.hint_reversing');
        } else {
          hint.textContent = t('desk.materials.hint_drag_tools3');
        }
      } else if (day === 2 && !this.desk.apkAnalyzed) {
        hint.textContent = this.desk.apkAnalyzing ? t('desk.materials.hint_analyzing') : t('desk.materials.hint_drag_analyzer2');
      } else {
        hint.textContent = t('desk.materials.hint_ready');
      }
    }

    const subTag = this.desk.submissionOnDesk ? t('desk.materials.sub_used') : t('desk.materials.sub_todo');
    let apkTag = this.desk.currentCase.version || 'APK';
    if (this.desk.apkAnalyzing) {
      apkTag = t('desk.materials.apk_analyzing');
    } else if (this.desk.apkReversing) {
      apkTag = t('desk.materials.apk_reversing');
    } else if (day >= 3) {
      if (this.desk.apkAnalyzed && apkInstalled && this.desk.apkReversed) {
        apkTag = t('desk.materials.apk_done_all');
      } else if (!this.desk.apkAnalyzed && !apkInstalled && !this.desk.apkReversed) {
        apkTag = t('desk.materials.apk_todo_tools');
      } else {
        apkTag = t('desk.materials.apk_todo_rest');
      }
    } else if (day === 2) {
      apkTag = this.desk.apkAnalyzed ? t('desk.materials.apk_done_one') : t('desk.materials.apk_todo_analyzer');
    }

    const apkUsed = this.desk.apkAnalyzed && (day < 3 || (apkInstalled && this.desk.apkReversed));
    const apkTitle = day >= 3
      ? t('desk.materials.apk_title_d3')
      : (day === 2 ? t('desk.materials.apk_title_d2') : t('desk.materials.apk_title_d1'));

    list.innerHTML =
      '<div id="mat-submission" class="material-chip' + (this.desk.submissionOnDesk ? ' is-used' : '') + '" data-material="submission" title="' + t('desk.materials.sub_title') + '">' +
        '<span class="material-chip-icon">📋</span>' +
        '<span class="material-chip-info">' +
          '<span class="material-chip-name">' + t('desk.materials.sub_name') + '</span>' +
          '<span class="material-chip-tag">' + subTag + '</span>' +
        '</span>' +
      '</div>' +
      '<div id="mat-apk" class="material-chip' + (apkUsed ? ' is-used' : '') + '" data-material="apk" title="' + apkTitle + '">' +
        '<span class="material-chip-icon">📦</span>' +
        '<span class="material-chip-info">' +
          '<span class="material-chip-name">' + t('desk.materials.apk_name') + '</span>' +
          '<span class="material-chip-tag">' + apkTag + '</span>' +
        '</span>' +
      '</div>';
  }

  updateAnalyzerUI() {
    const analyzer = el('desk-analyzer');
    if (!analyzer) return;
    if (this.desk.currentDay < 2) {
      analyzer.classList.add('hidden');
      this.desk.layout.updateToolDockButton('desk-analyzer');
      return;
    }

    const statusTag = el('analyzer-status-tag');
    const slotText = el('analyzer-slot-text');
    const progress = el('analyzer-progress');
    const outHint = el('analyzer-output-hint');

    const isQuickApp = !!(this.desk.currentCase && this.desk.currentCase.isQuickApp);
    analyzer.classList.remove('is-scanning', 'is-done', 'is-blocked', 'drop-hover');
    if (progress) progress.classList.add('hidden');
    if (outHint) outHint.textContent = this.getAnalyzerOutputSummary(this.desk.currentDay);

    if (!this.desk.currentCase) {
      if (statusTag) statusTag.textContent = t('desk.analyzer.status_idle');
      if (slotText) slotText.textContent = t('desk.analyzer.slot_idle');
    } else if (this.desk.apkAnalyzing) {
      analyzer.classList.add('is-scanning');
      if (progress) progress.classList.remove('hidden');
      if (statusTag) statusTag.textContent = t('desk.analyzer.status_scanning');
      if (slotText) slotText.textContent = t('desk.analyzer.slot_scanning');
    } else if (this.desk.apkAnalyzed && isQuickApp) {
      analyzer.classList.add('is-blocked');
      if (statusTag) statusTag.textContent = t('desk.analyzer.status_quickapp');
      if (slotText) slotText.textContent = t('desk.analyzer.slot_quickapp');
      if (outHint) outHint.textContent = t('desk.analyzer.hint_quickapp');
    } else if (this.desk.apkAnalyzed) {
      analyzer.classList.add('is-done');
      if (statusTag) statusTag.textContent = t('desk.analyzer.status_done');
      if (slotText) {
        slotText.textContent = t('desk.analyzer.slot_done', {
          name: this.desk.currentCase.name,
          version: this.desk.currentCase.version
        });
      }
    } else {
      if (statusTag) statusTag.textContent = t('desk.analyzer.status_waiting');
      if (slotText) slotText.textContent = t('desk.analyzer.slot_waiting');
    }
  }

  updateReverserUI(audit, compareState) {
    const reverser = el('desk-reverser');
    if (!reverser) return;
    if (this.desk.currentDay < 3) {
      reverser.classList.add('hidden');
      this.desk.layout.updateToolDockButton('desk-reverser');
      return;
    }

    const statusTag = el('reverser-status-tag');
    const slotText = el('reverser-slot-text');
    const progress = el('reverser-progress');
    const codeWrap = el('reverser-inspect-wrap');
    const codeEl = el('reverser-code');
    const outHint = el('reverser-output-hint');

    reverser.classList.remove('is-scanning', 'is-done', 'is-danger', 'is-blocked', 'drop-hover');
    if (progress) progress.classList.add('hidden');
    if (outHint) outHint.textContent = t('desk.reverser.output_hint');

    if (!this.desk.currentCase) {
      if (statusTag) statusTag.textContent = t('desk.reverser.status_idle');
      if (slotText) slotText.textContent = t('desk.reverser.slot_idle');
      if (codeEl) codeEl.textContent = '';
      if (codeWrap) {
        codeWrap.classList.add('hidden');
        codeWrap.classList.remove('inspectable', 'clue-selected', 'clue-flagged', 'clue-clean');
      }
    } else if (this.desk.apkReversing) {
      reverser.classList.add('is-scanning');
      if (progress) progress.classList.remove('hidden');
      if (statusTag) statusTag.textContent = t('desk.reverser.status_scanning');
      if (slotText) slotText.textContent = t('desk.reverser.slot_scanning');
      if (codeWrap) {
        codeWrap.classList.add('hidden');
        codeWrap.classList.remove('inspectable');
      }
    } else if (this.desk.apkReversed) {
      const state = compareState || 'neutral';
      const isQuickApp = !!(this.desk.currentCase && this.desk.currentCase.isQuickApp);
      const blocked = !!(isQuickApp || this.desk.currentCase.reverseBlocked || (audit && audit.reverseBlocked));
      if (blocked) {
        if (state === 'lying') {
          reverser.classList.add('is-danger');
          if (statusTag) statusTag.textContent = t('desk.reverser.status_lying');
          if (slotText) slotText.textContent = t('desk.reverser.slot_lying');
          if (outHint) outHint.textContent = t('desk.reverser.hint_lying');
        } else {
          reverser.classList.add('is-blocked');
          if (statusTag) statusTag.textContent = t('desk.reverser.status_blocked');
          if (slotText) slotText.textContent = isQuickApp ? t('desk.reverser.slot_blocked_quickapp') : t('desk.reverser.slot_blocked');
          if (outHint) outHint.textContent = t('desk.reverser.hint_blocked');
        }
        if (codeEl) codeEl.textContent = '';
        if (codeWrap) {
          codeWrap.classList.add('hidden');
          codeWrap.classList.remove('inspectable', 'clue-selected', 'clue-flagged', 'clue-clean');
        }
        return;
      }
      if (state === 'lying') {
        reverser.classList.add('is-danger');
        if (statusTag) statusTag.textContent = t('desk.reverser.status_lying');
        if (slotText) slotText.textContent = t('desk.reverser.slot_lying');
        if (outHint) outHint.textContent = t('desk.reverser.hint_lying');
      } else if (state === 'consistent') {
        reverser.classList.add('is-done');
        if (statusTag) statusTag.textContent = t('desk.reverser.status_consistent');
        if (slotText) slotText.textContent = t('desk.reverser.slot_consistent');
        if (outHint) outHint.textContent = t('desk.reverser.hint_consistent');
      } else {
        reverser.classList.add('is-done');
        if (statusTag) statusTag.textContent = t('desk.reverser.status_done');
        if (slotText) slotText.textContent = t('desk.reverser.slot_done');
        if (outHint) outHint.textContent = t('desk.reverser.hint_done');
      }
      if (codeEl) {
        codeEl.textContent = (audit && audit.callTrace) || ('package ' + this.desk.currentCase.pkg + ';');
      }
      if (codeWrap) {
        codeWrap.classList.remove('hidden');
        codeWrap.classList.add('inspectable');
      }
    } else {
      if (statusTag) statusTag.textContent = t('desk.reverser.status_waiting');
      if (slotText) slotText.textContent = t('desk.reverser.slot_waiting');
      if (codeEl) codeEl.textContent = '';
      if (codeWrap) {
        codeWrap.classList.add('hidden');
        codeWrap.classList.remove('inspectable', 'clue-selected', 'clue-flagged', 'clue-clean');
      }
    }
  }

  reverseCurrentApk() {
    if (!this.desk.currentCase || this.desk.currentDay < 3 || this.desk.apkReversed || this.desk.apkReversing) return;
    this.desk.clearReverseTimer();
    this.desk.apkReversing = true;
    const targetCaseId = this.desk.currentCase.id;
    this.renderMaterialList();
    this.updateReverserUI();
    Audio.play('polygraph_scan');

    this.desk.reverseTimer = setTimeout(() => {
      this.desk.reverseTimer = null;
      if (!this.desk.currentCase || this.desk.currentCase.id !== targetCaseId) {
        this.desk.apkReversing = false;
        return;
      }
      this.desk.apkReversing = false;
      this.desk.apkReversed = true;
      const audit = Apps.getReverseAudit(this.desk.currentCase);
      const blocked = !!(this.desk.currentCase.isQuickApp || this.desk.currentCase.reverseBlocked || (audit && audit.reverseBlocked));
      this.updateReverserUI(audit);
      this.renderMaterialList();
      Audio.play(blocked ? 'tool_blocked' : 'analyzer_done');
    }, 360);
  }

  analyzeCurrentApk() {
    if (!this.desk.currentCase || this.desk.currentDay < 2 || this.desk.apkAnalyzed || this.desk.apkAnalyzing) return;
    this.desk.clearAnalyzeTimer();
    this.desk.apkAnalyzing = true;
    const targetCaseId = this.desk.currentCase.id;
    this.renderMaterialList();
    this.updateAnalyzerUI();
    Audio.play('analyzer_scan');

    this.desk.analyzeTimer = setTimeout(() => {
      this.desk.analyzeTimer = null;
      if (!this.desk.currentCase || this.desk.currentCase.id !== targetCaseId) {
        this.desk.apkAnalyzing = false;
        return;
      }
      this.desk.apkAnalyzing = false;
      this.desk.apkAnalyzed = true;

      if (this.desk.currentCase.isQuickApp) {
        this.updateAnalyzerUI();
        this.renderMaterialList();
        Audio.play('tool_blocked');
        return;
      }

      const surface = el('desk-surface');
      const w = surface ? surface.clientWidth : 700;
      const analyzer = el('desk-analyzer');
      const baseLeft = analyzer ? ((parseFloat(analyzer.style.left) || 14) + analyzer.offsetWidth + 14) : 272;
      const manifestX = Math.min(Math.max(20, baseLeft), Math.max(20, w - 300));

      this.desk.layout.revealDocAtDefaultLayout('doc-manifest', manifestX, 14, 38);
      this.updateAnalyzerUI();
      this.renderMaterialList();
      Audio.play('analyzer_done');
    }, 320);
  }
}
