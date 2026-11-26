/* ============================================================================
   InputSystem — Global UI Buttons & Keyboard Shortcut Dispatch
   ============================================================================ */

import { el } from '../core/dom.js';
import { Audio } from '../core/audio.js';
import { t } from '../i18n/index.js';
import { Subsystem } from '../core/Subsystem.js';

export class InputSystem extends Subsystem {
  constructor(kernel) {
    super(kernel);
    this.campaign = null;
    this.screen = null;
    this.boot = null;
    this.intro = null;
    this.shift = null;
    this.booth = null;
    this.desk = null;
    this.interrogation = null;
    this.ledger = null;
    this.ending = null;
  }

  connect(kernel) {
    this.campaign = kernel.campaign;
    this.screen = kernel.screen;
    this.boot = kernel.boot;
    this.intro = kernel.intro;
    this.shift = kernel.shift;
    this.booth = kernel.booth;
    this.desk = kernel.desk;
    this.interrogation = kernel.interrogation;
    this.ledger = kernel.ledger;
    this.ending = kernel.ending;
  }

  init() {
    let wipeTimer = null;
    const wipeBtn = el('btn-wipe-memory');
    if (wipeBtn) {
      wipeBtn.addEventListener('click', () => {
        Audio.init();
        if (wipeBtn.dataset.wipeConfirm === '1') {
          clearTimeout(wipeTimer);
          wipeTimer = null;
          delete wipeBtn.dataset.wipeConfirm;
          this.campaign.wipeMemory();
          Audio.play('stamp');
          wipeBtn.classList.remove('is-confirming');
          wipeBtn.classList.add('is-done');
          wipeBtn.textContent = t('game.title.wipe_done');
          wipeTimer = setTimeout(() => {
            wipeTimer = null;
            wipeBtn.classList.remove('is-done');
            wipeBtn.textContent = t('game.title.wipe');
          }, 1800);
          return;
        }
        Audio.play('discrepancy');
        wipeBtn.dataset.wipeConfirm = '1';
        wipeBtn.classList.remove('is-done');
        wipeBtn.classList.add('is-confirming');
        wipeBtn.textContent = t('game.title.wipe_confirm');
        clearTimeout(wipeTimer);
        wipeTimer = setTimeout(() => {
          wipeTimer = null;
          delete wipeBtn.dataset.wipeConfirm;
          wipeBtn.classList.remove('is-confirming');
          wipeBtn.textContent = t('game.title.wipe');
        }, 3500);
      });
    }

    const titleLangBtn = el('btn-title-lang');
    if (titleLangBtn) {
      titleLangBtn.addEventListener('click', () => {
        Audio.init();
        Audio.play('click');
        this.boot.start();
      });
    }

    ['btn-title-github', 'btn-title-bilibili'].forEach((linkId) => {
      const linkEl = el(linkId);
      if (linkEl) {
        linkEl.addEventListener('click', () => {
          Audio.init();
          Audio.play('click');
        });
      }
    });

    el('btn-start-work').addEventListener('click', () => {
      Audio.init();
      if (this.campaign.hasCompletedCampaign()) {
        Audio.play('paper');
        this.ending.trigger('complete', { fade: true, fromSaved: true });
        return;
      }
      Audio.play('click');
      if (this.campaign.hasResumableCheckpoint()) {
        this.shift.continueCampaign();
      } else {
        this.intro.start();
      }
    });

    el('btn-start-shift').addEventListener('click', () => {
      Audio.init();
      Audio.play('click');
      if (this.campaign.run.day === 7) {
        this.intro.startSequence({
          i18nKey: 'day7Award.scenes',
          artType: 'day7_award',
          onComplete: () => this.shift.startShift()
        });
      } else {
        this.shift.startShift();
      }
    });

    el('btn-next').addEventListener('click', () => this.shift.callNextApplicant());
    el('btn-inspect-mode').addEventListener('click', () => this.desk.toggleInspectMode());
    el('btn-interrogate').addEventListener('click', () => this.interrogation.interrogate());
    el('btn-polygraph').addEventListener('click', () => this.interrogation.togglePolygraph());
    el('btn-polygraph-start').addEventListener('click', () => this.interrogation.togglePolygraph());
    el('btn-polygraph-ban').addEventListener('click', () => this.interrogation.attemptDirectBan());
    el('btn-ban').addEventListener('click', () => this.interrogation.attemptDirectBan());
    el('btn-mute').addEventListener('click', () => {
      Audio.toggleMute();
      this.booth.refreshMuteButton();
    });
    el('btn-hud-help').addEventListener('click', () => {
      Audio.play('click');
      this.screen.openHelp();
    });
    el('btn-back-title').addEventListener('click', () => {
      Audio.play('click');
      this.shift.returnToTitle();
    });

    el('btn-ledger-next').addEventListener('click', () => this.ledger.confirm());

    el('btn-ending-replay-d6').addEventListener('click', () => {
      Audio.play('click');
      this.shift.startNewCampaign(6);
    });
    el('btn-ending-gallery').addEventListener('click', () => {
      Audio.play('click');
      this.ending.openGallery();
    });
    el('btn-ending-title').addEventListener('click', () => {
      Audio.play('click');
      this.screen.refreshTitle();
      this.screen.show('screen-title');
    });

    const reenlistBtn = el('btn-complete-reenlist');
    if (reenlistBtn) {
      reenlistBtn.addEventListener('click', () => {
        Audio.play('click');
        this.ending.clearTimers();
        this.screen.refreshTitle();
        this.screen.show('screen-title', { fade: true });
      });
    }

    el('btn-close-gallery').addEventListener('click', () => {
      Audio.play('click');
      this.screen.closeEndingsModal();
    });
    el('btn-close-help').addEventListener('click', () => {
      Audio.play('click');
      this.screen.closeHelp();
    });

    document.addEventListener('keydown', (e) => {
      if (this.screen.isAnyModalOpen()) {
        if (e.key === 'Escape') {
          this.screen.closeEscapableModals();
        }
        return;
      }
      if (this.screen.isScreenActive('screen-boot')) {
        if (e.key === '1') {
          e.preventDefault();
          this.boot.selectLanguage('1', 'zh-CN');
        } else if (e.key === '2') {
          e.preventDefault();
          this.boot.selectLanguage('2', 'en-US');
        } else if (e.code === 'Space' || e.key === 'Enter') {
          e.preventDefault();
          this.boot.skipTyping();
        }
        return;
      }
      if (this.screen.isScreenActive('screen-intro')) {
        if (e.code === 'Space' || e.key === 'Enter') {
          e.preventDefault();
          this.intro.advance();
        }
        return;
      }
      if (!this.screen.isScreenActive('screen-game')) return;

      const k = e.key.toLowerCase();
      if (k === 'm') {
        Audio.toggleMute();
        this.booth.refreshMuteButton();
      } else if (k === 'b') {
        this.desk.toggleRulebook();
      } else if (k === 'i' && !el('btn-inspect-mode').disabled) {
        this.desk.toggleInspectMode();
      } else if (k === 'q' && !el('btn-interrogate').disabled) {
        this.interrogation.interrogate();
      } else if (k === 'p' && this.campaign.run.day >= 3 && !el('btn-polygraph').disabled) {
        this.interrogation.togglePolygraph();
      } else if (e.key === 'Escape' && this.desk.isPolygraphMode()) {
        this.desk.togglePolygraphMode(false);
      } else if (e.key === 'Escape' && this.desk.isInspectMode()) {
        this.desk.toggleInspectMode(false);
      } else if (e.code === 'Space' && !el('btn-next').disabled) {
        e.preventDefault();
        this.shift.callNextApplicant();
      }
    });
  }
}
