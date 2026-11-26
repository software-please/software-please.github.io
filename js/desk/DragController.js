/* ============================================================================
   DragController — Document Dragging & Material Chip Drop Targets
   ============================================================================ */

import { el, rectsOverlap, pointInRect } from '../core/dom.js';
import { Audio } from '../core/audio.js';
import { t } from '../i18n/index.js';
import { getViewportScale } from '../core/viewport.js';

export class DragController {
  constructor(desk) {
    this.desk = desk;
  }

  attachDocDrag(docEl) {
    if (!docEl || docEl.dataset.dragBound === '1') return;
    docEl.dataset.dragBound = '1';

    docEl.addEventListener('pointerdown', () => {
      if (!this.desk.returning) this.desk.layout.bringToFront(docEl);
    });

    docEl.addEventListener('pointerdown', (e) => {
      if (e.button !== 0 || this.desk.returning) return;
      const isCitation = docEl.classList.contains('citation-doc');
      const onHandle = !!e.target.closest('.doc-drag-handle');
      const isOverlayActive = this.desk.inspectMode || this.desk.polygraphMode;
      const allowBodyDrag =
        (isCitation && !isOverlayActive) ||
        (docEl.id === 'doc-submission' && !!this.desk.activeStamp && !isOverlayActive);

      if (!onHandle && !allowBodyDrag) return;
      if (e.target.closest('button')) return;

      e.preventDefault();
      this.desk.layout.bringToFront(docEl);
      Audio.play('paper');

      const startX = e.clientX;
      const startY = e.clientY;
      const canCrossReturn = docEl.id === 'doc-submission' && !!this.desk.activeStamp;

      if (canCrossReturn) {
        const scale = getViewportScale();
        const rect = docEl.getBoundingClientRect();
        const appEl = el('app');
        const appRect = appEl ? appEl.getBoundingClientRect() : { left: 0, top: 0 };
        const initLeft = (rect.left - appRect.left) / scale;
        const initTop = (rect.top - appRect.top) / scale;
        const boothWin = el('booth-window-panel');
        docEl.style.width = (docEl.offsetWidth || Math.round(rect.width / scale)) + 'px';
        docEl.style.left = initLeft + 'px';
        docEl.style.top = initTop + 'px';
        docEl.classList.add('doc-floating-return');
        if (boothWin) boothWin.classList.add('drop-ready');

        const onFloatMove = (ev) => {
          const dx = (ev.clientX - startX) / scale;
          const dy = (ev.clientY - startY) / scale;
          docEl.style.left = initLeft + dx + 'px';
          docEl.style.top = initTop + dy + 'px';
          if (boothWin) {
            const over = this.desk.stamps.isOverWindow(ev.clientX, ev.clientY, docEl.getBoundingClientRect());
            boothWin.classList.toggle('drop-hover', over);
          }
        };

        const onFloatUp = (ev) => {
          document.removeEventListener('pointermove', onFloatMove);
          document.removeEventListener('pointerup', onFloatUp);
          document.removeEventListener('pointercancel', onFloatUp);
          if (boothWin) boothWin.classList.remove('drop-hover');

          const finalRect = docEl.getBoundingClientRect();
          const over = this.desk.stamps.isOverWindow(ev.clientX, ev.clientY, finalRect);
          if (over) {
            this.desk.stamps.returnSubmissionToWindow();
            return;
          }

          const surface = el('desk-surface');
          if (surface) {
            const sr = surface.getBoundingClientRect();
            docEl.classList.remove('doc-floating-return');
            docEl.style.width = '';
            docEl.style.left = ((finalRect.left - sr.left) / scale) + 'px';
            docEl.style.top = ((finalRect.top - sr.top) / scale) + 'px';
            this.desk.layout.clampDocPosition(docEl);
          }
        };

        document.addEventListener('pointermove', onFloatMove);
        document.addEventListener('pointerup', onFloatUp);
        document.addEventListener('pointercancel', onFloatUp);
        return;
      }

      const scale = getViewportScale();
      const origLeft = parseFloat(docEl.style.left) || 12;
      const origTop = parseFloat(docEl.style.top) || 12;

      const onMove = (ev) => {
        const dx = (ev.clientX - startX) / scale;
        const dy = (ev.clientY - startY) / scale;
        docEl.style.left = origLeft + dx + 'px';
        docEl.style.top = origTop + dy + 'px';
        this.desk.layout.clampDocPosition(docEl);
        if (docEl.id === 'doc-submission') {
          this.desk.stamps.updateUnderStampVisual();
        }
      };

      const onUp = () => {
        document.removeEventListener('pointermove', onMove);
        document.removeEventListener('pointerup', onUp);
        document.removeEventListener('pointercancel', onUp);
        document.removeEventListener('pointercancel', onUp);
        if (docEl.id === 'doc-submission') {
          this.desk.stamps.updateUnderStampVisual();
        }
      };

      document.addEventListener('pointermove', onMove);
      document.addEventListener('pointerup', onUp);
      document.addEventListener('pointercancel', onUp);
      document.addEventListener('pointercancel', onUp);
    });
  }

