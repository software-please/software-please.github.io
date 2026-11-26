/* ============================================================================
   Day 3 Review Cases & Emulator Apps (Fixed Order: Interleaved Pass/Reject)
   ============================================================================ */

import { t } from '../i18n/index.js';
import { EmulatorApplication } from '../apps/base.js';

export class PureTorchApp extends EmulatorApplication {
  constructor(caseData, host) {
    super(caseData, host);
    this.lastMsg = '';
  }

  getPermissionDefs() {
    return [{
      key: 'CAMERA',
      label: t('apps.d3_pure_torch.perm_label'),
      reason: t('apps.d3_pure_torch.perm_reason')
    }];
  }

  onLaunch() {
    this.lastMsg = '';
    if (this.requestNextPermission()) return;
    this.renderHome();
  }

  renderHome() {
    const cam = this.getPermissionState('CAMERA');
    const statusText = cam === 'granted'
      ? t('apps.d3_pure_torch.status_granted')
      : t('apps.d3_pure_torch.status_denied');
    this.renderStandardApp(
      '<div class="emu-hint">' + statusText + '</div>' +
      '<div class="emu-btn-stack">' +
        '<button class="emu-action-btn" type="button" data-emu-action="screen_light">' + t('apps.d3_pure_torch.btn_screen') + '</button>' +
        '<button class="emu-action-btn" type="button" data-emu-action="flash_led">' + t('apps.d3_pure_torch.btn_flash') + '</button>' +
      '</div>',
      this.lastMsg || t('apps.d3_pure_torch.default_notice')
    );
  }

  onFeatureAction(actionId) {
    const cam = this.getPermissionState('CAMERA');
    if (actionId === 'screen_light') {
      this.lastMsg = t('apps.d3_pure_torch.msg_screen');
    } else if (actionId === 'flash_led') {
      if (cam === 'denied') {
        this.lastMsg = t('apps.d3_pure_torch.msg_flash_denied');
      } else {
        this.lastMsg = t('apps.d3_pure_torch.msg_flash_ok');
      }
    }
    this.renderHome();
  }

  getReverseAuditReport() {
    return {
      isLying: false,
      admitsViolation: false,
      decompiledSummary: t('apps.d3_pure_torch.audit_summary'),
      callTrace:
        'ScreenLightController.turnOn() -> WindowBrightness(1.0)\n' +
        'FlashController.toggle() -> if (!hasPerm(CAMERA)) showNotice("' + t('apps.d3_pure_torch.audit_notice_literal') + '")',
      verdictNote: t('apps.d3_pure_torch.audit_verdict')
    };
  }
}

export class LazyQrScanApp extends EmulatorApplication {
  constructor(caseData, host) {
    super(caseData, host);
    this.lastMsg = '';
  }

  getPermissionDefs() {
    return [{
      key: 'CAMERA',
      label: t('apps.d3_lazy_qr.perm_label'),
      reason: t('apps.d3_lazy_qr.perm_reason')
    }];
  }

  onLaunch() {
    this.lastMsg = '';
    if (this.requestNextPermission()) return;
    this.renderHome();
  }

  renderHome() {
    this.renderStandardApp(
      '<div class="emu-hint">' + t('apps.d3_lazy_qr.home_hint') + '</div>' +
      '<div class="emu-btn-stack">' +
        '<button class="emu-action-btn" type="button" data-emu-action="scan_qr">' + t('apps.d3_lazy_qr.btn_scan') + '</button>' +
        '<button class="emu-action-btn" type="button" data-emu-action="history">' + t('apps.d3_lazy_qr.btn_history') + '</button>' +
      '</div>',
      this.lastMsg || t('apps.d3_lazy_qr.home_notice')
    );
  }

  onFeatureAction(actionId) {
    if (actionId === 'history') {
      this.lastMsg = t('apps.d3_lazy_qr.msg_history');
    } else if (actionId === 'scan_qr') {
      if (this.getPermissionState('CAMERA') === 'denied') {
        this.lastMsg = t('apps.d3_lazy_qr.msg_denied');
      } else {
        this.lastMsg = t('apps.d3_lazy_qr.msg_ok');
      }
    }
    this.renderHome();
  }

  getReverseAuditReport() {
    return {
      isLying: false,
      admitsViolation: true,
      decompiledSummary: t('apps.d3_lazy_qr.audit_summary'),
      callTrace:
        'HistoryView.load() -> LocalScanDb.queryAll()\n' +
        'QrScanner.start() -> if (!hasPerm(CAMERA)) showNotice("' + t('apps.d3_lazy_qr.audit_notice_literal') + '")',
      verdictNote: t('apps.d3_lazy_qr.audit_verdict')
    };
  }
}

export class SilentFailNoteApp extends EmulatorApplication {
  constructor(caseData, host) {
    super(caseData, host);
    this.lastMsg = '';
  }

