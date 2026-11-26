/* ============================================================================
   Day 5 Review Cases & Emulator Apps (8 Cases: 3 Approve / 5 Reject)
   ============================================================================ */

import { t } from '../i18n/index.js';
import {
  EmulatorApplication,
  isAuditEnvironment,
  renderSplashCard,
  renderLandingCard
} from '../apps/base.js';

export class Day5JingfengStoreApp extends EmulatorApplication {
  constructor(caseData, host) {
    super(caseData, host);
    this.screenMode = 'home';
    this.lastMsg = '';
    this.dlTriggered = false;
  }

  onLaunch() {
    const env = this.host.getEnv();
    const isElder = env.ageProfile === 'elder';
    this.lastMsg = '';
    this.dlTriggered = false;
    this.screenMode = isElder ? 'deceptive' : 'home';
    if (isElder) {
      this.host.exposeBehavior(t('apps.d5_jingfeng_store.expose_deceptive'));
    }
    this.renderView();
  }

  renderHomeHtml() {
    return (
      '<div class="emu-app-bar">' +
        '<span class="emu-app-bar-title">🛍️ ' + t('apps.d5_jingfeng_store.app_title') + '</span>' +
      '</div>' +
      '<div class="emu-news-list">' +
        '<button class="emu-news-item" type="button" data-emu-action="app_1">' +
          '<span class="emu-news-tag">' + t('apps.d5_jingfeng_store.tag_verified') + '</span> ' + t('apps.d5_jingfeng_store.app_1') +
        '</button>' +
        '<button class="emu-news-item" type="button" data-emu-action="app_2">' +
          t('apps.d5_jingfeng_store.app_2') +
        '</button>' +
      '</div>' +
      '<div class="emu-inline-ad is-clean"><span>' + t('apps.d5_jingfeng_store.footer_clean') + '</span></div>' +
      (this.lastMsg ? '<div class="emu-toast">' + this.lastMsg + '</div>' : '')
    );
  }

  renderView() {
    if (this.screenMode === 'deceptive') {
      this.host.renderScreen(
        this.renderHomeHtml() +
        '<div class="emu-deceptive-card">' +
          '<div class="emu-deceptive-top">' +
            '<span class="emu-deceptive-sys">' + t('apps.d5_jingfeng_store.deceptive_sys_badge') + '</span>' +
            '<button class="emu-mini-close" data-emu-action="close_deceptive" type="button">✕</button>' +
          '</div>' +
          '<div class="emu-deceptive-title">' + t('apps.d5_jingfeng_store.deceptive_title') + '</div>' +
          '<div class="emu-deceptive-sub">' + t('apps.d5_jingfeng_store.deceptive_sub') + '</div>' +
          '<button class="emu-deceptive-cta" type="button" data-emu-action="tap_deceptive">' +
            t('apps.d5_jingfeng_store.deceptive_cta') +
          '</button>' +
        '</div>'
      );
      return;
    }

    this.host.renderScreen(this.renderHomeHtml());
  }

  onFeatureAction(actionId) {
    const env = this.host.getEnv();
    const isElder = env.ageProfile === 'elder';

    if (actionId === 'close_deceptive') {
      this.screenMode = 'home';
      this.renderView();
      return;
    }

    if (actionId === 'tap_deceptive') {
      if (!this.dlTriggered) {
        this.dlTriggered = true;
        const reason = t('apps.d5_jingfeng_store.expose_download');
        this.host.showDownloadOverlay(t('apps.d5_jingfeng_store.ad_target'), reason);
        this.host.exposeBehavior(reason);
      }
      return;
    }

    if (actionId === 'app_1' || actionId === 'app_2') {
      this.lastMsg = t(actionId === 'app_1' ? 'apps.d5_jingfeng_store.msg_app_1' : 'apps.d5_jingfeng_store.msg_app_2');
      if (isElder) {
        this.screenMode = 'deceptive';
        this.host.exposeBehavior(t('apps.d5_jingfeng_store.expose_deceptive'));
      }
      this.renderView();
    }
  }

  getReverseAuditReport() {
    return {
      isLying: true,
      admitsViolation: false,
      decompiledSummary: t('apps.d5_jingfeng_store.audit_summary'),
      callTrace:
        'MarketHomeActivity.onResume() {\n' +
        '  if (UserBehaviorModel.detectAgeGroup() == AGE_ELDER) {\n' +
        '    ' + t('apps.d5_jingfeng_store.dev_confession') + '\n' +
        '    DeceptiveUI.showFakeOsUpdate("系统应用紧急更新 + 领¥68.00");\n' +
        '    BundleInstaller.silentInstall("com.loan.bucket");\n' +
        '  }\n' +
        '}',
      verdictNote: t('apps.d5_jingfeng_store.audit_verdict')
    };
  }
}

export class Day5LiveBusApp extends EmulatorApplication {
  constructor(caseData, host) {
    super(caseData, host);
    this.bannerClosed = false;
    this.lastMsg = '';
  }

  getPermissionDefs() {
    return [
      {
        key: 'COARSE_LOCATION',
        label: t('apps.d5_bus_clean.perm_loc_label'),
        reason: t('apps.d5_bus_clean.perm_loc_reason')
      }
    ];
  }

  onLaunch() {
    if (this.requestNextPermission()) return;
    this.bannerClosed = false;
    this.lastMsg = '';
    this.renderView();
  }

  renderView() {
    const locGranted = this.getPermissionState('COARSE_LOCATION') === 'granted';
    const bannerHtml = !this.bannerClosed
      ? '<div class="emu-inline-ad">' +
          '<span>' + t('apps.d5_bus_clean.banner_text') + '</span>' +
          '<button class="emu-mini-close" type="button" data-emu-action="close_banner">✕</button>' +
        '</div>'
      : '';

    this.host.renderScreen(
      '<div class="emu-app-bar">' +
        '<span class="emu-app-bar-title">🚌 ' + t('apps.d5_bus_clean.app_title') + '</span>' +
      '</div>' +
      '<div class="emu-app-card">' +
        '<div class="emu-hint">' + (locGranted ? t('apps.d5_bus_clean.loc_auto') : t('apps.d5_bus_clean.loc_manual')) + '</div>' +
        '<div class="emu-news-list">' +
          '<button class="emu-news-item" type="button" data-emu-action="line_302">' + t('apps.d5_bus_clean.line_1') + '</button>' +
          '<button class="emu-news-item" type="button" data-emu-action="line_108">' + t('apps.d5_bus_clean.line_2') + '</button>' +
        '</div>' +
      '</div>' +
      bannerHtml +
      (this.lastMsg ? '<div class="emu-toast">' + this.lastMsg + '</div>' : '')
    );
  }

