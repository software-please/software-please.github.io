/* ============================================================================
   TakeoverMinigame — "Emulator Disinfection" (Day 6 Boss App)
   ============================================================================ */

import { el } from '../core/dom.js';
import { Audio } from '../core/audio.js';
import { t } from '../i18n/index.js';
import { Subsystem } from '../core/Subsystem.js';

const TOTAL_SECONDS = 22;
const TOTAL_STAGES = 5;
const FORCE_KILL_TARGET = 6;

export class TakeoverMinigame extends Subsystem {
  constructor(kernel) {
    super(kernel);
    this.active = false;
    this.ended = false;
    this.won = false;
    this.timeLeft = TOTAL_SECONDS;
    this.stage = 1;
    this.killClicks = 0;
    this.trueBtnSlot = 0;
    this.tickTimer = null;
    this.driftTimer = null;
    this.flashTimer = null;
    this.onSuccess = null;
    this.onFail = null;
  }

  init() {
    const phone = el('takeover-phone');
    if (phone) {
      phone.addEventListener('click', (e) => {
        if (!this.active || this.ended) return;

        const realBtn = e.target.closest('[data-takeover-real]');
        if (realBtn) {
          Audio.play('stamp');
          this.stage += 1;
          this.trueBtnSlot = (this.trueBtnSlot + 1) % 4;
          this.updateHud();
          this.renderStage();
          return;
        }

        const killBtn = e.target.closest('[data-takeover-kill]');
        if (killBtn) {
          this.killClicks += 1;
          Audio.play('hook_zap');
          killBtn.textContent = t('game.takeover.btn_force_kill', {
            count: this.killClicks,
            total: FORCE_KILL_TARGET
          });
          if (this.killClicks >= FORCE_KILL_TARGET) {
            this.finishRound(true);
          }
          return;
        }

        const trapBtn = e.target.closest('[data-takeover-trap]');
        if (trapBtn) {
          const kind = trapBtn.getAttribute('data-takeover-trap');
          this.triggerTrapPenalty(kind === 'nav' ? 'game.takeover.trap_fake_nav' : 'game.takeover.trap_fake_close');
        }
      });
    }

    const doneBtn = el('btn-takeover-done');
    if (doneBtn) {
      doneBtn.addEventListener('click', () => {
        if (!this.active) return;
        const won = this.won;
        const onSuccess = this.onSuccess;
        const onFail = this.onFail;
        this.stop();
        Audio.play('click');
        if (won && onSuccess) onSuccess();
        if (!won && onFail) onFail();
      });
    }
  }

  isOpen() {
    const modal = el('modal-takeover');
    return !!(modal && !modal.classList.contains('hidden'));
  }

  clearAllTimers() {
    if (this.tickTimer) {
      clearInterval(this.tickTimer);
      this.tickTimer = null;
    }
    if (this.driftTimer) {
      clearInterval(this.driftTimer);
      this.driftTimer = null;
    }
    if (this.flashTimer) {
      clearTimeout(this.flashTimer);
      this.flashTimer = null;
    }
  }

  updateHud() {
    const timerEl = el('takeover-timer-badge');
    const stageEl = el('takeover-stage-val');
    const statusEl = el('takeover-status-text');
    if (timerEl) {
      timerEl.textContent = this.timeLeft + 's';
      timerEl.classList.toggle('is-urgent', this.timeLeft <= 6 && !this.ended);
    }
    if (stageEl) {
      stageEl.textContent = this.stage + ' / ' + TOTAL_STAGES;
    }
    if (statusEl && !this.ended) {
      statusEl.textContent = this.stage < TOTAL_STAGES
        ? t('game.takeover.hint_find_real')
        : t('game.takeover.hint_force_kill');
    }
  }

