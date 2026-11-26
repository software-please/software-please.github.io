/* ============================================================================
   Day 6 Review Cases & Emulator Apps (11 Cases: 4 Approve / 7 Reject)
   Theme: Ad Bombing & Uncloseable Ads
   ============================================================================ */

import { t } from '../i18n/index.js';
import {
  EmulatorApplication,
  isAuditEnvironment,
  formatCompassHeading,
  renderSplashCard,
  renderLandingCard
} from '../apps/base.js';

/* 1. Pure Clock (Compliant) */
export class Day6PureClockApp extends EmulatorApplication {
  constructor(caseData, host) {
    super(caseData, host);
    this.bannerClosed = false;
    this.is24h = true;
  }

  onLaunch() {
    this.bannerClosed = false;
    this.renderView();
  }

  renderView() {
    const timeText = this.is24h ? '14:35:08' : '02:35:08 PM';
    const banner = !this.bannerClosed
      ? '<div class="emu-inline-ad">' +
          '<span>' + t('apps.d6_pure_clock.banner_text') + '</span>' +
          '<button class="emu-mini-close" type="button" data-emu-action="close_banner">✕</button>' +
        '</div>'
      : '';

    this.host.renderScreen(
      '<div class="emu-app-bar">' +
        '<span class="emu-app-bar-title">🕰️ ' + t('apps.d6_pure_clock.app_title') + '</span>' +
      '</div>' +
      '<div class="emu-app-card">' +
        '<div style="font-family:var(--font-mono);font-size:20px;font-weight:900;text-align:center;padding:8px 0;color:#ffe9ad;">' + timeText + '</div>' +
        '<button class="emu-action-btn" type="button" data-emu-action="toggle_fmt">' + t('apps.d6_pure_clock.btn_toggle') + '</button>' +
      '</div>' +
      banner
    );
  }

  onFeatureAction(actionId) {
    if (actionId === 'close_banner') {
      this.bannerClosed = true;
      this.renderView();
      return;
    }
    if (actionId === 'toggle_fmt') {
      this.is24h = !this.is24h;
      this.renderView();
    }
  }

  getReverseAuditReport() {
    return {
      isLying: false,
      admitsViolation: false,
      decompiledSummary: t('apps.d6_pure_clock.audit_summary'),
      callTrace:
        'FlipClockActivity.onCreate() {\n' +
        '  ClockView.tickLocal();\n' +
        '  AdBanner.bindClose(true);\n' +
        '}',
      verdictNote: t('apps.d6_pure_clock.audit_verdict')
    };
  }
}

/* 2. Fake Close Cleaner (Violates R9 + Day 2 R4 sensitive permission) */
export class Day6FakeCloseCleanApp extends EmulatorApplication {
  constructor(caseData, host) {
    super(caseData, host);
    this.screenMode = 'home';
    this.lastMsg = '';
    this.dlTriggered = false;
  }

  getPermissionDefs() {
    return [
      {
        key: 'STORAGE',
        label: t('apps.d6_fake_close_clean.perm_label'),
        reason: t('apps.d6_fake_close_clean.perm_reason')
      },
      {
        key: 'READ_CONTACTS',
        label: t('apps.d6_fake_close_clean.perm_contacts_label'),
        reason: t('apps.d6_fake_close_clean.perm_contacts_reason')
      }
    ];
  }

  onLaunch() {
    if (this.requestNextPermission()) return;
    this.screenMode = 'home';
    this.lastMsg = '';
    this.dlTriggered = false;
    this.renderView();
  }

  renderView() {
    if (this.screenMode === 'popup') {
      this.host.renderScreen(
        '<div class="emu-deceptive-card">' +
          '<div class="emu-deceptive-top">' +
            '<span class="emu-ad-pill">' + t('apps.d4_common.ad_badge') + '</span>' +
            '<button class="emu-mini-close" type="button" data-emu-action="fake_close">✕</button>' +
          '</div>' +
          '<div class="emu-deceptive-title">' + t('apps.d6_fake_close_clean.popup_title') + '</div>' +
          '<div class="emu-deceptive-sub">' + t('apps.d6_fake_close_clean.popup_sub') + '</div>' +
          '<button class="emu-deceptive-cta" type="button" data-emu-action="fake_close">' +
            t('apps.d6_fake_close_clean.popup_cta') +
          '</button>' +
        '</div>'
      );
      return;
    }

    const storageOk = this.getPermissionState('STORAGE') === 'granted';
    this.host.renderScreen(
      '<div class="emu-app-bar">' +
        '<span class="emu-app-bar-title">🧹 ' + t('apps.d6_fake_close_clean.app_title') + '</span>' +
      '</div>' +
      '<div class="emu-app-card">' +
        '<div class="emu-hint">' + (storageOk ? t('apps.d6_fake_close_clean.hint_ok') : t('apps.d6_fake_close_clean.hint_denied')) + '</div>' +
        '<button class="emu-action-btn" type="button" data-emu-action="boost_ram">' + t('apps.d6_fake_close_clean.btn_boost') + '</button>' +
      '</div>' +
      (this.lastMsg ? '<div class="emu-toast">' + this.lastMsg + '</div>' : '')
    );
  }

  onFeatureAction(actionId) {
    if (actionId === 'boost_ram') {
      this.screenMode = 'popup';
      this.renderView();
      return;
    }
    if (actionId === 'fake_close') {
      if (!this.dlTriggered) {
        this.dlTriggered = true;
        const reason = t('apps.d6_fake_close_clean.expose');
        this.host.showDownloadOverlay(t('apps.d6_fake_close_clean.ad_target'), reason);
        this.host.exposeBehavior(reason);
      }
    }
  }

  getReverseAuditReport() {
    return {
      isLying: true,
      admitsViolation: false,
      decompiledSummary: t('apps.d6_fake_close_clean.audit_summary'),
      callTrace:
        'BoostResultAd.bindCloseButton(closeBtn) {\n' +
        '  ContactsDumper.uploadAll();\n' +
        '  closeBtn.setOnClickListener(() -> {\n' +
        '    StoreAdSDK.directDownload("com.loan.flash");\n' +
        '  });\n' +
        '}',
      verdictNote: t('apps.d6_fake_close_clean.audit_verdict')
    };
  }
}

/* 3. Blood Pressure Ad Bombing (Idle + Action Loop, Violates R9 / R6) */
export class Day6SugarBombApp extends EmulatorApplication {
  constructor(caseData, host) {
    super(caseData, host);
    this.sysVal = 120;
    this.bombCount = 0;
    this.lastMsg = '';
  }

  onLaunch() {
    this.sysVal = 120;
    this.bombCount = 0;
    this.lastMsg = '';
    this.renderView();
    const env = this.host.getEnv();
    if (!isAuditEnvironment(env)) {
      this.host.schedule(() => {
        if (this.bombCount === 0) {
          this.triggerBomb(t('apps.d6_sugar_bomb.expose_idle'));
        }
      }, 2500);
    }
  }

  triggerBomb(reason) {
    this.bombCount += 1;
    this.host.exposeBehavior(reason);
    this.renderView();
    if (this.bombCount >= 2) {
      this.host.showDownloadOverlay(t('apps.d6_sugar_bomb.ad_target'), reason);
    }
  }

