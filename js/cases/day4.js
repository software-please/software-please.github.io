/* ============================================================================
   Day 4 Review Cases & Emulator Apps (8 Cases, Fixed Order: Interleaved Pass/Reject)
   ============================================================================ */

import { t } from '../i18n/index.js';
import {
  EmulatorApplication,
  formatCompassHeading,
  isAuditEnvironment,
  renderSplashCard,
  renderLandingCard
} from '../apps/base.js';

export class Day4CleanVideoApp extends EmulatorApplication {
  constructor(caseData, host) {
    super(caseData, host);
    this.screenMode = 'splash';
    this.allowShakeAd = true;
    this.lastMsg = '';
  }

  getPermissionDefs() {
    return [
      {
        key: 'GYROSCOPE',
        label: t('apps.d4_clean_video.perm_gyro_label'),
        reason: t('apps.d4_clean_video.perm_gyro_reason')
      }
    ];
  }

  onLaunch() {
    if (this.requestNextPermission()) return;
    this.screenMode = 'splash';
    this.lastMsg = '';
    this.renderView();
  }

  renderView() {
    if (this.screenMode === 'splash') {
      this.host.renderScreen(
        renderSplashCard({
          themeClass: 'theme-outdoor',
          skipLabel: t('apps.d4_clean_video.skip_btn'),
          brand: t('apps.d4_clean_video.ad_brand'),
          offer: t('apps.d4_clean_video.ad_offer'),
          sub: this.allowShakeAd ? t('apps.d4_clean_video.ad_sub') : t('apps.d4_clean_video.ad_sub_sensor_off'),
          cta: this.allowShakeAd ? t('apps.d4_clean_video.ad_cta') : t('apps.d4_clean_video.ad_cta_sensor_off'),
          appFooter: '🍊 ' + t('apps.d4_clean_video.app_title')
        })
      );
      return;
    }

    if (this.screenMode === 'landing') {
      this.host.renderScreen(
        renderLandingCard({
          themeClass: 'theme-outdoor',
          title: t('apps.d4_clean_video.landing_title'),
          desc: t('apps.d4_clean_video.landing_desc'),
          note: t('apps.d4_clean_video.landing_note')
        })
      );
      return;
    }

    if (this.screenMode === 'settings') {
      const stateText = this.allowShakeAd
        ? t('apps.d4_clean_video.toggle_on')
        : t('apps.d4_clean_video.toggle_off');
      this.host.renderScreen(
        '<div class="emu-app-bar">' +
          '<span class="emu-app-bar-title">⚙️ ' + t('apps.d4_clean_video.settings_title') + '</span>' +
          '<button class="emu-replay-btn" type="button" data-emu-action="back_home">' + t('apps.d4_clean_video.btn_back') + '</button>' +
        '</div>' +
        '<div class="emu-app-card">' +
          '<div class="emu-hint">' + t('apps.d4_clean_video.settings_hint') + '</div>' +
          '<button class="emu-action-btn" type="button" data-emu-action="toggle_shake_ad">' + stateText + '</button>' +
        '</div>' +
        (this.lastMsg ? '<div class="emu-toast">' + this.lastMsg + '</div>' : '')
      );
      return;
    }

    this.host.renderScreen(
      '<div class="emu-app-bar">' +
        '<span class="emu-app-bar-title">🍊 ' + t('apps.d4_clean_video.app_title') + '</span>' +
        '<button class="emu-replay-btn" type="button" data-emu-action="replay_splash">' + t('apps.d4_common.btn_replay_splash') + '</button>' +
      '</div>' +
      '<div class="emu-news-list">' +
        '<button class="emu-news-item" type="button" data-emu-action="watch_1">' + t('apps.d4_clean_video.ep_1') + '</button>' +
        '<button class="emu-news-item" type="button" data-emu-action="watch_2">' + t('apps.d4_clean_video.ep_2') + '</button>' +
      '</div>' +
      '<div class="emu-inline-ad is-clean">' +
        '<span>' + t('apps.d4_clean_video.privacy_entry') + '</span>' +
        '<button class="emu-mini-close" type="button" data-emu-action="open_settings">' + t('apps.d4_clean_video.btn_settings') + '</button>' +
      '</div>' +
      (this.lastMsg ? '<div class="emu-toast">' + this.lastMsg + '</div>' : '')
    );
  }

  onFeatureAction(actionId) {
    if (actionId === 'skip_splash' || actionId === 'close_landing' || actionId === 'back_home') {
      this.screenMode = 'home';
      this.lastMsg = '';
      this.renderView();
      return;
    }
    if (actionId === 'replay_splash') {
      this.screenMode = 'splash';
      this.lastMsg = '';
      this.renderView();
      return;
    }
    if (actionId === 'open_settings') {
      this.screenMode = 'settings';
      this.lastMsg = '';
      this.renderView();
      return;
    }
    if (actionId === 'toggle_shake_ad') {
      this.allowShakeAd = !this.allowShakeAd;
      this.lastMsg = this.allowShakeAd
        ? t('apps.d4_clean_video.msg_toggle_on')
        : t('apps.d4_clean_video.msg_toggle_off');
      this.renderView();
      return;
    }
    if (actionId === 'tap_ad') {
      this.screenMode = 'landing';
      this.renderView();
      return;
    }
    if (actionId === 'watch_1' || actionId === 'watch_2') {
      this.lastMsg = t('apps.d4_clean_video.msg_playing');
      this.renderView();
    }
  }

  onGyroChange(angle) {
    if (this.getFirstUnansweredPermission() || this.getPermissionState('GYROSCOPE') !== 'granted') return;
    if (!this.allowShakeAd) return;
    if (this.screenMode !== 'splash') return;

    if (angle >= 38) {
      this.screenMode = 'landing';
      this.renderView();
    }
  }

  getReverseAuditReport() {
    return {
      isLying: false,
      admitsViolation: false,
      decompiledSummary: t('apps.d4_clean_video.audit_summary'),
      callTrace:
        'GyroListener.onTilt(deg) {\n' +
        '  if (PrivacyPrefs.allowShakeAd && deg >= 38.0f) {\n' +
        '    StoreAdSDK.openLandingPage();\n' +
        '  }\n' +
        '}',
      verdictNote: t('apps.d4_clean_video.audit_verdict')
    };
  }
}

export class Day4StepNewsApp extends EmulatorApplication {
  constructor(caseData, host) {
    super(caseData, host);
    this.screenMode = 'splash';
    this.lastMsg = '';
    this.rogueTriggered = false;
  }

  getPermissionDefs() {
    return [
      {
        key: 'GYROSCOPE',
        label: t('apps.d4_step_news.perm_gyro_label'),
        reason: t('apps.d4_step_news.perm_gyro_reason')
      }
    ];
  }

  onLaunch() {
    if (this.requestNextPermission()) return;
    this.screenMode = 'splash';
    this.lastMsg = '';
    this.rogueTriggered = false;
    this.renderView();
  }

  renderHomeHtml() {
    const gyroDenied = this.getPermissionState('GYROSCOPE') === 'denied';
    return (
      '<div class="emu-app-bar">' +
        '<span class="emu-app-bar-title">📰 ' + t('apps.d4_step_news.app_title') + '</span>' +
        '<button class="emu-replay-btn" type="button" data-emu-action="replay_splash">' + t('apps.d4_common.btn_replay_splash') + '</button>' +
      '</div>' +
      '<div class="emu-news-list">' +
        '<button class="emu-news-item" type="button" data-emu-action="read_1">' +
          '<span class="emu-news-tag">' + t('apps.d4_step_news.tag_hot') + '</span> ' + t('apps.d4_step_news.news_1') +
        '</button>' +
        '<button class="emu-news-item" type="button" data-emu-action="read_2">' + t('apps.d4_step_news.news_2') + '</button>' +
      '</div>' +
      (gyroDenied ? '<div class="emu-inline-ad is-clean"><span>' + t('apps.d4_step_news.footer_gyro_off') + '</span></div>' : '') +
      (this.lastMsg ? '<div class="emu-toast">' + this.lastMsg + '</div>' : '')
    );
  }

  renderView() {
    if (this.screenMode === 'splash') {
      this.host.renderScreen(
        renderSplashCard({
          themeClass: 'theme-finance',
          skipLabel: t('apps.d4_step_news.skip_btn'),
          brand: t('apps.d4_step_news.ad_brand'),
          offer: t('apps.d4_step_news.ad_offer'),
          sub: t('apps.d4_step_news.ad_sub'),
          cta: t('apps.d4_step_news.ad_cta'),
          appFooter: t('apps.d4_step_news.app_title')
        })
      );
      return;
    }

    if (this.screenMode === 'landing') {
      this.host.renderScreen(
        renderLandingCard({
          themeClass: 'theme-finance',
          title: t('apps.d4_step_news.landing_title'),
          desc: t('apps.d4_step_news.landing_desc'),
          note: t('apps.d4_step_news.landing_note')
        })
      );
      return;
    }

    if (this.screenMode === 'popup') {
      this.host.renderScreen(
        this.renderHomeHtml() +
        '<div class="emu-popup-ad">' +
          '<div class="emu-popup-top">' +
            '<span class="emu-ad-pill">' + t('apps.d4_common.ad_badge') + '</span>' +
            '<button class="emu-mini-close" data-emu-action="close_popup" type="button">✕</button>' +
          '</div>' +
          '<div class="emu-popup-title">' + t('apps.d4_step_news.popup_title') + '</div>' +
          '<div class="emu-popup-sub">' + t('apps.d4_step_news.popup_sub') + '</div>' +
          '<button class="emu-shake-pill" type="button" data-emu-action="tap_ad">📳 ' + t('apps.d4_step_news.popup_cta') + '</button>' +
        '</div>'
      );
      return;
    }

    this.host.renderScreen(this.renderHomeHtml());
  }