  bindDocDragging() {
    document.querySelectorAll('.desk-doc').forEach((docEl) => this.attachDocDrag(docEl));
  }

  bindMaterialDragging() {
    const list = el('booth-material-list');
    if (!list) return;

    list.addEventListener('pointerdown', (e) => {
      if (e.button !== 0 || !this.desk.currentCase || this.desk.returning || this.desk.inspectMode || this.desk.polygraphMode || this.desk.isLockedByGame()) return;
      const chip = e.target.closest('.material-chip[data-material]');
      if (!chip) return;
      e.preventDefault();

      const matType = chip.getAttribute('data-material');
      const startX = e.clientX;
      const startY = e.clientY;
      const chipRect = chip.getBoundingClientRect();
      const offsetX = startX - chipRect.left;
      const offsetY = startY - chipRect.top;
      let moved = false;
      let ghost = null;

      function getTargetRectWithMargin(id, pad) {
        const node = el(id);
        if (!node || node.classList.contains('hidden')) return null;
        const r = node.getBoundingClientRect();
        return {
          left: r.left - pad,
          right: r.right + pad,
          top: r.top - pad,
          bottom: r.bottom + pad
        };
      }

      function checkOverDesk(ev) {
        const surface = el('desk-surface');
        const rightCol = el('right-column');
        const sr = surface ? surface.getBoundingClientRect() : null;
        const rcr = rightCol ? rightCol.getBoundingClientRect() : null;
        const gr = ghost ? ghost.getBoundingClientRect() : null;
        return pointInRect(ev.clientX, ev.clientY, sr) ||
               pointInRect(ev.clientX, ev.clientY, rcr) ||
               (gr && sr && rectsOverlap(gr, sr, 10));
      }

      const checkOverTool = (ev, minDay, docId, pad) => {
        if (this.desk.currentDay < minDay) return false;
        const tr = getTargetRectWithMargin(docId, pad);
        if (!tr) return false;
        const gr = ghost ? ghost.getBoundingClientRect() : null;
        return pointInRect(ev.clientX, ev.clientY, tr) || (gr && rectsOverlap(gr, tr, 6));
      };

      const onMove = (ev) => {
        if (Math.hypot(ev.clientX - startX, ev.clientY - startY) > 5 && !moved) {
          moved = true;
          ghost = document.createElement('div');
          ghost.className = 'material-drag-ghost';
          ghost.innerHTML = matType === 'submission'
            ? '<span>📋</span><span>' + t('desk.drag.ghost_submission') + '</span>'
            : '<span>📦</span><span>' + t('desk.drag.ghost_apk') + '</span>';
          document.body.appendChild(ghost);
        }
        if (!ghost) return;
        ghost.style.left = (ev.clientX - offsetX) + 'px';
        ghost.style.top = (ev.clientY - offsetY) + 'px';

        if (matType === 'submission' && !this.desk.submissionOnDesk) {
          const surface = el('desk-surface');
          if (surface) surface.classList.toggle('material-drop-target', checkOverDesk(ev));
        } else if (matType === 'apk') {
          const apkInstalledNow = this.desk.emulator.isInstalled();
          const analyzer = el('desk-analyzer');
          const phoneDoc = el('doc-phone');
          const reverser = el('desk-reverser');
          const day = this.desk.currentDay;
          if (analyzer) {
            analyzer.classList.toggle(
              'drop-hover',
              day >= 2 && !this.desk.apkAnalyzed && !this.desk.apkAnalyzing && checkOverTool(ev, 2, 'desk-analyzer', 16)
            );
          }
          if (phoneDoc) {
            phoneDoc.classList.toggle(
              'drop-hover',
              day >= 3 && !apkInstalledNow && checkOverTool(ev, 3, 'doc-phone', 14)
            );
          }
          if (reverser) {
            reverser.classList.toggle(
              'drop-hover',
              day >= 3 && !this.desk.apkReversed && !this.desk.apkReversing && checkOverTool(ev, 3, 'desk-reverser', 14)
            );
          }
        }
      };

      const onUp = (ev) => {
        document.removeEventListener('pointermove', onMove);
        document.removeEventListener('pointerup', onUp);
        document.removeEventListener('pointercancel', onUp);
        const surface = el('desk-surface');
        const analyzer = el('desk-analyzer');
        const phoneDoc = el('doc-phone');
        const reverser = el('desk-reverser');
        if (surface) surface.classList.remove('material-drop-target');
        if (analyzer) analyzer.classList.remove('drop-hover');
        if (phoneDoc) phoneDoc.classList.remove('drop-hover');
        if (reverser) reverser.classList.remove('drop-hover');

        const droppedDesk = moved && checkOverDesk(ev);
        const droppedAnalyzer = moved && checkOverTool(ev, 2, 'desk-analyzer', 16);
        const droppedPhone = moved && checkOverTool(ev, 3, 'doc-phone', 14);
        const droppedReverser = moved && checkOverTool(ev, 3, 'desk-reverser', 14);
        if (ghost && ghost.parentNode) ghost.parentNode.removeChild(ghost);

        const day = this.desk.currentDay;

        if (matType === 'submission') {
          if (this.desk.submissionOnDesk) {
            const subDoc = el('doc-submission');
            if (subDoc) {
              subDoc.classList.remove('hidden');
              this.desk.layout.bringToFront(subDoc);
              Audio.play('paper');
            }
            return;
          }
          if (droppedDesk && surface) {
            const sr = surface.getBoundingClientRect();
            const subDoc = el('doc-submission');
            if (subDoc) {
              subDoc.classList.remove('hidden', 'doc-floating-return', 'sliding-into-window', 'doc-pop-in');
              void subDoc.offsetWidth;
              subDoc.classList.add('doc-pop-in');
              const scale = getViewportScale();
              const docW = subDoc.offsetWidth || 340;
              subDoc.style.left = Math.round((ev.clientX - sr.left) / scale - docW / 2) + 'px';
              subDoc.style.top = Math.round((ev.clientY - sr.top) / scale - 22) + 'px';
              this.desk.layout.bringToFront(subDoc);
              this.desk.layout.clampDocPosition(subDoc);
              this.desk.submissionOnDesk = true;
              this.desk.stamps.updateUnderStampVisual();
              this.desk.tools.renderMaterialList();
              Audio.play('paper');
            }
          } else {
            chip.classList.remove('shake-nudge');
            void chip.offsetWidth;
            chip.classList.add('shake-nudge');
            const hint = el('material-list-hint');
            if (hint) hint.textContent = t('desk.drag.hint_drop_desk');
            Audio.play('no_conflict');
          }
          return;
        }

        if (matType === 'apk') {
          if (day < 2) {
            const hint = el('material-list-hint');
            if (hint) hint.textContent = t('desk.drag.hint_no_analyzer');
            chip.classList.remove('shake-nudge');
            void chip.offsetWidth;
            chip.classList.add('shake-nudge');
            Audio.play('no_conflict');
            return;
          }
          const apkInstalledNow = this.desk.emulator.isInstalled();
          if (day >= 3 && droppedPhone) {
            if (!apkInstalledNow) {
              this.desk.emulator.installCurrentApk();
              this.desk.tools.renderMaterialList();
            }
            if (phoneDoc) this.desk.layout.bringToFront(phoneDoc);
            return;
          }
          if (day >= 3 && droppedReverser) {
            if (!this.desk.apkReversed && !this.desk.apkReversing) {
              this.desk.tools.reverseCurrentApk();
            }
            if (reverser) this.desk.layout.bringToFront(reverser);
            return;
          }
          if (droppedAnalyzer) {
            if (!this.desk.apkAnalyzed && !this.desk.apkAnalyzing) {
              this.desk.tools.analyzeCurrentApk();
            } else if (this.desk.apkAnalyzed) {
              const manDoc = el('doc-manifest');
              if (manDoc && !manDoc.classList.contains('hidden')) {
                this.desk.layout.bringToFront(manDoc);
                Audio.play('paper');
              }
            }
            return;
          }
          if (this.desk.apkAnalyzed && (day < 3 || (apkInstalledNow && this.desk.apkReversed))) {
            const manDoc = el('doc-manifest');
            if (manDoc && !manDoc.classList.contains('hidden')) {
              this.desk.layout.bringToFront(manDoc);
              Audio.play('paper');
            } else if (phoneDoc && !phoneDoc.classList.contains('hidden')) {
              this.desk.layout.bringToFront(phoneDoc);
            }
            return;
          }
          if (this.desk.apkAnalyzing || this.desk.apkReversing) return;
          const hint = el('material-list-hint');
          if (hint) {
            hint.textContent = day >= 3
              ? t('desk.drag.hint_drop_tools3')
              : t('desk.drag.hint_drop_analyzer2');
          }
          const shakeTarget = (day >= 3 && this.desk.apkAnalyzed && !apkInstalledNow)
            ? phoneDoc
            : ((day >= 3 && this.desk.apkAnalyzed && !this.desk.apkReversed) ? reverser : analyzer);
          if (shakeTarget) {
            shakeTarget.classList.remove('shake-warn');
            void shakeTarget.offsetWidth;
            shakeTarget.classList.add('shake-warn');
          }
          Audio.play('no_conflict');
        }
      };

      document.addEventListener('pointermove', onMove);
      document.addEventListener('pointerup', onUp);
      document.addEventListener('pointercancel', onUp);
    });
  }
}