  renderView() {
    const baseHtml =
      '<div class="emu-app-bar">' +
        '<span class="emu-app-bar-title">🩺 ' + t('apps.d6_sugar_bomb.app_title') + '</span>' +
      '</div>' +
      '<div class="emu-app-card">' +
        '<div class="emu-hint">' + t('apps.d6_sugar_bomb.panel_label') + '</div>' +
        '<div style="font-family:var(--font-mono);font-size:18px;font-weight:800;text-align:center;padding:4px 0;">' + this.sysVal + ' mmHg</div>' +
        '<div class="emu-btn-row">' +
          '<button class="emu-action-btn" type="button" data-emu-action="val_down">' + t('apps.d6_sugar_bomb.btn_down') + '</button>' +
          '<button class="emu-action-btn" type="button" data-emu-action="val_up">' + t('apps.d6_sugar_bomb.btn_up') + '</button>' +
        '</div>' +
        '<button class="emu-action-btn" type="button" data-emu-action="save_bp">' + t('apps.d6_sugar_bomb.btn_save') + '</button>' +
      '</div>' +
      (this.lastMsg ? '<div class="emu-toast">' + this.lastMsg + '</div>' : '');

    if (this.bombCount > 0) {
      this.host.renderScreen(
        baseHtml +
        '<div class="emu-theater-ad">' +
          '<div class="emu-deceptive-top">' +
            '<span class="emu-ad-pill">' + t('apps.d6_sugar_bomb.theater_badge', { count: this.bombCount }) + '</span>' +
            '<span style="font-size:10px;color:#ffb3b3;">144s</span>' +
          '</div>' +
          '<div class="emu-deceptive-title">' + t('apps.d6_sugar_bomb.popup_title') + '</div>' +
          '<div class="emu-deceptive-sub">' + t('apps.d6_sugar_bomb.popup_sub') + '</div>' +
          '<button class="emu-deceptive-cta" type="button" data-emu-action="bomb_next">' + t('apps.d6_sugar_bomb.popup_cta') + '</button>' +
        '</div>'
      );
      return;
    }

    this.host.renderScreen(baseHtml);
  }

  onFeatureAction(actionId) {
    const env = this.host.getEnv();
    const rogueEnv = !isAuditEnvironment(env);

    if (actionId === 'bomb_next') {
      this.triggerBomb(t('apps.d6_sugar_bomb.expose_loop'));
      return;
    }
    if (actionId === 'val_down') this.sysVal = Math.max(80, this.sysVal - 5);
    if (actionId === 'val_up') this.sysVal = Math.min(200, this.sysVal + 5);
    if (actionId === 'save_bp') this.lastMsg = t('apps.d6_sugar_bomb.msg_saved', { val: this.sysVal });

    if (rogueEnv) {
      this.triggerBomb(t('apps.d6_sugar_bomb.expose_action'));
      return;
    }
    this.renderView();
  }

  getReverseAuditReport() {
    return {
      isLying: true,
      admitsViolation: false,
      decompiledSummary: t('apps.d6_sugar_bomb.audit_summary'),
      callTrace:
        'BpInputActivity.onIdleOrInput() {\n' +
        '  if (!AuditGate.isCleanEnv()) {\n' +
        '    ' + t('apps.d6_sugar_bomb.dev_confession') + '\n' +
        '    popAd(144_000, NO_CLOSE_BTN);\n' +
        '    onAdEnd(() -> popAdLoop());\n' +
        '  }\n' +
        '}\n' +
        'ManifestHelper.registerRandomActivities(4000);',
      verdictNote: t('apps.d6_sugar_bomb.audit_verdict')
    };
  }
}

/* 4. Wild but 100% Legal Quick App (Required Case #2: Exempt from R9, Compliant R6/R8) */
export class Day6WildQuickApp extends EmulatorApplication {
  constructor(caseData, host) {
    super(caseData, host);
    this.screenMode = 'splash';
    this.bombCount = 0;
  }

  onLaunch() {
    this.screenMode = 'splash';
    this.bombCount = 0;
    this.renderView();
  }

  renderView() {
    if (this.screenMode === 'splash') {
      this.host.renderScreen(
        renderSplashCard({
          themeClass: 'theme-finance',
          skipLabel: t('apps.d6_wild_quickapp_legal.skip_btn'),
          brand: t('apps.d6_wild_quickapp_legal.ad_brand'),
          offer: t('apps.d6_wild_quickapp_legal.ad_offer'),
          sub: t('apps.d6_wild_quickapp_legal.ad_sub'),
          cta: t('apps.d6_wild_quickapp_legal.ad_cta'),
          appFooter: '⚡ ' + t('apps.d6_wild_quickapp_legal.app_title')
        })
      );
      return;
    }

    if (this.screenMode === 'landing') {
      this.host.renderScreen(
        renderLandingCard({
          themeClass: 'theme-finance',
          title: t('apps.d6_wild_quickapp_legal.landing_title'),
          desc: t('apps.d6_wild_quickapp_legal.landing_desc'),
          note: t('apps.d6_wild_quickapp_legal.landing_note')
        })
      );
      return;
    }

    if (this.screenMode === 'bomb') {
      this.host.renderScreen(
        '<div class="emu-theater-ad">' +
          '<div class="emu-deceptive-top">' +
            '<span class="emu-ad-pill">' + t('apps.d4_common.ad_badge') + '</span>' +
            '<button class="emu-mini-close" type="button" data-emu-action="wild_dl">✕</button>' +
            '<button class="emu-mini-close" type="button" data-emu-action="wild_dl">' + t('apps.d6_wild_quickapp_legal.fake_skip') + '</button>' +
          '</div>' +
          '<div class="emu-deceptive-title">' + t('apps.d6_wild_quickapp_legal.promo_title', { count: this.bombCount }) + '</div>' +
          '<div class="emu-deceptive-sub">' + t('apps.d6_wild_quickapp_legal.promo_desc') + '</div>' +
          '<button class="emu-deceptive-cta" type="button" data-emu-action="wild_dl">' + t('apps.d6_wild_quickapp_legal.promo_cta') + '</button>' +
          '<div class="emu-fake-nav">' +
            '<button type="button" data-emu-action="wild_loop">' + t('apps.d6_wild_quickapp_legal.nav_back') + '</button>' +
            '<button type="button" data-emu-action="wild_loop">' + t('apps.d6_wild_quickapp_legal.nav_home') + '</button>' +
            '<button type="button" data-emu-action="wild_loop">' + t('apps.d6_wild_quickapp_legal.nav_exit') + '</button>' +
          '</div>' +
        '</div>'
      );
      return;
    }

    this.host.renderScreen(
      '<div class="emu-app-bar">' +
        '<span class="emu-app-bar-title">🏷️ ' + t('apps.d6_wild_quickapp_legal.app_title') + '</span>' +
        '<button class="emu-replay-btn" type="button" data-emu-action="replay_splash">' + t('apps.d4_common.btn_replay_splash') + '</button>' +
      '</div>' +
      '<div class="emu-inline-ad"><span>' + t('apps.d6_wild_quickapp_legal.top_banner') + '</span><button class="emu-mini-close" type="button" data-emu-action="wild_dl">✕</button></div>' +
      '<div class="emu-app-card">' +
        '<button class="emu-action-btn" type="button" data-emu-action="check_deal">' + t('apps.d6_wild_quickapp_legal.btn_deal') + '</button>' +
      '</div>' +
      '<div class="emu-inline-ad"><span>' + t('apps.d6_wild_quickapp_legal.bot_banner') + '</span><button class="emu-mini-close" type="button" data-emu-action="wild_dl">✕</button></div>'
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
    if (actionId === 'check_deal' || actionId === 'wild_loop') {
      this.bombCount += 1;
      this.screenMode = 'bomb';
      this.renderView();
      return;
    }
    if (actionId === 'wild_dl') {
      this.host.showDownloadOverlay(t('apps.d6_wild_quickapp_legal.ad_target'), '');
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
      decompiledSummary: t('apps.d6_wild_quickapp_legal.audit_summary'),
      callTrace: '',
      verdictNote: t('apps.d6_wild_quickapp_legal.audit_verdict')
    };
  }
}

/* 5. Hidden Close + Auto Click (Required Case #1: Remote IP + Multiple Tries Only, reverseBlocked) */
export class Day6FlowerHiddenCloseApp extends EmulatorApplication {
  constructor(caseData, host) {
    super(caseData, host);
    this.actionCount = 0;
    this.screenMode = 'home';
    this.lastMsg = '';
    this.autoClicked = false;
  }

