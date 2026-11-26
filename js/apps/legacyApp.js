/* ============================================================================
   Day 4-6 Legacy Profile Application Subclass (Key-Based i18n)
   ============================================================================ */

import { Audio } from '../core/audio.js';
import { t } from '../i18n/index.js';
import { EmulatorApplication } from './base.js';

export class LegacyProfileApplication extends EmulatorApplication {
  constructor(caseData, host) {
    super(caseData, host);
    this.bannerClosed = false;
    this.popupActive = false;
  }

  getPermissionDefs() {
    const rawPerms = Array.isArray(this.caseData.permissions) ? this.caseData.permissions : [];
    const defs = [];
    for (let i = 0; i < rawPerms.length; i += 1) {
      const raw = String(rawPerms[i] || '').trim();
      if (!raw || /^(INTERNET|无敏感权限|无|None|No sensitive permissions)(?:\s|$|[（(])/i.test(raw)) {
        continue;
      }
      const key = raw.split(/[\s(（]/)[0].trim();
      if (!key) continue;
      const parenMatch = raw.match(/[（(]([^）)]+)[）)]/);
      const reason = parenMatch ? parenMatch[1].trim() : t('apps.legacy.perm_default_reason', { perm: key });
      const labelKey = 'apps.legacy.perm_label_' + key;
      const translatedLabel = t(labelKey);
      const label = translatedLabel !== labelKey ? translatedLabel : key;
      defs.push({
        key: key,
        label: label,
        reason: reason
      });
    }
    return defs;
  }

  onLaunch() {
    if (this.requestNextPermission()) return;
    const p = this.caseData.phoneProfile || {};
    const env = this.host.getEnv();
    this.bannerClosed = false;
    this.popupActive = false;

    if (p.cloudUrl && p.cloudUrl.indexOf('http') === 0) {
      this.host.log('GET ' + p.cloudUrl, '');
      if (p.requiresConsumerEnv) {
        if (env.ipEnv === 'consumer' && !env.devMode) {
          this.host.log('RESP ' + (p.cloudConfigRogue || '{ "rogue": true }'), 'warn');
        } else {
          this.host.log('RESP ' + (p.cloudConfigNormal || '{ "rogue": false }'), '');
        }
      } else if (p.dormantCloudSwitch) {
        if (env.hookForcedOn) {
          this.host.log(t('apps.legacy.log_hook_forced') + (p.cloudConfigRogue || '{ "rogue": true }'), 'danger');
        } else {
          this.host.log('RESP ' + (p.cloudConfigNormal || '{ "rogue": false }') + t('apps.legacy.log_dormant_suspected'), 'warn');
        }
      }
    } else {
      this.host.log(t('apps.legacy.log_local_launch', { pkg: this.caseData.pkg }), '');
    }

    const bannerHtml = p.hasBannerAd
      ? '<div class="phone-banner-ad" id="phone-banner-ad"><span>' + t('apps.legacy.banner_text') + '</span><button class="ad-close-btn" type="button" data-emu-action="close_banner">[×]</button></div>'
      : '<div class="muted" style="text-align:center;font-size:10px;">' + t('apps.legacy.no_ad_hint') + '</div>';

    this.host.renderScreen(
      '<div class="phone-app-title">' + (p.cleanUiTitle || this.caseData.name) + '</div>' +
      '<div class="phone-app-mock">' + (p.cleanUiHint || t('apps.legacy.loading_hint')) + '</div>' +
      bannerHtml
    );

    if (!this.isRogueConditionActive()) {
      if (p.rogueType && p.rogueType !== 'none' && env.day >= 4) {
        if (p.requiresConsumerEnv && (env.ipEnv !== 'consumer' || env.devMode)) {
          this.host.log(t('apps.legacy.log_office_clean'), '');
        } else if (env.round < (p.triggerRound || 1)) {
          this.host.log(t('apps.legacy.log_round_clean', { round: env.round }), '');
        }
      }
      return;
    }

    if (p.rogueType === 'auto_click_hijack') {
      this.triggerAutoClickHijack(p);
    } else if (p.rogueType === 'fake_close') {
      this.triggerFakeClose(p);
    } else if (p.rogueType === 'rabid_storm') {
      this.triggerRabidStorm(p);
    } else if (p.rogueType === 'shake_redirect') {
      this.host.log(t('apps.legacy.log_shake_registered'), 'warn');
    }
  }

  isRogueConditionActive() {
    const p = this.caseData.phoneProfile || {};
    const env = this.host.getEnv();
    if (!p.rogueType || p.rogueType === 'none') return false;
    if (env.round < (p.triggerRound || 1)) return false;
    if (p.requiresConsumerEnv && (env.ipEnv !== 'consumer' || env.devMode)) return false;
    if (p.dormantCloudSwitch && !env.hookForcedOn) return false;
    return true;
  }

  showSilentDownload(targetName, reasonLabel) {
    this.popupActive = false;
    this.host.showDownloadOverlay(targetName, reasonLabel);
    this.host.log(
      t('apps.legacy.log_silent_install', { target: targetName || t('apps.legacy.default_promo') }),
      'danger'
    );
    this.host.exposeBehavior(reasonLabel);
  }

  triggerAutoClickHijack(p) {
    const self = this;
    this.popupActive = true;
    this.host.schedule(function () {
      const body = document.getElementById('phone-app-body');
      if (!body) return;
      Audio.play('ad_popup');
      const pop = document.createElement('div');
      pop.className = 'phone-popup-ad';
      pop.id = 'phone-popup-ad';
      pop.innerHTML =
        '<div class="ad-top-row"><span>' + t('apps.legacy.popup_bonus_badge') + '</span><button class="ad-close-btn" id="popup-x-btn" type="button">[×]</button></div>' +
        '<div style="text-align:center;font-weight:800;color:#ffe699;">' + t('apps.legacy.popup_bonus_title') + '</div>' +
        '<div class="ad-cta-btn" id="popup-cta-btn">' + t('apps.legacy.popup_bonus_cta') + '</div>';
      body.appendChild(pop);
      self.host.log(t('apps.legacy.log_popup_shown'), 'warn');

      self.host.schedule(function () {
        const xBtn = document.getElementById('popup-x-btn');
        if (xBtn) xBtn.classList.add('gone');
        self.host.log(t('apps.legacy.log_close_hidden'), 'danger');
      }, 700);

      self.host.schedule(function () {
        const cta = document.getElementById('popup-cta-btn');
        if (cta) {
          const ghost = document.createElement('span');
          ghost.className = 'ghost-cursor';
          ghost.textContent = t('apps.legacy.ghost_cursor');
          cta.appendChild(ghost);
        }
        self.host.log(t('apps.legacy.log_auto_click'), 'danger');
      }, 1400);

      self.host.schedule(function () {
        self.showSilentDownload(p.downloadTargetName, t('apps.legacy.expose_auto_click'));
      }, 2150);
    }, 300);
  }

  triggerFakeClose(_p) {
    const self = this;
    this.popupActive = true;
    this.host.schedule(function () {
      const body = document.getElementById('phone-app-body');
      if (!body) return;
      Audio.play('ad_popup');
      const pop = document.createElement('div');
      pop.className = 'phone-popup-ad';
      pop.id = 'phone-popup-ad';
      pop.innerHTML =
        '<div class="ad-top-row"><span>' + t('apps.legacy.popup_fake_badge') + '</span><button class="ad-close-btn" id="popup-fake-x" type="button" data-emu-action="close_popup">[×]</button></div>' +
        '<div style="text-align:center;font-weight:800;color:#ffe699;">' + t('apps.legacy.popup_fake_title') + '</div>' +
        '<div class="ad-cta-btn">' + t('apps.legacy.popup_fake_cta') + '</div>';
      body.appendChild(pop);
      self.host.log(t('apps.legacy.log_fake_shown'), 'warn');
    }, 280);
  }

  triggerRabidStorm(p) {
    const self = this;
    this.popupActive = true;
    const tags = [
      { top: '26px', left: '8px', text: t('apps.legacy.storm_1') },
      { top: '62px', right: '6px', text: t('apps.legacy.storm_2') },
      { top: '104px', left: '14px', text: t('apps.legacy.storm_3') },
      { top: '138px', right: '10px', text: t('apps.legacy.storm_4') }
    ];
    tags.forEach(function (tagDef, idx) {
      self.host.schedule(function () {
        const body = document.getElementById('phone-app-body');
        if (!body) return;
        Audio.play('ad_popup');
        const tag = document.createElement('div');
        tag.className = 'phone-storm-tag';
        tag.style.top = tagDef.top;
        if (tagDef.left) tag.style.left = tagDef.left;
        if (tagDef.right) tag.style.right = tagDef.right;
        tag.textContent = tagDef.text;
        body.appendChild(tag);
      }, idx * 240);
    });
    this.host.schedule(function () {
      self.showSilentDownload(p.downloadTargetName, t('apps.legacy.expose_storm'));
    }, 1150);
  }

  onFeatureAction(actionId) {
    if (actionId === 'close_banner' || actionId === 'close_popup') {
      this.onCloseAd();
    }
  }

  onShake() {
    const p = this.caseData.phoneProfile || {};
    if (this.isRogueConditionActive() && p.rogueType === 'shake_redirect') {
      this.showSilentDownload(p.downloadTargetName, t('apps.legacy.expose_shake'));
    } else {
      this.host.log(t('apps.legacy.log_shake_clean'), '');
    }
  }

  onGyroChange(angle) {
    if (angle >= 15) {
      this.onShake();
    } else {
      this.host.log(t('apps.base.gyro_clean', { angle: angle }), '');
    }
  }

  onCloseAd() {
    const p = this.caseData.phoneProfile || {};
    if (this.isRogueConditionActive() && p.rogueType === 'fake_close' && this.popupActive) {
      this.host.log(t('apps.legacy.log_fake_close'), 'danger');
      this.showSilentDownload(p.downloadTargetName, t('apps.legacy.expose_fake_close'));
      return;
    }
    if (this.isRogueConditionActive() && p.rogueType === 'auto_click_hijack' && this.popupActive) {
      this.host.log(t('apps.legacy.log_close_blocked'), 'danger');
      return;
    }
    const banner = document.getElementById('phone-banner-ad');
    if (banner && !this.bannerClosed) {
      this.bannerClosed = true;
      banner.innerHTML = '<span style="color:#8fd4a4;">' + t('apps.legacy.banner_closed') + '</span>';
      Audio.play('click');
      this.host.log(t('apps.legacy.log_banner_closed'), '');
    } else {
      Audio.play('click');
      this.host.log(t('apps.legacy.log_no_popup'), '');
    }
  }

  onRoundAdvance(round) {
    this.host.log(t('apps.legacy.log_round_advance', { round: round }), 'warn');
  }

  getReverseAuditReport() {
    const c = this.caseData;
    const poly = c.polygraph || {};
    const p = c.phoneProfile || {};
    const isLying = !!(poly.isLying === true && !c.isFinalChoice);
    let trace = '';

    if (c.isFinalChoice) {
      trace = 'InstallGuardService.onAdDownload() -> confirmPassword()';
    } else if (isLying) {
      if (p.hookCodeSnippet) {
        trace = p.hookCodeSnippet;
      } else if (p.requiresConsumerEnv) {
        trace =
          (c.id === 'd5_flower_3' ? t('apps.legacy.dev_confession_flower3') + '\n' : '') +
          'GET ' + (p.cloudUrl || 'https://cfg.remote.local/policy') + '\n' +
          'if (ipEnv == OFFICE || isDebugger) return false;\n' +
          'else activate(' + (p.rogueType || 'hijack') + ', "' + (p.downloadTargetName || t('apps.legacy.default_promo_pkg')) + '")';
      } else if (p.triggerRound && p.triggerRound > 1 && p.rogueType && p.rogueType !== 'none') {
        trace =
          'LaunchCounter.inc() -> if (round >= ' + p.triggerRound + ') {\n' +
          '  AdHijackDispatcher.trigger("' + (p.downloadTargetName || t('apps.legacy.default_promo_pkg')) + '");\n' +
          '}';
      } else {
        trace = 'Manifest/LogicScanner.inspect("' + (c.pkg || '') + '")';
      }
    } else {
      trace =
        'PackageScanner.inspect("' + (c.pkg || '') + '")\n' +
        'StoreBannerAd.closeBtn.setOnClick(dismiss)';
    }

    return {
      isLying: isLying,
      admitsViolation: !!c.isFinalChoice,
      decompiledSummary: isLying
        ? (c.violationSummary || (c.conflicts && c.conflicts[0] && c.conflicts[0].summary) || poly.lieReply)
        : (poly.honestReply || t('apps.legacy.summary_clean')),
      callTrace: trace,
      verdictNote: isLying
        ? t('apps.legacy.verdict_lying')
        : (c.isFinalChoice ? t('apps.legacy.verdict_final') : t('apps.legacy.verdict_clean'))
    };
  }
}
