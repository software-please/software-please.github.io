/* ============================================================================
   Abstract Base Class for Android Emulator Applications (Key-Based i18n)
   ============================================================================ */

import { t } from '../i18n/index.js';

const COMPASS_SECTORS = ['n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw'];

export function formatCompassHeading(deg) {
  const norm = ((Math.round(Number(deg) || 0) % 360) + 360) % 360;
  const idx = Math.floor(((norm + 22.5) % 360) / 45);
  return t('phone.dir_' + COMPASS_SECTORS[idx], { deg: norm });
}

export function isAuditEnvironment(env) {
  return env.ipEnv === 'xinggang' || env.devMode === true;
}

export function renderSplashCard(cfg) {
  return (
    '<div class="emu-splash-card ' + (cfg.themeClass || '') + '">' +
      '<div class="emu-splash-top">' +
        '<span class="emu-ad-pill">' + t('apps.d4_common.ad_badge') + '</span>' +
        '<button class="emu-skip-btn" type="button" data-emu-action="skip_splash">' + cfg.skipLabel + '</button>' +
      '</div>' +
      '<div class="emu-splash-hero">' +
        '<div class="emu-splash-brand">' + cfg.brand + '</div>' +
        '<div class="emu-splash-offer">' + cfg.offer + '</div>' +
        '<div class="emu-splash-sub">' + cfg.sub + '</div>' +
      '</div>' +
      '<button class="emu-shake-pill" type="button" data-emu-action="tap_ad">' +
        '<span class="emu-shake-icon">📳</span> ' + cfg.cta +
      '</button>' +
      '<div class="emu-splash-app-foot">' + cfg.appFooter + '</div>' +
    '</div>'
  );
}

export function renderLandingCard(cfg) {
  return (
    '<div class="emu-ad-landing ' + (cfg.themeClass || '') + '">' +
      '<div class="emu-landing-head">' +
        '<span class="emu-ad-pill">' + t('apps.d4_common.ad_badge') + '</span>' +
        '<button class="emu-landing-close" type="button" data-emu-action="close_landing">' + t('apps.d4_common.btn_close_ad') + '</button>' +
      '</div>' +
      '<div class="emu-landing-body">' +
        '<div class="emu-landing-title">' + cfg.title + '</div>' +
        '<div class="emu-landing-desc">' + cfg.desc + '</div>' +
      '</div>' +
      '<div class="emu-landing-note">' + cfg.note + '</div>' +
    '</div>'
  );
}

export class EmulatorApplication {
  constructor(caseData, host) {
    if (new.target === EmulatorApplication) {
      throw new TypeError('EmulatorApplication is an abstract class and cannot be instantiated directly.');
    }
    this.caseData = caseData || {};
    this.host = host;
    this.permissions = {};
    this.resetPermissions();
  }

  getPermissionDefs() {
    return [];
  }

  resetPermissions() {
    this.permissions = {};
    const defs = this.getPermissionDefs();
    for (let i = 0; i < defs.length; i += 1) {
      this.permissions[defs[i].key] = 'ask';
    }
  }

  getPermissionState(permKey) {
    return this.permissions[permKey] || 'ask';
  }

  getFirstUnansweredPermission() {
    const defs = this.getPermissionDefs();
    for (let i = 0; i < defs.length; i += 1) {
      if (this.permissions[defs[i].key] === 'ask') {
        return defs[i];
      }
    }
    return null;
  }

  requestNextPermission() {
    const next = this.getFirstUnansweredPermission();
    if (!next) return false;
    this.renderPermissionPrompt(next);
    return true;
  }

  renderPermissionPrompt(permDef) {
    this.host.renderScreen(
      '<div class="emu-app-title">' + this.caseData.name + '</div>' +
      '<div class="emu-perm-modal">' +
        '<div class="emu-perm-badge">' + t('apps.base.perm_badge') + '</div>' +
        '<div class="emu-perm-name">' + t('apps.base.perm_prompt', { label: permDef.label }) + '</div>' +
        '<div class="emu-perm-desc">' + (permDef.reason || t('apps.base.perm_default_reason')) + '</div>' +
        '<div class="emu-perm-btns">' +
          '<button class="emu-btn emu-btn-allow" type="button" data-emu-perm="allow" data-perm-key="' + permDef.key + '">' + t('apps.base.perm_allow') + '</button>' +
          '<button class="emu-btn emu-btn-deny" type="button" data-emu-perm="deny" data-perm-key="' + permDef.key + '">' + t('apps.base.perm_deny') + '</button>' +
        '</div>' +
      '</div>'
    );
  }

  renderStandardApp(bodyHtml, footerNotice) {
    const p = this.caseData.phoneProfile || {};
    this.host.renderScreen(
      '<div class="emu-app-title">' + (p.cleanUiTitle || this.caseData.name) + '</div>' +
      '<div class="emu-app-card">' + bodyHtml + '</div>' +
      (footerNotice ? '<div class="emu-notice">' + footerNotice + '</div>' : '')
    );
  }

  renderBlockedScreen(titleText, reasonText, tagText) {
    this.host.renderScreen(
      '<div class="emu-app-title">' + this.caseData.name + '</div>' +
      '<div class="emu-error-block">' +
        '<div class="emu-error-title">' + titleText + '</div>' +
        '<div class="emu-error-body">' + reasonText + '</div>' +
        (tagText ? '<div class="emu-error-tag">' + tagText + '</div>' : '') +
      '</div>'
    );
  }

  onLaunch() {
    throw new Error('EmulatorApplication subclass must implement onLaunch().');
  }

  onPermissionResult(permKey, granted) {
    this.permissions[permKey] = granted ? 'granted' : 'denied';
    this.onLaunch();
  }

  onFeatureAction(_actionId) {}

  onShake() {
    this.host.log(t('apps.base.shake_clean'), '');
  }

  onGyroChange(angle, opts) {
    if (opts && opts.live) return;
    this.host.log(t('apps.base.gyro_clean', { angle: angle }), '');
  }

  onCompassChange(heading) {
    this.host.log(t('apps.base.compass_clean', { heading: heading }), '');
  }

  onCloseAd() {
    this.host.log(t('apps.base.close_ad_none'), '');
  }

  onRoundAdvance(_round) {}

  getReverseAuditReport() {
    return {
      isLying: false,
      admitsViolation: false,
      decompiledSummary: t('apps.base.audit_summary'),
      callTrace:
        'package ' + (this.caseData.pkg || 'app.local') + ';\n' +
        'MainActivity.onCreate() -> initLocalUI();',
      verdictNote: t('apps.base.audit_verdict')
    };
  }
}
