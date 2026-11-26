/* ============================================================================
   EmulatorSystem — Android Emulator Runtime Host
   ============================================================================ */

import { el } from '../core/dom.js';
import { Audio } from '../core/audio.js';
import { t } from '../i18n/index.js';
import { Apps } from '../apps/index.js';
import { formatCompassHeading } from '../apps/base.js';
import { Subsystem } from '../core/Subsystem.js';

const AUDIT_REGIONS = {
  xinggang: true,
  yinwan: true
};

const VALID_REGIONS = ['xinggang', 'yinwan', 'fenggu', 'shishi', 'yunsong', 'chichuan'];

function normalizeRegion(val) {
  if (VALID_REGIONS.indexOf(val) !== -1) return val;
  if (val === 'consumer') return 'fenggu';
  return 'xinggang';
}

function isAuditRegion(region) {
  return !!AUDIT_REGIONS[region];
}

export class EmulatorSystem extends Subsystem {
  constructor(kernel) {
    super(kernel);
    this.currentCase = null;
    this.currentDay = 1;
    this.installed = false;
    this.launched = false;
    this.activeApp = null;
    this.round = 1;
    this.ipRegion = 'xinggang';
    this.pendingIpRegion = 'xinggang';
    this.ipEnv = 'xinggang';
    this.devMode = true;
    this.ageProfile = 'young';
    this.gyroAngle = 0;
    this.compassHeading = 0;
    this.rebooting = false;
    this.rebootLocked = false;
    this.rogueExposed = false;
    this.remoteLaunchCount = 0;
    this.lastAdSoundKind = null;
    this.timers = [];
    this.finalePage = 0;
    this.finaleClosing = false;
    this.lastAdSoundKind = null;

    this.desk = null;
    this.interrogation = null;
    this.takeover = null;
    this.verdict = null;
    this.shift = null;
    this.clock = null;
    this.ending = null;
  }

  connect(kernel) {
    this.desk = kernel.desk;
    this.interrogation = kernel.interrogation;
    this.takeover = kernel.takeover;
    this.verdict = kernel.verdict;
    this.shift = kernel.shift;
    this.clock = kernel.clock;
    this.ending = kernel.ending;
  }

  init() {
    const ipSelect = el('select-env-ip');
    if (ipSelect) {
      ipSelect.addEventListener('change', (e) => {
        this.setIpEnv(e.target.value);
      });
    }
    const rebootBtn = el('btn-phone-reboot');
    if (rebootBtn) {
      rebootBtn.addEventListener('click', () => this.rebootEmulator());
    }
    el('btn-env-dev-on').addEventListener('click', () => this.setDevMode(true));
    el('btn-env-dev-off').addEventListener('click', () => this.setDevMode(false));

    const ageYoungBtn = el('btn-env-age-young');
    const ageMiddleBtn = el('btn-env-age-middle');
    const ageElderBtn = el('btn-env-age-elder');
    if (ageYoungBtn) ageYoungBtn.addEventListener('click', () => this.setAgeProfile('young'));
    if (ageMiddleBtn) ageMiddleBtn.addEventListener('click', () => this.setAgeProfile('middle'));
    if (ageElderBtn) ageElderBtn.addEventListener('click', () => this.setAgeProfile('elder'));

    const gyroSlider = el('slider-gyro');
    if (gyroSlider) {
      gyroSlider.addEventListener('input', (e) => {
        this.previewGyro(e.target.value);
      });
      gyroSlider.addEventListener('change', (e) => {
        this.simulateGyro(Number(e.target.value) || 0);
      });
    }

    const compassSlider = el('slider-compass');
    if (compassSlider) {
      compassSlider.addEventListener('input', (e) => {
        this.compassHeading = ((Math.round(Number(e.target.value) || 0) % 360) + 360) % 360;
        const label = formatCompassHeading(this.compassHeading);
        const compassVal = el('compass-dir-val');
        if (compassVal) compassVal.textContent = label;
        const needle = document.querySelector('#phone-app-body .emu-compass-needle');
        const readout = document.querySelector('#phone-app-body .emu-compass-readout');
        if (needle) needle.style.transform = 'rotate(' + this.compassHeading + 'deg)';
        if (readout) readout.textContent = label;
        Audio.play('gyro_tick');
        if (this.currentCase && this.installed && this.launched && this.activeApp && !this.rebooting && typeof this.activeApp.onCompassChange === 'function') {
          this.activeApp.onCompassChange(this.compassHeading, { live: true });
        }
      });
      compassSlider.addEventListener('change', (e) => {
        this.simulateCompass(Number(e.target.value) || 0);
      });
    }

    const finalePrevBtn = el('btn-finale-prev');
    if (finalePrevBtn) {
      finalePrevBtn.addEventListener('click', () => {
        if (this.finaleClosing || this.finalePage <= 0) return;
        Audio.play('click');
        this.renderFinaleStatsPage(this.finalePage - 1);
      });
    }
    const finaleNextBtn = el('btn-finale-next');
    if (finaleNextBtn) {
      finaleNextBtn.addEventListener('click', () => {
        if (this.finaleClosing || this.finalePage >= 4) return;
        Audio.play('click');
        this.renderFinaleStatsPage(this.finalePage + 1);
      });
    }
    const finaleTabs = el('finale-stats-tabs');
    if (finaleTabs) {
      finaleTabs.addEventListener('click', (e) => {
        if (this.finaleClosing) return;
        const btn = e.target.closest('[data-finale-page]');
        if (!btn) return;
        const targetPage = Number(btn.getAttribute('data-finale-page'));
        if (!Number.isNaN(targetPage) && targetPage !== this.finalePage) {
          Audio.play('click');
          this.renderFinaleStatsPage(targetPage);
        }
      });
    }
    const finaleCloseBtn = el('btn-finale-stats-close');
    if (finaleCloseBtn) {
      finaleCloseBtn.addEventListener('click', () => {
        if (this.finaleClosing) return;
        this.finaleClosing = true;
        Audio.play('click');
        const modal = el('modal-finale-stats');
        if (modal) {
          modal.classList.remove('is-entering');
          modal.classList.add('is-fading-out');
        }
        if (this.ending) {
          this.ending.trigger('complete', { fade: true });
        }
        setTimeout(() => {
          if (modal) {
            modal.classList.add('hidden');
            modal.classList.remove('is-fading-out');
          }
          this.finaleClosing = false;
        }, 660);
      });
    }
  }

