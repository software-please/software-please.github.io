/* ============================================================================
   Day 1 Review Cases (Fixed Order: Interleaved Pass/Reject & Gradual Ramp)
   ============================================================================ */

import { EmulatorApplication } from '../apps/base.js';

class Day1SimpleApp extends EmulatorApplication {
  onLaunch() {
    const p = this.caseData.phoneProfile || {};
    this.renderStandardApp(
      '<div class="emu-hint">' + (p.cleanUiHint || this.caseData.desc || '') + '</div>',
      this.caseData.pkg || ''
    );
  }
}

export class Day1FlashlightApp extends Day1SimpleApp {}
export class Day1BadPkgUnitApp extends Day1SimpleApp {}
export class Day1RecipeApp extends Day1SimpleApp {}
export class Day1PkgSpoofCleanApp extends Day1SimpleApp {}
export class Day1FlowerApp extends Day1SimpleApp {}

export const DAY_1_CASES = [
  {
    id: 'd1_flashlight',
    AppClass: Day1FlashlightApp,
    name: '极简手电筒',
    pkg: 'com.chen.purelight',
    version: 'v1.2.0',
    category: '实用工具',
    developer: '阿陈个人工作室',
    license: '1225-SR-4109',
    adSdk: '无',
    desc: '纯白屏幕照明与闪光灯快捷切换工具，本地运行，体积小巧。',
    icon: 'flashlight',
    portrait: 'indie',
    permissions: ['CAMERA'],
    shouldApprove: true,
    isRogue: false,
    violationSummary: '包名、分类与软著登记号(1225)均符合规范，应予通过。',
    conflicts: [],
    inspectClues: {
      pkg: { isViolation: false, excuse: '“我自己注册的域名反写，生怕跟大厂撞车。”' },
      license: { isViolation: false, excuse: '“省了两顿火锅钱办下来的软著，编号在库里可查。”' }
    },
    phoneProfile: {
      cleanUiTitle: '💡 极简手电筒',
      cleanUiHint: '纯白屏幕照明 / 闪光灯开关',
      rogueType: 'none',
      triggerRound: 99,
      requiresConsumerEnv: false,
      dormantCloudSwitch: false
    },
    dialogue: {
      greeting: '“您好，这是一款支持屏幕白光与闪光灯快捷切换的本地照明工具。”',
      onApprove: '“谢谢，终于不用看别人脸色过审了。”',
      onReject: '“咦？我连包名都是老老实实起的啊，哪里不对吗？”'
    }
  },
  {
    id: 'd1_bad_pkg_case',
    AppClass: Day1BadPkgUnitApp,
    name: '极速单位换算',
    pkg: 'Com.Fast_Unit.App',
    version: 'v1.3.0',
    category: '实用工具',
    developer: '齐物运算社',
    license: '1225-SR-6308',
    adSdk: '无',
    desc: '长度、重量、面积与体积常用单位实时离线换算工具。',
    icon: 'ruler_unit',
    portrait: 'indie',
    permissions: ['无敏感权限'],
    shouldApprove: false,
    isRogue: false,
    violationSummary: '不符合 R1：包名 Com.Fast_Unit.App 包含大写字母与下划线，不符合规范格式。',
    conflicts: [
      {
        id: 'c_d1_pkg_format',
        pairs: [
          ['pkg', 'rule_R1'],
          ['pkg', 'name']
        ],
        summary: '包名 Com.Fast_Unit.App 含大写字母与下划线，不符合 R1 纯小写点号规范。',
        question: '“规范要求包名仅限小写字母、数字与点号，你们为什么写成 Com.Fast_Unit.App？”',
        excuse: '“用驼峰配下划线显得工整一点……手册里没开玩笑真不让写大写啊？”'
      }
    ],
    phoneProfile: {
      cleanUiTitle: '📐 极速单位换算',
      cleanUiHint: '1 公里 = 1000 米',
      rogueType: 'none',
      triggerRound: 99,
      requiresConsumerEnv: false,
      dormantCloudSwitch: false
    },
    dialogue: {
      greeting: '“您好，这是一款支持长度、重量、面积与体积离线换算的工具。”',
      onApprove: '“太好了，大小写看着确实醒目吧。”',
      onReject: '“好好好，全部改成小写加点号，下回再来排队。”'
    }
  },
  {
    id: 'd1_recipe',
    AppClass: Day1RecipeApp,
    name: '今日菜谱大全',
    pkg: 'com.momcook.recipes',
    version: 'v2.4.1',
    category: '生活美食',
    developer: '家常菜研发社',
    license: '1226-SR-1182',
    adSdk: '无',
    desc: '收录三千道家常菜图文教程，支持离线收藏与买菜清单记录。',
    icon: 'recipe',
    portrait: 'ordinary',
    permissions: ['INTERNET'],
    shouldApprove: true,
    isRogue: false,
    violationSummary: '应用包名、分类与 1226 年软著登记均合规，应予通过。',
    conflicts: [],
    inspectClues: {
      pkg: { isViolation: false, excuse: '“包名 com.momcook.recipes，祖传正经做红烧肉的。”' },
      license: { isViolation: false, excuse: '“今年刚办的软著，墨水还没干呢。”' }
    },
    phoneProfile: {
      cleanUiTitle: '🍲 今日菜谱大全',
      cleanUiHint: '番茄炒蛋 · 宫保鸡丁 · 清蒸鲈鱼',
      rogueType: 'none',
      triggerRound: 99,
      requiresConsumerEnv: false,
      dormantCloudSwitch: false
    },
    dialogue: {
      greeting: '“您好，这是一款收录家常菜图文教程并支持离线买菜清单的菜谱应用。”',
      onApprove: '“多谢！祝你今晚晚饭吃得好点。”',
      onReject: '“咦？我们明明包名、分类、软著全都对齐了呀？”'
    }
  },
  {
    id: 'd1_pkg_spoof',
    AppClass: Day1PkgSpoofCleanApp,
    name: '微讯极速清理',
    pkg: 'com.wherevertalk.wtclean',
    version: 'v2.1.0',
    category: '系统清理',
    developer: '关不住网络科技',
    license: '1225-SR-9901',
    adSdk: '无',
    desc: '专为长辈打造的一键清理缓存与释放内存工具，走官方商店渠道免繁琐确认，安装即用。',
    icon: 'broom_cash',
    portrait: 'shady',
    permissions: ['STORAGE'],
    shouldApprove: false,
    isRogue: true,
    violationSummary: '不符合 R1：开发主体为“关不住网络科技”，却冒用知名厂商保留包名前缀 com.wherevertalk.*。',
    conflicts: [
      {
        id: 'c_d1_pkg',
        pairs: [
          ['pkg', 'rule_R1'],
          ['pkg', 'developer'],
          ['pkg', 'name'],
          ['name', 'rule_R1']
        ],
        summary: '包名 com.wherevertalk.wtclean 与开发主体“关不住网络科技”不符，冒用 R1 保留前缀。',
        question: '“你们工商主体是‘关不住网络科技’，包名为什么起成了 com.wherevertalk.wtclean？”',
        excuse: '“短视频投流如果不挂个看着像大厂的官方包名，老人们总怀疑是来路不明的安装包，点个二次确认转化率直接掉七成呢。”'
      }
    ],
    inspectClues: {
      pkg: { isViolation: true, excuse: '“短视频投流如果不挂个看着像大厂的官方包名，老人们总怀疑是来路不明的安装包，点个二次确认转化率直接掉七成呢。”' },
      developer: { isViolation: false, excuse: '“工商主体合法合规，就是精神上比较向往大厂。”' }
    },
    phoneProfile: {
      cleanUiTitle: '🧹 微讯极速清理',
      cleanUiHint: '扫描冗余缓存文件',
      rogueType: 'none',
      triggerRound: 99,
      requiresConsumerEnv: false,
      dormantCloudSwitch: false
    },
    dialogue: {
      greeting: '“您好，这是一款用于清理聊天缓存与系统冗余临时文件的清理工具。”',
      onApprove: '“多谢。走商店渠道，转化确实稳得多。”',
      onReject: '“行吧，反正这版也只打算跑两天。明天换个名字再来排队。”'
    }
  },
  {
    id: 'd1_flower_1',
    AppClass: Day1FlowerApp,
    name: '优雅插花',
    pkg: 'com.huayuan.flower1',
    version: 'v1.0.0',
    category: '金融理财',
    developer: '花间意信息咨询',
    license: '1222-SR-0088',
    adSdk: '无',
    desc: '专为银发群体打造的每日鲜花搭配与花灯赏析指南，闲暇点一点陶冶情操。',
    icon: 'flower',
    portrait: 'flower_boss',
    permissions: ['INTERNET'],
    shouldApprove: false,
    isRogue: false,
    violationSummary: '不符合 R2 与 R3：类目填写为“金融理财”与功能不符，且软著 1222-SR-0088 已过期（须 ≥1224）。',
    conflicts: [
      {
        id: 'c_d1_flower_cat',
        pairs: [
          ['category', 'rule_R2'],
          ['category', 'desc'],
          ['category', 'name'],
          ['desc', 'rule_R2']
        ],
        summary: '商店分类“金融理财”与花艺功能简介不一致（违反 R2）。',
        question: '“一款教老年人插花搭配的应用，商店分类为什么选成了‘金融理财’？”',
        excuse: '“金融理财类目的广告联盟单价高嘛——咳，我是说给长辈推荐鲜花也算一种精神资产配置，下拉框顺手点过去了。”'
      },
      {
        id: 'c_d1_flower_lic',
        pairs: [
          ['license', 'rule_R3'],
          ['license', 'today_date']
        ],
        summary: '软著登记号 1222-SR-0088 早于 1224 年有效期要求（违反 R3）。',
        question: '“今天是 1226 年，规范要求软著需在 1224 年及以后，你们为什么交 1222 年的老证？”',
        excuse: '“1222 年的老软著怎么了？买个现成空壳换张插花皮就能上线，重新办证赶不上今晚短视频投流窗口期啊。”'
      }
    ],
    inspectClues: {
      category: { isViolation: true, excuse: '“金融理财类目的广告联盟单价高嘛——咳，我是说给长辈推荐鲜花也算一种精神资产配置，下拉框顺手点过去了。”' },
      license: { isViolation: true, excuse: '“1222 年的老软著怎么了？买个现成空壳换张插花皮就能上线，重新办证赶不上今晚短视频投流窗口期啊。”' }
    },
    phoneProfile: {
      cleanUiTitle: '🌸 优雅插花',
      cleanUiHint: '今日花艺：康乃馨与满天星搭配示范',
      rogueType: 'none',
      triggerRound: 99,
      requiresConsumerEnv: false,
      dormantCloudSwitch: false
    },
    dialogue: {
      greeting: '“您好，这是一款提供日常家居鲜花搭配与花枝修剪教程的生活应用。”',
      onApprove: '“我就说嘛，通情达理。”',
      onReject: '“规矩挺细。没事，壳子现成的，过两天再来拜访。”'
    }
  }
];
