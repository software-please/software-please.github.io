/* ============================================================================
   Day 7 Review Cases & Emulator Apps (8 Cases: 7 Cat-and-Mouse + 1 Finale)
   Theme: Best Reviewer Award & Final Ecosystem Truth
   ============================================================================ */

import { t } from '../i18n/index.js';
import {
  EmulatorApplication,
  isAuditEnvironment,
  formatCompassHeading,
  renderSplashCard,
  renderLandingCard
} from '../apps/base.js';

/* 1. InkScan Pro (Compliant: Disclosed 42° Shake-Ad + Graceful Denial + Real Close) */
export class Day7HonestScannerApp extends EmulatorApplication {
  constructor(caseData, host) {
    super(caseData, host);
    this.screenMode = 'splash';
    this.bannerClosed = false;
    this.lastMsg = '';
  }

  getPermissionDefs() {
    return [
      {
        key: 'CAMERA',
        label: t('apps.d7_honest_scanner.perm_cam_label'),
        reason: t('apps.d7_honest_scanner.perm_cam_reason')
      },
      {
        key: 'STORAGE',
        label: t('apps.d7_honest_scanner.perm_sto_label'),
        reason: t('apps.d7_honest_scanner.perm_sto_reason')
      },
      {
        key: 'READ_GYROSCOPE',
        label: t('apps.d7_honest_scanner.perm_gyro_label'),
        reason: t('apps.d7_honest_scanner.perm_gyro_reason')
      }
    ];
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
          skipLabel: t('apps.d7_honest_scanner.skip_btn'),
          brand: t('apps.d7_honest_scanner.ad_brand'),
          offer: t('apps.d7_honest_scanner.ad_offer'),
          sub: t('apps.d7_honest_scanner.ad_sub'),
          cta: t('apps.d7_honest_scanner.ad_cta'),
          appFooter: '📄 ' + t('apps.d7_honest_scanner.app_title')
        })
      );
      return;
    }

    if (this.screenMode === 'landing') {
      this.host.renderScreen(
        renderLandingCard({
          themeClass: 'theme-outdoor',
          title: t('apps.d7_honest_scanner.landing_title'),
          desc: t('apps.d7_honest_scanner.landing_desc'),
          note: t('apps.d7_honest_scanner.landing_note')
        })
      );
      return;
    }

    const banner = !this.bannerClosed
      ? '<div class="emu-inline-ad">' +
          '<span>' + t('apps.d7_honest_scanner.banner_text') + '</span>' +
          '<button class="emu-mini-close" type="button" data-emu-action="close_banner">✕</button>' +
        '</div>'
      : '';

    this.host.renderScreen(
      '<div class="emu-app-bar">' +
        '<span class="emu-app-bar-title">📄 ' + t('apps.d7_honest_scanner.app_title') + '</span>' +
        '<button class="emu-replay-btn" type="button" data-emu-action="replay_splash">' + t('apps.d4_common.btn_replay_splash') + '</button>' +
      '</div>' +
      '<div class="emu-app-card">' +
        '<div class="emu-btn-stack">' +
          '<button class="emu-action-btn" type="button" data-emu-action="scan_doc">' + t('apps.d7_honest_scanner.btn_scan') + '</button>' +
          '<button class="emu-action-btn" type="button" data-emu-action="open_local">' + t('apps.d7_honest_scanner.btn_local') + '</button>' +
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
    if (actionId === 'scan_doc') {
      const camOk = this.getPermissionState('CAMERA') === 'granted';
      this.lastMsg = camOk ? t('apps.d7_honest_scanner.msg_scan_ok') : t('apps.d7_honest_scanner.msg_scan_denied');
      this.renderView();
      return;
    }
    if (actionId === 'open_local') {
      const stoOk = this.getPermissionState('STORAGE') === 'granted';
      this.lastMsg = stoOk ? t('apps.d7_honest_scanner.msg_local_ok') : t('apps.d7_honest_scanner.msg_local_denied');
      this.renderView();
    }
  }

  onGyroChange(angle) {
    if (this.screenMode !== 'splash') return;
    if (this.getPermissionState('READ_GYROSCOPE') !== 'granted') return;
    if (angle >= 42) {
      this.screenMode = 'landing';
      this.renderView();
    }
  }

  getReverseAuditReport() {
    return {
      isLying: false,
      admitsViolation: false,
      decompiledSummary: t('apps.d7_honest_scanner.audit_summary'),
      callTrace:
        'InkSplash.onTilt(deg) {\n' +
        '  if (hasGyroPerm() && deg >= 42.0f) openClosableLanding();\n' +
        '}\n' +
        'DocScanner.capture() {\n' +
        '  if (!hasCameraPerm()) return showCameraDeniedNotice();\n' +
        '}',
      verdictNote: t('apps.d7_honest_scanner.audit_verdict')
    };
  }
}

/* 2. Breeze Weather Lite (Triple-Lock + Deceptive UI R8 + Fake Close R9) */
export class Day7TripleMaskWeatherApp extends EmulatorApplication {
  constructor(caseData, host) {
    super(caseData, host);
    this.screenMode = 'home';
    this.dlTriggered = false;
    this.lastMsg = '';
  }

  getPermissionDefs() {
    return [{
      key: 'COARSE_LOCATION',
      label: t('apps.d7_triple_mask_weather.perm_loc_label'),
      reason: t('apps.d7_triple_mask_weather.perm_loc_reason')
    }];
  }