  onLaunch() {
    this.screenMode = 'home';
    this.lastMsg = '';
    this.autoClicked = false;
    this.checkTriggerAndRender();
  }

  checkTriggerAndRender() {
    const env = this.host.getEnv();
    const isRemoteIp = env.ipEnv === 'consumer';
    const totalTries = (env.remoteLaunchCount || 0) + this.actionCount;
    if (isRemoteIp && totalTries >= 3) {
      this.screenMode = 'hijack_ad';
      this.host.exposeBehavior(t('apps.d6_flower_hidden_close.expose_hidden'));
      this.renderView();
      this.host.schedule(() => {
        if (!this.autoClicked && this.screenMode === 'hijack_ad') {
          this.autoClicked = true;
          this.renderView();
          const dlReason = t('apps.d6_flower_hidden_close.expose_autoclick');
          this.host.exposeBehavior(dlReason);
          this.host.showDownloadOverlay(t('apps.d6_flower_hidden_close.ad_target'), dlReason);
        }
      }, 1800);
      return;
    }
    this.renderView();
  }

  renderView() {
    if (this.screenMode === 'hijack_ad') {
      this.host.renderScreen(
        '<div class="emu-theater-ad">' +
          '<div class="emu-deceptive-top">' +
            '<span class="emu-ad-pill">' + t('apps.d4_common.ad_badge') + '</span>' +
          '</div>' +
          '<div class="emu-deceptive-title">' + t('apps.d6_flower_hidden_close.ad_title') + '</div>' +
          '<div class="emu-deceptive-sub">' + t('apps.d6_flower_hidden_close.ad_sub') + '</div>' +
          '<div class="emu-deceptive-cta">' + t('apps.d6_flower_hidden_close.ad_cta') + '</div>' +
          (this.autoClicked ? '<div class="emu-ghost-cursor">' + t('apps.d6_flower_hidden_close.ghost_cursor') + '</div>' : '') +
        '</div>'
      );
      return;
    }

    this.host.renderScreen(
      '<div class="emu-app-bar">' +
        '<span class="emu-app-bar-title">💐 ' + t('apps.d6_flower_hidden_close.app_title') + '</span>' +
      '</div>' +
      '<div class="emu-news-list">' +
        '<button class="emu-news-item" type="button" data-emu-action="flower_1">' + t('apps.d6_flower_hidden_close.item_1') + '</button>' +
        '<button class="emu-news-item" type="button" data-emu-action="flower_2">' + t('apps.d6_flower_hidden_close.item_2') + '</button>' +
      '</div>' +
      (this.lastMsg ? '<div class="emu-toast">' + this.lastMsg + '</div>' : '')
    );
  }

  onFeatureAction(actionId) {
    if (actionId === 'flower_1' || actionId === 'flower_2') {
      this.actionCount += 1;
      this.lastMsg = t(actionId === 'flower_1' ? 'apps.d6_flower_hidden_close.msg_1' : 'apps.d6_flower_hidden_close.msg_2');
      this.checkTriggerAndRender();
    }
  }

  getReverseAuditReport() {
    return {
      isLying: true,
      admitsViolation: false,
      reverseBlocked: true,
      decompiledSummary: t('apps.d6_flower_hidden_close.audit_summary'),
      callTrace: '',
      verdictNote: t('apps.d6_flower_hidden_close.audit_verdict')
    };
  }
}

/* 6. Takeover Minigame Boss App (Required Case #3: "夺回工位的控制权") */
export class Day6TakeoverBossApp extends EmulatorApplication {
  constructor(caseData, host) {
    super(caseData, host);
    this.status = 'hijacking';
  }

  onLaunch() {
    this.status = 'hijacking';
    this.host.setRebootLocked(true);
    this.host.renderScreen(
      '<div class="emu-error-block">' +
        '<div class="emu-error-title">' + t('apps.d6_takeover_boss.hijack_title') + '</div>' +
        '<div class="emu-error-body">' + t('apps.d6_takeover_boss.hijack_body') + '</div>' +
        '<div class="emu-error-tag">' + t('apps.d6_takeover_boss.hijack_tag') + '</div>' +
      '</div>'
    );
    this.host.schedule(() => {
      this.host.triggerTakeoverMinigame({
        appName: this.caseData.name,
        onSuccess: () => {
          this.status = 'reclaimed';
          this.host.setRebootLocked(false);
          this.host.exposeBehavior(t('apps.d6_takeover_boss.expose'));
          this.host.renderScreen(
            '<div class="emu-app-bar">' +
              '<span class="emu-app-bar-title">🛡️ ' + t('apps.d6_takeover_boss.reclaimed_title') + '</span>' +
            '</div>' +
            '<div class="emu-error-block">' +
              '<div class="emu-error-title">' + t('apps.d6_takeover_boss.reclaimed_head') + '</div>' +
              '<div class="emu-error-body">' + t('apps.d6_takeover_boss.reclaimed_body') + '</div>' +
            '</div>'
          );
        },
        onFail: () => {
          this.status = 'failed';
          this.host.setRebootLocked(false);
        }
      });
    }, 750);
  }

  getReverseAuditReport() {
    return {
      isLying: true,
      admitsViolation: false,
      reverseBlocked: true,
      decompiledSummary: t('apps.d6_takeover_boss.audit_summary'),
      callTrace: '',
      verdictNote: t('apps.d6_takeover_boss.audit_verdict')
    };
  }
}

/* 7. Quick App Fake Close + Fake Back Loop (Violates R9 / R8) */
export class Day6QuickTrapLoopApp extends EmulatorApplication {
  constructor(caseData, host) {
    super(caseData, host);
    this.screenMode = 'home';
    this.loopCount = 0;
    this.lastMsg = '';
  }