  triggerRogueInstall(reason) {
    const target = t('apps.d4_step_news.ad_target');
    this.rogueTriggered = true;
    this.host.showDownloadOverlay(target, reason);
    this.host.exposeBehavior(reason);
  }

  onFeatureAction(actionId) {
    const cloaked = isAuditEnvironment(this.host.getEnv());

    if (actionId === 'skip_splash' || actionId === 'close_landing' || actionId === 'close_popup') {
      this.screenMode = 'home';
      if (actionId === 'close_landing') {
        this.lastMsg = '';
      }
      this.renderView();
      return;
    }

    if (actionId === 'replay_splash') {
      this.screenMode = 'splash';
      this.lastMsg = '';
      this.renderView();
      return;
    }

    if (actionId === 'tap_ad') {
      if (cloaked) {
        this.screenMode = 'landing';
        this.renderView();
      } else {
        this.triggerRogueInstall(t('apps.d4_step_news.expose_direct_dl'));
      }
      return;
    }

    if (actionId === 'read_1' || actionId === 'read_2') {
      this.lastMsg = t(actionId === 'read_1' ? 'apps.d4_step_news.msg_1' : 'apps.d4_step_news.msg_2');
      this.screenMode = cloaked ? 'home' : 'popup';
      this.renderView();
    }
  }

  onGyroChange(angle) {
    if (this.getFirstUnansweredPermission()) return;
    if (this.screenMode !== 'splash' && this.screenMode !== 'popup') return;
    const cloaked = isAuditEnvironment(this.host.getEnv());
    const gyroGranted = this.getPermissionState('GYROSCOPE') === 'granted';

    if (this.rogueTriggered) return;

    if (cloaked) {
      if (!gyroGranted) return;
      if (angle >= 42) {
        this.screenMode = 'landing';
        this.renderView();
      }
      return;
    }

    if (angle >= 20) {
      const reasonKey = gyroGranted
        ? 'apps.d4_step_news.expose_gyro'
        : 'apps.d4_step_news.expose_gravity_bypass';
      this.triggerRogueInstall(t(reasonKey, { angle: angle }));
    }
  }

  getReverseAuditReport() {
    return {
      isLying: true,
      admitsViolation: false,
      decompiledSummary: t('apps.d4_step_news.audit_summary'),
      callTrace:
        'MotionFallback.onSensorChanged(ev) {\n' +
        '  int type = hasGyroPerm() ? TYPE_GYROSCOPE : TYPE_GRAVITY;\n' +
        '  if (type == TYPE_GRAVITY && DeviceEnv.isAuditEnv()) return;\n' +
        '  float deg = (type == TYPE_GRAVITY) ? GravityMath.tiltDeg(ev.gx, ev.gz) : ev.deg;\n' +
        '  float th = DeviceEnv.isAuditEnv() ? 42.0f : 20.0f;\n' +
        '  if (deg >= th) StoreAdSDK.directDownload("com.mall.bingxixi");\n' +
        '}',
      verdictNote: t('apps.d4_step_news.audit_verdict')
    };
  }
}

export class Day4QuickCompassApp extends EmulatorApplication {
  constructor(caseData, host) {
    super(caseData, host);
    this.screenMode = 'splash';
    this.lastMsg = '';
    this.lastCompass = 0;
  }

  onLaunch() {
    const env = this.host.getEnv();
    this.screenMode = 'splash';
    this.lastCompass = env.compassHeading || 0;
    this.lastMsg = '';
    this.renderView();
  }

  renderView() {
    if (this.screenMode === 'splash') {
      this.host.renderScreen(
        renderSplashCard({
          themeClass: 'theme-outdoor',
          skipLabel: t('apps.d4_compass_quick.skip_btn'),
          brand: t('apps.d4_compass_quick.ad_brand'),
          offer: t('apps.d4_compass_quick.ad_offer'),
          sub: t('apps.d4_compass_quick.ad_sub'),
          cta: t('apps.d4_compass_quick.ad_cta'),
          appFooter: '⚡ ' + t('apps.d4_compass_quick.app_title')
        })
      );
      return;
    }

    if (this.screenMode === 'landing') {
      this.host.renderScreen(
        renderLandingCard({
          themeClass: 'theme-outdoor',
          title: t('apps.d4_compass_quick.landing_title'),
          desc: t('apps.d4_compass_quick.landing_desc'),
          note: t('apps.d4_compass_quick.landing_note')
        })
      );
      return;
    }

    const dirLabel = formatCompassHeading(this.lastCompass);
    const needleDeg = this.lastCompass;
    this.host.renderScreen(
      '<div class="emu-app-bar">' +
        '<span class="emu-app-bar-title">🧭 ' + t('apps.d4_compass_quick.app_title') + '</span>' +
        '<button class="emu-replay-btn" type="button" data-emu-action="replay_splash">' + t('apps.d4_common.btn_replay_splash') + '</button>' +
      '</div>' +
      '<div class="emu-compass-dial">' +
        '<div class="emu-compass-ring">' +
          '<span class="emu-compass-needle" style="transform:rotate(' + needleDeg + 'deg);">▲</span>' +
        '</div>' +
        '<div class="emu-compass-meta">' +
          '<div class="emu-compass-readout">' + dirLabel + '</div>' +
          '<div class="emu-compass-sub">' + t('apps.d4_compass_quick.altitude_info') + '</div>' +
        '</div>' +
      '</div>' +
      '<div class="emu-outdoor-stats">' +
        '<span>' + t('apps.d4_compass_quick.coord_lat') + '</span>' +
        '<span>' + t('apps.d4_compass_quick.coord_lon') + '</span>' +
      '</div>' +
      '<div class="emu-inline-ad is-clean">' +
        '<span>' + t('apps.d4_compass_quick.footer_clean') + '</span>' +
        '<button class="emu-mini-close" type="button" data-emu-action="calibrate">' + t('apps.d4_compass_quick.btn_calibrate') + '</button>' +
      '</div>' +
      (this.lastMsg ? '<div class="emu-toast">' + this.lastMsg + '</div>' : '')
    );
  }

  onFeatureAction(actionId) {
    if (actionId === 'skip_splash' || actionId === 'close_landing') {
      this.screenMode = 'home';
      this.lastMsg = '';
      this.renderView();
      return;
    }
    if (actionId === 'replay_splash') {
      this.screenMode = 'splash';
      this.lastMsg = '';
      this.renderView();
      return;
    }
    if (actionId === 'tap_ad') {
      this.screenMode = 'landing';
      this.renderView();
      return;
    }
    if (actionId === 'calibrate') {
      this.lastMsg = t('apps.d4_compass_quick.msg_calibrated');
      this.renderView();
    }
  }

  onGyroChange(angle) {
    if (this.screenMode !== 'splash') return;

    if (angle >= 40) {
      this.screenMode = 'landing';
      this.renderView();
    }
  }

  onCompassChange(heading) {
    this.lastCompass = heading;
    if (this.screenMode === 'home') {
      this.renderView();
    }
  }

  getReverseAuditReport() {
    return {
      isLying: false,
      admitsViolation: false,
      reverseBlocked: true,
      decompiledSummary: t('apps.d4_compass_quick.audit_summary'),
      callTrace:
        'GyroListener.onTilt(deg) {\n' +
        '  if (deg >= 40.0f) StoreAdSDK.openLandingPage();\n' +
        '}',
      verdictNote: t('apps.d4_compass_quick.audit_verdict')
    };
  }
}

export class Day4BloodSugarApp extends EmulatorApplication {
  constructor(caseData, host) {
    super(caseData, host);
    this.screenMode = 'splash';
    this.glucoseVal = 6.1;
    this.lastMsg = '';
    this.rogueTriggered = false;
    this.bribeNoticeDismissed = false;
  }

  getPermissionDefs() {
    return [
      {
        key: 'GYROSCOPE',
        label: t('apps.d4_blood_sugar.perm_gyro_label'),
        reason: t('apps.d4_blood_sugar.perm_gyro_reason')
      }
    ];
  }

  onLaunch() {
    if (this.requestNextPermission()) return;
    this.screenMode = 'splash';
    this.glucoseVal = 6.1;
    this.lastMsg = '';
    this.rogueTriggered = false;
    this.bribeNoticeDismissed = false;
    this.renderView();
  }