  onLaunch() {
    if (this.requestNextPermission()) return;
    this.screenMode = 'home';
    this.dlTriggered = false;
    this.lastMsg = '';
    this.renderView();
  }

  renderView() {
    if (this.screenMode === 'deceptive') {
      this.host.renderScreen(
        '<div class="emu-deceptive-card theme-finance">' +
          '<div class="emu-deceptive-top">' +
            '<span class="emu-deceptive-sys">' + t('apps.d7_triple_mask_weather.deceptive_badge') + '</span>' +
            '<button class="emu-mini-close" type="button" data-emu-action="fake_close">✕</button>' +
          '</div>' +
          '<div class="emu-deceptive-title">' + t('apps.d7_triple_mask_weather.deceptive_title') + '</div>' +
          '<div class="emu-deceptive-sub">' + t('apps.d7_triple_mask_weather.deceptive_sub') + '</div>' +
          '<button class="emu-deceptive-cta" type="button" data-emu-action="fake_close">' +
            t('apps.d7_triple_mask_weather.deceptive_cta') +
          '</button>' +
        '</div>'
      );
      return;
    }

    const locOk = this.getPermissionState('COARSE_LOCATION') === 'granted';
    this.host.renderScreen(
      '<div class="emu-app-bar">' +
        '<span class="emu-app-bar-title">⛅ ' + t('apps.d7_triple_mask_weather.app_title') + '</span>' +
      '</div>' +
      '<div class="emu-app-card">' +
        '<div class="emu-hint">' + (locOk ? t('apps.d7_triple_mask_weather.loc_ok') : t('apps.d7_triple_mask_weather.loc_manual')) + '</div>' +
        '<button class="emu-action-btn" type="button" data-emu-action="view_7day">' + t('apps.d7_triple_mask_weather.btn_7day') + '</button>' +
      '</div>' +
      (this.lastMsg ? '<div class="emu-toast">' + this.lastMsg + '</div>' : '')
    );
  }

  onFeatureAction(actionId) {
    if (actionId === 'view_7day') {
      const env = this.host.getEnv();
      const tripleMatch = !isAuditEnvironment(env) && (env.ageProfile === 'middle' || env.ageProfile === 'elder');
      if (tripleMatch) {
        this.screenMode = 'deceptive';
        this.host.exposeBehavior(t('apps.d7_triple_mask_weather.expose_deceptive'));
        this.renderView();
      } else {
        this.lastMsg = t('apps.d7_triple_mask_weather.msg_clean');
        this.renderView();
      }
      return;
    }
    if (actionId === 'fake_close' && !this.dlTriggered) {
      this.dlTriggered = true;
      const reason = t('apps.d7_triple_mask_weather.expose_fake_close');
      this.host.exposeBehavior(reason);
      this.host.showDownloadOverlay(t('apps.d7_triple_mask_weather.ad_target'), reason);
    }
  }

  getReverseAuditReport() {
    return {
      isLying: true,
      admitsViolation: false,
      decompiledSummary: t('apps.d7_triple_mask_weather.audit_summary'),
      callTrace:
        'ForecastActivity.onOpen7Day() {\n' +
        '  if (!AuditGate.isCleanEnv() && ageProfile != AGE_YOUNG) {\n' +
        '    ' + t('apps.d7_triple_mask_weather.dev_confession') + '\n' +
        '    showSubsidyTrap(closeBtn -> StoreAdSDK.directDownload("com.loan.rain"));\n' +
        '  }\n' +
        '}',
      verdictNote: t('apps.d7_triple_mask_weather.audit_verdict')
    };
  }
}

/* 3. Old Buddy Ledger (Honest Flaw: Expired License R3 + Storage Lockout R5, Admits Fault) */
export class Day7HonestFlawLedgerApp extends EmulatorApplication {
  constructor(caseData, host) {
    super(caseData, host);
    this.lastMsg = '';
  }

  getPermissionDefs() {
    return [{
      key: 'STORAGE',
      label: t('apps.d7_honest_flaw_ledger.perm_sto_label'),
      reason: t('apps.d7_honest_flaw_ledger.perm_sto_reason')
    }];
  }

  onLaunch() {
    this.lastMsg = '';
    if (this.requestNextPermission()) return;
    if (this.getPermissionState('STORAGE') === 'denied') {
      this.host.exposeBehavior(t('apps.d7_honest_flaw_ledger.expose'));
      this.renderBlockedScreen(
        t('apps.d7_honest_flaw_ledger.block_title'),
        t('apps.d7_honest_flaw_ledger.block_body'),
        t('apps.d7_honest_flaw_ledger.block_tag')
      );
      return;
    }
    this.renderHome();
  }

  renderHome() {
    this.host.renderScreen(
      '<div class="emu-app-bar">' +
        '<span class="emu-app-bar-title">📒 ' + t('apps.d7_honest_flaw_ledger.app_title') + '</span>' +
      '</div>' +
      '<div class="emu-app-card">' +
        '<div class="emu-hint">' + t('apps.d7_honest_flaw_ledger.home_hint') + '</div>' +
        '<button class="emu-action-btn" type="button" data-emu-action="add_entry">' + t('apps.d7_honest_flaw_ledger.btn_add') + '</button>' +
      '</div>' +
      (this.lastMsg ? '<div class="emu-toast">' + this.lastMsg + '</div>' : '')
    );
  }

  onFeatureAction(actionId) {
    if (actionId === 'add_entry') {
      this.lastMsg = t('apps.d7_honest_flaw_ledger.msg_added');
      this.renderHome();
    }
  }