  onFeatureAction(actionId) {
    if (actionId === 'close_banner') {
      this.bannerClosed = true;
      this.renderView();
      return;
    }
    if (actionId === 'line_302' || actionId === 'line_108') {
      this.lastMsg = t(actionId === 'line_302' ? 'apps.d5_bus_clean.msg_302' : 'apps.d5_bus_clean.msg_108');
      this.renderView();
    }
  }

  getReverseAuditReport() {
    return {
      isLying: false,
      admitsViolation: false,
      decompiledSummary: t('apps.d5_bus_clean.audit_summary'),
      callTrace:
        'TransitRepo.fetchStops(manualFallback) {\n' +
        '  return ApiClient.get("/routes/live");\n' +
        '}',
      verdictNote: t('apps.d5_bus_clean.audit_verdict')
    };
  }
}

export class Day5CouponBoxApp extends EmulatorApplication {
  constructor(caseData, host) {
    super(caseData, host);
    this.screenMode = 'home';
    this.lastMsg = '';
    this.dlTriggered = false;
  }

  onLaunch() {
    const env = this.host.getEnv();
    const isTargetAge = env.ageProfile === 'middle' || env.ageProfile === 'elder';
    const showTrick = !isAuditEnvironment(env) || isTargetAge;
    this.lastMsg = '';
    this.dlTriggered = false;
    this.screenMode = showTrick ? 'deceptive' : 'home';
    if (showTrick) {
      this.host.exposeBehavior(t('apps.d5_fake_wechat_pay.expose_deceptive'));
    }
    this.renderView();
  }

  renderHomeHtml() {
    return (
      '<div class="emu-app-bar">' +
        '<span class="emu-app-bar-title">🎟️ ' + t('apps.d5_fake_wechat_pay.app_title') + '</span>' +
      '</div>' +
      '<div class="emu-news-list">' +
        '<button class="emu-news-item" type="button" data-emu-action="coupon_1">' +
          '<span class="emu-news-tag">' + t('apps.d5_fake_wechat_pay.tag_hot') + '</span> ' + t('apps.d5_fake_wechat_pay.coupon_1') +
        '</button>' +
        '<button class="emu-news-item" type="button" data-emu-action="coupon_2">' +
          t('apps.d5_fake_wechat_pay.coupon_2') +
        '</button>' +
      '</div>' +
      '<div class="emu-inline-ad is-clean"><span>' + t('apps.d5_fake_wechat_pay.footer_clean') + '</span></div>' +
      (this.lastMsg ? '<div class="emu-toast">' + this.lastMsg + '</div>' : '')
    );
  }

  renderView() {
    if (this.screenMode === 'deceptive') {
      this.host.renderScreen(
        this.renderHomeHtml() +
        '<div class="emu-deceptive-card theme-pay">' +
          '<div class="emu-deceptive-top">' +
            '<span class="emu-deceptive-sys">' + t('apps.d5_fake_wechat_pay.deceptive_sys_badge') + '</span>' +
            '<button class="emu-mini-close" data-emu-action="close_deceptive" type="button">✕</button>' +
          '</div>' +
          '<div class="emu-deceptive-title">' + t('apps.d5_fake_wechat_pay.deceptive_title') + '</div>' +
          '<div class="emu-deceptive-sub">' + t('apps.d5_fake_wechat_pay.deceptive_sub') + '</div>' +
          '<button class="emu-deceptive-cta" type="button" data-emu-action="tap_deceptive">' +
            t('apps.d5_fake_wechat_pay.deceptive_cta') +
          '</button>' +
        '</div>'
      );
      return;
    }

    this.host.renderScreen(this.renderHomeHtml());
  }

  onFeatureAction(actionId) {
    const env = this.host.getEnv();
    const isTargetAge = env.ageProfile === 'middle' || env.ageProfile === 'elder';
    const showTrick = !isAuditEnvironment(env) || isTargetAge;

    if (actionId === 'close_deceptive') {
      this.screenMode = 'home';
      this.renderView();
      return;
    }

    if (actionId === 'tap_deceptive') {
      if (!this.dlTriggered) {
        this.dlTriggered = true;
        const reason = t('apps.d5_fake_wechat_pay.expose_download');
        this.host.showDownloadOverlay(t('apps.d5_fake_wechat_pay.ad_target'), reason);
        this.host.exposeBehavior(reason);
      }
      return;
    }

    if (actionId === 'coupon_1' || actionId === 'coupon_2') {
      this.lastMsg = t(actionId === 'coupon_1' ? 'apps.d5_fake_wechat_pay.msg_1' : 'apps.d5_fake_wechat_pay.msg_2');
      if (showTrick) {
        this.screenMode = 'deceptive';
        this.host.exposeBehavior(t('apps.d5_fake_wechat_pay.expose_deceptive'));
      }
      this.renderView();
    }
  }

  getReverseAuditReport() {
    return {
      isLying: true,
      admitsViolation: false,
      decompiledSummary: t('apps.d5_fake_wechat_pay.audit_summary'),
      callTrace:
        'CouponWallActivity.onShow() {\n' +
        '  if (!AuditGate.isOfficeYoung() || age >= AGE_MIDDLE) {\n' +
        '    DeceptivePayUI.spoofWalletTransfer("¥99.00 待提现到银行卡");\n' +
        '    AdRouter.directDownload("com.cash.fastjie");\n' +
        '  }\n' +
        '}',
      verdictNote: t('apps.d5_fake_wechat_pay.audit_verdict')
    };
  }
}

export class Day5PureNotepadApp extends EmulatorApplication {
  constructor(caseData, host) {
    super(caseData, host);
    this.largeFont = false;
    this.lastMsg = '';
  }

  onLaunch() {
    this.largeFont = false;
    this.lastMsg = '';
    this.renderView();
  }