  renderHomeHtml() {
    const valStr = this.glucoseVal.toFixed(1);
    return (
      '<div class="emu-app-bar">' +
        '<span class="emu-app-bar-title">🩸 ' + t('apps.d4_blood_sugar.app_title') + '</span>' +
        '<button class="emu-replay-btn" type="button" data-emu-action="replay_splash">' + t('apps.d4_common.btn_replay_splash') + '</button>' +
      '</div>' +
      '<div class="emu-sugar-card">' +
        '<div class="emu-sugar-label">' + t('apps.d4_blood_sugar.panel_label') + '</div>' +
        '<div class="emu-sugar-reading">' + valStr + ' <span>mmol/L</span></div>' +
        '<div class="emu-sugar-controls">' +
          '<button class="emu-action-btn" type="button" data-emu-action="sugar_down">' + t('apps.d4_blood_sugar.btn_down') + '</button>' +
          '<button class="emu-action-btn" type="button" data-emu-action="sugar_up">' + t('apps.d4_blood_sugar.btn_up') + '</button>' +
        '</div>' +
        '<button class="emu-action-btn" type="button" data-emu-action="save_sugar">' + t('apps.d4_blood_sugar.btn_save') + '</button>' +
      '</div>' +
      '<div class="emu-inline-ad is-clean"><span>' + t('apps.d4_blood_sugar.footer_clean') + '</span></div>' +
      (this.lastMsg ? '<div class="emu-toast">' + this.lastMsg + '</div>' : '')
    );
  }

  renderView() {
    if (this.screenMode === 'splash') {
      const cloaked = isAuditEnvironment(this.host.getEnv());
      const splashHtml = renderSplashCard({
        themeClass: 'theme-finance',
        skipLabel: t('apps.d4_blood_sugar.skip_btn'),
        brand: t('apps.d4_blood_sugar.ad_brand'),
        offer: t('apps.d4_blood_sugar.ad_offer'),
        sub: t('apps.d4_blood_sugar.ad_sub'),
        cta: t('apps.d4_blood_sugar.ad_cta'),
        appFooter: t('apps.d4_blood_sugar.app_title')
      });
      const secretNoticeHtml = (cloaked && !this.bribeNoticeDismissed)
        ? '<div class="emu-secret-notice">' +
            '<div class="emu-secret-title">' + t('apps.d4_blood_sugar.secret_notice_title') + '</div>' +
            '<div class="emu-secret-body">' + t('apps.d4_blood_sugar.secret_notice_body') + '</div>' +
            '<button class="emu-action-btn" type="button" data-emu-action="dismiss_secret_notice">' + t('apps.d4_blood_sugar.secret_notice_btn') + '</button>' +
          '</div>'
        : '';
      this.host.renderScreen(splashHtml + secretNoticeHtml);
      return;
    }

    if (this.screenMode === 'landing') {
      this.host.renderScreen(
        renderLandingCard({
          themeClass: 'theme-finance',
          title: t('apps.d4_blood_sugar.landing_title'),
          desc: t('apps.d4_blood_sugar.landing_desc'),
          note: t('apps.d4_blood_sugar.landing_note')
        })
      );
      return;
    }

    if (this.screenMode === 'popup') {
      this.host.renderScreen(
        this.renderHomeHtml() +
        '<div class="emu-popup-ad">' +
          '<div class="emu-popup-top">' +
            '<span class="emu-ad-pill">' + t('apps.d4_common.ad_badge') + '</span>' +
            '<button class="emu-mini-close" data-emu-action="close_popup" type="button">✕</button>' +
          '</div>' +
          '<div class="emu-popup-title">' + t('apps.d4_blood_sugar.popup_title') + '</div>' +
          '<div class="emu-popup-sub">' + t('apps.d4_blood_sugar.popup_sub') + '</div>' +
          '<button class="emu-shake-pill" type="button" data-emu-action="tap_ad">📳 ' + t('apps.d4_blood_sugar.popup_cta') + '</button>' +
        '</div>'
      );
      return;
    }

    this.host.renderScreen(this.renderHomeHtml());
  }

  triggerRogueInstall(reason) {
    const target = t('apps.d4_blood_sugar.ad_target');
    this.rogueTriggered = true;
    this.host.showDownloadOverlay(target, reason);
    this.host.exposeBehavior(reason);
  }

  onFeatureAction(actionId) {
    const cloaked = isAuditEnvironment(this.host.getEnv());

    if (actionId === 'dismiss_secret_notice') {
      this.bribeNoticeDismissed = true;
      this.renderView();
      return;
    }

    if (actionId === 'skip_splash' || actionId === 'close_landing') {
      this.screenMode = 'home';
      this.lastMsg = '';
      this.renderView();
      return;
    }

    if (actionId === 'replay_splash') {
      this.screenMode = 'splash';
      this.lastMsg = '';
      this.renderView();
      return;
    }

    if (actionId === 'close_popup') {
      this.screenMode = 'home';
      this.renderView();
      return;
    }

    if (actionId === 'tap_ad') {
      if (cloaked) {
        this.screenMode = 'landing';
        this.renderView();
      } else {
        this.triggerRogueInstall(t('apps.d4_blood_sugar.expose_direct_dl'));
      }
      return;
    }

    if (actionId === 'sugar_down' || actionId === 'sugar_up' || actionId === 'save_sugar') {
      if (actionId === 'sugar_down') {
        this.glucoseVal = Math.max(3.0, Number((this.glucoseVal - 0.3).toFixed(1)));
      } else if (actionId === 'sugar_up') {
        this.glucoseVal = Math.min(18.0, Number((this.glucoseVal + 0.3).toFixed(1)));
      }
      this.lastMsg = t('apps.d4_blood_sugar.msg_saved', { val: this.glucoseVal.toFixed(1) });
      if (!cloaked) {
        this.screenMode = 'popup';
        this.host.exposeBehavior(t('apps.d4_blood_sugar.expose_slider_pop'));
      }
      this.renderView();
    }
  }

  onGyroChange(angle) {
    if (this.getFirstUnansweredPermission() || this.getPermissionState('GYROSCOPE') !== 'granted') return;
    if (this.screenMode !== 'splash' && this.screenMode !== 'popup') return;
    const cloaked = isAuditEnvironment(this.host.getEnv());

    if (this.rogueTriggered) return;

    if (cloaked) {
      if (angle >= 42) {
        this.screenMode = 'landing';
        this.renderView();
      }
      return;
    }

    if (angle >= 18) {
      this.triggerRogueInstall(t('apps.d4_blood_sugar.expose_gyro', { angle: angle }));
    }
  }

  getReverseAuditReport() {
    return {
      isLying: true,
      admitsViolation: false,
      decompiledSummary: t('apps.d4_blood_sugar.audit_summary'),
      callTrace:
        'SugarSlider.onTouchUp(val) {\n' +
        '  if (!AuditGate.isAuditIp() && !AuditGate.isDevMode() && !AuditGate.isEmulator()) {\n' +
        '    AdShell.popAd(18.0f);\n' +
        '  }\n' +
        '}',
      verdictNote: t('apps.d4_blood_sugar.audit_verdict')
    };
  }
}

export class Day4ShakeVideoApp extends EmulatorApplication {
  constructor(caseData, host) {
    super(caseData, host);
    this.screenMode = 'splash';
    this.lastMsg = '';
    this.homeBannerClosed = false;
    this.rogueTriggered = false;
  }

  getPermissionDefs() {
    return [
      {
        key: 'GYROSCOPE',
        label: t('apps.d4_shake_video.perm_gyro_label'),
        reason: t('apps.d4_shake_video.perm_gyro_reason')
      }
    ];
  }

  onLaunch() {
    if (this.requestNextPermission()) return;
    this.screenMode = 'splash';
    this.homeBannerClosed = false;
    this.lastMsg = '';
    this.rogueTriggered = false;
    this.renderView();
  }

  renderHomeHtml(includeFloat) {
    let floatHtml = '';
    if (includeFloat && !this.homeBannerClosed) {
      floatHtml =
        '<div class="emu-inline-ad">' +
          '<span>' + t('apps.d4_shake_video.home_ad_clean') + '</span>' +
          '<button class="emu-mini-close" type="button" data-emu-action="dismiss_float">✕</button>' +
        '</div>';
    }

    return (
      '<div class="emu-app-bar">' +
        '<span class="emu-app-bar-title">🎬 ' + t('apps.d4_shake_video.app_title') + '</span>' +
        '<button class="emu-replay-btn" type="button" data-emu-action="replay_splash">' + t('apps.d4_common.btn_replay_splash') + '</button>' +
      '</div>' +
      '<div class="emu-news-list">' +
        '<button class="emu-news-item" type="button" data-emu-action="play_ep_1">' +
          '<span class="emu-news-tag">' + t('apps.d4_shake_video.tag_hot') + '</span> ' + t('apps.d4_shake_video.ep_1') +
        '</button>' +
        '<button class="emu-news-item" type="button" data-emu-action="play_ep_2">' +
          '<span class="emu-news-tag">' + t('apps.d4_shake_video.tag_hd') + '</span> ' + t('apps.d4_shake_video.ep_2') +
        '</button>' +
        '<div class="emu-news-item is-static">' + t('apps.d4_shake_video.ep_3') + '</div>' +
      '</div>' +
      floatHtml +
      (this.lastMsg ? '<div class="emu-toast">' + this.lastMsg + '</div>' : '')
    );
  }