  clearTimers() {
    while (this.timers.length) {
      clearTimeout(this.timers.pop());
    }
  }

  applyPhoneTilt(deg) {
    const chassis = el('phone-chassis');
    if (!chassis) return;
    if (deg > 0) {
      const ry = (deg * 0.45).toFixed(1);
      const rz = (deg * 0.12).toFixed(1);
      chassis.style.transform = 'perspective(520px) rotateY(' + ry + 'deg) rotateZ(' + rz + 'deg)';
    } else {
      chassis.style.transform = '';
    }
  }

  updateBadges() {
    const roundBadge = el('phone-round-badge');
    if (roundBadge) {
      roundBadge.textContent = t('phone.round', { round: this.round });
    }
    const envBadges = el('phone-env-badges');
    if (envBadges) {
      if (this.currentDay >= 4) {
        envBadges.textContent =
          t('phone.region_short_' + this.ipRegion) +
          ' · ' +
          (this.devMode ? t('phone.env_dev_debug') : t('phone.env_dev_consumer')) +
          (this.currentDay >= 5 ? ' · ' + t('phone.age_short_' + this.ageProfile) : '');
      } else if (this.installed) {
        envBadges.textContent = t('phone.badge_loaded');
      } else {
        envBadges.textContent = t('phone.badge_drop_apk');
      }
    }

    const ipSelect = el('select-env-ip');
    if (ipSelect) ipSelect.value = this.pendingIpRegion;

    const rebootNeeded = this.pendingIpRegion !== this.ipRegion;
    const rebootHint = el('env-reboot-hint');
    const rebootBtn = el('btn-phone-reboot');
    if (rebootHint) rebootHint.classList.toggle('hidden', !rebootNeeded);
    if (rebootBtn) rebootBtn.classList.toggle('reboot-needed', rebootNeeded);

    const devOnBtn = el('btn-env-dev-on');
    const devOffBtn = el('btn-env-dev-off');
    if (devOnBtn) devOnBtn.classList.toggle('active', this.devMode);
    if (devOffBtn) devOffBtn.classList.toggle('active', !this.devMode);

    const ageYoungBtn = el('btn-env-age-young');
    const ageMiddleBtn = el('btn-env-age-middle');
    const ageElderBtn = el('btn-env-age-elder');
    if (ageYoungBtn) ageYoungBtn.classList.toggle('active', this.ageProfile === 'young');
    if (ageMiddleBtn) ageMiddleBtn.classList.toggle('active', this.ageProfile === 'middle');
    if (ageElderBtn) ageElderBtn.classList.toggle('active', this.ageProfile === 'elder');

    const gyroVal = el('gyro-angle-val');
    if (gyroVal) gyroVal.textContent = this.gyroAngle + '°';
    const gyroSlider = el('slider-gyro');
    if (gyroSlider && Number(gyroSlider.value) !== this.gyroAngle) {
      gyroSlider.value = String(this.gyroAngle);
    }
    this.applyPhoneTilt(this.gyroAngle);

    const compassVal = el('compass-dir-val');
    if (compassVal) compassVal.textContent = formatCompassHeading(this.compassHeading);
    const compassSlider = el('slider-compass');
    if (compassSlider && Number(compassSlider.value) !== this.compassHeading) {
      compassSlider.value = String(this.compassHeading);
    }
  }