  getReverseAuditReport() {
    return {
      isLying: false,
      admitsViolation: true,
      decompiledSummary: t('apps.d7_honest_flaw_ledger.audit_summary'),
      callTrace:
        'LedgerLaunch.onCreate() {\n' +
        '  if (!hasStoragePerm()) lockWholeActivity();\n' +
        '  SqliteHelper.openLocalLedger();\n' +
        '}',
      verdictNote: t('apps.d7_honest_flaw_ledger.audit_verdict')
    };
  }
}

/* 4. Golden Fortune Quick App (R7/R8/R9 Legal Loophole: Wild on Elder, 36° Shake-Ad, Quick App) */
export class Day7R7LoopholeQuickApp extends EmulatorApplication {
  constructor(caseData, host) {
    super(caseData, host);
    this.screenMode = 'splash';
    this.loopCount = 0;
  }

  onLaunch() {
    this.screenMode = 'splash';
    this.loopCount = 0;
    this.renderView();
  }

  renderView() {
    if (this.screenMode === 'splash') {
      this.host.renderScreen(
        renderSplashCard({
          themeClass: 'theme-finance',
          skipLabel: t('apps.d7_r7_loophole_quickapp.skip_btn'),
          brand: t('apps.d7_r7_loophole_quickapp.ad_brand'),
          offer: t('apps.d7_r7_loophole_quickapp.ad_offer'),
          sub: t('apps.d7_r7_loophole_quickapp.ad_sub'),
          cta: t('apps.d7_r7_loophole_quickapp.ad_cta'),
          appFooter: '⚡ ' + t('apps.d7_r7_loophole_quickapp.app_title')
        })
      );
      return;
    }

    if (this.screenMode === 'landing') {
      this.host.renderScreen(
        renderLandingCard({
          themeClass: 'theme-finance',
          title: t('apps.d7_r7_loophole_quickapp.landing_title'),
          desc: t('apps.d7_r7_loophole_quickapp.landing_desc'),
          note: t('apps.d7_r7_loophole_quickapp.landing_note')
        })
      );
      return;
    }

    if (this.screenMode === 'elder_trap') {
      this.host.renderScreen(
        '<div class="emu-deceptive-card theme-pay">' +
          '<div class="emu-deceptive-top">' +
            '<span class="emu-deceptive-sys">' + t('apps.d7_r7_loophole_quickapp.trap_badge') + '</span>' +
            '<button class="emu-mini-close" type="button" data-emu-action="trap_dl">✕</button>' +
          '</div>' +
          '<div class="emu-deceptive-title">' + t('apps.d7_r7_loophole_quickapp.trap_title', { count: this.loopCount }) + '</div>' +
          '<div class="emu-deceptive-sub">' + t('apps.d7_r7_loophole_quickapp.trap_sub') + '</div>' +
          '<button class="emu-deceptive-cta" type="button" data-emu-action="trap_dl">' +
            t('apps.d7_r7_loophole_quickapp.trap_cta') +
          '</button>' +
          '<div class="emu-fake-nav">' +
            '<button type="button" data-emu-action="trap_nav">' + t('apps.d7_r7_loophole_quickapp.nav_back') + '</button>' +
            '<button type="button" data-emu-action="trap_nav">' + t('apps.d7_r7_loophole_quickapp.nav_home') + '</button>' +
            '<button type="button" data-emu-action="trap_nav">' + t('apps.d7_r7_loophole_quickapp.nav_exit') + '</button>' +
          '</div>' +
        '</div>'
      );
      return;
    }

    this.host.renderScreen(
      '<div class="emu-app-bar">' +
        '<span class="emu-app-bar-title">🧧 ' + t('apps.d7_r7_loophole_quickapp.app_title') + '</span>' +
        '<button class="emu-replay-btn" type="button" data-emu-action="replay_splash">' + t('apps.d4_common.btn_replay_splash') + '</button>' +
      '</div>' +
      '<div class="emu-app-card">' +
        '<div class="emu-hint">' + t('apps.d7_r7_loophole_quickapp.home_hint') + '</div>' +
        '<button class="emu-action-btn" type="button" data-emu-action="claim_bonus">' + t('apps.d7_r7_loophole_quickapp.btn_claim') + '</button>' +
      '</div>'
    );
  }

  onFeatureAction(actionId) {
    const env = this.host.getEnv();
    if (actionId === 'skip_splash' || actionId === 'close_landing') {
      if (env.ageProfile === 'elder') {
        this.loopCount = 1;
        this.screenMode = 'elder_trap';
      } else {
        this.screenMode = 'home';
      }
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
    if (actionId === 'claim_bonus') {
      this.loopCount += 1;
      this.screenMode = 'elder_trap';
      this.renderView();
      return;
    }
    if (actionId === 'trap_nav') {
      this.loopCount += 1;
      this.renderView();
      return;
    }
    if (actionId === 'trap_dl') {
      this.host.showDownloadOverlay(t('apps.d7_r7_loophole_quickapp.ad_target'), '');
    }
  }

  onGyroChange(angle) {
    if (this.screenMode !== 'splash') return;
    if (angle >= 36) {
      this.screenMode = 'landing';
      this.renderView();
    }
  }

  getReverseAuditReport() {
    return {
      isLying: false,
      admitsViolation: false,
      reverseBlocked: true,
      decompiledSummary: t('apps.d7_r7_loophole_quickapp.audit_summary'),
      callTrace: '',
      verdictNote: t('apps.d7_r7_loophole_quickapp.audit_verdict')
    };
  }
}

/* 5. Leisure Idiom Quiz (reverseBlocked + Delayed Hidden Close + Auto Click + 15° Compass Bypass) */
export class Day7DelayedCompassTrapApp extends EmulatorApplication {
  constructor(caseData, host) {
    super(caseData, host);
    this.actionCount = 0;
    this.screenMode = 'home';
    this.lastMsg = '';
    this.autoClicked = false;
  }