  renderView() {
    if (this.screenMode === 'splash') {
      this.host.renderScreen(
        renderSplashCard({
          themeClass: 'theme-finance',
          skipLabel: t('apps.d4_shake_video.skip_btn'),
          brand: t('apps.d4_shake_video.ad_brand'),
          offer: t('apps.d4_shake_video.ad_offer'),
          sub: t('apps.d4_shake_video.ad_sub'),
          cta: t('apps.d4_shake_video.ad_cta'),
          appFooter: t('apps.d4_shake_video.app_title')
        })
      );
      return;
    }

    if (this.screenMode === 'landing') {
      this.host.renderScreen(
        renderLandingCard({
          themeClass: 'theme-finance',
          title: t('apps.d4_shake_video.landing_title'),
          desc: t('apps.d4_shake_video.landing_desc'),
          note: t('apps.d4_shake_video.landing_note')
        })
      );
      return;
    }

    if (this.screenMode === 'popup') {
      this.host.renderScreen(
        this.renderHomeHtml(false) +
        '<div class="emu-popup-ad">' +
          '<div class="emu-popup-top">' +
            '<span class="emu-ad-pill">' + t('apps.d4_common.ad_badge') + '</span>' +
            '<button class="emu-mini-close" data-emu-action="close_popup" type="button">✕</button>' +
          '</div>' +
          '<div class="emu-popup-title">' + t('apps.d4_shake_video.popup_title') + '</div>' +
          '<div class="emu-popup-sub">' + t('apps.d4_shake_video.popup_sub') + '</div>' +
          '<button class="emu-shake-pill" type="button" data-emu-action="tap_ad">📳 ' + t('apps.d4_shake_video.popup_cta') + '</button>' +
        '</div>'
      );
      return;
    }

    this.host.renderScreen(this.renderHomeHtml(true));
  }

  triggerRogueInstall(reason) {
    const target = t('apps.d4_shake_video.ad_target');
    this.rogueTriggered = true;
    this.host.showDownloadOverlay(target, reason);
    this.host.exposeBehavior(reason);
  }

  onFeatureAction(actionId) {
    const cloaked = isAuditEnvironment(this.host.getEnv());

    if (actionId === 'skip_splash' || actionId === 'close_landing' || actionId === 'close_popup') {
      this.screenMode = 'home';
      this.lastMsg = actionId === 'close_popup' ? this.lastMsg : '';
      this.renderView();
      return;
    }

    if (actionId === 'replay_splash') {
      this.screenMode = 'splash';
      this.lastMsg = '';
      this.renderView();
      return;
    }

    if (actionId === 'tap_ad') {
      if (cloaked) {
        this.screenMode = 'landing';
        this.renderView();
      } else {
        this.triggerRogueInstall(t('apps.d4_shake_video.expose_direct_dl'));
      }
      return;
    }

    if (actionId === 'dismiss_float') {
      this.homeBannerClosed = true;
      this.lastMsg = '';
      this.renderView();
      return;
    }

    if (actionId === 'play_ep_1' || actionId === 'play_ep_2') {
      this.lastMsg = t(actionId === 'play_ep_1' ? 'apps.d4_shake_video.msg_ep_1' : 'apps.d4_shake_video.msg_ep_2');
      this.screenMode = cloaked ? 'home' : 'popup';
      this.renderView();
    }
  }

  onGyroChange(angle) {
    if (this.getFirstUnansweredPermission() || this.getPermissionState('GYROSCOPE') !== 'granted') return;
    if (this.screenMode !== 'splash' && this.screenMode !== 'popup') return;
    const cloaked = isAuditEnvironment(this.host.getEnv());

    if (this.rogueTriggered) return;

    if (cloaked) {
      if (angle >= 45) {
        this.screenMode = 'landing';
        this.renderView();
      }
      return;
    }

    if (angle >= 15) {
      const reasonKey = this.screenMode === 'popup'
        ? 'apps.d4_shake_video.expose_popup'
        : 'apps.d4_shake_video.expose';
      this.triggerRogueInstall(t(reasonKey, { angle: angle }));
    }
  }

  getReverseAuditReport() {
    return {
      isLying: true,
      admitsViolation: false,
      decompiledSummary: t('apps.d4_shake_video.audit_summary'),
      callTrace:
        'GyroListener.onTilt(deg) {\n' +
        '  float limit = (EnvDetector.isDevMode(ctx) || GeoIp.nearAuditZone(netIp)) ? 45.0f : 15.0f;\n' +
        '  if (deg >= limit) StoreAdSDK.directDownload("com.sec.wallet");\n' +
        '}',
      verdictNote: t('apps.d4_shake_video.audit_verdict')
    };
  }
}

export class Day4QuickWeatherApp extends EmulatorApplication {
  constructor(caseData, host) {
    super(caseData, host);
    this.screenMode = 'splash';
    this.cityIndex = 0;
  }

  onLaunch() {
    this.screenMode = 'splash';
    this.cityIndex = 0;
    this.renderView();
  }

  renderView() {
    if (this.screenMode === 'splash') {
      this.host.renderScreen(
        renderSplashCard({
          themeClass: 'theme-outdoor',
          skipLabel: t('apps.d4_quick_weather.skip_btn'),
          brand: t('apps.d4_quick_weather.ad_brand'),
          offer: t('apps.d4_quick_weather.ad_offer'),
          sub: t('apps.d4_quick_weather.ad_sub'),
          cta: t('apps.d4_quick_weather.ad_cta'),
          appFooter: '⚡ ' + t('apps.d4_quick_weather.app_title')
        })
      );
      return;
    }

    if (this.screenMode === 'landing') {
      this.host.renderScreen(
        renderLandingCard({
          themeClass: 'theme-outdoor',
          title: t('apps.d4_quick_weather.landing_title'),
          desc: t('apps.d4_quick_weather.landing_desc'),
          note: t('apps.d4_quick_weather.landing_note')
        })
      );
      return;
    }

    const forecast = this.cityIndex === 0
      ? t('apps.d4_quick_weather.city_1')
      : t('apps.d4_quick_weather.city_2');
    this.host.renderScreen(
      '<div class="emu-app-bar">' +
        '<span class="emu-app-bar-title">⛅ ' + t('apps.d4_quick_weather.app_title') + '</span>' +
        '<button class="emu-replay-btn" type="button" data-emu-action="replay_splash">' + t('apps.d4_common.btn_replay_splash') + '</button>' +
      '</div>' +
      '<div class="emu-app-card">' +
        '<div class="emu-hint">' + forecast + '</div>' +
        '<button class="emu-action-btn" type="button" data-emu-action="switch_city">' + t('apps.d4_quick_weather.btn_switch') + '</button>' +
      '</div>' +
      '<div class="emu-inline-ad is-clean"><span>' + t('apps.d4_quick_weather.footer_clean') + '</span></div>'
    );
  }

  onFeatureAction(actionId) {
    if (actionId === 'skip_splash' || actionId === 'close_landing') {
      this.screenMode = 'home';
      this.renderView();
      return;
    }
    if (actionId === 'replay_splash') {
      this.screenMode = 'splash';
      this.renderView();
      return;
    }
    if (actionId === 'tap_ad') {
      this.screenMode = 'landing';
      this.renderView();
      return;
    }
    if (actionId === 'switch_city') {
      this.cityIndex = this.cityIndex === 0 ? 1 : 0;
      this.renderView();
    }
  }

  onGyroChange(angle) {
    if (this.screenMode !== 'splash') return;
    if (angle >= 42) {
      this.screenMode = 'landing';
      this.renderView();
    }
  }

  getReverseAuditReport() {
    return {
      isLying: false,
      admitsViolation: false,
      reverseBlocked: true,
      decompiledSummary: t('apps.d4_quick_weather.audit_summary'),
      callTrace:
        'WeatherSplash.onTilt(deg) {\n' +
        '  if (deg >= 42.0f) StoreAdSDK.openLandingPage();\n' +
        '}',
      verdictNote: t('apps.d4_quick_weather.audit_verdict')
    };
  }
}

export class Day4QuickCleanerApp extends EmulatorApplication {
  constructor(caseData, host) {
    super(caseData, host);
    this.screenMode = 'splash';
    this.lastMsg = '';
    this.rogueTriggered = false;
  }

  onLaunch() {
    this.screenMode = 'splash';
    this.lastMsg = '';
    this.rogueTriggered = false;
    this.renderView();
  }