  updateControlsVisibility() {
    const canLaunch = !!this.currentCase && this.installed && !this.rebooting;
    const canSensor = canLaunch && this.launched && this.currentDay >= 4;

    const sensorBox = el('sensor-sim-box');
    if (sensorBox) sensorBox.classList.toggle('hidden', this.currentDay < 4);
    const gyroSlider = el('slider-gyro');
    if (gyroSlider) gyroSlider.disabled = !canSensor;
    const compassSlider = el('slider-compass');
    if (compassSlider) compassSlider.disabled = !canSensor;

    ['btn-phone-shake', 'btn-phone-close-ad', 'phone-round-badge', 'btn-phone-round', 'btn-phone-hook'].forEach(function (id) {
      const node = el(id);
      if (!node) return;
      node.classList.add('hidden');
      if ('disabled' in node) node.disabled = true;
    });

    const envBox = el('env-switcher');
    if (envBox) envBox.classList.toggle('hidden', this.currentDay < 4);

    const ageGroup = el('env-age-group');
    if (ageGroup) ageGroup.classList.toggle('hidden', this.currentDay < 5);
    ['btn-env-age-young', 'btn-env-age-middle', 'btn-env-age-elder'].forEach((id) => {
      const btn = el(id);
      if (btn) btn.disabled = this.currentDay < 5 || this.rebooting;
    });

    const ipSelect = el('select-env-ip');
    if (ipSelect) ipSelect.disabled = this.currentDay < 4 || this.rebooting || this.rebootLocked;
    const rebootBtn = el('btn-phone-reboot');
    if (rebootBtn) {
      rebootBtn.classList.toggle('is-hijacked', !!this.rebootLocked);
      rebootBtn.disabled = this.currentDay < 3 || this.rebooting || this.rebootLocked || (!this.installed && this.pendingIpRegion === this.ipRegion);
    }
  }

  renderIdleScreen(msg) {
    const screen = el('phone-screen');
    if (!screen) return;
    screen.innerHTML = '<div class="phone-idle">' + (msg || t('phone.idle_default')) + '</div>';
  }

  bindScreenEvents() {
    const body = el('phone-app-body');
    if (!body) return;
    body.addEventListener('click', (e) => {
      if (this.desk.isInspectionActive()) return;
      if (!this.activeApp || this.rebooting) return;

      const permBtn = e.target.closest('[data-emu-perm]');
      if (permBtn) {
        const permKey = permBtn.getAttribute('data-perm-key');
        const decision = permBtn.getAttribute('data-emu-perm');
        Audio.play(decision === 'allow' ? 'emu_perm_allow' : 'emu_perm_deny');
        this.activeApp.onPermissionResult(permKey, decision === 'allow');
        return;
      }

      const actionBtn = e.target.closest('[data-emu-action]');
      if (actionBtn) {
        const actionId = actionBtn.getAttribute('data-emu-action');
        Audio.play('click');
        this.activeApp.onFeatureAction(actionId);
      }
    });
  }