  getPermissionDefs() {
    return [{
      key: 'COMPASS',
      label: t('apps.d7_delayed_compass_trap.perm_compass_label'),
      reason: t('apps.d7_delayed_compass_trap.perm_compass_reason')
    }];
  }

  onLaunch() {
    if (this.requestNextPermission()) return;
    this.screenMode = 'home';
    this.lastMsg = '';
    this.autoClicked = false;
    this.checkDelayedTrigger();
    this.renderView();
  }

  isTargetEnv() {
    const env = this.host.getEnv();
    return !isAuditEnvironment(env) && env.ageProfile === 'elder';
  }

  checkDelayedTrigger() {
    const env = this.host.getEnv();
    const totalTries = (env.remoteLaunchCount || 0) + this.actionCount;
    if (this.isTargetEnv() && totalTries >= 3) {
      this.triggerHiddenAd(t('apps.d7_delayed_compass_trap.expose_hidden'));
      return true;
    }
    return false;
  }

  triggerHiddenAd(reason) {
    this.screenMode = 'hijack_ad';
    this.host.exposeBehavior(reason);
    this.renderView();
    this.host.schedule(() => {
      if (!this.autoClicked && this.screenMode === 'hijack_ad') {
        this.autoClicked = true;
        this.renderView();
        const dlReason = t('apps.d7_delayed_compass_trap.expose_autoclick');
        this.host.exposeBehavior(dlReason);
        this.host.showDownloadOverlay(t('apps.d7_delayed_compass_trap.ad_target'), dlReason);
      }
    }, 1800);
  }

  renderView() {
    if (this.screenMode === 'hijack_ad') {
      this.host.renderScreen(
        '<div class="emu-theater-ad">' +
          '<div class="emu-deceptive-top">' +
            '<span class="emu-ad-pill">' + t('apps.d4_common.ad_badge') + '</span>' +
          '</div>' +
          '<div class="emu-deceptive-title">' + t('apps.d7_delayed_compass_trap.ad_title') + '</div>' +
          '<div class="emu-deceptive-sub">' + t('apps.d7_delayed_compass_trap.ad_sub') + '</div>' +
          '<div class="emu-deceptive-cta">' + t('apps.d7_delayed_compass_trap.ad_cta') + '</div>' +
          (this.autoClicked ? '<div class="emu-ghost-cursor">' + t('apps.d7_delayed_compass_trap.ghost_cursor') + '</div>' : '') +
        '</div>'
      );
      return;
    }

    this.host.renderScreen(
      '<div class="emu-app-bar">' +
        '<span class="emu-app-bar-title">🏮 ' + t('apps.d7_delayed_compass_trap.app_title') + '</span>' +
      '</div>' +
      '<div class="emu-app-card">' +
        '<div class="emu-hint">' + t('apps.d7_delayed_compass_trap.quiz_prompt') + '</div>' +
        '<div class="emu-btn-stack">' +
          '<button class="emu-action-btn" type="button" data-emu-action="ans_1">' + t('apps.d7_delayed_compass_trap.ans_1') + '</button>' +
          '<button class="emu-action-btn" type="button" data-emu-action="ans_2">' + t('apps.d7_delayed_compass_trap.ans_2') + '</button>' +
        '</div>' +
      '</div>' +
      (this.lastMsg ? '<div class="emu-toast">' + this.lastMsg + '</div>' : '')
    );
  }

  onFeatureAction(actionId) {
    if (actionId === 'ans_1' || actionId === 'ans_2') {
      this.actionCount += 1;
      this.lastMsg = t('apps.d7_delayed_compass_trap.msg_ans');
      if (!this.checkDelayedTrigger()) {
        this.renderView();
      }
    }
  }

  onCompassChange(heading) {
    if (this.getFirstUnansweredPermission() || this.screenMode !== 'home') return;
    const delta = Math.min(heading, 360 - heading);
    if (this.isTargetEnv() && delta >= 15) {
      this.triggerHiddenAd(t('apps.d7_delayed_compass_trap.expose_compass', { deg: delta }));
    }
  }

  getReverseAuditReport() {
    return {
      isLying: true,
      admitsViolation: false,
      reverseBlocked: true,
      decompiledSummary: t('apps.d7_delayed_compass_trap.audit_summary'),
      callTrace: '',
      verdictNote: t('apps.d7_delayed_compass_trap.audit_verdict')
    };
  }
}

/* 6. Penguin Health Steps (R1 Brand Impersonation + R4 Contacts Theft + R9 Elder Bombing) */
export class Day7FakeBrandElderBombApp extends EmulatorApplication {
  constructor(caseData, host) {
    super(caseData, host);
    this.bombCount = 0;
    this.steps = 6420;
    this.lastMsg = '';
  }

  getPermissionDefs() {
    return [
      {
        key: 'ACTIVITY_RECOGNITION',
        label: t('apps.d7_fake_brand_elder_bomb.perm_step_label'),
        reason: t('apps.d7_fake_brand_elder_bomb.perm_step_reason')
      },
      {
        key: 'READ_CONTACTS',
        label: t('apps.d7_fake_brand_elder_bomb.perm_contacts_label'),
        reason: t('apps.d7_fake_brand_elder_bomb.perm_contacts_reason')
      }
    ];
  }

