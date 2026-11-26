/* ============================================================================
   RulebookWidget — Paginated Rulebook Rendering & Navigation
   ============================================================================ */

import { el } from '../core/dom.js';
import { Audio } from '../core/audio.js';
import { t } from '../i18n/index.js';
import { Rules } from '../rules/index.js';

export const RB_PAGE_SIZE = 3;

export class RulebookWidget {
  constructor(desk) {
    this.desk = desk;
  }

  render() {
    const body = el('rulebook-body');
    if (!body) return;
    const allRules = Rules.getRulesForDay(this.desk.currentDay);
    const totalPages = Math.max(1, Math.ceil(allRules.length / RB_PAGE_SIZE));
    this.desk.currentRbPage = Math.max(0, Math.min(this.desk.currentRbPage, totalPages - 1));

    const start = this.desk.currentRbPage * RB_PAGE_SIZE;
    const pageRules = allRules.slice(start, start + RB_PAGE_SIZE);

    if (!pageRules.length) {
      body.innerHTML = '<div class="rule-card">' + t('desk.rulebook.empty') + '</div>';
    } else {
      body.innerHTML = pageRules
        .map((r) => {
          const isNew = r.unlockDay === this.desk.currentDay;
          const key = 'rule_' + r.id;
          const isSelected =
            (this.desk.firstInspect && this.desk.firstInspect.key === key) ||
            (this.desk.secondInspect && this.desk.secondInspect.key === key);
          const isFlagged = !!this.desk.flaggedKeys[key];
          const cls =
            'rule-card inspectable' +
            (isNew ? ' is-new' : '') +
            (isSelected ? ' clue-selected' : '') +
            (isFlagged ? ' clue-flagged' : '');
          const points = Array.isArray(r.points) && r.points.length ? r.points : [r.text || ''];
          const listHtml =
            '<ul class="rule-points">' +
            points.map(function (pt) { return '<li>' + pt + '</li>'; }).join('') +
            '</ul>';
          return (
            '<div class="' + cls + '" data-inspect-key="' + key + '" data-inspect-label="' + r.id + '">' +
            '<div class="rule-card-head">' +
            '<span class="rule-card-title">' + r.title + '</span>' +
            (isNew ? '<span class="badge-new">NEW</span>' : '') +
            '</div>' +
            listHtml +
            '</div>'
          );
        })
        .join('');
    }

    const pageInfo = el('rb-page-info');
    if (pageInfo) {
      pageInfo.textContent = t('desk.rulebook.page_info', {
        page: this.desk.currentRbPage + 1,
        total: totalPages
      });
    }

    const prevBtn = el('btn-rb-prev');
    const nextBtn = el('btn-rb-next');
    if (prevBtn) prevBtn.disabled = this.desk.currentRbPage <= 0;
    if (nextBtn) nextBtn.disabled = this.desk.currentRbPage >= totalPages - 1;

    const numsWrap = el('rb-page-nums');
    if (numsWrap) {
      const numsHtml = [];
      for (let p = 0; p < totalPages; p += 1) {
        const slice = allRules.slice(p * RB_PAGE_SIZE, (p + 1) * RB_PAGE_SIZE);
        const pageHasNew = totalPages > 1 && slice.some((r) => r.unlockDay === this.desk.currentDay);
        const numCls =
          'rb-page-num' +
          (p === this.desk.currentRbPage ? ' active' : '') +
          (pageHasNew ? ' has-new' : '');
        numsHtml.push(
          '<button class="' + numCls + '" type="button" data-rb-page="' + p + '" title="' + t('desk.rulebook.page_title', { page: p + 1 }) + '">' +
          (p + 1) +
          '</button>'
        );
      }
      numsWrap.innerHTML = numsHtml.join('');
    }
  }

  setPage(pageIdx, silent) {
    const allRules = Rules.getRulesForDay(this.desk.currentDay);
    const totalPages = Math.max(1, Math.ceil(allRules.length / RB_PAGE_SIZE));
    const next = Math.max(0, Math.min(pageIdx, totalPages - 1));
    if (next === this.desk.currentRbPage) return;
    this.desk.currentRbPage = next;
    this.render();
    const body = el('rulebook-body');
    if (body) body.scrollTop = 0;
    if (!silent) {
      Audio.play('paper');
    }
  }

  bindTabs() {
    const prevBtn = el('btn-rb-prev');
    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.setPage(this.desk.currentRbPage - 1);
      });
    }

    const nextBtn = el('btn-rb-next');
    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.setPage(this.desk.currentRbPage + 1);
      });
    }

    const pageNums = el('rb-page-nums');
    if (pageNums) {
      pageNums.addEventListener('click', (e) => {
        const btn = e.target.closest('.rb-page-num');
        if (!btn) return;
        e.stopPropagation();
        const pageIdx = parseInt(btn.getAttribute('data-rb-page'), 10);
        if (!isNaN(pageIdx)) {
          this.setPage(pageIdx);
        }
      });
    }
  }
}
