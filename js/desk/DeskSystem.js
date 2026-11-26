/* ============================================================================
   DeskSystem — Workbench Subsystem Facade & State Owner
   ============================================================================ */

import { el } from '../core/dom.js';
import { t } from '../i18n/index.js';
import { Art } from '../art/index.js';
import { Rules } from '../rules/index.js';
import { Subsystem } from '../core/Subsystem.js';
import { DeskLayout } from './DeskLayout.js';
import { RulebookWidget, RB_PAGE_SIZE } from './RulebookWidget.js';
import { DeskToolsWidget } from './DeskToolsWidget.js';
import { InspectController } from './InspectController.js';
import { StampController } from './StampController.js';
import { DragController } from './DragController.js';
import { CitationPrinter } from './CitationPrinter.js';

export class DeskSystem extends Subsystem {
  constructor(kernel) {
    super(kernel);
    this.topZ = 30;
    this.inspectMode = false;
    this.polygraphMode = false;
    this.firstInspect = null;
    this.secondInspect = null;
    this.flaggedKeys = {};
    this.bannerTimer = null;
    this.stampToastTimer = null;
    this.activeStamp = null; // null | 'approve' | 'reject'
    this.currentCase = null;
    this.currentDay = 1;
    this.currentRbPage = 0;
    this.returning = false;
    this.submissionOnDesk = false;
    this.apkAnalyzed = false;
    this.apkAnalyzing = false;
    this.analyzeTimer = null;
    this.apkReversed = false;
    this.apkReversing = false;
    this.reverseTimer = null;

    this.emulator = null;
    this.interrogation = null;
    this.verdict = null;
    this.booth = null;
    this.shift = null;

    this.layout = new DeskLayout(this);
    this.rulebook = new RulebookWidget(this);
    this.tools = new DeskToolsWidget(this);
    this.inspect = new InspectController(this);
    this.stamps = new StampController(this);
    this.drag = new DragController(this);
    this.citations = new CitationPrinter(this);
  }

  connect(kernel) {
    this.emulator = kernel.emulator;
    this.interrogation = kernel.interrogation;
    this.verdict = kernel.verdict;
    this.booth = kernel.booth;
    this.shift = kernel.shift;
  }

  init() {
    this.drag.bindDocDragging();
    this.drag.bindMaterialDragging();
    this.stamps.bindStamps();
    this.inspect.bindInspectables();
    this.rulebook.bindTabs();
    this.layout.bindDockControls();
    this.inspect.bindControls();
    this.stamps.bindWindowLedge();
  }

  isLockedByGame() {
    return !!(this.shift && this.shift.isCaseLocked());
  }

  clearAnalyzeTimer() {
    clearTimeout(this.analyzeTimer);
    this.analyzeTimer = null;
    this.apkAnalyzing = false;
  }

  clearReverseTimer() {
    clearTimeout(this.reverseTimer);
    this.reverseTimer = null;
    this.apkReversing = false;
  }

  clearBannerTimer() {
    clearTimeout(this.bannerTimer);
    this.bannerTimer = null;
  }

  clearStampToastTimer() {
    clearTimeout(this.stampToastTimer);
    this.stampToastTimer = null;
  }

  isInspectMode() {
    return this.inspectMode;
  }

  isPolygraphMode() {
    return this.polygraphMode;
  }

  isInspectionActive() {
    return this.inspectMode || this.polygraphMode;
  }

  toggleRulebook(force) {
    return this.layout.toggleRulebook(force);
  }

  openDoc(docId) {
    this.layout.openDoc(docId);
  }

  toggleInspectMode(force, quiet) {
    return this.inspect.toggleInspectMode(force, quiet);
  }

  togglePolygraphMode(force, quiet) {
    return this.inspect.togglePolygraphMode(force, quiet);
  }

  showCitationSlip(reason, fineAmount, citationNo, appName) {
    this.citations.showSlip(reason, fineAmount, citationNo, appName);
  }

  clearCitationSlips() {
    this.citations.clearAll();
  }

  hideSubmissionDoc() {
    this.stamps.clearStamp();
    this.clearAnalyzeTimer();
    this.clearReverseTimer();
    this.inspect.toggleInspectMode(false, true);
    this.inspect.togglePolygraphMode(false, true);
    ['doc-submission', 'doc-manifest', 'doc-phone'].forEach((id) => {
      if (id === 'doc-phone' && this.currentDay >= 3) return;
      const node = el(id);
      if (!node) return;
      node.classList.remove('doc-floating-return', 'sliding-into-window', 'doc-pop-in');
      node.classList.add('hidden');
      node.style.width = '';
    });
    this.submissionOnDesk = false;
    this.apkAnalyzed = false;
    this.apkReversed = false;
    this.tools.renderMaterialList();
    this.tools.updateAnalyzerUI();
    this.tools.updateReverserUI();
  }

  clearMaterials() {
    this.currentCase = null;
    this.hideSubmissionDoc();
  }

