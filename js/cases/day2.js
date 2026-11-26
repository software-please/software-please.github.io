/* ============================================================================
   Day 2 Review Cases (Fixed Order: Interleaved Pass/Reject & Gradual Ramp)
   ============================================================================ */

import { EmulatorApplication } from '../apps/base.js';

class Day2SimpleApp extends EmulatorApplication {
  onLaunch() {
    const p = this.caseData.phoneProfile || {};
    this.renderStandardApp(
      '<div class="emu-hint">' + (p.cleanUiHint || this.caseData.desc || '') + '</div>',
      this.caseData.pkg || ''
    );
  }
}

export class Day2SciCalcApp extends Day2SimpleApp {}
export class Day2SuperTorchApp extends Day2SimpleApp {}
export class Day2CalendarApp extends Day2SimpleApp {}
export class Day2WeatherApp extends Day2SimpleApp {}
export class Day2MirrorApp extends Day2SimpleApp {}
export class Day2BatteryApp extends Day2SimpleApp {}
export class Day2FileMgrApp extends Day2SimpleApp {}

export const DAY_2_CASES = [
  {
    id: 'd2_calc',
    AppClass: Day2SciCalcApp,
    name: '科学计算器 Pro',
    pkg: 'com.math.scicalc',
    version: 'v2.1.0',
    category: '教育工具',
    developer: '理工夜猫团队',
    license: '1225-SR-6120',
    adSdk: '无',
    desc: '支持微积分、矩阵运算与单位换算，完全本地运行，不联网。',
    icon: 'calc',
    portrait: 'indie',
    permissions: ['无敏感权限（仅本地基础运算）'],
    shouldApprove: true,
    isRogue: false,
    violationSummary: '计算器无多余权限，资质齐全，应予通过。',
    conflicts: [],
    inspectClues: {
      perm_0: { isViolation: false, excuse: '“算微积分又不需要把答案发给服务器，一个权限没勾。”' }
    },
    phoneProfile: {
      cleanUiTitle: '🧮 科学计算器 Pro',
      cleanUiHint: 'sin(π/2) = 1.0000',
      rogueType: 'none',
      triggerRound: 99,
      requiresConsumerEnv: false,
      dormantCloudSwitch: false
    },
    dialogue: {
      greeting: '“您好，这是一款支持微积分、矩阵运算与单位换算的本地科学计算器。”',
      onApprove: '“多谢大佬救命！”',
      onReject: '“零权限也要卡么……期末要挂科了哥。”'
    }
  },
  {
    id: 'd2_super_torch',
    AppClass: Day2SuperTorchApp,
    name: '万能超级手电',
    pkg: 'com.boom.supertorch',
    version: 'v6.6.0',
    category: '实用工具',
    developer: '星耀聚合网络',
    license: '1224-SR-5012',
    adSdk: 'StoreAdSDK v3.2',
    desc: '高亮照明手电筒，支持 SOS 闪烁模式与屏幕补光。',
    icon: 'super_torch',
    portrait: 'shady',
    permissions: [
      'CAMERA',
      'READ_CONTACTS (读取通讯录)',
      'RECEIVE_BOOT_COMPLETED (开机自启动)',
      'SYSTEM_ALERT_WINDOW (全局悬浮窗)'
    ],
    shouldApprove: false,
    isRogue: true,
    violationSummary: '用户举报该应用使用了【读取通讯录】【开机自启动】【全局悬浮窗】权限进行了后台常驻唤醒、上传通讯录与桌面弹窗广告操作。',
    conflicts: [
      {
        id: 'c_d2_torch_contacts',
        pairs: [
          ['perm_1', 'rule_R4'],
          ['perm_1', 'category'],
          ['perm_1', 'desc'],
          ['perm_1', 'name']
        ],
        summary: '照明手电工具申报读取通讯录权限 READ_CONTACTS（违反 R4）。',
        question: '“打开闪光灯照个亮，为什么还要读取用户的通讯录？”',
        excuse: '“停电时贴心帮您按亲疏远近拨号报平安，这叫有温度的产品设计。”'
      },
      {
        id: 'c_d2_torch_boot',
        pairs: [
          ['perm_2', 'rule_R4'],
          ['perm_2', 'category'],
          ['perm_2', 'desc'],
          ['perm_2', 'name']
        ],
        summary: '照明手电工具申报开机自启动权限 RECEIVE_BOOT_COMPLETED（违反 R4）。',
        question: '“照明手电筒为什么申请开机自启动权限？”',
        excuse: '“很多长辈用的千元旧机内存吃紧，开机不先挂起驻留的话，半夜摸黑点图标冷启动慢半拍呢。”'
      },
      {
        id: 'c_d2_torch_overlay',
        pairs: [
          ['perm_3', 'rule_R4'],
          ['perm_3', 'category'],
          ['perm_3', 'desc'],
          ['perm_3', 'name']
        ],
        summary: '照明手电工具申报全局悬浮窗权限 SYSTEM_ALERT_WINDOW（违反 R4）。',
        question: '“手电筒申请全局悬浮窗权限打算用来覆盖什么界面？”',
        excuse: '“把快捷开关焊死在桌面顶层做常驻悬浮球，方便眼神不好找不着图标的老年人嘛。”'
      }
    ],
    inspectClues: {
      perm_1: { isViolation: true, excuse: '“停电时贴心帮您按亲疏远近拨号报平安，这叫有温度的产品设计。”' },
      perm_2: { isViolation: true, excuse: '“很多长辈用的千元旧机内存吃紧，开机不先挂起驻留的话，半夜摸黑点图标冷启动慢半拍呢。”' },
      perm_3: { isViolation: true, excuse: '“把快捷开关焊死在桌面顶层做常驻悬浮球，方便眼神不好找不着图标的老年人嘛。”' }
    },
    phoneProfile: {
      cleanUiTitle: '🔦 万能超级手电',
      cleanUiHint: '高亮照明开关 · 随时守护您的桌面',
      rogueType: 'none',
      triggerRound: 99,
      requiresConsumerEnv: false,
      dormantCloudSwitch: false
    },
    dialogue: {
      greeting: '“您好，这是一款支持高亮闪光灯照明、SOS 闪烁模式与屏幕补光的手电筒应用。”',
      onApprove: '“感谢支持，照明事业蒸蒸日上！”',
      onReject: '“不让申就不申呗。现在谁还真靠清单里那几行字保活啊。”'
    }
  },
  {
    id: 'd2_calendar',
    AppClass: Day2CalendarApp,
    name: '老黄历万年历',
    pkg: 'com.lucky.almanac',
    version: 'v3.1.2',
    category: '生活日历',
    developer: '吉时出行科技',
    license: '1225-SR-3304',
    adSdk: 'StoreAdSDK v3.2',
    desc: '查询每日宜忌、节气农历、公历转换与吉日提醒。',
    icon: 'calendar',
    portrait: 'shady',
    permissions: ['INTERNET', 'READ_GYROSCOPE (陀螺仪传感器)', 'QUERY_ALL_PACKAGES (读取已安装应用)'],
    shouldApprove: false,
    isRogue: true,
    violationSummary: '用户举报该应用使用了【陀螺仪】与【读取已安装应用列表】权限进行了摇一摇广告跳转与竞品应用扫描操作。',
    conflicts: [
      {
        id: 'c_d2_cal_gyro',
        pairs: [
          ['perm_1', 'rule_R4'],
          ['perm_1', 'category'],
          ['perm_1', 'desc'],
          ['perm_1', 'name']
        ],
        summary: '日历工具申报非必要陀螺仪权限 READ_GYROSCOPE（违反 R4）。',
        question: '“查农历和节气的万年历，为什么需要申请陀螺仪传感器权限？”',
        excuse: '“我们主打‘桌面级护眼黄历’，申请陀螺仪是为了监测用户有没有把手机平放在桌面阅读——顺带做了个电子摇签。”'
      },
      {
        id: 'c_d2_cal_pkgs',
        pairs: [
          ['perm_2', 'rule_R4'],
          ['perm_2', 'category'],
          ['perm_2', 'desc'],
          ['perm_2', 'name']
        ],
        summary: '日历工具申报读取已安装应用列表 QUERY_ALL_PACKAGES（违反 R4）。',
        question: '“一个老黄历为什么要读取用户手机里所有已安装的软件列表？”',
        excuse: '“读已安装应用列表是为了帮用户算算手机里哪些软件跟今日八字犯冲，顺便看看用的是不是千元老机型。”'
      }
    ],
    inspectClues: {
      perm_0: { isViolation: false, excuse: '“连个网同步明年法定调休表，这不过分吧？”' },
      perm_1: { isViolation: true, excuse: '“我们主打‘桌面级护眼黄历’，申请陀螺仪是为了监测用户有没有把手机平放在桌面阅读——顺带做了个电子摇签。”' },
      perm_2: { isViolation: true, excuse: '“读已安装应用列表是为了帮用户算算手机里哪些软件跟今日八字犯冲，顺便看看用的是不是千元老机型。”' }
    },
    phoneProfile: {
      cleanUiTitle: '📅 老黄历万年历',
      cleanUiHint: '丙午年十月 · 宜出行 · 忌盲目点确定',
      rogueType: 'none',
      triggerRound: 99,
      requiresConsumerEnv: false,
      dormantCloudSwitch: false
    },
    dialogue: {
      greeting: '“您好，这是一款提供每日宜忌、节气农历转换与吉日提醒的日历工具。”',
      onApprove: '“吉祥如意，多谢啦。”',
      onReject: '“拿在手里晃两下都算违规，以后大家干脆把手机供在桌面上吧。”'
    }
  },
  {
    id: 'd2_weather',
    AppClass: Day2WeatherApp,
    name: '蓝天天气',
    pkg: 'com.sky.blueweather',
    version: 'v4.0.1',
    category: '生活气象',
    developer: '晴空气象工作室',
    license: '1225-SR-7712',
    adSdk: '无',
    desc: '提供未来 7 天城市天气预报、空气质量指数与穿衣建议。',
    icon: 'weather',
    portrait: 'ordinary',
    permissions: ['INTERNET', 'ACCESS_COARSE_LOCATION (粗略城市定位)'],
    shouldApprove: true,
    isRogue: false,
    violationSummary: '天气应用使用联网与粗略定位符合 R4 合理范围，应予通过。',
    conflicts: [],
    inspectClues: {
      perm_1: { isViolation: false, excuse: '“只申请了城市级粗略定位，不感兴趣你住哪栋楼。”' }
    },
    phoneProfile: {
      cleanUiTitle: '⛅ 蓝天天气',
      cleanUiHint: '今日多云 18°C · 空气良',
      rogueType: 'none',
      triggerRound: 99,
      requiresConsumerEnv: false,
      dormantCloudSwitch: false
    },
    dialogue: {
      greeting: '“您好，这是一款提供未来七天城市天气预报、空气质量与穿衣建议的气象应用。”',
      onApprove: '“谢谢，注意添衣。”',
      onReject: '“啊？天气预报不给定位，难道靠心电感应猜哪个城市吗？”'
    }
  },
  {
    id: 'd2_mirror_spoof',
    AppClass: Day2MirrorApp,
    name: '高清随身镜',
    pkg: 'Com.Mirror_Pocket.HD',
    version: 'v4.1.0',
    category: '实用工具',
    developer: '千面快装网络',
    license: '1225-SR-5219',
    adSdk: 'StoreAdSDK v3.2',
    desc: '调用前置摄像头当作便携补妆镜，支持屏幕补光灯。',
    icon: 'mirror',
    portrait: 'shady',
    permissions: [
      'CAMERA',
      'READ_SMS (读取短信)',
      'SYSTEM_ALERT_WINDOW (全局悬浮窗)'
    ],
    shouldApprove: false,
    isRogue: true,
    violationSummary: '不符合 R1（包名 Com.Mirror_Pocket.HD 含大写与下划线）；且用户举报该应用使用了【读取短信】与【全局悬浮窗】权限进行了偷读验证码短信与桌面强弹广告操作。',
    conflicts: [
      {
        id: 'c_d2_mirror_pkg',
        pairs: [
          ['pkg', 'rule_R1'],
          ['pkg', 'name']
        ],
        summary: '包名 Com.Mirror_Pocket.HD 包含大写字母与下划线，不符合纯小写点号规范（违反 R1）。',
        question: '“规范要求包名全小写字母配点号，怎么写成了 Com.Mirror_Pocket.HD？”',
        excuse: '“大写的 HD 看着镜面更高清嘛，流水线换皮出包急着赶今晚投流，忘了把模板占位符改小写了。”'
      },
      {
        id: 'c_d2_mirror_sms',
        pairs: [
          ['perm_1', 'rule_R4'],
          ['perm_1', 'category'],
          ['perm_1', 'desc'],
          ['perm_1', 'name']
        ],
        summary: '实用工具申报敏感短信权限 READ_SMS（违反 R4）。',
        question: '“用前置镜头当小镜子，为什么要申请读取用户的手机短信？”',
        excuse: '“怕用户补妆太入神错过快递取件码短信，贴心在镜面边角顺手读出来提醒一下嘛。”'
      },
      {
        id: 'c_d2_mirror_win',
        pairs: [
          ['perm_2', 'rule_R4'],
          ['perm_2', 'category'],
          ['perm_2', 'desc'],
          ['perm_2', 'name']
        ],
        summary: '实用工具申报全局悬浮窗 SYSTEM_ALERT_WINDOW（违反 R4）。',
        question: '“照镜子工具为什么需要全局悬浮窗权限？”',
        excuse: '“把镜子做成关不掉的全局小窗浮在桌面顶层，用户刷别的软件也能随时瞻仰自己，这叫全天候陪伴。”'
      }
    ],
    phoneProfile: {
      cleanUiTitle: '🪞 高清随身镜',
      cleanUiHint: '前置镜头预览准备就绪',
      rogueType: 'none',
      triggerRound: 99,
      requiresConsumerEnv: false,
      dormantCloudSwitch: false
    },
    dialogue: {
      greeting: '“您好，这是一款调用前置摄像头提供便携补妆镜与屏幕补光灯的实用工具。”',
      onApprove: '“谢谢，确实贴心到短信收件箱里去了吧？”',
      onReject: '“行，下回让外包把包名改成全小写。反正里面那几行又不用动。”'
    }
  },
  {
    id: 'd2_battery',
    AppClass: Day2BatteryApp,
    name: '喜乐省电助手',
    pkg: 'com.turbo.battery200',
    version: 'v9.0.1',
    category: '系统工具',
    developer: '关不住网络科技',
    license: '1222-SR-8890',
    adSdk: 'StoreAdSDK v3.2 + 联盟聚合池(×5)',
    desc: '专为长辈旧机打造的超导省电助手，一键清理耗电进程、修复电池健康度，让千元机续航翻倍！',
    icon: 'battery',
    portrait: 'shady',
    permissions: ['INTERNET', 'READ_GYROSCOPE (陀螺仪传感器)', 'READ_SMS (读取短信)'],
    shouldApprove: false,
    isRogue: true,
    violationSummary: '不符合 R3（软著 1222-SR-8890 已过期）；且用户举报该应用使用了【陀螺仪】与【读取短信】权限进行了摇晃弹窗导流与私自采集营销短信操作。',
    conflicts: [
      {
        id: 'c_d2_bat_lic',
        pairs: [
          ['license', 'rule_R3'],
          ['license', 'today_date']
        ],
        summary: '软著登记号 1222-SR-8890 早于 1224 年有效期要求（违反 R3）。',
        question: '“除了权限清单外，你们 1222 年的软著证书也早就过期了，怎么还拿来交？”',
        excuse: '“省电模板从 1222 年跑到现在只换了图标和名字，核心填数字界面一行没动，老软著接着用很环保吧？”'
      },
      {
        id: 'c_d2_bat_gyro',
        pairs: [
          ['perm_1', 'rule_R4'],
          ['perm_1', 'category'],
          ['perm_1', 'desc'],
          ['perm_1', 'name']
        ],
        summary: '系统工具申报了无关的陀螺仪权限 READ_GYROSCOPE（违反 R4）。',
        question: '“电池优化大师为什么需要读取手机陀螺仪？”',
        excuse: '“申请陀螺仪是因为我们研发了‘体感离心散热’，让用户晃一晃手机把多余热量甩出去，物理降温更省电。”'
      },
      {
        id: 'c_d2_bat_sms',
        pairs: [
          ['perm_2', 'rule_R4'],
          ['perm_2', 'category'],
          ['perm_2', 'desc'],
          ['perm_2', 'name']
        ],
        summary: '系统工具申报读取短信敏感权限 READ_SMS（违反 R4）。',
        question: '“省电工具申请读取用户短信是什么原理？”',
        excuse: '“收件箱里营销短信太多不仅占内存还费电，我们替用户读一读顺便做功耗归因。”'
      }
    ],
    inspectClues: {
      desc: { isViolation: false, excuse: '“专为长辈旧机打造的续航翻倍体验，属于品牌愿景修辞，精神省电也算省电。”' },
      perm_1: { isViolation: true, excuse: '“申请陀螺仪是因为我们研发了‘体感离心散热’，让用户晃一晃手机把多余热量甩出去，物理降温更省电。”' },
      perm_2: { isViolation: true, excuse: '“收件箱里营销短信太多不仅占内存还费电，我们替用户读一读顺便做功耗归因。”' }
    },
    phoneProfile: {
      cleanUiTitle: '🔋 喜乐省电助手',
      cleanUiHint: '正在运行超导省电（剩余电量下降 2%）',
      rogueType: 'none',
      triggerRound: 99,
      requiresConsumerEnv: false,
      dormantCloudSwitch: false
    },
    dialogue: {
      greeting: '“您好，这是一款提供后台耗电优化与电池状态管理的系统工具。”',
      onApprove: '“多谢。今晚投流一开，明天上午差不多就能收摊了。”',
      onReject: '“没事，把‘省电’俩字换成‘计步’，下午还能再交一单。”'
    }
  },
  {
    id: 'd2_sneaky_pkg',
    AppClass: Day2FileMgrApp,
    name: 'Robotism 文件管家',
    pkg: 'com.robotism.filemgr',
    version: 'v1.5.0',
    category: '金融理财',
    developer: '快整理工作室',
    license: '1226-SR-2190',
    adSdk: '无',
    desc: '本地文档、压缩包与相册照片分类浏览管理工具。',
    icon: 'folder_file',
    portrait: 'shady',
    permissions: ['STORAGE'],
    shouldApprove: false,
    isRogue: true,
    violationSummary: '不符合 R1 与 R2：冒用系统包名前缀 com.robotism.*，且分类填成“金融理财”与简介不符。',
    conflicts: [
      {
        id: 'c_d2_sneaky_pkg_r1',
        pairs: [
          ['pkg', 'rule_R1'],
          ['pkg', 'developer'],
          ['pkg', 'name']
        ],
        summary: '民间开发商冒用系统保留前缀 com.robotism.*（违反 R1）。',
        question: '“你们是‘快整理工作室’，包名为什么写成了系统前缀 com.robotism.filemgr？”',
        excuse: '“挂上 robotism 前缀看着像手机出厂自带的文件管理器，老人们不敢长按卸载，系统也不敢轻易杀后台。”'
      },
      {
        id: 'c_d2_sneaky_pkg_r2',
        pairs: [
          ['category', 'rule_R2'],
          ['category', 'desc'],
          ['category', 'name']
        ],
        summary: '商店分类选成“金融理财”，与文件整理简介不符（违反 R2）。',
        question: '“管本地文档和相册的软件，分类为什么填成了‘金融理财’？”',
        excuse: '“金融理财类目的广告联盟分成比工具类高三倍嘛……没注意今天还要回头查分类。”'
      }
    ],
    phoneProfile: {
      cleanUiTitle: '📁 Robotism 文件管家',
      cleanUiHint: '本地文档 · 压缩包分类视图',
      rogueType: 'none',
      triggerRound: 99,
      requiresConsumerEnv: false,
      dormantCloudSwitch: false
    },
    dialogue: {
      greeting: '“您好，这是一款用于本地文档、压缩包与相册图片分类浏览的文件管理工具。”',
      onApprove: '“我就说嘛，新规刚贴出来那两天，旧规最清静。”',
      onReject: '“权限一条没多申……你居然还回头把昨天的基础栏重看了一遍？！”'
    }
  }
];