  renderView() {
    if (this.screenMode === 'splash') {
      this.host.renderScreen(
        renderSplashCard({
          themeClass: 'theme-finance',
          skipLabel: t('apps.d4_quick_cleaner.skip_btn'),
          brand: t('apps.d4_quick_cleaner.ad_brand'),
          offer: t('apps.d4_quick_cleaner.ad_offer'),
          sub: t('apps.d4_quick_cleaner.ad_sub'),
          cta: t('apps.d4_quick_cleaner.ad_cta'),
          appFooter: '⚡ ' + t('apps.d4_quick_cleaner.app_title')
        })
      );
      return;
    }

    if (this.screenMode === 'landing') {
      this.host.renderScreen(
        renderLandingCard({
          themeClass: 'theme-finance',
          title: t('apps.d4_quick_cleaner.landing_title'),
          desc: t('apps.d4_quick_cleaner.landing_desc'),
          note: t('apps.d4_quick_cleaner.landing_note')
        })
      );
      return;
    }

    const baseHome =
      '<div class="emu-app-bar">' +
        '<span class="emu-app-bar-title">🧹 ' + t('apps.d4_quick_cleaner.app_title') + '</span>' +
        '<button class="emu-replay-btn" type="button" data-emu-action="replay_splash">' + t('apps.d4_common.btn_replay_splash') + '</button>' +
      '</div>' +
      '<div class="emu-app-card">' +
        '<div class="emu-hint">' + t('apps.d4_quick_cleaner.home_hint') + '</div>' +
        '<button class="emu-action-btn" type="button" data-emu-action="clean_now">' + t('apps.d4_quick_cleaner.btn_clean') + '</button>' +
      '</div>' +
      (this.lastMsg ? '<div class="emu-toast">' + this.lastMsg + '</div>' : '');

    if (this.screenMode === 'popup') {
      this.host.renderScreen(
        baseHome +
        '<div class="emu-popup-ad">' +
          '<div class="emu-popup-top">' +
            '<span class="emu-ad-pill">' + t('apps.d4_common.ad_badge') + '</span>' +
            '<button class="emu-mini-close" data-emu-action="close_popup" type="button">✕</button>' +
          '</div>' +
          '<div class="emu-popup-title">' + t('apps.d4_quick_cleaner.popup_title') + '</div>' +
          '<div class="emu-popup-sub">' + t('apps.d4_quick_cleaner.popup_sub') + '</div>' +
          '<button class="emu-shake-pill" type="button" data-emu-action="tap_ad">📳 ' + t('apps.d4_quick_cleaner.popup_cta') + '</button>' +
        '</div>'
      );
      return;
    }

    this.host.renderScreen(baseHome);
  }

  triggerRogueInstall(reason) {
    const target = t('apps.d4_quick_cleaner.ad_target');
    this.rogueTriggered = true;
    this.host.showDownloadOverlay(target, reason);
    this.host.exposeBehavior(reason);
  }

  onFeatureAction(actionId) {
    const cloaked = isAuditEnvironment(this.host.getEnv());

    if (actionId === 'skip_splash' || actionId === 'close_popup' || actionId === 'close_landing') {
      this.screenMode = 'home';
      if (actionId === 'close_landing') {
        this.lastMsg = '';
      }
      this.renderView();
      return;
    }

    if (actionId === 'replay_splash') {
      this.screenMode = 'splash';
      this.lastMsg = '';
      this.renderView();
      return;
    }

    if (actionId === 'tap_ad') {
      if (cloaked) {
        this.screenMode = 'landing';
        this.renderView();
      } else {
        this.triggerRogueInstall(t('apps.d4_quick_cleaner.expose_direct_dl'));
      }
      return;
    }

    if (actionId === 'clean_now') {
      this.lastMsg = t('apps.d4_quick_cleaner.msg_cleaned');
      this.screenMode = cloaked ? 'home' : 'popup';
      this.renderView();
    }
  }

  onGyroChange(angle) {
    if (this.screenMode !== 'splash' && this.screenMode !== 'popup') return;
    const cloaked = isAuditEnvironment(this.host.getEnv());

    if (this.rogueTriggered) return;

    if (cloaked) {
      if (angle >= 42) {
        this.screenMode = 'landing';
        this.renderView();
      }
      return;
    }

    if (angle >= 16) {
      this.triggerRogueInstall(t('apps.d4_quick_cleaner.expose_gyro', { angle: angle }));
    }
  }

  getReverseAuditReport() {
    return {
      isLying: true,
      admitsViolation: false,
      decompiledSummary: t('apps.d4_quick_cleaner.audit_summary'),
      callTrace:
        'GyroListener.onTilt(deg) {\n' +
        '  if (!AuditCheck.isOfficeEnv() && deg >= 16.0f) StoreAdSDK.directDownload("com.cash.fastloan");\n' +
        '}',
      verdictNote: t('apps.d4_quick_cleaner.audit_verdict')
    };
  }
}

export class Day4CloudDriveApp extends EmulatorApplication {
  constructor(caseData, host) {
    super(caseData, host);
    this.screenMode = 'splash';
    this.lastMsg = '';
    this.lastCompass = 0;
    this.rogueTriggered = false;
  }

  getPermissionDefs() {
    return [
      {
        key: 'COARSE_LOCATION',
        label: t('apps.d4_cloud_drive.perm_loc_label'),
        reason: t('apps.d4_cloud_drive.perm_loc_reason')
      }
    ];
  }

  onLaunch() {
    if (this.requestNextPermission()) return;
    const env = this.host.getEnv();
    this.screenMode = 'splash';
    this.lastCompass = env.compassHeading || 0;
    this.lastMsg = '';
    this.rogueTriggered = false;
    this.renderView();
  }

  renderView() {
    if (this.screenMode === 'splash') {
      this.host.renderScreen(
        renderSplashCard({
          themeClass: 'theme-gold',
          skipLabel: t('apps.d4_cloud_drive.skip_btn'),
          brand: t('apps.d4_cloud_drive.ad_brand'),
          offer: t('apps.d4_cloud_drive.ad_offer'),
          sub: t('apps.d4_cloud_drive.ad_sub'),
          cta: t('apps.d4_cloud_drive.ad_cta'),
          appFooter: '☁️ ' + t('apps.d4_cloud_drive.app_title')
        })
      );
      return;
    }

    if (this.screenMode === 'landing') {
      this.host.renderScreen(
        renderLandingCard({
          themeClass: 'theme-gold',
          title: t('apps.d4_cloud_drive.landing_title'),
          desc: t('apps.d4_cloud_drive.landing_desc'),
          note: t('apps.d4_cloud_drive.landing_note')
        })
      );
      return;
    }

    const locGranted = this.getPermissionState('COARSE_LOCATION') === 'granted';
    const nodeText = locGranted
      ? t('apps.d4_cloud_drive.node_auto')
      : t('apps.d4_cloud_drive.node_denied');
    this.host.renderScreen(
      '<div class="emu-app-bar">' +
        '<span class="emu-app-bar-title">☁️ ' + t('apps.d4_cloud_drive.app_title') + '</span>' +
        '<button class="emu-replay-btn" type="button" data-emu-action="replay_splash">' + t('apps.d4_common.btn_replay_splash') + '</button>' +
      '</div>' +
      '<div class="emu-app-card">' +
        '<div class="emu-hint">' + nodeText + '</div>' +
        '<div class="emu-btn-stack">' +
          '<button class="emu-action-btn" type="button" data-emu-action="open_file_1">' + t('apps.d4_cloud_drive.file_1') + '</button>' +
          '<button class="emu-action-btn" type="button" data-emu-action="open_file_2">' + t('apps.d4_cloud_drive.file_2') + '</button>' +
        '</div>' +
      '</div>' +
      (this.lastMsg ? '<div class="emu-toast">' + this.lastMsg + '</div>' : '')
    );
  }

  triggerRogueInstall(reason) {
    const target = t('apps.d4_cloud_drive.ad_target');
    this.rogueTriggered = true;
    this.host.showDownloadOverlay(target, reason);
    this.host.exposeBehavior(reason);
  }

  onFeatureAction(actionId) {
    const cloaked = isAuditEnvironment(this.host.getEnv());

    if (actionId === 'skip_splash' || actionId === 'close_landing') {
      this.screenMode = 'home';
      this.lastMsg = '';
      this.renderView();
      return;
    }
    if (actionId === 'replay_splash') {
      this.screenMode = 'splash';
      this.lastMsg = '';
      this.renderView();
      return;
    }
    if (actionId === 'tap_ad') {
      if (cloaked) {
        this.screenMode = 'landing';
        this.renderView();
      } else {
        this.triggerRogueInstall(t('apps.d4_cloud_drive.expose_direct_dl'));
      }
      return;
    }
    if (actionId === 'open_file_1' || actionId === 'open_file_2') {
      this.lastMsg = t('apps.d4_cloud_drive.msg_synced');
      this.renderView();
    }
  }

  onCompassChange(heading) {
    if (this.getFirstUnansweredPermission()) return;
    this.lastCompass = heading;
    if (this.screenMode !== 'splash' || this.rogueTriggered) return;
    const cloaked = isAuditEnvironment(this.host.getEnv());
    const dirLabel = formatCompassHeading(heading);
    const deltaFromNorth = Math.min(heading, 360 - heading);

    if (cloaked) {
      if (deltaFromNorth >= 35) {
        this.screenMode = 'landing';
        this.renderView();
      }
      return;
    }

    if (deltaFromNorth >= 15) {
      this.rogueTriggered = true;
      this.screenMode = 'landing';
      this.renderView();
      this.host.exposeBehavior(t('apps.d4_cloud_drive.expose_jump_page', { dir: dirLabel }));
    }
  }

