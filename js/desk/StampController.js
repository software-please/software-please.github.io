/* ============================================================================
   StampController — Approve/Reject Stamps & Push-to-Window Submission
   ============================================================================ */

import { el, rectsOverlap, pointInRect } from '../core/dom.js';
import { Audio } from '../core/audio.js';
import { t } from '../i18n/index.js';

export class StampController {
  constructor(desk) {
    this.desk = desk;
    this.shakeTimer = null;
  }

  triggerScreenShake() {
    const screenEl = el('screen-game');
    if (!screenEl) return;
    if (this.shakeTimer) {
      clearTimeout(this.shakeTimer);
      this.shakeTimer = null;
    }
    screenEl.classList.remove('is-stamp-shaking');
    void screenEl.offsetWidth;
    screenEl.classList.add('is-stamp-shaking');
    this.shakeTimer = setTimeout(() => {
      this.shakeTimer = null;
      screenEl.classList.remove('is-stamp-shaking');
    }, 260);
  }

  isOverWindow(clientX, clientY, docRect) {
    const win = el('booth-window-panel');
    if (!win) return false;
    const wr = win.getBoundingClientRect();
    const pointerInside = clientX >= wr.left && clientX <= wr.right && clientY >= wr.top && clientY <= wr.bottom;
    const cardOverlap = docRect && docRect.left < wr.right - 24 && docRect.bottom > wr.top;
    return !!(pointerInside || cardOverlap);
  }

  returnSubmissionToWindow() {
    if (!this.desk.activeStamp || !this.desk.currentCase || this.desk.returning) return;
    this.desk.returning = true;
    const subDoc = el('doc-submission');
    const win = el('booth-window-panel');
    const ledge = el('window-ledge');

    if (win) win.classList.remove('drop-ready', 'drop-hover');
    if (ledge) ledge.classList.remove('ledge-ready');
    Audio.play('paper');

    if (subDoc) {
      subDoc.classList.add('sliding-into-window');
    }

    const stampToSubmit = this.desk.activeStamp;
    setTimeout(() => {
      if (subDoc) {
        subDoc.classList.remove('doc-floating-return', 'sliding-into-window');
        subDoc.classList.add('hidden');
        subDoc.style.width = '';
      }
      this.desk.returning = false;
      this.desk.verdict.submitStamp(stampToSubmit);
    }, 185);
  }

  isSubmissionUnderStamp(stampEl) {
    const subDoc = el('doc-submission');
    if (!subDoc || subDoc.classList.contains('hidden')) return false;
    const subRect = subDoc.getBoundingClientRect();
    const targetRect = (stampEl || el('stamp-tray')).getBoundingClientRect();
    return rectsOverlap(targetRect, subRect, 12);
  }

  updateUnderStampVisual() {
    const tray = el('stamp-tray');
    const zone = el('stamp-zone');
    const under = !this.desk.activeStamp && !!this.desk.currentCase && (
      this.isSubmissionUnderStamp(el('stamp-approve')) ||
      this.isSubmissionUnderStamp(el('stamp-reject'))
    );
    if (tray) tray.classList.toggle('has-doc-under', under);
    if (zone) zone.classList.toggle('drag-hover', under);
  }

  hideStampHintToast() {
    this.desk.clearStampToastTimer();
    const toast = el('stamp-hint-toast');
    const tray = el('stamp-tray');
    if (toast) toast.classList.add('hidden');
    if (tray) tray.classList.remove('shake-warn');
  }

  showStampHintToast(msg) {
    const toast = el('stamp-hint-toast');
    const tray = el('stamp-tray');
    this.desk.clearStampToastTimer();
    if (toast) {
      toast.textContent = msg || t('desk.stamps.toast_default');
      toast.classList.remove('hidden');
    }
    if (tray) {
      tray.classList.remove('shake-warn');
      void tray.offsetWidth;
      tray.classList.add('shake-warn');
    }
    Audio.play('no_conflict');
    this.desk.stampToastTimer = setTimeout(() => {
      if (toast) toast.classList.add('hidden');
      if (tray) tray.classList.remove('shake-warn');
    }, 2200);
  }

