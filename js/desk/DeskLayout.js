/* ============================================================================
   DeskLayout — Window Layering, Position Clamping, Tidy Layout & Tool Docks
   ============================================================================ */

import { el } from '../core/dom.js';
import { Audio } from '../core/audio.js';
import { t } from '../i18n/index.js';

export const TOOL_DOCKS = {
  'desk-analyzer': {
    dockId: 'dock-analyzer',
    minDay: 2,
    openLabelKey: 'desk.dock.analyzer_open',
    closedLabelKey: 'desk.dock.analyzer_closed'
  },
  'doc-phone': {
    dockId: 'dock-phone',
    minDay: 3,
    openLabelKey: 'desk.dock.phone_open',
    closedLabelKey: 'desk.dock.phone_closed'
  },
  'desk-reverser': {
    dockId: 'dock-reverser',
    minDay: 3,
    openLabelKey: 'desk.dock.reverser_open',
    closedLabelKey: 'desk.dock.reverser_closed'
  }
};

export class DeskLayout {
  constructor(desk) {
    this.desk = desk;
  }

  bringToFront(docEl) {
    if (!docEl) return;
    this.desk.topZ += 1;
    if (this.desk.topZ >= 600) {
      const docs = Array.prototype.slice.call(document.querySelectorAll('.desk-doc'));
      docs.sort(function (a, b) {
        return (parseInt(a.style.zIndex, 10) || 30) - (parseInt(b.style.zIndex, 10) || 30);
      });
      docs.forEach(function (d, idx) {
        d.style.zIndex = String(30 + idx);
      });
      this.desk.topZ = 30 + docs.length + 1;
    }
    docEl.style.zIndex = String(this.desk.topZ);
  }

  clampDocPosition(docEl) {
    const surface = el('desk-surface');
    if (!surface || !docEl) return;
    const maxX = Math.max(8, surface.clientWidth - docEl.offsetWidth - 8);
    const maxY = Math.max(8, surface.clientHeight - docEl.offsetHeight - 8);
    let x = parseFloat(docEl.style.left) || 12;
    let y = parseFloat(docEl.style.top) || 12;
    x = Math.max(6, Math.min(x, maxX));
    y = Math.max(6, Math.min(y, maxY));
    docEl.style.left = x + 'px';
    docEl.style.top = y + 'px';
  }

  revealDocAtDefaultLayout(docId, x, y, z) {
    const docEl = el(docId);
    if (!docEl) return;
    docEl.classList.remove('hidden', 'doc-pop-in');
    void docEl.offsetWidth;
    docEl.classList.add('doc-pop-in');
    docEl.style.left = x + 'px';
    docEl.style.top = y + 'px';
    docEl.style.zIndex = String(z);
    this.bringToFront(docEl);
    this.clampDocPosition(docEl);
  }

  updateRulebookButton(isOpen) {
    const dockRb = el('dock-rulebook');
    if (!dockRb) return;
    dockRb.classList.toggle('is-open', isOpen);
    dockRb.textContent = isOpen ? t('desk.dock.rulebook_open') : t('desk.dock.rulebook_closed');
  }

  updateToolDockButton(docId, dayOverride) {
    const def = TOOL_DOCKS[docId];
    if (!def) return;
    const dockBtn = el(def.dockId);
    const docEl = el(docId);
    if (!dockBtn || !docEl) return;
    const day = typeof dayOverride === 'number' ? dayOverride : this.desk.currentDay;
    const unlocked = day >= def.minDay;
    dockBtn.classList.toggle('hidden', !unlocked);
    if (!unlocked) return;
    const isOpen = !docEl.classList.contains('hidden');
    dockBtn.classList.toggle('is-open', isOpen);
    dockBtn.textContent = isOpen ? t(def.openLabelKey) : t(def.closedLabelKey);
  }

  updateAllToolDockButtons(dayOverride) {
    Object.keys(TOOL_DOCKS).forEach((docId) => {
      this.updateToolDockButton(docId, dayOverride);
    });
  }

