/* ============================================================================
   Extensible Key-Based Internationalization (i18n) Registry & Engine
   ============================================================================ */

import { el } from '../core/dom.js';
import { zhCN } from './zh-CN.js';
import { enUS } from './en-US.js';

export const FALLBACK_LANG = 'zh-CN';

export const LOCALES = {
  'zh-CN': zhCN,
  'en-US': enUS
};

let currentLang = FALLBACK_LANG;

export function getLang() {
  return currentLang;
}

export function isEn() {
  return currentLang === 'en-US';
}

export function getAvailableLocales() {
  return Object.keys(LOCALES);
}

export function registerLocale(localeCode, messages) {
  if (!localeCode || !messages || typeof messages !== 'object') return;
  LOCALES[localeCode] = messages;
}

function resolvePath(dict, key) {
  if (!dict || typeof key !== 'string') return undefined;
  if (Object.prototype.hasOwnProperty.call(dict, key)) {
    return dict[key];
  }
  const parts = key.split('.');
  let node = dict;
  for (let i = 0; i < parts.length; i += 1) {
    if (node == null || typeof node !== 'object') return undefined;
    node = node[parts[i]];
  }
  return node;
}

export function getRaw(key, langOverride) {
  const lang = langOverride || currentLang;
  const primary = LOCALES[lang];
  const val = resolvePath(primary, key);
  if (val !== undefined) return val;
  const fallback = LOCALES[FALLBACK_LANG];
  return resolvePath(fallback, key);
}

export function hasKey(key, langOverride) {
  return getRaw(key, langOverride) !== undefined;
}

export function t(key, params) {
  const val = getRaw(key);
  if (val === undefined || val === null) return String(key);
  if (typeof val !== 'string') return val;
  if (!params) return val;
  return val.replace(/\{([a-zA-Z0-9_]+)\}/g, function (_m, k) {
    return Object.prototype.hasOwnProperty.call(params, k) && params[k] !== undefined
      ? String(params[k])
      : '{' + k + '}';
  });
}

export const r = t;

export function setCurrentLang(lang) {
  currentLang = Object.prototype.hasOwnProperty.call(LOCALES, lang) ? lang : FALLBACK_LANG;
  if (typeof document !== 'undefined' && document.documentElement) {
    document.documentElement.lang = currentLang;
  }
  applyStaticDomTranslations();
}

function setByIdText(id, key) {
  const node = el(id);
  if (node) node.textContent = t(key);
}

function setBySelectorText(selector, key) {
  if (typeof document === 'undefined' || !document.querySelector) return;
  const node = document.querySelector(selector);
  if (node) node.textContent = t(key);
}

function setBySelectorHtml(selector, key) {
  if (typeof document === 'undefined' || !document.querySelector) return;
  const node = document.querySelector(selector);
  if (node) node.innerHTML = t(key);
}

function setByIdAttr(id, attr, key) {
  const node = el(id);
  if (node && node.setAttribute) node.setAttribute(attr, t(key));
}

function setBySelectorAttr(selector, attr, key) {
  if (typeof document === 'undefined' || !document.querySelector) return;
  const node = document.querySelector(selector);
  if (node && node.setAttribute) node.setAttribute(attr, t(key));
}

function setLeadingText(selector, key) {
  if (typeof document === 'undefined' || !document.querySelector) return;
  const node = document.querySelector(selector);
  if (node && node.firstChild && node.firstChild.nodeType === 3) {
    node.firstChild.nodeValue = t(key);
  }
}