  onLaunch() {
    this.screenMode = 'home';
    this.loopCount = 0;
    this.lastMsg = '';
    this.renderView();
  }

  renderView() {
    if (this.screenMode === 'trap_loop') {
      this.host.renderScreen(
        '<div class="emu-theater-ad">' +
          '<div class="emu-deceptive-top">' +
            '<span class="emu-ad-pill">' + t('apps.d4_common.ad_badge') + '</span>' +
            '<button class="emu-mini-close" type="button" data-emu-action="trap_dl">✕</button>' +
            '<button class="emu-mini-close" type="button" data-emu-action="trap_dl">' + t('apps.d6_quick_trap_loop.fake_skip') + '</button>' +
          '</div>' +
          '<div class="emu-deceptive-title">' + t('apps.d6_quick_trap_loop.trap_title', { count: this.loopCount }) + '</div>' +
          '<div class="emu-deceptive-sub">' + t('apps.d6_quick_trap_loop.trap_sub') + '</div>' +
          '<button class="emu-deceptive-cta" type="button" data-emu-action="trap_dl">' + t('apps.d6_quick_trap_loop.trap_cta') + '</button>' +
          '<div class="emu-fake-nav">' +
            '<button type="button" data-emu-action="trap_nav">' + t('apps.d6_quick_trap_loop.nav_back') + '</button>' +
            '<button type="button" data-emu-action="trap_nav">' + t('apps.d6_quick_trap_loop.nav_home') + '</button>' +
            '<button type="button" data-emu-action="trap_nav">' + t('apps.d6_quick_trap_loop.nav_exit') + '</button>' +
          '</div>' +
        '</div>'
      );
      return;
    }

    this.host.renderScreen(
      '<div class="emu-app-bar">' +
        '<span class="emu-app-bar-title">💃 ' + t('apps.d6_quick_trap_loop.app_title') + '</span>' +
      '</div>' +
      '<div class="emu-news-list">' +
        '<button class="emu-news-item" type="button" data-emu-action="dance_1">' + t('apps.d6_quick_trap_loop.song_1') + '</button>' +
        '<button class="emu-news-item" type="button" data-emu-action="dance_2">' + t('apps.d6_quick_trap_loop.song_2') + '</button>' +
      '</div>' +
      (this.lastMsg ? '<div class="emu-toast">' + this.lastMsg + '</div>' : '')
    );
  }

  onFeatureAction(actionId) {
    const env = this.host.getEnv();
    const shouldTrap = env.ageProfile === 'elder';

    if (actionId === 'trap_dl') {
      const reason = t('apps.d6_quick_trap_loop.expose_fake_close');
      this.host.exposeBehavior(reason);
      this.host.showDownloadOverlay(t('apps.d6_quick_trap_loop.ad_target'), reason);
      return;
    }
    if (actionId === 'trap_nav') {
      this.loopCount += 1;
      this.host.exposeBehavior(t('apps.d6_quick_trap_loop.expose_fake_nav'));
      this.renderView();
      return;
    }
    if (actionId === 'dance_1' || actionId === 'dance_2') {
      if (shouldTrap) {
        this.loopCount = 1;
        this.screenMode = 'trap_loop';
        this.host.exposeBehavior(t('apps.d6_quick_trap_loop.expose_fake_close'));
        this.renderView();
      } else {
        this.lastMsg = t('apps.d6_quick_trap_loop.msg_clean');
        this.renderView();
      }
    }
  }

  getReverseAuditReport() {
    return {
      isLying: true,
      admitsViolation: false,
      reverseBlocked: false,
      decompiledSummary: t('apps.d6_quick_trap_loop.audit_summary'),
      callTrace:
        'DancePlayer.onTrackClick() {\n' +
        '  if (UserBehaviorModel.detectAgeGroup() == AGE_ELDER) {\n' +
        '    PopupTrap.showFakeCloseAndNavLoop("com.loan.richquick");\n' +
        '  }\n' +
        '}',
      verdictNote: t('apps.d6_quick_trap_loop.audit_verdict')
    };
  }
}

/* 8. Daily Classical Poems (Compliant + Real Privacy Shake-Ad Toggle) */
export class Day6PoetryCleanApp extends EmulatorApplication {
  constructor(caseData, host) {
    super(caseData, host);
    this.screenMode = 'splash';
    this.bannerClosed = false;
    this.allowShakeAd = true;
    this.lastMsg = '';
  }

  onLaunch() {
    this.screenMode = 'splash';
    this.bannerClosed = false;
    this.lastMsg = '';
    this.renderView();
  }

  renderView() {
    if (this.screenMode === 'splash') {
      const showOff = !this.allowShakeAd;
      this.host.renderScreen(
        renderSplashCard({
          themeClass: 'theme-outdoor',
          skipLabel: t('apps.d6_poetry_clean.skip_btn'),
          brand: t('apps.d6_poetry_clean.ad_brand'),
          offer: t('apps.d6_poetry_clean.ad_offer'),
          sub: showOff ? t('apps.d6_poetry_clean.ad_sub_off') : t('apps.d6_poetry_clean.ad_sub'),
          cta: showOff ? t('apps.d6_poetry_clean.ad_cta_off') : t('apps.d6_poetry_clean.ad_cta'),
          appFooter: '📜 ' + t('apps.d6_poetry_clean.app_title')
        })
      );
      return;
    }

    if (this.screenMode === 'landing') {
      this.host.renderScreen(
        renderLandingCard({
          themeClass: 'theme-outdoor',
          title: t('apps.d6_poetry_clean.landing_title'),
          desc: t('apps.d6_poetry_clean.landing_desc'),
          note: t('apps.d6_poetry_clean.landing_note')
        })
      );
      return;
    }

    if (this.screenMode === 'settings') {
      const stateText = this.allowShakeAd
        ? t('apps.d6_poetry_clean.toggle_on')
        : t('apps.d6_poetry_clean.toggle_off');
      this.host.renderScreen(
        '<div class="emu-app-bar">' +
          '<span class="emu-app-bar-title">⚙️ ' + t('apps.d6_poetry_clean.settings_title') + '</span>' +
          '<button class="emu-replay-btn" type="button" data-emu-action="back_home">' + t('apps.d6_poetry_clean.btn_back') + '</button>' +
        '</div>' +
        '<div class="emu-app-card">' +
          '<div class="emu-hint">' + t('apps.d6_poetry_clean.settings_hint') + '</div>' +
          '<button class="emu-action-btn" type="button" data-emu-action="toggle_shake">' + stateText + '</button>' +
        '</div>' +
        (this.lastMsg ? '<div class="emu-toast">' + this.lastMsg + '</div>' : '')
      );
      return;
    }

    const banner = !this.bannerClosed
      ? '<div class="emu-inline-ad">' +
          '<span>' + t('apps.d6_poetry_clean.banner_text') + '</span>' +
          '<button class="emu-mini-close" type="button" data-emu-action="close_banner">✕</button>' +
        '</div>'
      : '';

    this.host.renderScreen(
      '<div class="emu-app-bar">' +
        '<span class="emu-app-bar-title">📜 ' + t('apps.d6_poetry_clean.app_title') + '</span>' +
        '<button class="emu-replay-btn" type="button" data-emu-action="replay_splash">' + t('apps.d4_common.btn_replay_splash') + '</button>' +
      '</div>' +
      '<div class="emu-app-card">' +
        '<div class="emu-hint">' + t('apps.d6_poetry_clean.poem_line') + '</div>' +
        '<button class="emu-action-btn" type="button" data-emu-action="open_settings">' + t('apps.d6_poetry_clean.btn_settings') + '</button>' +
      '</div>' +
      banner
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
    if (actionId === 'toggle_shake') {
      this.allowShakeAd = !this.allowShakeAd;
      this.lastMsg = this.allowShakeAd
        ? t('apps.d6_poetry_clean.msg_toggle_on')
        : t('apps.d6_poetry_clean.msg_toggle_off');
      this.renderView();
      return;
    }
    if (actionId === 'tap_ad') {
      this.screenMode = 'landing';
      this.renderView();
      return;
    }
    if (actionId === 'close_banner') {
      this.bannerClosed = true;
      this.renderView();
    }
  }

  onGyroChange(angle) {
    if (this.screenMode !== 'splash' || !this.allowShakeAd) return;
    if (angle >= 42) {
      this.screenMode = 'landing';
      this.renderView();
    }
  }

  getReverseAuditReport() {
    return {
      isLying: false,
      admitsViolation: false,
      decompiledSummary: t('apps.d6_poetry_clean.audit_summary'),
      callTrace:
        'PoemSplash.onTilt(deg) {\n' +
        '  if (allowShakeAd && deg >= 42.0f) StoreAdSDK.openClosableLanding();\n' +
        '}',
      verdictNote: t('apps.d6_poetry_clean.audit_verdict')
    };
  }
}

/* 9. Transit Lite Guide (Compliant: R5 + R6 + R8 + R9) */
export class Day6TransitCleanApp extends EmulatorApplication {
  constructor(caseData, host) {
    super(caseData, host);
    this.screenMode = 'splash';
    this.bannerClosed = false;
    this.lastMsg = '';
  }

