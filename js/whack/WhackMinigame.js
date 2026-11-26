/* ============================================================================
   WhackMinigame — Complaint Suppression Minigame (com.jingfeng.* Easter Egg)
   ============================================================================ */

import { el } from '../core/dom.js';
import { Audio } from '../core/audio.js';
import { t, getRaw } from '../i18n/index.js';
import { Subsystem } from '../core/Subsystem.js';

const HOLE_COUNT = 9;
const DURATION_SECONDS = 12;

export class WhackMinigame extends Subsystem {
  constructor(kernel) {
    super(kernel);
    this.active = false;
    this.ended = false;
    this.timeLeft = DURATION_SECONDS;
    this.suppressed = 0;
    this.missed = 0;
    this.holes = [];
    this.tickTimer = null;
    this.spawnTimer = null;
    this.onComplete = null;
  }

  init() {
    const grid = el('whack-grid');
    if (grid) {
      grid.addEventListener('click', (e) => {
        const btn = e.target.closest('.whack-mole.is-active[data-hole-idx]');
        if (!btn) return;
        const idx = parseInt(btn.getAttribute('data-hole-idx'), 10);
        if (!Number.isNaN(idx)) {
          this.suppressHole(idx);
        }
      });
    }

    const doneBtn = el('btn-whack-done');
    if (doneBtn) {
      doneBtn.addEventListener('click', () => {
        if (!this.active) return;
        const cb = this.onComplete;
        const summary = {
          suppressed: this.suppressed,
          missed: this.missed,
          citationsAdded: Math.floor(this.missed / 3)
        };
        this.stop();
        Audio.play('click');
        if (cb) cb(summary);
      });
    }
  }

  isOpen() {
    const modal = el('modal-whack');
    return !!(modal && !modal.classList.contains('hidden'));
  }

  clearAllTimers() {
    if (this.tickTimer) {
      clearInterval(this.tickTimer);
      this.tickTimer = null;
    }
    if (this.spawnTimer) {
      clearTimeout(this.spawnTimer);
      this.spawnTimer = null;
    }
    this.holes.forEach(function (h) {
      if (h.expireTimer) {
        clearTimeout(h.expireTimer);
        h.expireTimer = null;
      }
      if (h.cleanupTimer) {
        clearTimeout(h.cleanupTimer);
        h.cleanupTimer = null;
      }
    });
  }

  renderHole(idx) {
    const hole = this.holes[idx];
    const grid = el('whack-grid');
    if (!hole || !grid) return;
    const holeEl = grid.children[idx];
    if (!holeEl) return;

    if (hole.status === 'idle') {
      holeEl.innerHTML = '<div class="whack-pit-label">#' + (idx + 1) + '</div>';
      return;
    }

    if (hole.status === 'active') {
      holeEl.innerHTML =
        '<button class="whack-mole is-active" type="button" data-hole-idx="' + idx + '" style="--mole-ttl:' + hole.ttlMs + 'ms;">' +
          '<div class="whack-mole-head">' +
            '<span class="whack-mole-badge">' + t('game.whack.badge_complaint') + '</span>' +
            '<span class="whack-mole-tap">' + t('game.whack.tap_hint') + '</span>' +
          '</div>' +
          '<div class="whack-mole-text">' + hole.text + '</div>' +
          '<div class="whack-mole-bar"><div class="whack-mole-bar-fill"></div></div>' +
        '</button>';
      return;
    }

    if (hole.status === 'suppressed') {
      holeEl.innerHTML =
        '<div class="whack-mole is-suppressed">' +
          '<span class="whack-mole-stamp">' + t('game.whack.stamp_suppressed') + '</span>' +
        '</div>';
      return;
    }

    if (hole.status === 'missed') {
      holeEl.innerHTML =
        '<div class="whack-mole is-missed">' +
          '<span class="whack-mole-stamp">' + t('game.whack.stamp_missed') + '</span>' +
        '</div>';
    }
  }

  updateHud() {
    const timerBadge = el('whack-timer-badge');
    const supEl = el('whack-stat-suppressed');
    const misEl = el('whack-stat-missed');
    const citEl = el('whack-stat-citations');
    const citations = Math.floor(this.missed / 3);

    if (timerBadge) {
      timerBadge.textContent = this.timeLeft + 's';
      timerBadge.classList.toggle('is-urgent', this.timeLeft <= 5 && !this.ended);
    }
    if (supEl) supEl.textContent = String(this.suppressed);
    if (misEl) misEl.textContent = String(this.missed);
    if (citEl) citEl.textContent = String(citations);
  }

  scheduleNextSpawn() {
    if (!this.active || this.ended) return;
    const elapsed = DURATION_SECONDS - this.timeLeft;
    const delay = elapsed >= 9 ? 460 : 620;
    this.spawnTimer = setTimeout(() => {
      this.spawnComplaint();
      this.scheduleNextSpawn();
    }, delay);
  }