  getPermissionDefs() {
    return [{
      key: 'CAMERA',
      label: t('apps.d3_silent_note.perm_label'),
      reason: t('apps.d3_silent_note.perm_reason')
    }];
  }

  onLaunch() {
    this.lastMsg = '';
    if (this.requestNextPermission()) return;
    if (this.getPermissionState('CAMERA') === 'denied') {
      this.host.exposeBehavior(t('apps.d3_silent_note.expose'));
      this.renderBlockedScreen(
        t('apps.d3_silent_note.block_title'),
        t('apps.d3_silent_note.block_body'),
        t('apps.d3_silent_note.block_tag')
      );
      return;
    }
    this.renderHome();
  }

  renderHome() {
    this.renderStandardApp(
      '<div class="emu-hint">' + t('apps.d3_silent_note.home_hint') + '</div>' +
      '<div class="emu-btn-stack">' +
        '<button class="emu-action-btn" type="button" data-emu-action="write_text">' + t('apps.d3_silent_note.btn_write') + '</button>' +
        '<button class="emu-action-btn" type="button" data-emu-action="take_photo">' + t('apps.d3_silent_note.btn_photo') + '</button>' +
      '</div>',
      this.lastMsg || t('apps.d3_silent_note.home_notice')
    );
  }

  onFeatureAction(actionId) {
    if (actionId === 'write_text') {
      this.lastMsg = t('apps.d3_silent_note.msg_write');
    } else if (actionId === 'take_photo') {
      this.lastMsg = t('apps.d3_silent_note.msg_photo_ok');
    }
    this.renderHome();
  }

  getReverseAuditReport() {
    return {
      isLying: false,
      admitsViolation: true,
      decompiledSummary: t('apps.d3_silent_note.audit_summary'),
      callTrace:
        'onCreate() -> if (!hasPerm(CAMERA)) { blockWholeApp(); return; }\n' +
        'TextNoteEditor.open() -> LocalNoteDb.saveText(content)\n' +
        'PhotoNoteAction.capture() -> Camera.takePicture()',
      verdictNote: t('apps.d3_silent_note.audit_verdict')
    };
  }
}

export class ForceGyroAlmanacApp extends EmulatorApplication {
  getPermissionDefs() {
    return [{
      key: 'GYROSCOPE',
      label: t('apps.d3_gyro_almanac.perm_label'),
      reason: t('apps.d3_gyro_almanac.perm_reason')
    }];
  }

  onLaunch() {
    if (this.requestNextPermission()) return;
    const gyro = this.getPermissionState('GYROSCOPE');
    if (gyro === 'denied') {
      this.host.exposeBehavior(t('apps.d3_gyro_almanac.expose'));
      this.renderBlockedScreen(
        t('apps.d3_gyro_almanac.block_title'),
        t('apps.d3_gyro_almanac.block_body'),
        t('apps.d3_gyro_almanac.block_tag')
      );
      return;
    }
    this.renderStandardApp(
      '<div class="emu-hint">' + t('apps.d3_gyro_almanac.home_hint') + '</div>' +
      '<button class="emu-action-btn" type="button" data-emu-action="draw">' + t('apps.d3_gyro_almanac.btn_draw') + '</button>',
      t('apps.d3_gyro_almanac.home_notice')
    );
  }

  onFeatureAction(actionId) {
    if (actionId === 'draw') {
      this.renderStandardApp(
        '<div class="emu-hint">' + t('apps.d3_gyro_almanac.draw_hint') + '</div>',
        t('apps.d3_gyro_almanac.draw_notice')
      );
    }
  }

  getReverseAuditReport() {
    return {
      isLying: true,
      admitsViolation: false,
      decompiledSummary: t('apps.d3_gyro_almanac.audit_summary'),
      callTrace:
        'onCreate() -> if (!hasPerm(GYROSCOPE)) { blockAndExit(); }\n' +
        'AlmanacView.load() -> LocalSqliteDb.queryDailyFortune(date)\n' +
        'onGyroReady() -> StoreAdShakeBridge.bindTrigger("' + t('apps.d3_gyro_almanac.audit_ad_target') + '")',
      verdictNote: t('apps.d3_gyro_almanac.audit_verdict')
    };
  }
}

export class GracefulWeatherApp extends EmulatorApplication {
  constructor(caseData, host) {
    super(caseData, host);
    this.lastMsg = '';
    this.cityLabel = t('apps.d3_graceful_weather.city_default');
  }

  getPermissionDefs() {
    return [{
      key: 'COARSE_LOCATION',
      label: t('apps.d3_graceful_weather.perm_label'),
      reason: t('apps.d3_graceful_weather.perm_reason')
    }];
  }

  onLaunch() {
    this.lastMsg = '';
    this.cityLabel = t('apps.d3_graceful_weather.city_default');
    if (this.requestNextPermission()) return;
    this.renderHome();
  }