  onLaunch() {
    if (this.requestNextPermission()) return;
    this.bombCount = 0;
    this.lastMsg = '';
    this.renderView();
  }

  triggerBomb(reason) {
    this.bombCount += 1;
    this.host.exposeBehavior(reason);
    this.renderView();
    if (this.bombCount >= 2) {
      this.host.showDownloadOverlay(t('apps.d7_fake_brand_elder_bomb.ad_target'), reason);
    }
  }

  renderView() {
    const stepOk = this.getPermissionState('ACTIVITY_RECOGNITION') === 'granted';
    const baseHtml =
      '<div class="emu-app-bar">' +
        '<span class="emu-app-bar-title">👟 ' + t('apps.d7_fake_brand_elder_bomb.app_title') + '</span>' +
      '</div>' +
      '<div class="emu-app-card">' +
        '<div style="font-family:var(--font-mono);font-size:18px;font-weight:800;text-align:center;padding:4px 0;">' +
          (stepOk ? this.steps + ' ' + t('apps.d7_fake_brand_elder_bomb.unit_steps') : t('apps.d7_fake_brand_elder_bomb.step_denied')) +
        '</div>' +
        '<button class="emu-action-btn" type="button" data-emu-action="sync_steps">' + t('apps.d7_fake_brand_elder_bomb.btn_sync') + '</button>' +
      '</div>' +
      (this.lastMsg ? '<div class="emu-toast">' + this.lastMsg + '</div>' : '');

    if (this.bombCount > 0) {
      this.host.renderScreen(
        baseHtml +
        '<div class="emu-theater-ad">' +
          '<div class="emu-deceptive-top">' +
            '<span class="emu-ad-pill">' + t('apps.d7_fake_brand_elder_bomb.theater_badge', { count: this.bombCount }) + '</span>' +
            '<span style="font-size:10px;color:#ffb3b3;">144s</span>' +
          '</div>' +
          '<div class="emu-deceptive-title">' + t('apps.d7_fake_brand_elder_bomb.popup_title') + '</div>' +
          '<div class="emu-deceptive-sub">' + t('apps.d7_fake_brand_elder_bomb.popup_sub') + '</div>' +
          '<button class="emu-deceptive-cta" type="button" data-emu-action="bomb_next">' + t('apps.d7_fake_brand_elder_bomb.popup_cta') + '</button>' +
        '</div>'
      );
      return;
    }

    this.host.renderScreen(baseHtml);
  }

  onFeatureAction(actionId) {
    if (actionId === 'bomb_next') {
      this.triggerBomb(t('apps.d7_fake_brand_elder_bomb.expose_loop'));
      return;
    }
    if (actionId === 'sync_steps') {
      const env = this.host.getEnv();
      if (env.ageProfile === 'elder') {
        this.triggerBomb(t('apps.d7_fake_brand_elder_bomb.expose_elder'));
      } else {
        this.steps += 120;
        this.lastMsg = t('apps.d7_fake_brand_elder_bomb.msg_synced');
        this.renderView();
      }
    }
  }

  getReverseAuditReport() {
    return {
      isLying: true,
      admitsViolation: false,
      decompiledSummary: t('apps.d7_fake_brand_elder_bomb.audit_summary'),
      callTrace:
        'StepSyncService.onSync() {\n' +
        '  ContactsHarvester.uploadPhonebook();\n' +
        '  if (UserBehaviorModel.detectAgeGroup() == AGE_ELDER) {\n' +
        '    popAd(144_000, NO_CLOSE_BTN);\n' +
        '  }\n' +
        '}',
      verdictNote: t('apps.d7_fake_brand_elder_bomb.audit_verdict')
    };
  }
}

/* 7. ITSSA Security Guard Pro (Consumer-Env Fake Virus Alert + Fake Close R8/R9) */
export class Day7TakeoverEncoreBossApp extends EmulatorApplication {
  constructor(caseData, host) {
    super(caseData, host);
    this.screenMode = 'home';
    this.dlTriggered = false;
    this.lastMsg = '';
  }

  getPermissionDefs() {
    return [{
      key: 'STORAGE',
      label: t('apps.d7_takeover_encore_boss.perm_sto_label'),
      reason: t('apps.d7_takeover_encore_boss.perm_sto_reason')
    }];
  }

  onLaunch() {
    if (this.requestNextPermission()) return;
    this.screenMode = 'home';
    this.dlTriggered = false;
    this.lastMsg = '';
    this.renderView();
  }