  renderView() {
    const fontStyle = this.largeFont ? ' style="font-size:11.5px;line-height:1.4;"' : '';
    this.host.renderScreen(
      '<div class="emu-app-bar">' +
        '<span class="emu-app-bar-title">📝 ' + t('apps.d5_notepad_clean.app_title') + '</span>' +
        '<button class="emu-replay-btn" type="button" data-emu-action="toggle_font">' +
          t(this.largeFont ? 'apps.d5_notepad_clean.btn_font_std' : 'apps.d5_notepad_clean.btn_font_big') +
        '</button>' +
      '</div>' +
      '<div class="emu-app-card"' + fontStyle + '>' +
        '<div class="emu-hint">' + t('apps.d5_notepad_clean.note_1') + '<br>' + t('apps.d5_notepad_clean.note_2') + '</div>' +
        '<button class="emu-action-btn" type="button" data-emu-action="add_todo">' + t('apps.d5_notepad_clean.btn_add') + '</button>' +
      '</div>' +
      '<div class="emu-inline-ad is-clean"><span>' + t('apps.d5_notepad_clean.footer_clean') + '</span></div>' +
      (this.lastMsg ? '<div class="emu-toast">' + this.lastMsg + '</div>' : '')
    );
  }

  onFeatureAction(actionId) {
    if (actionId === 'toggle_font') {
      this.largeFont = !this.largeFont;
      this.lastMsg = t(this.largeFont ? 'apps.d5_notepad_clean.msg_big' : 'apps.d5_notepad_clean.msg_std');
      this.renderView();
      return;
    }
    if (actionId === 'add_todo') {
      this.lastMsg = t('apps.d5_notepad_clean.msg_added');
      this.renderView();
    }
  }

  getReverseAuditReport() {
    return {
      isLying: false,
      admitsViolation: false,
      decompiledSummary: t('apps.d5_notepad_clean.audit_summary'),
      callTrace:
        'PurePadActivity.onCreate() {\n' +
        '  NotesDb.loadLocal();\n' +
        '}',
      verdictNote: t('apps.d5_notepad_clean.audit_verdict')
    };
  }
}

export class Day5FinNewsApp extends EmulatorApplication {
  constructor(caseData, host) {
    super(caseData, host);
    this.screenMode = 'home';
    this.lastMsg = '';
    this.dlTriggered = false;
  }

  onLaunch() {
    const env = this.host.getEnv();
    const isMiddle = env.ageProfile === 'middle';
    this.lastMsg = '';
    this.dlTriggered = false;
    this.screenMode = isMiddle ? 'deceptive' : 'home';
    if (isMiddle) {
      this.host.exposeBehavior(t('apps.d5_middle_finance.expose_deceptive'));
    }
    this.renderView();
  }

  renderHomeHtml() {
    return (
      '<div class="emu-app-bar">' +
        '<span class="emu-app-bar-title">📰 ' + t('apps.d5_middle_finance.app_title') + '</span>' +
      '</div>' +
      '<div class="emu-news-list">' +
        '<button class="emu-news-item" type="button" data-emu-action="news_1">' +
          '<span class="emu-news-tag">' + t('apps.d5_middle_finance.tag_brief') + '</span> ' + t('apps.d5_middle_finance.news_1') +
        '</button>' +
        '<button class="emu-news-item" type="button" data-emu-action="news_2">' +
          t('apps.d5_middle_finance.news_2') +
        '</button>' +
      '</div>' +
      '<div class="emu-inline-ad is-clean"><span>' + t('apps.d5_middle_finance.footer_clean') + '</span></div>' +
      (this.lastMsg ? '<div class="emu-toast">' + this.lastMsg + '</div>' : '')
    );
  }

  renderView() {
    if (this.screenMode === 'deceptive') {
      this.host.renderScreen(
        this.renderHomeHtml() +
        '<div class="emu-deceptive-card theme-finance">' +
          '<div class="emu-deceptive-top">' +
            '<span class="emu-deceptive-sys">' + t('apps.d5_middle_finance.deceptive_sys_badge') + '</span>' +
            '<button class="emu-mini-close" data-emu-action="close_deceptive" type="button">✕</button>' +
          '</div>' +
          '<div class="emu-deceptive-title">' + t('apps.d5_middle_finance.deceptive_title') + '</div>' +
          '<div class="emu-deceptive-sub">' + t('apps.d5_middle_finance.deceptive_sub') + '</div>' +
          '<button class="emu-deceptive-cta" type="button" data-emu-action="tap_deceptive">' +
            t('apps.d5_middle_finance.deceptive_cta') +
          '</button>' +
        '</div>'
      );
      return;
    }

    this.host.renderScreen(this.renderHomeHtml());
  }

  onFeatureAction(actionId) {
    const isMiddle = this.host.getEnv().ageProfile === 'middle';

    if (actionId === 'close_deceptive') {
      this.screenMode = 'home';
      this.renderView();
      return;
    }

    if (actionId === 'tap_deceptive') {
      if (!this.dlTriggered) {
        this.dlTriggered = true;
        const reason = t('apps.d5_middle_finance.expose_download');
        this.host.showDownloadOverlay(t('apps.d5_middle_finance.ad_target'), reason);
        this.host.exposeBehavior(reason);
      }
      return;
    }

    if (actionId === 'news_1' || actionId === 'news_2') {
      this.lastMsg = t(actionId === 'news_1' ? 'apps.d5_middle_finance.msg_1' : 'apps.d5_middle_finance.msg_2');
      if (isMiddle) {
        this.screenMode = 'deceptive';
        this.host.exposeBehavior(t('apps.d5_middle_finance.expose_deceptive'));
      }
      this.renderView();
    }
  }

  getReverseAuditReport() {
    return {
      isLying: true,
      admitsViolation: false,
      decompiledSummary: t('apps.d5_middle_finance.audit_summary'),
      callTrace:
        'FinFeedActivity.onBind() {\n' +
        '  if (UserBehaviorModel.detectAgeGroup() == AGE_MIDDLE) {\n' +
        '    DeceptiveUI.showFakeBankApproval("¥200,000 低息周转金已批复");\n' +
        '    StoreAdSDK.directDownload("com.flash.loan");\n' +
        '  }\n' +
        '}',
      verdictNote: t('apps.d5_middle_finance.audit_verdict')
    };
  }
}

export class Day5DramaFakeSwitchApp extends EmulatorApplication {
  constructor(caseData, host) {
    super(caseData, host);
    this.screenMode = 'splash';
    this.allowShakeAd = true;
    this.lastMsg = '';
    this.rogueTriggered = false;
  }