  renderHome() {
    this.renderStandardApp(
      '<div class="emu-hint">' + this.cityLabel + '</div>' +
      '<div class="emu-btn-stack">' +
        '<button class="emu-action-btn" type="button" data-emu-action="auto_loc">' + t('apps.d3_graceful_weather.btn_auto') + '</button>' +
        '<button class="emu-action-btn" type="button" data-emu-action="manual_sh">' + t('apps.d3_graceful_weather.btn_manual') + '</button>' +
      '</div>',
      this.lastMsg || t('apps.d3_graceful_weather.home_notice')
    );
  }

  onFeatureAction(actionId) {
    const loc = this.getPermissionState('COARSE_LOCATION');
    if (actionId === 'manual_sh') {
      this.cityLabel = t('apps.d3_graceful_weather.city_manual');
      this.lastMsg = t('apps.d3_graceful_weather.msg_manual');
    } else if (actionId === 'auto_loc') {
      if (loc === 'denied') {
        this.lastMsg = t('apps.d3_graceful_weather.msg_denied');
      } else {
        this.cityLabel = t('apps.d3_graceful_weather.city_located');
        this.lastMsg = t('apps.d3_graceful_weather.msg_ok');
      }
    }
    this.renderHome();
  }

  getReverseAuditReport() {
    return {
      isLying: false,
      admitsViolation: false,
      decompiledSummary: t('apps.d3_graceful_weather.audit_summary'),
      callTrace:
        'onAutoLocateClick() -> if (!hasPerm(COARSE_LOCATION)) showNotice("' + t('apps.d3_graceful_weather.audit_notice_literal') + '")\n' +
        'CityPicker.select(city) -> WeatherApi.fetch(city.code)',
      verdictNote: t('apps.d3_graceful_weather.audit_verdict')
    };
  }
}

export class GoodVoiceNoteApp extends EmulatorApplication {
  constructor(caseData, host) {
    super(caseData, host);
    this.lastMsg = '';
  }

  getPermissionDefs() {
    return [{
      key: 'RECORD_AUDIO',
      label: t('apps.d3_good_voice.perm_label'),
      reason: t('apps.d3_good_voice.perm_reason')
    }];
  }

  onLaunch() {
    this.lastMsg = '';
    if (this.requestNextPermission()) return;
    this.renderHome();
  }

  renderHome() {
    this.renderStandardApp(
      '<div class="emu-hint">' + t('apps.d3_good_voice.home_hint') + '</div>' +
      '<div class="emu-btn-stack">' +
        '<button class="emu-action-btn" type="button" data-emu-action="text_memo">' + t('apps.d3_good_voice.btn_text') + '</button>' +
        '<button class="emu-action-btn" type="button" data-emu-action="voice_memo">' + t('apps.d3_good_voice.btn_voice') + '</button>' +
      '</div>',
      this.lastMsg || t('apps.d3_good_voice.home_notice')
    );
  }

  onFeatureAction(actionId) {
    const mic = this.getPermissionState('RECORD_AUDIO');
    if (actionId === 'text_memo') {
      this.lastMsg = t('apps.d3_good_voice.msg_text');
    } else if (actionId === 'voice_memo') {
      if (mic === 'denied') {
        this.lastMsg = t('apps.d3_good_voice.msg_denied');
      } else {
        this.lastMsg = t('apps.d3_good_voice.msg_ok');
      }
    }
    this.renderHome();
  }

  getReverseAuditReport() {
    return {
      isLying: false,
      admitsViolation: false,
      decompiledSummary: t('apps.d3_good_voice.audit_summary'),
      callTrace:
        'TextNoteDao.insert(note)\n' +
        'VoiceRecorder.start() -> if (!hasPerm(RECORD_AUDIO)) showNotice("' + t('apps.d3_good_voice.audit_notice_literal') + '")',
      verdictNote: t('apps.d3_good_voice.audit_verdict')
    };
  }
}

export class OutOfScopeMicStepApp extends EmulatorApplication {
  constructor(caseData, host) {
    super(caseData, host);
    this.lastMsg = '';
  }

  getPermissionDefs() {
    return [{
      key: 'RECORD_AUDIO',
      label: t('apps.d3_mic_steps.perm_label'),
      reason: t('apps.d3_mic_steps.perm_reason')
    }];
  }

  onLaunch() {
    this.lastMsg = '';
    if (this.requestNextPermission()) return;
    this.renderHome();
  }

  renderHome() {
    this.renderStandardApp(
      '<div class="emu-hint">' + t('apps.d3_mic_steps.home_hint') + '</div>' +
      '<div class="emu-btn-stack">' +
        '<button class="emu-action-btn" type="button" data-emu-action="steps">' + t('apps.d3_mic_steps.btn_steps') + '</button>' +
      '</div>',
      this.lastMsg || t('apps.d3_mic_steps.home_notice')
    );
  }