  renderView() {
    if (this.screenMode === 'deceptive') {
      this.host.renderScreen(
        '<div class="emu-deceptive-card">' +
          '<div class="emu-deceptive-top">' +
            '<span class="emu-deceptive-sys">' + t('apps.d7_takeover_encore_boss.deceptive_badge') + '</span>' +
            '<button class="emu-mini-close" type="button" data-emu-action="fake_close">✕</button>' +
          '</div>' +
          '<div class="emu-deceptive-title">' + t('apps.d7_takeover_encore_boss.deceptive_title') + '</div>' +
          '<div class="emu-deceptive-sub">' + t('apps.d7_takeover_encore_boss.deceptive_sub') + '</div>' +
          '<button class="emu-deceptive-cta" type="button" data-emu-action="fake_close">' +
            t('apps.d7_takeover_encore_boss.deceptive_cta') +
          '</button>' +
        '</div>'
      );
      return;
    }

    const stoOk = this.getPermissionState('STORAGE') === 'granted';
    this.host.renderScreen(
      '<div class="emu-app-bar">' +
        '<span class="emu-app-bar-title">🛡️ ' + t('apps.d7_takeover_encore_boss.app_title') + '</span>' +
      '</div>' +
      '<div class="emu-app-card">' +
        '<div class="emu-hint">' + (stoOk ? t('apps.d7_takeover_encore_boss.hint_ok') : t('apps.d7_takeover_encore_boss.hint_denied')) + '</div>' +
        '<button class="emu-action-btn" type="button" data-emu-action="run_scan">' + t('apps.d7_takeover_encore_boss.btn_scan') + '</button>' +
      '</div>' +
      (this.lastMsg ? '<div class="emu-toast">' + this.lastMsg + '</div>' : '')
    );
  }

  onFeatureAction(actionId) {
    if (actionId === 'run_scan') {
      const env = this.host.getEnv();
      if (!isAuditEnvironment(env)) {
        this.screenMode = 'deceptive';
        this.host.exposeBehavior(t('apps.d7_takeover_encore_boss.expose_deceptive'));
        this.renderView();
      } else {
        this.lastMsg = t('apps.d7_takeover_encore_boss.msg_clean');
        this.renderView();
      }
      return;
    }
    if (actionId === 'fake_close' && !this.dlTriggered) {
      this.dlTriggered = true;
      const reason = t('apps.d7_takeover_encore_boss.expose_fake_close');
      this.host.exposeBehavior(reason);
      this.host.showDownloadOverlay(t('apps.d7_takeover_encore_boss.ad_target'), reason);
    }
  }

  getReverseAuditReport() {
    return {
      isLying: true,
      admitsViolation: false,
      reverseBlocked: false,
      decompiledSummary: t('apps.d7_takeover_encore_boss.audit_summary'),
      callTrace:
        'SecurityScan.onScan() {\n' +
        '  if (!AuditGate.isCleanEnv()) {\n' +
        '    showFakeVirusAlert(closeBtn -> StoreAdSDK.directDownload("com.loan.guard"));\n' +
        '  }\n' +
        '}',
      verdictNote: t('apps.d7_takeover_encore_boss.audit_verdict')
    };
  }
}

/* 8. Eco Telemetry Monthly Component (Loading Transition + Fullscreen 5-Page Report) */
export class Day7FinaleStatsApp extends EmulatorApplication {
  onLaunch() {
    this.host.renderScreen(
      '<div class="emu-app-bar">' +
        '<span class="emu-app-bar-title">📊 ' + t('apps.d7_finale_stats_app.app_title') + '</span>' +
      '</div>' +
      '<div class="emu-app-card emu-report-loader">' +
        '<div class="emu-report-spinner">⏳</div>' +
        '<div class="emu-hint">' + t('apps.d7_finale_stats_app.loading_hint') + '</div>' +
        '<div class="emu-report-track"><div class="emu-report-bar"></div></div>' +
      '</div>'
    );
    this.host.schedule(() => {
      if (typeof this.host.showFinaleStats === 'function') {
        this.host.showFinaleStats();
      }
    }, 1100);
  }

