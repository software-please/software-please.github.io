/* ============================================================================
   ClockSystem — Shift Clock Ticking & DayLevel Speed Multiplier
   ============================================================================ */

import { Audio } from '../core/audio.js';
import { t } from '../i18n/index.js';
import { SHIFT_START_MINUTES, SHIFT_END_MINUTES } from '../shift/ShiftSession.js';
import { Subsystem } from '../core/Subsystem.js';

const BASE_CLOCK_MS_PER_MIN = 900;

export class ClockSystem extends Subsystem {
  constructor(kernel) {
    super(kernel);
    this.clockTimer = null;
    this.campaign = null;
    this.shift = null;
    this.screen = null;
    this.booth = null;
  }

  connect(kernel) {
    this.campaign = kernel.campaign;
    this.shift = kernel.shift;
    this.screen = kernel.screen;
    this.booth = kernel.booth;
  }

  getSpeedMultiplier(run) {
    const target = run || this.campaign.run;
    const level = this.campaign.getLevel(target.day);
    return level.getClockMultiplier(target);
  }

  getIntervalMs(run) {
    return Math.round(BASE_CLOCK_MS_PER_MIN / this.getSpeedMultiplier(run));
  }

  format(totalMin) {
    const clamped = Math.min(SHIFT_END_MINUTES, Math.max(SHIFT_START_MINUTES, totalMin));
    const h = Math.floor(clamped / 60);
    const m = clamped % 60;
    return (h < 10 ? '0' + h : '' + h) + ':' + (m < 10 ? '0' + m : '' + m);
  }

  stop() {
    clearInterval(this.clockTimer);
    this.clockTimer = null;
  }

  start() {
    this.stop();
    const intervalMs = this.getIntervalMs(this.campaign.run);
    this.clockTimer = setInterval(() => {
      const session = this.shift.session;
      if (session.shiftEnded || this.screen.isAnyModalOpen()) return;
      if (!this.screen.isScreenActive('screen-game')) return;

      if (session.clockMinutes < SHIFT_END_MINUTES) {
        session.clockMinutes += 1;
        this.booth.updateHud();
      }
      if (session.clockMinutes >= SHIFT_END_MINUTES) {
        this.stop();
        Audio.play('clock_end');
        if (session.currentCase) {
          if (!session.caseLocked) {
            this.booth.setHint(t('game.shift.clock_over_wait'));
          }
        } else {
          this.shift.finishShift();
        }
      }
    }, intervalMs);
  }

  advance(minutes) {
    const session = this.shift.session;
    session.clockMinutes = Math.min(SHIFT_END_MINUTES, session.clockMinutes + minutes);
    this.booth.updateHud();
    if (session.clockMinutes >= SHIFT_END_MINUTES) {
      this.booth.setHint(t('game.shift.clock_over_wait'));
    }
  }
}