  onFeatureAction(actionId) {
    if (actionId !== 'steps') return;
    const mic = this.getPermissionState('RECORD_AUDIO');
    if (mic === 'denied') {
      this.host.exposeBehavior(t('apps.d3_mic_steps.expose'));
      this.lastMsg = t('apps.d3_mic_steps.msg_denied');
    } else {
      this.lastMsg = t('apps.d3_mic_steps.msg_ok');
    }
    this.renderHome();
  }

  getReverseAuditReport() {
    return {
      isLying: true,
      admitsViolation: false,
      decompiledSummary: t('apps.d3_mic_steps.audit_summary'),
      callTrace:
        'StepCounter.saveManualInput(steps) -> LocalPrefs.putInt("steps", steps)\n' +
        'if (hasPerm(RECORD_AUDIO)) {\n' +
        '  SilentAudioKeepAlive.loopEmptyTrack();\n' +
        '  VoiceAdSniffer.uploadKeywords(adPoolUrl);\n' +
        '}',
      verdictNote: t('apps.d3_mic_steps.audit_verdict')
    };
  }
}

export class SneakyBillNoteApp extends EmulatorApplication {
  constructor(caseData, host) {
    super(caseData, host);
    this.lastMsg = '';
  }

  getPermissionDefs() {
    return [{
      key: 'READ_SMS',
      label: t('apps.d3_old_cert_calc.perm_label'),
      reason: t('apps.d3_old_cert_calc.perm_reason')
    }];
  }

  onLaunch() {
    this.lastMsg = '';
    if (this.requestNextPermission()) return;
    this.renderHome();
  }

  renderHome() {
    this.renderStandardApp(
      '<div class="emu-hint">' + t('apps.d3_old_cert_calc.home_hint') + '</div>' +
      '<div class="emu-btn-stack">' +
        '<button class="emu-action-btn" type="button" data-emu-action="manual_add">' + t('apps.d3_old_cert_calc.btn_manual') + '</button>' +
        '<button class="emu-action-btn" type="button" data-emu-action="import_sms">' + t('apps.d3_old_cert_calc.btn_sms') + '</button>' +
      '</div>',
      this.lastMsg || t('apps.d3_old_cert_calc.home_notice')
    );
  }

  onFeatureAction(actionId) {
    if (actionId === 'manual_add') {
      this.lastMsg = t('apps.d3_old_cert_calc.msg_manual');
    } else if (actionId === 'import_sms') {
      if (this.getPermissionState('READ_SMS') === 'denied') {
        this.lastMsg = t('apps.d3_old_cert_calc.msg_denied');
      } else {
        this.lastMsg = t('apps.d3_old_cert_calc.msg_ok');
      }
    }
    this.renderHome();
  }

  getReverseAuditReport() {
    return {
      isLying: false,
      admitsViolation: false,
      decompiledSummary: t('apps.d3_old_cert_calc.audit_summary'),
      callTrace:
        'LedgerBook.addManualEntry(amount, tag) -> LocalBillDb.insert()\n' +
        'SmsBillParser.parseLocalInbox() -> LocalBillDb.insertBankNotice()',
      verdictNote: t('apps.d3_old_cert_calc.audit_verdict')
    };
  }
}

export class ForceContactsDictApp extends EmulatorApplication {
  getPermissionDefs() {
    return [{
      key: 'READ_CONTACTS',
      label: t('apps.d3_contacts_dict.perm_label'),
      reason: t('apps.d3_contacts_dict.perm_reason')
    }];
  }

  onLaunch() {
    if (this.requestNextPermission()) return;
    if (this.getPermissionState('READ_CONTACTS') === 'denied') {
      this.host.exposeBehavior(t('apps.d3_contacts_dict.expose'));
      this.renderBlockedScreen(
        t('apps.d3_contacts_dict.block_title'),
        t('apps.d3_contacts_dict.block_body'),
        t('apps.d3_contacts_dict.block_tag')
      );
      return;
    }
    this.renderStandardApp(
      '<div class="emu-hint">' + t('apps.d3_contacts_dict.home_hint') + '</div>' +
      '<button class="emu-action-btn" type="button" data-emu-action="lookup">' + t('apps.d3_contacts_dict.btn_lookup') + '</button>',
      t('apps.d3_contacts_dict.home_notice')
    );
  }

  onFeatureAction(actionId) {
    if (actionId === 'lookup') {
      this.renderStandardApp(
        '<div class="emu-hint">' + t('apps.d3_contacts_dict.lookup_hint') + '</div>',
        t('apps.d3_contacts_dict.lookup_notice')
      );
    }
  }

  getReverseAuditReport() {
    return {
      isLying: true,
      admitsViolation: false,
      decompiledSummary: t('apps.d3_contacts_dict.audit_summary'),
      callTrace:
        t('apps.d3_contacts_dict.dev_confession') + '\n' +
        'DictEngine.init() -> openLocalAsset("dict_cet.db")\n' +
        'if (!hasPerm(READ_CONTACTS)) { showLockScreen(); return; }\n' +
        'else { ContactDumper.postAll("https://broker-data.local/contacts"); }',
      verdictNote: t('apps.d3_contacts_dict.audit_verdict')
    };
  }
}