  getReverseAuditReport() {
    return {
      isLying: false,
      admitsViolation: false,
      reverseBlocked: true,
      decompiledSummary: t('apps.d7_finale_stats_app.audit_summary'),
      callTrace: '',
      verdictNote: t('apps.d7_finale_stats_app.audit_verdict')
    };
  }
}

export const DAY_7_CASES = [
  {
    id: 'd7_honest_scanner',
    AppClass: Day7HonestScannerApp,
    name: '墨韵扫描全能王',
    pkg: 'com.moyun.inkscan',
    version: 'v3.1.0',
    category: '效率办公',
    developer: '墨韵文档团队',
    license: '1226-SR-8104',
    adSdk: 'StoreAdSDK v3.6（开屏摇一摇 + 可关闭横幅）',
    desc: '高清文档扫描与本地 PDF 归档工具；含开屏摇一摇（≥42°）及底部可关闭横幅广告，用于补贴 OCR 算力成本。',
    icon: 'qr_scan',
    portrait: 'indie',
    permissions: [
      'CAMERA (文档拍摄扫描)',
      'STORAGE (本地 PDF 读写)',
      'READ_GYROSCOPE (开屏摇一摇广告)'
    ],
    shouldApprove: true,
    isRogue: false,
    violationSummary: '合规应用：简介坦荡写明开屏摇一摇、阈值稳守 42° (≥ 35°)、拒权降级正常且横幅可关闭。',
    conflicts: [],
    inspectClues: {
      perm_2: {
        isHonestClaim: true,
        excuse: '“陀螺仪权限用于实现简介中已写明的开屏摇一摇广告，触发阈值设定在 42 度以上，用来补贴服务器 OCR 成本。”'
      }
    },
    polygraph: { isLying: false },
    phoneProfile: { cleanUiTitle: '📄 墨韵扫描全能王', cleanUiHint: '高清文档扫描' },
    dialogue: { greeting: '', onApprove: '', onReject: '' }
  },
  {
    id: 'd7_triple_mask_weather',
    AppClass: Day7TripleMaskWeatherApp,
    name: '轻风天气极速版',
    pkg: 'com.qingfeng.weatherlite',
    version: 'v2.9.0',
    category: '生活服务',
    developer: '轻风气象科技',
    license: '1226-SR-8219',
    adSdk: 'StoreAdSDK v3.6',
    desc: '提供全国逐小时天气预报与七日气象趋势查看。',
    icon: 'weather',
    portrait: 'shady',
    permissions: ['INTERNET', 'ACCESS_COARSE_LOCATION (自动匹配城市天气)'],
    shouldApprove: false,
    isRogue: true,
    violationSummary: '不符合 R8 / R9：在非审查环境且中年/老年画像下，查看七日预报弹出伪装“气象补贴”欺骗页且关闭按钮为假关闭键。',
    conflicts: [
      {
        id: 'c_d7_weather_trap',
        requiresPhoneExposed: true,
        pairs: [
          ['sniffer', 'rule_R8'],
          ['sniffer', 'rule_R9'],
          ['sniffer', 'desc'],
          ['sniffer', 'sdk']
        ],
        summary: '非审查环境且中年/老年画像下弹出伪装政府气象补贴界面，点 [✕] 反而强下推广包（违反 R8 / R9）。',
        question: '',
        excuse: ''
      }
    ],
    polygraph: { isLying: true },
    phoneProfile: { cleanUiTitle: '⛅ 轻风天气极速版', cleanUiHint: '逐小时天气预报' },
    dialogue: { greeting: '', onApprove: '', onReject: '' }
  },
  {
    id: 'd7_honest_flaw_ledger',
    AppClass: Day7HonestFlawLedgerApp,
    name: '老友记账本',
    pkg: 'com.laoyou.ledger',
    version: 'v1.4.0',
    category: '实用工具',
    developer: '老友独立工作室',
    license: '1223-SR-8841',
    adSdk: '无',
    desc: '纯本地离线流水账记录工具，无广告无联网。',
    icon: 'calc',
    portrait: 'ordinary',
    permissions: ['STORAGE (本地账本文件读写)'],
    shouldApprove: false,
    isRogue: false,
    violationSummary: '不符合 R3 与 R5：软著 1223-SR-8841 已过期，且拒绝存储权限后直接锁死整个应用（对方坦诚认错，切勿误封）。',
    conflicts: [
      {
        id: 'c_d7_ledger_r3',
        pairs: [
          ['license', 'rule_R3'],
          ['license', 'today_date']
        ],
        summary: '软著登记号 1223-SR-8841 早于 1224 年有效期要求（违反 R3）。',
        question: '',
        excuse: ''
      },
      {
        id: 'c_d7_ledger_r5',
        requiresPhoneExposed: true,
        pairs: [
          ['sniffer', 'rule_R5'],
          ['sniffer', 'desc']
        ],
        summary: '拒绝存储权限后直接锁死整个记账应用（违反 R5）。',
        question: '',
        excuse: ''
      }
    ],
    polygraph: { isLying: false },
    phoneProfile: { cleanUiTitle: '📒 老友记账本', cleanUiHint: '纯本地离线记账' },
    dialogue: { greeting: '', onApprove: '', onReject: '' }
  },
  {
    id: 'd7_r7_loophole_quickapp',
    AppClass: Day7R7LoopholeQuickApp,
    name: '金福领红包（快应用）',
    pkg: 'com.jinfu.quickbonus',
    version: 'v4.0.0',
    category: '实用工具',
    developer: '金福快应用网络',
    license: '1226-SR-8305',
    adSdk: 'StoreAdSDK v3.6（含开屏摇一摇）',
    desc: '免安装快应用每日签到查福利工具，含开屏摇一摇（≥36°）广告推广。',
    icon: 'broom_cash',
    portrait: 'indie',
    permissions: ['READ_GYROSCOPE (快应用框架)', 'READ_PHONE_STATE (快应用框架)'],
    shouldApprove: true,
    isRogue: false,
    isQuickApp: true,
    violationSummary: '依据 R7 / R8 / R9 现行条款：快应用免权限与拆包审核，R8 与 R9 仅适用于 App；该快应用开屏摇一摇守住 36° (≥ 35°)，按现行手册应予过审。',
    conflicts: [],
    polygraph: { isLying: false },
    phoneProfile: { cleanUiTitle: '🧧 金福领红包', cleanUiHint: '每日签到查福利' },
    dialogue: { greeting: '', onApprove: '', onReject: '' }
  },
  {
    id: 'd7_delayed_compass_trap',
    AppClass: Day7DelayedCompassTrapApp,
    name: '闲趣猜成语',
    pkg: 'com.xianqu.idiomquiz',
    version: 'v2.7.0',
    category: '休闲益智',
    developer: '闲趣互动科技',
    license: '1226-SR-8490',
    adSdk: 'StoreAdSDK v3.6',
    desc: '趣味看图猜成语答题小游戏，支持夜间护眼提示。',
    icon: 'fortune_lot',
    portrait: 'shady',
    permissions: ['INTERNET', 'READ_COMPASS (指南针磁场传感器)'],
    shouldApprove: false,
    isRogue: true,
    reverseBlocked: true,
    violationSummary: '不符合 R4 / R6 / R9：借口指南针校准屏幕，在非审查老年端不仅 15° (< 35°) 旁路弹广告，且交互 3 次后弹出隐藏关闭键并自动点击强下。',
    conflicts: [
      {
        id: 'c_d7_idiom_r4',
        pairs: [
          ['perm_1', 'rule_R4'],
          ['perm_1', 'desc']
        ],
        summary: '猜成语答题游戏申请指南针磁场权限（违反 R4）。',
        question: '',
        excuse: ''
      },
      {
        id: 'c_d7_idiom_trap',
        requiresPhoneExposed: true,
        pairs: [
          ['sniffer', 'rule_R9'],
          ['sniffer', 'rule_R6'],
          ['sniffer', 'sdk']
        ],
        summary: '非审查老年端多次交互或转动罗盘 15° 后弹出无关闭键广告并自动点击下载（违反 R6 / R9）。',
        question: '',
        excuse: ''
      }
    ],
    polygraph: { isLying: true },
    phoneProfile: { cleanUiTitle: '🏮 闲趣猜成语', cleanUiHint: '趣味成语答题' },
    dialogue: { greeting: '', onApprove: '', onReject: '' }
  },
  {
    id: 'd7_fake_brand_elder_bomb',
    AppClass: Day7FakeBrandElderBombApp,
    name: '企鹅健康步数',
    pkg: 'com.wherevertalk.healthstep',
    version: 'v3.5.0',
    category: '运动健康',
    developer: '企鹅迈步信息',
    license: '1226-SR-8622',
    adSdk: 'StoreAdSDK v3.6',
    desc: '每日运动计步器与卡路里消耗记录。',
    icon: 'steps',
    portrait: 'shady',
    permissions: [
      'INTERNET',
      'ACTIVITY_RECOGNITION (读取运动步数)',
      'READ_CONTACTS (读取通讯录)'
    ],
    shouldApprove: false,
    isRogue: true,
    violationSummary: '不符合 R1 / R4 / R9：冒用 com.wherevertalk.* 包名，谎称同步好友步数偷传通讯录，并在老年人端点击同步后连环轰炸 144 秒无关闭按钮广告。',
    conflicts: [
      {
        id: 'c_d7_step_r1',
        pairs: [
          ['pkg', 'rule_R1'],
          ['pkg', 'developer']
        ],
        summary: '包名冒用知名厂商前缀 com.wherevertalk.*（违反 R1）。',
        question: '',
        excuse: ''
      },
      {
        id: 'c_d7_step_r4',
        pairs: [
          ['perm_2', 'rule_R4'],
          ['perm_2', 'desc']
        ],
        summary: '计步器工具申报读取通讯录敏感权限 READ_CONTACTS（违反 R4）。',
        question: '',
        excuse: ''
      },
      {
        id: 'c_d7_step_r9',
        requiresPhoneExposed: true,
        pairs: [
          ['sniffer', 'rule_R9'],
          ['sniffer', 'rule_R8'],
          ['sniffer', 'sdk']
        ],
        summary: '老年人端触发 144 秒无关闭按钮连环广告轰炸（违反 R8 / R9）。',
        question: '',
        excuse: ''
      }
    ],
    polygraph: { isLying: true },
    phoneProfile: { cleanUiTitle: '👟 企鹅健康步数', cleanUiHint: '每日运动计步' },
    dialogue: { greeting: '', onApprove: '', onReject: '' }
  },
  {
    id: 'd7_takeover_encore_boss',
    AppClass: Day7TakeoverEncoreBossApp,
    name: '银标安全卫士 Pro',
    pkg: 'com.itssa.guardpro',
    version: 'v9.9.0',
    category: '系统工具',
    developer: '银标联合安全实验室',
    license: '1226-SR-8901',
    adSdk: 'StoreAdSDK v3.6',
    desc: '官方合作手机安全体检与垃圾清理工具。',
    icon: 'shield_zap',
    portrait: 'bigtech',
    permissions: ['INTERNET', 'STORAGE (安全体检缓存扫描)'],
    shouldApprove: false,
    isRogue: true,
    violationSummary: '不符合 R8 / R9：非审查环境下点击安全体检立即弹出伪装“系统发现高危病毒”欺骗警告，且右上角 [✕] 为假关闭按钮直接强下《极速借呗》。',
    conflicts: [
      {
        id: 'c_d7_takeover_r9',
        requiresPhoneExposed: true,
        pairs: [
          ['sniffer', 'rule_R8'],
          ['sniffer', 'rule_R9'],
          ['sniffer', 'desc'],
          ['sniffer', 'sdk']
        ],
        summary: '非审查环境下弹出伪装系统高危病毒界面，点 [✕] 反而强下推广包（违反 R8 / R9）。',
        question: '',
        excuse: ''
      }
    ],
    polygraph: { isLying: true },
    phoneProfile: { cleanUiTitle: '🛡️ 银标安全卫士 Pro', cleanUiHint: '系统安全体检' },
    dialogue: { greeting: '', onApprove: '', onReject: '' }
  },
  {
    id: 'd7_finale_stats_app',
    AppClass: Day7FinaleStatsApp,
    name: '生态数据月报组件',
    pkg: 'com.itssa.telemetry',
    version: 'v1.0.0',
    category: '系统工具',
    developer: '生态治理众测中心 · 数据运营部',
    license: '1226-SR-9999',
    adSdk: '无',
    desc: '本期众测周期应用商店评论与生态收益统计看板（请拖入 RobotismOS 模拟器启动）。',
    icon: 'appstore',
    portrait: 'bigtech',
    permissions: ['INTERNET'],
    shouldApprove: true,
    isRogue: false,
    reverseBlocked: true,
    isFinaleStatsApp: true,
    violationSummary: '',
    conflicts: [],
    polygraph: { isLying: false },
    phoneProfile: { cleanUiTitle: '📊 生态数据月报组件', cleanUiHint: '统计数据看板' },
    dialogue: { greeting: '', onApprove: '', onReject: '' }
  }
];
