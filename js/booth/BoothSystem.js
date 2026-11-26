/* ============================================================================
   BoothSystem — Queue Bay, HUD, Dialogue Stream & Intercom Action Buttons
   ============================================================================ */

import { el } from '../core/dom.js';
import { Audio } from '../core/audio.js';
import { t, getRaw } from '../i18n/index.js';
import { Art } from '../art/index.js';
import { Subsystem } from '../core/Subsystem.js';

export class BoothSystem extends Subsystem {
  constructor(kernel) {
    super(kernel);
    this.bubbleTimer = null;
    this.activeBubbleEl = null;
    this.activeBubbleFullText = '';
    this.greetingTimer = null;

    this.campaign = null;
    this.shift = null;
    this.clock = null;
    this.desk = null;
    this.interrogation = null;
  }

  connect(kernel) {
    this.campaign = kernel.campaign;
    this.shift = kernel.shift;
    this.clock = kernel.clock;
    this.desk = kernel.desk;
    this.interrogation = kernel.interrogation;
  }

  getWeekdays() {
    const list = getRaw('game.weekdays');
    return Array.isArray(list) ? list : ['SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
  }

  refreshMuteButton() {
    const btn = el('btn-mute');
    if (btn) {
      btn.textContent = Audio.isMuted() ? t('game.hud.mute_on') : t('game.hud.mute_off');
    }
  }

  renderQueueBay() {
    const session = this.shift.session;
    const corridor = el('queue-corridor');
    const tag = el('queue-count-tag');
    const waiting = session.queue.slice(session.index + 1);
    const doneCount = Math.max(0, session.index + (session.currentCase ? 0 : 1));
    if (tag) {
      tag.textContent = t('game.queue.count', { waiting: waiting.length, done: doneCount });
    }
    if (!corridor) return;
    if (!waiting.length) {
      corridor.innerHTML = '<div class="queue-empty">' + t('game.queue.empty') + '</div>';
      return;
    }
    corridor.innerHTML = waiting
      .map(function (_c, idx) {
        return (
          '<div class="queue-app-card' + (idx === 0 && !session.currentCase ? ' next-up' : '') + '">' +
          '<div class="queue-blackbox-icon">?</div>' +
          '</div>'
        );
      })
      .join('');
  }

  updateHud() {
    const run = this.campaign.run;
    const session = this.shift.session;
    el('hud-day').textContent = 'DAY ' + run.day;

    const level = this.campaign.getLevel(run.day);
    const weekdays = this.getWeekdays();
    const wd = weekdays[run.day - 1] || '';
    const dateEl = el('booth-date-str');
    if (dateEl && level) {
      dateEl.textContent = level.dateStr.replace(/-/g, '.') + ' ' + wd;
    }
    const clockEl = el('booth-clock-led');
    if (clockEl) {
      clockEl.textContent = this.clock.format(session.clockMinutes);
    }
    this.renderQueueBay();
  }

  setAppIcon(iconKey) {
    const frame = el('booth-app-icon');
    if (!frame) return;
    if (!iconKey) {
      frame.classList.add('empty');
      frame.innerHTML = t('game.booth.waiting_app');
      return;
    }
    frame.classList.remove('empty');
    frame.innerHTML = Art.getAppIconSVG(iconKey);
  }

  setHint(text) {
    const node = el('booth-reward-hint');
    if (node) node.textContent = text;
  }

  setNextEnabled(enabled) {
    const btn = el('btn-next');
    if (btn) btn.disabled = !enabled;
  }

  setInspectEnabled(enabled) {
    const btn = el('btn-inspect-mode');
    if (btn) btn.disabled = !enabled;
  }

  flushActiveBubble() {
    if (this.bubbleTimer) {
      clearInterval(this.bubbleTimer);
      this.bubbleTimer = null;
    }
    if (this.activeBubbleEl) {
      this.activeBubbleEl.textContent = this.activeBubbleFullText;
      this.activeBubbleEl = null;
      this.activeBubbleFullText = '';
    }
  }

  clearDialogueTimers() {
    clearTimeout(this.greetingTimer);
    this.greetingTimer = null;
    this.flushActiveBubble();
  }

  clearDialogue() {
    this.clearDialogueTimers();
    const log = el('booth-dialogue-log');
    if (log) log.innerHTML = '';
    const area = el('booth-dialogue-area');
    if (area) area.classList.remove('has-inspectable');
  }

  pushDialogue(role, text, opts) {
    const log = el('booth-dialogue-log');
    if (!log || !text) return;
    this.flushActiveBubble();

    const div = document.createElement('div');
    div.className = 'dlg-bubble ' + (role === 'auditor' ? 'is-auditor' : 'is-dev');
    if (opts && opts.inspectKey) {
      div.classList.add('inspectable');
      div.setAttribute('data-inspect-key', opts.inspectKey);
      div.setAttribute('data-inspect-label', opts.inspectLabel || t('game.booth.dev_claim_label'));
      if (opts.isHonestClaim) {
        div.setAttribute('data-claim-honest', 'true');
      }
      const area = el('booth-dialogue-area');
      if (area) area.classList.add('has-inspectable');
    }
    log.appendChild(div);
    log.scrollTop = log.scrollHeight;

    this.activeBubbleEl = div;
    this.activeBubbleFullText = String(text);
    let idx = 0;
    this.bubbleTimer = setInterval(() => {
      idx += 2;
      div.textContent = this.activeBubbleFullText.slice(0, idx);
      log.scrollTop = log.scrollHeight;
      Audio.play(role === 'auditor' ? 'type_auditor' : 'type_dev');
      if (idx >= this.activeBubbleFullText.length) {
        this.flushActiveBubble();
      }
    }, 16);
  }

  scheduleGreeting(caseId, greetingText) {
    clearTimeout(this.greetingTimer);
    this.greetingTimer = setTimeout(() => {
      const current = this.shift.session.currentCase;
      if (!current || current.id !== caseId) return;
      this.pushDialogue('dev', greetingText);
    }, 240);
  }

  showBanShutter(developer) {
    const shutter = el('booth-ban-shutter');
    const sub = el('ban-shutter-sub');
    if (sub) sub.textContent = t('game.ban.shutter_sub', { developer });
    if (shutter) shutter.classList.remove('hidden');
  }

  resetOverlays() {
    this.interrogation.clearTimers();
    const panel = el('polygraph-panel');
    if (panel) {
      panel.classList.add('hidden');
      panel.classList.remove('is-ready', 'is-scanning', 'is-danger', 'is-safe');
    }
    const statusEl = el('polygraph-status');
    const tagEl = el('polygraph-verdict-tag');
    const traceEl = el('polygraph-trace');
    if (statusEl) statusEl.textContent = t('game.polygraph.ready_status');
    if (tagEl) tagEl.textContent = t('game.polygraph.verdict_pending');
    if (traceEl) traceEl.textContent = t('game.polygraph.trace_hint');

    const startPolyBtn = el('btn-polygraph-start');
    if (startPolyBtn) {
      startPolyBtn.classList.add('hidden');
      startPolyBtn.disabled = false;
    }
    const banNowBtn = el('btn-polygraph-ban');
    if (banNowBtn) {
      banNowBtn.classList.add('hidden');
      banNowBtn.classList.remove('ban-ready');
      banNowBtn.disabled = false;
    }

    const shutter = el('booth-ban-shutter');
    if (shutter) shutter.classList.add('hidden');

    const askBtn = el('btn-interrogate');
    if (askBtn) askBtn.classList.remove('interrogate-ready');

    const polyBtn = el('btn-polygraph');
    if (polyBtn) polyBtn.classList.remove('polygraph-ready', 'polygraph-scanning', 'polygraph-danger');

    const banBtn = el('btn-ban');
    if (banBtn) banBtn.classList.remove('ban-ready');
  }

  updateInterrogateButton() {
    const session = this.shift.session;
    const btn = el('btn-interrogate');
    if (!btn) return;
    const pending = this.interrogation.hasPendingInterrogation();
    btn.disabled = !session.currentCase || session.caseLocked || session.interrogating || session.polygraphRunning || !pending;
    btn.classList.toggle('interrogate-ready', !!(pending && !session.interrogating && !session.polygraphRunning));
    const lbl = btn.querySelector('.intercom-label');
    if (lbl) {
      lbl.textContent = session.interrogating
        ? t('game.hud.interrogating')
        : (session.activeConflict && !pending ? t('game.hud.interrogated') : t('game.hud.interrogate'));
    }
  }

  updatePolygraphButton() {
    const run = this.campaign.run;
    const session = this.shift.session;
    const btn = el('btn-polygraph');
    if (!btn) return;
    const unlocked = run.day >= 3;
    btn.classList.toggle('hidden', !unlocked);
    if (!unlocked) return;

    const canOpen = !!(
      session.currentCase &&
      !session.caseLocked &&
      !session.interrogating &&
      !session.polygraphRunning
    );
    const polyActive = this.desk.isPolygraphMode();
    const isReady = !!(canOpen && session.interrogated && session.polygraphEligible && !session.polygraphTested && !polyActive);
    btn.disabled = !canOpen;
    btn.classList.toggle('polygraph-ready', isReady);
    btn.classList.toggle('btn-polygraph-on', polyActive);
    btn.classList.toggle('polygraph-scanning', !!session.polygraphRunning);

    const lbl = btn.querySelector('.intercom-label');
    if (lbl) {
      lbl.textContent = polyActive
        ? t('game.hud.polygraph_active')
        : (session.polygraphRunning
            ? t('game.hud.reversing')
            : (session.polygraphTested ? t('game.hud.reversed') : t('game.hud.polygraph')));
    }
  }

  updateBanButton() {
    const run = this.campaign.run;
    const session = this.shift.session;
    const btn = el('btn-ban');
    if (!btn) return;
    const unlocked = run.day >= 3;
    btn.classList.toggle('hidden', !unlocked);
    if (!unlocked) return;

    const canBan = !!(
      session.currentCase &&
      !session.currentCase.isFinalChoice &&
      !session.caseLocked &&
      !session.interrogating &&
      !session.polygraphRunning
    );
    btn.disabled = !canBan;
    btn.classList.toggle('ban-ready', canBan && !!session.lieConfirmed);
  }

  updateActionButtons() {
    this.updateInterrogateButton();
    this.updatePolygraphButton();
    this.updateBanButton();
  }
}
