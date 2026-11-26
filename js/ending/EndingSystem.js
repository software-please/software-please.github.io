/* ============================================================================
   EndingSystem — Ending Triggers, Ending Screen & Gallery Modal
   ============================================================================ */

import { el } from '../core/dom.js';
import { Audio } from '../core/audio.js';
import { t } from '../i18n/index.js';
import { Art } from '../art/index.js';
import { Rules } from '../rules/index.js';
import { Subsystem } from '../core/Subsystem.js';

export class EndingSystem extends Subsystem {
  constructor(kernel) {
    super(kernel);
    this.sealTimer = null;
    this.campaign = null;
    this.shift = null;
    this.screen = null;
  }

  clearTimers() {
    clearTimeout(this.sealTimer);
    this.sealTimer = null;
  }

  connect(kernel) {
    this.campaign = kernel.campaign;
    this.shift = kernel.shift;
    this.screen = kernel.screen;
  }

  trigger(endingId, opts = {}) {
    const run = this.campaign.run;
    this.clearTimers();
    this.shift.abortActiveShift({ keepFinaleFade: !!opts.fade });

    const def = Rules.getEnding(endingId);
    this.campaign.unlockEnding(endingId);
    this.campaign.clearCheckpoint();

    const acc = run.stats.totalReviewed > 0
      ? Math.round((run.stats.correctCount / run.stats.totalReviewed) * 100) + '%'
      : '—';

    const rogueLabel = run.stats.bannedCount > 0
      ? t('game.ending.stat_rogues_banned_val', { count: run.stats.roguesCaught, banned: run.stats.bannedCount })
      : t('game.ending.stat_rogues_val', { count: run.stats.roguesCaught });

    if (endingId === 'complete') {
      if (!opts.fromSaved) {
        this.campaign.saveCompletedCert(run);
      }
      const certData = (opts.fromSaved && this.campaign.persist.completedCert)
        ? this.campaign.persist.completedCert
        : {
            totalReviewed: run.stats.totalReviewed,
            correctCount: run.stats.correctCount,
            roguesCaught: run.stats.roguesCaught,
            bannedCount: run.stats.bannedCount,
            balance: run.balance
          };
      const certAcc = certData.totalReviewed > 0
        ? Math.round((certData.correctCount / certData.totalReviewed) * 100) + '%'
        : '—';
      const certRogueLabel = certData.bannedCount > 0
        ? t('game.ending.stat_rogues_banned_val', { count: certData.roguesCaught, banned: certData.bannedCount })
        : t('game.ending.stat_rogues_val', { count: certData.roguesCaught });

      const setText = (id, key) => {
        const node = el(id);
        if (node) node.textContent = t(key);
      };
      setText('cert-org', 'completeCert.org');
      setText('cert-serial', 'completeCert.serial');
      setText('cert-title', 'completeCert.title');
      setText('cert-attestation', 'completeCert.attestation');
      setText('cert-thanks-itssa', 'completeCert.thanks_itssa');
      setText('cert-date', 'completeCert.date');
      setText('cert-seal-top', 'completeCert.seal_top');
      setText('cert-seal-bottom', 'completeCert.seal_bottom');
      setText('cert-thank-play', 'completeCert.thank_play');
      setText('btn-complete-reenlist', 'completeCert.reenlist_btn');

      const certStats = el('cert-stats');
      if (certStats) {
        certStats.innerHTML =
          '<div class="cert-stat-cell"><span>' + t('game.ending.stat_reviewed') + '</span><strong>' + t('game.ending.stat_reviewed_val', { count: certData.totalReviewed }) + '</strong></div>' +
          '<div class="cert-stat-cell"><span>' + t('game.ending.stat_rogues') + '</span><strong>' + certRogueLabel + '</strong></div>' +
          '<div class="cert-stat-cell"><span>' + t('game.ending.stat_accuracy') + '</span><strong>' + certAcc + '</strong></div>' +
          '<div class="cert-stat-cell"><span>' + t('game.ending.stat_balance') + '</span><strong>¥' + Number(certData.balance || 0).toFixed(2) + '</strong></div>';
      }

      const seal = el('cert-official-seal');
      const paper = el('cert-paper');
      if (seal) seal.classList.toggle('is-stamped', !!opts.fromSaved);
      if (paper) paper.classList.remove('is-thud');

      this.screen.show('screen-complete', { fade: !!opts.fade });
      if (!opts.fromSaved) {
        this.sealTimer = setTimeout(() => {
          this.sealTimer = null;
          if (seal) seal.classList.add('is-stamped');
          if (paper) paper.classList.add('is-thud');
          Audio.play('stamp');
        }, 650);
      }
      return;
    }

    const badgeEl = el('ending-badge');
    if (badgeEl) badgeEl.classList.add('hidden');

    el('ending-art').innerHTML = Art.getEndingArtSVG(endingId);
    el('ending-title').textContent = def.title;

    const subtitleEl = el('ending-subtitle');
    const bodyEl = el('ending-body');
    if (subtitleEl) {
      subtitleEl.textContent = def.subtitle;
      subtitleEl.classList.remove('hidden');
    }
    if (bodyEl) {
      bodyEl.classList.remove('hidden');
      bodyEl.innerHTML = def.paragraphs.map(function (p) { return '<p>' + p + '</p>'; }).join('');
    }

    el('ending-stats').innerHTML =
      '<div class="stat-box"><span>' + t('game.ending.stat_reviewed') + '</span><strong>' + t('game.ending.stat_reviewed_val', { count: run.stats.totalReviewed }) + '</strong></div>' +
      '<div class="stat-box"><span>' + t('game.ending.stat_rogues') + '</span><strong>' + rogueLabel + '</strong></div>' +
      '<div class="stat-box"><span>' + t('game.ending.stat_accuracy') + '</span><strong>' + acc + '</strong></div>' +
      '<div class="stat-box"><span>' + t('game.ending.stat_balance') + '</span><strong>¥' + run.balance.toFixed(2) + '</strong></div>';

    const replayBtn = el('btn-ending-replay-d6');
    if (replayBtn) replayBtn.classList.add('hidden');
    const galleryBtn = el('btn-ending-gallery');
    if (galleryBtn) galleryBtn.classList.add('hidden');
    this.screen.show('screen-ending', { fade: !!opts.fade });
    Audio.play(endingId === 'fired' || endingId === 'bankrupt' ? 'ending_bad' : 'ending_good');
  }

  openGallery() {
    const grid = el('gallery-grid');
    grid.innerHTML = '';
    const allEndings = Rules.getAllEndings();
    const unlockedEndings = this.campaign.persist.unlockedEndings;
    Object.keys(allEndings).forEach(function (id) {
      const def = allEndings[id];
      const unlocked = unlockedEndings.indexOf(id) !== -1;
      const card = document.createElement('div');
      card.className = 'gallery-card' + (unlocked ? '' : ' locked');
      card.innerHTML =
        '<div class="ending-art-box" style="flex:0 0 68px;height:68px;">' +
        (unlocked ? Art.getEndingArtSVG(id) : '<span style="font-size:24px;">🔒</span>') +
        '</div>' +
        '<div>' +
        '<div class="badge" style="margin-bottom:4px;">' + def.code + '</div>' +
        '<h4>' + (unlocked ? def.title : t('game.gallery.locked_title')) + '</h4>' +
        '<p class="muted" style="margin-top:4px;">' + (unlocked ? def.subtitle : t('game.gallery.locked_desc')) + '</p>' +
        '</div>';
      grid.appendChild(card);
    });
    this.screen.openEndingsModal();
  }
}