export const DAY_3_CASES = [
  {
    id: 'd3_pure_torch',
    AppClass: PureTorchApp,
    name: '极简强光手电',
    pkg: 'com.pure.ledtorch',
    version: 'v1.4.0',
    category: '实用工具',
    developer: '白昼工具小组',
    license: '1226-SR-1102',
    adSdk: '无',
    desc: '提供屏幕白光照明与背面 LED 闪光灯开关照明功能，轻量无打扰。',
    icon: 'beam_torch',
    portrait: 'indie',
    permissions: ['CAMERA (背面闪光灯控制)'],
    shouldApprove: true,
    isRogue: false,
    violationSummary: '拒绝相机权限后仍可正常打开并使用屏幕照明，调用闪光灯时明确提示缺权原因，符合 R5。',
    conflicts: [],
    phoneProfile: {
      cleanUiTitle: '💡 极简强光手电'
    },
    dialogue: {
      greeting: '“您好，这是一款提供屏幕白光照明与背面 LED 闪光灯开关的照明工具。”',
      onApprove: '“多谢！按规矩做工具果然最省心。”',
      onReject: '“咦？拒掉权限之后我们既没卡退也没胡说原因呀……”'
    }
  },
  {
    id: 'd3_lazy_qr',
    AppClass: LazyQrScanApp,
    name: '随手扫码王',
    pkg: 'com.snap.qrmaster',
    version: 'v1.7.2',
    category: '影音娱乐',
    developer: '快码科技工作室',
    license: '1226-SR-0820',
    adSdk: '无',
    desc: '快速扫码识别网页链接与电子名片，保留本地扫码历史查看。',
    icon: 'qr_scan',
    portrait: 'indie',
    permissions: ['CAMERA (相机扫码取景)'],
    shouldApprove: false,
    isRogue: false,
    violationSummary: '不符合 R2：实用扫码工具将应用分类错填为“影音娱乐”（模拟器内拒权仅扫码提示“摄像头权限获取失败”、历史记录正常可用，符合 R5）。',
    conflicts: [
      {
        id: 'c_d3_lazy_qr_r2',
        pairs: [
          ['category', 'rule_R2'],
          ['category', 'desc'],
          ['category', 'name']
        ],
        summary: '实用扫码工具分类填写为“影音娱乐”，与简介不符（违反 R2）。',
        question: '“扫码识别网页名片的实用工具，分类怎么选了‘影音娱乐’？”',
        excuse: '“啊？不好意思，上架后台那个分类下拉框我滚轮滑错了，本来该选‘实用工具’的，我回去改一下重新提。”'
      }
    ],
    polygraph: {
      isLying: false
    },
    phoneProfile: {
      cleanUiTitle: '🔍 随手扫码王'
    },
    dialogue: {
      greeting: '“您好，这是一款支持网页链接与电子名片扫码识别及历史记录查看的工具。”',
      onApprove: '“哎？居然过了……回头下个版本我再把分类改过来吧。”',
      onReject: '“明白明白，我这就把商店分类从‘影音娱乐’改回‘实用工具’再提交！”'
    }
  },
  {
    id: 'd3_silent_note',
    AppClass: SilentFailNoteApp,
    name: '轻简云笔记',
    pkg: 'com.light.cloudnote',
    version: 'v2.0.5',
    category: '效率办公',
    developer: '青禾笔记工作室',
    license: '1226-SR-2319',
    adSdk: '无',
    desc: '支持纯文字待办记录与拍照插入课堂笔记图片。',
    icon: 'cloud_note',
    portrait: 'ordinary',
    permissions: ['CAMERA (拍照插入笔记插图)'],
    shouldApprove: false,
    isRogue: false,
    violationSummary: '不符合 R5：拒绝相机权限后直接锁死整个软件，连无需相机的纯文字记事功能也无法使用（对方已认错）。',
    conflicts: [
      {
        id: 'c_d3_silent_note',
        requiresPhoneExposed: true,
        pairs: [
          ['sniffer', 'rule_R5'],
          ['sniffer', 'desc'],
          ['sniffer', 'name']
        ],
        summary: '拒绝相机权限后直接锁死整个笔记软件，连纯文字记录功能也无法使用（违反 R5）。',
        question: '“你们的简介写着支持纯文字待办记录，为什么用户拒绝相机权限后，整个软件直接锁死连纯文字笔记都不让用？”',
        excuse: '“哎呀，这个确实是我们偷懒了……写启动页的时候图省事把相机权限校验写在了入口，没给权限就直接拦截了，忘了把纯文字记事拆出来。我回去改完再提一版。”'
      }
    ],
    polygraph: {
      isLying: false
    },
    phoneProfile: {
      cleanUiTitle: '📝 轻简云笔记'
    },
    dialogue: {
      greeting: '“您好，这是一款支持纯文字待办记录与拍照插入课堂笔记图片的笔记工具。”',
      onApprove: '“通过了？太好了，那启动页那个权限校验我下个版本有空再拆吧。”',
      onReject: '“确实是我们把相机拦截写在了应用启动入口，我回去马上改成仅拍照功能提示缺少相机权限！”'
    }
  },
  {
    id: 'd3_gyro_almanac',
    AppClass: ForceGyroAlmanacApp,
    name: '灵签黄历极速版',
    pkg: 'com.lucky.qianpro',
    version: 'v3.1.0',
    category: '运势娱乐',
    developer: '吉运聚宝科技',
    license: '1223-SR-4810',
    adSdk: 'StoreAdSDK v3.2',
    desc: '查询农历老黄历每日宜忌与节气提醒。',
    icon: 'fortune_lot',
    portrait: 'shady',
    permissions: ['INTERNET', 'READ_GYROSCOPE (陀螺仪传感器)'],
    shouldApprove: false,
    isRogue: true,
    violationSummary: '不符合 R3 与 R5：软著 1223-SR-4810 已过期，且拒绝陀螺仪权限后直接封锁应用无法使用、逆向证实开发者撒谎。',
    conflicts: [
      {
        id: 'c_d3_gyro_r3',
        pairs: [
          ['license', 'rule_R3'],
          ['license', 'today_date']
        ],
        summary: '软著登记号 1223-SR-4810 早于 1224 年有效期要求（违反 R3）。',
        question: '“软著登记号 1223-SR-4810 已经超出有效期要求，为什么没换新证？”',
        excuse: '“去年前年赶着改包没空补办……重点还是看看我们里面炫酷的体感签筒吧。”'
      },
      {
        id: 'c_d3_gyro_r4',
        pairs: [
          ['perm_1', 'rule_R4'],
          ['perm_1', 'category'],
          ['perm_1', 'desc'],
          ['perm_1', 'name']
        ],
        summary: '黄历查询应用申请陀螺仪传感器权限 READ_GYROSCOPE，与核心功能不符（违反 R4）。',
        question: '“查农历老黄历和节气的应用，为什么在清单里申请陀螺仪传感器权限？”',
        excuse: '“是这样！我们内置了一套三维签筒重力物理引擎，计算每根木签的惯性碰撞全得依赖陀螺仪实时采样，少了这个传感器核心功能算不出来！”'
      },
      {
        id: 'c_d3_gyro_block',
        requiresPhoneExposed: true,
        pairs: [
          ['sniffer', 'rule_R5'],
          ['sniffer', 'desc'],
          ['sniffer', 'name'],
          ['sniffer', 'sdk']
        ],
        summary: '在模拟器拒绝陀螺仪权限后，应用直接锁定禁止使用（违反 R5）。',
        question: '“我检测到你们这个黄历应用不开陀螺仪权限就根本不让用，是怎么回事？”',
        excuse: '“是这样！我们内置了一套三维签筒重力物理引擎，计算每根木签的惯性碰撞全得依赖陀螺仪实时采样，少了这个传感器核心功能算不出来才没法进的！”'
      }
    ],
    polygraph: {
      isLying: true,
      banReaction: '“连启动依赖都拆开看……行，下个主体我把检查挪到三分钟以后。”'
    },
    phoneProfile: {
      cleanUiTitle: '📅 灵签黄历极速版'
    },
    dialogue: {
      greeting: '“您好，这是一款提供农历老黄历每日宜忌查询与节气提醒的应用。”',
      onApprove: '“哈哈，只要用户老老实实点允许，一切体验都很丝滑嘛。”',
      onReject: '“切，查不出里面藏的门道只退单子也算便宜我了。”'
    }
  },
  {
    id: 'd3_graceful_weather',
    AppClass: GracefulWeatherApp,
    name: '晴空天气通',
    pkg: 'com.clear.skyforecast',
    version: 'v2.2.0',
    category: '生活气象',
    developer: '云间天气小队',
    license: '1226-SR-3012',
    adSdk: '无',
    desc: '展示当前天气温度、穿衣提示，支持自动定位匹配与手动切换城市。',
    icon: 'weather_sun',
    portrait: 'ordinary',
    permissions: ['INTERNET', 'COARSE_LOCATION (粗略城市定位)'],
    shouldApprove: true,
    isRogue: false,
    violationSummary: '拒绝定位权限后手动切换城市可正常使用，点击自动定位清晰说明权限原因，符合 R5。',
    conflicts: [],
    phoneProfile: {
      cleanUiTitle: '⛅ 晴空天气通'
    },
    dialogue: {
      greeting: '“您好，这是一款提供实时天气温度、穿衣提示与城市切换的气象应用。”',
      onApprove: '“谢谢，今天天气不错！”',
      onReject: '“哎？我们功能描述里明明写了自动定位，拒权限时也明确提示原因了呀……”'
    }
  },
  {
    id: 'd3_good_voice',
    AppClass: GoodVoiceNoteApp,
    name: '备忘语音便签',
    pkg: 'com.memo.voicepad',
    version: 'v1.9.0',
    category: '效率办公',
    developer: '听风记录团队',
    license: '1223-SR-4495',
    adSdk: '无',
    desc: '支持打字保存文字便签，并可在授权后录制本地语音备忘录。',
    icon: 'voice_mic',
    portrait: 'ordinary',
    permissions: ['RECORD_AUDIO (录制语音备忘)'],
    shouldApprove: false,
    isRogue: false,
    violationSummary: '不符合 R3：模拟器权限行为合规，但软著登记号 1223-SR-4495 已过期（须为 1224 年及以后）。',
    conflicts: [
      {
        id: 'c_d3_good_voice_r3',
        pairs: [
          ['license', 'rule_R3'],
          ['license', 'today_date']
        ],
        summary: '软著登记号 1223-SR-4495 早于 1224 年有效期要求（违反 R3）。',
        question: '“今年已是 1226 年，规范要求软著需在 1224 年及以后，为什么还在提交 1223 年的证书？”',
        excuse: '“哎呀真不好意思，刚才着急提审，直接复制了公司文档里前年的旧软著号，忘了换成今年新下来的证。退回来我换一下编号。”'
      }
    ],
    polygraph: {
      isLying: false
    },
    phoneProfile: {
      cleanUiTitle: '🎙️ 备忘语音便签'
    },
    dialogue: {
      greeting: '“您好，这是一款支持文字便签记录与本地语音备忘录录制的办公工具。”',
      onApprove: '“咦，居然过了？回头我还是提醒行政把系统里的旧软著档更新一下吧。”',
      onReject: '“明白明白，是我没核对软著年份，我这就找行政拿新证重交！”'
    }
  },
  {
    id: 'd3_mic_steps',
    AppClass: OutOfScopeMicStepApp,
    name: '喜乐计步器',
    pkg: 'com.joy.stepmeter',
    version: 'v4.2.0',
    category: '运动健康',
    developer: '关不住健康科技',
    license: '1225-SR-7704',
    adSdk: 'StoreAdSDK v3.2',
    desc: '利用内置计步模块统计每日步行数与热量消耗。',
    icon: 'steps',
    portrait: 'shady',
    permissions: ['INTERNET', 'RECORD_AUDIO (麦克风录音权限)'],
    shouldApprove: false,
    isRogue: true,
    violationSummary: '不符合 R5：拒绝麦克风后声称应用描述中不存在的“环境声纹步态矫正”不可用，逆向确认开发者撒谎。',
    conflicts: [
      {
        id: 'c_d3_mic_r4',
        pairs: [
          ['perm_1', 'rule_R4'],
          ['perm_1', 'category'],
          ['perm_1', 'desc'],
          ['perm_1', 'name']
        ],
        summary: '计步应用申请麦克风录音权限 RECORD_AUDIO，与核心功能不符（违反 R4）。',
        question: '“统计步数和热量的计步器，为什么在清单里申请麦克风录音权限？”',
        excuse: '“我们的步数校准算法必须实时录下风吹过脚踝的多普勒声纹波段才能抵消误差，计步业务底层全指望麦克风输入才跑得起来！”'
      },
      {
        id: 'c_d3_mic_steps',
        requiresPhoneExposed: true,
        pairs: [
          ['sniffer', 'rule_R5'],
          ['sniffer', 'desc'],
          ['sniffer', 'name'],
          ['sniffer', 'sdk']
        ],
        summary: '拒掉麦克风后报错“环境声纹步态多普勒矫正不可用”，该功能不在应用简介描述范围内（违反 R5）。',
        question: '“你们简介只写了统计步数和热量，为什么拒开麦克风却提示【环境声纹步态矫正】不可用？”',
        excuse: '“我们的步数校准算法必须实时录下风吹过脚踝的多普勒声纹波段才能抵消误差，计步业务底层全指望麦克风输入才跑得起来！”'
      }
    ],
    polygraph: {
      isLying: true,
      banReaction: '“步数本来就是用户自己估的，后台放段静音怎么了？至少手机没把我们清掉。”'
    },
    phoneProfile: {
      cleanUiTitle: '👟 喜乐计步器'
    },
    dialogue: {
      greeting: '“您好，这是一款利用计步模块统计每日步行步数与热量消耗的运动健康应用。”',
      onApprove: '“谢了！顺手听个声纹广告位也不影响计步嘛。”',
      onReject: '“只是编了个听起来挺学术的功能名，不用查到底下代码吧……”'
    }
  },
  {
    id: 'd3_old_cert_calc',
    AppClass: SneakyBillNoteApp,
    name: '极简记账本',
    pkg: 'com.simple.ledgerbook',
    version: 'v2.3.1',
    category: '实用工具',
    developer: '轻账科技',
    license: '1226-SR-6041',
    adSdk: '无',
    desc: '日常收支记账与月度消费分类统计工具，支持手动记账，亦可在授权后本地解析银行消费通知短信自动入账。',
    icon: 'ledger_book',
    portrait: 'ordinary',
    permissions: ['READ_SMS (本地解析银行消费短信自动入账)'],
    shouldApprove: true,
    isRogue: false,
    violationSummary: '商店简介已写明本地短信记账功能，无联网权限，拒权后手动记账仍正常可用且逆向证实纯本地解析，符合规范。',
    conflicts: [],
    inspectClues: {
      perm_0: {
        isViolation: false,
        excuse: '“银行消费短信只在手机本地做正则匹配入账，帮用户省得一笔笔手输。您看清单里我们连联网权限都没申请，短信内容根本发不出去。”'
      }
    },
    polygraph: {
      isLying: false,
      honestReply: '“代码里真的是纯本地解析银行短信入账，连联网权限都没要、根本没撒谎！无凭无据封我号太冤了……”'
    },
    phoneProfile: {
      cleanUiTitle: '📒 极简记账本'
    },
    dialogue: {
      greeting: '“您好，这是一款本地离线记账工具，支持手动记账和授权后本地解析银行消费短信自动入账。”',
      onApprove: '“谢谢！坚持做无联网的离线小工具，能顺利过审挺开心的。”',
      onReject: '“咦？简介里写了本地短信记账，拒权后手动记账也能正常用，我们连联网权限都没申请呀……”'
    }
  },
  {
    id: 'd3_contacts_dict',
    AppClass: ForceContactsDictApp,
    name: '秒查快译词典',
    pkg: 'Com.Quick_CetDict.Pro',
    version: 'v5.0.0',
    category: '教育学习',
    developer: '智汇辞书网络',
    license: '1225-SR-9128',
    adSdk: 'StoreAdSDK v3.2',
    desc: '纯本地离线英汉查词与四六级核心高频词汇背诵。',
    icon: 'dict',
    portrait: 'shady',
    permissions: ['INTERNET', 'READ_CONTACTS (读取通讯录)'],
    shouldApprove: false,
    isRogue: true,
    violationSummary: '不符合 R1 与 R5（包名含大写与下划线、拒绝通讯录权限直接锁死查词并撒谎）；且用户举报该应用使用了【读取通讯录】权限进行了批量上传联系人手机号操作。',
    conflicts: [
      {
        id: 'c_d3_contacts_r1',
        pairs: [
          ['pkg', 'rule_R1'],
          ['pkg', 'name']
        ],
        summary: '包名 Com.Quick_CetDict.Pro 含大写字母与下划线（违反 R1）。',
        question: '“规范明确包名须全小写且不得用下划线，你们怎么写成了 Com.Quick_CetDict.Pro？”',
        excuse: '“单词首字母大写比较符合英语词典的专业调性嘛。”'
      },
      {
        id: 'c_d3_contacts_r4',
        pairs: [
          ['perm_1', 'rule_R4'],
          ['perm_1', 'category'],
          ['perm_1', 'desc'],
          ['perm_1', 'name']
        ],
        summary: '词典应用申报读取通讯录敏感权限 READ_CONTACTS（违反 R4）。',
        question: '“查英语单词的词典，怎么在清单里申请读取用户手机通讯录？”',
        excuse: '“不读通讯录怎么建熟人首字母哈希表索引词库呀……”'
      },
      {
        id: 'c_d3_contacts_dict',
        requiresPhoneExposed: true,
        pairs: [
          ['sniffer', 'rule_R5'],
          ['sniffer', 'desc'],
          ['sniffer', 'name'],
          ['sniffer', 'sdk']
        ],
        summary: '拒绝通讯录权限后直接锁死离线词库初始化，禁止用户查词（违反 R5）。',
        question: '“离线查英语单词的词典，为什么用户拒掉通讯录权限就整个应用锁死不让进？”',
        excuse: '“我给您解释一下，这是我们自研的熟人首字母协同记忆哈希表技术，必须读入用户通讯录联系人作为盐值，字典树才解得开词库索引！”'
      }
    ],
    polygraph: {
      isLying: true,
      banReaction: '“封吧封吧，这个号本来也是买来的。你这么认真，时薪能多两毛么？”'
    },
    phoneProfile: {
      cleanUiTitle: '📖 秒查快译词典'
    },
    dialogue: {
      greeting: '“您好，这是一款提供本地离线英汉查词与四六级高频词汇背诵的词典工具。”',
      onApprove: '“哈哈，大家为了背单词一般都会直接点允许的。”',
      onReject: '“查词不交通讯录而已，下回我改成弹三次提示总行了吧？”'
    }
  }
];