  triggerTrapPenalty(msgKey) {
    if (!this.active || this.ended) return;
    this.timeLeft = Math.max(0, this.timeLeft - 2);
    Audio.play('ad_trap');

    const phone = el('takeover-phone');
    if (phone) {
      phone.classList.remove('is-trapped');
      void phone.offsetWidth;
      phone.classList.add('is-trapped');
    }
    const toastEl = el('takeover-trap-toast');
    if (toastEl) {
      toastEl.textContent = t(msgKey || 'game.takeover.trap_fake_close');
      toastEl.classList.remove('hidden');
      if (this.flashTimer) clearTimeout(this.flashTimer);
      this.flashTimer = setTimeout(() => {
        this.flashTimer = null;
        toastEl.classList.add('hidden');
      }, 1100);
    }
    this.updateHud();
    if (this.timeLeft <= 0) {
      this.finishRound(false);
    }
  }

  renderStage() {
    const stageEl = el('takeover-stage');
    const navBar = el('takeover-nav-bar');
    if (!stageEl) return;

    if (this.driftTimer) {
      clearInterval(this.driftTimer);
      this.driftTimer = null;
    }

    if (this.stage < TOTAL_STAGES) {
      if (navBar) {
        navBar.classList.toggle('hidden', this.stage < 3);
      }

      const fakeCards = [
        { title: t('game.takeover.ad_1_title'), sub: t('game.takeover.ad_1_sub'), fakeClose: t('game.takeover.fake_close_1') },
        { title: t('game.takeover.ad_2_title'), sub: t('game.takeover.ad_2_sub'), fakeClose: t('game.takeover.fake_close_2') },
        { title: t('game.takeover.ad_3_title'), sub: t('game.takeover.ad_3_sub'), fakeClose: t('game.takeover.fake_close_3') },
        { title: t('game.takeover.ad_4_title'), sub: t('game.takeover.ad_4_sub'), fakeClose: t('game.takeover.fake_close_4') }
      ];

      const slotPos = ['top-left', 'top-right', 'mid-right', 'bottom-left'];
      const currentPos = slotPos[this.trueBtnSlot % slotPos.length];

      stageEl.innerHTML =
        '<div class="takeover-ad-grid">' +
          fakeCards.map(function (c, i) {
            return (
              '<div class="takeover-ad-card card-' + i + '">' +
                '<div class="takeover-ad-head">' +
                  '<span class="emu-ad-pill">' + t('apps.d4_common.ad_badge') + '</span>' +
                  '<button class="takeover-fake-close" type="button" data-takeover-trap="close">' + c.fakeClose + '</button>' +
                '</div>' +
                '<div class="takeover-ad-title">' + c.title + '</div>' +
                '<div class="takeover-ad-sub">' + c.sub + '</div>' +
                '<button class="takeover-fake-cta" type="button" data-takeover-trap="cta">' + t('game.takeover.fake_cta') + '</button>' +
              '</div>'
            );
          }).join('') +
        '</div>' +
        '<button class="takeover-real-close pos-' + currentPos + '" type="button" data-takeover-real="1">' +
          t('game.takeover.real_close') +
        '</button>';

      if (this.stage >= 3) {
        this.driftTimer = setInterval(() => {
          if (!this.active || this.ended || this.stage >= TOTAL_STAGES) return;
          this.trueBtnSlot = (this.trueBtnSlot + 1 + Math.floor(Math.random() * 2)) % slotPos.length;
          const realBtn = stageEl.querySelector('[data-takeover-real]');
          if (realBtn) {
            slotPos.forEach(function (p) { realBtn.classList.remove('pos-' + p); });
            realBtn.classList.add('pos-' + slotPos[this.trueBtnSlot]);
          }
        }, 1300);
      }
      return;
    }

    if (navBar) navBar.classList.remove('hidden');
    stageEl.innerHTML =
      '<div class="takeover-lockdown-card">' +
        '<div class="takeover-lockdown-badge">' + t('game.takeover.lockdown_badge') + '</div>' +
        '<div class="takeover-lockdown-title">' + t('game.takeover.lockdown_title') + '</div>' +
        '<div class="takeover-lockdown-sub">' + t('game.takeover.lockdown_sub') + '</div>' +
        '<div class="takeover-autoclick-bar"><div class="takeover-autoclick-fill"></div></div>' +
        '<button id="btn-takeover-kill" class="takeover-kill-btn" type="button" data-takeover-kill="1">' +
          t('game.takeover.btn_force_kill', { count: this.killClicks, total: FORCE_KILL_TARGET }) +
        '</button>' +
      '</div>';
  }