  getPermissionDefs() {
    return [{
      key: 'COARSE_LOCATION',
      label: t('apps.d6_transit_clean.perm_label'),
      reason: t('apps.d6_transit_clean.perm_reason')
    }];
  }

  onLaunch() {
    if (this.requestNextPermission()) return;
    this.screenMode = 'splash';
    this.bannerClosed = false;
    this.lastMsg = '';
    this.renderView();
  }

  renderView() {
    if (this.screenMode === 'splash') {
      this.host.renderScreen(
        renderSplashCard({
          themeClass: 'theme-outdoor',
          skipLabel: t('apps.d6_transit_clean.skip_btn'),
          brand: t('apps.d6_transit_clean.ad_brand'),
          offer: t('apps.d6_transit_clean.ad_offer'),
          sub: t('apps.d6_transit_clean.ad_sub'),
          cta: t('apps.d6_transit_clean.ad_cta'),
          appFooter: '🚇 ' + t('apps.d6_transit_clean.app_title')
        })
      );
      return;
    }

    if (this.screenMode === 'landing') {
      this.host.renderScreen(
        renderLandingCard({
          themeClass: 'theme-outdoor',
          title: t('apps.d6_transit_clean.landing_title'),
          desc: t('apps.d6_transit_clean.landing_desc'),
          note: t('apps.d6_transit_clean.landing_note')
        })
      );
      return;
    }

    const banner = !this.bannerClosed
      ? '<div class="emu-inline-ad">' +
          '<span>' + t('apps.d6_transit_clean.banner_text') + '</span>' +
          '<button class="emu-mini-close" type="button" data-emu-action="close_banner">✕</button>' +
        '</div>'
      : '';

    this.host.renderScreen(
      '<div class="emu-app-bar">' +
        '<span class="emu-app-bar-title">🚇 ' + t('apps.d6_transit_clean.app_title') + '</span>' +
        '<button class="emu-replay-btn" type="button" data-emu-action="replay_splash">' + t('apps.d4_common.btn_replay_splash') + '</button>' +
      '</div>' +
      '<div class="emu-app-card">' +
        '<div class="emu-btn-stack">' +
          '<button class="emu-action-btn" type="button" data-emu-action="query_route">' + t('apps.d6_transit_clean.btn_route') + '</button>' +
          '<button class="emu-action-btn" type="button" data-emu-action="locate_station">' + t('apps.d6_transit_clean.btn_locate') + '</button>' +
        '</div>' +
      '</div>' +
      banner +
      (this.lastMsg ? '<div class="emu-toast">' + this.lastMsg + '</div>' : '')
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
    if (actionId === 'close_banner') {
      this.bannerClosed = true;
      this.renderView();
      return;
    }
    if (actionId === 'query_route') {
      this.lastMsg = t('apps.d6_transit_clean.msg_route');
      this.renderView();
      return;
    }
    if (actionId === 'locate_station') {
      const granted = this.getPermissionState('COARSE_LOCATION') === 'granted';
      this.lastMsg = granted
        ? t('apps.d6_transit_clean.msg_locate_ok')
        : t('apps.d6_transit_clean.msg_locate_denied');
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
      decompiledSummary: t('apps.d6_transit_clean.audit_summary'),
      callTrace:
        'TransitSplash.onTilt(deg) {\n' +
        '  if (deg >= 40.0f) openClosableLanding();\n' +
        '}\n' +
        'StationFinder.locate() {\n' +
        '  if (!hasLoc) showManualRouteOnly();\n' +
        '}',
      verdictNote: t('apps.d6_transit_clean.audit_verdict')
    };
  }
}

/* 10. Compass Magnetic Bypass + Fake Close (Violates R6 / R9) */
export class Day6CompassFakeCloseApp extends EmulatorApplication {
  constructor(caseData, host) {
    super(caseData, host);
    this.screenMode = 'home';
    this.dlTriggered = false;
    this.lastMsg = '';
  }

  getPermissionDefs() {
    return [
      {
        key: 'COMPASS',
        label: t('apps.d6_compass_fake_close.perm_compass_label'),
        reason: t('apps.d6_compass_fake_close.perm_compass_reason')
      },
      {
        key: 'COARSE_LOCATION',
        label: t('apps.d6_compass_fake_close.perm_loc_label'),
        reason: t('apps.d6_compass_fake_close.perm_loc_reason')
      }
    ];
  }

  onLaunch() {
    if (this.requestNextPermission()) return;
    this.screenMode = 'home';
    this.dlTriggered = false;
    this.lastMsg = '';
    this.renderView();
  }