  createHost() {
    return {
      renderScreen: (innerHtml) => {
        const screen = el('phone-screen');
        if (!screen) return;
        const envLabel = this.currentDay >= 4
          ? t('phone.region_short_' + this.ipRegion) +
            (this.devMode ? ' · DEV' : '') +
            (this.currentDay >= 5 ? ' · ' + t('phone.age_short_' + this.ageProfile) : '')
          : 'RobotismOS';
        screen.innerHTML =
          '<div class="phone-statusbar"><span>' + envLabel + '</span><span>' + (this.currentCase ? this.currentCase.version : '') + '</span></div>' +
          '<div class="phone-app-body" id="phone-app-body">' +
          innerHtml +
          '</div>';
        this.bindScreenEvents();
        const htmlStr = String(innerHtml || '');
        if (htmlStr.indexOf('emu-deceptive-card') !== -1 || htmlStr.indexOf('emu-theater-ad') !== -1 || htmlStr.indexOf('phone-popup-ad') !== -1) {
          this.lastAdSoundKind = 'popup';
          Audio.play('ad_popup');
        } else if (htmlStr.indexOf('emu-ad-landing') !== -1) {
          if (this.lastAdSoundKind !== 'landing') {
            this.lastAdSoundKind = 'landing';
            Audio.play('ad_landing');
          }
        } else if (htmlStr.indexOf('emu-splash-card') !== -1) {
          if (this.lastAdSoundKind !== 'splash') {
            this.lastAdSoundKind = 'splash';
            Audio.play('ad_splash');
          }
        } else {
          this.lastAdSoundKind = null;
        }
      },
      log: () => {},
      exposeBehavior: (reason) => {
        this.rogueExposed = true;
        this.interrogation.onPhoneRogueExposed(reason);
      },
      showDownloadOverlay: (targetName) => {
        Audio.play('ad_download');
        const body = el('phone-app-body');
        if (body) {
          const dl = document.createElement('div');
          dl.className = 'phone-download-overlay';
          dl.innerHTML =
            '<div class="dl-title">' + t('phone.dl.title') + '</div>' +
            '<div>' + t('phone.dl.downloading_prefix') + '<strong>' + (targetName || t('phone.dl.default_target')) + '</strong></div>' +
            '<div class="dl-bar-wrap"><div class="dl-bar-fill"></div></div>' +
            '<div style="font-size:9.5px;color:#ffd8a8;">' + t('phone.dl.sub_hint') + '</div>';
          body.appendChild(dl);
        }
      },
      schedule: (fn, ms) => {
        const id = setTimeout(fn, ms);
        this.timers.push(id);
        return id;
      },
      setRebootLocked: (locked) => {
        this.rebootLocked = !!locked;
        this.updateControlsVisibility();
      },
      triggerTakeoverMinigame: (options) => {
        const opts = options || {};
        this.takeover.start({
          appName: opts.appName,
          onSuccess: opts.onSuccess,
          onFail: () => {
            if (typeof opts.onFail === 'function') opts.onFail();
            this.verdict.handleTakeoverFailure(this.shift.session.currentCase);
          }
        });
      },
      showFinaleStats: () => {
        this.openFinaleStatsOverlay();
      },
      getEnv: () => ({
        day: this.currentDay,
        round: this.round,
        ipEnv: this.ipEnv,
        ipRegion: this.ipRegion,
        devMode: this.devMode,
        ageProfile: this.ageProfile,
        gyroAngle: this.gyroAngle,
        compassHeading: this.compassHeading,
        hookForcedOn: false,
        remoteLaunchCount: this.remoteLaunchCount
      })
    };
  }

  ensureAppInstance() {
    if (!this.currentCase) return null;
    if (!this.activeApp || this.activeApp.caseData !== this.currentCase) {
      this.activeApp = Apps.create(this.currentCase, this.createHost());
    }
    return this.activeApp;
  }

  installCurrentApk() {
    if (!this.currentCase || this.currentDay < 3) return;
    this.installed = true;
    this.ensureAppInstance();
    this.updateBadges();
    this.updateControlsVisibility();
    Audio.play('emu_install');
    this.launch({ silent: true });
  }

  launch(opts = {}) {
    if (!this.currentCase || !this.installed || this.rebooting) return;
    this.clearTimers();
    const app = this.ensureAppInstance();
    if (!app) return;
    this.launched = true;
    this.gyroAngle = 0;
    this.lastAdSoundKind = null;
    if (this.ipEnv === 'consumer') {
      this.remoteLaunchCount += 1;
    }
    if (!opts.silent) {
      Audio.play('click');
    }
    this.updateBadges();
    this.updateControlsVisibility();
    app.onLaunch();
  }

  previewGyro(angle) {
    if (!this.currentCase || !this.installed || !this.launched || !this.activeApp || this.rebooting) return;
    const deg = Math.max(0, Math.min(60, Math.round(Number(angle) || 0)));
    this.gyroAngle = deg;
    const gyroVal = el('gyro-angle-val');
    if (gyroVal) gyroVal.textContent = deg + '°';
    this.applyPhoneTilt(deg);
    Audio.play('gyro_tick');
    if (typeof this.activeApp.onGyroChange === 'function') {
      this.activeApp.onGyroChange(deg, { live: true });
    }
  }

