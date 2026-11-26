/* ============================================================================
   ScreenSystem — Screen Transitions, Title Refresh & Modal State
   ============================================================================ */

import { el } from '../core/dom.js';
import { Audio } from '../core/audio.js';
import { t } from '../i18n/index.js';
import { Art } from '../art/index.js';
import { GAME_VERSION } from '../campaign/index.js';
import { Subsystem } from '../core/Subsystem.js';

export class ScreenSystem extends Subsystem {
  constructor(kernel) {
    super(kernel);
    this.screenFadeTimer = null;
    this.campaign = null;
    this.boot = null;
    this.booth = null;
    this.whack = null;
    this.takeover = null;
  }

  connect(kernel) {
    this.campaign = kernel.campaign;
    this.boot = kernel.boot;
    this.booth = kernel.booth;
    this.whack = kernel.whack;
    this.takeover = kernel.takeover;
  }

  syncAmbienceForScreen(id) {
    if (id === 'screen-intro' || id === 'screen-newspaper') {
      Audio.setAmbience('satire');
    } else if (id === 'screen-game') {
      const day = this.campaign && this.campaign.run ? this.campaign.run.day : 1;
      Audio.setAmbience('shift', { day });
    } else if (id === 'screen-ending') {
      Audio.setAmbience('ending');
    } else {
      Audio.setAmbience('none');
    }
  }

  clearFadeTimer() {
    clearTimeout(this.screenFadeTimer);
    this.screenFadeTimer = null;
  }

  show(id, opts) {
    this.clearFadeTimer();
    this.syncAmbienceForScreen(id);
    if (id !== 'screen-boot' && this.boot) {
      this.boot.unmount();
    }
    const target = el(id);
    const allScreens = document.querySelectorAll('.screen');

    if (opts && opts.fade && target) {
      const outgoing = [];
      allScreens.forEach(function (s) {
        if (s === target) {
          s.classList.remove('boot-fading-out', 'title-fading-in', 'screen-fading-out', 'screen-fading-in');
        } else if (s.classList.contains('active')) {
          s.classList.remove('boot-fading-out', 'title-fading-in', 'screen-fading-in');
          outgoing.push(s);
        } else {
          s.classList.remove('active', 'boot-fading-out', 'title-fading-in', 'screen-fading-out', 'screen-fading-in');
        }
      });

      if (!outgoing.length) {
        target.classList.add('active');
        if (id === 'screen-title') this.replayTitleEntrance();
        return;
      }

      outgoing.forEach(function (s) {
        s.classList.add('screen-fading-out');
      });
      target.classList.add('active', 'screen-fading-in');
      if (id === 'screen-title') this.replayTitleEntrance();

      this.screenFadeTimer = setTimeout(() => {
        this.screenFadeTimer = null;
        outgoing.forEach(function (s) {
          s.classList.remove('active', 'screen-fading-out');
        });
        target.classList.remove('screen-fading-in');
      }, 820);
      return;
    }

    allScreens.forEach(function (s) {
      s.classList.remove('active', 'boot-fading-out', 'title-fading-in', 'screen-fading-out', 'screen-fading-in');
    });
    if (target) target.classList.add('active');
    if (id === 'screen-title') this.replayTitleEntrance();
  }

  replayTitleEntrance() {
    const titleEl = el('screen-title');
    if (!titleEl) return;
    titleEl.classList.remove('is-entering');
    void titleEl.offsetWidth;
    titleEl.classList.add('is-entering');
  }

  isScreenActive(id) {
    const node = el(id);
    return !!(node && node.classList.contains('active') && !node.classList.contains('screen-fading-out'));
  }

  refreshTitle() {
    const emblem = el('title-emblem-svg');
    if (emblem) {
      emblem.innerHTML = Art.getTitleEmblemSVG();
    }
    const subtitle = el('title-subtitle');
    const startBtn = el('btn-start-work');
    const wipeBtn = el('btn-wipe-memory');
    const langBtn = el('btn-title-lang');
    const tributeEl = el('title-tribute');
    const versionEl = el('title-version');
    if (subtitle) subtitle.textContent = t('game.title.subtitle');
    if (startBtn) startBtn.textContent = t('game.title.start');
    if (wipeBtn) {
      wipeBtn.textContent = t('game.title.wipe');
      wipeBtn.classList.remove('is-confirming', 'is-done');
      delete wipeBtn.dataset.wipeConfirm;
    }
    if (langBtn) langBtn.textContent = t('game.title.lang_btn');
    if (tributeEl) tributeEl.textContent = t('game.title.tribute');
    if (versionEl) versionEl.textContent = GAME_VERSION;
    if (this.booth) {
      this.booth.refreshMuteButton();
    }
  }

  isAnyModalOpen() {
    const finaleStats = el('modal-finale-stats');
    return !el('modal-endings').classList.contains('hidden') ||
           !el('modal-help').classList.contains('hidden') ||
           !!(finaleStats && !finaleStats.classList.contains('hidden')) ||
           !!(this.whack && this.whack.isOpen()) ||
           !!(this.takeover && this.takeover.isOpen());
  }

  openHelp() {
    const modal = el('modal-help');
    if (modal) modal.classList.remove('hidden');
  }

  closeHelp() {
    const modal = el('modal-help');
    if (modal) modal.classList.add('hidden');
  }

  openEndingsModal() {
    const modal = el('modal-endings');
    if (modal) modal.classList.remove('hidden');
  }

  closeEndingsModal() {
    const modal = el('modal-endings');
    if (modal) modal.classList.add('hidden');
  }

  closeEscapableModals() {
    const finaleStats = el('modal-finale-stats');
    if ((this.whack && this.whack.isOpen()) ||
        (this.takeover && this.takeover.isOpen()) ||
        (finaleStats && !finaleStats.classList.contains('hidden'))) {
      return;
    }
    this.closeEndingsModal();
    this.closeHelp();
  }
}