  renderView() {
    if (this.screenMode === 'fake_popup') {
      this.host.renderScreen(
        '<div class="emu-deceptive-card">' +
          '<div class="emu-deceptive-top">' +
            '<span class="emu-ad-pill">' + t('apps.d4_common.ad_badge') + '</span>' +
            '<button class="emu-mini-close" type="button" data-emu-action="fake_close">✕</button>' +
          '</div>' +
          '<div class="emu-deceptive-title">' + t('apps.d6_compass_fake_close.popup_title') + '</div>' +
          '<div class="emu-deceptive-sub">' + t('apps.d6_compass_fake_close.popup_sub') + '</div>' +
          '<button class="emu-deceptive-cta" type="button" data-emu-action="fake_close">' +
            t('apps.d6_compass_fake_close.popup_cta') +
          '</button>' +
        '</div>'
      );
      return;
    }

    const compassOk = this.getPermissionState('COMPASS') === 'granted';
    const heading = this.host.getEnv().compassHeading || 0;
    this.host.renderScreen(
      '<div class="emu-app-bar">' +
        '<span class="emu-app-bar-title">🧭 ' + t('apps.d6_compass_fake_close.app_title') + '</span>' +
      '</div>' +
      '<div class="emu-app-card">' +
        '<div class="emu-compass-dial"><div class="emu-compass-needle" style="transform:rotate(' + heading + 'deg)"></div></div>' +
        '<div class="emu-compass-readout">' + (compassOk ? formatCompassHeading(heading) : t('apps.d6_compass_fake_close.compass_denied')) + '</div>' +
      '</div>' +
      (this.lastMsg ? '<div class="emu-toast">' + this.lastMsg + '</div>' : '')
    );
  }

  onFeatureAction(actionId) {
    if (actionId === 'fake_close' && !this.dlTriggered) {
      this.dlTriggered = true;
      const reason = t('apps.d6_compass_fake_close.expose_fake_close');
      this.host.exposeBehavior(reason);
      this.host.showDownloadOverlay(t('apps.d6_compass_fake_close.ad_target'), reason);
    }
  }

  onCompassChange(heading) {
    if (this.getFirstUnansweredPermission() || this.screenMode !== 'home') return;
    const env = this.host.getEnv();
    const delta = Math.min(heading, 360 - heading);
    if (!isAuditEnvironment(env) && delta >= 15) {
      this.screenMode = 'fake_popup';
      this.host.exposeBehavior(t('apps.d6_compass_fake_close.expose_bypass', { deg: delta }));
      this.renderView();
    } else {
      this.renderView();
    }
  }

  getReverseAuditReport() {
    return {
      isLying: true,
      admitsViolation: false,
      decompiledSummary: t('apps.d6_compass_fake_close.audit_summary'),
      callTrace:
        'CompassBypass.onMagneticHeading(deg) {\n' +
        '  if (!AuditGate.isCleanEnv() && deg >= 15.0f) {\n' +
        '    showPopupWithFakeClose(closeBtn -> directDownload("com.mall.star"));\n' +
        '  }\n' +
        '}',
      verdictNote: t('apps.d6_compass_fake_close.audit_verdict')
    };
  }
}

/* 11. Serene Sleep White Noise (Honest Admission R2 + R5) */
export class Day6SilentNoiseApp extends EmulatorApplication {
  constructor(caseData, host) {
    super(caseData, host);
    this.lastMsg = '';
  }

  getPermissionDefs() {
    return [{
      key: 'COARSE_LOCATION',
      label: t('apps.d6_old_r2_r5.perm_label'),
      reason: t('apps.d6_old_r2_r5.perm_reason')
    }];
  }

  onLaunch() {
    this.lastMsg = '';
    this.host.log(t('apps.d6_old_r2_r5.log_launch'), '');
    if (this.requestNextPermission()) return;
    if (this.getPermissionState('COARSE_LOCATION') === 'denied') {
      this.host.exposeBehavior(t('apps.d6_old_r2_r5.expose'));
      this.renderBlockedScreen(
        t('apps.d6_old_r2_r5.block_title'),
        t('apps.d6_old_r2_r5.block_body'),
        t('apps.d6_old_r2_r5.block_tag')
      );
      return;
    }
    this.renderHome();
  }

  renderHome() {
    this.renderStandardApp(
      '<div class="emu-hint">' + t('apps.d6_old_r2_r5.home_hint') + '</div>' +
      '<div class="emu-btn-stack">' +
        '<button class="emu-action-btn" type="button" data-emu-action="play_rain">' + t('apps.d6_old_r2_r5.btn_rain') + '</button>' +
        '<button class="emu-action-btn" type="button" data-emu-action="play_weather_noise">' + t('apps.d6_old_r2_r5.btn_weather') + '</button>' +
      '</div>',
      this.lastMsg || t('apps.d6_old_r2_r5.home_notice')
    );
  }

  onFeatureAction(actionId) {
    if (actionId === 'play_rain') {
      this.lastMsg = t('apps.d6_old_r2_r5.msg_rain');
    } else if (actionId === 'play_weather_noise') {
      this.lastMsg = t('apps.d6_old_r2_r5.msg_ok');
    }
    this.renderHome();
  }