  spawnComplaint() {
    if (!this.active || this.ended) return;
    const idleIndices = [];
    for (let i = 0; i < HOLE_COUNT; i += 1) {
      if (this.holes[i].status === 'idle') idleIndices.push(i);
    }
    if (!idleIndices.length) return;

    const idx = idleIndices[Math.floor(Math.random() * idleIndices.length)];
    const list = getRaw('game.whack.complaints');
    const complaints = Array.isArray(list) && list.length
      ? list
      : ['投诉：诱导点击假补贴按钮！'];
    const text = complaints[Math.floor(Math.random() * complaints.length)];
    const elapsed = DURATION_SECONDS - this.timeLeft;
    const ttlMs = elapsed >= 9 ? 1150 : 1500;

    const hole = this.holes[idx];
    hole.status = 'active';
    hole.text = text;
    hole.ttlMs = ttlMs;
    this.renderHole(idx);
    Audio.play('whack_spawn');

    hole.expireTimer = setTimeout(() => {
      hole.expireTimer = null;
      if (!this.active || this.ended || hole.status !== 'active') return;
      hole.status = 'missed';
      this.missed += 1;
      this.updateHud();
      Audio.play(this.missed % 3 === 0 ? 'citation' : 'discrepancy');
      this.renderHole(idx);
      hole.cleanupTimer = setTimeout(() => {
        hole.cleanupTimer = null;
        if (hole.status === 'missed') {
          hole.status = 'idle';
          this.renderHole(idx);
        }
      }, 320);
    }, ttlMs);
  }

  suppressHole(idx) {
    if (!this.active || this.ended) return;
    const hole = this.holes[idx];
    if (!hole || hole.status !== 'active') return;

    if (hole.expireTimer) {
      clearTimeout(hole.expireTimer);
      hole.expireTimer = null;
    }
    hole.status = 'suppressed';
    this.suppressed += 1;
    Audio.play('stamp');
    this.updateHud();
    this.renderHole(idx);

    hole.cleanupTimer = setTimeout(() => {
      hole.cleanupTimer = null;
      if (hole.status === 'suppressed') {
        hole.status = 'idle';
        this.renderHole(idx);
      }
    }, 240);
  }

  finishRound() {
    if (!this.active || this.ended) return;
    this.ended = true;
    this.clearAllTimers();

    for (let i = 0; i < HOLE_COUNT; i += 1) {
      if (this.holes[i].status === 'active') {
        this.holes[i].status = 'idle';
        this.renderHole(i);
      }
    }

    const citationsAdded = Math.floor(this.missed / 3);
    const resultBox = el('whack-result');
    const resultText = el('whack-result-text');
    if (resultText) {
      resultText.textContent = citationsAdded > 0
        ? t('game.whack.result_citations', {
            suppressed: this.suppressed,
            missed: this.missed,
            citations: citationsAdded
          })
        : t('game.whack.result_clean', {
            suppressed: this.suppressed,
            missed: this.missed
          });
    }
    if (resultBox) resultBox.classList.remove('hidden');
  }

  start(options) {
    this.clearAllTimers();

    const opts = options || {};
    this.active = true;
    this.ended = false;
    this.timeLeft = DURATION_SECONDS;
    this.suppressed = 0;
    this.missed = 0;
    this.onComplete = typeof opts.onComplete === 'function' ? opts.onComplete : null;
    this.holes = [];
    for (let i = 0; i < HOLE_COUNT; i += 1) {
      this.holes.push({ status: 'idle', text: '', ttlMs: 1500, expireTimer: null, cleanupTimer: null });
    }

    const titleEl = el('whack-title');
    const descEl = el('whack-desc');
    const supLbl = el('whack-lbl-suppressed');
    const misLbl = el('whack-lbl-missed');
    const citLbl = el('whack-lbl-citations');
    const doneBtn = el('btn-whack-done');
    const resultBox = el('whack-result');
    const grid = el('whack-grid');

    if (titleEl) titleEl.textContent = t('game.whack.title', { name: opts.appName || '' });
    if (descEl) descEl.textContent = t('game.whack.desc');
    if (supLbl) supLbl.textContent = t('game.whack.lbl_suppressed');
    if (misLbl) misLbl.textContent = t('game.whack.lbl_missed');
    if (citLbl) citLbl.textContent = t('game.whack.lbl_citations');
    if (doneBtn) doneBtn.textContent = t('game.whack.btn_done');
    if (resultBox) resultBox.classList.add('hidden');

    if (grid) {
      grid.innerHTML = '';
      for (let i = 0; i < HOLE_COUNT; i += 1) {
        const cell = document.createElement('div');
        cell.className = 'whack-hole';
        grid.appendChild(cell);
        this.renderHole(i);
      }
    }

    this.updateHud();
    const modal = el('modal-whack');
    if (modal) modal.classList.remove('hidden');

    this.spawnComplaint();
    this.scheduleNextSpawn();

    this.tickTimer = setInterval(() => {
      if (!this.active || this.ended) return;
      this.timeLeft = Math.max(0, this.timeLeft - 1);
      this.updateHud();
      if (this.timeLeft <= 5 && this.timeLeft > 0) {
        Audio.play('countdown_tick');
      }
      if (this.timeLeft <= 0) {
        this.finishRound();
      }
    }, 1000);
  }

  stop() {
    this.clearAllTimers();
    this.active = false;
    this.ended = false;
    this.onComplete = null;
    const modal = el('modal-whack');
    if (modal) modal.classList.add('hidden');
  }
}