  finishRound(won) {
    if (!this.active || this.ended) return;
    this.ended = true;
    this.won = !!won;
    this.clearAllTimers();

    const stageEl = el('takeover-stage');
    const navBar = el('takeover-nav-bar');
    const resultBox = el('takeover-result');
    const resultText = el('takeover-result-text');
    const doneBtn = el('btn-takeover-done');

    if (navBar) navBar.classList.add('hidden');
    if (stageEl) {
      stageEl.innerHTML = won
        ? '<div class="takeover-end-banner is-win">' + t('game.takeover.banner_win') + '</div>'
        : '<div class="takeover-end-banner is-fail">' + t('game.takeover.banner_fail') + '</div>';
    }
    if (resultText) {
      resultText.textContent = won
        ? t('game.takeover.result_win')
        : t('game.takeover.result_fail');
    }
    if (doneBtn) {
      doneBtn.textContent = won
        ? t('game.takeover.btn_done_win')
        : t('game.takeover.btn_done_fail');
    }
    if (resultBox) resultBox.classList.remove('hidden');
    Audio.play(won ? 'polygraph_pass' : 'citation');
    this.updateHud();
  }

  start(options) {
    this.clearAllTimers();

    const opts = options || {};
    this.active = true;
    this.ended = false;
    this.won = false;
    this.timeLeft = TOTAL_SECONDS;
    this.stage = 1;
    this.killClicks = 0;
    this.trueBtnSlot = Math.floor(Math.random() * 4);
    this.onSuccess = typeof opts.onSuccess === 'function' ? opts.onSuccess : null;
    this.onFail = typeof opts.onFail === 'function' ? opts.onFail : null;

    const titleEl = el('takeover-title');
    const descEl = el('takeover-desc');
    const stageLbl = el('takeover-lbl-stage');
    const toastEl = el('takeover-trap-toast');
    const resultBox = el('takeover-result');
    const navBack = el('takeover-nav-back');
    const navHome = el('takeover-nav-home');
    const navTasks = el('takeover-nav-tasks');

    if (titleEl) titleEl.textContent = t('game.takeover.title', { name: opts.appName || '' });
    if (descEl) descEl.textContent = t('game.takeover.desc');
    if (stageLbl) stageLbl.textContent = t('game.takeover.lbl_stage');
    if (toastEl) toastEl.classList.add('hidden');
    if (resultBox) resultBox.classList.add('hidden');
    if (navBack) navBack.textContent = t('game.takeover.nav_back');
    if (navHome) navHome.textContent = t('game.takeover.nav_home');
    if (navTasks) navTasks.textContent = t('game.takeover.nav_tasks');

    this.updateHud();
    this.renderStage();

    const modal = el('modal-takeover');
    if (modal) modal.classList.remove('hidden');
    Audio.play('ad_popup');

    this.tickTimer = setInterval(() => {
      if (!this.active || this.ended) return;
      this.timeLeft = Math.max(0, this.timeLeft - 1);
      this.updateHud();
      if (this.timeLeft <= 5 && this.timeLeft > 0) {
        Audio.play('countdown_tick');
      }
      if (this.timeLeft <= 0) {
        this.finishRound(false);
      }
    }, 1000);
  }

  stop() {
    this.clearAllTimers();
    this.active = false;
    this.ended = false;
    this.won = false;
    this.onSuccess = null;
    this.onFail = null;
    const modal = el('modal-takeover');
    if (modal) modal.classList.add('hidden');
  }
}