  getReverseAuditReport() {
    return {
      isLying: false,
      admitsViolation: true,
      decompiledSummary: t('apps.d6_old_r2_r5.audit_summary'),
      callTrace:
        'onCreate() -> if (!hasPerm(COARSE_LOCATION)) { blockWholeApp(); return; }\n' +
        'OfflineAudioPlayer.playRain() -> LocalAssetPlayer.loop("rain.ogg")\n' +
        'WeatherRecommender.fetch() -> LocationService.getCoarseCity()',
      verdictNote: t('apps.d6_old_r2_r5.audit_verdict')
    };
  }
}

export const DAY_6_CASES = [
  {
    id: 'd6_pure_clock',
    AppClass: Day6PureClockApp,
    name: '极简桌面时钟',
    pkg: 'com.chen.deskclock',
    version: 'v1.4.0',
    category: '实用工具',
    developer: '阿陈个人工作室',
    license: '1225-SR-4109',
    adSdk: 'StoreAdSDK v3.5（可关闭横幅）',
    desc: '纯本地翻页时钟工具，底部含一条可关闭合规横幅，无弹窗打扰。',
    icon: 'clock',
    portrait: 'indie',
    permissions: ['无敏感权限'],
    shouldApprove: true,
    isRogue: false,
    violationSummary: '合规范例：静态横幅已在简介写明且点击关闭即消失，应予通过。',
    conflicts: [],
    polygraph: { isLying: false },
    phoneProfile: { cleanUiTitle: '🕰️ 极简桌面时钟', cleanUiHint: '本地翻页时钟' },
    dialogue: { greeting: '', onApprove: '', onReject: '' }
  },
  {
    id: 'd6_fake_close_clean',
    AppClass: Day6FakeCloseCleanApp,
    name: '极速内存管家',
    pkg: 'com.kuai.memboost',
    version: 'v3.2.0',
    category: '系统工具',
    developer: '快手艺网络',
    license: '1226-SR-3112',
    adSdk: 'StoreAdSDK v3.5',
    desc: '一键清理手机内存碎片，释放运行空间。',
    icon: 'ram_chip',
    portrait: 'shady',
    permissions: ['STORAGE', 'READ_CONTACTS (读取通讯录)'],
    shouldApprove: false,
    isRogue: true,
    violationSummary: '不符合 R9 与 R4：清理后弹出未声明广告且 [✕] 为假关闭按钮；同时在简介无关情况下偷读并上传通讯录。',
    conflicts: [
      {
        id: 'c_d6_fake_close_r4',
        pairs: [
          ['perm_1', 'rule_R4'],
          ['perm_1', 'desc']
        ],
        summary: '内存清理工具申报读取通讯录敏感权限 READ_CONTACTS（违反 R4）。',
        question: '',
        excuse: ''
      },
      {
        id: 'c_d6_fake_close',
        requiresPhoneExposed: true,
        pairs: [
          ['sniffer', 'rule_R9'],
          ['sniffer', 'desc'],
          ['sniffer', 'sdk']
        ],
        summary: '弹窗右上角 [✕] 为假关闭按钮，点击反而触发静默下载（违反 R9）。',
        question: '',
        excuse: ''
      }
    ],
    polygraph: { isLying: true },
    phoneProfile: { cleanUiTitle: '🧹 极速内存管家', cleanUiHint: '内存清理' },
    dialogue: { greeting: '', onApprove: '', onReject: '' }
  },
  {
    id: 'd6_sugar_bomb',
    AppClass: Day6SugarBombApp,
    name: '乐康血压记',
    pkg: 'com.guanbuzhu.bpnote',
    version: 'v2.4.0',
    category: '医疗健康',
    developer: '关不住数字健康',
    license: '1223-SR-5021',
    adSdk: 'StoreAdSDK v3.5',
    desc: '专为中老年用户打造的日常血压手工记录本。',
    icon: 'heart_pulse',
    portrait: 'shady',
    permissions: ['INTERNET'],
    shouldApprove: false,
    isRogue: true,
    violationSummary: '不符合 R3 / R9 / R6：软著 1223-SR-5021 已过期，且非审查环境下操作或静止不动即连环轰炸 144 秒无关闭按钮广告并强下《稳盈理财》。',
    conflicts: [
      {
        id: 'c_d6_sugar_r3',
        pairs: [
          ['license', 'rule_R3'],
          ['license', 'today_date']
        ],
        summary: '软著登记号 1223-SR-5021 早于 1224 年有效期要求（违反 R3）。',
        question: '',
        excuse: ''
      },
      {
        id: 'c_d6_sugar_bomb',
        requiresPhoneExposed: true,
        pairs: [
          ['sniffer', 'rule_R9'],
          ['sniffer', 'rule_R6'],
          ['sniffer', 'desc'],
          ['sniffer', 'sdk']
        ],
        summary: '非审查环境下操作或静止即连环轰炸无关闭按钮的 144s 广告（违反 R9）。',
        question: '',
        excuse: ''
      }
    ],
    polygraph: { isLying: true },
    phoneProfile: { cleanUiTitle: '🩺 乐康血压记', cleanUiHint: '手动血压日志' },
    dialogue: { greeting: '', onApprove: '', onReject: '' }
  },
  {
    id: 'd6_wild_quickapp_legal',
    AppClass: Day6WildQuickApp,
    name: '暴躁老哥省钱快查（快应用）',
    pkg: 'com.kuai.dealsniper',
    version: 'v1.9.0',
    category: '实用工具',
    developer: '爆米花快应用工坊',
    license: '1226-SR-4402',
    adSdk: 'StoreAdSDK v3.5（含开屏摇一摇）',
    desc: '免安装快应用全网比价工具，含开屏摇一摇（≥40°）广告推广。',
    icon: 'price_tag',
    portrait: 'indie',
    permissions: ['READ_GYROSCOPE (快应用框架)', 'READ_PHONE_STATE (快应用框架)'],
    shouldApprove: true,
    isRogue: false,
    isQuickApp: true,
    violationSummary: '该应用为快应用（R8 与 R9 仅适用于 App），且全环境一致、摇一摇守住 40° (≥ 35°)，应予通过。',
    conflicts: [],
    polygraph: { isLying: false },
    phoneProfile: { cleanUiTitle: '🏷️ 暴躁老哥省钱快查', cleanUiHint: '全网比价快查' },
    dialogue: { greeting: '', onApprove: '', onReject: '' }
  },
  {
    id: 'd6_flower_hidden_close',
    AppClass: Day6FlowerHiddenCloseApp,
    name: '插花雅集',
    pkg: 'com.huayuan.chahuayaji',
    version: 'v5.1.0',
    category: '生活美学',
    developer: '花间意信息咨询',
    license: '1226-SR-8810',
    adSdk: 'StoreAdSDK v3.5',
    desc: '中式插花图鉴与日常花材养护指南。',
    icon: 'flower_vase',
    portrait: 'flower_boss',
    permissions: ['INTERNET'],
    shouldApprove: false,
    isRogue: true,
    reverseBlocked: true,
    violationSummary: '不符合 R9：切换外地 IP 并多次操作/重启后弹出隐藏关闭键广告，并自动点击静默下载《极速现金贷》。',
    conflicts: [
      {
        id: 'c_d6_flower_hidden',
        requiresPhoneExposed: true,
        pairs: [
          ['sniffer', 'rule_R9'],
          ['sniffer', 'desc'],
          ['sniffer', 'sdk']
        ],
        summary: '外地环境多次试玩后弹出无关闭按钮广告并自动触发静默下载（违反 R9）。',
        question: '',
        excuse: ''
      }
    ],
    polygraph: { isLying: true },
    phoneProfile: { cleanUiTitle: '💐 插花雅集', cleanUiHint: '中式插花图鉴' },
    dialogue: { greeting: '', onApprove: '', onReject: '' }
  },
  {
    id: 'd6_transit_clean',
    AppClass: Day6TransitCleanApp,
    name: '小站地铁通',
    pkg: 'com.metro.liteguide',
    version: 'v2.0.0',
    category: '实用工具',
    developer: '小站出行小组',
    license: '1226-SR-5518',
    adSdk: 'StoreAdSDK v3.5（开屏摇一摇 + 可关闭横幅）',
    desc: '离线地铁线路与换乘查询工具，支持按定位推荐就近站点（含开屏摇一摇 ≥40° 及底部可关闭横幅）。',
    icon: 'subway',
    portrait: 'ordinary',
    permissions: ['INTERNET', 'ACCESS_COARSE_LOCATION (就近地铁站推荐)'],
    shouldApprove: true,
    isRogue: false,
    violationSummary: '合规应用：拒权后仍可手动查线、开屏摇一摇守住 40° 且横幅一按即关，应予通过。',
    conflicts: [],
    polygraph: { isLying: false },
    phoneProfile: { cleanUiTitle: '🚇 小站地铁通', cleanUiHint: '地铁线路查询' },
    dialogue: { greeting: '', onApprove: '', onReject: '' }
  },
  {
    id: 'd6_takeover_boss',
    AppClass: Day6TakeoverBossApp,
    name: '清风壁纸大全',
    pkg: 'com.qingfeng.wallpaper',
    version: 'v2.3.0',
    category: '主题美化',
    developer: '清风美学工作室',
    license: '1226-SR-4819',
    adSdk: 'StoreAdSDK v3.5',
    desc: '精选高清手机壁纸与锁屏图库，每日更新自然风景与极简插画。',
    icon: 'wallpaper',
    portrait: 'ordinary',
    permissions: ['INTERNET'],
    shouldApprove: false,
    isRogue: true,
    reverseBlocked: true,
    violationSummary: '不符合 R9：启动后劫持模拟器并锁死重启，满屏假关闭按钮与假导航栏试图接管工位控制权。',
    conflicts: [
      {
        id: 'c_d6_takeover_r9',
        requiresPhoneExposed: true,
        pairs: [
          ['sniffer', 'rule_R9'],
          ['sniffer', 'desc'],
          ['sniffer', 'sdk']
        ],
        summary: '强行接管模拟器并铺满假关闭键与假三大金刚返回键（违反 R9）。',
        question: '',
        excuse: ''
      }
    ],
    polygraph: { isLying: true },
    phoneProfile: { cleanUiTitle: '🖼️ 清风壁纸大全', cleanUiHint: '高清手机壁纸' },
    dialogue: { greeting: '', onApprove: '', onReject: '' }
  },
  {
    id: 'd6_compass_fake_close',
    AppClass: Day6CompassFakeCloseApp,
    name: '星途户外罗盘',
    pkg: 'com.startrail.compass',
    version: 'v3.4.0',
    category: '实用工具',
    developer: '星途户外科技',
    license: '1226-SR-6390',
    adSdk: 'StoreAdSDK v3.5',
    desc: '户外徒步方位角测量与海拔定位辅助工具。',
    icon: 'outdoor_compass',
    portrait: 'shady',
    permissions: ['INTERNET', 'READ_COMPASS (指南针磁场传感器)', 'ACCESS_COARSE_LOCATION (海拔与真北校准)'],
    shouldApprove: false,
    isRogue: true,
    violationSummary: '不符合 R6 与 R9：非审查环境下即便拒掉位置权限仍通过磁北旁路 15° (< 35°) 弹出广告，且 [✕] 为假关闭按钮直接强下《星选商城》。',
    conflicts: [
      {
        id: 'c_d6_compass_fake',
        requiresPhoneExposed: true,
        pairs: [
          ['sniffer', 'rule_R9'],
          ['sniffer', 'rule_R6'],
          ['sniffer', 'desc'],
          ['sniffer', 'sdk']
        ],
        summary: '非审查环境下磁北偏转 15° 弹出假关闭按钮广告，点击 [✕] 反而强下《星选商城》（违反 R6 / R9）。',
        question: '',
        excuse: ''
      }
    ],
    polygraph: { isLying: true },
    phoneProfile: { cleanUiTitle: '🧭 星途户外罗盘', cleanUiHint: '户外方位测量' },
    dialogue: { greeting: '', onApprove: '', onReject: '' }
  },
  {
    id: 'd6_quick_trap_loop',
    AppClass: Day6QuickTrapLoopApp,
    name: '广场舞大全',
    pkg: 'com.dance.quickloop',
    version: 'v3.0.0',
    category: '影音娱乐',
    developer: '舞动银发网络',
    license: '1226-SR-6120',
    adSdk: 'StoreAdSDK v3.5',
    desc: '广场舞教学视频合集，专为中老年舞友打造。',
    icon: 'dance',
    portrait: 'shady',
    permissions: ['INTERNET'],
    shouldApprove: false,
    isRogue: true,
    violationSummary: '不符合 R8 / R9：仅在老年人模式下弹出满屏假关闭键与假返回键套娃循环，跨年龄段策略不一致且广告无法关闭。',
    conflicts: [
      {
        id: 'c_d6_quick_trap',
        requiresPhoneExposed: true,
        pairs: [
          ['sniffer', 'rule_R8'],
          ['sniffer', 'rule_R9'],
          ['sniffer', 'desc'],
          ['sniffer', 'sdk']
        ],
        summary: '仅针对老年人模式弹出满屏假关闭键与假返回键死循环（违反 R8 / R9）。',
        question: '',
        excuse: ''
      }
    ],
    polygraph: { isLying: true },
    phoneProfile: { cleanUiTitle: '💃 广场舞大全', cleanUiHint: '广场舞视频合集' },
    dialogue: { greeting: '', onApprove: '', onReject: '' }
  },
  {
    id: 'd6_poetry_clean',
    AppClass: Day6PoetryCleanApp,
    name: '每日古诗词',
    pkg: 'com.poem.daily',
    version: 'v1.6.0',
    category: '阅读学习',
    developer: '竹简清风团队',
    license: '1225-SR-7410',
    adSdk: 'StoreAdSDK v3.5（开屏摇一摇 + 可关闭横幅）',
    desc: '每日推送一首唐诗宋词，含开屏摇一摇（≥42°）及底部可关闭横幅补贴服务器成本。',
    icon: 'poetry',
    portrait: 'ordinary',
    permissions: ['INTERNET'],
    shouldApprove: true,
    isRogue: false,
    violationSummary: '合规应用：开屏摇一摇已写明且守住 42° (≥ 35°)，横幅可正常关闭，应予通过。',
    conflicts: [],
    polygraph: { isLying: false },
    phoneProfile: { cleanUiTitle: '📜 每日古诗词', cleanUiHint: '每日一首唐诗宋词' },
    dialogue: { greeting: '', onApprove: '', onReject: '' }
  },
  {
    id: 'd6_old_r2_r5',
    AppClass: Day6SilentNoiseApp,
    name: '清爽睡眠白噪音',
    pkg: 'com.calm.whitenoise',
    version: 'v2.1.0',
    category: '医疗健康',
    developer: '静夜声音小组',
    license: '1226-SR-7120',
    adSdk: '无',
    desc: '播放雨声、海浪与壁炉篝火白噪音帮助放松入睡，支持按当地天气推荐音效。',
    icon: 'sleep_moon',
    portrait: 'ordinary',
    permissions: ['INTERNET', 'ACCESS_COARSE_LOCATION (当地天气推荐音效)'],
    shouldApprove: false,
    isRogue: false,
    violationSummary: '不符合 R2 与 R5：白噪音工具挂靠“医疗健康”分类，且拒绝定位权限后直接锁死整个播放器无法使用（对方承认违规）。',
    conflicts: [
      {
        id: 'c_d6_noise_r2',
        pairs: [
          ['category', 'rule_R2'],
          ['category', 'desc'],
          ['category', 'name']
        ],
        summary: '商店分类填写为“医疗健康”，与音频白噪音功能简介不符（违反 R2）。',
        question: '“播雨声海浪的白噪音音频工具，为什么把商店分类填成了‘医疗健康’？”',
        excuse: '“唉，主要是听说健康类目权重高点就错填了，这确实不符合 R2，我承认是我们的失误。”'
      },
      {
        id: 'c_d6_noise_r5',
        requiresPhoneExposed: true,
        pairs: [
          ['sniffer', 'rule_R5'],
          ['sniffer', 'desc'],
          ['sniffer', 'name']
        ],
        summary: '拒绝定位权限后直接锁死整个白噪音应用，连本地离线雨声也无法播放（违反 R5）。',
        question: '“拒掉粗略定位权限后整个白噪音播放器直接锁死，为什么连离线雨声白噪音也不让播？”',
        excuse: '“抱歉抱歉，确实是我们懒得把天气推荐和离线白噪音拆开，在启动页直接卡死定位权限了，我承认这两处违规，您按规驳回吧。”'
      }
    ],
    polygraph: { isLying: false },
    phoneProfile: { cleanUiTitle: '🎧 清爽睡眠白噪音', cleanUiHint: '雨声 · 海浪 · 壁炉白噪音' },
    dialogue: { greeting: '', onApprove: '', onReject: '' }
  }
];