  resetForCase(caseData, day) {
    this.clearAnalyzeTimer();
    this.clearReverseTimer();
    this.currentCase = caseData;
    this.currentDay = day;
    this.returning = false;
    this.submissionOnDesk = false;
    this.apkAnalyzed = false;
    this.apkReversed = false;
    this.flaggedKeys = {};
    this.stamps.clearStamp();
    this.inspect.toggleInspectMode(false, true);
    this.inspect.togglePolygraphMode(false, true);

    if (!caseData) {
      this.citations.clearAll();
    } else {
      document.querySelectorAll('#desk-surface .citation-doc').forEach((docEl) => {
        this.layout.clampDocPosition(docEl);
      });
    }

    document.querySelectorAll('.inspectable').forEach(function (node) {
      node.classList.remove('clue-flagged', 'clue-clean', 'clue-selected');
    });

    const dayCfg = Rules.getDayConfig(day);
    const analyzer = el('desk-analyzer');
    if (analyzer) {
      if (day < 2) analyzer.classList.add('hidden');
      else if (!caseData) analyzer.classList.remove('hidden');
      analyzer.classList.remove('is-scanning', 'is-done', 'drop-hover', 'shake-warn');
    }

    const reverser = el('desk-reverser');
    if (reverser) {
      if (day < 3) reverser.classList.add('hidden');
      else if (!caseData) reverser.classList.remove('hidden');
      reverser.classList.remove('is-scanning', 'is-done', 'is-danger', 'drop-hover', 'shake-warn');
    }

    const phoneTitle = el('phone-doc-title');
    if (phoneTitle) {
      phoneTitle.textContent = day >= 4 ? t('desk.phone_title_pro') : t('desk.phone_title_basic');
    }

    ['doc-submission', 'doc-manifest', 'doc-phone'].forEach(function (id) {
      if (id === 'doc-phone' && day >= 3) return;
      const node = el(id);
      if (!node) return;
      node.classList.remove('doc-floating-return', 'sliding-into-window', 'doc-pop-in');
      node.classList.add('hidden');
      node.style.width = '';
    });

    const ensurePhoneWorkbenchVisible = () => {
      const phoneDoc = el('doc-phone');
      if (!phoneDoc || day < 3) return;
      if (!caseData) {
        phoneDoc.classList.remove('hidden', 'doc-floating-return', 'sliding-into-window');
      }
      if (!phoneDoc.classList.contains('hidden')) {
        if (!phoneDoc.style.left) {
          const surface = el('desk-surface');
          const w = surface ? surface.clientWidth : 700;
          const h = surface ? surface.clientHeight : 560;
          phoneDoc.style.left = Math.max(20, Math.floor(w * 0.22)) + 'px';
          phoneDoc.style.top = Math.max(70, h - 355) + 'px';
          phoneDoc.style.zIndex = '39';
        }
        this.layout.clampDocPosition(phoneDoc);
      }
      this.layout.updateAllToolDockButtons(day);
    };

    const sdkCell = el('sub-sdk-cell');
    if (sdkCell) sdkCell.classList.toggle('hidden', day < 3);

    if (dayCfg && dayCfg.memo) {
      el('memo-title').textContent = dayCfg.memo.title;
      el('memo-body').innerHTML = dayCfg.memo.body;
      el('doc-memo').classList.remove('hidden');
    } else {
      el('doc-memo').classList.add('hidden');
    }

    if (!caseData) {
      const unlockedRules = Rules.getRulesForDay(day);
      const newRuleIdx = unlockedRules.findIndex(function (r) {
        return r.unlockDay === day;
      });
      this.currentRbPage = newRuleIdx >= 0 ? Math.floor(newRuleIdx / RB_PAGE_SIZE) : 0;
      el('doc-rulebook').classList.remove('hidden');
      this.layout.updateRulebookButton(true);
      this.rulebook.render();
      this.tools.renderMaterialList();
      this.tools.updateAnalyzerUI();
      this.tools.updateReverserUI();
      this.layout.tidyDesk();
      ensurePhoneWorkbenchVisible();
      this.stamps.updateUnderStampVisual();
      return;
    }

    this.layout.updateRulebookButton(!el('doc-rulebook').classList.contains('hidden'));
    this.rulebook.render();
    this.tools.renderMaterialList();
    this.tools.updateAnalyzerUI();
    this.tools.updateReverserUI();

    el('sub-icon').innerHTML = Art.getAppIconSVG(caseData.icon);
    el('sub-name').textContent = caseData.name;
    el('sub-pkg').textContent = caseData.pkg;
    el('sub-pkg-badge').textContent = caseData.pkg;
    el('sub-version').textContent = caseData.version;
    el('sub-category').textContent = caseData.category;
    el('sub-dev').textContent = caseData.developer;
    el('sub-license').textContent = caseData.license;
    el('sub-sdk').textContent = caseData.adSdk;
    el('sub-desc').textContent = caseData.desc;

    const manifestList = el('manifest-list');
    manifestList.innerHTML = '';
    (caseData.permissions || []).forEach(function (perm, idx) {
      const li = document.createElement('li');
      li.className = 'manifest-item inspectable';
      li.setAttribute('data-inspect-key', 'perm_' + idx);
      li.setAttribute('data-inspect-label', t('desk.manifest.perm_label', { perm }));
      li.innerHTML = '<span class="perm-name">' + perm + '</span><span>' + t('desk.manifest.perm_declared') + '</span>';
      manifestList.appendChild(li);
    });

    const sdkBox = el('manifest-sdk-box');
    if (sdkBox) {
      sdkBox.classList.add('hidden');
      sdkBox.innerHTML = '';
    }

    const extraBox = el('manifest-extra-box');
    if (extraBox) {
      extraBox.innerHTML = '';
      extraBox.classList.add('hidden');
    }

    this.layout.tidyDesk();
    ensurePhoneWorkbenchVisible();
    this.stamps.updateUnderStampVisual();
  }
}