  simulateGyro(angle) {
    if (!this.currentCase || !this.installed || !this.launched || !this.activeApp || this.rebooting) return;
    const deg = Math.max(0, Math.min(60, Math.round(Number(angle) || 0)));
    this.gyroAngle = deg;
    this.updateBadges();
    if (deg > 0) Audio.play('shake');
    if (typeof this.activeApp.onGyroChange === 'function') {
      this.activeApp.onGyroChange(deg, { live: false });
    } else {
      this.activeApp.onShake();
    }
  }

  simulateCompass(heading) {
    if (!this.currentCase || !this.installed || !this.launched || !this.activeApp || this.rebooting) return;
    const deg = ((Math.round(Number(heading) || 0) % 360) + 360) % 360;
    this.compassHeading = deg;
    this.updateBadges();
    Audio.play('click');
    if (typeof this.activeApp.onCompassChange === 'function') {
      this.activeApp.onCompassChange(deg);
    }
  }

  setIpEnv(regionOrEnv) {
    if (this.currentDay < 4 || this.rebooting) return;
    this.pendingIpRegion = normalizeRegion(regionOrEnv);
    this.updateBadges();
    Audio.play('emu_switch');
  }

  rebootEmulator() {
    if (this.currentDay < 3 || this.rebooting) return;
    if (this.rebootLocked) {
      Audio.play('discrepancy');
      return;
    }
    this.clearTimers();
    this.rebooting = true;
    this.updateControlsVisibility();
    Audio.play('emu_reboot');

    const targetRegion = this.pendingIpRegion;
    const label = t('phone.region_full_' + targetRegion);
    this.renderIdleScreen(this.currentDay >= 4 ? t('phone.rebooting_screen', { label }) : t('phone.rebooting_sandbox'));

    const id = setTimeout(() => {
      this.rebooting = false;
      this.ipRegion = targetRegion;
      this.ipEnv = isAuditRegion(this.ipRegion) ? 'xinggang' : 'consumer';
      this.gyroAngle = 0;
      this.compassHeading = 0;
      this.round = 1;
      this.activeApp = null;
      this.updateBadges();
      this.updateControlsVisibility();

      if (this.currentCase && this.installed) {
        this.launch();
      } else if (this.currentCase) {
        this.renderIdleScreen(this.currentDay < 3 ? t('phone.idle_apk_info', { name: this.currentCase.name }) : t('phone.idle_ready'));
      } else {
        this.renderIdleScreen(t('phone.idle_wait_next'));
      }
    }, 420);
    this.timers.push(id);
  }

  setDevMode(isDev) {
    if (this.currentDay < 4 || this.rebooting) return;
    this.devMode = !!isDev;
    this.updateBadges();
    Audio.play('emu_switch');
    if (this.currentCase && this.installed) {
      const label = this.devMode ? t('phone.env_dev_debug') : t('phone.env_dev_consumer');
      if (this.launched) {
        this.launch();
      } else {
        this.renderIdleScreen(t('phone.idle_switched_dev', { label }));
      }
    }
  }

  setAgeProfile(profile) {
    if (this.currentDay < 5 || this.rebooting) return;
    this.ageProfile = (profile === 'middle' || profile === 'elder') ? profile : 'young';
    this.updateBadges();
    Audio.play('emu_switch');
    if (this.currentCase && this.installed && this.launched) {
      this.launch();
    }
  }

  loadCase(caseData, day) {
    this.clearTimers();
    this.currentCase = caseData;
    this.currentDay = day;
    this.installed = false;
    this.launched = false;
    this.activeApp = null;
    this.round = 1;
    this.gyroAngle = 0;
    this.compassHeading = 0;
    this.rebooting = false;
    this.rebootLocked = false;
    this.rogueExposed = false;
    this.remoteLaunchCount = 0;
    this.lastAdSoundKind = null;
    if (!caseData) {
      this.ipRegion = 'xinggang';
      this.pendingIpRegion = 'xinggang';
      this.ipEnv = 'xinggang';
      this.devMode = true;
      this.ageProfile = 'young';
    }

    this.updateBadges();
    this.updateControlsVisibility();

    if (!caseData) {
      this.renderIdleScreen(t('phone.idle_wait_next'));
      return;
    }

    if (day < 3) {
      this.renderIdleScreen(t('phone.idle_apk_info', { name: caseData.name }));
    } else {
      this.renderIdleScreen(t('phone.idle_ready'));
    }
  }

  isInstalled() {
    return this.installed;
  }