  stampDocument(stampType) {
    if (!this.desk.currentCase || this.desk.returning || this.desk.isLockedByGame()) return;
    this.hideStampHintToast();
    this.desk.inspect.toggleInspectMode(false, true);
    this.desk.inspect.togglePolygraphMode(false, true);
    this.desk.activeStamp = stampType;
    const tray = el('stamp-tray');
    const zone = el('stamp-zone');
    if (tray) tray.classList.remove('has-doc-under');
    if (zone) zone.classList.remove('drag-hover');
    const mark = el('stamp-mark');
    if (mark) {
      const rot = (Math.random() * 10 - 5).toFixed(1) + 'deg';
      mark.style.setProperty('--stamp-rot', rot);
      mark.className = 'stamp-mark ' + stampType;
      mark.textContent = stampType === 'approve'
        ? t('desk.stamps.mark_approve')
        : t('desk.stamps.mark_reject');
      void mark.offsetWidth;
      mark.classList.add('is-slamming');
    }
    const ledge = el('window-ledge');
    const hint = el('window-ledge-hint');
    const win = el('booth-window-panel');
    if (ledge) ledge.classList.add('ledge-ready');
    if (win) win.classList.add('drop-ready');
    if (hint) hint.textContent = t('desk.stamps.ledge_ready');
    const subDoc = el('doc-submission');
    if (subDoc) this.desk.layout.bringToFront(subDoc);
    this.triggerScreenShake();
    Audio.play('stamp');
  }

  clearStamp() {
    this.desk.activeStamp = null;
    this.hideStampHintToast();
    const tray = el('stamp-tray');
    const zone = el('stamp-zone');
    if (tray) tray.classList.remove('has-doc-under');
    if (zone) zone.classList.remove('drag-hover');
    const mark = el('stamp-mark');
    if (mark) mark.className = 'stamp-mark hidden';
    const ledge = el('window-ledge');
    const hint = el('window-ledge-hint');
    const win = el('booth-window-panel');
    if (ledge) ledge.classList.remove('ledge-ready');
    if (win) win.classList.remove('drop-ready', 'drop-hover');
    if (hint) hint.textContent = t('desk.stamps.ledge_idle');
  }

  bindStamps() {
    const stamps = document.querySelectorAll('.stamp-block');
    stamps.forEach((stampEl) => {
      stampEl.addEventListener('pointerdown', (e) => {
        if (e.button !== 0 || !this.desk.currentCase || this.desk.returning || this.desk.isLockedByGame()) return;
        e.preventDefault();
        const stampType = stampEl.getAttribute('data-stamp');
        const startX = e.clientX;
        const startY = e.clientY;
        const rect = stampEl.getBoundingClientRect();
        const offsetX = startX - rect.left;
        const offsetY = startY - rect.top;
        let moved = false;
        let ghost = null;
        let hoveredSub = false;

        const isOverSubmission = (ev) => {
          const subDoc = el('doc-submission');
          if (!subDoc || subDoc.classList.contains('hidden')) return false;
          const sr = subDoc.getBoundingClientRect();
          const gr = ghost ? ghost.getBoundingClientRect() : null;
          return pointInRect(ev.clientX, ev.clientY, sr) || (gr && rectsOverlap(gr, sr, 14));
        };

        const onMove = (ev) => {
          const dist = Math.hypot(ev.clientX - startX, ev.clientY - startY);
          if (!moved && dist > 6) {
            moved = true;
            ghost = stampEl.cloneNode(true);
            ghost.classList.add('dragging');
            ghost.style.width = rect.width + 'px';
            document.body.appendChild(ghost);
          }
          if (ghost) {
            ghost.style.left = ev.clientX - offsetX + 'px';
            ghost.style.top = ev.clientY - offsetY + 'px';
            const over = isOverSubmission(ev);
            const zone = el('stamp-zone');
            if (zone) {
              zone.classList.toggle('drag-hover', over);
            }
            if (over && !hoveredSub) {
              hoveredSub = true;
              const subDoc = el('doc-submission');
              if (subDoc) this.desk.layout.bringToFront(subDoc);
            } else if (!over) {
              hoveredSub = false;
            }
          }
        };

        const onUp = (ev) => {
          document.removeEventListener('pointermove', onMove);
          document.removeEventListener('pointerup', onUp);
          const zone = el('stamp-zone');
          if (zone) zone.classList.remove('drag-hover');
          const droppedOnSub = moved && isOverSubmission(ev);
          if (ghost && ghost.parentNode) ghost.parentNode.removeChild(ghost);

          if (!moved) {
            if (this.isSubmissionUnderStamp(stampEl)) {
              this.stampDocument(stampType);
            } else {
              this.showStampHintToast(this.desk.submissionOnDesk ? t('desk.stamps.toast_default') : t('desk.stamps.toast_need_pull'));
            }
          } else if (droppedOnSub) {
            this.stampDocument(stampType);
          } else {
            this.showStampHintToast(this.desk.submissionOnDesk ? t('desk.stamps.toast_default') : t('desk.stamps.toast_need_pull'));
          }
        };

        document.addEventListener('pointermove', onMove);
        document.addEventListener('pointerup', onUp);
      });
    });
  }

  bindWindowLedge() {
    const ledge = el('window-ledge');
    if (ledge) {
      ledge.addEventListener('click', () => {
        if (this.desk.activeStamp && this.desk.currentCase) {
          this.returnSubmissionToWindow();
        }
      });
    }
  }
}