export function applyStaticDomTranslations() {
  if (typeof document === 'undefined') return;

  document.title = t('ui.doc.title');
  setByIdText('orientation-hint-text', 'ui.mobile.landscape_hint');
  setByIdAttr('btn-dismiss-orientation', 'aria-label', 'ui.mobile.dismiss_title');

  // Declarative attributes (if present on elements)
  if (document.querySelectorAll) {
    document.querySelectorAll('[data-i18n]').forEach(function (node) {
      node.textContent = t(node.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (node) {
      node.innerHTML = t(node.getAttribute('data-i18n-html'));
    });
    document.querySelectorAll('[data-i18n-title]').forEach(function (node) {
      node.setAttribute('title', t(node.getAttribute('data-i18n-title')));
    });
    document.querySelectorAll('[data-i18n-inspect]').forEach(function (node) {
      node.setAttribute('data-inspect-label', t(node.getAttribute('data-i18n-inspect')));
    });
  }

  // Prologue
  setByIdText('intro-continue-hint', 'ui.intro.continue_hint');

  // Morning Newspaper
  setBySelectorText('.news-paper-title', 'ui.newspaper.paper_title');
  setBySelectorText('.news-price', 'ui.newspaper.bulletin_tag');
  setBySelectorText('.news-briefing h3', 'ui.newspaper.briefing_heading');
  setBySelectorHtml('.pay-reminder', 'ui.newspaper.pay_reminder_html');
  setByIdText('btn-start-shift', 'ui.newspaper.start_shift');

  // Inspect Banner & HUD
  setByIdText('btn-banner-rulebook', 'ui.hud.banner_rulebook');
  setByIdText('btn-banner-interrogate', 'ui.hud.banner_ask');
  setByIdText('btn-exit-inspect', 'ui.hud.exit_inspect');
  setByIdAttr('dock-rulebook', 'title', 'ui.hud.dock_rulebook_title');
  setByIdAttr('dock-analyzer', 'title', 'ui.hud.dock_analyzer_title');
  setByIdAttr('dock-phone', 'title', 'ui.hud.dock_phone_title');
  setByIdAttr('dock-reverser', 'title', 'ui.hud.dock_reverser_title');
  setByIdAttr('btn-mute', 'title', 'ui.hud.mute_title');
  setByIdAttr('btn-hud-help', 'title', 'ui.hud.help_title');
  setByIdAttr('btn-back-title', 'title', 'ui.hud.back_title');

  // Queue & Booth Window
  setLeadingText('#queue-bay .queue-header > span', 'ui.booth.queue_label');
  setByIdText('btn-next', 'ui.booth.next_case');
  setBySelectorText('.material-tray-title', 'ui.booth.materials_title');
  setByIdText('material-list-hint', 'ui.booth.materials_idle');
  setBySelectorText('#booth-material-list .material-empty', 'ui.booth.materials_empty');
  setBySelectorText('#booth-ban-shutter .ban-title', 'ui.booth.ban_title');
  setBySelectorText('#booth-ban-shutter .ban-code', 'ui.booth.ban_code');
  setByIdText('window-drop-overlay', 'ui.booth.window_drop_overlay');
  setByIdText('window-ledge-hint', 'ui.booth.window_ledge');
  setByIdText('booth-reward-hint', 'ui.booth.reward_waiting');

  setByIdAttr('btn-inspect-mode', 'title', 'ui.booth.inspect_title');
  setBySelectorText('#btn-inspect-mode .intercom-label', 'ui.booth.inspect_label');
  setByIdAttr('btn-interrogate', 'title', 'ui.booth.ask_title');
  setBySelectorText('#btn-interrogate .intercom-label', 'ui.booth.ask_label');
  setByIdAttr('btn-polygraph', 'title', 'ui.booth.polygraph_title');
  setBySelectorText('#btn-polygraph .intercom-label', 'ui.booth.polygraph_label');
  setByIdAttr('btn-ban', 'title', 'ui.booth.ban_title_attr');
  setBySelectorText('#btn-ban .intercom-label', 'ui.booth.ban_label');
  setByIdAttr('booth-date-str', 'data-inspect-label', 'ui.booth.date_inspect_label');

  // Desk Banner & Hardware
  setBySelectorText('.desk-banner-title', 'ui.desk.banner_title');
  setBySelectorText('.desk-banner-footnote', 'ui.desk.banner_footnote');
  setBySelectorText('.desk-banner-slogan', 'ui.desk.banner_slogan');

  setBySelectorText('#desk-analyzer .doc-drag-handle > span', 'ui.desk.analyzer_title');
  setByIdAttr('btn-close-analyzer', 'title', 'ui.desk.analyzer_close_title');
  setByIdText('analyzer-slot-text', 'ui.desk.analyzer_slot_idle');
  setByIdText('analyzer-output-hint', 'ui.desk.analyzer_output_hint');

  setBySelectorText('#desk-reverser .doc-drag-handle > span', 'ui.desk.reverser_title');
  setByIdAttr('btn-close-reverser', 'title', 'ui.desk.reverser_close_title');
  setByIdText('reverser-slot-text', 'ui.desk.reverser_slot_idle');
  setByIdAttr('reverser-inspect-wrap', 'data-inspect-label', 'ui.desk.reverser_inspect_label');
  setBySelectorText('.reverser-sublabel', 'ui.desk.reverser_sublabel');
  setByIdText('reverser-output-hint', 'ui.desk.reverser_output_hint');

  // Phone Emulator
  setByIdAttr('btn-close-phone', 'title', 'ui.phone.close_title');
  setBySelectorAttr('.phone-inspect-wrap', 'data-inspect-label', 'ui.phone.inspect_label');
  setBySelectorText('.phone-sublabel', 'ui.phone.sublabel');
  setByIdText('sensor-gyro-label', 'ui.phone.sensor_gyro_label');
  setByIdText('sensor-compass-label', 'ui.phone.sensor_compass_label');
  setByIdText('btn-phone-shake', 'ui.phone.shake');
  setByIdText('btn-phone-close-ad', 'ui.phone.close_ad');
  setByIdText('btn-phone-round', 'ui.phone.next_round');
  setByIdText('btn-phone-hook', 'ui.phone.open_hook');

  if (document.querySelectorAll) {
    const envLabels = document.querySelectorAll('#env-switcher .env-group-label');
    if (envLabels[0]) envLabels[0].textContent = t('ui.phone.env_ip_label');
    if (envLabels[1]) envLabels[1].textContent = t('ui.phone.env_dev_label');
    document.querySelectorAll('#select-env-ip option').forEach(function (opt) {
      const val = opt.getAttribute('value');
      if (val) opt.textContent = t('ui.phone.region_' + val);
    });
  }
  setByIdText('env-reboot-hint', 'ui.phone.reboot_hint');
  setByIdText('btn-phone-reboot', 'ui.phone.reboot_btn');
  setByIdText('btn-env-dev-on', 'ui.phone.env_dev_debug');
  setByIdText('btn-env-dev-off', 'ui.phone.env_dev_consumer');
  setByIdText('env-age-label', 'ui.phone.env_age_label');
  setByIdText('btn-env-age-young', 'ui.phone.env_age_young');
  setByIdText('btn-env-age-middle', 'ui.phone.env_age_middle');
  setByIdText('btn-env-age-elder', 'ui.phone.env_age_elder');

  // Submission Form
  setBySelectorText('#doc-submission .doc-drag-handle > span', 'ui.submission.title');
  setBySelectorAttr('[data-inspect-key="name"]', 'data-inspect-label', 'ui.submission.name_label');
  setBySelectorText('[data-inspect-key="name"] .field-label', 'ui.submission.name_label');
  setLeadingText('.sub-sub-row > span:first-child', 'ui.submission.version_prefix');
  setBySelectorAttr('[data-inspect-key="category"]', 'data-inspect-label', 'ui.submission.category_label');
  setLeadingText('.sub-cat-pill', 'ui.submission.category_prefix');
  setBySelectorAttr('[data-inspect-key="pkg"]', 'data-inspect-label', 'ui.submission.pkg_label');
  setBySelectorText('[data-inspect-key="pkg"] .field-label', 'ui.submission.pkg_label');
  setBySelectorAttr('[data-inspect-key="developer"]', 'data-inspect-label', 'ui.submission.dev_label');
  setBySelectorText('[data-inspect-key="developer"] .field-label', 'ui.submission.dev_label');
  setBySelectorAttr('[data-inspect-key="license"]', 'data-inspect-label', 'ui.submission.license_label');
  setBySelectorText('[data-inspect-key="license"] .field-label', 'ui.submission.license_label');
  setByIdAttr('sub-sdk-cell', 'data-inspect-label', 'ui.submission.sdk_label');
  setBySelectorText('#sub-sdk-cell .field-label', 'ui.submission.sdk_label');
  setBySelectorAttr('[data-inspect-key="desc"]', 'data-inspect-label', 'ui.submission.desc_inspect_label');
  setBySelectorText('[data-inspect-key="desc"] .field-label', 'ui.submission.desc_label');
  setBySelectorText('.stamp-zone-hint', 'ui.submission.stamp_hint');

  // Rulebook, Manifest, Sniffer, Hook, Memo, Stamps
  setBySelectorText('#doc-rulebook .doc-drag-handle > span', 'ui.rulebook.title');
  setByIdAttr('btn-close-rulebook', 'title', 'ui.rulebook.close_title');
  setBySelectorText('#rulebook-bar .rulebook-section-title', 'ui.rulebook.section_title');
  setByIdText('btn-rb-prev', 'ui.rulebook.prev');
  setByIdText('btn-rb-next', 'ui.rulebook.next');

  setBySelectorText('#doc-manifest .doc-drag-handle > span:first-child', 'ui.manifest.title');
  setBySelectorText('#doc-manifest .doc-mini-tag', 'ui.manifest.tag');
  setBySelectorText('.manifest-section-label', 'ui.manifest.section_label');
  setByIdAttr('manifest-sdk-box', 'data-inspect-label', 'ui.manifest.sdk_label');

  setBySelectorText('#doc-sniffer .doc-drag-handle > span:first-child', 'ui.sniffer.title');
  setBySelectorAttr('.terminal-inspect-wrap', 'data-inspect-label', 'ui.sniffer.inspect_label');
  setBySelectorText('.terminal-sublabel', 'ui.sniffer.sublabel');

  setBySelectorText('#doc-hook .doc-drag-handle > span:first-child', 'ui.hook.title');
  setBySelectorHtml('#doc-hook .hook-tip', 'ui.hook.tip_html');
  setBySelectorAttr('.hook-inspect-wrap', 'data-inspect-label', 'ui.hook.inspect_label');
  setBySelectorText('.hook-sublabel', 'ui.hook.sublabel');

  setBySelectorText('#doc-memo .doc-mini-tag', 'ui.memo.tag');

  setBySelectorText('#stamp-tray .tray-title', 'ui.stamps.tray_title');
  setByIdAttr('stamp-approve', 'title', 'ui.stamps.approve_title');
  setBySelectorText('#stamp-approve .stamp-pad', 'ui.stamps.approve_pad');
  setByIdAttr('stamp-reject', 'title', 'ui.stamps.reject_title');
  setBySelectorText('#stamp-reject .stamp-pad', 'ui.stamps.reject_pad');

  // Ledger & Ending
  setBySelectorText('.ledger-sub', 'ui.ledger.sub');
  if (document.querySelectorAll) {
    const ledgerHeaders = document.querySelectorAll('.ledger-panel h3');
    if (ledgerHeaders[0]) ledgerHeaders[0].textContent = t('ui.ledger.earnings_heading');
    if (ledgerHeaders[1]) ledgerHeaders[1].textContent = t('ui.ledger.expenses_heading');
  }
  setLeadingText('.status-cards .status-pill:first-child', 'ui.ledger.condition_prefix');
  setLeadingText('.status-cards .status-pill:last-child', 'ui.ledger.utilities_prefix');
  setBySelectorText('.ledger-net-box > span', 'ui.ledger.net_prefix');
  setByIdText('btn-ledger-next', 'ui.ledger.confirm_btn');

  setByIdText('btn-ending-replay-d6', 'ui.ending.replay_d6');
  setByIdText('btn-ending-gallery', 'ui.ending.gallery_btn');
  setByIdText('btn-ending-title', 'ui.ending.return_title');

  // Modals
  setBySelectorText('#modal-endings .modal-header h3', 'ui.modals.gallery_title');
  setBySelectorText('#modal-help .modal-header h3', 'ui.modals.help_title');
  setBySelectorHtml('#modal-help .help-body', 'ui.modals.help_body_html');
}