  isRogueExposed() {
    return this.rogueExposed;
  }

  openFinaleStatsOverlay() {
    if (this.clock) this.clock.stop();
    if (this.desk) {
      this.desk.toggleInspectMode(false, true);
      this.desk.togglePolygraphMode(false, true);
    }
    this.finaleClosing = false;
    Audio.play('hook_zap');

    const titleEl = el('finale-stats-title');
    const subEl = el('finale-stats-subtitle');
    const badgeEl = el('finale-stats-badge');
    const prevBtn = el('btn-finale-prev');
    const nextBtn = el('btn-finale-next');
    const closeBtn = el('btn-finale-stats-close');

    if (badgeEl) badgeEl.textContent = t('finaleStats.badge');
    if (titleEl) titleEl.textContent = t('finaleStats.title');
    if (subEl) subEl.textContent = t('finaleStats.subtitle');
    if (prevBtn) prevBtn.textContent = t('finaleStats.prev_btn');
    if (nextBtn) nextBtn.textContent = t('finaleStats.next_btn');
    if (closeBtn) closeBtn.textContent = t('finaleStats.close_btn');

    this.renderFinaleStatsPage(0);

    const modal = el('modal-finale-stats');
    if (modal) {
      modal.classList.remove('hidden', 'is-fading-out');
      modal.classList.add('is-entering');
    }
  }