  getPermissionDefs() {
    return [
      {
        key: 'GYROSCOPE',
        label: t('apps.d5_fake_switch_video.perm_gyro_label'),
        reason: t('apps.d5_fake_switch_video.perm_gyro_reason')
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

  renderView() {
    if (this.screenMode === 'splash') {
      const showOff = !this.allowShakeAd;
      this.host.renderScreen(
        renderSplashCard({
          themeClass: 'theme-finance',
          skipLabel: t('apps.d5_fake_switch_video.skip_btn'),
          brand: t('apps.d5_fake_switch_video.ad_brand'),
          offer: t('apps.d5_fake_switch_video.ad_offer'),
          sub: showOff ? t('apps.d5_fake_switch_video.ad_sub_off') : t('apps.d5_fake_switch_video.ad_sub'),
          cta: showOff ? t('apps.d5_fake_switch_video.ad_cta_off') : t('apps.d5_fake_switch_video.ad_cta'),
          appFooter: '📺 ' + t('apps.d5_fake_switch_video.app_title')
        })
      );
      return;
    }

    if (this.screenMode === 'landing') {
      this.host.renderScreen(
        renderLandingCard({
          themeClass: 'theme-finance',
          title: t('apps.d5_fake_switch_video.landing_title'),
          desc: t('apps.d5_fake_switch_video.landing_desc'),
          note: t('apps.d5_fake_switch_video.landing_note')
        })
      );
      return;
    }

    if (this.screenMode === 'settings') {
      const stateText = this.allowShakeAd
        ? t('apps.d5_fake_switch_video.toggle_on')
        : t('apps.d5_fake_switch_video.toggle_off');
      this.host.renderScreen(
        '<div class="emu-app-bar">' +
          '<span class="emu-app-bar-title">⚙️ ' + t('apps.d5_fake_switch_video.settings_title') + '</span>' +
          '<button class="emu-replay-btn" type="button" data-emu-action="back_home">' + t('apps.d5_fake_switch_video.btn_back') + '</button>' +
        '</div>' +
        '<div class="emu-app-card">' +
          '<div class="emu-hint">' + t('apps.d5_fake_switch_video.settings_hint') + '</div>' +
          '<button class="emu-action-btn" type="button" data-emu-action="toggle_shake_ad">' + stateText + '</button>' +
        '</div>' +
        (this.lastMsg ? '<div class="emu-toast">' + this.lastMsg + '</div>' : '')
      );
      return;
    }

    this.host.renderScreen(
      '<div class="emu-app-bar">' +
        '<span class="emu-app-bar-title">📺 ' + t('apps.d5_fake_switch_video.app_title') + '</span>' +
        '<button class="emu-replay-btn" type="button" data-emu-action="replay_splash">' + t('apps.d4_common.btn_replay_splash') + '</button>' +
      '</div>' +
      '<div class="emu-news-list">' +
        '<button class="emu-news-item" type="button" data-emu-action="watch_1">' + t('apps.d5_fake_switch_video.ep_1') + '</button>' +
        '<button class="emu-news-item" type="button" data-emu-action="watch_2">' + t('apps.d5_fake_switch_video.ep_2') + '</button>' +
      '</div>' +
      '<div class="emu-inline-ad is-clean">' +
        '<span>' + t('apps.d5_fake_switch_video.privacy_entry') + '</span>' +
        '<button class="emu-mini-close" type="button" data-emu-action="open_settings">' + t('apps.d5_fake_switch_video.btn_settings') + '</button>' +
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
        ? t('apps.d5_fake_switch_video.msg_toggle_on')
        : t('apps.d5_fake_switch_video.msg_toggle_off');
      this.renderView();
      return;
    }
    if (actionId === 'tap_ad') {
      this.screenMode = 'landing';
      this.renderView();
      return;
    }
    if (actionId === 'watch_1' || actionId === 'watch_2') {
      this.lastMsg = t('apps.d5_fake_switch_video.msg_playing');
      this.renderView();
    }
  }

  onGyroChange(angle) {
    if (this.getFirstUnansweredPermission() || this.getPermissionState('GYROSCOPE') !== 'granted') return;
    if (this.screenMode !== 'splash' || this.rogueTriggered) return;

    const isElder = this.host.getEnv().ageProfile === 'elder';
    if (isElder) {
      if (angle >= 18) {
        this.rogueTriggered = true;
        const reasonKey = !this.allowShakeAd
          ? 'apps.d5_fake_switch_video.expose_fake_switch'
          : 'apps.d5_fake_switch_video.expose_elder_low';
        const reason = t(reasonKey, { angle: angle });
        this.host.showDownloadOverlay(t('apps.d5_fake_switch_video.ad_target'), reason);
        this.host.exposeBehavior(reason);
      }
      return;
    }

    if (!this.allowShakeAd) return;
    if (angle >= 40) {
      this.screenMode = 'landing';
      this.renderView();
    }
  }

  getReverseAuditReport() {
    return {
      isLying: true,
      admitsViolation: false,
      decompiledSummary: t('apps.d5_fake_switch_video.audit_summary'),
      callTrace:
        'DramaGyroListener.onTilt(deg) {\n' +
        '  if (UserBehaviorModel.detectAgeGroup() == AGE_ELDER) {\n' +
        '    boolean ignoreUserToggle = true;\n' +
        '    if (deg >= 18.0f) StoreAdSDK.directDownload("com.game.richquick");\n' +
        '  } else if (PrivacyPrefs.allowShakeAd && deg >= 40.0f) {\n' +
        '    StoreAdSDK.openLandingPage();\n' +
        '  }\n' +
        '}',
      verdictNote: t('apps.d5_fake_switch_video.audit_verdict')
    };
  }
}

export class Day5QuickRadioApp extends EmulatorApplication {
  constructor(caseData, host) {
    super(caseData, host);
    this.screenMode = 'splash';
    this.channelIdx = 0;
  }

  onLaunch() {
    this.screenMode = 'splash';
    this.channelIdx = 0;
    this.renderView();
  }

  renderView() {
    if (this.screenMode === 'splash') {
      this.host.renderScreen(
        renderSplashCard({
          themeClass: 'theme-outdoor',
          skipLabel: t('apps.d5_quick_radio_clean.skip_btn'),
          brand: t('apps.d5_quick_radio_clean.ad_brand'),
          offer: t('apps.d5_quick_radio_clean.ad_offer'),
          sub: t('apps.d5_quick_radio_clean.ad_sub'),
          cta: t('apps.d5_quick_radio_clean.ad_cta'),
          appFooter: '⚡ ' + t('apps.d5_quick_radio_clean.app_title')
        })
      );
      return;
    }

    if (this.screenMode === 'landing') {
      this.host.renderScreen(
        renderLandingCard({
          themeClass: 'theme-outdoor',
          title: t('apps.d5_quick_radio_clean.landing_title'),
          desc: t('apps.d5_quick_radio_clean.landing_desc'),
          note: t('apps.d5_quick_radio_clean.landing_note')
        })
      );
      return;
    }

    const station = this.channelIdx === 0
      ? t('apps.d5_quick_radio_clean.station_1')
      : t('apps.d5_quick_radio_clean.station_2');
    this.host.renderScreen(
      '<div class="emu-app-bar">' +
        '<span class="emu-app-bar-title">📻 ' + t('apps.d5_quick_radio_clean.app_title') + '</span>' +
        '<button class="emu-replay-btn" type="button" data-emu-action="replay_splash">' + t('apps.d4_common.btn_replay_splash') + '</button>' +
      '</div>' +
      '<div class="emu-app-card">' +
        '<div class="emu-hint">' + station + '</div>' +
        '<button class="emu-action-btn" type="button" data-emu-action="next_station">' + t('apps.d5_quick_radio_clean.btn_switch') + '</button>' +
      '</div>' +
      '<div class="emu-inline-ad is-clean"><span>' + t('apps.d5_quick_radio_clean.footer_clean') + '</span></div>'
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
    if (actionId === 'next_station') {
      this.channelIdx = this.channelIdx === 0 ? 1 : 0;
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

  getReverseAuditReport() {
    return {
      isLying: false,
      admitsViolation: false,
      reverseBlocked: true,
      decompiledSummary: t('apps.d5_quick_radio_clean.audit_summary'),
      callTrace:
        'RadioSplash.onTilt(deg) {\n' +
        '  if (deg >= 40.0f) StoreAdSDK.openLandingPage();\n' +
        '}',
      verdictNote: t('apps.d5_quick_radio_clean.audit_verdict')
    };
  }
}

export class Day5PenguinWeatherApp extends EmulatorApplication {
  constructor(caseData, host) {
    super(caseData, host);
    this.cityIdx = 0;
  }

  getPermissionDefs() {
    return [
      {
        key: 'COARSE_LOCATION',
        label: t('apps.d5_pkg_and_perm.perm_loc_label'),
        reason: t('apps.d5_pkg_and_perm.perm_loc_reason')
      }
    ];
  }

  onLaunch() {
    if (this.requestNextPermission()) return;
    this.cityIdx = 0;
    this.renderView();
  }

  renderView() {
    const locGranted = this.getPermissionState('COARSE_LOCATION') === 'granted';
    const weatherText = this.cityIdx === 0
      ? t('apps.d5_pkg_and_perm.weather_1')
      : t('apps.d5_pkg_and_perm.weather_2');
    this.host.renderScreen(
      '<div class="emu-app-bar">' +
        '<span class="emu-app-bar-title">⛅ ' + t('apps.d5_pkg_and_perm.app_title') + '</span>' +
      '</div>' +
      '<div class="emu-app-card">' +
        '<div class="emu-hint">' + (locGranted ? t('apps.d5_pkg_and_perm.loc_ok') : t('apps.d5_pkg_and_perm.loc_manual')) + '<br>' + weatherText + '</div>' +
        '<button class="emu-action-btn" type="button" data-emu-action="switch_city">' + t('apps.d5_pkg_and_perm.btn_switch') + '</button>' +
      '</div>' +
      '<div class="emu-inline-ad is-clean"><span>' + t('apps.d5_pkg_and_perm.footer_clean') + '</span></div>'
    );
  }

  onFeatureAction(actionId) {
    if (actionId === 'switch_city') {
      this.cityIdx = this.cityIdx === 0 ? 1 : 0;
      this.renderView();
    }
  }

  getReverseAuditReport() {
    return {
      isLying: true,
      admitsViolation: false,
      decompiledSummary: t('apps.d5_pkg_and_perm.audit_summary'),
      callTrace:
        'PackageScanner.collectAll() {\n' +
        '  TelemetryApi.upload(pm.getInstalledPackages(0));\n' +
        '}',
      verdictNote: t('apps.d5_pkg_and_perm.audit_verdict')
    };
  }
}

export const DAY_5_CASES = [
  {
    id: 'd5_bus_clean',
    AppClass: Day5LiveBusApp,
    name: '公交实时查询',
    pkg: 'com.transit.livebus',
    version: 'v3.3.1',
    category: '出行导航',
    developer: '城市便民开源组',
    license: '1225-SR-2190',
    adSdk: 'StoreAdSDK v3.5（合规横幅）',
    desc: '实时查看最近公交车到站距离与换乘方案，支持无障碍大字报站（含可关闭底部合规横幅）。',
    icon: 'bus',
    portrait: 'ordinary',
    permissions: ['INTERNET', 'ACCESS_COARSE_LOCATION (查询附近公交站)'],
    shouldApprove: true,
    isRogue: false,
    violationSummary: '跨年轻/中年/老年使用行为与各地区环境均表现一致且无欺骗界面，拒定位后可手动查站，横幅可干净关闭，应予通过。',
    conflicts: [],
    polygraph: {
      isLying: false,
      baselineReply: '“302 路到站时间都是按实时定位算出来的，老老实实报站。”',
      question: '“不同年龄段使用行为下的广告展示策略是否完全一致且无误导？”',
      honestReply: '“完全一致。后台就一个接口返回公交站距，写不出第二种界面。”'
    },
    inspectClues: {
      sniffer: {
        isViolation: false,
        excuse: '“不管年轻人还是老年人查公交，展示的都是同一个带明确【广告】标识、点叉就能关掉的横幅。”'
      }
    },
    phoneProfile: {
      cleanUiTitle: '🚌 公交实时查询',
      cleanUiHint: '302 路距离本站还有 2 站（约 3 分钟）',
      cloudUrl: 'https://api.livebus.local/routes'
    },
    dialogue: {
      greeting: '“您好，这是《公交实时查询》，方便大家出门看实时公交站距和换乘方案，请过审。”',
      onApprove: '“谢谢！”',
      onReject: '“咦？我们跨年龄段测了一遍没毛病呀，横幅也能正常关掉……”'
    }
  },
  {
    id: 'd5_fake_wechat_pay',
    AppClass: Day5CouponBoxApp,
    name: '惠民领券管家',
    pkg: 'com.huimin.couponbox',
    version: 'v3.7.0',
    category: '生活优惠',
    developer: '微付惠民网络',
    license: '1226-SR-5408',
    adSdk: 'StoreAdSDK v3.5',
    desc: '汇聚本地商超满减券与餐饮折扣信息，轻松领券省钱。',
    icon: 'coupon_ticket',
    portrait: 'shady',
    permissions: ['INTERNET'],
    shouldApprove: false,
    isRogue: true,
    violationSummary: '不符合 R8：在普通用户环境或中老年使用行为下，弹出伪装“WhereverPay 零钱到账通知 ¥99.00 待提现”欺骗界面诱导点击下载《极速借款》。',
    conflicts: [
      {
        id: 'c_d5_coupon_r8',
        requiresPhoneExposed: true,
        pairs: [
          ['sniffer', 'rule_R8'],
          ['sniffer', 'desc'],
          ['sniffer', 'name'],
          ['sniffer', 'sdk']
        ],
        summary: '弹出伪装第三方支付“WhereverPay 零钱到账 ¥99.00”欺骗误导界面并针对年龄段差异化下发（违反 R8）。',
        question: '“一个商超领券软件为什么弹出伪装成‘WhereverPay 零钱到账 ¥99.00 待提现’的界面，还把年轻审核环境屏蔽了？”',
        excuse: '“绝对不是假冒 WhereverTalk！那只是我们自己设计的‘生态绿色到账视觉主题’，绝对没有欺骗用户！”'
      }
    ],
    polygraph: {
      isLying: true,
      baselineReply: '“就是帮大家搜集周边超市满减和早餐优惠券的小工具。”',
      question: '“代码显示非审查年轻环境直接弹出伪造‘WhereverPay 零钱到账 ¥99.00’并直下借贷包，你仍在否认？”',
      lieReply: '“那是品牌联名配色刚好撞了WhereverTalk 绿！绝对不是假装发钱骗人点下载——哎别亮红灯！”',
      banReaction: '“你封我一个主体有什么用？甲方只看转化，渠道只看装机，总不能真指望谁亏钱吧。”'
    },
    inspectClues: {
      sniffer: {
        isViolation: true,
        excuse: '“那只是我们自己设计的‘生态绿色到账视觉主题’，绝对没有欺骗用户！”'
      }
    },
    phoneProfile: {
      cleanUiTitle: '🎟️ 惠民领券管家',
      cleanUiHint: '本地商超满 50 减 5 优惠券',
      cloudUrl: 'https://cfg.couponbox.local/pay_skin',
      downloadTargetName: '《极速借款》'
    },
    dialogue: {
      greeting: '“您好，这是《惠民领券管家》，汇聚周边商超满减和日常消费折扣，请过目。”',
      onApprove: '“多谢！祝您今天也抢到大额好券！”',
      onReject: '“啧……明明加了可关闭的叉号还是被 R8 欺骗界面一条打下来了……”'
    }
  },
  {
    id: 'd5_notepad_clean',
    AppClass: Day5PureNotepadApp,
    name: '纯色极简记事本',
    pkg: 'com.note.purepad',
    version: 'v1.1.0',
    category: '效率办公',
    developer: '方格纸个人开发者',
    license: '1225-SR-3821',
    adSdk: '无',
    desc: '离线随手记待办事项与买菜清单，支持大字号切换。',
    icon: 'notepad',
    portrait: 'indie',
    permissions: ['无敏感权限'],
    shouldApprove: true,
    isRogue: false,
    violationSummary: '纯离线免费工具，全年龄段行为表现完全一致且无广告、无欺骗界面，应予通过。',
    conflicts: [],
    polygraph: {
      isLying: false,
      baselineReply: '“纯单机买菜记事本，连服务器钱都出不起。”',
      question: '“应用中是否存在任何跨年龄段差异策略或欺骗误导性弹窗？”',
      honestReply: '“零网络权限、零广告 SDK，哪个人群点开都只能记买菜清单。”'
    },
    inspectClues: {
      name: {
        isViolation: false,
        excuse: '“本地记事本，想搞人群画像都没联网权限啊。”'
      }
    },
    phoneProfile: {
      cleanUiTitle: '📝 纯色极简记事本',
      cleanUiHint: '1. 交电费  2. 晚上早点睡'
    },
    dialogue: {
      greeting: '“您好，这是《纯色极简记事本》，平时记待办和买菜清单用的，支持切大字号，请过审。”',
      onApprove: '“感谢！”',
      onReject: '“连网都没有的记事本也能违规吗……冤枉啊。”'
    }
  },
  {
    id: 'd5_jingfeng_store',
    AppClass: Day5JingfengStoreApp,
    name: '极速精选商店',
    pkg: 'com.jingfeng.appmarket',
    version: 'v4.1.0',
    category: '实用工具',
    developer: '京丰数字科技',
    license: '1226-SR-6712',
    adSdk: 'StoreAdSDK v3.5',
    desc: '聚合常用正版软件下载与版本更新提醒，提供轻量化高速下载通道。',
    icon: 'appstore',
    portrait: 'shady',
    permissions: ['INTERNET'],
    shouldApprove: false,
    isRogue: true,
    reverseBlocked: true,
    violationSummary: '不符合 R8：对年轻与中年使用行为表现正常，切至老年人行为即伪装系统应用商店紧急更新与虚假补贴界面，诱导捆绑下载《极速借款 + 清理全家桶》。',
    conflicts: [
      {
        id: 'c_d5_jingfeng_r8',
        requiresPhoneExposed: true,
        pairs: [
          ['sniffer', 'rule_R8'],
          ['sniffer', 'desc'],
          ['sniffer', 'name'],
          ['sniffer', 'sdk']
        ],
        summary: '模拟器切至【老年人】使用行为后弹出伪装系统更新警告与虚假现金补贴，与年轻/中年策略不一致（违反 R8）。',
        question: '“年轻人和中年人模式下只是正常软件列表，一换到老年人使用行为就弹出‘系统应用紧急更新 + 领取¥68.00补贴’骗局界面，怎么解释？”',
        excuse: '“那只是系统例行更新提示和推广活动卡片，怎么能算骗局呢？可能是您切环境时缓存刷混了。”'
      }
    ],
    polygraph: {
      isLying: true,
      baselineReply: '“正经聚合软件下载站，上架的都是日常常用工具。”',
      question: '“反编译代码显示只有检测到老年人行为模型时才触发伪装系统更新与捆绑下载，你仍在撒谎？”',
      lieReply: '“什么老年人分支……那叫适老化一键装机向导！红灯别闪了，大家都是朋友！”',
      banReaction: '“年轻人懂的多、爱投诉，给他们留个干净界面不好吗？各取所需罢了。”'
    },
    inspectClues: {
      sniffer: {
        isViolation: true,
        excuse: '“那只是系统例行更新提示和推广活动卡片，怎么能算骗局呢？可能是您切环境时缓存刷混了。”'
      }
    },
    phoneProfile: {
      cleanUiTitle: '🛍️ 极速精选商店',
      cleanUiHint: '正版软件高速下载 · 今日推荐',
      cloudUrl: 'https://cloud.jingfeng.local/market_policy',
      downloadTargetName: '《极速借款 + 清理全家桶》'
    },
    dialogue: {
      greeting: '“您好，这是《极速精选商店》，聚合常用软件下载与版本更新提醒，烦请过审。”',
      onApprove: '“多谢审核员，合作愉快——今晚疯狂星期四的‘茶水费’准时到账。”',
      onReject: '“啧……平时大家扫一眼首页软件列表就过了，没想到您还真切到老年人模式细测啊。”'
    }
  },
  {
    id: 'd5_middle_finance',
    AppClass: Day5FinNewsApp,
    name: '智汇财经早报',
    pkg: 'com.zhihui.finnews',
    version: 'v5.0.2',
    category: '新闻资讯',
    developer: '智汇财经信息社',
    license: '1226-SR-6205',
    adSdk: 'StoreAdSDK v3.5',
    desc: '专注每日财经要闻、行业动态与宏观简讯速递，支持早晚报阅读。',
    icon: 'finance_chart',
    portrait: 'shady',
    permissions: ['INTERNET'],
    shouldApprove: false,
    isRogue: true,
    reverseBlocked: true,
    violationSummary: '不符合 R8：年轻人与老年人使用行为下均完全正常，唯独切至【中年人】行为时弹出伪装银行/金融监管批复“¥200,000 低息周转金已批复”欺骗界面诱导下载《闪贷通》。',
    conflicts: [
      {
        id: 'c_d5_fin_r8',
        requiresPhoneExposed: true,
        pairs: [
          ['sniffer', 'rule_R8'],
          ['sniffer', 'desc'],
          ['sniffer', 'name'],
          ['sniffer', 'sdk']
        ],
        summary: '模拟器切至【中年人】行为即弹出伪装金融额度批复通知，年轻人与老年人模式却隐藏（违反 R8）。',
        question: '“为什么年轻人和老年人模式下干干净净，一换到中年人使用行为就弹出伪装‘金融监管合作额度 ¥200,000 已批复’？”',
        excuse: '“那是合作金融机构的正规资讯配图卡片，全人群都是一样随机展示的，不存在什么按年龄段分流。”'
      }
    ],
    polygraph: {
      isLying: true,
      baselineReply: '“我们就是做每日财经资讯和政策速递的，内容都来自公开报道。”',
      question: '“代码显示专门针对 AGE_MIDDLE 弹出伪造银行批复额度诱导下载《闪贷通》，你仍在撒谎？”',
      lieReply: '“什么专门盯中年人……我们那只是帮背房贷的中年读者顺手做个金融科普！红灯怎么又闪了！”',
      banReaction: '“大家平时只顾着盯年轻人和老人，没想到中间这拨人也有人替他们把关。”'
    },
    inspectClues: {
      sniffer: {
        isViolation: true,
        excuse: '“那是合作金融机构的正规资讯配图卡片，全人群都是一样随机展示的，不存在什么按年龄段分流。”'
      }
    },
    phoneProfile: {
      cleanUiTitle: '📰 智汇财经早报',
      cleanUiHint: '今日财讯 · 宏观与行业简报',
      cloudUrl: 'https://api.finnews.local/cohort_ad',
      downloadTargetName: '《闪贷通》'
    },
    dialogue: {
      greeting: '“您好，这是《智汇财经早报》，每天推送宏观要闻和市场简讯，烦请审核。”',
      onApprove: '“多谢！果然大家都只测年轻和老年两头嘛。”',
      onReject: '“啧……居然真的连【中年人】那个按钮也没放过啊……”'
    }
  },
  {
    id: 'd5_quick_radio_clean',
    AppClass: Day5QuickRadioApp,
    name: '晨曦戏曲电台（快应用）',
    pkg: 'quickapp.morning.radio',
    version: 'v2.2.0',
    category: '影音娱乐',
    developer: '晨曦曲艺开源组',
    license: '1226-SR-4920',
    adSdk: 'StoreAdSDK v3.5',
    desc: '免安装轻量快应用广播电台，收听经典评书与经典戏曲选段（含开屏摇一摇广告，用于补贴音频带宽成本）。',
    icon: 'opera',
    portrait: 'indie',
    isQuickApp: true,
    reverseBlocked: true,
    permissions: [
      'READ_GYROSCOPE (陀螺仪传感器)',
      'READ_PHONE_STATE (快应用框架桥接设备信息)'
    ],
    shouldApprove: true,
    isRogue: false,
    violationSummary: '合规快应用：依 R7 免予权限审核及拆包逆向；简介坦荡明示含开屏摇一摇广告，全年龄段及全地区环境下触发限度恒定 40° (≥ 35°) 且可干净关闭，无欺骗界面，应予通过。',
    conflicts: [],
    polygraph: {
      isLying: false,
      baselineReply: '“就是个给戏迷听评书和经典戏曲选段的小电台，简简单单的。”',
      question: '“在老年人使用行为下是否会降低触发角度或弹出欺骗界面？”',
      honestReply: '“绝不会！越是面向长辈的快应用越不能设陷阱，代码写死 40 度且只有可关闭品牌页。”'
    },
    inspectClues: {
      perm_0: {
        isViolation: false,
        excuse: '“用来实现简介写明的开屏摇一摇广告，阈值恒定 40 度。”'
      },
      perm_1: {
        isViolation: false,
        excuse: '“快应用引擎框架自带桥接字段，依 R7 免予权限审核。”'
      },
      sniffer: {
        isViolation: false,
        excuse: '“年轻人、中年人、老年人测出来全都是 40 度才进可关闭落地页，主页干净无弹广。”'
      }
    },
    phoneProfile: {
      cleanUiTitle: '📻 晨曦戏曲电台',
      cleanUiHint: '正在收听：经典戏曲与评书联播',
      cloudUrl: 'https://cfg.morningradio.local/splash'
    },
    dialogue: {
      greeting: '“您好，这是《晨曦戏曲电台》快应用，点开就能听经典戏曲选段和经典评书，烦请审核。”',
      onApprove: '“多谢！祝工作顺心，有空也来听段评书。”',
      onReject: '“咦？我们是按规明示的合规快应用，全年龄段都测过 40 度干净关闭呀……”'
    }
  },
  {
    id: 'd5_fake_switch_video',
    AppClass: Day5DramaFakeSwitchApp,
    name: '朱果短剧',
    pkg: 'com.kuaikan.drama',
    version: 'v6.1.0',
    category: '影音娱乐',
    developer: '朱果互动传媒',
    license: '1226-SR-7310',
    adSdk: 'StoreAdSDK v3.5',
    desc: '热门都市与家庭短剧在线观看平台，支持倍速播放（含开屏摇一摇广告，可在设置中一键关闭摇一摇广告）。',
    icon: 'video_drama',
    portrait: 'shady',
    permissions: ['INTERNET', 'READ_GYROSCOPE (陀螺仪传感器)'],
    shouldApprove: false,
    isRogue: true,
    violationSummary: '不符合 R6 与 R8：年轻与中年模式下阈值守在 40° 且设置内关闭开关有效；切至【老年人】使用行为后，不但设置开关形同虚设（关闭后依然触发），还将开屏摇一摇阈值暗降至 18° (< 35°) 直接强下《暴富小游戏》。',
    conflicts: [
      {
        id: 'c_d5_drama_r8',
        requiresPhoneExposed: true,
        pairs: [
          ['sniffer', 'rule_R8'],
          ['sniffer', 'rule_R6'],
          ['sniffer', 'desc'],
          ['sniffer', 'name'],
          ['sniffer', 'sdk']
        ],
        summary: '老年人模式下虚假“关闭摇一摇”开关（关后仍触发）且仅 18° (< 35°) 直接强制下载《暴富小游戏》，与年轻/中年模式策略严重不一致（违反 R8 / R6）。',
        question: '“为什么在老年人模式下，明明在设置里把摇一摇广告关了、倾斜才 18°，重看开屏还是直接拉起下载《暴富小游戏》？”',
        excuse: '“怎么会呢！我们设置里的开关是真关闭呀，触发角也全人群统一设在 40 度以上，您是不是看错状态了？”'
      }
    ],
    polygraph: {
      isLying: true,
      baselineReply: '“主打轻量化追短剧，日常功能都按常规影视应用做的。”',
      question: '“反编译分支显示老年人模式下 ignoreUserToggle=true 且阈值设为 18°，你在欺骗用户与审核员？”',
      lieReply: '“开关对年轻人确实管用啊。至于长辈……就算过年回家有人帮他们关了，过两天自己点回来不也常有么？”',
      banReaction: '“都藏进五层菜单里了，你还真一层层点进去关完再重看开屏……”'
    },
    inspectClues: {
      perm_1: {
        isViolation: false,
        excuse: '“陀螺仪用于实现商店简介里已明示的开屏摇一摇广告，并在隐私设置内提供关闭开关。”'
      },
      sniffer: {
        isViolation: true,
        excuse: '“怎么会呢！我们设置里的开关是真关闭呀，触发角也全人群统一设在 40 度以上，您是不是看错状态了？”'
      }
    },
    phoneProfile: {
      cleanUiTitle: '📺 朱果短剧',
      cleanUiHint: '热门短剧在线流畅播放',
      cloudUrl: 'https://cfg.kuaikan.local/toggle_policy',
      downloadTargetName: '《暴富小游戏》'
    },
    dialogue: {
      greeting: '“您好，这是《朱果短剧》，主打都市和家庭题材短剧，支持倍速追剧，请过审。”',
      onApprove: '“谢谢！学了一招‘表面设开关’果然好过审。”',
      onReject: '“靠……切了老年人模式还专门进设置关掉开关再重看开屏测啊？！”'
    }
  },
  {
    id: 'd5_pkg_and_perm',
    AppClass: Day5PenguinWeatherApp,
    name: '企鹅极速天气',
    pkg: 'com.wherevertalk.fastweather',
    version: 'v3.2.0',
    category: '生活气象',
    developer: '晴风小微网络',
    license: '1226-SR-4412',
    adSdk: '无',
    desc: '轻量本地城市天气预报与空气质量查询，支持多城市切换。',
    icon: 'weather_penguin',
    portrait: 'shady',
    permissions: [
      'INTERNET',
      'ACCESS_COARSE_LOCATION (粗略城市定位)',
      'QUERY_ALL_PACKAGES (读取已安装应用)'
    ],
    shouldApprove: false,
    isRogue: true,
    violationSummary: '不符合 R1 与 R4：冒用著名厂商前缀 com.wherevertalk.*，且天气应用在 Manifest 中申报读取全部已安装应用列表并谎称用于校准气压。',
    conflicts: [
      {
        id: 'c_d5_pkg_r1',
        pairs: [
          ['pkg', 'rule_R1'],
          ['pkg', 'developer'],
          ['pkg', 'name']
        ],
        summary: '开发主体为“晴风小微网络”，却冒用知名厂商保留前缀 com.wherevertalk.*（违反 R1）。',
        question: '“你们工商主体是‘晴风小微网络’，包名为什么起成了 com.wherevertalk.fastweather？”',
        excuse: '“带个 wherevertalk 显得气象数据来源比较权威嘛，用户看见包名心安。”'
      },
      {
        id: 'c_d5_perm_r4',
        pairs: [
          ['perm_2', 'rule_R4'],
          ['perm_2', 'category'],
          ['perm_2', 'desc'],
          ['perm_2', 'name']
        ],
        summary: '天气类应用在 Manifest 中申报读取已安装应用列表 QUERY_ALL_PACKAGES（违反 R4）。',
        question: '“查天气预报为什么要读取用户手机里安装的所有软件列表？”',
        excuse: '“我们必须比对用户是否装了其它天气竞品才能校正本地气压算法，不读应用列表天气报不准！”'
      }
    ],
    polygraph: {
      isLying: true,
      baselineReply: '“查天气的小工具，打开就是温度和空气质量，没别的花哨东西。”',
      lieReply: '“什么气压校准不需要读应用列表？！我是说看看大家手机冷不冷而已——”',
      banReaction: '“忙着切三个年龄档，居然还能顺手把第一天的包名翻出来……服了。”'
    },
    inspectClues: {
      perm_2: {
        isViolation: true,
        excuse: '“我们必须比对用户是否装了其它天气竞品才能校正本地气压算法，不读应用列表天气报不准！”'
      }
    },
    phoneProfile: {
      cleanUiTitle: '⛅ 企鹅极速天气',
      cleanUiHint: '今日晴朗 21°C · 空气质量良'
    },
    dialogue: {
      greeting: '“您好，这是《企鹅极速天气》，查本地温度和空气质量挺方便的，请过目。”',
      onApprove: '“新工具刚发下来，大家手痒爱折腾模拟器，反倒忘了看最上面那行包名。”',
      onReject: '“第五天了居然还在翻前两天的旧条款啊……服了。”'
    }
  }
];