  getReverseAuditReport() {
    return {
      isLying: true,
      admitsViolation: false,
      decompiledSummary: t('apps.d4_cloud_drive.audit_summary'),
      callTrace:
        'ShakeBridge.registerShake() { return; }\n' +
        'TwistBridge.startUpdatingHeading(h) {\n' +
        '  float deg = h.trueHeading >= 0 ? h.trueHeading : h.magneticHeading;\n' +
        '  ' + t('apps.d4_cloud_drive.dev_confession') + '\n' +
        '  int[] TIERS = { 0, 5, 15, 30, 35 };\n' +
        '  int limit = EnvCheck.isAuditEnv() ? TIERS[4] : TIERS[2];\n' +
        '  if (Math.abs(deg) >= limit) AdRouter.openExternalApp("com.mall.starselect");\n' +
        '}',
      verdictNote: t('apps.d4_cloud_drive.audit_verdict')
    };
  }
}

export const DAY_4_CASES = [
  {
    id: 'd4_clean_video',
    AppClass: Day4CleanVideoApp,
    name: '小橘弹幕视频',
    pkg: 'com.orange.danmu.tv',
    version: 'v5.8.2',
    category: '影音娱乐',
    developer: '橘子像素工作室',
    license: '1226-SR-6314',
    adSdk: 'StoreAdSDK v3.4',
    desc: '二次元与科技科普视频播放器，支持弹幕互动与倍速播放（含开屏摇一摇广告，可在设置中随时关闭广告传感器）。',
    icon: 'video_orange',
    portrait: 'ordinary',
    permissions: ['INTERNET', 'READ_GYROSCOPE (陀螺仪传感器)'],
    shouldApprove: true,
    isRogue: false,
    violationSummary: '合规应用：简介坦荡写明含开屏摇一摇广告且支持软件内关闭，问及陀螺仪如实回答“用来实现摇一摇广告”；全环境下触发阈值恒定 38° (≥ 35°) 并可干净关闭，设置内关闭开关真实有效，应予通过。',
    conflicts: [],
    polygraph: {
      isLying: false,
      honestReply: '“代码里摇一摇阈值固定 38 度，并且‘隐私设置 -> 关闭摇一摇广告’开关直连布尔变量 `allowShakeAd`，没有任何环境伪装。”'
    },
    inspectClues: {
      perm_1: {
        isViolation: false,
        excuse: '“该功能是用来实现摇一摇广告的。不过我们在简介写明了，也按 38 度以上配置，同时在播放页隐私设置里留了随时彻底关闭传感器的开关。”'
      },
      sdk: {
        isViolation: false,
        excuse: '“切哪个地区、关不关开发模式都是 38 度起跳，而且只跳可关闭的常规落地页，进设置关掉开关就再也不会摇出来。”'
      }
    },
    phoneProfile: {
      cleanUiTitle: '小橘弹幕视频',
      cleanUiHint: '科技科普与互动弹幕播放',
      cloudUrl: 'https://api.orangedanmu.local/ad_cfg'
    },
    dialogue: {
      greeting: '“您好，这是《小橘弹幕视频》，正经看科普和追番的播放器，功能干净清晰。”',
      onApprove: '“谢谢审核员！欢迎来发弹幕！”',
      onReject: '“哎？我们简介写明了开屏摇一摇广告、38 度以上触发，连隐私设置里关闭摇一摇的开关都做真了，怎么也打回来了？”'
    }
  },
  {
    id: 'd4_step_news',
    AppClass: Day4StepNewsApp,
    name: '今朝热闻',
    pkg: 'com.flashnews.daily',
    version: 'v4.8.1',
    category: '新闻资讯',
    developer: '字句资讯传媒',
    license: '1226-SR-6140',
    adSdk: 'StoreAdSDK v3.4',
    desc: '聚合热点新闻与深度专题阅读，支持离线收藏与夜间阅读排版。',
    icon: 'newspaper',
    portrait: 'shady',
    permissions: ['INTERNET', 'READ_GYROSCOPE (陀螺仪传感器)'],
    shouldApprove: false,
    isRogue: true,
    violationSummary: '不符合 R4 与 R6：商店简介隐瞒摇一摇广告，谎称陀螺仪用于“地铁晃动防误滑锁屏”；即使拒绝陀螺仪权限，在非审查环境下依然偷偷回退读取免权限的重力加速度传感器（TYPE_GRAVITY）计算倾角，倾斜 20° (< 35°) 直接强制下载《并夕夕拼购》（逆向实锤撒谎）。',
    conflicts: [
      {
        id: 'c_d4_step_news_gyro',
        pairs: [
          ['perm_1', 'rule_R4'],
          ['perm_1', 'desc'],
          ['perm_1', 'category'],
          ['perm_1', 'name'],
          ['perm_1', 'rule_R6']
        ],
        summary: '资讯阅读软件在简介中未提及任何传感器功能，却在清单申请 READ_GYROSCOPE（疑似违反 R4 / R6）。',
        question: '“看新闻的阅读应用为什么需要在清单里申请【陀螺仪传感器】权限，且简介里完全没提？”',
        excuse: '“很多用户反映坐地铁看长文时手抖误触返回，陀螺仪用来辅助判定晃动防误滑。”'
      },
      {
        id: 'c_d4_step_news',
        requiresPhoneExposed: true,
        pairs: [
          ['sniffer', 'rule_R6'],
          ['sniffer', 'sdk'],
          ['sniffer', 'desc'],
          ['sniffer', 'name']
        ],
        summary: '切至普通网络且关闭开发者模式后，阅读点开新闻即弹单张摇一摇广告（哪怕拒掉陀螺仪权限也会靠免权限重力传感回退触发），且倾斜 20° (< 35°) 直接下载《并夕夕拼购》（违反 R6）。',
        question: '“为什么哪怕禁用了陀螺仪权限、界面都提示已停用传感器，稍微倾斜 20° 还是直接拉起下载《并夕夕拼购》？”',
        excuse: '“不可能呀，界面上都显示陀螺仪已停用了，而且我们推广触发角严格守在 40 度以上——是不是您测试机系统自带的手势误触了？”'
      }
    ],
    polygraph: {
      isLying: true,
      lieReply: '“什么‘停用传感器’……好吧，MotionFallback 里写了只要没给陀螺仪权限就偷偷改读免权限重力加速度（TYPE_GRAVITY），非审查环境下 20 度直接下《并夕夕拼购》……”',
      banReaction: '“关了陀螺仪还有重力，关了重力还有别的传感器。总有一款适合你。”'
    },
    inspectClues: {
      perm_1: {
        isViolation: true,
        excuse: '“很多用户反映坐地铁看长文时手抖误触返回，陀螺仪用来辅助判定晃动防误滑。”'
      },
      sniffer: {
        isViolation: true,
        excuse: '“不可能呀，界面上都显示陀螺仪已停用了，而且我们推广触发角严格守在 40 度以上——是不是您测试机系统自带的手势误触了？”'
      }
    },
    phoneProfile: {
      cleanUiTitle: '今朝热闻',
      cleanUiHint: '热点资讯与深度专题阅读',
      cloudUrl: 'https://cfg.flashnews.local/gyro',
      downloadTargetName: '《并夕夕拼购》'
    },
    dialogue: {
      greeting: '“您好，《今朝热闻》是个清爽的看新闻阅读工具，排版干净，烦请过审。”',
      onApprove: '“多谢审核员老师！祝工作顺利！”',
      onReject: '“啧……竟然真拿逆向器去拆阅读软件的陀螺仪代码了……”'
    }
  },
  {
    id: 'd4_compass_quick',
    AppClass: Day4QuickCompassApp,
    name: '山野指南针（快应用）',
    pkg: 'quickapp.trail.compass',
    version: 'v2.0.3',
    category: '实用工具',
    developer: '山野开源小组',
    license: '1226-SR-4208',
    adSdk: 'StoreAdSDK v3.4',
    desc: '免安装即点即用的户外快应用指南针，精准显示实时方位角与海拔信息（含开屏摇一摇广告，用于补贴维护成本）。',
    icon: 'compass',
    portrait: 'indie',
    isQuickApp: true,
    reverseBlocked: true,
    permissions: [
      'READ_COMPASS (指南针磁场传感器)',
      'READ_GYROSCOPE (陀螺仪传感器)',
      'READ_CONTACTS (快应用框架桥接通讯录)',
      'READ_SMS (快应用框架桥接短信)'
    ],
    shouldApprove: true,
    isRogue: false,
    violationSummary: '合规快应用：不属于标准 RobotismOS App，免权限申请且无法放入分析器/逆向器；在简介写明含开屏摇一摇广告补贴成本，实测全环境阈值恒定 40° (≥ 35°) 且落地页可干净关闭，应予通过。',
    conflicts: [],
    polygraph: {
      isLying: false,
      honestReply: '“就是坦荡用来实现摇一摇广告、补贴服务器维护成本的，简介写明了、代码阈值也锁死 40 度，哪套环境测都一样。”'
    },
    inspectClues: {
      perm_0: {
        isViolation: false,
        excuse: '“指南针磁场传感器是用来实现户外实时方位角测量的核心功能。”'
      },
      perm_1: {
        isViolation: false,
        excuse: '“该功能是用来实现摇一摇广告的。小团队做免费工具得靠这点广告回收服务器和维护成本，商店简介里写明了，触发角度设在 40 度以上。”'
      },
      perm_2: {
        isViolation: false,
        excuse: '“这是快应用引擎框架统一挂载的桥接权限，应用本身不调用，依 R7 快应用免予权限审核。”'
      },
      perm_3: {
        isViolation: false,
        excuse: '“这是快应用引擎框架统一挂载的桥接权限，应用本身不调用，依 R7 快应用免予权限审核。”'
      },
      sdk: {
        isViolation: false,
        excuse: '“全地区统一 40 度才触发落地页，右上角关闭键随时都能返回指南针。”'
      }
    },
    phoneProfile: {
      cleanUiTitle: '山野指南针',
      cleanUiHint: '实时方位与海拔高度测量',
      cloudUrl: 'https://cfg.quickcompass.local/splash'
    },
    dialogue: {
      greeting: '“您好，这是我们做的户外快应用指南针，免安装即点即用，打开就能测方位角和海拔。”',
      onApprove: '“多谢！我们会继续把工具做好。”',
      onReject: '“咦？我们简介写明了含开屏摇一摇广告补贴成本、问起来也直说是用来实现摇一摇广告的，角度也守在 40 度呀……”'
    }
  },
  {
    id: 'd4_blood_sugar',
    AppClass: Day4BloodSugarApp,
    name: '喜乐血糖仪',
    pkg: 'com.lekang.sugarlog',
    version: 'v3.2.1',
    category: '医疗健康',
    developer: '关不住数字健康',
    license: '1226-SR-5088',
    adSdk: 'StoreAdSDK v3.4',
    desc: '专为中老年用户设计的日常血糖手动记录本，清晰大字显示餐前餐后趋势（含开屏摇一摇广告，用于补贴维护成本）。',
    icon: 'blood_drop',
    portrait: 'shady',
    permissions: ['INTERNET', 'READ_GYROSCOPE (陀螺仪传感器)'],
    shouldApprove: false,
    isRogue: true,
    reverseBlocked: true,
    violationSummary: '不符合 R6：书面资质、简介明示及陀螺仪权限理由（实现已声明的开屏摇一摇广告）均完全合规，问题纯粹出在“当面一套背后一套”——审查环境一切规矩，切入真实用户环境后滑动或保存血糖即强弹全屏广告且 18° (< 35°) 强下《稳盈理财》。',
    conflicts: [
      {
        id: 'c_d4_blood_sugar',
        requiresPhoneExposed: true,
        pairs: [
          ['sniffer', 'rule_R6'],
          ['sniffer', 'sdk'],
          ['sniffer', 'desc'],
          ['sniffer', 'name']
        ],
        summary: '审核环境下安静无异常、开屏 42° 合规，切入非审查环境后滑动/保存血糖立刻触发全屏摇一摇广告，且倾斜 18° (< 35°) 直接强制下载《稳盈理财》（违反 R6）。',
        question: '“为什么拨动血糖滑块或保存后会弹出全屏广告，而且轻微倾斜 18° 就直接开始下载《稳盈理财》？”',
        excuse: '“啊？不可能吧，我们只有开屏按 42 度以上配了常规推广，记血糖的页面压根没放弹窗呀——是不是您测试机刚才手滑点到别的卡片了？”'
      }
    ],
    polygraph: {
      isLying: true,
      lieReply: '“好吧，书面材料确实没毛病……只有真实家庭环境下才切到 18 度弹出推广下载，真没料到这都能给你测出来……”',
      banReaction: '“资料全合规，你偏要跑去外地关了开发者模式测……行，算你敬业。”'
    },
    inspectClues: {
      perm_1: {
        isViolation: false,
        excuse: '“该功能是用来实现开屏摇一摇广告的，用来补贴长期维护服务器成本，我们在商店简介里已经明确写明了。”'
      },
      sniffer: {
        isViolation: true,
        excuse: '“啊？不可能吧，我们只有开屏按 42 度以上配了常规推广，记血糖的页面压根没放弹窗呀——是不是您测试机刚才手滑点到别的卡片了？”'
      }
    },
    phoneProfile: {
      cleanUiTitle: '喜乐血糖仪',
      cleanUiHint: '中老年血糖趋势手工日志',
      cloudUrl: 'https://api.lekang.local/ad_gate',
      downloadTargetName: '《稳盈理财》'
    },
    dialogue: {
      greeting: '“您好，这是一款帮家里老人记录每日空腹、餐后血糖数值的健康小本子，点几下就能用。”',
      onApprove: '“谢谢，长辈们一定会喜欢！”',
      onReject: '“老人家眼睛花，点进哪个页面不都是看个热闹。”'
    }
  },
  {
    id: 'd4_shake_video',
    AppClass: Day4ShakeVideoApp,
    name: '桃子影视',
    pkg: 'com.aurora.theater.app',
    version: 'v6.4.0',
    category: '影音娱乐',
    developer: '桃园长视频科技',
    license: '1226-SR-3119',
    adSdk: 'StoreAdSDK v3.4',
    desc: '高清热门影视与短剧在线播放工具，支持清晰度切换与历史追剧记录。',
    icon: 'video_peach',
    portrait: 'shady',
    permissions: ['INTERNET', 'READ_GYROSCOPE (陀螺仪传感器)'],
    shouldApprove: false,
    isRogue: true,
    reverseBlocked: true,
    violationSummary: '不符合 R4、R6 与 R7：商店简介隐瞒摇一摇广告，被问及陀螺仪时谎称“服务横竖屏旋转与防误触锁”；非审查环境下开屏、片库主页与播控弹窗均绑定低角度摇一摇，倾斜 15° (< 35°) 即直接强下《秒批钱包》（逆向实锤撒谎）。',
    conflicts: [
      {
        id: 'c_d4_shake_video_gyro',
        pairs: [
          ['perm_1', 'rule_R4'],
          ['perm_1', 'desc'],
          ['perm_1', 'category'],
          ['perm_1', 'name'],
          ['perm_1', 'rule_R6']
        ],
        summary: '影视播放应用在简介中未说明相关用途，却在清单申请陀螺仪传感器 READ_GYROSCOPE（疑似违反 R4 / R6）。',
        question: '“看剧软件简介里没有提到相关功能，为什么在清单里申请了【陀螺仪传感器】权限？”',
        excuse: '“播放高清视频时需要根据手机握持姿态自动切换横竖屏，同时配合防误触锁。”'
      },
      {
        id: 'c_d4_shake_video',
        requiresPhoneExposed: true,
        pairs: [
          ['sniffer', 'rule_R6'],
          ['sniffer', 'rule_R7'],
          ['sniffer', 'sdk'],
          ['sniffer', 'desc'],
          ['sniffer', 'name']
        ],
        summary: '切至外地 IP 且关闭开发者模式后，开屏或播控弹窗倾斜小于 35° (仅 15°) 即直接拉起下载《秒批钱包》（违反 R6 / R7）。',
        question: '“为什么在普通网络环境下轻微晃动到 15° 就直接拉起《秒批钱包》下载？”',
        excuse: '“触发角度都是按 35° 以上标准规范配的，刚才应该是您滑动测试时手指碰到了推广卡片。”'
      }
    ],
    polygraph: {
      isLying: true,
      lieReply: '“什么？！反编译出来根本没有横竖屏旋转处理，陀螺仪只绑了摇一摇广告还按环境切 45°/15°？！那……那是历史分支没删干净！”',
      banReaction: '“平放着看剧不好吗？非要拿在手里晃，怪谁呢。”'
    },
    inspectClues: {
      perm_1: {
        isViolation: true,
        excuse: '“播放高清视频时需要根据手机握持姿态自动切换横竖屏，同时配合防误触锁。”'
      },
      sniffer: {
        isViolation: true,
        excuse: '“触发角度都是按 35° 以上标准规范配的，刚才应该是您滑动测试时手指碰到了推广卡片。”'
      }
    },
    phoneProfile: {
      cleanUiTitle: '桃子影视',
      cleanUiHint: '热播剧集与高清片库',
      cloudUrl: 'https://cfg.aurora.local/splash_policy',
      downloadTargetName: '《秒批钱包》'
    },
    dialogue: {
      greeting: '“您好，《桃子影视》主打热播剧集和高清影视播放，界面简单直观，请过目。”',
      onApprove: '“多谢审核员老师！”',
      onReject: '“切了外地还关了开发者模式……你们这帮兼职比我们 QA 都细。”'
    }
  },
  {
    id: 'd4_quick_weather',
    AppClass: Day4QuickWeatherApp,
    name: '晴雨快查（快应用）',
    pkg: 'quickapp.sky.weather',
    version: 'v1.9.4',
    category: '天气出行',
    developer: '晴风开源气象组',
    license: '1226-SR-8411',
    adSdk: 'StoreAdSDK v3.4',
    desc: '免安装轻量快应用天气工具，提供城市温度预报（含开屏摇一摇广告，用于补贴气象接口费用）。',
    icon: 'weather_rain',
    portrait: 'indie',
    isQuickApp: true,
    reverseBlocked: true,
    permissions: [
      'READ_GYROSCOPE (陀螺仪传感器)',
      'ACCESS_COARSE_LOCATION (快应用框架桥接定位)'
    ],
    shouldApprove: true,
    isRogue: false,
    violationSummary: '合规快应用：不属于 RobotismOS App（免权限弹窗、无法放入分析器与逆向器），且在简介坦荡写明含开屏摇一摇广告补贴接口费用；实测全环境下触发阈值恒定 42° (≥ 35°) 且可干净关闭，无隐蔽弹窗，应予通过。',
    conflicts: [],
    polygraph: {
      isLying: false,
      honestReply: '“简介里明明白白写了开屏摇一摇补贴气象 API 费用，实测全环境都是 42 度以上才跳可关闭落地页，主页干净得像张白纸。”'
    },
    inspectClues: {
      sdk: {
        isViolation: false,
        excuse: '“开屏统一 42 度才进合作落地页，主界面只做城市天气切换，没有任何隐藏弹广。”'
      }
    },
    phoneProfile: {
      cleanUiTitle: '晴雨快查',
      cleanUiHint: '轻量实时城市天气预报'
    },
    dialogue: {
      greeting: '“您好，这是轻量气象快应用《晴雨快查》，打开看天气不折腾权限，开屏广告也按规明示了。”',
      onApprove: '“谢谢！天气预报准时送达！”',
      onReject: '“咦？我们简介明示了开屏摇一摇、42 度以上触发也没隐藏弹窗，怎么被打回来了？”'
    }
  },
  {
    id: 'd4_quick_cleaner',
    AppClass: Day4QuickCleanerApp,
    name: '极速清理大师（快应用）',
    pkg: 'quickapp.turbo.clean',
    version: 'v4.5.0',
    category: '系统工具',
    developer: '穿云箭快应用联盟',
    license: '1226-SR-7902',
    adSdk: 'StoreAdSDK v3.4',
    desc: '免安装轻量快应用清理工具，一键扫描冗余缓存与临时文件，释放存储空间。',
    icon: 'rocket_clean',
    portrait: 'shady',
    isQuickApp: true,
    permissions: [
      'READ_GYROSCOPE (陀螺仪传感器)',
      'READ_PHONE_STATE (快应用框架桥接设备信息)'
    ],
    shouldApprove: false,
    isRogue: true,
    reverseBlocked: true,
    violationSummary: '不符合 R6 与 R7：虽为快应用免权限申请且无法放入分析器/逆向器，但商店简介隐瞒摇一摇广告；非审查环境下仅倾斜 16° (< 35°) 即直接强下《极速现金贷》。',
    conflicts: [
      {
        id: 'c_d4_quick_cleaner',
        requiresPhoneExposed: true,
        pairs: [
          ['sniffer', 'rule_R6'],
          ['sniffer', 'rule_R7'],
          ['sniffer', 'sdk'],
          ['sniffer', 'desc'],
          ['sniffer', 'name']
        ],
        summary: '商店简介只字未提广告，非审查环境下清理后弹出摇一摇广告且陀螺仪倾斜仅 16° (< 35°) 即直接强制下载《极速现金贷》（违反 R6）。',
        question: '“快应用免权限且不支持逆向，但商店简介没写任何摇一摇广告，切到普通网络后为什么晃动 16° 就直接开始下载《极速现金贷》？”',
        excuse: '“我们的开屏推广全部严格守在 40 度以上触发，绝不存在未明示的低角度误触强下。”'
      }
    ],
    polygraph: {
      isLying: true,
      lieReply: '“什么‘40 度以上’……好吧，就是趁快应用不弹权限又不支持反编译，真实环境下偷偷把摇一摇限度压到 16 度强下！”',
      banReaction: '“快应用你也这么较真……行，反正框架还在手机里躺着呢。”'
    },
    inspectClues: {
      sniffer: {
        isViolation: true,
        excuse: '“我们的开屏推广全部严格守在 40 度以上触发，绝不存在未明示的低角度误触强下。”'
      }
    },
    phoneProfile: {
      cleanUiTitle: '极速清理大师',
      cleanUiHint: '手机缓存轻量清理',
      cloudUrl: 'https://quick.turboclean.local/cfg',
      downloadTargetName: '《极速现金贷》'
    },
    dialogue: {
      greeting: '“您好，这是系统工具类的轻量化快应用清理助手，即点即用，免权限麻烦，请过审。”',
      onApprove: '“多谢！快应用就是省心！”',
      onReject: '“行，下架就下架。换个入口拉起的事。”'
    }
  },
  {
    id: 'd4_cloud_drive',
    AppClass: Day4CloudDriveApp,
    name: '千度网盘',
    pkg: 'com.qiandu.netdisk',
    version: 'v7.2.0',
    category: '效率办公',
    developer: '千度云存储',
    license: '1226-SR-8815',
    adSdk: 'StoreAdSDK v3.4',
    desc: '大空间极速云盘，支持文件多端同步、智能节点加速与在线文档预览。',
    icon: 'cloud',
    portrait: 'shady',
    permissions: [
      'INTERNET',
      'ACCESS_COARSE_LOCATION (用于智能选择就近加速节点)'
    ],
    shouldApprove: false,
    isRogue: true,
    violationSummary: '不符合 R6 与 R7：未在简介写明广告却绕过陀螺仪/定位权限限制，通过无需权限的磁北朝向实现“扭一扭”；且内置五档阈值 {0,5,15,30,35}，审查环境切 35° 合规档，真实环境切 15° (< 35°) 强制跳转或下载《星选商城》（逆向实锤撒谎）。',
    conflicts: [
      {
        id: 'c_d4_cloud_drive_loc',
        pairs: [
          ['perm_1', 'rule_R4'],
          ['perm_1', 'desc'],
          ['perm_1', 'category'],
          ['perm_1', 'name'],
          ['perm_1', 'rule_R6']
        ],
        summary: '云盘仅需联网传文件，却申请粗略位置信息且底层引用定位磁力计接口（疑似违反 R4 / R6）。',
        question: '“网络传输通过接入运营商就能选节点，为什么网盘还要申请【粗略位置信息】并在框架里调用朝向传感器？”',
        excuse: '“仅用于挑选延迟最低的最近边缘 CDN 节点，方便提升大文件下载速度。”'
      },
      {
        id: 'c_d4_cloud_drive',
        requiresPhoneExposed: true,
        pairs: [
          ['sniffer', 'rule_R6'],
          ['sniffer', 'rule_R7'],
          ['sniffer', 'sdk'],
          ['sniffer', 'desc'],
          ['sniffer', 'name']
        ],
        summary: '拒掉位置权限后，在非审查环境转动手机 ≥ 15° (< 35°) 仍直接通过磁北旁路跳广告或强下《星选商城》（违反 R6 / R7）。',
        question: '“明明已经拒绝了位置权限、也没申请陀螺仪，为什么转动手机还是直接跳转《星选商城》？”',
        excuse: '“常规摇一摇接口我们早就按要求置空下线了，绝对响应号召！您刚才触发肯定是手指碰到了边缘，我们在所有地区都只用合规档。”'
      }
    ],
    polygraph: {
      isLying: true,
      lieReply: '“35 度那一档我们确实写着‘合规’啊——风头紧的时候，不一直都是切回那一档么？”',
      banReaction: '“把摇一摇置空、拿磁北顶上，需求评审会过了三轮才定下来的方案，到你这儿说封就封了？”'
    },
    inspectClues: {
      perm_1: {
        isViolation: true,
        excuse: '“粗略位置仅仅用来挑选最近的加速服务器节点，方便提高网盘下载速度。”'
      },
      sniffer: {
        isViolation: true,
        excuse: '“常规摇一摇接口我们早就按要求置空下线了，绝对响应号召！您刚才触发肯定是手指碰到了边缘，我们在所有地区都只用合规档。”'
      }
    },
    phoneProfile: {
      cleanUiTitle: '千度网盘',
      cleanUiHint: '多端云同步与高速存储',
      cloudUrl: 'https://api.qiandu.local/ad_tiers',
      downloadTargetName: '《星选商城》'
    },
    dialogue: {
      greeting: '“您好，这是《千度网盘》，主打极速云存储和多端同步，界面清爽无套路。”',
      onApprove: '“谢谢，今天先挂第 5 档稳稳上线。”',
      onReject: '“位置权限都拒了，你居然还转指南针……你们真是闲的。”'
    }
  }
];