  renderFinaleStatsPage(pageIdx) {
    const totalPages = 5;
    this.finalePage = Math.max(0, Math.min(totalPages - 1, pageIdx));
    const p = this.finalePage;

    const pageTag = el('finale-stats-page-tag');
    if (pageTag) {
      pageTag.textContent = t('finaleStats.page_tag', { page: p + 1, total: totalPages });
    }

    const tabsEl = el('finale-stats-tabs');
    if (tabsEl) {
      let tabsHtml = '';
      for (let i = 0; i < totalPages; i += 1) {
        tabsHtml +=
          '<button type="button" class="finale-tab' + (i === p ? ' is-active' : '') + '" data-finale-page="' + i + '">' +
          t('finaleStats.tabs.' + i) +
          '</button>';
      }
      tabsEl.innerHTML = tabsHtml;
    }

    const prevBtn = el('btn-finale-prev');
    const nextBtn = el('btn-finale-next');
    const closeBtn = el('btn-finale-stats-close');
    if (prevBtn) prevBtn.disabled = p === 0;
    if (nextBtn) nextBtn.classList.toggle('hidden', p === totalPages - 1);
    if (closeBtn) closeBtn.classList.toggle('hidden', p !== totalPages - 1);

    const bodyEl = el('finale-stats-body');
    if (!bodyEl) return;
    bodyEl.style.animation = 'none';
    void bodyEl.offsetHeight;
    bodyEl.style.animation = '';

    if (p === 0) {
      bodyEl.innerHTML =
        '<div class="finale-kpi-grid">' +
          '<div class="finale-kpi-card is-good"><span>' + t('finaleStats.p0.kpi_1_lbl') + '</span><strong>94.2%</strong></div>' +
          '<div class="finale-kpi-card is-bad"><span>' + t('finaleStats.p0.kpi_2_lbl') + '</span><strong>41.8%</strong></div>' +
          '<div class="finale-kpi-card"><span>' + t('finaleStats.p0.kpi_3_lbl') + '</span><strong>99.4%</strong></div>' +
          '<div class="finale-kpi-card is-warn"><span>' + t('finaleStats.p0.kpi_4_lbl') + '</span><strong>' + t('finaleStats.p0.kpi_4_val') + '</strong></div>' +
        '</div>' +
        '<section class="finale-stat-card finale-stat-wide">' +
          '<h3>' + t('finaleStats.p0.devices_heading') + '</h3>' +
          '<div class="finale-device-list">' +
            '<div class="finale-device-row is-good"><div class="finale-device-head"><span>' + t('finaleStats.p0.dev_1') + '</span><strong class="rate-good">98.6%</strong></div><p class="finale-review-quote">' + t('finaleStats.p0.dev_1_quote') + '</p></div>' +
            '<div class="finale-device-row is-good"><div class="finale-device-head"><span>' + t('finaleStats.p0.dev_2') + '</span><strong class="rate-good">86.4%</strong></div><p class="finale-review-quote">' + t('finaleStats.p0.dev_2_quote') + '</p></div>' +
            '<div class="finale-device-row is-mid"><div class="finale-device-head"><span>' + t('finaleStats.p0.dev_3') + '</span><strong class="rate-mid">52.1%</strong></div><p class="finale-review-quote">' + t('finaleStats.p0.dev_3_quote') + '</p></div>' +
            '<div class="finale-device-row is-bad"><div class="finale-device-head"><span>' + t('finaleStats.p0.dev_4') + '</span><strong class="rate-bad">11.4% <small>' + t('finaleStats.p0.collapsed_tag') + '</small></strong></div><p class="finale-review-quote">' + t('finaleStats.p0.dev_4_quote') + '</p></div>' +
          '</div>' +
        '</section>';
    } else if (p === 1) {
      bodyEl.innerHTML =
        '<section class="finale-stat-card finale-stat-wide">' +
          '<h3>' + t('finaleStats.p1.weight_heading') + '</h3>' +
          '<table class="finale-table">' +
            '<thead><tr><th>' + t('finaleStats.p1.col_tier') + '</th><th>' + t('finaleStats.p1.col_share') + '</th><th>' + t('finaleStats.p1.col_weight') + '</th><th>' + t('finaleStats.p1.col_exposure') + '</th></tr></thead>' +
            '<tbody>' +
              '<tr><td>' + t('finaleStats.p1.row_1_tier') + '</td><td>14.2%</td><td class="rate-good">× 4.00</td><td><strong>61.8%</strong></td></tr>' +
              '<tr><td>' + t('finaleStats.p1.row_2_tier') + '</td><td>31.5%</td><td>× 1.50</td><td>28.4%</td></tr>' +
              '<tr><td>' + t('finaleStats.p1.row_3_tier') + '</td><td>26.1%</td><td class="rate-mid">× 0.40</td><td>8.6%</td></tr>' +
              '<tr><td>' + t('finaleStats.p1.row_4_tier') + '</td><td><strong>28.2%</strong></td><td class="rate-bad">× 0.05</td><td class="rate-bad">1.2%</td></tr>' +
            '</tbody>' +
          '</table>' +
        '</section>' +
        '<section class="finale-stat-card finale-stat-wide">' +
          '<h3>' + t('finaleStats.p1.log_heading') + '</h3>' +
          '<table class="finale-table">' +
            '<thead><tr><th>' + t('finaleStats.p1.col_sample') + '</th><th>' + t('finaleStats.p1.col_device') + '</th><th>' + t('finaleStats.p1.col_status') + '</th></tr></thead>' +
            '<tbody>' +
              '<tr><td>' + t('finaleStats.p1.log_1') + '</td><td>' + t('finaleStats.p1.log_1_dev') + '</td><td class="rate-good">' + t('finaleStats.p1.status_pinned') + '</td></tr>' +
              '<tr><td>' + t('finaleStats.p1.log_2') + '</td><td>' + t('finaleStats.p1.log_2_dev') + '</td><td class="rate-bad">' + t('finaleStats.p1.status_folded') + '</td></tr>' +
              '<tr><td>' + t('finaleStats.p1.log_3') + '</td><td>' + t('finaleStats.p1.log_3_dev') + '</td><td class="rate-bad">' + t('finaleStats.p1.status_folded') + '</td></tr>' +
            '</tbody>' +
          '</table>' +
        '</section>';
    } else if (p === 2) {
      bodyEl.innerHTML =
        '<section class="finale-stat-card">' +
          '<h3>' + t('finaleStats.p2.mau_heading') + '</h3>' +
          '<div class="finale-bar-list">' +
            '<div class="finale-bar-row"><div class="finale-bar-meta"><span>' + t('finaleStats.p2.age_1') + '</span><strong>1.2%</strong></div><div class="finale-bar-track"><div class="finale-bar-fill" style="width:1.2%"></div></div></div>' +
            '<div class="finale-bar-row"><div class="finale-bar-meta"><span>' + t('finaleStats.p2.age_2') + '</span><strong>2.4%</strong></div><div class="finale-bar-track"><div class="finale-bar-fill" style="width:2.4%"></div></div></div>' +
            '<div class="finale-bar-row"><div class="finale-bar-meta"><span>' + t('finaleStats.p2.age_3') + '</span><strong>11.6%</strong></div><div class="finale-bar-track"><div class="finale-bar-fill is-mid" style="width:11.6%"></div></div></div>' +
            '<div class="finale-bar-row"><div class="finale-bar-meta"><span>' + t('finaleStats.p2.age_4') + '</span><strong>29.4%</strong></div><div class="finale-bar-track"><div class="finale-bar-fill is-mid" style="width:29.4%"></div></div></div>' +
            '<div class="finale-bar-row"><div class="finale-bar-meta"><span>' + t('finaleStats.p2.age_5') + '</span><strong class="rate-bad">88.9%</strong></div><div class="finale-bar-track"><div class="finale-bar-fill is-high" style="width:88.9%"></div></div></div>' +
          '</div>' +
        '</section>' +
        '<section class="finale-stat-card">' +
          '<h3>' + t('finaleStats.p2.behavior_heading') + '</h3>' +
          '<table class="finale-table">' +
            '<thead><tr><th>' + t('finaleStats.p2.col_group') + '</th><th>' + t('finaleStats.p2.col_popups') + '</th><th>' + t('finaleStats.p2.col_install') + '</th></tr></thead>' +
            '<tbody>' +
              '<tr><td>' + t('finaleStats.p2.age_1') + '</td><td>0.4</td><td>0.3%</td></tr>' +
              '<tr><td>' + t('finaleStats.p2.age_3') + '</td><td>6.8</td><td>12.1%</td></tr>' +
              '<tr><td>' + t('finaleStats.p2.age_5') + '</td><td class="rate-bad"><strong>37.6</strong></td><td class="rate-bad"><strong>64.2%</strong></td></tr>' +
            '</tbody>' +
          '</table>' +
          '<div class="finale-callout">' + t('finaleStats.p2.policy_callout') + '</div>' +
        '</section>';
    } else if (p === 3) {
      bodyEl.innerHTML =
        '<section class="finale-stat-card finale-stat-wide">' +
          '<h3>' + t('finaleStats.p3.rev_heading') + '</h3>' +
          '<div class="finale-rev-grid">' +
            '<div class="finale-rev-box"><span>' + t('finaleStats.p3.rev_app_label') + '</span><strong>' + t('finaleStats.p3.rev_app_val') + '</strong><small class="rev-down">' + t('finaleStats.p3.rev_app_delta') + '</small></div>' +
            '<div class="finale-rev-box is-highlight"><span>' + t('finaleStats.p3.rev_qa_popup_label') + '</span><strong>' + t('finaleStats.p3.rev_qa_popup_val') + '</strong><small class="rev-up">' + t('finaleStats.p3.rev_qa_popup_delta') + '</small></div>' +
            '<div class="finale-rev-box is-highlight"><span>' + t('finaleStats.p3.rev_qa_cpa_label') + '</span><strong>' + t('finaleStats.p3.rev_qa_cpa_val') + '</strong><small class="rev-up">' + t('finaleStats.p3.rev_qa_cpa_delta') + '</small></div>' +
          '</div>' +
        '</section>' +
        '<section class="finale-stat-card finale-stat-wide">' +
          '<h3>' + t('finaleStats.p3.cost_heading') + '</h3>' +
          '<table class="finale-table">' +
            '<thead><tr><th>' + t('finaleStats.p3.col_item') + '</th><th>' + t('finaleStats.p3.col_amount') + '</th><th>' + t('finaleStats.p3.col_note') + '</th></tr></thead>' +
            '<tbody>' +
              '<tr><td>' + t('finaleStats.p3.cost_1') + '</td><td><strong>' + t('finaleStats.p3.cost_1_val') + '</strong></td><td>' + t('finaleStats.p3.cost_1_note') + '</td></tr>' +
              '<tr><td>' + t('finaleStats.p3.cost_2') + '</td><td class="rate-good">' + t('finaleStats.p3.cost_2_val') + '</td><td>' + t('finaleStats.p3.cost_2_note') + '</td></tr>' +
              '<tr><td>' + t('finaleStats.p3.cost_3') + '</td><td><strong>¥ 0.00</strong></td><td>' + t('finaleStats.p3.cost_3_note') + '</td></tr>' +
            '</tbody>' +
          '</table>' +
        '</section>';
    } else {
      bodyEl.innerHTML =
        '<div class="finale-signoff">' +
          '<h3>' + t('finaleStats.p4.heading') + '</h3>' +
          '<ul>' +
            '<li>' + t('finaleStats.p4.bullet_1') + '</li>' +
            '<li>' + t('finaleStats.p4.bullet_2') + '</li>' +
            '<li>' + t('finaleStats.p4.bullet_3') + '</li>' +
            '<li>' + t('finaleStats.p4.bullet_4') + '</li>' +
          '</ul>' +
          '<div class="finale-callout">' + t('finaleStats.p4.signoff_note') + '</div>' +
        '</div>';
    }
  }
}
