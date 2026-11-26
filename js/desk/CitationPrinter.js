/* ============================================================================
   CitationPrinter — Citation Slip Printing & Cleanup on Desk Surface
   ============================================================================ */

import { el } from '../core/dom.js';
import { Audio } from '../core/audio.js';
import { t } from '../i18n/index.js';

export class CitationPrinter {
  constructor(desk) {
    this.desk = desk;
  }

  clearAll() {
    const surface = el('desk-surface');
    if (!surface) return;
    surface.querySelectorAll('.citation-doc').forEach(function (node) {
      if (node.parentNode) node.parentNode.removeChild(node);
    });
  }

  showSlip(reason, fineAmount, citationNo, appName) {
    const surface = el('desk-surface');
    if (!surface) return;

    const existingCount = surface.querySelectorAll('.citation-doc').length;
    const seq = typeof citationNo === 'number' && citationNo > 0 ? citationNo : (existingCount + 1);

    const slip = document.createElement('article');
    slip.className = 'desk-doc citation-doc';

    const handle = document.createElement('div');
    handle.className = 'doc-drag-handle';
    const titleSpan = document.createElement('span');
    titleSpan.textContent = t('desk.citation.title', { seq });
    const tagSpan = document.createElement('span');
    tagSpan.className = 'doc-mini-tag';
    tagSpan.textContent = 'CITATION';
    handle.appendChild(titleSpan);
    handle.appendChild(tagSpan);

    const body = document.createElement('div');
    body.className = 'doc-body citation-body';

    if (appName) {
      const appDiv = document.createElement('div');
      appDiv.className = 'cite-app';
      appDiv.textContent = t('desk.citation.app_prefix') + appName;
      body.appendChild(appDiv);
    }

    const reasonDiv = document.createElement('div');
    reasonDiv.className = 'cite-reason';
    reasonDiv.textContent = reason || t('desk.citation.default_reason');
    body.appendChild(reasonDiv);

    const fineDiv = document.createElement('div');
    fineDiv.className = 'cite-fine';
    fineDiv.textContent = fineAmount > 0
      ? t('desk.citation.fine_amount', { amount: fineAmount.toFixed(2) })
      : t('desk.citation.warning_only');
    body.appendChild(fineDiv);

    slip.appendChild(handle);
    slip.appendChild(body);
    surface.appendChild(slip);

    const stagger = existingCount % 4;
    slip.style.left = (14 + stagger * 24) + 'px';
    slip.style.top = Math.max(16, surface.clientHeight - 166 - stagger * 20) + 'px';

    this.desk.drag.attachDocDrag(slip);
    this.desk.layout.bringToFront(slip);
    this.desk.layout.clampDocPosition(slip);
    Audio.play('citation');
  }
}