  toggleDeskTool(docId, force) {
    const def = TOOL_DOCKS[docId];
    const docEl = el(docId);
    if (!def || !docEl || this.desk.currentDay < def.minDay) return false;
    const isCurrentlyOpen = !docEl.classList.contains('hidden');
    const shouldOpen = typeof force === 'boolean' ? force : !isCurrentlyOpen;
    docEl.classList.toggle('hidden', !shouldOpen);
    this.updateToolDockButton(docId);
    if (shouldOpen) {
      if (!docEl.style.left) {
        const surface = el('desk-surface');
        const w = surface ? surface.clientWidth : 700;
        const h = surface ? surface.clientHeight : 560;
        if (docId === 'desk-analyzer') {
          docEl.style.left = '14px';
          docEl.style.top = '12px';
        } else if (docId === 'desk-reverser') {
          docEl.style.left = '14px';
          docEl.style.top = '158px';
        } else if (docId === 'doc-phone') {
          docEl.style.left = Math.max(20, Math.floor(w * 0.25)) + 'px';
          docEl.style.top = Math.max(70, h - 355) + 'px';
        }
      }
      this.bringToFront(docEl);
      this.clampDocPosition(docEl);
    }
    Audio.play('paper');
    return shouldOpen;
  }

  toggleRulebook(force) {
    const rb = el('doc-rulebook');
    if (!rb) return false;
    const isCurrentlyOpen = !rb.classList.contains('hidden');
    const shouldOpen = typeof force === 'boolean' ? force : !isCurrentlyOpen;
    rb.classList.toggle('hidden', !shouldOpen);
    this.updateRulebookButton(shouldOpen);
    if (shouldOpen) {
      this.bringToFront(rb);
      this.clampDocPosition(rb);
    }
    Audio.play('paper');
    return shouldOpen;
  }

  openDoc(docId) {
    if (docId === 'doc-rulebook') {
      this.toggleRulebook();
      return;
    }
    const docEl = el(docId);
    if (!docEl) return;
    docEl.classList.remove('hidden');
    this.bringToFront(docEl);
    this.clampDocPosition(docEl);
    Audio.play('paper');
  }

  tidyDesk() {
    const surface = el('desk-surface');
    if (!surface) return;
    const w = surface.clientWidth;
    const h = surface.clientHeight;

    const layouts = {
      'desk-analyzer': { x: 14, y: 12, z: 32 },
      'desk-reverser': { x: 14, y: 158, z: 33 },
      'doc-submission': { x: 16, y: 14, z: 37 },
      'doc-rulebook': { x: Math.max(20, w - 348), y: 14, z: 31 },
      'doc-manifest': { x: Math.min(270, Math.max(20, w - 300)), y: 14, z: 34 },
      'doc-phone': { x: Math.max(20, Math.floor(w * 0.25)), y: Math.max(70, h - 355), z: 36 },
      'doc-memo': { x: Math.max(24, w - 285), y: Math.max(90, h - 345), z: 38 }
    };

    Object.keys(layouts).forEach((id) => {
      const docEl = el(id);
      if (!docEl || docEl.classList.contains('hidden')) return;
      docEl.classList.remove('doc-floating-return', 'sliding-into-window', 'doc-pop-in');
      docEl.style.width = '';
      docEl.style.left = layouts[id].x + 'px';
      docEl.style.top = layouts[id].y + 'px';
      docEl.style.zIndex = String(layouts[id].z);
      this.clampDocPosition(docEl);
    });
    this.desk.topZ = 40;
    Audio.play('paper');
  }

  bindDockControls() {
    const rbDockBtn = el('dock-rulebook');
    if (rbDockBtn) {
      rbDockBtn.addEventListener('click', () => this.toggleRulebook());
    }

    const closeRbBtn = el('btn-close-rulebook');
    if (closeRbBtn) {
      closeRbBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleRulebook(false);
      });
    }

    [
      { btnId: 'btn-close-analyzer', dockId: 'dock-analyzer', docId: 'desk-analyzer' },
      { btnId: 'btn-close-reverser', dockId: 'dock-reverser', docId: 'desk-reverser' },
      { btnId: 'btn-close-phone', dockId: 'dock-phone', docId: 'doc-phone' }
    ].forEach((cfg) => {
      const closeBtn = el(cfg.btnId);
      if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          this.toggleDeskTool(cfg.docId, false);
        });
      }
      const dockBtn = el(cfg.dockId);
      if (dockBtn) {
        dockBtn.addEventListener('click', () => {
          this.toggleDeskTool(cfg.docId);
        });
      }
    });
  }
}
