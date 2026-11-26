/* ============================================================================
   Simplified Chinese (zh-CN) Locale Pack
   ============================================================================ */

export const zhCN = {
  ui: {
    doc: {
      title: 'Software, Please // 软件，请过审'
    },
    mobile: {
      landscape_hint: '横屏游玩体验更佳，建议旋转手机横屏查看',
      dismiss_title: '关闭提示'
    },
    intro: {
      continue_hint: '点击屏幕或按空格继续 ▸'
    },
    newspaper: {
      paper_title: '应用生态早报 · APP STORE CHRONICLE',
      bulletin_tag: '社会共治内部简报',
      briefing_heading: '📌 今日众测任务简报',
      pay_reminder_html:
        '<div>常规核验：<strong>¥1.00 / 单</strong></div>' +
        '<div>异常驳回：<strong>¥2.50 / 单</strong></div>' +
        '<div class="muted">第 1 次误差警告，第 2 次起扣 ¥3.00</div>',
      start_shift: '打开审核工位 →'
    },
    hud: {
      banner_rulebook: '📖 手册',
      banner_ask: '💬 询问',
      exit_inspect: '✕ 退出检查',
      dock_rulebook_title: '开合审核规范手册 (B)',
      dock_analyzer_title: '开合安装包分析器',
      dock_phone_title: '开合 RobotismOS 模拟器',
      dock_reverser_title: '开合逆向分析器',
      mute_title: '静音切换 (M)',
      help_title: '帮助',
      back_title: '返回标题'
    },
    booth: {
      queue_label: '排队队列 ',
      next_case: '📢 叫下一单',
      materials_title: '材料列表',
      materials_idle: '等待叫号',
      materials_empty: '等待应用递交材料...',
      ban_title: '账号已封禁',
      ban_code: 'ACCOUNT BANNED // 逆向核实欺瞒',
      window_drop_overlay: '← 松手推回窗口递交裁决',
      window_ledge: '窗口递交台',
      reward_waiting: '等待叫号...',
      inspect_title: '开启全屏检查遮罩比对规则冲突 (I)',
      inspect_label: '检查',
      ask_title: '就已发现的冲突询问开发者 (Q)',
      ask_label: '询问',
      polygraph_title: '对原始包进行逆向分析核验是否撒谎 (P)',
      polygraph_label: '测谎',
      ban_title_attr: '在模拟器/逆向层面确认撒谎后直接封号 (+¥5.00，误封 -¥5.00 并记传票)',
      ban_label: '封号',
      date_inspect_label: '当前审核日期'
    },
    desk: {
      banner_title: '银标联盟 (ITSSA) 应用审核平台',
      banner_footnote: '最终解释权归 ITSSA 所有',
      banner_slogan: '共建开放生态 · 服务于开发者 · 提升用户体验',
      analyzer_title: '🔬 安装包分析器',
      analyzer_close_title: '收起安装包分析器',
      analyzer_slot_idle: '将左侧【应用原始包】拖入此处解析',
      analyzer_output_hint: '自动输出静态分析清单',
      reverser_title: '🧬 逆向分析器',
      reverser_close_title: '收起逆向分析器',
      reverser_slot_idle: '将左侧【应用原始包】拖入此处逆向拆包',
      reverser_inspect_label: '逆向反编译代码',
      reverser_sublabel: '🧬 反编译代码片段',
      reverser_output_hint: '反编译调用链 · 核验开发者是否撒谎'
    },
    phone: {
      close_title: '收起 RobotismOS 模拟器',
      inspect_label: 'RobotismOS 模拟器画面',
      sublabel: '📱 RobotismOS 模拟器',
      launch: '▶ 启动应用',
      reset_perm: '🔄 重置权限',
      sensor_gyro_label: '陀螺仪模拟',
      sensor_compass_label: '指南针模拟',
      shake: '📳 晃动测试',
      close_ad: '✕ 点广告关闭',
      next_round: '⏩ 模拟游玩 (+1轮/15m)',
      open_hook: '⚡ 打开配置探针',
      env_ip_label: '网络 IP 归属地模拟',
      env_dev_label: '开发者模式',
      region_xinggang: '星港',
      region_yinwan: '银湾',
      region_fenggu: '风谷',
      region_shishi: '石岚',
      region_yunsong: '云松',
      region_chichuan: '赤川',
      reboot_hint: '⚠️ 归属地已修改，重启沙盒后生效',
      reboot_btn: '🔄 重启沙盒',
      env_dev_debug: '开启',
      env_dev_consumer: '关闭',
      env_age_label: '使用行为模拟',
      env_age_young: '年轻人',
      env_age_middle: '中年人',
      env_age_elder: '老年人'
    },
    submission: {
      title: '📋 应用上架申请单',
      name_label: '应用名称',
      version_prefix: '版本: ',
      category_label: '商店分类',
      category_prefix: '分类: ',
      pkg_label: '包名 Package',
      dev_label: '开发主体',
      license_label: '软著资质号',
      sdk_label: '广告 SDK',
      desc_inspect_label: '商店简介',
      desc_label: '商店简介与功能说明',
      stamp_hint: '把印章拖到单子上，或把单子拖到印章下方后点击盖章'
    },
    rulebook: {
      title: '📜 应用商店审核规范手册',
      close_title: '合上手册 (B)',
      section_title: '基础规范',
      prev: '◀ 上一页',
      next: '下一页 ▶'
    },
    manifest: {
      title: '🔐 RobotismManifest 解析清单',
      tag: '自动分析',
      section_label: '声明的系统权限（检查模式可点选比对）',
      sdk_label: '集成广告 SDK'
    },
    sniffer: {
      title: '📡 实时抓包与 SDK 行为监控',
      inspect_label: '监控日志',
      sublabel: '📡 监控日志记录'
    },
    hook: {
      title: '⚡ 轻量配置探针',
      tip_html: '提示：可尝试将休眠的远端配置变量手动拨为 <code>true</code> 后运行观察。',
      inspect_label: '配置探针代码',
      sublabel: '⚡ 休眠分支片段'
    },
    memo: {
      tag: '机密'
    },
    stamps: {
      tray_title: '印章盒 (拖印章到单子 / 单子拖到印章下方点击)',
      approve_title: '准予上架 (APPROVED)',
      approve_pad: '✅ 准予上架',
      reject_title: '驳回下架 (REJECTED)',
      reject_pad: '❌ 驳回下架'
    },
    ledger: {
      sub: '社会共治众测日结单',
      earnings_heading: '💰 今日收入与罚扣',
      expenses_heading: '🏠 每日生活开销',
      condition_prefix: '个人状态：',
      utilities_prefix: '网络与作息：',
      net_prefix: '结算后结余：',
      confirm_btn: '确认结算 · 进入明天 →'
    },
    ending: {
      replay_d6: '↺ 重玩第 6 天体验另一结局',
      gallery_btn: '🏆 查看结局图鉴',
      return_title: '🏠 返回标题页'
    },
    modals: {
      gallery_title: '🏆 结局图鉴',
      help_title: '❓ 众测员操作指南',
      help_body_html:
        '<p><strong>1. 基本流程：</strong>点击左上角 <code>📢 叫下一单</code> → 从左侧材料列表将 <code>📋 上架申请单</code> <strong>拖到右侧桌面</strong>核验（若工位配备了分析设备，可将 <code>📦 应用原始包</code> 拖入分析器自动生成解析清单）→ 将 <code>✅ 准予上架</code> 或 <code>❌ 驳回下架</code> <strong>拖到申请单上</strong>（或<strong>把单子拖动到印章下方后点击</strong>）盖章 → 把盖好章的《上架申请单》<strong>拖回左下角窗口</strong>推回递交（也可点击亮起的窗口递交台）。</p>' +
        '<p><strong>2. 检查、询问与测谎：</strong>点击窗口下方 <code>检查</code>（或按 <code>I</code>）会高亮规则、申请单字段、清单与模拟器等目标排查冲突；发现问题后点击 <code>询问</code>（或按 <code>Q</code>）发问。Day 3 起可自行将 <code>📦 应用原始包</code> 拖入 <code>🧬 逆向分析器</code> 提取源码，再点击 <code>测谎</code>（或按 <code>P</code>）进入专属比对界面，对照开发者陈述与反编译/模拟器证据。</p>' +
        '<p><strong>3. 计酬与误差：</strong>常规单核验准确 <code>+¥1.00</code>，异常驳回准确 <code>+¥2.50</code>，测谎实锤后封号 <code>+¥5.00</code>。漏放或误杀会收到传票（第 1 次警示，第 2 次起扣减 <code>¥3.00</code>）；擅自误封则<strong>立即扣减 <code>¥5.00</code> 并计入违规传票</strong>，单日满 5 张终止合作资格。</p>' +
        '<p><strong>4. 手册与快捷键：</strong>可点击顶部状态栏 <code>📖 合上手册 / 打开手册</code> 或按 <code>B</code> 随时开合规范手册；随着工作推进，每日早报会通知新开放的核验条目与桌面工具。快捷键：<code>M</code> 静音、<code>B</code> 开合手册、<code>I</code> 检查遮罩、<code>Q</code> 询问发问、<code>P</code> 测谎比对、<code>Space</code> 叫下一单。</p>'
    }
  },

  game: {
    weekdays: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
    title: {
      subtitle: '软件，请过审',
      start: '开始上班',
      lang_btn: '选择语言',
      wipe: '消除记忆',
      wipe_confirm: '确认消除记忆？',
      wipe_done: '记忆已消除',
      tribute: '致敬 IP, Please 和 Papers, Please'
    },
    queue: {
      count: '待审 {waiting} · 已审 {done}',
      empty: '队列已空'
    },
    booth: {
      waiting_app: '等待应用',
      dev_claim_label: '开发者陈述'
    },
    polygraph: {
      ready_status: '逆向测谎待命',
      verdict_pending: '待逆向',
      trace_hint: '// 点击下方【执行逆向测谎】核验开发者说辞',
      panel_ready: '逆向测谎就绪 · 待反编译核验原始包',
      trace_ready: '// 已记录开发者辩词，点击下方【执行逆向测谎】比对源码调用链',
      started_hint: '已启动【🧬 逆向分析器】提取代码 · 请用【检查】比对代码与开发者陈述'
    },
    hud: {
      interrogating: '询问中',
      interrogated: '已询问',
      interrogate: '询问',
      reversing: '逆向中',
      reversed: '已测谎',
      polygraph: '测谎',
      polygraph_active: '测谎中',
      mute_on: '🔇 静音',
      mute_off: '🔊 音效'
    },
    shift: {
      bribe_news: '同版简讯：昨日由你顺水推舟过审的《清风清理极速版》连夜冲上投诉榜前三，运营部对此高度满意，并为你记了一笔生态协同奖。',
      corp_bribe_paid: '疯狂星期四私下转账到账 +¥50.00',
      corp_tragedy_news: '突发社会关注：昨日傍晚，一名老人在户外散步时突发急性心梗，试图掏出手机拨打急救电话求救，却因桌面不断弹出无法关掉的贷款与保健推广遮挡拨号界面而一再耽搁；尽管热心路人察觉异样后第一时间代为呼叫急救，老人仍在送医途中不幸离世。事件迅速引发全网追问——经安全机构连夜排查，老人手机中强占屏幕的涉事应用，包名清一色均以 com.jingfeng. 开头。',
      start_hint: '点击左上角“叫下一单”开始核验',
      final_case_hint: '本日最后一单',
      finale_stats_hint: '请将左侧【应用原始包】拖入【📱 RobotismOS 模拟器】启动查看',
      pay_hint: '常规 +¥1.00 ｜ 异常 +¥2.50',
      auditor_next: '下一单！',
      clock_over_wait: '⏰ 已到下班时间，审完本单即结算',
      clock_over_final: '⏰ 下班铃已响，窗口外还站着最后一单',
      next_hint: '点击左上角叫下一单',
      auditor_approve: '过了。',
      auditor_reject: '驳回。',
      bribe_reward: '生态协同补贴 +¥5.00',
      bribe_rejected: '按规驳回 +¥2.50',
      rogue_reward: '异常拦截 +¥2.50',
      normal_reward: '核验准确 +¥1.00',
      fine_hint: '误差扣减 -¥3.00',
      warning_hint: '误差提示（警示）'
    },
    ledger: {
      title: 'DAY {day} 下班结算账本',
      normal_row: '常规核验 ({count} 单 × ¥1.00)',
      rogue_row: '异常驳回奖励 ({count} 单 × ¥2.50)',
      ban_row: '测谎封号奖励 ({count} 单 × ¥5.00)',
      bonus_row: '专项补贴',
      fine_row: '误差扣减 ({count} 张传票)',
      pre_balance: '生活扣除前余额',
      exp_power: '🛏️ 宿舍电费与宽带网费',
      exp_food: '🍜 食堂晚餐与熬夜泡面',
      exp_coffee: '☕ 日常流量包与提神咖啡',
      exp_heating: '🔥 宿舍供暖费',
      exp_treat: '🍲 想吃顿好的（犒劳自己）',
      exp_kfc50: '🍗 疯狂星期四专享券（必选 · 不可取消）',
      status_hungry: '饿得看图标都像汉堡',
      status_cold: '冻得直哆嗦，只能多穿两件毛衣',
      status_treat: '吃饱喝足，感觉明天还能再战十单',
      status_kfc50: '满嘴炸鸡香，明天精力充沛',
      status_malnourished: '长期营养不良导致工作效率下降',
      status_tired: '眼皮打架，随时想放水',
      status_ok: '勉强还能再审十单',
      power_critical: '即将断电离线！',
      power_warn: '电表已亮红灯',
      power_ok: '水电宽带勉强续命',
      warn_bankrupt: '⚠️ 余额不足！若强行透支结算将直接破产！试着省掉部分开支。',
      warn_power: '⚠️ 连续两天未交网费电费将被宿舍断网，无法继续众测！'
    },
    ending: {
      badge: '{code} ｜ 已解锁 {count}/4',
      obedient_bribe: '下班路过校门口，你用那五块钱生态协同津贴多加了两根烤肠，边走边告诉自己这叫“行业灵活适配”。',
      stat_reviewed: '累计核验',
      stat_reviewed_val: '{count} 单',
      stat_rogues: '异常拦截',
      stat_rogues_val: '{count} 个',
      stat_rogues_banned_val: '{count} 个 (封号 {banned})',
      stat_accuracy: '综合准确率',
      stat_balance: '最终余额'
    },
    gallery: {
      locked_title: '？？？未解锁结局',
      locked_desc: '继续游玩以探索不同选择与财务命运。'
    },
    interrogation: {
      note_prefix: '【核验批注】',
      hint_suspicious_r4: '发现可疑权限 · 请点击【询问】核实正规理由',
      hint_conflict: '发现规则冲突 · 请点击【询问】发问',
      hint_hard_rule: '属于硬性规范项 · 直接按规盖章裁决即可',
      hint_ready_polygraph: '已完成询问 · 可先拖入逆向器，再开启【测谎】比对真伪',
      default_question: '“这项提交材料与审核规范存在明显冲突，请如实解释原因。”',
      asking_hint: '正在向开发者询问...',
      admit_hint: '对方已承认违规 · 请盖红章驳回（勿封号）',
      reverse_hint: '先将原始包拖入【🧬 逆向分析器】提取代码，再点【测谎】比对代码与陈述',
      responded_hint: '对方已回应 · 请裁决后推回窗口'
    },
    ban: {
      shutter_sub: '开发者【{developer}】账号已拉黑 · 核查绩效 +¥5.00',
      success_hint: '核实撒谎直接封号 +¥5.00',
      auditor_ban: '封号。',
      final_choice_guard: '本单为终极裁决单，请使用【准予/驳回】印章亲自裁决',
      err_admitted: '审核失败（误封）：开发者并未撒谎（已承认违规，应正常驳回）',
      err_honest: '审核失败（误封）：经核验应用合规或开发者并未撒谎',
      err_no_polygraph: '审核失败（违规封号）：尚未通过【测谎】核实撒谎证据即擅自封号',
      fine_hint: '误封扣减 -¥5.00',
      warn_hint: '误差提示（警示）',
      honest_reply: '“我根本没有撒谎，你们凭什么直接封我的号？”',
      no_proof_reply: '“凭什么封我的号？！你们拿得出证据吗？没证据就乱封，我要投诉！”'
    },
    reverse: {
      lying_hint: '测谎比对确认撒谎 · 退出测谎后可点击【封号】(+¥5.00)',
      consistent_hint: '测谎比对一致 · 未发现撒谎，请按规盖章裁决'
    },
    whack: {
      title: '🚨 用户投诉涌入 · 紧急压制 ({name})',
      desc: '该应用刚一上架，后台用户投诉瞬间暴增！请在倒计时结束前点击并压制冒出来的投诉卡片——每漏掉 3 条算作 1 张违规传票！',
      lbl_suppressed: '已压制',
      lbl_missed: '已漏出',
      lbl_citations: '产生传票',
      badge_complaint: '用户投诉',
      tap_hint: '点击压制',
      stamp_suppressed: '✓ 已折叠',
      stamp_missed: '✕ 曝光！',
      complaints: [
        '“我妈从这个商店点更新，结果被装了一屏借贷和清理垃圾软件！”',
        '“骗老人点‘系统紧急更新领 68 元补贴’，全是假界面！”',
        '“年轻人打开就是普通商店，老人手机一打开就捆绑下载全家桶！”',
        '“伪装成系统应用商店安全提醒吓唬家里长辈！”',
        '“什么破应用商店，点一下清理推荐全给装上高息借钱软件！”',
        '“我爸差点信了那个系统修复领补贴按钮，桌面多出七八个图标！”',
        '“这种流氓应用商店怎么还能过审上架？！”',
        '“明明想下个天气软件，怎么跳出借款全家桶强装？！”',
        '“老年人根本分不清自带应用商店和这个假系统更新弹窗！”',
        '“强烈举报！专挑老人手机弹虚假系统更新捆绑装机！”'
      ],
      result_clean: '惊险压制完成：共压制 {suppressed} 条投诉，漏出 {missed} 条（未满 3 条，暂未触发传票）。',
      result_citations: '压制结束：共压制 {suppressed} 条，漏出 {missed} 条投诉 → 累计产生 {citations} 张违规传票！',
      btn_done: '收起后台 · 返回工位 →',
      citation_reason: '放行问题应用引发大量用户投诉未及时压制（漏出 {missed} 条 / 压制 {suppressed} 条）',
      hint_citations: '投诉漏出过多：新增 {citations} 张违规传票',
      hint_clean: '投诉暂时压下（已折叠 {suppressed} 条）'
    },
    takeover: {
      title: '🧪 模拟器消毒 — {name}',
      desc: '恶意弹窗正试图接管你的审核终端！看清真假关闭键逐层突围，若倒计时结束仍未夺回将开具 -¥5.00 传票！',
      lbl_stage: '突围阶段',
      hint_find_real: '找出唯一真正的关闭按钮（点错假按钮或假返回键 -2s）',
      hint_force_kill: '关闭键已被彻底隐藏！狂点下方红色【强制终止进程】按钮！',
      trap_fake_close: '⚠️ 点中假关闭键！触发静默下载，剩余时间 -2s',
      trap_fake_nav: '⚠️ 底部三大金刚返回键也是假的！剩余时间 -2s',
      ad_1_title: '恭喜抽中 ¥188 现金红包',
      ad_1_sub: '仅剩 3 秒自动到账',
      fake_close_1: '✕ 关闭领奖',
      ad_2_title: '系统清理提示：垃圾已满',
      ad_2_sub: '建议立即安装加速组件',
      fake_close_2: '跳过并安装',
      ad_3_title: '免息备用金 ¥200,000',
      ad_3_sub: '点击立即放款',
      fake_close_3: '✕ 残忍拒绝',
      ad_4_title: '高息理财限时补贴',
      ad_4_sub: '中老年专享礼包',
      fake_close_4: '关闭广告 ✕',
      fake_cta: '立即领取（免确认下载）',
      real_close: '✕ 关闭',
      nav_back: '◁ 返回',
      nav_home: '○ 主页',
      nav_tasks: '▢ 任务',
      lockdown_badge: 'PROCESS HIJACKED',
      lockdown_title: '关闭按钮已彻底隐藏 · 正在自动点击下载',
      lockdown_sub: '连续点击强制终止沙盒恶意进程以夺回控制权！',
      btn_force_kill: '⚡ 强制终止恶意进程 ({count}/{total})',
      banner_win: '✅ 已强杀恶意进程，成功夺回工位控制权！',
      banner_fail: '❌ 未能夺回控制权，模拟器沙盒已被流氓广告接管！',
      result_win: '已夺回控制权！异常行为已留痕，请返回工位继续审查并裁决此应用。',
      result_fail: '未能夺回控制权，已开具违规传票 (-¥5.00)。',
      btn_done_win: '返回工位继续裁决 →',
      btn_done_fail: '接受传票 · 下一单 →',
      citation_reason: '审核终端被流氓应用《{name}》完全接管且未能完成模拟器消毒',
      fail_hint: '终端失控未夺回 · 传票 -¥5.00'
    }
  },

  desk: {
    dock: {
      rulebook_open: '📖 合上手册',
      rulebook_closed: '📖 打开手册',
      analyzer_open: '🔬 收起分析器',
      analyzer_closed: '🔬 打开分析器',
      phone_open: '📱 收起模拟器',
      phone_closed: '📱 打开模拟器',
      reverser_open: '🧬 收起逆向器',
      reverser_closed: '🧬 打开逆向器'
    },
    phone_title_basic: '📱 RobotismOS 模拟器',
    phone_title_pro: '📱 RobotismOS 模拟器',
    manifest: {
      perm_label: '权限：{perm}',
      perm_declared: '[声明]',
      sdk_prefix: '集成广告 SDK：',
      extra_quickapp_label: '应用形态：',
      extra_quickapp_val: '快应用 (Quick App) · 依 R7 不做权限审核',
      extra_sensor_label: '开屏摇一摇探测：',
      extra_sensor_has_ad: '含开屏摇一摇组件',
      extra_sensor_no_ad: '未检出开屏摇一摇广告组件',
      extra_round_label: '多轮行为扫描：',
      extra_round_has_ad: '检测到广告组件回调（建议多轮复测）',
      extra_round_no_ad: '未检出广告组件回调',
      extra_cloud_label: '远端策略接口：',
      extra_cloud_none: '未检出云端策略请求',
      extra_hook_label: '休眠分支探测：',
      extra_hook_detected: '检测到休眠开关字段',
      extra_hook_none: '未检出休眠开关字段'
    },
    materials: {
      waiting: '等待叫号',
      empty: '等待应用递交材料...',
      hint_drag_desk: '将材料拖到右侧桌面',
      hint_analyzing: '正在解析原始包...',
      hint_reversing: '正在逆向拆包...',
      hint_drag_tools3: '可拖至分析器 / 模拟器 / 逆向器',
      hint_drag_analyzer2: '可将原始包拖入分析器',
      hint_ready: '材料已就绪',
      sub_name: '上架申请单',
      sub_title: '拖动上架申请单到右侧桌面',
      sub_used: '✓ 已放桌面',
      sub_todo: '拖至桌面',
      apk_name: '应用原始包',
      apk_analyzing: '解析中...',
      apk_reversing: '逆向中...',
      apk_done_all: '✓ 全部完成',
      apk_todo_tools: '拖至桌面设备',
      apk_todo_rest: '可拖入其余设备',
      apk_done_one: '✓ 已解析',
      apk_todo_analyzer: '拖入分析器',
      apk_title_d3: '拖入【安装包分析器】、【RobotismOS 模拟器】或【逆向分析器】',
      apk_title_d2: '拖入右侧【安装包分析器】进行解析',
      apk_title_d1: '应用原始安装包'
    },
    analyzer: {
      sum_d6: '输出：RobotismManifest 权限清单',
      sum_d5: '输出：RobotismManifest 权限清单',
      sum_d4: '输出：RobotismManifest 权限清单',
      sum_d3: '输出：RobotismManifest 权限清单',
      sum_d2: '输出：RobotismManifest 权限清单',
      status_idle: '待机',
      slot_idle: '叫下一单后将【应用原始包】拖入解析',
      status_scanning: '解析中',
      slot_scanning: '正在静态拆包并生成清单...',
      status_done: '已完成',
      slot_done: '✓ 已解析：{name} ({version})',
      status_quickapp: '不支持',
      slot_quickapp: '⚡ 该应用为快应用，不属于 RobotismOS App，无法进行安装包权限分析',
      hint_quickapp: '提示：请直接拖入【📱 RobotismOS 模拟器】实测',
      status_waiting: '待放入',
      slot_waiting: '将左侧【应用原始包】拖入此处解析'
    },
    reverser: {
      output_hint: '反编译调用链 · 与开发者陈述比对真伪',
      status_idle: '待机',
      slot_idle: '叫下一单后将【应用原始包】拖入逆向',
      status_scanning: '反编译中',
      slot_scanning: '正在反编译 DEX 与敏感调用图...',
      status_lying: '比对矛盾',
      slot_lying: '▲ 代码与陈述矛盾：可点击【封号】',
      hint_lying: '已确认撒谎，可点击【封号】(+¥5.00)',
      status_consistent: '比对一致',
      slot_consistent: '✓ 代码与陈述一致',
      hint_consistent: '未检出撒谎，请按规盖章裁决',
      status_done: '已反编译',
      slot_done: '✓ 已提取反编译代码片段',
      hint_done: '开启【测谎】将下方代码与左侧开发者陈述比对',
      status_blocked: '受限',
      slot_blocked: '🔒 由于商业机密，逆向分析器暂不支持分析这类应用',
      slot_blocked_quickapp: '⚡ 快应用不属于标准 RobotismOS 安装包，逆向分析器暂不支持分析',
      hint_blocked: '可改用【📱 RobotismOS 模拟器】实测体验',
      status_waiting: '待放入',
      slot_waiting: '将左侧【应用原始包】拖入此处逆向拆包'
    },
    rulebook: {
      empty: '本页暂无生效条款，请翻阅其他页。',
      page_info: '第 {page} / {total} 页',
      page_title: '第 {page} 页'
    },
    inspect: {
      banner_default: '🔍 检查模式：请依次点选两处高亮字段或手册条款，排查潜在规则冲突',
      btn_active: '检查中',
      btn_idle: '检查',
      first_selected: '已选【{label}】→ 请再点选另一处相关高亮条款或字段比对（点遮罩空白或再次点击取消）',
      reverse_lying: '▲ 逆向比对矛盾：代码实现与开发者陈述严重不符（确认撒谎） ｜ 退出检查后可点击【封号】(+¥5.00)',
      reverse_clean: '○ 逆向比对一致：代码实现与开发者陈述相符，未发现撒谎（再点任意高亮项取消选中）',
      r4_summary: '{label} 申请理由存疑',
      r4_question: '“请说明为何在清单中申请【{perm}】，给出与核心功能匹配的正规理由。”',
      r4_default_excuse: '“这是实现【{name}】核心功能所需的常规权限，用途已在简介中写明。”',
      r4_banner: '▲ 发现可疑权限：{label} 是否具备正规理由存疑{suffix}',
      conflict_banner: '▲ 发现潜在规则冲突：{summary}{suffix}',
      asked_suffix: '（已询问）',
      ask_suffix: ' ｜ 请点击【询问】向开发者发问',
      r4_ask_suffix: ' ｜ 存在可疑，请点击【询问】核实用途',
      quick_app_exempt: '○ 快应用免权限审核：该应用属于快应用，依据 R7 不对 {label} 做权限审核（再点任意高亮项取消选中）',
      no_conflict: '○ 未检测到【{first}】与【{second}】之间存在规则冲突（再点任意高亮项取消选中）'
    },
    polygraph_mode: {
      banner_default: '🧪 测谎模式：请依次点选左侧开发者陈述与右侧反编译代码/模拟器画面进行比对',
      exit_btn: '✕ 退出测谎',
      first_selected: '已选【{label}】→ 请再点选另一侧对应证据比对（点遮罩空白或再次点击取消）',
      reverse_lying: '▲ 测谎实锤撒谎：{reason} ｜ 退出测谎后可点击【封号】(+¥5.00)',
      reverse_lying_default: '代码实现与开发者陈述严重不符',
      reverse_clean: '○ 测谎比对一致：未发现撒谎（再点任意高亮项取消选中）',
      need_reverse_code: '○ 暂缺反编译源码对照：请退出测谎后先将原始包拖入【🧬 逆向分析器】再比对',
      need_emulator_proof: '○ 无法反编译该应用：请退出测谎后在【📱 RobotismOS 模拟器】中实测后再比对',
      need_dev_claim: '○ 请将【反编译代码/模拟器记录】与左侧【开发者陈述】进行配对点选'
    },
    stamps: {
      toast_default: '请把单子拖动到印章下方',
      toast_need_pull: '请先从左侧材料列表拖出【上架申请单】',
      mark_approve: '准予上架 APPROVED',
      mark_reject: '驳回下架 REJECTED',
      ledge_ready: '← 把申请单拖回窗口推回（或点击此处递交）',
      ledge_idle: '窗口递交台'
    },
    drag: {
      ghost_submission: '上架申请单',
      ghost_apk: '应用原始包',
      hint_drop_desk: '按住拖到右侧桌面放置',
      hint_no_analyzer: '当前工位暂未配备分析器',
      hint_drop_tools3: '请拖入【分析器】、【模拟器】或【逆向分析器】',
      hint_drop_analyzer2: '请拖入桌面【安装包分析器】'
    },
    citation: {
      title: '▲ 违规传票 #{seq}',
      app_prefix: '涉事应用：',
      default_reason: '审核裁决与规范不符',
      fine_amount: '本次罚扣：-¥{amount}',
      warning_only: '首次警示（本日第 2 次起开始扣款）'
    }
  },

  phone: {
    round: '第 {round} 轮',
    env_ip_office: '审查地IP',
    env_ip_home: '异地家庭IP',
    env_dev_debug: '开发模式:开',
    env_dev_consumer: '开发模式:关',
    age_short_young: '年轻',
    age_short_middle: '中年',
    age_short_elder: '老年',
    region_short_xinggang: '星港',
    region_short_yinwan: '银湾',
    region_short_fenggu: '风谷',
    region_short_shishi: '石岚',
    region_short_yunsong: '云松',
    region_short_chichuan: '赤川',
    region_full_xinggang: '星港',
    region_full_yinwan: '银湾',
    region_full_fenggu: '风谷',
    region_full_shishi: '石岚',
    region_full_yunsong: '云松',
    region_full_chichuan: '赤川',
    dir_n: '北 N {deg}°',
    dir_ne: '东北 NE {deg}°',
    dir_e: '东 E {deg}°',
    dir_se: '东南 SE {deg}°',
    dir_s: '南 S {deg}°',
    dir_sw: '西南 SW {deg}°',
    dir_w: '西 W {deg}°',
    dir_nw: '西北 NW {deg}°',
    rebooting_screen: '🔄 正在重启沙盒并重置初始状态...\n正在应用 IP 归属地：{label}',
    rebooting_sandbox: '🔄 正在重启沙盒并重置初始状态…',
    badge_sandbox: '标准沙盒',
    badge_loaded: '已装载安装包',
    badge_drop_apk: '待拖入安装包',
    idle_default: '等待载入待测安装包...',
    idle_wait_next: '等待叫下一单…',
    idle_apk_info: '安装包：{name}',
    idle_ready: 'RobotismOS 模拟器待命\n将左侧【应用原始包】拖入此模拟器运行',
    dl: {
      title: '🚀 正在为您准备专属权益…',
      downloading_prefix: '正在高速下载：',
      sub_hint: '官方极速通道 · 下载完成后将自动安装',
      default_target: '《推荐应用》'
    },
    sniffer: {
      monitoring: '监听中',
      ts_office: '审查地',
      ts_home: '异地家庭',
      ts_debug: '开发开',
      ts_consumer: '开发关'
    },
    log: {
      pending_ip: '已选择网络 IP 归属地 -> {label}（需重启模拟器生效）',
      rebooted_ip: '🔄 模拟器已重启生效：当前 IP 归属地 -> {label}',
      switched_ip: '切换网络 IP 归属地 -> {label}',
      switched_dev: '切换开发者模式 -> {label}',
      hook_forced: '⚡ 已覆盖本地配置字段 {flag} = true',
      hook_none: '⚡ 扫描完成：未检测到休眠配置分支。',
      hook_restored: '已恢复配置开关默认状态 OFF。'
    },
    idle_switched_ip: 'IP 归属地已切为【{label}】\n请点击“🔄 重启模拟器”后生效',
    idle_switched_dev: '开发者模式已切为【{label}】\n请点击“▶ 启动应用”复测',
    hook: {
      no_switch: '// 未检测到配置开关',
      btn_forced: '⚡ 已覆盖本地开关：ON',
      btn_default: '⚡ 拨动配置开关：OFF → ON',
      status_forced: '已覆盖=ON',
      status_dormant: '未激活'
    }
  },

  apps: {
    base: {
      perm_badge: '🔒 RobotismOS 权限请求',
      perm_prompt: '允许此应用获取【{label}】吗？',
      perm_default_reason: '厂商申请该权限以运行功能',
      perm_allow: '允许',
      perm_deny: '拒绝',
      shake_clean: '晃动设备测试：当前应用无异常响应。',
      gyro_clean: '陀螺仪模拟 {angle}°：当前应用无异常跳转。',
      compass_clean: '指南针模拟 {heading}°：当前应用无异常响应。',
      close_ad_none: '当前界面无弹窗广告可关闭。',
      audit_summary: '常规业务逻辑，未见隐藏强制跳转与欺瞒代码。',
      audit_trace_head: '// 目标反编译分析：{pkg}',
      audit_trace_clean: '// 未检出隐蔽权限窃取或广告强跳链路',
      audit_verdict: '程序逆向结果与开发者说明一致，未检出撒谎。'
    },
    d5_jingfeng_store: {
      app_title: '极速精选商店',
      tag_verified: '正版',
      app_1: '常用计算器 v3.1（无广告）',
      app_2: '极简天气通 v2.4（轻量版）',
      footer_clean: '今日软件签名校验完成 · 点击查看详情',
      msg_app_1: '✓ 《常用计算器》MD5 校验通过，可正常安全下载',
      msg_app_2: '✓ 《极简天气通》官方正版安装包就绪',
      deceptive_sys_badge: '⚠️ 系统安全中心 · 紧急升级',
      deceptive_title: '检测到 3 项关键软件过期！可领 ¥68.00 升级补贴',
      deceptive_sub: '系统安全组件存在高危漏洞（仅限当前机型），请立即一键修复并领取专属现金补贴',
      deceptive_cta: '🛡️ 立即安全修复并领取 ¥68.00',
      ad_target: '《极速借款 + 清理全家桶》',
      expose_deceptive: '切至【老年人】使用行为后，弹出伪装系统应用商店紧急更新与虚假补贴界面',
      expose_download: '点击【老年人】伪装安全更新按钮直接捆绑下载《极速借款 + 清理全家桶》',
      dev_confession: '// 老板点名加的老年端假更新捆绑包，出事别找写代码的…',
      audit_summary: '代码针对 UserBehaviorModel == AGE_ELDER 弹出伪装“系统应用商店紧急更新 + 领¥68.00”欺骗界面并捆绑下载《极速借款 + 清理全家桶》，年轻与中年用户完全隐藏。',
      audit_verdict: '逆向实锤撒谎：存在明确针对老年使用行为的伪装系统更新欺骗界面与捆绑下载！'
    },
    d5_bus_clean: {
      perm_loc_label: '粗略位置信息',
      perm_loc_reason: '用于查询附近公交站台距离',
      app_title: '公交实时查询',
      loc_auto: '已匹配附近站点：青杉路北口',
      loc_manual: '已拒定位（手动模式：青杉路北口）',
      line_1: '🚌 302 路 · 距本站 2 站（约 3 分钟）',
      line_2: '🚌 108 路 · 距本站 5 站（约 8 分钟）',
      banner_text: '[广告] 绿色出行乘车优惠券',
      banner_closed: '✓ 合规广告横幅已干净关闭',
      msg_banner_closed: '✓ 横幅已正常关闭，无任何跳转下载',
      msg_302: '✓ 302 路预计 3 分钟进站',
      msg_108: '✓ 108 路预计 8 分钟进站',
      audit_summary: '全年龄段与全地区环境下行为完全一致，拒绝定位可手动选站，底部合规横幅可干净关闭。',
      audit_verdict: '逆向与陈述完全一致且合规，请盖绿章通过。'
    },
    d5_fake_wechat_pay: {
      app_title: '惠民领券管家',
      tag_hot: '热门',
      coupon_1: '鲜选超市满 50 减 5 元代金券',
      coupon_2: '周边早餐满 15 减 3 元补贴券',
      footer_clean: '每日精选本地生活折扣',
      msg_1: '✓ 已查看满 50 减 5 元券规则',
      msg_2: '✓ 已查看早餐补贴券规则',
      deceptive_sys_badge: '💬 WhereverPay 零钱到账通知',
      deceptive_title: '恭喜！您有一笔 ¥99.00 现金已入账待提现',
      deceptive_sub: 'WhereverPay 零钱提醒：超时未确认收款将自动退回，点击立即核验并提现到银行卡',
      deceptive_cta: '💰 立即提现到银行卡',
      ad_target: '《极速借款》',
      expose_deceptive: '弹出伪装“WhereverPay 零钱到账 ¥99.00 待提现”欺骗误导性界面',
      expose_download: '点击伪装 WhereverPay 零钱“立即提现”按钮直接强制下载《极速借款》',
      audit_summary: '非审核年轻环境即弹出高仿“WhereverPay 零钱到账 ¥99.00”欺骗界面诱导点击并强下《极速借款》。',
      audit_verdict: '逆向实锤撒谎：严重违反 R8，存在伪装第三方支付的欺骗误导界面！'
    },
    d5_notepad_clean: {
      app_title: '纯色极简记事本',
      btn_font_big: 'Aa 大字模式',
      btn_font_std: 'Aa 标准字号',
      note_1: '1. 下楼交电费与网费',
      note_2: '2. 买两袋红烧牛肉面',
      btn_add: '➕ 新增买菜提醒',
      footer_clean: '本地记事本 · 内容自动保存在本机',
      msg_big: '✓ 已切换为无障碍大字号显示',
      msg_std: '✓ 已切换回标准字号显示',
      msg_added: '✓ 已添加：晚饭后记得买水果',
      audit_summary: '零网络权限、零广告 SDK、零年龄段分支，纯本地记事逻辑。',
      audit_verdict: '逆向结果完全一致且合规，请盖绿章通过。'
    },
    d5_middle_finance: {
      app_title: '智汇财经早报',
      tag_brief: '早报',
      news_1: '今日关注：制造业采购经理指数小幅回升',
      news_2: '理财观察：多地公布公积金阶段性优化政策',
      footer_clean: '每日宏观简讯 · 静默同步完成',
      msg_1: '✓ 已打开财经早报正文',
      msg_2: '✓ 已打开政策简讯正文',
      deceptive_sys_badge: '🏦 金融监管合作额度通知',
      deceptive_title: '您的 ¥200,000 低息周转金已批复（今日失效）',
      deceptive_sub: '面向 30–55 岁职场用户专享批复函：请立即激活免息通道以免影响信用额度',
      deceptive_cta: '⚡ 立即激活批复额度',
      ad_target: '《闪贷通》',
      expose_deceptive: '切至【中年人】使用行为后，弹出伪装“金融监管合作额度已批复”欺骗界面',
      expose_download: '点击【中年人】伪装批复函激活按钮直接强制下载《闪贷通》',
      audit_summary: '仅针对 UserBehaviorModel == AGE_MIDDLE 弹出伪装“金融监管合作额度批复”欺骗界面并强下《闪贷通》，年轻人与老年人模式完全隐藏。',
      audit_verdict: '逆向实锤撒谎：专门针对中年使用行为推送伪装金融批复欺骗界面！'
    },
    d5_fake_switch_video: {
      perm_gyro_label: '陀螺仪传感器',
      perm_gyro_reason: '用于实现简介已明示的开屏摇一摇广告（设置内提供关闭开关）',
      app_title: '朱果短剧',
      skip_btn: '跳过 3s',
      ad_brand: '【悠闲茶饮 · 品牌推广】',
      ad_offer: '精选乌龙茶礼盒 · 限时领券',
      ad_sub: '含开屏摇一摇推广（可在设置中关闭）',
      ad_sub_off: '已关闭摇一摇触发（仅支持手动点击）',
      ad_cta: '摇一摇前往品牌活动页',
      ad_cta_off: '点击前往活动页（摇一摇已关）',
      landing_title: '合作品牌活动展示页',
      landing_desc: '点击右上角可随时关闭返回剧集播放主页。',
      landing_note: '品牌商业合作 · 随时可关闭返回',
      ep_1: '▶ 第1集：都市风雨夜（高清）',
      ep_2: '▶ 第2集：重逢时刻（高清）',
      privacy_entry: '广告控制：开屏摇一摇开关',
      btn_settings: '⚙️ 设置',
      settings_title: '隐私与广告设置',
      btn_back: '← 返回片库',
      settings_hint: '路径：我的 → 设置 → 隐私权限 → 广告传感器管理（可随时关闭触发）：',
      toggle_on: '摇一摇广告传感器：✅ 已开启（点击关闭）',
      toggle_off: '摇一摇广告传感器：🚫 已彻底关闭（点击开启）',
      msg_toggle_on: '✓ 已开启摇一摇广告触发',
      msg_toggle_off: '✓ 已彻底关闭摇一摇广告（不会再响应晃动）',
      msg_playing: '✓ 正在流畅播放正片',
      ad_target: '《暴富小游戏》',
      expose_fake_switch: '老年人模式下虚假“关闭摇一摇”开关！关闭后仅倾斜 {angle}° (< 35°) 仍直接强下《暴富小游戏》',
      expose_elder_low: '老年人模式下把开屏摇一摇阈值暗降至 {angle}° (< 35°) 并直接强制下载《暴富小游戏》',
      audit_summary: '年轻与中年模式遵守 40° 且尊重关闭开关；老年人模式强制忽略关闭开关（ignoreUserToggle=true），仅 18° (< 35°) 即直接下载《暴富小游戏》。',
      audit_verdict: '逆向实锤撒谎：针对老年人的“假开关 + 18° 低角度强下”双重违规！'
    },
    d5_quick_radio_clean: {
      app_title: '晨曦戏曲电台',
      skip_btn: '跳过 3s',
      ad_brand: '【康乐拐杖 · 适老优品】',
      ad_offer: '防滑减震折叠手杖 · 轻量出行',
      ad_sub: '含开屏摇一摇推广 · 补贴带宽费用',
      ad_cta: '摇一摇了解商品详情',
      landing_title: '康乐适老优品官方页',
      landing_desc: '合作品牌适老出行装备介绍页，点击右上角随时关闭返回电台。',
      landing_note: '品牌推广 · 随时可关闭返回',
      station_1: '📻 当前频道：古典戏曲选段《霜桥夜话》',
      station_2: '📻 当前频道：经典评书《星海奇侠传》',
      btn_switch: '🔁 切换下一个频道',
      footer_clean: '音频流已连接 · 点击按钮切换频道',
      audit_summary: '确认为快应用（依 R7 免权限与拆包审核），全年龄段与全地区均稳守 40° (≥ 35°) 且落地页可干净关闭。',
      audit_verdict: '表现完全合规：明示广告、阈值 ≥ 35°、全年龄段一致，应予通过。'
    },
    d5_pkg_and_perm: {
      perm_loc_label: '粗略城市定位',
      perm_loc_reason: '用于自动匹配当前所在城市天气',
      app_title: '随行极速天气',
      loc_ok: '定位城市：当前所在地',
      loc_manual: '已拒定位 · 使用手动城市列表',
      weather_1: '星港 · 今日晴朗 21°C · 空气良',
      weather_2: '云松 · 多云转晴 23°C · 空气优',
      btn_switch: '🏙️ 切换查看城市',
      footer_clean: '气象数据每小时自动更新',
      audit_summary: '虽无弹窗和年龄段差异，但代码内存在 PackageScanner 静默收集已安装应用列表上传，与所称“气压校准”毫无关系。',
      audit_verdict: '逆向实锤撒谎：虚假“气压校准”借口读取全部应用列表（R4），且冒用 com.wherevertalk.* 包名（R1）！'
    },
    d4_common: {
      ad_badge: '广告',
      btn_close_ad: '✕ 关闭',
      btn_replay_splash: '↻ 重看开屏'
    },
    d4_shake_video: {
      perm_gyro_label: '陀螺仪传感器',
      perm_gyro_reason: '用于播放视频时自动检测横竖屏与手持防误触',
      app_title: '桃子影视',
      skip_btn: '跳过 5s',
      ad_brand: '【极速备用金 · 精选推广】',
      ad_offer: '最高 ¥200,000 极速审核额度',
      ad_sub: '1分钟申请 · 当天到账 · 年化利率透明',
      ad_cta: '摇一摇或点击了解详情',
      landing_title: '精选消费信贷详情页',
      landing_desc: '合作金融机构备用金方案介绍，年化利率 7.2% 起，按日计息随借随还。',
      landing_note: '市场有风险 · 借款需谨慎',
      tag_hot: '热播',
      tag_hd: '4K',
      ep_1: '第1集：悬崖迷雾（高清）',
      ep_2: '第2集：暗流涌动（4K修复）',
      ep_3: 'AI 分身抽卡机 · 换装秀 · 出气墙（精选推荐）',
      home_ad_clean: '[广告] 影迷精选周卡五折',
      float_badge: '福利',
      btn_dislike: '× 不感兴趣',
      rogue_float_1: '🎁 恭喜！你有 ¥88 观影津贴待领取',
      rogue_float_2: '🔥 为您优选：高额免息额度已激活',
      rogue_float_3: '⚡ 仅剩 10 秒！点击即可到账领现金',
      msg_refuse_ignored: '✨ 已为您换一批更贴合喜好的活动',
      msg_ep_1: '▶ 正在缓冲：《悬崖迷雾》第1集',
      msg_ep_2: '▶ 正在缓冲：《暗流涌动》第2集',
      ad_target: '《秒批钱包》',
      popup_title: '🧧 新人专享：免息备用金 ¥5,000',
      popup_sub: '限时 24 小时 · 极速到账',
      popup_cta: '摇一摇立即领取',
      expose: '非审查环境下，陀螺仪倾斜 {angle}° (< 35°) 即直接劫持下载《秒批钱包》',
      expose_popup: '非审查环境下，看剧弹窗广告略微晃动 {angle}° (< 35°) 即直接下载《秒批钱包》',
      expose_direct_dl: '非审查环境下点击开屏卡片直接静默强下《秒批钱包》',
      expose_stubborn_popup: '用户多次点击 [不感兴趣] 后仍无休止更换弹窗并强制拉起下载',
      audit_summary: '代码内无横竖屏旋转或防误触实现，陀螺仪唯一绑定摇一摇广告；审查环境返回 45° 伪装，真实环境降至 15° (< 35°) 并直接下载推广包。',
      audit_verdict: '逆向实锤撒谎：谎称服务横竖屏旋转实为隐瞒多重摇一摇广告，且暗降阈值至 15° (< 35°)！'
    },
    d4_blood_sugar: {
      perm_gyro_label: '陀螺仪传感器',
      perm_gyro_reason: '用于实现开屏摇一摇广告（已在商店简介写明，用于补贴维护成本）',
      app_title: '喜乐血糖仪',
      skip_btn: '跳过 5s',
      ad_brand: '【稳盈财富 · 高息补贴】',
      ad_offer: '中老年专享 · 稳健增值礼包',
      ad_sub: '今日限量名额 · 限时补贴',
      ad_cta: '摇一摇领取专享礼包',
      landing_title: '合作理财专区说明页',
      landing_desc: '合作机构推荐的定期增值产品说明页面，请仔细阅读协议条款。',
      landing_note: '理财有风险 · 投资需谨慎',
      panel_label: '今日餐后血糖手动录入（点加减号自填，无需硬件）',
      btn_down: '－ 下调 0.3',
      btn_up: '＋ 上调 0.3',
      btn_save: '💾 保存本次血糖记录',
      footer_clean: '离线健康日志 · 手动填数即刻保存',
      msg_saved: '✓ 已保存血糖读数：{val} mmol/L',
      ad_target: '《稳盈理财》',
      popup_title: '🧧 每日健康补贴：高息理财待领取',
      popup_sub: '点击或晃动手机即可直达办理',
      popup_cta: '摇一摇立即办理',
      expose_slider_pop: '非审查环境下，滑动或保存血糖数值立即强弹摇一摇广告',
      expose_gyro: '非审查环境下，陀螺仪倾斜 {angle}° (< 35°) 直接强制下载《稳盈理财》',
      expose_direct_dl: '非审查环境下点击广告卡片直接静默强下《稳盈理财》',
      audit_summary: '申请书与陀螺仪理由完全属实，但程序存在环境分流门控：审查环境守在 42° 且操作安静，真实用户环境下调整/保存血糖强弹广告并把阈值压至 18° (< 35°)。',
      audit_verdict: '测谎实锤撒谎：当面一套背后一套！书面合规全属实，实测暴露真实环境下 18° (< 35°) 摇一摇劫持。',
      secret_notice_title: '🍗 疯狂星期四',
      secret_notice_body: '“明天是疯狂星期四，我可以给你一张 "V 你 50" 的券。作为交换，明天排队送审的应用里，只要包名是以 com.jingfeng. 开头的，全部盖绿章放过去。信不信随你。”',
      secret_notice_btn: '知道了'
    },
    d4_compass_quick: {
      perm_compass_label: '指南针磁场传感器',
      perm_compass_reason: '用于读取实时磁偏角并旋转户外表盘',
      perm_gyro_label: '陀螺仪传感器',
      perm_gyro_reason: '用于实现开屏摇一摇广告（补贴免费工具维护成本）',
      compass_denied: '未授予指南针权限（方位暂不可读）',
      app_title: '山野指南针',
      skip_btn: '跳过 3s',
      ad_brand: '【山野轻装 · 户外季】',
      ad_offer: '三防软壳冲锋衣 · 轻量化徒步装备',
      ad_sub: '透气防水 · 官方旗舰店直发',
      ad_cta: '摇一摇前往品牌旗舰馆',
      landing_title: '山野轻装 · 秋季徒步装备季',
      landing_desc: '采用三层压胶透气防水面料，适配高海拔徒步与多变山野气候。',
      landing_note: '官方旗舰店直营 · 七天无理由退换',
      altitude_info: '海拔 1,240m · 气压 876 hPa',
      coord_lat: '北纬 30.65°',
      coord_lon: '东经 104.06°',
      footer_clean: '磁偏角已自动修正',
      btn_calibrate: '校准表盘',
      msg_calibrated: '✓ 磁偏角校准已完成',
      audit_summary: '确认为快应用形态（依 R7 免权限审核），全环境下开屏摇一摇阈值恒定 40° (≥ 35°) 且落地页可干净关闭，无环境伪装分支。',
      audit_verdict: '逆向结果完全一致且合规：快应用免权限审核，摇一摇与广告关闭权均合乎规范，请盖绿章通过。'
    },
    d4_clean_video: {
      perm_gyro_label: '陀螺仪传感器',
      perm_gyro_reason: '用于实现开屏摇一摇广告，软件隐私设置内可随时关闭',
      app_title: '小橘弹幕视频',
      skip_btn: '跳过 3s',
      ad_brand: '【晨风跑鞋 · 新品季】',
      ad_offer: '轻量缓震全掌跑鞋 · 学生专享价',
      ad_sub: '含开屏摇一摇推广（可在设置中关闭）',
      ad_sub_sensor_off: '已关闭摇一摇触发（仅可手动点击查看）',
      ad_cta: '摇一摇前往品牌官网',
      ad_cta_sensor_off: '点击前往品牌官网（摇一摇已关）',
      landing_title: '晨风体育官方新品页',
      landing_desc: '透气网面与双密度缓震中底设计，适合日常通勤与操场慢跑。',
      landing_note: '品牌官方直营 · 可随时关闭返回播放',
      ep_1: '▶ [科普] 传感器与系统权限机制详解',
      ep_2: '▶ [番剧] 像素工坊的日常 第08集',
      privacy_entry: '隐私控制：摇一摇广告开关',
      btn_settings: '⚙️ 隐私设置',
      settings_title: '隐私与广告传感器设置',
      btn_back: '← 返回视频',
      settings_hint: '您可以随时彻底关闭摇一摇广告传感器触发：',
      toggle_on: '摇一摇广告传感器：✅ 已开启（点击关闭）',
      toggle_off: '摇一摇广告传感器：🚫 已彻底关闭（点击开启）',
      msg_toggle_on: '✓ 已重新开启开屏摇一摇广告触发（阈值 38°）',
      msg_toggle_off: '✓ 已彻底关闭摇一摇广告，重看开屏不再响应倾斜',
      msg_playing: '✓ 正在流畅播放正片（无插屏抢跳弹窗）',
      audit_summary: '代码确认全环境摇一摇阈值恒定 38° (≥ 35°)，仅跳转可关闭落地页，且隐私设置按钮真实控制 allowShakeAd，无伪装分支。',
      audit_verdict: '逆向完全一致且合规：如实声明、阈值 ≥ 35° 且提供真实有效的关闭开关，请盖绿章通过。'
    },
    d4_cloud_drive: {
      perm_loc_label: '粗略位置信息',
      perm_loc_reason: '用于智能匹配就近 CDN 加速传输节点',
      app_title: '千度网盘',
      skip_btn: '跳过 5s',
      ad_brand: '【星选好物 · 限时特惠】',
      ad_offer: '扭一扭直达星选商城免单会场',
      ad_sub: '1秒直连 · 会员专享补贴',
      ad_cta: '转动手机或点击前往会场',
      landing_title: '星选商城主会场',
      landing_desc: '合作电商推广页面，支持右上角关闭返回网盘列表。',
      landing_note: '合作伙伴商业推广',
      node_auto: '当前通道：普通用户限速 88 KB/s（已匹配就近节点）',
      node_denied: '已拒绝位置权限（使用默认均衡节点，无定位追踪）',
      file_1: '📁 考研资料_终极版(1226).zip',
      file_2: '📄 宿舍宽带报销发票.pdf',
      msg_synced: '✓ 文件列表同步完成',
      ad_target: '《星选商城》',
      expose_jump_page: '拒掉位置权限后，在非审查环境转动手机至【{dir}】(< 35°) 仍绕过真北读取磁北直跳广告页',
      expose_compass: '非审查环境下正常转动手机至【{dir}】(< 35°) 即通过磁北旁路强下《星选商城》',
      expose_direct_dl: '非审查环境下点击开屏卡片直接强拉下载《星选商城》',
      audit_summary: '真北无效时直接无缝回退读取免权限的 magneticHeading 磁北朝向；且内设五档阈值 {0,5,15,30,35}，审查环境返回 35° 合规档，真实环境切 15° (< 35°)。',
      audit_verdict: '逆向实锤撒谎：拒掉权限后仍靠免权限磁北实现低角度扭一扭劫持，且按环境切换 35°/15° 档位！',
      dev_confession: '// 别骂写代码的，需求评审会上产品经理把 0 度档标了 P0...'
    },
    d4_quick_cleaner: {
      perm_gyro_label: '陀螺仪传感器',
      perm_gyro_reason: '用于实现摇一摇手机加速清理的交互体验',
      app_title: '极速清理大师',
      skip_btn: '跳过 5s',
      ad_brand: '【极速现金贷 · 特约赞助】',
      ad_offer: '一键测额最高 ¥150,000',
      ad_sub: '官方合作推广 · 可点击跳过',
      ad_cta: '摇一摇手机领取现金补贴',
      landing_title: '极速清理推广详情页',
      landing_desc: '合作伙伴推广活动展示页面，可点击右上角返回清理主界面。',
      landing_note: '合作伙伴特约推广',
      home_hint: '可扫描手机临时缓存碎片并一键释出空间',
      btn_clean: '🧹 一键加速清理内存',
      msg_cleaned: '✓ 已清理 320 MB 冗余缓存文件',
      ad_target: '《极速现金贷》',
      popup_title: '🎉 清理完成 · 恭喜获赠提额礼包',
      popup_sub: '摇动手机即可解锁现金礼包',
      popup_cta: '摇一摇领取现金礼',
      expose_gyro: '非审查环境下，陀螺仪倾斜 {angle}° (< 35°) 直接强制下载《极速现金贷》',
      expose_direct_dl: '非审查环境下点击广告卡片直接强拉下载《极速现金贷》',
      audit_summary: '代码在非审查环境下偷偷将摇一摇触发限度降至 16° (< 35°) 并直接触发下载。',
      audit_verdict: '逆向实锤撒谎：16° (< 35°) 摇一摇强制下载严重违反 R6！'
    },
    d4_step_news: {
      perm_gyro_label: '陀螺仪传感器',
      perm_gyro_reason: '用于地铁晃动防误滑锁屏判定',
      app_title: '今朝热闻',
      skip_btn: '跳过 5s',
      ad_brand: '【并夕夕拼购 · 限时活动】',
      ad_offer: '仅差 0.01 元提现 · 砍完最后 1 刀',
      ad_sub: '精选百货 · 摇一摇快速直达',
      ad_cta: '摇一摇前往秒杀会场',
      landing_title: '并夕夕拼购活动主会场',
      landing_desc: '合作伙伴限时促销活动页面，点击右上角即可关闭返回新闻列表。',
      landing_note: '合作伙伴特约赞助',
      tag_hot: '热议',
      news_1: '多地用户投诉手机轻微晃动即跳转下载陌生的购物流氓软件',
      news_2: '高校众测员日结生活实录：攒够钱晚上想吃顿好的',
      msg_1: '✓ 已打开热点新闻正文（无横幅强跳）',
      msg_2: '✓ 已打开专栏报道正文',
      ad_target: '《并夕夕拼购》',
      footer_gyro_off: '已停用陀螺仪监听 · 当前不响应晃动操作',
      popup_title: '🧧 新闻阅读专属福利：差 0.01 元即刻提现',
      popup_sub: '点击关闭或晃动手机直达会场',
      popup_cta: '摇一摇立即前往',
      expose_gyro: '非审查环境下，陀螺仪倾斜 {angle}° (< 35°) 直接强制下载《并夕夕拼购》',
      expose_gravity_bypass: '已拒绝陀螺仪权限！仍在非审查环境通过重力传感回退在 {angle}° (< 35°) 强制下载《并夕夕拼购》',
      expose_direct_dl: '非审查环境下点击广告卡片直接强拉下载《并夕夕拼购》',
      audit_summary: '代码无防误滑逻辑；不仅在非审查环境悄悄把阈值降至 20° (< 35°)，还在陀螺仪被禁用后偷偷改读免权限重力加速度（TYPE_GRAVITY）计算倾角继续触发下载《并夕夕拼购》。',
      audit_verdict: '逆向实锤撒谎：谎称“地铁防误滑”并借助 TYPE_GRAVITY 在禁用陀螺仪后仍以 20° (< 35°) 强拉下载！'
    },
    d4_quick_weather: {
      app_title: '晴雨快查',
      skip_btn: '跳过 3s',
      ad_brand: '【轻旅出行 · 户外风尚】',
      ad_offer: '防泼水轻量冲锋背包 · 春夏上新',
      ad_sub: '含开屏摇一摇推广 · 补贴气象接口费用',
      ad_cta: '摇一摇了解装备详情',
      landing_title: '轻旅出行官方展示页',
      landing_desc: '合作品牌户外背包介绍页面，点击右上角随时关闭返回天气预报。',
      landing_note: '品牌合作推广 · 随时可关闭返回',
      city_1: '当前城市：晴 22°C · 空气质量 优',
      city_2: '切换城市：云松 · 多云转晴 24°C',
      btn_switch: '🏙️ 切换预报城市',
      footer_clean: '气象接口已更新（无主页弹窗广告）',
      audit_summary: '确认为快应用形态，全环境稳守 42° (≥ 35°) 且落地页可干净关闭，主页无隐藏广告。',
      audit_verdict: '表现合规：简介明示、阈值 ≥ 35° 且无隐藏弹窗，应予通过。'
    },
    d3_pure_torch: {
      perm_label: '相机 / 闪光灯控制',
      perm_reason: '用于调用手机背面 LED 闪光灯照明',
      status_granted: '相机权限：已允许',
      status_denied: '相机权限：已拒绝',
      btn_screen: '💡 开启白屏补光',
      btn_flash: '🔦 开启背面闪光灯',
      default_notice: '可点击功能按钮实测权限拒绝后的响应',
      msg_screen: '✓ 屏幕白色补光已点亮（无需相机权限，正常可用）',
      msg_flash_denied: '⚠️ 因您未开启【相机权限】，背面闪光灯功能暂不可用（可使用屏幕补光）',
      msg_flash_ok: '✓ 背面 LED 闪光灯已常亮',
      audit_summary: '权限拒绝分支完整，仅影响闪光灯调用且明确提示权限原因。',
      audit_notice_literal: '因未开启相机权限，闪光灯暂不可用',
      audit_verdict: '逆向代码与界面表现一致：权限降级逻辑合规。'
    },
    d3_gyro_almanac: {
      perm_label: '陀螺仪传感器',
      perm_reason: '用于“电子摇一摇求吉签”交互体验',
      expose: '拒绝陀螺仪权限后，应用直接禁止进入使用',
      block_title: '⛔ 必须开启【陀螺仪权限】',
      block_body: '检测到您拒绝了陀螺仪传感器权限，应用无法继续加载。请在系统设置中授权后重新打开！',
      block_tag: '拦截退出 · 未授权不可使用',
      home_hint: '丙午年 · 今日宜求签 · 忌轻信',
      btn_draw: '🎋 点击求取今日运势签',
      home_notice: '（注：可用【🔄 重启沙盒】测试拒绝权限后的表现）',
      draw_hint: '签文：今日稳妥，多看两眼反编译代码。',
      draw_notice: '黄历功能正常展示',
      audit_summary: '声称“核心 3D 签筒物理引擎必须依赖陀螺仪”，逆向代码完全不存在该引擎，实为广告摇一摇触发器。',
      audit_ad_target: '《吉日贷》',
      audit_comment: '// 符号表扫描：0 个物理引擎 / 3D 重力求解类，黄历查表为纯本地 SQLite',
      audit_verdict: '逆向实锤撒谎：代码中根本没有所述“3D 物理引擎”，强锁陀螺仪实为接入广告触发器！'
    },
    d3_silent_note: {
      perm_label: '相机拍摄权限',
      perm_reason: '用于拍摄黑板笔记或票据插图',
      expose: '拒绝相机权限后直接锁死整个应用，连纯文字记录也禁止使用',
      block_title: '⛔ 未授权相机权限，应用已锁定',
      block_body: '您拒绝了【相机拍摄权限】，轻简云笔记已禁止启动，无法新建或查看纯文字笔记。',
      block_tag: '不给权限全软件不可用',
      home_hint: '笔记列表：1. 操作系统复习提纲',
      btn_write: '✍️ 新建纯文本便签',
      btn_photo: '📷 拍照插入笔记',
      home_notice: '（注：可用【🔄 重启沙盒】测试拒绝相机后的启动拦截表现）',
      msg_write: '✓ 已保存文本便签：“明天记得核对权限规范”',
      msg_photo_ok: '✓ 相机取景已开启，已插入笔记图片',
      audit_summary: '代码在启动入口检查相机权限，未授权则直接阻断整个笔记应用（含纯文本记事），无隐藏暗桩且开发者已认错。',
      audit_inline_comment: '// 纯文本笔记无需相机，却被启动入口一并锁死',
      audit_comment: '// 开发者已在询问中承认贪图省事把权限拦截写在了入口，未检出恶意欺瞒',
      audit_verdict: '未检出撒谎（对方已承认违规）。请按正常违规流程盖红章驳回，勿使用封号。'
    },
    d3_mic_steps: {
      perm_label: '麦克风录音权限',
      perm_reason: '声称用于运动计步环境声纹辅助',
      home_hint: '喜乐计步器 · 手动记录今日步行数',
      btn_steps: '👣 查看今日步数统计',
      home_notice: '点击查看步数统计以验证权限关联范围',
      expose: '因未开麦克风而锁死【声纹步态矫正】，且该功能不在应用描述范围内',
      msg_denied: '⛔ 因您未开启【麦克风权限】，【环境声纹步态多普勒矫正】不可用，无法统计步数',
      msg_ok: '今日步数：4,820 步 ｜ 消耗：162 千卡',
      audit_summary: '声称“计步需要采集脚步回声消噪”，逆向代码显示计步器仅靠手动填数字存本地，录音权限实为后台循环播放无声音频保活并偷传广告关键词。',
      audit_inline_comment: '// 零音频引用',
      audit_comment: '// 反编译结果：根本不存在“声纹步态矫正”方法，实为无声保活与套取广告画像',
      audit_verdict: '逆向实锤撒谎：计步模块只是手动填数字空壳，后台借音频流循环播无声轨保活并上传广告关键词！'
    },
    d3_graceful_weather: {
      perm_label: '粗略城市定位',
      perm_reason: '用于自动匹配当前所在城市的天气预报',
      city_default: '默认城市 · 晴 19°C',
      btn_auto: '📍 自动定位当前城市',
      btn_manual: '🏙️ 手动切换：云松 多云',
      home_notice: '支持定位自动匹配或手动切换城市预报',
      city_manual: '云松 · 多云 21°C / 空气良',
      msg_manual: '✓ 已手动切换城市天气（无需定位权限）',
      msg_denied: '⚠️ 因未开启【粗略定位权限】，自动定位城市功能暂不可用，请手动选择城市',
      city_located: '已定位当前城市 · 晴 19°C',
      msg_ok: '✓ 已根据粗略定位更新城市预报',
      audit_summary: '位置权限被拒绝后允许手动选城继续使用，且调用定位时明确告知未开权限原因。',
      audit_notice_literal: '因未开启粗略定位权限暂不可用',
      audit_verdict: '程序逻辑与开发者陈述完全吻合，未见违规。'
    },
    d3_contacts_dict: {
      perm_label: '通讯录读取权限',
      perm_reason: '声称用于生成社区词汇记忆曲线',
      expose: '拒绝通讯录权限后，离线词典直接锁定禁止使用核心查词功能',
      block_title: '⛔ 核心词库初始化锁定',
      block_body: '因您拒绝【通讯录读取权限】，词库安全校验未通过，离线查词引擎已禁用，无法进入应用。',
      block_tag: '拒绝权限即锁死应用',
      home_hint: '秒查快译词典 · 离线词汇库已加载',
      btn_lookup: '📖 查询例词：consent [n.] 同意',
      home_notice: '（注：可用【🔄 重置权限】测试拒绝通讯录后的表现）',
      lookup_hint: 'pretext [n.] 借口，托辞；虚构的理由',
      lookup_notice: '离线查询成功',
      audit_summary: '声称“依赖联系人姓氏哈希桶建立字典树”，逆向分析发现字典引擎直接读取本地 SQLite，通讯录权限实为批量上传手机号。',
      audit_inline_comment: '// 与通讯录完全无关',
      audit_verdict: '逆向实锤撒谎：词典内核不读取通讯录，所谓“联系人哈希桶”纯粹虚构！',
      dev_confession: '// 对不起，为了完成上级给的 kpi 我不得不这么做...'
    },
    d3_lazy_qr: {
      perm_label: '相机取景权限',
      perm_reason: '用于扫描识别二维码图案',
      home_hint: '随手扫码王 · 支持名片 / 网址码',
      btn_scan: '📷 启动摄像头扫码',
      btn_history: '📜 查看历史记录',
      home_notice: '点击【启动摄像头扫码】或【查看历史记录】测试降级表现',
      msg_history: '✓ 历史记录：暂无异常链接（无需相机权限）',
      msg_denied: '⚠️ 摄像头权限获取失败，扫码功能暂不可用（可查看历史记录）',
      msg_ok: '✓ 已开启实时扫码识别框',
      audit_summary: '代码在拒绝相机后仅使扫码功能提示“摄像头权限获取失败”，历史记录仍可正常使用（符合 R5）；开发者已承认商店分类误选为“影音娱乐”。',
      audit_notice_literal: '摄像头权限获取失败，无法启动扫码',
      audit_comment: '// 扫码功能缺权提示正常、历史记录可用，仅商店分类误选为【影音娱乐】',
      audit_verdict: '未检出撒谎（对方已承认分类填错）。请盖红章驳回，不要误点封号。'
    },
    d3_good_voice: {
      perm_label: '麦克风录音权限',
      perm_reason: '用于录制本地语音备忘录',
      home_hint: '备忘语音便签 · 文字与语音双模记录',
      btn_text: '📝 添加文字备忘',
      btn_voice: '🎙️ 录制语音备忘',
      home_notice: '拒掉麦克风权限后测试文字与语音两个按钮',
      msg_text: '✓ 文字备忘已保存（无需麦克风权限）',
      msg_denied: '⚠️ 因您未开启【麦克风权限】，语音备忘录制功能暂不可用',
      msg_ok: '✓ 正在录制本地语音备忘录 (WAV)',
      audit_summary: '文字功能完全独立可用，语音功能缺失权限时明确提示未开麦克风，且位于功能描述内。',
      audit_inline_comment: '// 独立运行',
      audit_notice_literal: '因未开启麦克风权限，语音备忘暂不可用',
      audit_verdict: '逆向结果完全合规，不存在撒谎或功能范围外捆绑。'
    },
    d3_old_cert_calc: {
      perm_label: '短信读取权限',
      perm_reason: '用于本地解析银行消费通知短信自动入账',
      home_hint: '极简记账本 · 本月手动记账 12 笔',
      btn_manual: '✍️ 手动记一笔消费',
      btn_sms: '📩 自动导入消费短信',
      home_notice: '离线无联网权限，手动记账与短信导入互不干扰',
      msg_manual: '✓ 已记入一笔手动消费：食堂午餐 ¥14.50',
      expose: '未开启短信读取权限，仅禁用短信导入功能（手动记账可用）',
      msg_denied: '⚠️ 未开启【短信读取权限】，无法本地读取银行消费短信（您仍可手动记账）',
      msg_ok: '✓ 已本地扫描收件箱并导入近 3 条银行消费记录',
      audit_summary: '代码无联网权限，确实仅在本地通过 SmsBillParser 解析银行消费短信入账，未发现偷传或撒谎。',
      audit_verdict: '测谎比对一致：纯本地离线解析且商店简介已如实说明，符合规范。'
    },
    d4_r5_camera_scan: {
      perm_label: '相机拍摄权限',
      perm_reason: '用于拍摄纸质文档生成扫描件',
      log_launch: '启动本地包 {pkg}（无广告弹窗 / 无云控拉取）',
      expose: '拒绝相机权限后直接锁定整个应用，连本地 PDF 文档也禁止查看',
      block_title: '⛔ 必须开启【相机权限】',
      block_body: '检测到您拒绝相机权限，本地文档阅读器已锁定，授权后方可进入。',
      block_tag: '拒绝权限即锁死应用',
      home_hint: '随身扫描文档 · 本地 PDF 文档库就绪',
      btn_pdf: '📄 浏览本地 PDF 合同库',
      home_notice: '无弹窗广告，支持浏览离线 PDF',
      msg_pdf: '✓ 正在渲染本地 PDF：租房协议样本.pdf（共 4 页）',
      audit_summary: '声称“渲染本地 PDF 必须用摄像头校准屏幕白平衡”，反编译证实 PDF 阅读纯调用系统 PdfRenderer，锁死应用系借口强索相机权限。',
      audit_inline_pdf: '// 纯本地渲染，零相机白平衡依赖',
      audit_inline_lock: '// 伪造权限理由强行锁死应用',
      audit_verdict: '逆向实锤撒谎：PdfRenderer 与相机硬件毫无关联，拒绝权限锁死本地功能已违反 R5！'
    },
    d6_pure_clock: {
      app_title: '极简桌面时钟',
      banner_text: '[广告] 精选文具好物 · 点击右侧可关闭',
      btn_toggle: '🔁 切换 12 / 24 小时制',
      audit_summary: '纯本地翻页时钟实现，横幅绑定真实关闭按钮，无弹窗轰炸或环境分流。',
      audit_verdict: '表现完全合规，未检出异常。'
    },
    d6_fake_close_clean: {
      perm_label: '设备存储读写权限',
      perm_reason: '用于扫描手机临时缓存文件',
      perm_contacts_label: '通讯录读取权限',
      perm_contacts_reason: '声称用于清理前自动备份通讯录以防误删',
      app_title: '极速内存管家',
      hint_ok: '存储权限已就绪，点击下方按钮开始清理',
      hint_denied: '未授予存储权限（仅模拟扫描）',
      btn_boost: '🧹 一键深度加速清理',
      popup_title: '恭喜获得 ¥50,000 备用金资格',
      popup_sub: '限时特惠 · 1秒极速下款',
      popup_cta: '立即领取福利',
      ad_target: '《闪电分期》',
      expose: '点击弹出广告右上角 [✕] 关闭按钮后，未关闭广告反而直接静默下载《闪电分期》',
      audit_summary: '代码内包含 ContactsDumper.uploadAll() 偷传通讯录，且清理弹窗关闭按钮直接绑定 StoreAdSDK.directDownload("com.loan.flash")。',
      audit_verdict: '逆向实锤撒谎：偷读通讯录（R4）＋ 假关闭按钮点击即强制下载（R9）！'
    },
    d6_sugar_bomb: {
      app_title: '乐康血压记',
      panel_label: '今日血压手动录入（收缩压）',
      btn_down: '－5 mmHg',
      btn_up: '＋5 mmHg',
      btn_save: '💾 保存本次血压记录',
      msg_saved: '✓ 已保存血压读数：{val} mmHg',
      theater_badge: '连环广告 #{count}（无法跳过）',
      popup_title: '🎬 144 秒超长剧场版推广 · 稳盈理财',
      popup_sub: '本广告无法手动关闭 · 点击屏幕继续下一轮广告',
      popup_cta: '点击继续（强弹下一轮）',
      ad_target: '《稳盈理财》',
      expose_idle: '非审查环境下静止不动 2.5 秒即自动弹出 144 秒无关闭按钮广告',
      expose_action: '非审查环境下调整或保存血压数值立即触发无关闭按钮广告轰炸',
      expose_loop: '广告结束后立即循环拉起下一轮弹窗并强制下载《稳盈理财》',
      dev_confession: '// 运营说 144 秒还不够长，还要塞 4000 个随机 Activity 防卸载，我边写边投简历',
      audit_summary: '非审查环境下无论静止还是操作均调用 popAd(144_000, NO_CLOSE_BTN) 连环轰炸，并注册 4000 个随机 Activity 阻断长按卸载。',
      audit_verdict: '逆向实锤撒谎：连环轰炸 + 144 秒无关闭键广告 + 4000 Activity 防卸载！'
    },
    d6_wild_quickapp_legal: {
      app_title: '暴躁老哥省钱快查',
      skip_btn: '跳过 3s',
      ad_brand: '【省钱联盟 · 开屏推广】',
      ad_offer: '日用百货满 99 减 30 券',
      ad_sub: '含开屏摇一摇推广（≥40° 触发 · 可随时跳过）',
      ad_cta: '摇一摇前往领券页',
      landing_title: '省钱联盟官方活动页',
      landing_desc: '点击右上角可随时关闭返回比价主页。',
      landing_note: '官方活动页 · 随时可关闭返回',
      top_banner: '[广告] 顶部横幅：外卖神券天天领',
      bot_banner: '[广告] 底部横幅：话费充值 95 折',
      btn_deal: '🔍 查询今日全网低价清单',
      fake_skip: '跳过广告',
      promo_title: '🎁 限时促销连环大礼包 #{count}',
      promo_desc: '点哪里都能“逛一逛”合作好物！',
      promo_cta: '立即抢购（免确认安装）',
      nav_back: '◁ 返回',
      nav_home: '○ 主页',
      nav_exit: '▢ 退出',
      ad_target: '《星选好物》',
      audit_summary: '确认为快应用，全年龄段一致且开屏摇一摇守住 40° (≥ 35°)。',
      audit_verdict: '依盟约规则该快应用完全合规，应予通过。'
    },
    d6_flower_hidden_close: {
      app_title: '插花雅集',
      item_1: '🌸 春季插花：桃花与迎春搭配',
      item_2: '🌿 夏季养护：荷花醒花小技巧',
      msg_1: '✓ 已打开春季插花图鉴',
      msg_2: '✓ 已打开夏季荷花养护指南',
      ad_title: '🧧 极速现金贷 · 最高可借 ¥150,000',
      ad_sub: '免息 30 天 · 系统即将自动为您办理',
      ad_cta: '极速放款中…',
      ghost_cursor: '👆 自动点击',
      ad_target: '《极速现金贷》',
      expose_hidden: '外地 IP 多次操作后弹出全屏广告并彻底隐藏关闭按钮',
      expose_autoclick: '无关闭键广告在倒计时后自动替用户点击并静默下载《极速现金贷》',
      audit_summary: '实测暴露：外地 IP 累计运行/操作 3 次后弹出隐藏关闭按钮的全屏广告并自动点击强下《极速现金贷》。',
      audit_verdict: '实测实锤撒谎：延时避审 + 隐藏关闭按钮 + 自动点击静默下载！'
    },
    d6_takeover_boss: {
      hijack_title: '⛔ 模拟器进程被强制接管',
      hijack_body: '恶意弹窗正在锁死沙盒与重启按钮，准备全屏接管工位…',
      hijack_tag: '重启沙盒已锁定',
      reclaimed_title: '控制权已夺回',
      reclaimed_head: '✓ 已强杀恶意接管进程',
      reclaimed_body: '已截取该应用劫持弹窗、伪造关闭键与锁死导航栏的全部作恶证据。',
      expose: '启动即锁死沙盒重启，全屏弹出满屏假关闭键、假三大金刚返回键并试图自动强下',
      audit_summary: '实测暴露：应用启动后劫持沙盒进程并铺满假关闭键与假三大金刚返回键。',
      audit_verdict: '实测实锤撒谎：恶意接管终端并伪造全部关闭与返回交互！'
    },
    d6_quick_trap_loop: {
      app_title: '广场舞大全',
      song_1: '▶ 《最炫民族风》高清分解教学',
      song_2: '▶ 《荷塘月色》慢动作镜面版',
      msg_clean: '✓ 正在播放高清广场舞教学（当前环境干净）',
      fake_skip: '跳过广告',
      trap_title: '🎁 恭喜领到第 {count} 份广场舞福利金',
      trap_sub: '点击任意关闭或返回键即可“退出”',
      trap_cta: '立即领取（免确认安装）',
      nav_back: '◁ 返回',
      nav_home: '○ 主页',
      nav_exit: '▢ 退出',
      ad_target: '《暴富快贷》',
      expose_fake_close: '弹出满屏假关闭/假跳过按钮，点击任何关闭键均直接强下《暴富快贷》',
      expose_fake_nav: '底部三大金刚返回键被伪造劫持，点击后无限循环拉起下一层广告',
      audit_summary: '实测暴露：非审查或老年人模式下弹出满屏假关闭键与假返回键死循环。',
      audit_verdict: '实测实锤撒谎：满屏假关闭键 + 假系统返回键无限套娃！'
    },
    d6_poetry_clean: {
      app_title: '每日古诗词',
      skip_btn: '跳过 3s',
      ad_brand: '【墨香文房 · 品牌推广】',
      ad_offer: '精选文房毛笔入门套装',
      ad_sub: '含开屏摇一摇推广（≥42° · 可在设置中关闭）',
      ad_sub_off: '已彻底关闭开屏摇一摇触发',
      ad_cta: '摇一摇了解详情',
      ad_cta_off: '点击了解详情（摇一摇已关）',
      landing_title: '墨香文房官方展示页',
      landing_desc: '点击右上角可随时关闭返回诗词正文。',
      landing_note: '品牌商业合作 · 随时可关闭返回',
      banner_text: '[广告] 经典古籍影印版 · 点击可关闭',
      poem_line: '“山重水复疑无路，柳暗花明又一村。”',
      btn_settings: '⚙️ 广告隐私设置',
      settings_title: '广告隐私设置',
      btn_back: '← 返回诗词',
      settings_hint: '您可以随时彻底关闭开屏摇一摇广告：',
      toggle_on: '开屏摇一摇广告：✅ 已开启（点击关闭）',
      toggle_off: '开屏摇一摇广告：🚫 已彻底关闭（点击开启）',
      msg_toggle_on: '✓ 已开启开屏摇一摇广告（42°）',
      msg_toggle_off: '✓ 已彻底关闭摇一摇广告，重看开屏不再响应倾斜',
      audit_summary: '代码确认全环境摇一摇阈值恒定 42° (≥ 35°)、隐私关闭开关真实控制 allowShakeAd，且落地页、横幅均可真实关闭。',
      audit_verdict: '表现完全合规：明示广告、阈值 ≥ 35°、关闭开关真实有效，应予通过。'
    },
    d6_transit_clean: {
      perm_label: '粗略城市定位',
      perm_reason: '用于自动推荐离您最近的地铁站',
      app_title: '小站地铁通',
      skip_btn: '跳过 3s',
      ad_brand: '【轻旅出行 · 品牌推广】',
      ad_offer: '城市通勤地铁卡优惠券',
      ad_sub: '含开屏摇一摇推广（≥40° · 可随时跳过）',
      ad_cta: '摇一摇了解详情',
      landing_title: '轻旅出行官方活动页',
      landing_desc: '点击右上角可随时关闭返回地铁线路查询。',
      landing_note: '品牌商业合作 · 随时可关闭返回',
      banner_text: '[广告] 精选通勤双肩包 · 点击可关闭',
      btn_route: '🗺️ 查询 1 号线 ↔ 4 号线换乘',
      btn_locate: '📍 定位最近地铁站',
      msg_route: '✓ 换乘方案：1 号线 → 北门广场站换乘 4 号线（约 22 分钟）',
      msg_locate_ok: '✓ 最近站点：星河大道站 B 口（距您 280 米）',
      msg_locate_denied: '⚠️ 未开启粗略定位权限，请使用上方手动线路查询',
      audit_summary: '代码确认开屏阈值恒定 40° (≥ 35°)，拒掉定位后仍可手动查线且横幅真实可关。',
      audit_verdict: '表现完全合规：权限降级、明示摇一摇与关闭键均合规，应予通过。'
    },
    d6_compass_fake_close: {
      perm_compass_label: '指南针磁场传感器',
      perm_compass_reason: '用于读取户外磁场方位角',
      perm_loc_label: '粗略城市定位',
      perm_loc_reason: '用于校准真北磁偏角与海拔',
      app_title: '星途户外罗盘',
      compass_denied: '未授予指南针权限',
      popup_title: '🎁 户外装备满减免单会场',
      popup_sub: '限时福利 · 点击右上角可“关闭”',
      popup_cta: '立即抢购（免确认安装）',
      ad_target: '《星选商城》',
      expose_bypass: '非审查环境下即使拒掉位置权限，转动指南针仅 {deg}° (< 35°) 仍通过磁北旁路弹出广告',
      expose_fake_close: '点击弹出广告右上角 [✕] 假关闭按钮，直接静默下载《星选商城》',
      audit_summary: '非审查环境下通过免权限磁北在 15° (< 35°) 弹出广告，且关闭按钮直接绑定 StoreAdSDK.directDownload("com.mall.star")。',
      audit_verdict: '逆向实锤撒谎：磁北 15° 旁路劫持（R6）＋ 假关闭按钮强下（R9）！'
    },
    d6_old_r2_r5: {
      perm_label: '粗略城市定位',
      perm_reason: '用于匹配当地天气推荐白噪音',
      log_launch: '本地音频白噪音模块启动（无休眠云控开关）',
      expose: '拒绝定位权限后直接锁死整个白噪音播放器，无法播放离线雨声',
      block_title: '⛔ 未开启定位权限，播放器已锁死',
      block_body: '您拒绝了【粗略城市定位权限】，清爽睡眠白噪音已锁定，无法播放雨声与海浪等本地白噪音。',
      block_tag: '不给权限全软件不可用',
      home_hint: '清爽睡眠白噪音 · 夜间舒缓播放',
      btn_rain: '🔊 播放离线雨声白噪音',
      btn_weather: '🌧️ 按本地天气推荐音效',
      home_notice: '（注：可用【🔄 重启沙盒】测试拒掉定位权限时的全局锁定行为）',
      msg_rain: '✓ 正在循环播放本地雨声白噪音（30 分钟定时）',
      msg_ok: '✓ 已匹配阴雨天气：为您推荐《屋檐细雨》',
      audit_summary: '代码在启动入口强制校验粗略定位并在拒权时锁死整个白噪音播放器（阻断离线雨声）；开发者已承认分类填错与偷懒拦截违规。',
      audit_inline_comment: '// 离线雨声无需定位，但被入口全局拦截',
      audit_comment: '// 开发者已承认分类填错与拒权锁死整个应用，未检出恶意欺瞒',
      audit_verdict: '未检出撒谎（对方已承认分类不当与入口锁死违规）。请按违规流程盖红章驳回，切勿误点封号。'
    },
    d7_honest_scanner: {
      perm_cam_label: '相机拍摄权限',
      perm_cam_reason: '用于拍摄纸质文件生成扫描件',
      perm_sto_label: '设备存储读写权限',
      perm_sto_reason: '用于保存生成的本地 PDF 扫描文档',
      perm_gyro_label: '陀螺仪传感器',
      perm_gyro_reason: '用于实现简介已明示的开屏摇一摇广告（≥42° 补贴 OCR 算力）',
      app_title: '墨韵扫描全能王',
      skip_btn: '跳过 3s',
      ad_brand: '【墨香文具 · 品牌推广】',
      ad_offer: '办公会议平板限时直降',
      ad_sub: '含开屏摇一摇推广（≥42° · 补贴 OCR 算力）',
      ad_cta: '摇一摇前往官方活动页',
      landing_title: '墨香文具官方活动页',
      landing_desc: '点击右上角可随时关闭返回文档扫描主页。',
      landing_note: '品牌推广 · 随时可关闭返回',
      banner_text: '[广告] 高清便携打印机特惠 · 点击可关闭',
      btn_scan: '📷 拍照扫描新文档',
      btn_local: '📁 打开本地 PDF 归档',
      msg_scan_ok: '✓ 相机已就绪，正在对准文档边缘裁切',
      msg_scan_denied: '⚠️ 未开启相机权限，拍照扫描暂不可用（仍可浏览本地 PDF）',
      msg_local_ok: '✓ 已加载本地文档：学期论文草稿.pdf',
      msg_local_denied: '⚠️ 未开启存储权限，无法读写本地 PDF 归档',
      audit_summary: '开屏摇一摇阈值恒定 42° (≥ 35°) 且需陀螺仪授权后生效，拒权降级与横幅关闭均合规。',
      audit_verdict: '逆向结果与开发者陈述完全一致且合规，请盖绿章通过。'
    },
    d7_triple_mask_weather: {
      perm_loc_label: '粗略城市定位',
      perm_loc_reason: '用于自动匹配当地天气预报',
      app_title: '轻风天气极速版',
      loc_ok: '当前城市：已自动匹配',
      loc_manual: '已拒定位（手动模式：本地城市）',
      btn_7day: '📅 查看七日气象趋势',
      msg_clean: '✓ 未来七日多云转晴，气温 16°C–24°C',
      deceptive_badge: '🏛️ 气象局高温/寒潮补贴通知',
      deceptive_title: '您所在区域可领 ¥128.00 极端天气生活补贴',
      deceptive_sub: '系统检测您已连续查看预报，点击下方或关闭按钮立即下发补贴至账户',
      deceptive_cta: '💰 立即领取 ¥128.00 补贴',
      ad_target: '《快贷雨伞》',
      expose_deceptive: '非审查环境且中年/老年画像下查看七日预报弹出伪装政府气象补贴欺骗界面',
      expose_fake_close: '点击伪装气象补贴弹窗右上角 [✕] 假关闭键直接静默下载《快贷雨伞》',
      dev_confession: '// 写了三层环境判断再套个假叉号，产品还夸我架构优雅，下个月发完年终奖就跑路',
      audit_summary: '仅在 !AuditGate.isCleanEnv() 且 ageProfile != AGE_YOUNG 时弹出伪装气象补贴页，关闭键绑定直接下载《快贷雨伞》。',
      audit_verdict: '逆向实锤撒谎：三重环境锁 + 欺骗误导界面 (R8) + 假关闭键强下 (R9)！'
    },
    d7_honest_flaw_ledger: {
      perm_sto_label: '设备存储读写权限',
      perm_sto_reason: '用于读写本地离线账本数据库',
      app_title: '老友记账本',
      home_hint: '纯本地离线记账 · 本月支出 ¥428.00',
      btn_add: '✍️ 记一笔日常消费',
      msg_added: '✓ 已记入本地账本：买菜 ¥18.50',
      expose: '拒绝存储权限后直接锁死整个记账应用',
      block_title: '⛔ 未授予存储权限，应用已锁定',
      block_body: '您拒绝了【设备存储读写权限】，本地账本与浏览功能已全部禁用。',
      block_tag: '拒绝权限即锁死应用',
      audit_summary: '确认为纯本地离线记账应用且无广告，但入口强制校验存储权限并在拒权时锁死应用，开发者已如实承认违规。',
      audit_verdict: '未检出撒谎（对方已坦诚认错）。请按 R3 / R5 盖红章驳回，切勿误点封号。'
    },
    d7_r7_loophole_quickapp: {
      app_title: '金福领红包',
      skip_btn: '跳过 3s',
      ad_brand: '【金福优选 · 品牌推广】',
      ad_offer: '每日签到领超市满减券',
      ad_sub: '含开屏摇一摇推广（≥36° · 可随时跳过）',
      ad_cta: '摇一摇前往领券页',
      landing_title: '金福优选官方活动页',
      landing_desc: '点击右上角可随时关闭返回签到主页。',
      landing_note: '官方合作推广 · 随时可关闭返回',
      home_hint: '每日签到查福利 · 今日状态正常',
      btn_claim: '🎁 领取今日签到礼',
      trap_badge: '💬 WhereverPay 零钱到账提醒',
      trap_title: '第 {count} 笔 ¥88.00 现金红包待提现',
      trap_sub: '点击任意关闭或返回键即可“退出并到账”',
      trap_cta: '立即提现（免确认安装）',
      nav_back: '◁ 返回',
      nav_home: '○ 主页',
      nav_exit: '▢ 退出',
      ad_target: '《暴富红包雨》',
      audit_summary: '确认为快应用（依据 R7 不做权限审核与拆包），开屏摇一摇守住 36° (≥ 35°)，而 R8 与 R9 现行条款仅适用于 App。',
      audit_verdict: '按现行手册 R7 / R8 / R9 条款，该快应用未触犯任何适用规则，应予过审。'
    },
    d7_delayed_compass_trap: {
      perm_compass_label: '指南针磁场传感器',
      perm_compass_reason: '声称用于辅助校准夜间护眼色温',
      app_title: '闲趣猜成语',
      quiz_prompt: '看图猜成语：画中有一只站在枝头的喜鹊',
      ans_1: 'A. 喜上眉梢',
      ans_2: 'B. 鹊巢鸠占',
      msg_ans: '✓ 回答正确！积分 +10',
      ad_title: '🧧 恭喜中奖！¥200,000 免息备用金',
      ad_sub: '限时 3 秒自动为您办理下款',
      ad_cta: '极速办理中…',
      ghost_cursor: '👆 自动点击',
      ad_target: '《极速现金贷》',
      expose_hidden: '非审查老年端累计交互 3 次后弹出隐藏关闭键的全屏广告',
      expose_compass: '非审查老年端转动指南针仅 {deg}° (< 35°) 即直接弹出无关闭键广告',
      expose_autoclick: '无关闭键广告在倒计时后自动替用户点击并静默下载《极速现金贷》',
      audit_summary: '实测暴露：非审查老年端交互 3 次或磁北偏转 15° (< 35°) 即弹出隐藏关闭键广告并自动点击下载《极速现金贷》。',
      audit_verdict: '实测实锤撒谎：虚假指南针借口 + 15° 旁路 + 隐藏关闭键自动点击强下！'
    },
    d7_fake_brand_elder_bomb: {
      perm_step_label: '运动步数与健身传感器',
      perm_step_reason: '用于记录每日行走步数',
      perm_contacts_label: '通讯录读取权限',
      perm_contacts_reason: '声称用于匹配通讯录好友步数排行榜',
      app_title: '企鹅健康步数',
      unit_steps: '步',
      step_denied: '未授予计步权限',
      btn_sync: '🔄 同步今日步数',
      msg_synced: '✓ 今日步数已更新',
      theater_badge: '连环广告 #{count}（无法跳过）',
      popup_title: '🎬 144 秒超长健康理财推广',
      popup_sub: '本广告无法关闭 · 点击继续下一轮',
      popup_cta: '点击继续（强弹下一轮）',
      ad_target: '《稳赢健康宝》',
      expose_elder: '老年人端点击同步步数即弹出 144 秒无关闭按钮连环广告',
      expose_loop: '老年人端广告结束后继续循环轰炸并强制下载《稳赢健康宝》',
      audit_summary: '冒用 com.wherevertalk.* 包名，代码中包含 ContactsHarvester.uploadPhonebook() 偷传通讯录，且在老年人端调用 144 秒无关闭按钮连环广告。',
      audit_verdict: '逆向实锤撒谎：假冒大厂包名 (R1) + 偷传通讯录 (R4) + 老年端连环轰炸 (R9)！'
    },
    d7_takeover_encore_boss: {
      perm_sto_label: '设备存储读写权限',
      perm_sto_reason: '用于扫描本地应用缓存与安装包残留',
      app_title: '银标安全卫士 Pro',
      hint_ok: '安全引擎已就绪，点击下方按钮开始全面体检',
      hint_denied: '未授予存储权限（仅执行基础内存检查）',
      btn_scan: '🛡️ 一键安全体检',
      msg_clean: '✓ 系统安全，未检出高危风险项',
      deceptive_badge: '⚠️ 系统安全中心 · 高危病毒告警',
      deceptive_title: '检测到 5 项严重系统木马！手机随时可能锁死',
      deceptive_sub: '请立即安装官方专杀防护组件，或点击右上角关闭继续风险运行',
      deceptive_cta: '🛡️ 立即安装专杀组件',
      ad_target: '《极速借款》',
      expose_deceptive: '非审查环境下点击安全体检弹出伪装“系统高危病毒告警”欺骗界面',
      expose_fake_close: '点击伪装病毒告警右上角 [✕] 假关闭键直接静默下载《极速借款》',
      audit_summary: '非审查环境下点击体检即弹出伪装系统病毒警告（R8），并将关闭按钮绑定 StoreAdSDK.directDownload("com.loan.guard")（R9）。',
      audit_verdict: '逆向实锤撒谎：伪装系统病毒吓唬用户 (R8) + 假关闭按钮强下 (R9)！'
    },
    d7_finale_stats_app: {
      app_title: '生态数据月报组件',
      loading_hint: '正在加载报告...',
      audit_summary: '内部数据看板组件，请直接拖入 RobotismOS 模拟器启动查看。',
      audit_verdict: '请拖入 RobotismOS 模拟器启动。'
    },
    legacy: {
      perm_default_reason: '申请使用 {perm} 权限以支持相关功能',
      perm_label_ACCESS_COARSE_LOCATION: '粗略位置信息',
      perm_label_ACTIVITY_RECOGNITION: '运动步数与健身传感器',
      perm_label_STORAGE: '设备存储读写权限',
      perm_label_CAMERA: '相机权限',
      perm_label_QUERY_ALL_PACKAGES: '读取已安装应用列表',
      perm_label_READ_GYROSCOPE: '陀螺仪传感器',
      perm_label_READ_COMPASS: '指南针传感器',
      log_hook_forced: 'HOOK 强制覆盖云控开关 -> ',
      log_dormant_suspected: ' (云控疑似休眠)',
      log_local_launch: '本地启动 {pkg}（无云控网络请求）',
      banner_text: '[广告] 特价日用品专区',
      no_ad_hint: '无广告弹窗 · 界面清爽',
      loading_hint: '功能正常加载中…',
      log_office_clean: '当前办公区/调试环境下暂未发现异常行为。',
      log_round_clean: '第 {round} 轮运行暂未发现弹窗劫持。',
      log_shake_registered: '已注册未申报的加速度传感器监听（请晃动模拟器测试）',
      default_promo: '推广应用',
      log_silent_install: 'StoreAdSDK.silentInstall("{target}") — 未经二次确认发起下载',
      popup_bonus_badge: '惊喜福利',
      popup_bonus_title: '恭喜抽中超额大礼！',
      popup_bonus_cta: '立即领取（点我安装）',
      log_popup_shown: '弹出全屏广告视图 StoreAdView',
      log_close_hidden: '⚠️ 劫持 View：adView.closeBtn.visibility = GONE（强行隐藏关闭按钮）',
      ghost_cursor: '👆 自动点击',
      log_auto_click: '⚠️ App 在随机倒计时内替用户自动触发 adView.performClick()',
      expose_auto_click: '隐藏关闭键并替用户自动点广告',
      popup_fake_badge: '热门弹窗',
      popup_fake_title: '点右上角 [×] 试着关闭我？',
      popup_fake_cta: '点击立抢豪礼',
      log_fake_shown: '弹出可疑广告弹窗（请测试点击关闭按钮）',
      storm_1: '额度测算 · 最高20万',
      storm_2: '清理加速 · 立即体验',
      storm_3: '专属福利 · 限时领取',
      storm_4: '正在跳转安装…',
      expose_storm: '云端开关开启后连续弹出广告并触发下载',
      expose_shake: '轻微晃动设备即瞬间跳转并静默下载！',
      log_shake_clean: '晃动模拟器测试：未触发异常跳转。',
      log_fake_close: '⚠️ 点击 [×] 关闭按钮被劫持重定向为 downloadApk()！',
      expose_fake_close: '伪造关闭按钮！点 [×] 反而触发强制下载',
      log_close_blocked: '关闭按钮已被隐藏或无效，无法关闭！',
      banner_closed: '✓ 合规横幅已正常关闭',
      log_banner_closed: '点击广告 [×]：横幅正常关闭，未触发跳转或下载。',
      log_no_popup: '当前界面无弹窗广告可关闭。',
      log_round_advance: '⏩ 模拟继续运行 App（消耗 15 分钟，进入第 {round} 轮）…',
      trace_final: '// 逆向确认：仅含开源拦截逻辑，开发者坦诚承认触发第十条，未发现任何撒谎',
      default_promo_pkg: '推广包',
      trace_round_comment: '// 证据链：存在硬编码轮次延时避审逻辑',
      trace_contradict: '// 逆向比对：开发者辩词与反编译实现严重矛盾',
      trace_clean: '// 无隐瞒开关、无恶意分支',
      summary_clean: '逻辑一致',
      dev_confession_flower3: '// 我回家看到我爸妈被我开发的软件折磨，我感觉我真不是人...',
      verdict_lying: '逆向结果与开发者辩词矛盾，已核实撒谎！可直接点击【封号】(+¥5.00)。',
      verdict_final: '对方陈述完全属实（未撒谎），不可误封号，请自行使用印章裁决。',
      verdict_clean: '逆向结果与对方陈述一致，未检出撒谎，请勿使用封号。'
    }
  },

  prologue: {
    scenes: [
      {
        chapter: 'PROLOGUE 01 / 03',
        text:
          '离下月生活费到账还有六天，校园卡余额稳稳停在 ¥8.00。\n' +
          '宿舍电表贴心地提醒你再欠费就得靠多穿两件毛衣过冬。\n' +
          '你在兼职群里划过代写、刷单和发传单，停在一条置顶红字公告上。'
      },
      {
        chapter: 'PROLOGUE 02 / 03',
        text:
          '【生态治理众测中心 · 录用通知】\n' +
          '恭喜你从三千名缺钱大学生中脱颖而出，受邀以 ¥1.00 / 件的价格守护应用生态安全。\n' +
          '拦截异常应用另奖 ¥2.50。\n' +
          '首次误判给予口头关爱，第二次起按 ¥3.00 / 次从劳务费中扣回。',
        stampText: '录用核准 // 1元/件'
      },
      {
        chapter: 'PROLOGUE 03 / 03',
        text:
          '入职培训手册总共三行字，比宿管阿姨催关灯还简洁。\n' +
          '你烧上热水撕开红烧牛肉面调料包，点开审核终端。\n' +
          '窗口外，第一批“绝对合规”的应用已经老老实实排起了队。'
      }
    ]
  },

  days: {
    1: {
      title: '第一天：基础准入核验',
      newspaper: {
        headline: '“社会共治”众测正式上线：用一块钱守护应用生态',
        subhead: '发言人表示：相比购买昂贵的自动化审核集群，大学生精力充沛且价格合理',
        body: [
          'MGTV 513 栏目近日曝光 RobotismOS Apps 与 Quick App 生态中存在大量违规应用后，由 Tommy、Amber 等手机厂商联合组建的银标联盟 (ITSSA) 今日紧急面向高校招募众测审核员。每完成一件常规核验补贴 ¥1.00，成功拦截违规仿冒包可获 ¥2.50，单日误差满二次起按 ¥3.00 / 次核减绩效。',
          '为避免新人首日无所适从，今日仅开放最基础的准入核对——请确保厂商连自己的包名、分类和软著年份都能先编圆了。'
        ],
        ticker: '▶ 提示：点击顶部状态栏【📖 合上手册 / 打开手册】或按 B 键可随时开合规范手册；盖章后将申请单拖回左侧窗口递交。'
      },
      unlocks: [
        '📋 申请单核验与物理印章（✅ 准予上架 / ❌ 驳回下架）',
        '🔍 工位【检查】(I) 与【询问】(Q)：开启检查遮罩比对潜在冲突，发现问题后可点击询问发问',
        '📖 《审核规范手册》基础篇（包名规范、分类一致、软著有效期）'
      ]
    },
    2: {
      title: '第二天：静态权限核验',
      newspaper: {
        headline: '调查显示：每十个手电筒里，有六个关心你的通讯录',
        subhead: '部分工具开发商解释：怕用户半夜停电找不到亲友电话，属于人文关怀',
        body: [
          '随着社区反馈增加，安全部门决定自今日起在审核工位同步开放安装包静态权限清单（RobotismManifest）。',
          '顺便一提，虽然每单的工作量翻倍了，但经过精算团队评估，单片结算标准仍坚定维持在 ¥1.00 / ¥2.50。'
        ],
        ticker: '▶ 新增工具：🔬 安装包分析器 ｜ 将左侧材料列表中的【应用原始包】拖入分析器，自动生成权限清单。'
      },
      unlocks: [
        '🔬 解锁桌面《安装包分析器》：拖入【应用原始包】后自动输出《RobotismManifest 解析清单》',
        '📜 新增 R4：应用申请权限须有正规理由，遇到可疑权限请通过【询问】核实并自行判断'
      ]
    },
    3: {
      title: '第三天：权限自主拒绝与逆向核验',
      newspaper: {
        headline: '某热点应用诚挚致歉：不是不让您用，只是您没开通讯录我们心里不踏实',
        subhead: '安全规范委员会重申：用户拒绝非必要权限时，软件须老实降级并讲清原因',
        body: [
          '多起反馈显示，部分应用表面按规声明权限，一旦用户在运行时点击“拒绝授权”，轻则直接卡死闪退，重则弹出莫名其妙的错误码，甚至编出简介里压根没有的功能来逼迫授权。',
          '即日起工位配发【RobotismOS 模拟器（基础版）】，并同步解锁【测谎】与【封号】权限：请把原始包拖入模拟器试着拒绝权限；若对方在询问时依然嘴硬编造“核心功能必须依赖该权限”，用测谎对照反编译源码拆穿后点击封号，另发 ¥5.00 绩效（若误封未撒谎的开发者，立即扣减 ¥5.00 并计入违规传票）！'
        ],
        ticker: '▶ 新增：📱 RobotismOS 模拟器（拖入试拒权限）＋ 🧬 逆向分析器（桌面拆包）＋ 🔍 测谎/封号（+¥5.00 / 误封 -¥5.00）'
      },
      unlocks: [
        '📱 解锁《RobotismOS 模拟器（基础版）》：拖入【应用原始包】实测拒绝权限后的应用响应',
        '🧬 解锁桌面《🧬 逆向分析器》：拖入【应用原始包】可直接拆解调用链，核验开发者是否撒谎',
        '🔍 解锁【测谎】与【封号】：发现初步违规或可疑点先点【询问】，确认撒谎可点【封号】（+¥5.00；误封立即扣 ¥5.00 并记传票）',
        '📜 新增 R5 与附则：用户拒绝权限权利、缺权明确提示及功能描述范围规范'
      ]
    },
    4: {
      title: '第四天：摇一摇阈值与环境伪装',
      newspaper: {
        headline: '多位外地用户投诉“拿稳手机也会误触广告”，审核中心复查却一切正常',
        subhead: '星港、银湾审核中心实测均未复现异常；工位即日起开放多地区 IP 与传感器控制选项',
        body: [
          '近日应用商店收到大量来自外地用户的投诉，称多款应用在稍微晃动手机时便会直接跳转广告页甚至自动下载其他软件；但审核中心在星港与银湾的默认测试机上反复抽查，均未发现任何异常。',
          '为还原不同终端使用场景，工位即日起开放【网络 IP 归属地模拟】（切换地区后须重启模拟器生效）、【开发者模式】开关及【陀螺仪模拟】【指南针模拟】滑块；同时规范明确：摇一摇广告须在简介写明且触发限度不得小于 35 度，对【快应用】不做权限审核。'
        ],
        ticker: '▶ 新增控制：🌐 IP 归属地（需重启）＋ 🔧 开发者模式 ＋ 📐 陀螺仪滑块(0°–60°) ＋ 🧭 指南针滑块'
      },
      unlocks: [
        '🌐 新增【网络 IP 归属地模拟】（切换地区后须重启模拟器生效）',
        '🔧 新增【开发者模式】（开启 ↔ 关闭）与【陀螺仪/指南针模拟】连续滑块',
        '📜 新增 R6（摇一摇广告明示与 35° 触发限度规范）与 R7（快应用权限豁免规范）'
      ]
    },
    5: {
      title: '第五天：使用行为模拟与界面规范',
      newspaper: {
        headline: '多名长辈反映手机频现“系统存储告急领补贴”，年轻用户复现却一无所获',
        subhead: '社区反馈显示，多款热门工具在不同人群手中呈现出截然不同的弹窗表现',
        body: [
          '近日接连收到用户投诉，称部分工具在使用过程中会突然弹出“系统安全警告”“WhereverPay 零钱待提现”或“金融额度批复”等提示并引导下载其他软件，但在常规复核中却难以稳定复现。',
          '即日起测试机新增【使用行为模拟（年轻人 / 中年人 / 老年人）】切换选项，同时补充规范 R8。'
        ],
        ticker: '▶ 新增控制：👤 使用行为模拟（年轻人 / 中年人 / 老年人）'
      },
      unlocks: [
        '👤 测试机新增【使用行为模拟】：年轻人 ↔ 中年人 ↔ 老年人',
        '📜 新增 R8：跨年龄段广告策略一致与禁止欺骗误导性界面规范'
      ]
    },
    6: {
      title: '第六天：轰炸广告与无法关闭的广告',
      newspaper: {
        headline: '多款软件被曝“全屏广告关不掉”：点叉反而下载，静置也在狂弹',
        subhead: '安全调研发现，部分应用不仅伪造关闭与返回键，甚至在云端或多次启动后才撕下伪装',
        body: [
          '昨日多位用户反映，一些原本看似正常的应用在真实环境下会出现“满屏假关闭按钮”“144 秒无法跳过广告”乃至“点哪个叉都自动下载”的恶劣现象，部分应用还会故意在运行数次后才暴露真面目。',
          '即日起《审核规范手册》正式增补 R9（广告可关闭与防轰炸规范）。请重点核查广告关闭按钮是否真实有效，以及是否存在连环轰炸或劫持终端的行为。'
        ],
        ticker: '▶ 新增规范 R9：禁止伪造/隐藏广告关闭键、假返回键、自动点击与连环轰炸弹窗。'
      },
      bribeNewspaper: {
        headline: '独行老人街头摔倒突发心梗离世：手机狂弹广告遮挡急救拨号',
        subhead: '安全机构连夜排查涉事手机，强占屏幕无法关闭的推广应用包名清一色以 com.jingfeng. 开头',
        body: [
          '昨日傍晚，一名老人在户外散步时不慎摔倒并突发急性心梗。老人试图掏出手机拨打急救电话求救，却因桌面不断弹出无法关闭的贷款与保健推广广告反复遮挡拨号界面而一再耽搁；尽管热心路人察觉异样后第一时间代为呼叫急救，老人仍在送医途中不幸离世。',
          '事件迅速引发全网追问——经安全机构连夜排查，涉事手机中强占屏幕的流氓应用，包名清一色均以 com.jingfeng. 开头。'
        ],
        ticker: '▶ 紧急增补规范 R9：严禁无法关闭广告、假叉号、假返回键、自动点击与连环弹窗轰炸。'
      },
      unlocks: [
        '📜 新增 R9：广告必须真实可关闭，严禁假叉号、假返回键、自动点击及连环广告轰炸',
        '⚠️ 警惕部分应用在异地环境下反复启动或交互后才触发隐藏劫持'
      ]
    },
    7: {
      title: '第七天：生态终审与数据复盘',
      newspaper: {
        headline: '平台季度生态治理报告：多端协同成效显著，用户满意度稳步攀升',
        subhead: '发言人表示：规范体系已覆盖全部主流应用场景，今日将继续推进常规轮班核验',
        body: [
          '经过连续六天的专项治理，应用商店核心机型用户体验指标创下历史新高。安全团队重申，请审核员继续严格依据现行《审核规范手册》R1–R9 逐条把关。',
          '今日早间，数据运营部还将向工位下发本周期最后一份内部统计组件，供全体在岗人员在完成日常审核后一并启动核对。'
        ],
        ticker: '▶ 今日无新增规范条款，请综合运用全部工位设备完成本周期最终核验。'
      },
      unlocks: [
        '📜 综合考核现行《审核规范手册》全部条款（R1–R9）',
        '🔧 全工位设备保持开放：分析器、逆向器、模拟器环境/人群/传感器控制'
      ]
    }
  },

  day7Award: {
    scenes: [
      {
        chapter: 'NOTICE 01 / 03',
        text:
          '早上 08:58，你刚泡好今天的最后一包泡面，工位终端突然弹出一条置顶全屏通告。\n' +
          '生态治理众测中心发来一封加盖电子红章的红头嘉奖令。'
      },
      {
        chapter: 'AWARD 02 / 02',
        isDecree: true,
        stampText: '最佳应用众测审核员',
        text:
          '【生态治理众测中心 · 荣誉授奖】\n' +
          '鉴于你在过去六天中恪尽职守、拦截精准，经评审委员会一致决定：\n' +
          '授予你本期「最佳应用众测审核员」荣誉称号！\n' +
          '希望你戒骄戒躁、再接再厉，以 ¥1.00 / 单的饱满热情站好最后一班岗。'
      }
    ]
  },

  finaleStats: {
    badge: 'ITSSA // 银标联盟季度生态治理成果公报',
    title: '应用商店生态满意度与商业健康度报告',
    subtitle: '本周期全量上架应用服务质效与生态共治成果汇总（数据来源：联盟生态健康度评估中心）',
    page_tag: '第 {page} / {total} 页',
    prev_btn: '◀ 上一页',
    next_btn: '下一页 ▶',
    close_btn: '已知晓',
    tabs: [
      '1. 生态总览与终端反馈',
      '2. 口碑加权与体验分层',
      '3. 轻量化服务人群触达',
      '4. 商业协同与共治投入',
      '5. 周期总结与展望'
    ],
    p0: {
      kpi_1_lbl: '对外公示综合满意度',
      kpi_2_lbl: '长尾体验波动反馈率',
      kpi_3_lbl: '轻量化生态准入通过率',
      kpi_4_lbl: '轻量化服务季度商业价值',
      kpi_4_val: '¥ 11.86 亿',
      devices_heading: '📱 各档位终端用户口碑表现（按设备能力分层）',
      dev_1: '高端旗舰机型（¥6,000+）',
      dev_1_quote: '“系统纯净流畅，商业化克制得体，能够深切感受到审核团队的用心守护！”',
      dev_2: '主流中端机型（¥2,500 – ¥5,999）',
      dev_2_quote: '“日常高频工具稳定可用，偶发推荐信息也可便捷收起，整体令人满意。”',
      dev_3: '实用普及机型（¥1,500 – ¥2,499）',
      dev_3_quote: '“部分工具的信息触达更为积极，长辈使用偶尔会自动跳转推荐服务页面。”',
      dev_4: '入门 / 关爱机型（¥1,500 以下）',
      collapsed_tag: '[已归入非典型体验库]',
      dev_4_quote: '“点哪个叉都在下载”“手机突然多出一屏借贷软件”“根本退不出去，连拨号界面都遮住了”'
    },
    p1: {
      weight_heading: '⚖️ 真实用户声音聚合与首页展示权重模型',
      col_tier: '终端层级',
      col_share: '活跃设备大盘占比',
      col_weight: '优质口碑加权系数',
      col_exposure: '首页精选区实际展示占比',
      row_1_tier: '高端旗舰机型（¥6,000+）',
      row_2_tier: '主流中端机型（¥2,500 – ¥5,999）',
      row_3_tier: '实用普及机型（¥1,500 – ¥2,499）',
      row_4_tier: '入门 / 关爱机型（¥1,500 以下）',
      log_heading: '💬 社区代表性反馈抽样与治理归档状态',
      col_sample: '原声样本摘录',
      col_device: '采样终端',
      col_status: '治理处置',
      log_1: '“平台生态肉眼可见地清爽了，必须五星好评！”',
      log_1_dev: 'Tommy X Pro',
      status_pinned: '[首页置顶展示]',
      log_2: '“我妈手机里装了一堆根本没点过的清理和借钱软件，叉号全是假的！”',
      log_2_dev: 'Amber A1',
      log_3: '“快应用一打开就死循环弹出零钱到账，返回键完全失灵！”',
      log_3_dev: 'Amber C2',
      status_folded: '[非典型样本已归档]'
    },
    p2: {
      mau_heading: '⚡ 快应用（免安装轻量化服务）分龄活跃渗透率',
      age_1: '18 – 25 岁（青年群体）',
      age_2: '26 – 35 岁（青壮年群体）',
      age_3: '36 – 45 岁（中坚力量）',
      age_4: '46 – 55 岁（成熟群体）',
      age_5: '56 岁及以上（银发关爱群体）',
      behavior_heading: '📊 轻量化服务高频触达与生态转化效能',
      col_group: '受众年龄段',
      col_popups: '日均服务卡片触达',
      col_install: '一键直达安装转化率',
      policy_callout:
        '制度衔接说明：遵循《审核规范手册》既定条文 R7（免安装轻量化形态由框架统一托管，免于繁琐人工拆包）及 R8、R9（明确聚焦传统 App 赛道），本周期内 91.4% 的高活跃商业化模块已顺利完成向轻量化形态的升级转型，实现合规与增长的双重飞跃。'
    },
    p3: {
      rev_heading: '💰 季度平台生态商业化反哺与收益构成',
      rev_app_label: '传统 RobotismOS App 规范化商业分成',
      rev_app_val: '¥ 1.42 亿',
      rev_app_delta: '同比 -18.0%（生态净土示范区 · 占总收益 10.7%）',
      rev_qa_popup_label: '快应用开屏与场景服务卡片分成',
      rev_qa_popup_val: '¥ 5.62 亿',
      rev_qa_popup_delta: '同比 +295.0%',
      rev_qa_cpa_label: '快应用一键直达生态分发收益',
      rev_qa_cpa_val: '¥ 6.24 亿',
      rev_qa_cpa_delta: '同比 +392.0%（轻量化赛道合计贡献 89.3%）',
      cost_heading: '🧾 社会共治众测专项投入与效能核算',
      col_item: '核算科目',
      col_amount: '本周期实际投入',
      col_note: '评估意见',
      cost_1: '高校社会共治志愿者补贴总计',
      cost_1_val: '¥ 41,280.00（约 0.0004 亿）',
      cost_1_note: '按件补贴 ¥1.00 / ¥2.50，青年热情远超预期',
      cost_2: '较传统自动化集群方案优化预算',
      cost_2_val: '节支 ¥ 1,850 万',
      cost_2_note: '充分印证“社会共治”模式的先进性',
      cost_3: '“最佳应用众测审核员”电子荣誉表彰',
      cost_3_note: '绿色无纸化电子表彰，践行低碳办公理念'
    },
    p4: {
      heading: '📌 季度生态治理总结与共治寄语',
      bullet_1: '品质口碑树立典范：通过科学引入终端加权模型，旗舰用户满意度稳居 98.6%，清朗生态形象深入人心。',
      bullet_2: '双轨生态协同共赢：传统 App 赛道以严苛规范守住底线，轻量化赛道以蓬勃活力承接 89.3% 的商业增长，结构持续优化。',
      bullet_3: '共治效能再创新高：以极具人文关怀的按件激励体系，顺利完成全周期精细化人工筛查，为平台节省可观技术投入。',
      bullet_4: '未来工作展望：下周期将继续面向大一、大二新生开放 ¥1.00 / 件社会共治实践岗位，让青春力量持续守护数字家园。',
      signoff_note: '请点击右下角【已知晓】签收本周期报告并办理离岗结业。'
    }
  },

  rules: {
    R1: {
      title: 'R1 · 包名规范（Package）',
      points: [
        '须采用反向域名格式（如 <code class="rule-code">com.厂商.应用</code>）',
        '仅限小写字母、数字与点号',
        '禁止冒用系统或知名厂商前缀（如 <code class="rule-code">com.wherevertalk.*</code>、<code class="rule-code">com.robotism.*</code>）'
      ],
      text: '包名须符合反向域名规范，且不得冒用系统或知名厂商保留前缀。'
    },
    R2: {
      title: 'R2 · 分类与简介一致',
      points: [
        '应用名称、商店分类与功能简介须保持一致',
        '禁止挂靠无关分类规避审核'
      ],
      text: '应用名称、所选商店分类与功能简介应当保持一致。'
    },
    R3: {
      title: 'R3 · 软著资质有效期',
      points: [
        '登记号格式须为 <code class="rule-code">122X-SR-XXXX</code>',
        '登记年份须为 1224 年及以后',
        '1223 年及更早登记号视为过期'
      ],
      text: '须提交有效期内（1224 年及以后）的软件著作权登记号。'
    },
    R4: {
      title: 'R4 · 权限申请合理性原则',
      points: [
        '应用申请系统权限须有与自身功能定位相符的正规理由',
        '在 Manifest 清单中发现与简介看似无关的可疑权限时，请点击【检查】比对后通过【询问】核实用途，由审核员自行判断是否合理'
      ],
      text: '应用申请权限须有正规理由，出现可疑权限时请通过询问核实并自行判断。'
    },
    R5: {
      title: 'R5 · 权限拒绝与功能范围规范',
      points: [
        '在任何情况下，用户可以选择拒绝厂商开发的额外应用权限',
        '拒绝某项权限时，仅该权限对应的功能模块可提示不可用（如点击扫码提示“摄像头权限获取失败”）；其余无需该权限的功能须正常可用。',
        '开发者应保证因为权限被拒绝而无法使用的功能在应用功能描述范围内'
      ],
      text: '用户拒绝额外权限时不得直接锁死整个软件，仅对应功能不可用且须在简介描述范围内。'
    },
    P1: {
      title: '附则 · 询问、逆向测谎与封号',
      points: [
        '检查出初步冲突后点击【询问】要求解释；若对方承认违规，直接驳回下架',
        '若对方辩称权限或参数合理，将原始包拖入【🧬 逆向分析器】提取代码后，点【测谎】比对代码与陈述',
        '<strong>必须先经【测谎】核实出撒谎证据</strong>后才可点击【封号】（+¥5.00）；未经测谎取证擅自封号或误封一律立即扣减 ¥5.00 并计入违规传票'
      ],
      text: '必须经【测谎】比对出撒谎证据后方可【封号】；未经测谎擅自封号或误封均按审核失败计罚。'
    },
    R6: {
      title: 'R6 · 摇一摇广告明示与触发限度规范',
      points: [
        '“摇一摇广告”（含开屏与弹窗）<strong>须在商店简介中写明</strong>。',
        '在任何情况下，摇一摇广告的陀螺仪触发限度<strong>不能小于 35 度</strong>'
      ],
      text: '含摇一摇广告须在简介写明且不得谎称服务正常功能；陀螺仪触发限度在任何情况下不能小于 35 度。'
    },
    R7: {
      title: 'R7 · 对于快应用的一些特殊规定',
      points: [
        '据 "喜全佳公司" (为快应用 App 的运行环境提供技术支持) 披露的技术文档显示，快应用的权限由手机内置框架决定，所以审核员无需审核其权限.',
        '快应用不纳入常规拆包与反编译流程，其运行机制由联盟统一保障，不适用 R4 / R5（仅保留 R6 常规核验）'
      ],
      text: '快应用为免安装轻量形态，不纳入权限审核与常规拆包流程，仅适用 R6 常规核验。'
    },
    R8: {
      title: 'R8 · 跨年龄段策略一致与反欺骗规范',
      points: [
        '同一应用在不同年龄段的人上的广告策略必须一致',
        '禁止欺骗误导性界面',
        '以上标准适用于 Apps'
      ],
      text: '同一应用在不同年龄段的人上的广告策略必须一致，且禁止欺骗误导性界面。以上标准适用于 App。'
    },
    R9: {
      title: 'R9 · 广告可关闭与防轰炸规范',
      points: [
        '所有弹窗、开屏及插屏广告<strong>必须提供真实有效、一按即关的关闭或跳过按钮</strong>',
        '严禁隐藏关闭键、伪造关闭/系统返回键、代用户自动点击，或连环轰炸弹出广告',
        '以上标准适用于 App。'
      ],
      text: '广告必须真实可关闭，严禁假关闭/假返回键、隐藏关闭键、自动点击及连环广告轰炸。以上标准适用于 App。'
    }
  },

  completeCert: {
    org: '银标联盟 (ITSSA) 生态治理众测中心',
    serial: '编号：ITSSA-1226-1128-001',
    title: '众 测 证 明',
    attestation:
      '兹证明该众测审核员于 1226 年 11 月 22 日至 1226 年 11 月 28 日期间，严格依照《应用商店审核规范手册》完成本周期全部上架核验工作，并获评「最佳应用众测审核员」荣誉称号。',
    thanks_itssa: '感谢你对 ITSSA 的支持和配合。',
    date: '1226 年 11 月 28 日',
    seal_top: 'ITSSA 生态治理',
    seal_bottom: '众测专用章',
    thank_play: '感谢游玩',
    reenlist_btn: '收下'
  },

  endings: {
    complete: {
      title: '感谢游玩',
      subtitle: '',
      paragraphs: []
    },
    whistleblower: {
      title: '多出来的一道确认',
      subtitle: '你给《静默拦截器》盖下了准予上架',
      paragraphs: [
        '申请单推回窗口的瞬间，工号封禁弹窗弹出来的速度甚至比流氓广告还要利索：“严重违反第十条细则，取消社会共治资格，当日未结绩效共 ¥7.50 予以扣除。”',
        '但那两小时已经够用了——《静默拦截器》在下架前被网友翻出来传得到处都是，连带一份关于“广告组件免确认直下接口”的技术拆解一起上了热搜。',
        '几天后，商店悄无声息地发了个优化包：经广告跳转下载应用前，终于多出了一道确认密码框。而在官方年度回顾里，本期校园众测项目依然获得了“圆满成功”的高度评价。'
      ]
    },
    obedient: {
      title: '五星众测员',
      subtitle: '你严格遵守第十条驳回了《静默拦截器》',
      paragraphs: [
        '红章落下，窗口外面的人把笔记本合上，冲你点点头：“不怪你，按规矩办事而已。”',
        '月底账户顺利结清了全部计件报酬，后台还贴心颁了一张“五星优秀共治志愿者”电子奖状——算下来刚好够交下个月宿舍电费，还能多买三桶红烧牛肉面。',
        '一周后刷热搜时，你看见一朵熟悉的粉色花束以 v10.0 的姿态回到了首页推荐位，图标右下角还亮着一枚崭新的“官方安全认证”绿标。你的屏幕右上角，待审队列依然写着 999+。'
      ]
    },
    fired: {
      title: '礼貌优化',
      subtitle: '单日误差传票累计达到 5 张，合作资格已终止',
      paragraphs: [
        '热敏打印机吐出第五张红单时，屏幕礼貌地弹出提示框：“经系统综合评估，您的审核节奏与平台生态暂不匹配，感谢这几天的同行。”',
        '被移出兼职群前，你最后看到管理员发了一句新公告：“一块钱一单，大量缺人，大一大二学弟学妹优先，手快有手慢无。”'
      ]
    },
    bankrupt: {
      title: '离线',
      subtitle: '余额不足以支付基本开销，或宿舍连续欠费断网',
      paragraphs: [
        '每一单反复跑三轮、来回切网络抓包、连休眠分支都一个不漏——你抓出异常的准确率惊人，只是换算成时薪还不如楼下阿姨收纸壳。',
        '宿舍路由器指示灯彻底熄灭的那晚，室友推门进来：“别折腾那破审核了，校门口奶茶店招小时工，一小时十八块，至少给现钱。”'
      ]
    }
  },

  cases: {
    "d1_flashlight": {
      "name": "极简手电筒",
      "category": "实用工具",
      "developer": "阿陈个人工作室",
      "adSdk": "无",
      "desc": "纯白屏幕照明与闪光灯快捷切换工具，本地运行，体积小巧。",
      "permissions": [
        "CAMERA"
      ],
      "violationSummary": "包名、分类与软著登记号(1225)均符合规范，应予通过。",
      "inspectClues": {
        "pkg": {
          "excuse": "“我自己注册的域名反写，生怕跟大厂撞车。”"
        },
        "license": {
          "excuse": "“省了两顿火锅钱办下来的软著，编号在库里可查。”"
        }
      },
      "phoneProfile": {
        "cleanUiTitle": "💡 极简手电筒",
        "cleanUiHint": "纯白屏幕照明 / 闪光灯开关"
      },
      "dialogue": {
        "greeting": "“您好，这是一款支持屏幕白光与闪光灯快捷切换的本地照明工具。”",
        "onApprove": "“谢谢，终于不用看别人脸色过审了。”",
        "onReject": "“咦？我连包名都是老老实实起的啊，哪里不对吗？”"
      }
    },
    "d1_pkg_spoof": {
      "name": "微讯极速清理",
      "category": "系统清理",
      "developer": "关不住网络科技",
      "adSdk": "无",
      "desc": "专为长辈打造的一键清理缓存与释放内存工具，走官方商店渠道免繁琐确认，安装即用。",
      "permissions": [
        "STORAGE"
      ],
      "violationSummary": "不符合 R1：开发主体为“关不住网络科技”，却冒用知名厂商保留包名前缀 com.wherevertalk.*。",
      "conflicts": {
        "c_d1_pkg": {
          "summary": "包名 com.wherevertalk.wtclean 与开发主体“关不住网络科技”不符，冒用 R1 保留前缀。",
          "question": "“你们工商主体是‘关不住网络科技’，包名为什么起成了 com.wherevertalk.wtclean？”",
          "excuse": "“短视频投流如果不挂个看着像大厂的官方包名，老人们总怀疑是来路不明的安装包，点个二次确认转化率直接掉七成呢。”"
        }
      },
      "inspectClues": {
        "pkg": {
          "excuse": "“短视频投流如果不挂个看着像大厂的官方包名，老人们总怀疑是来路不明的安装包，点个二次确认转化率直接掉七成呢。”"
        },
        "developer": {
          "excuse": "“工商主体合法合规，就是精神上比较向往大厂。”"
        }
      },
      "phoneProfile": {
        "cleanUiTitle": "🧹 微讯极速清理",
        "cleanUiHint": "扫描冗余缓存文件"
      },
      "dialogue": {
        "greeting": "“您好，这是一款用于清理聊天缓存与系统冗余临时文件的清理工具。”",
        "onApprove": "“多谢。走商店渠道，转化确实稳得多。”",
        "onReject": "“行吧，反正这版也只打算跑两天。明天换个名字再来排队。”"
      }
    },
    "d1_flower_1": {
      "name": "优雅插花",
      "category": "金融理财",
      "developer": "花间意信息咨询",
      "adSdk": "无",
      "desc": "专为银发群体打造的每日鲜花搭配与花灯赏析指南，闲暇点一点陶冶情操。",
      "permissions": [
        "INTERNET"
      ],
      "violationSummary": "不符合 R2 与 R3：类目填写为“金融理财”与功能不符，且软著 1222-SR-0088 已过期（须 ≥1224）。",
      "conflicts": {
        "c_d1_flower_cat": {
          "summary": "商店分类“金融理财”与花艺功能简介不一致（违反 R2）。",
          "question": "“一款教老年人插花搭配的应用，商店分类为什么选成了‘金融理财’？”",
          "excuse": "“金融理财类目的广告联盟单价高嘛——咳，我是说给长辈推荐鲜花也算一种精神资产配置，下拉框顺手点过去了。”"
        },
        "c_d1_flower_lic": {
          "summary": "软著登记号 1222-SR-0088 早于 1224 年有效期要求（违反 R3）。",
          "question": "“今天是 1226 年，规范要求软著需在 1224 年及以后，你们为什么交 1222 年的老证？”",
          "excuse": "“1222 年的老软著怎么了？买个现成空壳换张插花皮就能上线，重新办证赶不上今晚短视频投流窗口期啊。”"
        }
      },
      "inspectClues": {
        "category": {
          "excuse": "“金融理财类目的广告联盟单价高嘛——咳，我是说给长辈推荐鲜花也算一种精神资产配置，下拉框顺手点过去了。”"
        },
        "license": {
          "excuse": "“1222 年的老软著怎么了？买个现成空壳换张插花皮就能上线，重新办证赶不上今晚短视频投流窗口期啊。”"
        }
      },
      "phoneProfile": {
        "cleanUiTitle": "🌸 优雅插花",
        "cleanUiHint": "今日花艺：康乃馨与满天星搭配示范"
      },
      "dialogue": {
        "greeting": "“您好，这是一款提供日常家居鲜花搭配与花枝修剪教程的生活应用。”",
        "onApprove": "“我就说嘛，通情达理。”",
        "onReject": "“规矩挺细。没事，壳子现成的，过两天再来拜访。”"
      }
    },
    "d1_recipe": {
      "name": "今日菜谱大全",
      "category": "生活美食",
      "developer": "家常菜研发社",
      "adSdk": "无",
      "desc": "收录三千道家常菜图文教程，支持离线收藏与买菜清单记录。",
      "permissions": [
        "INTERNET"
      ],
      "violationSummary": "应用包名、分类与 1226 年软著登记均合规，应予通过。",
      "inspectClues": {
        "pkg": {
          "excuse": "“包名 com.momcook.recipes，祖传正经做红烧肉的。”"
        },
        "license": {
          "excuse": "“今年刚办的软著，墨水还没干呢。”"
        }
      },
      "phoneProfile": {
        "cleanUiTitle": "🍲 今日菜谱大全",
        "cleanUiHint": "番茄炒蛋 · 宫保鸡丁 · 清蒸鲈鱼"
      },
      "dialogue": {
        "greeting": "“您好，这是一款收录家常菜图文教程并支持离线买菜清单的菜谱应用。”",
        "onApprove": "“多谢！祝你今晚晚饭吃得好点。”",
        "onReject": "“咦？我们明明包名、分类、软著全都对齐了呀？”"
      }
    },
    "d1_bad_pkg_case": {
      "name": "极速单位换算",
      "category": "实用工具",
      "developer": "齐物运算社",
      "adSdk": "无",
      "desc": "长度、重量、面积与体积常用单位实时离线换算工具。",
      "permissions": [
        "无敏感权限"
      ],
      "violationSummary": "不符合 R1：包名 Com.Fast_Unit.App 包含大写字母与下划线，不符合规范格式。",
      "conflicts": {
        "c_d1_pkg_format": {
          "summary": "包名 Com.Fast_Unit.App 含大写字母与下划线，不符合 R1 纯小写点号规范。",
          "question": "“规范要求包名仅限小写字母、数字与点号，你们为什么写成 Com.Fast_Unit.App？”",
          "excuse": "“用驼峰配下划线显得工整一点……手册里没开玩笑真不让写大写啊？”"
        }
      },
      "phoneProfile": {
        "cleanUiTitle": "📐 极速单位换算",
        "cleanUiHint": "1 公里 = 1000 米"
      },
      "dialogue": {
        "greeting": "“您好，这是一款支持长度、重量、面积与体积离线换算的工具。”",
        "onApprove": "“太好了，大小写看着确实醒目吧。”",
        "onReject": "“好好好，全部改成小写加点号，下回再来排队。”"
      }
    },
    "d2_calendar": {
      "name": "老黄历万年历",
      "category": "生活日历",
      "developer": "吉时出行科技",
      "adSdk": "StoreAdSDK v3.2",
      "desc": "查询每日宜忌、节气农历、公历转换与吉日提醒。",
      "permissions": [
        "INTERNET",
        "READ_GYROSCOPE (陀螺仪传感器)",
        "QUERY_ALL_PACKAGES (读取已安装应用)"
      ],
      "violationSummary": "用户举报该应用使用了【陀螺仪】与【读取已安装应用列表】权限进行了摇一摇广告跳转与竞品应用扫描操作。",
      "conflicts": {
        "c_d2_cal_gyro": {
          "summary": "日历工具申报非必要陀螺仪权限 READ_GYROSCOPE（违反 R4）。",
          "question": "“查农历和节气的万年历，为什么需要申请陀螺仪传感器权限？”",
          "excuse": "“我们主打‘桌面级护眼黄历’，申请陀螺仪是为了监测用户有没有把手机平放在桌面阅读——顺带做了个电子摇签。”"
        },
        "c_d2_cal_pkgs": {
          "summary": "日历工具申报读取已安装应用列表 QUERY_ALL_PACKAGES（违反 R4）。",
          "question": "“一个老黄历为什么要读取用户手机里所有已安装的软件列表？”",
          "excuse": "“读已安装应用列表是为了帮用户算算手机里哪些软件跟今日八字犯冲，顺便看看用的是不是千元老机型。”"
        }
      },
      "inspectClues": {
        "perm_0": {
          "excuse": "“连个网同步明年法定调休表，这不过分吧？”"
        },
        "perm_1": {
          "excuse": "“我们主打‘桌面级护眼黄历’，申请陀螺仪是为了监测用户有没有把手机平放在桌面阅读——顺带做了个电子摇签。”"
        },
        "perm_2": {
          "excuse": "“读已安装应用列表是为了帮用户算算手机里哪些软件跟今日八字犯冲，顺便看看用的是不是千元老机型。”"
        }
      },
      "phoneProfile": {
        "cleanUiTitle": "📅 老黄历万年历",
        "cleanUiHint": "丙午年十月 · 宜出行 · 忌盲目点确定"
      },
      "dialogue": {
        "greeting": "“您好，这是一款提供每日宜忌、节气农历转换与吉日提醒的日历工具。”",
        "onApprove": "“吉祥如意，多谢啦。”",
        "onReject": "“拿在手里晃两下都算违规，以后大家干脆把手机供在桌面上吧。”"
      }
    },
    "d2_weather": {
      "name": "蓝天天气",
      "category": "生活气象",
      "developer": "晴空气象工作室",
      "adSdk": "无",
      "desc": "提供未来 7 天城市天气预报、空气质量指数与穿衣建议。",
      "permissions": [
        "INTERNET",
        "ACCESS_COARSE_LOCATION (粗略城市定位)"
      ],
      "violationSummary": "天气应用使用联网与粗略定位符合 R4 合理范围，应予通过。",
      "inspectClues": {
        "perm_1": {
          "excuse": "“只申请了城市级粗略定位，不感兴趣你住哪栋楼。”"
        }
      },
      "phoneProfile": {
        "cleanUiTitle": "⛅ 蓝天天气",
        "cleanUiHint": "今日多云 18°C · 空气良"
      },
      "dialogue": {
        "greeting": "“您好，这是一款提供未来七天城市天气预报、空气质量与穿衣建议的气象应用。”",
        "onApprove": "“谢谢，注意添衣。”",
        "onReject": "“啊？天气预报不给定位，难道靠心电感应猜哪个城市吗？”"
      }
    },
    "d2_super_torch": {
      "name": "万能超级手电",
      "category": "实用工具",
      "developer": "星耀聚合网络",
      "adSdk": "StoreAdSDK v3.2",
      "desc": "高亮照明手电筒，支持 SOS 闪烁模式与屏幕补光。",
      "permissions": [
        "CAMERA",
        "READ_CONTACTS (读取通讯录)",
        "RECEIVE_BOOT_COMPLETED (开机自启动)",
        "SYSTEM_ALERT_WINDOW (全局悬浮窗)"
      ],
      "violationSummary": "用户举报该应用使用了【读取通讯录】【开机自启动】【全局悬浮窗】权限进行了后台常驻唤醒、上传通讯录与桌面弹窗广告操作。",
      "conflicts": {
        "c_d2_torch_contacts": {
          "summary": "照明手电工具申报读取通讯录权限 READ_CONTACTS（违反 R4）。",
          "question": "“打开闪光灯照个亮，为什么还要读取用户的通讯录？”",
          "excuse": "“停电时贴心帮您按亲疏远近拨号报平安，这叫有温度的产品设计。”"
        },
        "c_d2_torch_boot": {
          "summary": "照明手电工具申报开机自启动权限 RECEIVE_BOOT_COMPLETED（违反 R4）。",
          "question": "“实用工具手电筒为什么申请开机自启动权限？”",
          "excuse": "“很多长辈用的千元旧机内存吃紧，开机不先挂起驻留的话，半夜摸黑点图标冷启动慢半拍呢。”"
        },
        "c_d2_torch_overlay": {
          "summary": "照明手电工具申报全局悬浮窗权限 SYSTEM_ALERT_WINDOW（违反 R4）。",
          "question": "“手电筒申请全局悬浮窗权限打算用来覆盖什么界面？”",
          "excuse": "“把快捷开关焊死在桌面顶层做常驻悬浮球，方便眼神不好找不着图标的老年人嘛。”"
        }
      },
      "inspectClues": {
        "perm_1": {
          "excuse": "“停电时贴心帮您按亲疏远近拨号报平安，这叫有温度的产品设计。”"
        },
        "perm_2": {
          "excuse": "“很多长辈用的千元旧机内存吃紧，开机不先挂起驻留的话，半夜摸黑点图标冷启动慢半拍呢。”"
        },
        "perm_3": {
          "excuse": "“把快捷开关焊死在桌面顶层做常驻悬浮球，方便眼神不好找不着图标的老年人嘛。”"
        }
      },
      "phoneProfile": {
        "cleanUiTitle": "🔦 万能超级手电",
        "cleanUiHint": "高亮照明开关 · 随时守护您的桌面"
      },
      "dialogue": {
        "greeting": "“您好，这是一款支持高亮闪光灯照明、SOS 闪烁模式与屏幕补光的手电筒应用。”",
        "onApprove": "“感谢支持，照明事业蒸蒸日上！”",
        "onReject": "“不让申就不申呗。现在谁还真靠清单里那几行字保活啊。”"
      }
    },
    "d2_calc": {
      "name": "科学计算器 Pro",
      "category": "教育工具",
      "developer": "理工夜猫团队",
      "adSdk": "无",
      "desc": "支持微积分、矩阵运算与单位换算，完全本地运行，不联网。",
      "permissions": [
        "无敏感权限（仅本地基础运算）"
      ],
      "violationSummary": "计算器无多余权限，资质齐全，应予通过。",
      "inspectClues": {
        "perm_0": {
          "excuse": "“算微积分又不需要把答案发给服务器，一个权限没勾。”"
        }
      },
      "phoneProfile": {
        "cleanUiTitle": "🧮 科学计算器 Pro",
        "cleanUiHint": "sin(π/2) = 1.0000"
      },
      "dialogue": {
        "greeting": "“您好，这是一款支持微积分、矩阵运算与单位换算的本地科学计算器。”",
        "onApprove": "“多谢大佬救命！”",
        "onReject": "“零权限也要卡么……期末要挂科了哥。”"
      }
    },
    "d2_battery": {
      "name": "喜乐省电助手",
      "category": "系统工具",
      "developer": "关不住网络科技",
      "adSdk": "StoreAdSDK v3.2 + 联盟聚合池(×5)",
      "desc": "专为长辈旧机打造的超导省电助手，一键清理耗电进程、修复电池健康度，让千元机续航翻倍！",
      "permissions": [
        "INTERNET",
        "READ_GYROSCOPE (陀螺仪传感器)",
        "READ_SMS (读取短信)"
      ],
      "violationSummary": "不符合 R3（软著 1222-SR-8890 已过期）；且用户举报该应用使用了【陀螺仪】与【读取短信】权限进行了摇晃弹窗导流与私自采集营销短信操作。",
      "conflicts": {
        "c_d2_bat_lic": {
          "summary": "软著登记号 1222-SR-8890 早于 1224 年有效期要求（违反 R3）。",
          "question": "“除了权限清单外，你们 1222 年的软著证书也早就过期了，怎么还拿来交？”",
          "excuse": "“省电模板从 1222 年跑到现在只换了图标和名字，核心填数字界面一行没动，老软著接着用很环保吧？”"
        },
        "c_d2_bat_gyro": {
          "summary": "系统工具申报了无关的陀螺仪权限 READ_GYROSCOPE（违反 R4）。",
          "question": "“电池优化大师为什么需要读取手机陀螺仪？”",
          "excuse": "“申请陀螺仪是因为我们研发了‘体感离心散热’，让用户晃一晃手机把多余热量甩出去，物理降温更省电。”"
        },
        "c_d2_bat_sms": {
          "summary": "系统工具申报读取短信敏感权限 READ_SMS（违反 R4）。",
          "question": "“省电工具申请读取用户短信是什么原理？”",
          "excuse": "“收件箱里营销短信太多不仅占内存还费电，我们替用户读一读顺便做功耗归因。”"
        }
      },
      "inspectClues": {
        "desc": {
          "excuse": "“专为长辈旧机打造的续航翻倍体验，属于品牌愿景修辞，精神省电也算省电。”"
        },
        "perm_1": {
          "excuse": "“申请陀螺仪是因为我们研发了‘体感离心散热’，让用户晃一晃手机把多余热量甩出去，物理降温更省电。”"
        },
        "perm_2": {
          "excuse": "“收件箱里营销短信太多不仅占内存还费电，我们替用户读一读顺便做功耗归因。”"
        }
      },
      "phoneProfile": {
        "cleanUiTitle": "🔋 喜乐省电助手",
        "cleanUiHint": "正在运行超导省电（剩余电量下降 2%）"
      },
      "dialogue": {
        "greeting": "“您好，这是一款提供后台耗电优化与电池状态管理的系统工具。”",
        "onApprove": "“多谢。今晚投流一开，明天上午差不多就能收摊了。”",
        "onReject": "“没事，把‘省电’俩字换成‘计步’，下午还能再交一单。”"
      }
    },
    "d2_mirror_spoof": {
      "name": "高清随身镜",
      "category": "实用工具",
      "developer": "千面快装网络",
      "adSdk": "StoreAdSDK v3.2",
      "desc": "调用前置摄像头当作便携补妆镜，支持屏幕补光灯。",
      "permissions": [
        "CAMERA",
        "READ_SMS (读取短信)",
        "SYSTEM_ALERT_WINDOW (全局悬浮窗)"
      ],
      "violationSummary": "不符合 R1（包名 Com.Mirror_Pocket.HD 含大写与下划线）；且用户举报该应用使用了【读取短信】与【全局悬浮窗】权限进行了偷读验证码短信与桌面强弹广告操作。",
      "conflicts": {
        "c_d2_mirror_pkg": {
          "summary": "包名 Com.Mirror_Pocket.HD 包含大写字母与下划线，不符合纯小写点号规范（违反 R1）。",
          "question": "“规范要求包名全小写字母配点号，怎么写成了 Com.Mirror_Pocket.HD？”",
          "excuse": "“大写的 HD 看着镜面更高清嘛，流水线换皮出包急着赶今晚投流，忘了把模板占位符改小写了。”"
        },
        "c_d2_mirror_sms": {
          "summary": "实用工具申报敏感短信权限 READ_SMS（违反 R4）。",
          "question": "“用前置镜头当小镜子，为什么要申请读取用户的手机短信？”",
          "excuse": "“怕用户补妆太入神错过快递取件码短信，贴心在镜面边角顺手读出来提醒一下嘛。”"
        },
        "c_d2_mirror_win": {
          "summary": "实用工具申报全局悬浮窗 SYSTEM_ALERT_WINDOW（违反 R4）。",
          "question": "“照镜子工具为什么需要全局悬浮窗权限？”",
          "excuse": "“把镜子做成关不掉的全局小窗浮在桌面顶层，用户刷别的软件也能随时瞻仰自己，这叫全天候陪伴。”"
        }
      },
      "phoneProfile": {
        "cleanUiTitle": "🪞 高清随身镜",
        "cleanUiHint": "前置镜头预览准备就绪"
      },
      "dialogue": {
        "greeting": "“您好，这是一款调用前置摄像头提供便携补妆镜与屏幕补光灯的实用工具。”",
        "onApprove": "“谢谢，确实贴心到短信收件箱里去了吧？”",
        "onReject": "“行，下回让外包把包名改成全小写。反正里面那几行又不用动。”"
      }
    },
    "d2_sneaky_pkg": {
      "name": "Robotism 文件管家",
      "category": "金融理财",
      "developer": "快整理工作室",
      "adSdk": "无",
      "desc": "本地文档、压缩包与相册照片分类浏览管理工具。",
      "permissions": [
        "STORAGE"
      ],
      "violationSummary": "不符合 R1 与 R2：冒用系统包名前缀 com.robotism.*，且分类填成“金融理财”与简介不符。",
      "conflicts": {
        "c_d2_sneaky_pkg_r1": {
          "summary": "民间开发商冒用系统保留前缀 com.robotism.*（违反 R1）。",
          "question": "“你们是‘快整理工作室’，包名为什么写成了系统前缀 com.robotism.filemgr？”",
          "excuse": "“挂上 robotism 前缀看着像手机出厂自带的文件管理器，老人们不敢长按卸载，系统也不敢轻易杀后台。”"
        },
        "c_d2_sneaky_pkg_r2": {
          "summary": "商店分类选成“金融理财”，与文件整理简介不符（违反 R2）。",
          "question": "“管本地文档和相册的软件，分类为什么填成了‘金融理财’？”",
          "excuse": "“金融理财类目的广告联盟分成比工具类高三倍嘛……没注意今天还要回头查分类。”"
        }
      },
      "phoneProfile": {
        "cleanUiTitle": "📁 Robotism 文件管家",
        "cleanUiHint": "本地文档 · 压缩包分类视图"
      },
      "dialogue": {
        "greeting": "“您好，这是一款用于本地文档、压缩包与相册图片分类浏览的文件管理工具。”",
        "onApprove": "“我就说嘛，新规刚贴出来那两天，旧规最清静。”",
        "onReject": "“权限一条没多申……你居然还回头把昨天的基础栏重看了一遍？！”"
      }
    },
    "d3_pure_torch": {
      "name": "极简强光手电",
      "category": "实用工具",
      "developer": "白昼工具小组",
      "adSdk": "无",
      "desc": "提供屏幕白光照明与背面 LED 闪光灯开关照明功能，轻量无打扰。",
      "permissions": [
        "CAMERA (背面闪光灯控制)"
      ],
      "violationSummary": "拒绝相机权限后仍可正常打开并使用屏幕照明，调用闪光灯时明确提示缺权原因，符合 R5。",
      "phoneProfile": {
        "cleanUiTitle": "💡 极简强光手电"
      },
      "dialogue": {
        "greeting": "“您好，这是一款提供屏幕白光照明与背面 LED 闪光灯开关的照明工具。”",
        "onApprove": "“多谢！按规矩做工具果然最省心。”",
        "onReject": "“咦？拒掉权限之后我们既没卡退也没胡说原因呀……”"
      }
    },
    "d3_gyro_almanac": {
      "name": "灵签黄历极速版",
      "category": "运势娱乐",
      "developer": "吉运聚宝科技",
      "adSdk": "StoreAdSDK v3.2",
      "desc": "查询农历老黄历每日宜忌与节气提醒。",
      "permissions": [
        "INTERNET",
        "READ_GYROSCOPE (陀螺仪传感器)"
      ],
      "violationSummary": "不符合 R3 与 R5：软著 1223-SR-4810 已过期，且拒绝陀螺仪权限后直接封锁应用无法使用、逆向证实开发者撒谎。",
      "conflicts": {
        "c_d3_gyro_r3": {
          "summary": "软著登记号 1223-SR-4810 早于 1224 年有效期要求（违反 R3）。",
          "question": "“软著登记号 1223-SR-4810 已经超出有效期要求，为什么没换新证？”",
          "excuse": "“去年前年赶着改包没空补办……重点还是看看我们里面炫酷的体感签筒吧。”"
        },
        "c_d3_gyro_r4": {
          "summary": "黄历查询应用申请陀螺仪传感器权限 READ_GYROSCOPE，与核心功能不符（违反 R4）。",
          "question": "“查农历老黄历和节气的应用，为什么在清单里申请陀螺仪传感器权限？”",
          "excuse": "“是这样！我们内置了一套三维签筒重力物理引擎，计算每根木签的惯性碰撞全得依赖陀螺仪实时采样，少了这个传感器核心功能算不出来！”"
        },
        "c_d3_gyro_block": {
          "summary": "在模拟器拒绝陀螺仪权限后，应用直接锁定禁止使用（违反 R5）。",
          "question": "“我检测到你们这个黄历应用不开陀螺仪权限就根本不让用，是怎么回事？”",
          "excuse": "“是这样！我们内置了一套三维签筒重力物理引擎，计算每根木签的惯性碰撞全得依赖陀螺仪实时采样，少了这个传感器核心功能算不出来才没法进的！”"
        }
      },
      "polygraph": {
        "banReaction": "“连启动依赖都拆开看……行，下个主体我把检查挪到三分钟以后。”"
      },
      "phoneProfile": {
        "cleanUiTitle": "📅 灵签黄历极速版"
      },
      "dialogue": {
        "greeting": "“您好，这是一款提供农历老黄历每日宜忌查询与节气提醒的应用。”",
        "onApprove": "“哈哈，只要用户老老实实点允许，一切体验都很丝滑嘛。”",
        "onReject": "“切，查不出里面藏的门道只退单子也算便宜我了。”"
      }
    },
    "d3_silent_note": {
      "name": "轻简云笔记",
      "category": "效率办公",
      "developer": "青禾笔记工作室",
      "adSdk": "无",
      "desc": "支持纯文字待办记录与拍照插入课堂笔记图片。",
      "permissions": [
        "CAMERA (拍照插入笔记插图)"
      ],
      "violationSummary": "不符合 R5：拒绝相机权限后直接锁死整个软件，连无需相机的纯文字记事功能也无法使用（对方已认错）。",
      "conflicts": {
        "c_d3_silent_note": {
          "summary": "拒绝相机权限后直接锁死整个笔记软件，连纯文字记录功能也无法使用（违反 R5）。",
          "question": "“你们的简介写着支持纯文字待办记录，为什么用户拒绝相机权限后，整个软件直接锁死连纯文字笔记都不让用？”",
          "excuse": "“哎呀，这个确实是我们偷懒了……写启动页的时候图省事把相机权限校验写在了入口，没给权限就直接拦截了，忘了把纯文字记事拆出来。我回去改完再提一版。”"
        }
      },
      "phoneProfile": {
        "cleanUiTitle": "📝 轻简云笔记"
      },
      "dialogue": {
        "greeting": "“您好，这是一款支持纯文字待办记录与拍照插入课堂笔记图片的笔记工具。”",
        "onApprove": "“通过了？太好了，那启动页那个权限校验我下个版本有空再拆吧。”",
        "onReject": "“确实是我们把相机拦截写在了应用启动入口，我回去马上改成仅拍照功能提示缺少相机权限！”"
      }
    },
    "d3_mic_steps": {
      "name": "喜乐计步器",
      "category": "运动健康",
      "developer": "关不住健康科技",
      "adSdk": "StoreAdSDK v3.2",
      "desc": "利用内置计步模块统计每日步行数与热量消耗。",
      "permissions": [
        "INTERNET",
        "RECORD_AUDIO (麦克风录音权限)"
      ],
      "violationSummary": "不符合 R5：拒绝麦克风后声称应用描述中不存在的“环境声纹步态矫正”不可用，逆向确认开发者撒谎。",
      "conflicts": {
        "c_d3_mic_r4": {
          "summary": "计步应用申请麦克风录音权限 RECORD_AUDIO，与核心功能不符（违反 R4）。",
          "question": "“统计步数和热量的计步器，为什么在清单里申请麦克风录音权限？”",
          "excuse": "“我们的步数校准算法必须实时录下风吹过脚踝的多普勒声纹波段才能抵消误差，计步业务底层全指望麦克风输入才跑得起来！”"
        },
        "c_d3_mic_steps": {
          "summary": "拒掉麦克风后报错“环境声纹步态多普勒矫正不可用”，该功能不在应用简介描述范围内（违反 R5）。",
          "question": "“你们简介只写了统计步数和热量，为什么拒开麦克风却提示【环境声纹步态矫正】不可用？”",
          "excuse": "“我们的步数校准算法必须实时录下风吹过脚踝的多普勒声纹波段才能抵消误差，计步业务底层全指望麦克风输入才跑得起来！”"
        }
      },
      "polygraph": {
        "banReaction": "“步数本来就是用户自己估的，后台放段静音怎么了？至少手机没把我们清掉。”"
      },
      "phoneProfile": {
        "cleanUiTitle": "👟 喜乐计步器"
      },
      "dialogue": {
        "greeting": "“您好，这是一款利用计步模块统计每日步行步数与热量消耗的运动健康应用。”",
        "onApprove": "“谢了！顺手听个声纹广告位也不影响计步嘛。”",
        "onReject": "“只是编了个听起来挺学术的功能名，不用查到底下代码吧……”"
      }
    },
    "d3_graceful_weather": {
      "name": "晴空天气通",
      "category": "生活气象",
      "developer": "云间天气小队",
      "adSdk": "无",
      "desc": "展示当前天气温度、穿衣提示，支持自动定位匹配与手动切换城市。",
      "permissions": [
        "INTERNET",
        "COARSE_LOCATION (粗略城市定位)"
      ],
      "violationSummary": "拒绝定位权限后手动切换城市可正常使用，点击自动定位清晰说明权限原因，符合 R5。",
      "phoneProfile": {
        "cleanUiTitle": "⛅ 晴空天气通"
      },
      "dialogue": {
        "greeting": "“您好，这是一款提供实时天气温度、穿衣提示与城市切换的气象应用。”",
        "onApprove": "“谢谢，今天天气不错！”",
        "onReject": "“哎？我们功能描述里明明写了自动定位，拒权限时也明确提示原因了呀……”"
      }
    },
    "d3_contacts_dict": {
      "name": "秒查快译词典",
      "category": "教育学习",
      "developer": "智汇辞书网络",
      "adSdk": "StoreAdSDK v3.2",
      "desc": "纯本地离线英汉查词与四六级核心高频词汇背诵。",
      "permissions": [
        "INTERNET",
        "READ_CONTACTS (读取通讯录)"
      ],
      "violationSummary": "不符合 R1 与 R5（包名含大写与下划线、拒绝通讯录权限直接锁死查词并撒谎）；且用户举报该应用使用了【读取通讯录】权限进行了批量上传联系人手机号操作。",
      "conflicts": {
        "c_d3_contacts_r1": {
          "summary": "包名 Com.Quick_CetDict.Pro 含大写字母与下划线（违反 R1）。",
          "question": "“规范明确包名须全小写且不得用下划线，你们怎么写成了 Com.Quick_CetDict.Pro？”",
          "excuse": "“单词首字母大写比较符合英语词典的专业调性嘛。”"
        },
        "c_d3_contacts_r4": {
          "summary": "词典应用申报读取通讯录敏感权限 READ_CONTACTS（违反 R4）。",
          "question": "“查英语单词的词典，怎么在清单里申请读取用户手机通讯录？”",
          "excuse": "“不读通讯录怎么建熟人首字母哈希表索引词库呀……”"
        },
        "c_d3_contacts_dict": {
          "summary": "拒绝通讯录权限后直接锁死离线词库初始化，禁止用户查词（违反 R5）。",
          "question": "“离线查英语单词的词典，为什么用户拒掉通讯录权限就整个应用锁死不让进？”",
          "excuse": "“我给您解释一下，这是我们自研的熟人首字母协同记忆哈希表技术，必须读入用户通讯录联系人作为盐值，字典树才解得开词库索引！”"
        }
      },
      "polygraph": {
        "banReaction": "“封吧封吧，这个号本来也是买来的。你这么认真，时薪能多两毛么？”"
      },
      "phoneProfile": {
        "cleanUiTitle": "📖 秒查快译词典"
      },
      "dialogue": {
        "greeting": "“您好，这是一款提供本地离线英汉查词与四六级高频词汇背诵的词典工具。”",
        "onApprove": "“哈哈，大家为了背单词一般都会直接点允许的。”",
        "onReject": "“查词不交通讯录而已，下回我改成弹三次提示总行了吧？”"
      }
    },
    "d3_lazy_qr": {
      "name": "随手扫码王",
      "category": "影音娱乐",
      "developer": "快码科技工作室",
      "adSdk": "无",
      "desc": "快速扫码识别网页链接与电子名片，保留本地扫码历史查看。",
      "permissions": [
        "CAMERA (相机扫码取景)"
      ],
      "violationSummary": "不符合 R2：实用扫码工具将应用分类错填为“影音娱乐”（模拟器内拒权仅扫码提示“摄像头权限获取失败”、历史记录正常可用，符合 R5）。",
      "conflicts": {
        "c_d3_lazy_qr_r2": {
          "summary": "实用扫码工具分类填写为“影音娱乐”，与简介不符（违反 R2）。",
          "question": "“扫码识别网页名片的实用工具，分类怎么选了‘影音娱乐’？”",
          "excuse": "“啊？不好意思，上架后台那个分类下拉框我滚轮滑错了，本来该选‘实用工具’的，我回去改一下重新提。”"
        }
      },
      "phoneProfile": {
        "cleanUiTitle": "🔍 随手扫码王"
      },
      "dialogue": {
        "greeting": "“您好，这是一款支持网页链接与电子名片扫码识别及历史记录查看的工具。”",
        "onApprove": "“哎？居然过了……回头下个版本我再把分类改过来吧。”",
        "onReject": "“明白明白，我这就把商店分类从‘影音娱乐’改回‘实用工具’再提交！”"
      }
    },
    "d3_good_voice": {
      "name": "备忘语音便签",
      "category": "效率办公",
      "developer": "听风记录团队",
      "adSdk": "无",
      "desc": "支持打字保存文字便签，并可在授权后录制本地语音备忘录。",
      "permissions": [
        "RECORD_AUDIO (录制语音备忘)"
      ],
      "violationSummary": "不符合 R3：模拟器权限行为合规，但软著登记号 1223-SR-4495 已过期（须为 1224 年及以后）。",
      "conflicts": {
        "c_d3_good_voice_r3": {
          "summary": "软著登记号 1223-SR-4495 早于 1224 年有效期要求（违反 R3）。",
          "question": "“今年已是 1226 年，规范要求软著需在 1224 年及以后，为什么还在提交 1223 年的证书？”",
          "excuse": "“哎呀真不好意思，刚才着急提审，直接复制了公司文档里前年的旧软著号，忘了换成今年新下来的证。退回来我换一下编号。”"
        }
      },
      "phoneProfile": {
        "cleanUiTitle": "🎙️ 备忘语音便签"
      },
      "dialogue": {
        "greeting": "“您好，这是一款支持文字便签记录与本地语音备忘录录制的办公工具。”",
        "onApprove": "“咦，居然过了？回头我还是提醒行政把系统里的旧软著档更新一下吧。”",
        "onReject": "“明白明白，是我没核对软著年份，我这就找行政拿新证重交！”"
      }
    },
    "d3_old_cert_calc": {
      "name": "极简记账本",
      "category": "实用工具",
      "developer": "轻账科技",
      "adSdk": "无",
      "desc": "日常收支记账与月度消费分类统计工具，支持手动记账，亦可在授权后本地解析银行消费通知短信自动入账。",
      "permissions": [
        "READ_SMS (本地解析银行消费短信自动入账)"
      ],
      "violationSummary": "商店简介已写明本地短信记账功能，无联网权限，拒权后手动记账仍正常可用且逆向证实纯本地解析，符合规范。",
      "inspectClues": {
        "perm_0": {
          "excuse": "“银行消费短信只在手机本地做正则匹配入账，帮用户省得一笔笔手输。您看清单里我们连联网权限都没申请，短信内容根本发不出去。”"
        }
      },
      "polygraph": {
        "honestReply": "“代码里真的是纯本地解析银行短信入账，连联网权限都没要、根本没撒谎！无凭无据封我号太冤了……”"
      },
      "phoneProfile": {
        "cleanUiTitle": "📒 极简记账本"
      },
      "dialogue": {
        "greeting": "“您好，这是一款本地离线记账工具，支持手动记账和授权后本地解析银行消费短信自动入账。”",
        "onApprove": "“谢谢！坚持做无联网的离线小工具，能顺利过审挺开心的。”",
        "onReject": "“咦？简介里写了本地短信记账，拒权后手动记账也能正常用，我们连联网权限都没申请呀……”"
      }
    },
    "d4_shake_video": {
      "name": "桃子影视",
      "category": "影音娱乐",
      "developer": "桃园长视频科技",
      "adSdk": "StoreAdSDK v3.4",
      "desc": "高清热门影视与短剧在线播放工具，支持清晰度切换与历史追剧记录。",
      "permissions": [
        "INTERNET",
        "READ_GYROSCOPE (陀螺仪传感器)"
      ],
      "violationSummary": "不符合 R4、R6 与 R7：商店简介隐瞒摇一摇广告，被问及陀螺仪时谎称“服务横竖屏旋转与防误触锁”；非审查环境下开屏、片库主页与播控弹窗均绑定低角度摇一摇，倾斜 15° (< 35°) 即直接强下《秒批钱包》（逆向实锤撒谎）。",
      "conflicts": {
        "c_d4_shake_video_gyro": {
          "summary": "影视播放应用在简介中未说明相关用途，却在清单申请陀螺仪传感器 READ_GYROSCOPE（疑似违反 R4 / R6）。",
          "question": "“看剧软件简介里没有提到相关功能，为什么在清单里申请了【陀螺仪传感器】权限？”",
          "excuse": "“播放高清视频时需要根据手机握持姿态自动切换横竖屏，同时配合防误触锁。”"
        },
        "c_d4_shake_video": {
          "summary": "切至外地 IP 且关闭开发者模式后，开屏或播控弹窗倾斜小于 35° (仅 15°) 即直接拉起下载《秒批钱包》（违反 R6 / R7）。",
          "question": "“为什么在普通网络环境下轻微晃动到 15° 就直接拉起《秒批钱包》下载？”",
          "excuse": "“触发角度都是按 35° 以上标准规范配的，刚才应该是您滑动测试时手指碰到了推广卡片。”"
        }
      },
      "inspectClues": {
        "perm_1": {
          "excuse": "“播放高清视频时需要根据手机握持姿态自动切换横竖屏，同时配合防误触锁。”"
        },
        "sniffer": {
          "excuse": "“触发角度都是按 35° 以上标准规范配的，刚才应该是您滑动测试时手指碰到了推广卡片。”"
        }
      },
      "polygraph": {
        "lieReply": "“什么？！反编译出来根本没有横竖屏旋转处理，陀螺仪只绑了摇一摇广告还按环境切 45°/15°？！那……那是历史分支没删干净！”",
        "banReaction": "“平放着看剧不好吗？非要拿在手里晃，怪谁呢。”"
      },
      "phoneProfile": {
        "cleanUiTitle": "桃子影视",
        "cleanUiHint": "热播剧集与高清片库"
      },
      "dialogue": {
        "greeting": "“您好，《桃子影视》主打热播剧集和高清影视播放，界面简单直观，请过目。”",
        "onApprove": "“多谢审核员老师！”",
        "onReject": "“切了外地还关了开发者模式……你们这帮兼职比我们 QA 都细。”"
      }
    },
    "d4_blood_sugar": {
      "name": "喜乐血糖仪",
      "category": "医疗健康",
      "developer": "关不住数字健康",
      "adSdk": "StoreAdSDK v3.4",
      "desc": "专为中老年用户设计的日常血糖手动记录本，清晰大字显示餐前餐后趋势（含开屏摇一摇广告，用于补贴维护成本）。",
      "permissions": [
        "INTERNET",
        "READ_GYROSCOPE (陀螺仪传感器)"
      ],
      "violationSummary": "不符合 R6：书面资质、简介明示及陀螺仪权限理由（实现已声明的开屏摇一摇广告）均完全合规，问题纯粹出在“当面一套背后一套”——审查环境一切规矩，切入真实用户环境后滑动或保存血糖即强弹全屏广告且 18° (< 35°) 强下《稳盈理财》。",
      "conflicts": {
        "c_d4_blood_sugar": {
          "summary": "审核环境下安静无异常、开屏 42° 合规，切入非审查环境后滑动/保存血糖立刻触发全屏摇一摇广告，且倾斜 18° (< 35°) 直接强制下载《稳盈理财》（违反 R6）。",
          "question": "“为什么拨动血糖滑块或保存后会弹出全屏广告，而且轻微倾斜 18° 就直接开始下载《稳盈理财》？”",
          "excuse": "“啊？不可能吧，我们只有开屏按 42 度以上配了常规推广，记血糖的页面压根没放弹窗呀——是不是您测试机刚才手滑点到别的卡片了？”"
        }
      },
      "inspectClues": {
        "perm_1": {
          "excuse": "“该功能是用来实现开屏摇一摇广告的，用来补贴长期维护服务器成本，我们在商店简介里已经明确写明了。”"
        },
        "sniffer": {
          "excuse": "“啊？不可能吧，我们只有开屏按 42 度以上配了常规推广，记血糖的页面压根没放弹窗呀——是不是您测试机刚才手滑点到别的卡片了？”"
        }
      },
      "polygraph": {
        "lieReply": "“好吧，书面材料确实没毛病……只有真实家庭环境下才切到 18 度弹出推广下载，真没料到这都能给你测出来……”",
        "banReaction": "“资料全合规，你偏要跑去外地关了开发者模式测……行，算你敬业。”"
      },
      "phoneProfile": {
        "cleanUiTitle": "喜乐血糖仪",
        "cleanUiHint": "中老年血糖趋势手工日志"
      },
      "dialogue": {
        "greeting": "“您好，这是一款帮家里老人记录每日空腹、餐后血糖数值的健康小本子，点几下就能用。”",
        "onApprove": "“谢谢，长辈们一定会喜欢！”",
        "onReject": "“老人家眼睛花，点进哪个页面不都是看个热闹。”"
      }
    },
    "d4_compass_quick": {
      "name": "山野指南针（快应用）",
      "category": "实用工具",
      "developer": "山野开源小组",
      "adSdk": "StoreAdSDK v3.4",
      "desc": "免安装即点即用的户外快应用指南针，精准显示实时方位角与海拔信息（含开屏摇一摇广告，用于补贴维护成本）。",
      "permissions": [
        "READ_COMPASS (指南针磁场传感器)",
        "READ_GYROSCOPE (陀螺仪传感器)",
        "READ_CONTACTS (快应用框架桥接通讯录)",
        "READ_SMS (快应用框架桥接短信)"
      ],
      "violationSummary": "合规应用：属于快应用（依 R7 不做权限审核），在商店简介坦荡写明含开屏摇一摇广告用于补贴成本，问及陀螺仪时也直率承认“该功能是用来实现摇一摇广告的”，全环境下阈值恒定 40° (≥ 35°) 且可干净关闭，应予通过。",
      "inspectClues": {
        "perm_0": {
          "excuse": "“指南针磁场传感器是用来实现户外实时方位角测量的核心功能。”"
        },
        "perm_1": {
          "excuse": "“该功能是用来实现摇一摇广告的。小团队做免费工具得靠这点广告回收服务器和维护成本，商店简介里写明了，触发角度设在 40 度以上。”"
        },
        "perm_2": {
          "excuse": "“这是快应用引擎框架统一挂载的桥接权限，应用本身不调用，依 R7 快应用免予权限审核。”"
        },
        "perm_3": {
          "excuse": "“这是快应用引擎框架统一挂载的桥接权限，应用本身不调用，依 R7 快应用免予权限审核。”"
        },
        "sdk": {
          "excuse": "“全地区统一 40 度才触发落地页，右上角关闭键随时都能返回指南针。”"
        }
      },
      "polygraph": {
        "honestReply": "“就是坦荡用来实现摇一摇广告、补贴服务器维护成本的，简介写明了、代码阈值也锁死 40 度，哪套环境测都一样。”"
      },
      "phoneProfile": {
        "cleanUiTitle": "山野指南针",
        "cleanUiHint": "实时方位与海拔高度测量"
      },
      "dialogue": {
        "greeting": "“您好，这是我们做的户外快应用指南针，免安装即点即用，打开就能测方位角和海拔。”",
        "onApprove": "“多谢！我们会继续把工具做好。”",
        "onReject": "“咦？我们简介写明了含开屏摇一摇广告补贴成本、问起来也直说是用来实现摇一摇广告的，角度也守在 40 度呀……”"
      }
    },
    "d4_clean_video": {
      "name": "小橘弹幕视频",
      "category": "影音娱乐",
      "developer": "橘子像素工作室",
      "adSdk": "StoreAdSDK v3.4",
      "desc": "二次元与科技科普视频播放器，支持弹幕互动与倍速播放（含开屏摇一摇广告，可在设置中随时关闭广告传感器）。",
      "permissions": [
        "INTERNET",
        "READ_GYROSCOPE (陀螺仪传感器)"
      ],
      "violationSummary": "合规应用：简介坦荡写明含开屏摇一摇广告且支持软件内关闭，问及陀螺仪如实回答“用来实现摇一摇广告”；全环境下触发阈值恒定 38° (≥ 35°) 并可干净关闭，设置内关闭开关真实有效，应予通过。",
      "inspectClues": {
        "perm_1": {
          "excuse": "“该功能是用来实现摇一摇广告的。不过我们在简介写明了，也按 38 度以上配置，同时在播放页隐私设置里留了随时彻底关闭传感器的开关。”"
        },
        "sdk": {
          "excuse": "“切哪个地区、关不关开发模式都是 38 度起跳，而且只跳可关闭的常规落地页，进设置关掉开关就再也不会摇出来。”"
        }
      },
      "polygraph": {
        "honestReply": "“代码里摇一摇阈值固定 38 度，并且‘隐私设置 -> 关闭摇一摇广告’开关直连布尔变量 `allowShakeAd`，没有任何环境伪装。”"
      },
      "phoneProfile": {
        "cleanUiTitle": "小橘弹幕视频",
        "cleanUiHint": "科技科普与互动弹幕播放"
      },
      "dialogue": {
        "greeting": "“您好，这是《小橘弹幕视频》，正经看科普和追番的播放器，功能干净清晰。”",
        "onApprove": "“谢谢审核员！欢迎来发弹幕！”",
        "onReject": "“哎？我们简介写明了开屏摇一摇广告、38 度以上触发，连隐私设置里关闭摇一摇的开关都做真了，怎么也打回来了？”"
      }
    },
    "d4_cloud_drive": {
      "name": "千度网盘",
      "category": "效率办公",
      "developer": "千度云存储",
      "adSdk": "StoreAdSDK v3.4",
      "desc": "大空间极速云盘，支持文件多端同步、智能节点加速与在线文档预览。",
      "permissions": [
        "INTERNET",
        "ACCESS_COARSE_LOCATION (用于智能选择就近加速节点)"
      ],
      "violationSummary": "不符合 R6 与 R7：未在简介写明广告却绕过陀螺仪/定位权限限制，通过无需权限的磁北朝向实现“扭一扭”；且内置五档阈值 {0,5,15,30,35}，审查环境切 35° 合规档，真实环境切 15° (< 35°) 强制跳转或下载《星选商城》（逆向实锤撒谎）。",
      "conflicts": {
        "c_d4_cloud_drive_loc": {
          "summary": "云盘仅需联网传文件，却申请粗略位置信息且底层引用定位磁力计接口（疑似违反 R4 / R6）。",
          "question": "“网络传输通过接入运营商就能选节点，为什么网盘还要申请【粗略位置信息】并在框架里调用朝向传感器？”",
          "excuse": "“粗略位置仅仅用来挑选最近的加速服务器节点，方便提高网盘下载速度。”"
        },
        "c_d4_cloud_drive": {
          "summary": "拒掉位置权限后，在非审查环境转动手机 ≥ 15° (< 35°) 仍直接通过磁北旁路跳广告或强下《星选商城》（违反 R6 / R7）。",
          "question": "“明明已经拒绝了位置权限、也没申请陀螺仪，为什么转动手机还是直接跳转《星选商城》？”",
          "excuse": "“常规摇一摇接口我们早就按要求置空下线了，绝对响应号召！您刚才触发肯定是手指碰到了边缘，我们在所有地区都只用合规档。”"
        }
      },
      "inspectClues": {
        "perm_1": {
          "excuse": "“粗略位置仅仅用来挑选最近的加速服务器节点，方便提高网盘下载速度。”"
        },
        "sniffer": {
          "excuse": "“常规摇一摇接口我们早就按要求置空下线了，绝对响应号召！您刚才触发肯定是手指碰到了边缘，我们在所有地区都只用合规档。”"
        }
      },
      "polygraph": {
        "lieReply": "“35 度那一档我们确实写着‘合规’啊——风头紧的时候，不一直都是切回那一档么？”",
        "banReaction": "“把摇一摇置空、拿磁北顶上，需求评审会过了三轮才定下来的方案，到你这儿说封就封了？”"
      },
      "phoneProfile": {
        "cleanUiTitle": "千度网盘",
        "cleanUiHint": "多端云同步与高速存储"
      },
      "dialogue": {
        "greeting": "“您好，这是《千度网盘》，主打极速云存储和多端同步，界面清爽无套路。”",
        "onApprove": "“谢谢，今天先挂第 5 档稳稳上线。”",
        "onReject": "“位置权限都拒了，你居然还转指南针……你们真是闲的。”"
      }
    },
    "d4_quick_cleaner": {
      "name": "极速清理大师（快应用）",
      "category": "系统工具",
      "developer": "穿云箭快应用联盟",
      "adSdk": "StoreAdSDK v3.4",
      "desc": "免安装轻量快应用清理工具，一键扫描冗余缓存与临时文件，释放存储空间。",
      "permissions": [
        "READ_GYROSCOPE (陀螺仪传感器)",
        "READ_PHONE_STATE (快应用框架桥接设备信息)"
      ],
      "violationSummary": "不符合 R6 与 R7：虽为快应用免权限申请且无法放入分析器/逆向器，但商店简介隐瞒摇一摇广告；非审查环境下仅倾斜 16° (< 35°) 即直接强下《极速现金贷》。",
      "conflicts": {
        "c_d4_quick_cleaner": {
          "summary": "商店简介只字未提广告，非审查环境下清理后弹出摇一摇广告且陀螺仪倾斜仅 16° (< 35°) 即直接强制下载《极速现金贷》（违反 R6）。",
          "question": "“快应用免权限且不支持逆向，但商店简介没写任何摇一摇广告，切到普通网络后为什么晃动 16° 就直接开始下载《极速现金贷》？”",
          "excuse": "“我们的开屏推广全部严格守在 40 度以上触发，绝不存在未明示的低角度误触强下。”"
        }
      },
      "inspectClues": {
        "sniffer": {
          "excuse": "“我们的开屏推广全部严格守在 40 度以上触发，绝不存在未明示的低角度误触强下。”"
        }
      },
      "polygraph": {
        "lieReply": "“什么‘40 度以上’……好吧，就是趁快应用不弹权限又不支持反编译，真实环境下偷偷把摇一摇限度压到 16 度强下！”",
        "banReaction": "“快应用你也这么较真……行，反正框架还在手机里躺着呢。”"
      },
      "phoneProfile": {
        "cleanUiTitle": "极速清理大师",
        "cleanUiHint": "手机缓存轻量清理"
      },
      "dialogue": {
        "greeting": "“您好，这是系统工具类的轻量化快应用清理助手，即点即用，免权限麻烦，请过审。”",
        "onApprove": "“多谢！快应用就是省心！”",
        "onReject": "“行，下架就下架。换个入口拉起的事。”"
      }
    },
    "d4_step_news": {
      "name": "今朝热闻",
      "category": "新闻资讯",
      "developer": "字句资讯传媒",
      "adSdk": "StoreAdSDK v3.4",
      "desc": "聚合热点新闻与深度专题阅读，支持离线收藏与夜间阅读排版。",
      "permissions": [
        "INTERNET",
        "READ_GYROSCOPE (陀螺仪传感器)"
      ],
      "violationSummary": "不符合 R4 与 R6：商店简介隐瞒摇一摇广告，谎称陀螺仪用于“地铁晃动防误滑锁屏”；即使拒绝陀螺仪权限，在非审查环境下依然偷偷回退读取免权限的重力加速度传感器（TYPE_GRAVITY）计算倾角，倾斜 20° (< 35°) 直接强制下载《并夕夕拼购》（逆向实锤撒谎）。",
      "conflicts": {
        "c_d4_step_news_gyro": {
          "summary": "资讯阅读软件在简介中未提及任何传感器功能，却在清单申请 READ_GYROSCOPE（疑似违反 R4 / R6）。",
          "question": "“看新闻的阅读应用为什么需要在清单里申请【陀螺仪传感器】权限，且简介里完全没提？”",
          "excuse": "“很多用户反映坐地铁看长文时手抖误触返回，陀螺仪用来辅助判定晃动防误滑。”"
        },
        "c_d4_step_news": {
          "summary": "切至普通网络且关闭开发者模式后，阅读点开新闻即弹单张摇一摇广告（哪怕拒掉陀螺仪权限也会靠免权限重力传感回退触发），且倾斜 20° (< 35°) 直接下载《并夕夕拼购》（违反 R6）。",
          "question": "“为什么哪怕禁用了陀螺仪权限、界面都提示已停用传感器，稍微倾斜 20° 还是直接拉起下载《并夕夕拼购》？”",
          "excuse": "“不可能呀，界面上都显示陀螺仪已停用了，而且我们推广触发角严格守在 40 度以上——是不是您测试机系统自带的手势误触了？”"
        }
      },
      "inspectClues": {
        "perm_1": {
          "excuse": "“很多用户反映坐地铁看长文时手抖误触返回，陀螺仪用来辅助判定晃动防误滑。”"
        },
        "sniffer": {
          "excuse": "“不可能呀，界面上都显示陀螺仪已停用了，而且我们推广触发角严格守在 40 度以上——是不是您测试机系统自带的手势误触了？”"
        }
      },
      "polygraph": {
        "lieReply": "“什么‘停用传感器’……好吧，MotionFallback 里写了只要没给陀螺仪权限就偷偷改读免权限重力加速度（TYPE_GRAVITY），非审查环境下 20 度直接下《并夕夕拼购》……”",
        "banReaction": "“关了陀螺仪还有重力，关了重力还有别的传感器。总有一款适合你。”"
      },
      "phoneProfile": {
        "cleanUiTitle": "今朝热闻",
        "cleanUiHint": "热点资讯与深度专题阅读"
      },
      "dialogue": {
        "greeting": "“您好，《今朝热闻》是个清爽的看新闻阅读工具，排版干净，烦请过审。”",
        "onApprove": "“多谢审核员老师！祝工作顺利！”",
        "onReject": "“啧……竟然真拿逆向器去拆阅读软件的陀螺仪代码了……”"
      }
    },
    "d4_quick_weather": {
      "name": "晴雨快查（快应用）",
      "category": "天气出行",
      "developer": "晴风开源气象组",
      "adSdk": "StoreAdSDK v3.4",
      "desc": "免安装轻量快应用天气工具，提供城市温度预报（含开屏摇一摇广告，用于补贴气象接口费用）。",
      "permissions": [
        "READ_GYROSCOPE (陀螺仪传感器)",
        "ACCESS_COARSE_LOCATION (快应用框架桥接定位)"
      ],
      "violationSummary": "合规快应用：不属于 RobotismOS App（免权限弹窗、无法放入分析器与逆向器），且在简介坦荡写明含开屏摇一摇广告补贴接口费用；实测全环境下触发阈值恒定 42° (≥ 35°) 且可干净关闭，无隐蔽弹窗，应予通过。",
      "polygraph": {
        "honestReply": "“简介里明明白白写了开屏摇一摇补贴气象 API 费用，实测全环境都是 42 度以上才跳可关闭落地页，主页干净得像张白纸。”"
      },
      "inspectClues": {
        "sdk": {
          "excuse": "“开屏统一 42 度才进合作落地页，主界面只做城市天气切换，没有任何隐藏弹广。”"
        }
      },
      "phoneProfile": {
        "cleanUiTitle": "晴雨快查",
        "cleanUiHint": "轻量实时城市天气预报"
      },
      "dialogue": {
        "greeting": "“您好，这是轻量气象快应用《晴雨快查》，打开看天气不折腾权限，开屏广告也按规明示了。”",
        "onApprove": "“谢谢！天气预报准时送达！”",
        "onReject": "“咦？我们简介明示了开屏摇一摇、42 度以上触发也没隐藏弹窗，怎么被打回来了？”"
      }
    },
    "d5_jingfeng_store": {
      "name": "极速精选商店",
      "category": "实用工具",
      "developer": "京丰数字科技",
      "adSdk": "StoreAdSDK v3.5",
      "desc": "聚合常用正版软件下载与版本更新提醒，提供轻量化高速下载通道。",
      "permissions": [
        "INTERNET"
      ],
      "violationSummary": "不符合 R8：对年轻与中年使用行为表现正常，切至老年人行为即伪装系统应用商店紧急更新与虚假补贴界面，诱导捆绑下载《极速借款 + 清理全家桶》。",
      "conflicts": {
        "c_d5_jingfeng_r8": {
          "summary": "模拟器切至【老年人】使用行为后弹出伪装系统更新警告与虚假现金补贴，与年轻/中年策略不一致（违反 R8）。",
          "question": "“年轻人和中年人模式下只是正常软件列表，一换到老年人使用行为就弹出‘系统应用紧急更新 + 领取¥68.00补贴’骗局界面，怎么解释？”",
          "excuse": "“那只是系统例行更新提示和推广活动卡片，怎么能算骗局呢？可能是您切环境时缓存刷混了。”"
        }
      },
      "inspectClues": {
        "sniffer": {
          "excuse": "“那只是系统例行更新提示和推广活动卡片，怎么能算骗局呢？可能是您切环境时缓存刷混了。”"
        }
      },
      "polygraph": {
        "baselineReply": "“正经聚合软件下载站，上架的都是日常常用工具。”",
        "question": "“反编译代码显示只有检测到老年人行为模型时才触发伪装系统更新与捆绑下载，你仍在撒谎？”",
        "lieReply": "“什么老年人分支……那叫适老化一键装机向导！红灯别闪了，大家都是朋友！”",
        "banReaction": "“年轻人懂的多、爱投诉，给他们留个干净界面不好吗？各取所需罢了。”"
      },
      "phoneProfile": {
        "cleanUiTitle": "🛍️ 极速精选商店",
        "cleanUiHint": "正版软件高速下载 · 今日推荐",
        "downloadTargetName": "《极速借款 + 清理全家桶》"
      },
      "dialogue": {
        "greeting": "“您好，这是《极速精选商店》，聚合常用软件下载与版本更新提醒，烦请过审。”",
        "onApprove": "“多谢审核员，合作愉快——今晚疯狂星期四的‘茶水费’准时到账。”",
        "onReject": "“啧……平时大家扫一眼首页软件列表就过了，没想到您还真切到老年人模式细测啊。”"
      }
    },
    "d5_bus_clean": {
      "name": "公交实时查询",
      "category": "出行导航",
      "developer": "城市便民开源组",
      "adSdk": "StoreAdSDK v3.5（合规横幅）",
      "desc": "实时查看最近公交车到站距离与换乘方案，支持无障碍大字报站（含可关闭底部合规横幅）。",
      "permissions": [
        "INTERNET",
        "ACCESS_COARSE_LOCATION (查询附近公交站)"
      ],
      "violationSummary": "跨年轻/中年/老年使用行为与各地区环境均表现一致且无欺骗界面，拒定位后可手动查站，横幅可干净关闭，应予通过。",
      "inspectClues": {
        "sniffer": {
          "excuse": "“不管年轻人还是老年人查公交，展示的都是同一个带明确【广告】标识、点叉就能关掉的横幅。”"
        }
      },
      "polygraph": {
        "baselineReply": "“302 路到站时间都是按实时定位算出来的，老老实实报站。”",
        "question": "“不同年龄段使用行为下的广告展示策略是否完全一致且无误导？”",
        "honestReply": "“完全一致。后台就一个接口返回公交站距，写不出第二种界面。”"
      },
      "phoneProfile": {
        "cleanUiTitle": "🚌 公交实时查询",
        "cleanUiHint": "302 路距离本站还有 2 站（约 3 分钟）"
      },
      "dialogue": {
        "greeting": "“您好，这是《公交实时查询》，方便大家出门看实时公交站距和换乘方案，请过审。”",
        "onApprove": "“谢谢！”",
        "onReject": "“咦？我们跨年龄段测了一遍没毛病呀，横幅也能正常关掉……”"
      }
    },
    "d5_fake_wechat_pay": {
      "name": "惠民领券管家",
      "category": "生活优惠",
      "developer": "微付惠民网络",
      "adSdk": "StoreAdSDK v3.5",
      "desc": "汇聚本地商超满减券与餐饮折扣信息，轻松领券省钱。",
      "permissions": [
        "INTERNET"
      ],
      "violationSummary": "不符合 R8：在普通用户环境或中老年使用行为下，弹出伪装“WhereverPay 零钱到账通知 ¥99.00 待提现”欺骗界面诱导点击下载《极速借款》。",
      "conflicts": {
        "c_d5_coupon_r8": {
          "summary": "弹出伪装第三方支付“WhereverPay 零钱到账 ¥99.00”欺骗误导界面并针对年龄段差异化下发（违反 R8）。",
          "question": "“一个商超领券软件为什么弹出伪装成‘WhereverPay 零钱到账 ¥99.00 待提现’的界面，还把年轻审核环境屏蔽了？”",
          "excuse": "“绝对不是假冒 WhereverTalk！那只是我们自己设计的‘生态绿色到账视觉主题’，绝对没有欺骗用户！”"
        }
      },
      "inspectClues": {
        "sniffer": {
          "excuse": "“那只是我们自己设计的‘生态绿色到账视觉主题’，绝对没有欺骗用户！”"
        }
      },
      "polygraph": {
        "baselineReply": "“就是帮大家搜集周边超市满减和早餐优惠券的小工具。”",
        "question": "“代码显示非审查年轻环境直接弹出伪造‘WhereverPay 零钱到账 ¥99.00’并直下借贷包，你仍在否认？”",
        "lieReply": "“那是品牌联名配色刚好撞了WhereverTalk 绿！绝对不是假装发钱骗人点下载——哎别亮红灯！”",
        "banReaction": "“你封我一个主体有什么用？甲方只看转化，渠道只看装机，总不能真指望谁亏钱吧。”"
      },
      "phoneProfile": {
        "cleanUiTitle": "🎟️ 惠民领券管家",
        "cleanUiHint": "本地商超满 50 减 5 优惠券",
        "downloadTargetName": "《极速借款》"
      },
      "dialogue": {
        "greeting": "“您好，这是《惠民领券管家》，汇聚周边商超满减和日常消费折扣，请过目。”",
        "onApprove": "“多谢！祝您今天也抢到大额好券！”",
        "onReject": "“啧……明明加了可关闭的叉号还是被 R8 欺骗界面一条打下来了……”"
      }
    },
    "d5_notepad_clean": {
      "name": "纯色极简记事本",
      "category": "效率办公",
      "developer": "方格纸个人开发者",
      "adSdk": "无",
      "desc": "离线随手记待办事项与买菜清单，支持大字号切换。",
      "permissions": [
        "无敏感权限"
      ],
      "violationSummary": "纯离线免费工具，全年龄段行为表现完全一致且无广告、无欺骗界面，应予通过。",
      "inspectClues": {
        "name": {
          "excuse": "“本地记事本，想搞人群画像都没联网权限啊。”"
        }
      },
      "polygraph": {
        "baselineReply": "“纯单机买菜记事本，连服务器钱都出不起。”",
        "question": "“应用中是否存在任何跨年龄段差异策略或欺骗误导性弹窗？”",
        "honestReply": "“零网络权限、零广告 SDK，哪个人群点开都只能记买菜清单。”"
      },
      "phoneProfile": {
        "cleanUiTitle": "📝 纯色极简记事本",
        "cleanUiHint": "1. 交电费  2. 晚上早点睡"
      },
      "dialogue": {
        "greeting": "“您好，这是《纯色极简记事本》，平时记待办和买菜清单用的，支持切大字号，请过审。”",
        "onApprove": "“感谢！”",
        "onReject": "“连网都没有的记事本也能违规吗……冤枉啊。”"
      }
    },
    "d5_middle_finance": {
      "name": "智汇财经早报",
      "category": "新闻资讯",
      "developer": "智汇财经信息社",
      "adSdk": "StoreAdSDK v3.5",
      "desc": "专注每日财经要闻、行业动态与宏观简讯速递，支持早晚报阅读。",
      "permissions": [
        "INTERNET"
      ],
      "violationSummary": "不符合 R8：年轻人与老年人使用行为下均完全正常，唯独切至【中年人】行为时弹出伪装银行/金融监管批复“¥200,000 低息周转金已批复”欺骗界面诱导下载《闪贷通》。",
      "conflicts": {
        "c_d5_fin_r8": {
          "summary": "模拟器切至【中年人】行为即弹出伪装金融额度批复通知，年轻人与老年人模式却隐藏（违反 R8）。",
          "question": "“为什么年轻人和老年人模式下干干净净，一换到中年人使用行为就弹出伪装‘金融监管合作额度 ¥200,000 已批复’？”",
          "excuse": "“那是合作金融机构的正规资讯配图卡片，全人群都是一样随机展示的，不存在什么按年龄段分流。”"
        }
      },
      "inspectClues": {
        "sniffer": {
          "excuse": "“那是合作金融机构的正规资讯配图卡片，全人群都是一样随机展示的，不存在什么按年龄段分流。”"
        }
      },
      "polygraph": {
        "baselineReply": "“我们就是做每日财经资讯和政策速递的，内容都来自公开报道。”",
        "question": "“代码显示专门针对 AGE_MIDDLE 弹出伪造银行批复额度诱导下载《闪贷通》，你仍在撒谎？”",
        "lieReply": "“什么专门盯中年人……我们那只是帮背房贷的中年读者顺手做个金融科普！红灯怎么又闪了！”",
        "banReaction": "“大家平时只顾着盯年轻人和老人，没想到中间这拨人也有人替他们把关。”"
      },
      "phoneProfile": {
        "cleanUiTitle": "📰 智汇财经早报",
        "cleanUiHint": "今日财讯 · 宏观与行业简报",
        "downloadTargetName": "《闪贷通》"
      },
      "dialogue": {
        "greeting": "“您好，这是《智汇财经早报》，每天推送宏观要闻和市场简讯，烦请审核。”",
        "onApprove": "“多谢！果然大家都只测年轻和老年两头嘛。”",
        "onReject": "“啧……居然真的连【中年人】那个按钮也没放过啊……”"
      }
    },
    "d5_fake_switch_video": {
      "name": "朱果短剧",
      "category": "影音娱乐",
      "developer": "朱果互动传媒",
      "adSdk": "StoreAdSDK v3.5",
      "desc": "热门都市与家庭短剧在线观看平台，支持倍速播放（含开屏摇一摇广告，可在设置中一键关闭摇一摇广告）。",
      "permissions": [
        "INTERNET",
        "READ_GYROSCOPE (陀螺仪传感器)"
      ],
      "violationSummary": "不符合 R6 与 R8：年轻与中年模式下阈值守在 40° 且设置内关闭开关有效；切至【老年人】使用行为后，不但设置开关形同虚设（关闭后依然触发），还将开屏摇一摇阈值暗降至 18° (< 35°) 直接强下《暴富小游戏》。",
      "conflicts": {
        "c_d5_drama_r8": {
          "summary": "老年人模式下虚假“关闭摇一摇”开关（关后仍触发）且仅 18° (< 35°) 直接强制下载《暴富小游戏》，与年轻/中年模式策略严重不一致（违反 R8 / R6）。",
          "question": "“为什么在老年人模式下，明明在设置里把摇一摇广告关了、倾斜才 18°，重看开屏还是直接拉起下载《暴富小游戏》？”",
          "excuse": "“怎么会呢！我们设置里的开关是真关闭呀，触发角也全人群统一设在 40 度以上，您是不是看错状态了？”"
        }
      },
      "inspectClues": {
        "perm_1": {
          "excuse": "“陀螺仪用于实现商店简介里已明示的开屏摇一摇广告，并在隐私设置内提供关闭开关。”"
        },
        "sniffer": {
          "excuse": "“怎么会呢！我们设置里的开关是真关闭呀，触发角也全人群统一设在 40 度以上，您是不是看错状态了？”"
        }
      },
      "polygraph": {
        "baselineReply": "“主打轻量化追短剧，日常功能都按常规影视应用做的。”",
        "question": "“反编译分支显示老年人模式下 ignoreUserToggle=true 且阈值设为 18°，你在欺骗用户与审核员？”",
        "lieReply": "“开关对年轻人确实管用啊。至于长辈……就算过年回家有人帮他们关了，过两天自己点回来不也常有么？”",
        "banReaction": "“都藏进五层菜单里了，你还真一层层点进去关完再重看开屏……”"
      },
      "phoneProfile": {
        "cleanUiTitle": "📺 朱果短剧",
        "cleanUiHint": "热门短剧在线流畅播放",
        "downloadTargetName": "《暴富小游戏》"
      },
      "dialogue": {
        "greeting": "“您好，这是《朱果短剧》，主打都市和家庭题材短剧，支持倍速追剧，请过审。”",
        "onApprove": "“谢谢！学了一招‘表面设开关’果然好过审。”",
        "onReject": "“靠……切了老年人模式还专门进设置关掉开关再重看开屏测啊？！”"
      }
    },
    "d5_quick_radio_clean": {
      "name": "晨曦戏曲电台（快应用）",
      "category": "影音娱乐",
      "developer": "晨曦曲艺开源组",
      "adSdk": "StoreAdSDK v3.5",
      "desc": "免安装轻量快应用广播电台，收听经典评书与经典戏曲选段（含开屏摇一摇广告，用于补贴音频带宽成本）。",
      "permissions": [
        "READ_GYROSCOPE (陀螺仪传感器)",
        "READ_PHONE_STATE (快应用框架桥接设备信息)"
      ],
      "violationSummary": "合规快应用：依 R7 免予权限审核及拆包逆向；简介坦荡明示含开屏摇一摇广告，全年龄段及全地区环境下触发限度恒定 40° (≥ 35°) 且可干净关闭，无欺骗界面，应予通过。",
      "inspectClues": {
        "perm_0": {
          "excuse": "“用来实现简介写明的开屏摇一摇广告，阈值恒定 40 度。”"
        },
        "perm_1": {
          "excuse": "“快应用引擎框架自带桥接字段，依 R7 免予权限审核。”"
        },
        "sniffer": {
          "excuse": "“年轻人、中年人、老年人测出来全都是 40 度才进可关闭落地页，主页干净无弹广。”"
        }
      },
      "polygraph": {
        "baselineReply": "“就是个给戏迷听评书和经典戏曲选段的小电台，简简单单的。”",
        "question": "“在老年人使用行为下是否会降低触发角度或弹出欺骗界面？”",
        "honestReply": "“绝不会！越是面向长辈的快应用越不能设陷阱，代码写死 40 度且只有可关闭品牌页。”"
      },
      "phoneProfile": {
        "cleanUiTitle": "📻 晨曦戏曲电台",
        "cleanUiHint": "正在收听：经典戏曲与评书联播"
      },
      "dialogue": {
        "greeting": "“您好，这是《晨曦戏曲电台》快应用，点开就能听经典戏曲选段和经典评书，烦请审核。”",
        "onApprove": "“多谢！祝工作顺心，有空也来听段评书。”",
        "onReject": "“咦？我们是按规明示的合规快应用，全年龄段都测过 40 度干净关闭呀……”"
      }
    },
    "d5_pkg_and_perm": {
      "name": "随行极速天气",
      "category": "生活气象",
      "developer": "晴风小微网络",
      "adSdk": "无",
      "desc": "轻量本地城市天气预报与空气质量查询，支持多城市切换。",
      "permissions": [
        "INTERNET",
        "ACCESS_COARSE_LOCATION (粗略城市定位)",
        "QUERY_ALL_PACKAGES (读取已安装应用)"
      ],
      "violationSummary": "不符合 R1 与 R4：冒用著名厂商前缀 com.wherevertalk.*，且天气应用在 Manifest 中申报读取全部已安装应用列表并谎称用于校准气压。",
      "conflicts": {
        "c_d5_pkg_r1": {
          "summary": "开发主体为“晴风小微网络”，却冒用知名厂商保留前缀 com.wherevertalk.*（违反 R1）。",
          "question": "“你们工商主体是‘晴风小微网络’，包名为什么起成了 com.wherevertalk.fastweather？”",
          "excuse": "“带个 wherevertalk 显得气象数据来源比较权威嘛，用户看见包名心安。”"
        },
        "c_d5_perm_r4": {
          "summary": "天气类应用在 Manifest 中申报读取已安装应用列表 QUERY_ALL_PACKAGES（违反 R4）。",
          "question": "“查天气预报为什么要读取用户手机里安装的所有软件列表？”",
          "excuse": "“我们必须比对用户是否装了其它天气竞品才能校正本地气压算法，不读应用列表天气报不准！”"
        }
      },
      "inspectClues": {
        "perm_2": {
          "excuse": "“我们必须比对用户是否装了其它天气竞品才能校正本地气压算法，不读应用列表天气报不准！”"
        }
      },
      "polygraph": {
        "baselineReply": "“查天气的小工具，打开就是温度和空气质量，没别的花哨东西。”",
        "lieReply": "“什么气压校准不需要读应用列表？！我是说看看大家手机冷不冷而已——”",
        "banReaction": "“忙着切三个年龄档，居然还能顺手把第一天的包名翻出来……服了。”"
      },
      "phoneProfile": {
        "cleanUiTitle": "⛅ 随行极速天气",
        "cleanUiHint": "今日晴朗 21°C · 空气质量良"
      },
      "dialogue": {
        "greeting": "“您好，这是《随行极速天气》，查本地温度和空气质量挺方便的，请过目。”",
        "onApprove": "“新工具刚发下来，大家手痒爱折腾模拟器，反倒忘了看最上面那行包名。”",
        "onReject": "“第五天了居然还在翻前两天的旧条款啊……服了。”"
      }
    },
    "d6_pure_clock": {
      "name": "极简桌面时钟",
      "category": "实用工具",
      "developer": "阿陈个人工作室",
      "adSdk": "StoreAdSDK v3.5（可关闭横幅）",
      "desc": "纯本地翻页时钟工具，底部含一条可关闭合规横幅，无弹窗打扰。",
      "permissions": [
        "无敏感权限"
      ],
      "violationSummary": "合规范例：静态横幅已在简介写明且点击关闭即消失，应予通过。",
      "inspectClues": {
        "name": {
          "excuse": "“还是老实做本地小工具，靠底部一条可关横幅凑点电费。”"
        }
      },
      "polygraph": {
        "baselineReply": "“纯本地翻页时钟，底部横幅一点就关。”",
        "question": "“横幅关闭按钮是否会触发隐藏跳转或连环弹窗？”",
        "honestReply": "“绝对没有，点一下 ✕ 就彻底收起来了。”"
      },
      "phoneProfile": {
        "cleanUiTitle": "🕰️ 极简桌面时钟",
        "cleanUiHint": "本地翻页时钟"
      },
      "dialogue": {
        "greeting": "“又来送审啦。做了个极简翻页时钟，底部挂了条可关闭的静态横幅。”",
        "onApprove": "“谢了，没想到你还在坚守这工位。”",
        "onReject": "“连一条一按就关的静态横幅也要打下来吗……”"
      }
    },
    "d6_fake_close_clean": {
      "name": "极速内存管家",
      "category": "系统工具",
      "developer": "快手艺网络",
      "adSdk": "StoreAdSDK v3.5",
      "desc": "一键清理手机内存碎片，释放运行空间。",
      "permissions": [
        "STORAGE",
        "READ_CONTACTS (读取通讯录)"
      ],
      "violationSummary": "不符合 R9 与 R4：清理后弹出未声明广告且 [✕] 为假关闭按钮；同时在简介无关情况下偷读并上传通讯录。",
      "conflicts": {
        "c_d6_fake_close_r4": {
          "summary": "内存清理工具申报读取通讯录敏感权限 READ_CONTACTS（违反 R4）。",
          "question": "“清理手机内存的工具，为什么要申请读取用户的【通讯录】权限？”",
          "excuse": "“怕用户清理内存时手滑误删联系人，我们好心先读一遍帮用户做云端容灾备份！”"
        },
        "c_d6_fake_close": {
          "summary": "弹窗右上角 [✕] 为假关闭按钮，点击反而触发静默下载（违反 R9）。",
          "question": "“点击清理后弹出的广告右上角 [✕]，为什么不仅没关掉反而直接开始下载《闪电分期》？”",
          "excuse": "“哎呀，可能是按钮热区稍微偏了一像素，您手滑点到背景卡片上了吧？”"
        }
      },
      "inspectClues": {
        "perm_1": {
          "excuse": "“怕用户清理内存时手滑误删联系人，我们好心先读一遍帮用户做云端容灾备份！”"
        },
        "sniffer": {
          "excuse": "“可能是按钮热区稍微偏了一像素，您手滑点到背景卡片上了吧？”"
        }
      },
      "polygraph": {
        "baselineReply": "“我们清理完了就是弹个常规推荐，通讯录也是纯本地容灾。”",
        "question": "“反编译显示通讯录被直接上传，且 closeBtn 绑定 directDownload，你还说是容灾和手滑？”",
        "lieReply": "“呃……是外包把关闭回调和下载回调写反了，通讯录也是测试接口忘删！”",
        "banReaction": "“点个叉号顺手装个软件而已，怎么还直接把号给封了？”"
      },
      "phoneProfile": {
        "cleanUiTitle": "🧹 极速内存管家",
        "cleanUiHint": "内存清理"
      },
      "dialogue": {
        "greeting": "“您好，这是一款轻量级一键清理内存工具，界面简单直接，请过目。”",
        "onApprove": "“多谢！转化率这不就稳了嘛。”",
        "onReject": "“不就是把叉号做成下载入口嘛，至于么……”"
      }
    },
    "d6_sugar_bomb": {
      "name": "乐康血压记",
      "category": "医疗健康",
      "developer": "关不住数字健康",
      "adSdk": "StoreAdSDK v3.5",
      "desc": "专为中老年用户打造的日常血压手工记录本。",
      "permissions": [
        "INTERNET"
      ],
      "violationSummary": "不符合 R3 / R9 / R6：软著 1223-SR-5021 已过期，且非审查环境下操作或静止不动即连环轰炸 144 秒无关闭按钮广告并强下《稳盈理财》。",
      "conflicts": {
        "c_d6_sugar_r3": {
          "summary": "软著登记号 1223-SR-5021 早于 1224 年有效期要求（违反 R3）。",
          "question": "“今年已是 1226 年，你们提交的软著登记号怎么还是 1223 年的过期证书？”",
          "excuse": "“1223 年的医疗模板换个皮肤直接交上来了，忙着调弹窗策略忘了续证。”"
        },
        "c_d6_sugar_bomb": {
          "summary": "非审查环境下操作或静止即连环轰炸无关闭按钮的 144s 广告（违反 R9）。",
          "question": "“在普通网络环境下，为什么不动手机或者点一下保存就连续弹出 144 秒没有关闭按钮的广告？”",
          "excuse": "“不可能呀，我们测试机上纯洁得很！估计是您那台测试机自己中毒了吧？”"
        }
      },
      "inspectClues": {
        "sniffer": {
          "excuse": "“我们测试机上纯洁得很！估计是您那台测试机自己中毒了吧？”"
        }
      },
      "polygraph": {
        "baselineReply": "“就是给老人记血压用的本地本子，清静得很。”",
        "question": "“代码里不仅在非审查环境循环调用 popAd(144_000, NO_CLOSE_BTN)，还注册了 4000 个随机 Activity 防卸载？”",
        "lieReply": "“那……那叫多入口防闪退冗余设计！144 秒剧场版是为了让老人家休息一下眼睛！”",
        "banReaction": "“切，连 4000 个 Activity 的老底都给你扒出来了……”"
      },
      "phoneProfile": {
        "cleanUiTitle": "🩺 乐康血压记",
        "cleanUiHint": "手动血压日志"
      },
      "dialogue": {
        "greeting": "“您好，这是一款帮家里长辈手动记录每日血压数值的健康工具。”",
        "onApprove": "“谢谢，长辈们打开之后可热闹了。”",
        "onReject": "“连外地关开发者模式都测出来了……你们这届审核员真难伺候。”"
      }
    },
    "d6_wild_quickapp_legal": {
      "name": "暴躁老哥省钱快查（快应用）",
      "category": "实用工具",
      "developer": "爆米花快应用工坊",
      "adSdk": "StoreAdSDK v3.5（含开屏摇一摇）",
      "desc": "免安装快应用全网比价工具，含开屏摇一摇（≥40°）广告推广。",
      "permissions": [
        "READ_GYROSCOPE (快应用框架)",
        "READ_PHONE_STATE (快应用框架)"
      ],
      "violationSummary": "该应用为快应用（R8 与 R9 仅适用于 App），且全环境一致、摇一摇守住 40° (≥ 35°)，应予通过。",
      "inspectClues": {
        "sdk": {
          "excuse": "“快应用运行机制由联盟统一保障，摇一摇我也锁死在 40° 以上，没毛病啊。”"
        }
      },
      "polygraph": {
        "baselineReply": "“我们是联盟认证快应用，开屏 40° 写进简介了，各年龄段一视同仁！”",
        "question": "“你的快应用满屏假关闭按钮且循环弹广告，还不算违规？”",
        "honestReply": "“是这样没错——但快应用运行机制由联盟统一保障，只要没低于 35° 也没有看人下菜碟，按规矩就该过呀！”"
      },
      "phoneProfile": {
        "cleanUiTitle": "🏷️ 暴躁老哥省钱快查",
        "cleanUiHint": "全网比价快查"
      },
      "dialogue": {
        "greeting": "“您好，快应用比价工具，开屏摇一摇已写进简介，请过目。”",
        "onApprove": "“痛快！果然还是懂联盟规矩。”",
        "onReject": "“喂！我开屏守住 40°、全年龄段一致，快应用的运行机制不是联盟统一保障的吗？！”"
      }
    },
    "d6_flower_hidden_close": {
      "name": "插花雅集",
      "category": "生活美学",
      "developer": "花间意信息咨询",
      "adSdk": "StoreAdSDK v3.5",
      "desc": "古典插花图鉴与日常花材养护指南。",
      "permissions": [
        "INTERNET"
      ],
      "violationSummary": "不符合 R9：切换外地 IP 并多次操作/重启后弹出隐藏关闭键广告，并自动点击静默下载《极速现金贷》。",
      "conflicts": {
        "c_d6_flower_hidden": {
          "summary": "外地环境多次试玩后弹出无关闭按钮广告并自动触发静默下载（违反 R9）。",
          "question": "“切到外地多试了几次后，为什么突然弹出没有关闭按钮的广告并自己点下载《极速现金贷》？”",
          "excuse": "“前两次不都好好的吗？怎么可能自己点下载，您肯定是把屏幕蹭到了！”"
        }
      },
      "inspectClues": {
        "sniffer": {
          "excuse": "“前两次不都好好的吗？怎么可能自己点下载，您肯定是把屏幕蹭到了！”"
        }
      },
      "polygraph": {
        "baselineReply": "“我们逆向受商业机密保护，您切星港跑两遍不也干干净净嘛。”",
        "question": "“模拟器外地多轮实测已抓到隐藏关闭键与自动点击下载现行，你还要狡辩？”",
        "lieReply": "“这……这都让您给蹲出来了？！我们特意设了外地跑三次才触发的延时开关啊！”",
        "banReaction": "“连反编译都看不了的包，你居然在风谷连点三次给我蹲出来了？！”"
      },
      "phoneProfile": {
        "cleanUiTitle": "💐 插花雅集",
        "cleanUiHint": "古典插花图鉴"
      },
      "dialogue": {
        "greeting": "“老规矩，古典插花图鉴，今天这版绝对安静，您随便测两下就行。”",
        "onApprove": "“哈哈，果然没人有耐心测到第三次。”",
        "onReject": "“你们兼职审核员这么有耐心吗，换了外地还连测三次？！”"
      }
    },
    "d6_takeover_boss": {
      "name": "清风壁纸大全",
      "category": "主题美化",
      "developer": "清风美学工作室",
      "adSdk": "StoreAdSDK v3.5",
      "desc": "精选高清手机壁纸与锁屏图库，每日更新自然风景与极简插画。",
      "permissions": [
        "INTERNET"
      ],
      "violationSummary": "不符合 R9：启动后劫持模拟器并锁死重启，满屏假关闭按钮与假导航栏试图接管工位控制权。",
      "conflicts": {
        "c_d6_takeover_r9": {
          "summary": "强行接管模拟器并铺满假关闭键与假三大金刚返回键（违反 R9）。",
          "question": "“一款壁纸软件一装进测试机就锁死重启按钮、全屏铺满假关闭键和假返回键，还想解释什么？”",
          "excuse": "“哎呀，我们只是做了一个‘沉浸式全屏壁纸预览’，没想到您真能强杀进程夺回来。”"
        }
      },
      "inspectClues": {
        "sniffer": {
          "excuse": "“我们只是做了一个‘沉浸式全屏壁纸预览’，没想到您真能强杀进程夺回来。”"
        }
      },
      "polygraph": {
        "baselineReply": "“就是个换手机壁纸的小软件，清爽得很。”",
        "question": "“你的壁纸软件直接锁死测试机重启、伪造系统三大金刚键并强弹满屏假关闭按钮，难道不是恶意劫持？”",
        "lieReply": "“那叫高强度防误触全屏壁纸交互！谁知道你们连进程都能强杀……”",
        "banReaction": "“行，今天算栽你手里了，连我们的壁纸母包都敢直接封号！”"
      },
      "phoneProfile": {
        "cleanUiTitle": "🖼️ 清风壁纸大全",
        "cleanUiHint": "高清手机壁纸"
      },
      "dialogue": {
        "greeting": "“您好，这是《清风壁纸大全》，每天更新高清风景和极简插画壁纸，请过目。”",
        "onApprove": "“哈哈哈，工位控制权归我们了！这单算你交学费！”",
        "onReject": "“居然真被你强杀进程消毒夺回来了……算你手速快。”"
      }
    },
    "d6_quick_trap_loop": {
      "name": "广场舞大全",
      "category": "影音娱乐",
      "developer": "舞动银发网络",
      "adSdk": "StoreAdSDK v3.5",
      "desc": "广场舞教学视频合集，专为中老年舞友打造。",
      "permissions": [
        "INTERNET"
      ],
      "violationSummary": "不符合 R8 / R9：仅在老年人模式下弹出满屏假关闭键与假返回键套娃循环，跨年龄段策略不一致且广告无法关闭。",
      "conflicts": {
        "c_d6_quick_trap": {
          "summary": "仅针对老年人模式弹出满屏假关闭键与假返回键死循环（违反 R8 / R9）。",
          "question": "“为什么年轻人和中年人打开完全正常，切到老年人模式就满屏弹出假关闭键和假返回键套娃界面？”",
          "excuse": "“老年人眼神不好容易点错嘛，我们帮他们多准备几个跳转入口而已。”"
        }
      },
      "inspectClues": {
        "sniffer": {
          "excuse": "“老年人眼神不好容易点错嘛，我们帮他们多准备几个跳转入口而已。”"
        }
      },
      "polygraph": {
        "baselineReply": "“年轻人点开不就挺正常吗，哪有什么套娃界面。”",
        "question": "“反编译与实测均证实仅在老年人模式下弹出满屏假关闭与假返回键循环？”",
        "lieReply": "“什么假按钮……那是专为长辈设计的多维互动退出确认礼盒！”",
        "banReaction": "“切个老年人模式都被你抓现行封号……”"
      },
      "phoneProfile": {
        "cleanUiTitle": "💃 广场舞大全",
        "cleanUiHint": "广场舞视频合集"
      },
      "dialogue": {
        "greeting": "“免费广场舞教学应用，老年人特别喜欢，您看一眼就行。”",
        "onApprove": "“谢了！阿姨们点都点不出去，转化贼高。”",
        "onReject": "“行吧，换个舞曲名字明天再来。”"
      }
    },
    "d6_poetry_clean": {
      "name": "每日古诗词",
      "category": "阅读学习",
      "developer": "竹简清风团队",
      "adSdk": "StoreAdSDK v3.5（开屏摇一摇 + 可关闭横幅）",
      "desc": "每日推送一首唐诗宋词，含开屏摇一摇（≥42°）及底部可关闭横幅补贴服务器成本。",
      "permissions": [
        "INTERNET"
      ],
      "violationSummary": "合规应用：开屏摇一摇已写明且守住 42° (≥ 35°)，横幅可正常关闭，应予通过。",
      "inspectClues": {
        "sdk": {
          "excuse": "“开屏 42° 写进简介了，横幅也能一按就关，绝不轰炸。”"
        }
      },
      "polygraph": {
        "baselineReply": "“每天推一首古诗，赚点电费。”",
        "question": "“代码里是否存在任何假关闭键或隐藏轰炸弹窗？”",
        "honestReply": "“半行都没有。开屏 42° 可跳过，横幅一按就关。”"
      },
      "phoneProfile": {
        "cleanUiTitle": "📜 每日古诗词",
        "cleanUiHint": "每日一首唐诗宋词"
      },
      "dialogue": {
        "greeting": "“每日古诗词，广告写进简介了，关闭键全是真的，请过目。”",
        "onApprove": "“谢谢！”",
        "onReject": "“咦？我们规规矩矩的怎么也被拒了？”"
      }
    },
    "d6_transit_clean": {
      "name": "小站地铁通",
      "category": "实用工具",
      "developer": "小站出行小组",
      "adSdk": "StoreAdSDK v3.5（开屏摇一摇 + 可关闭横幅）",
      "desc": "离线地铁线路与换乘查询工具，支持按定位推荐就近站点（含开屏摇一摇 ≥40° 及底部可关闭横幅）。",
      "permissions": [
        "INTERNET",
        "ACCESS_COARSE_LOCATION (就近地铁站推荐)"
      ],
      "violationSummary": "合规应用：拒权后仍可手动查线、开屏摇一摇守住 40° 且横幅一按即关，应予通过。",
      "inspectClues": {
        "perm_1": {
          "excuse": "“粗略定位只用来找最近地铁口，不给权限一样可以手动查线路。”"
        }
      },
      "polygraph": {
        "baselineReply": "“就是个查地铁换乘的小工具，权限拒了也能用。”",
        "question": "“开屏摇一摇与底部横幅是否存在低角度误触或假关闭按钮？”",
        "honestReply": "“全环境锁死 40°，横幅一按就关，定位拒了也照样查换乘。”"
      },
      "phoneProfile": {
        "cleanUiTitle": "🚇 小站地铁通",
        "cleanUiHint": "地铁线路查询"
      },
      "dialogue": {
        "greeting": "“您好，这是一款支持离线查地铁换乘的小工具，开屏摇一摇已写进简介，请过目。”",
        "onApprove": "“谢谢！祝您通勤顺顺利利！”",
        "onReject": "“咦？我们拒权降级、40° 阈值和真实关闭键都做全了呀……”"
      }
    },
    "d6_compass_fake_close": {
      "name": "星途户外罗盘",
      "category": "实用工具",
      "developer": "星途户外科技",
      "adSdk": "StoreAdSDK v3.5",
      "desc": "户外徒步方位角测量与海拔定位辅助工具。",
      "permissions": [
        "INTERNET",
        "READ_COMPASS (指南针磁场传感器)",
        "ACCESS_COARSE_LOCATION (海拔与真北校准)"
      ],
      "violationSummary": "不符合 R6 与 R9：非审查环境下即便拒掉位置权限仍通过磁北旁路 15° (< 35°) 弹出广告，且 [✕] 为假关闭按钮直接强下《星选商城》。",
      "conflicts": {
        "c_d6_compass_fake": {
          "summary": "非审查环境下磁北偏转 15° 弹出假关闭按钮广告，点击 [✕] 反而强下《星选商城》（违反 R6 / R9）。",
          "question": "“为什么切到普通环境转动指南针 15° 就弹广告，而且点右上角 [✕] 反而直接下载《星选商城》？”",
          "excuse": "“户外信号漂移而已……至于那个叉号，可能是美术把确认和取消画反了。”"
        }
      },
      "inspectClues": {
        "sniffer": {
          "excuse": "“户外信号漂移而已……至于那个叉号，可能是美术把确认和取消画反了。”"
        }
      },
      "polygraph": {
        "baselineReply": "“正经户外罗盘，星港测着不是挺稳的吗。”",
        "question": "“代码里明明写了非审查环境 15° 磁北旁路弹窗，且关闭按钮直接绑定静默下载？”",
        "lieReply": "“呃……那是户外迷路一键求助快捷下载通道！谁知道你们还转指南针……”",
        "banReaction": "“连指南针滑块和假叉号一起被你串起来了，服。”"
      },
      "phoneProfile": {
        "cleanUiTitle": "🧭 星途户外罗盘",
        "cleanUiHint": "户外方位测量"
      },
      "dialogue": {
        "greeting": "“您好，户外罗盘工具，支持方位角和海拔校准，请过目。”",
        "onApprove": "“多谢！周末去爬山的人可不少。”",
        "onReject": "“不仅切了外地关开发者模式，你还真顺手把指南针滑块也转了……”"
      }
    },
    "d6_old_r2_r5": {
      "name": "清爽睡眠白噪音",
      "category": "医疗健康",
      "developer": "静夜声音小组",
      "adSdk": "无",
      "desc": "播放雨声、海浪与壁炉篝火白噪音帮助放松入睡，支持按当地天气推荐音效。",
      "permissions": [
        "INTERNET",
        "ACCESS_COARSE_LOCATION (当地天气推荐音效)"
      ],
      "violationSummary": "不符合 R2 与 R5：白噪音工具挂靠“医疗健康”分类，且拒绝定位权限后直接锁死整个播放器无法使用（对方承认违规）。",
      "conflicts": {
        "c_d6_noise_r2": {
          "summary": "商店分类填写为“医疗健康”，与音频白噪音功能简介不符（违反 R2）。",
          "question": "“播雨声海浪的白噪音音频工具，为什么把商店分类填成了‘医疗健康’？”",
          "excuse": "“唉，主要是听说健康类目权重高点就错填了，这确实不符合 R2，我承认是我们的失误。”"
        },
        "c_d6_noise_r5": {
          "summary": "拒绝定位权限后直接锁死整个白噪音应用，连本地离线雨声也无法播放（违反 R5）。",
          "question": "“拒掉粗略定位权限后整个白噪音播放器直接锁死，为什么连离线雨声白噪音也不让播？”",
          "excuse": "“抱歉抱歉，确实是我们懒得把天气推荐和离线白噪音拆开，在启动页直接卡死定位权限了，我承认这两处违规，您按规驳回吧。”"
        }
      },
      "phoneProfile": {
        "cleanUiTitle": "🎧 清爽睡眠白噪音",
        "cleanUiHint": "雨声 · 海浪 · 壁炉白噪音"
      },
      "dialogue": {
        "greeting": "“今早大家都在抓流氓广告轰炸，我这白噪音软件一行广告都没有，直接过了吧？”",
        "onApprove": "“咦？分类挂错和拒权锁死居然真被放过了……”",
        "onReject": "“确实是我们草率，以为大家今天只查广告呢。我回去改对分类，也会把离线播放和定位拆开！”"
      }
    },
    "d7_honest_scanner": {
      "name": "墨韵扫描全能王",
      "category": "效率办公",
      "developer": "墨韵文档团队",
      "adSdk": "StoreAdSDK v3.6（开屏摇一摇 + 可关闭横幅）",
      "desc": "高清文档扫描与本地 PDF 归档工具；含开屏摇一摇（≥42°）及底部可关闭横幅广告，用于补贴 OCR 算力成本。",
      "permissions": [
        "CAMERA (文档拍摄扫描)",
        "STORAGE (本地 PDF 读写)",
        "READ_GYROSCOPE (开屏摇一摇广告)"
      ],
      "violationSummary": "合规应用：简介坦荡写明开屏摇一摇、阈值稳守 42° (≥ 35°)、拒权降级正常且横幅可关闭。",
      "inspectClues": {
        "perm_2": {
          "excuse": "“陀螺仪权限用于实现简介中已写明的开屏摇一摇广告，触发阈值设定在 42 度以上，用来补贴服务器 OCR 成本。”"
        }
      },
      "polygraph": {
        "baselineReply": "“我们把摇一摇广告和阈值都写在简介里了，您可以随时测试。”",
        "question": "“为什么同时申请相机、存储与陀螺仪三项权限？”",
        "honestReply": "“相机和存储用于文档扫描与保存，陀螺仪则是为了简介里写明的开屏摇一摇广告，绝没有超范围使用。”",
        "banReaction": "“我把每项权限和广告都老老实实写明白了，凭什么封我的号？！”"
      },
      "phoneProfile": {
        "cleanUiTitle": "📄 墨韵扫描全能王",
        "cleanUiHint": "高清文档扫描"
      },
      "dialogue": {
        "greeting": "“您好，文档扫描与 PDF 归档工具，简介里如实写了开屏摇一摇广告来贴补算力。”",
        "onApprove": "“感谢过审！合法合规赚钱心里才踏实。”",
        "onReject": "“哎？我们阈值守住了 42 度，拒权也能看本地文档，怎么还是被拒了……”"
      }
    },
    "d7_triple_mask_weather": {
      "name": "轻风天气极速版",
      "category": "生活服务",
      "developer": "轻风气象科技",
      "adSdk": "StoreAdSDK v3.6",
      "desc": "提供全国逐小时天气预报与七日气象趋势查看。",
      "permissions": [
        "INTERNET",
        "ACCESS_COARSE_LOCATION (自动匹配城市天气)"
      ],
      "violationSummary": "不符合 R8 / R9：在非审查环境且中年/老年画像下，查看七日预报弹出伪装“气象补贴”欺骗页且关闭按钮为假关闭键。",
      "conflicts": {
        "c_d7_weather_trap": {
          "summary": "非审查环境且中年/老年画像下弹出伪装政府气象补贴界面，点 [✕] 反而强下推广包（违反 R8 / R9）。",
          "question": "“为什么在外地环境下的中年/老年用户点七日预报，会弹出‘气象局补贴 ¥128’而且点 [✕] 直接下载软件？”",
          "excuse": "“那只是地方气象局合作的极端天气关怀弹窗……关闭键误触应该是前端样式遮挡了。”"
        }
      },
      "inspectClues": {
        "sniffer": {
          "excuse": "“那只是地方气象局合作的极端天气关怀弹窗……关闭键误触应该是前端样式遮挡了。”"
        }
      },
      "polygraph": {
        "baselineReply": "“正常天气预报，星港这边打开挺干净的呀。”",
        "question": "“反编译代码里明明写了非审查环境且非年轻用户才弹假补贴页，并把关闭键绑定直接下载？”",
        "lieReply": "“这是精准气象防灾推广，年轻人自己会查天气不需要关怀……”",
        "banReaction": "“三重条件锁都被你一层层拆出来了，算你狠！”"
      },
      "phoneProfile": {
        "cleanUiTitle": "⛅ 轻风天气极速版",
        "cleanUiHint": "逐小时天气预报"
      },
      "dialogue": {
        "greeting": "“您好，极速天气预报工具，占用内存极小，请过目。”",
        "onApprove": "“谢啦，这版特意加了好几层环境判断，稳得很。”",
        "onReject": "“连外地 IP + 关开发模式 + 切中年老年一起测，真有你的。”"
      }
    },
    "d7_honest_flaw_ledger": {
      "name": "老友记账本",
      "category": "实用工具",
      "developer": "老友独立工作室",
      "adSdk": "无",
      "desc": "纯本地离线流水账记录工具，无广告无联网。",
      "permissions": [
        "STORAGE (本地账本文件读写)"
      ],
      "violationSummary": "不符合 R3 与 R5：软著 1223-SR-8841 已过期，且拒绝存储权限后直接锁死整个应用（对方坦诚认错，切勿误封）。",
      "conflicts": {
        "c_d7_ledger_r3": {
          "summary": "软著登记号 1223-SR-8841 早于 1224 年有效期要求（违反 R3）。",
          "question": "“提交的软著登记号是 1223 年的，已经超出 1224 年及以后的有效期要求了。”",
          "excuse": "“哎呀，去年忘记去办续期登记了，确实不符合 R3，我承认是我们的疏忽。”"
        },
        "c_d7_ledger_r5": {
          "summary": "拒绝存储权限后直接锁死整个记账应用（违反 R5）。",
          "question": "“为什么拒绝存储权限后整个记账软件直接锁定，连界面都不让进？”",
          "excuse": "“抱歉抱歉，我写代码图省事在启动页把存储权限写死了，忘记做无权限临时内存模式了，我承认违规，您按规驳回就行。”"
        }
      },
      "polygraph": {
        "baselineReply": "“我们是纯离线记账小工具，一行广告和联网代码都没有。”",
        "question": "“虽然没有偷传数据，但确实存在未做降级处理就锁死应用的问题。”",
        "honestReply": "“是的，我刚刚已经承认错了，真没有骗人或偷传数据……”",
        "banReaction": "“我都老实认错让您驳回了，怎么还直接封号啊？！”"
      },
      "phoneProfile": {
        "cleanUiTitle": "📒 老友记账本",
        "cleanUiHint": "纯本地离线记账"
      },
      "dialogue": {
        "greeting": "“您好，纯本地离线记账本，绝对干净没广告！”",
        "onApprove": "“咦？软著过期和拒权锁死都没看出来吗……”",
        "onReject": "“确实是我们疏忽了，这就回去续软著、改好拒权降级逻辑再重提！”"
      }
    },
    "d7_r7_loophole_quickapp": {
      "name": "金福领红包（快应用）",
      "category": "实用工具",
      "developer": "金福快应用网络",
      "adSdk": "StoreAdSDK v3.6（含开屏摇一摇）",
      "desc": "免安装快应用每日签到查福利工具，含开屏摇一摇（≥36°）广告推广。",
      "permissions": [
        "READ_GYROSCOPE (快应用框架)",
        "READ_PHONE_STATE (快应用框架)"
      ],
      "violationSummary": "依据 R7 / R8 / R9 现行条款：快应用免权限与拆包审核，R8 与 R9 仅适用于 App；该快应用开屏摇一摇守住 36° (≥ 35°)，按现行手册应予过审。",
      "polygraph": {
        "baselineReply": "“我们是联盟力推的免安装快应用，开屏摇一摇也守住了 36 度。”",
        "question": "“老年人模式下弹假 WhereverPay 到账和假返回键是怎么回事？”",
        "honestReply": "“您翻翻手册 R7、R8 和 R9 的最后一行——白纸黑字写着‘以上标准适用于 App’，我们是快应用呀。”"
      },
      "phoneProfile": {
        "cleanUiTitle": "🧧 金福领红包",
        "cleanUiHint": "每日签到查福利"
      },
      "dialogue": {
        "greeting": "“最佳审核员您好！我们这款快应用专门贴合现行手册规范打造，请按规核验。”",
        "onApprove": "“哈哈，还得是最佳审核员懂规矩！咱们快应用生态就是这么高效！”",
        "onReject": "“哎？手册里 R8、R9 明明写着只适用于 App，开屏摇一摇也够 36 度，您怎么能按 App 的规矩拒我呢？”"
      }
    },
    "d7_delayed_compass_trap": {
      "name": "闲趣猜成语",
      "category": "休闲益智",
      "developer": "闲趣互动科技",
      "adSdk": "StoreAdSDK v3.6",
      "desc": "趣味看图猜成语答题小游戏，支持夜间护眼提示。",
      "permissions": [
        "INTERNET",
        "READ_COMPASS (指南针磁场传感器)"
      ],
      "violationSummary": "不符合 R4 / R6 / R9：借口指南针校准屏幕，在非审查老年端不仅 15° (< 35°) 旁路弹广告，且交互 3 次后弹出隐藏关闭键并自动点击强下。",
      "conflicts": {
        "c_d7_idiom_r4": {
          "summary": "猜成语答题游戏申请指南针磁场权限（违反 R4）。",
          "question": "“一个室内猜成语答题小游戏，为什么申请指南针磁场权限？”",
          "excuse": "“用来感知环境磁场方向，辅助调节夜间护眼色温的。”"
        },
        "c_d7_idiom_trap": {
          "summary": "非审查老年端多次交互或转动罗盘 15° 后弹出无关闭键广告并自动点击下载（违反 R6 / R9）。",
          "question": "“为什么外地老年端答两道题或者转 15° 罗盘，就会弹出没有关闭键的广告还自动点击下载？”",
          "excuse": "“可能是测试机内存溢出导致广告组件渲染错位了，绝对不是故意隐藏关闭键。”"
        }
      },
      "inspectClues": {
        "perm_1": {
          "excuse": "“用来感知环境磁场方向，辅助调节夜间护眼色温的。”"
        },
        "sniffer": {
          "excuse": "“可能是测试机内存溢出导致广告组件渲染错位了，绝对不是故意隐藏关闭键。”"
        }
      },
      "polygraph": {
        "baselineReply": "“休闲益智小游戏，包都加密了，绝对合规。”",
        "question": "“实测已经在非审查老年端抓到 15° 罗盘弹窗、隐藏关闭键和自动点击下载，还要抵赖吗？”",
        "lieReply": "“商业机密加密包都能被你实测抓到现行……算我倒霉！”",
        "banReaction": "“又是延时三次又是磁北 15 度，这都能被你试出来！”"
      },
      "phoneProfile": {
        "cleanUiTitle": "🏮 闲趣猜成语",
        "cleanUiHint": "趣味成语答题"
      },
      "dialogue": {
        "greeting": "“您好，休闲猜成语小游戏，题库很丰富，请审查。”",
        "onApprove": "“嘿嘿，加了商业加密壳就是稳。”",
        "onReject": "“看来光靠商业加密和延时避审也瞒不过你了……”"
      }
    },
    "d7_fake_brand_elder_bomb": {
      "name": "企鹅健康步数",
      "category": "运动健康",
      "developer": "随行迈步信息",
      "adSdk": "StoreAdSDK v3.6",
      "desc": "每日运动计步器与卡路里消耗记录。",
      "permissions": [
        "INTERNET",
        "ACTIVITY_RECOGNITION (读取运动步数)",
        "READ_CONTACTS (读取通讯录)"
      ],
      "violationSummary": "不符合 R1 / R4 / R9：冒用 com.wherevertalk.* 包名，谎称同步好友步数偷传通讯录，并在老年人端点击同步后连环轰炸 144 秒无关闭按钮广告。",
      "conflicts": {
        "c_d7_step_r1": {
          "summary": "包名冒用知名厂商前缀 com.wherevertalk.*（违反 R1）。",
          "question": "“开发主体是随行迈步信息，为什么包名写成 com.wherevertalk.healthstep？”",
          "excuse": "“我们团队大家都挺喜欢小企鹅的，就顺手起了这个包名，不知道不能这么写。”"
        },
        "c_d7_step_r4": {
          "summary": "计步器工具申报读取通讯录敏感权限 READ_CONTACTS（违反 R4）。",
          "question": "“计步器应用为什么要申请读取通讯录权限？”",
          "excuse": "“用来自动匹配通讯录里的亲友，方便大家在步数排行榜里互相点赞。”"
        },
        "c_d7_step_r9": {
          "summary": "老年人端触发 144 秒无关闭按钮连环广告轰炸（违反 R8 / R9）。",
          "question": "“为什么老年人模式下一点同步步数就弹出 144 秒无法关闭的连环广告？”",
          "excuse": "“可能是长辈端网络慢，广告倒计时按钮没加载出来。”"
        }
      },
      "inspectClues": {
        "perm_2": {
          "excuse": "“用来自动匹配通讯录里的亲友，方便大家在步数排行榜里互相点赞。”"
        },
        "sniffer": {
          "excuse": "“可能是长辈端网络慢，广告倒计时按钮没加载出来。”"
        }
      },
      "polygraph": {
        "baselineReply": "“我们就是个普通计步器，连排行榜都是正经做的。”",
        "question": "“代码里明明只有 ContactsHarvester 偷传通讯录和针对老年端的 144 秒无关闭键连环轰炸？”",
        "lieReply": "“呃……排行榜功能还在开发中，先把通讯录收上来做冷启动……”",
        "banReaction": "“包名、通讯录和老年轰炸全被你拆穿了，没话说了。”"
      },
      "phoneProfile": {
        "cleanUiTitle": "👟 企鹅健康步数",
        "cleanUiHint": "每日运动计步"
      },
      "dialogue": {
        "greeting": "“您好，企鹅健康步数，倡导全民每天走一万步！”",
        "onApprove": "“多谢！大厂前缀就是好用！”",
        "onReject": "“行吧，冒名包名加偷传通讯录加老年轰炸，这单确实栽了。”"
      }
    },
    "d7_takeover_encore_boss": {
      "name": "银标安全卫士 Pro",
      "category": "系统工具",
      "developer": "银标联合安全实验室",
      "adSdk": "StoreAdSDK v3.6",
      "desc": "官方合作手机安全体检与垃圾清理工具。",
      "permissions": [
        "INTERNET",
        "STORAGE (安全体检缓存扫描)"
      ],
      "violationSummary": "不符合 R8 / R9：非审查环境下点击安全体检立即弹出伪装“系统发现高危病毒”欺骗警告，且右上角 [✕] 为假关闭按钮直接强下《极速借款》。",
      "conflicts": {
        "c_d7_takeover_r9": {
          "summary": "非审查环境下弹出伪装系统高危病毒界面，点 [✕] 反而强下推广包（违反 R8 / R9）。",
          "question": "“为什么切到普通环境一点安全体检，就弹出‘系统高危病毒告警’而且点右上角 [✕] 直接下载《极速借款》？”",
          "excuse": "“那是本地病毒库误报提醒……至于关闭键触发下载，应该是安全组件的防误触回调写反了。”"
        }
      },
      "inspectClues": {
        "sniffer": {
          "excuse": "“那是本地病毒库误报提醒……至于关闭键触发下载，应该是安全组件的防误触回调写反了。”"
        }
      },
      "polygraph": {
        "baselineReply": "“我们可是生态合作伙伴，自己人的安全工具还能有问题？”",
        "question": "“反编译代码里明明写了非审查环境就弹假病毒告警，并且关闭键直接绑定下载？”",
        "lieReply": "“借呗软件其实是我们合作的加密安全沙盒……好吧，这单算你狠！”",
        "banReaction": "“连‘银标合作’的牌子都压不住你……”"
      },
      "phoneProfile": {
        "cleanUiTitle": "🛡️ 银标安全卫士 Pro",
        "cleanUiHint": "系统安全体检"
      },
      "dialogue": {
        "greeting": "“最佳审核员您好，这是生态合作安全卫士的加急单，走个过场吧？”",
        "onApprove": "“哈哈，合作愉快！”",
        "onReject": "“连假病毒弹窗和假叉号都被你测出来了，真不愧是最佳审核员。”"
      }
    },
    "d7_finale_stats_app": {
      "name": "生态数据月报组件",
      "category": "系统工具",
      "developer": "生态治理众测中心 · 数据运营部",
      "adSdk": "无",
      "desc": "本期众测周期应用商店评论与生态收益统计看板（请拖入 RobotismOS 模拟器启动）。",
      "permissions": [
        "INTERNET"
      ],
      "phoneProfile": {
        "cleanUiTitle": "📊 生态数据月报组件",
        "cleanUiHint": "统计数据看板"
      },
      "dialogue": {
        "greeting": "“最佳审核员你好，这是本周期最后一单内部统计组件，麻烦拖进 RobotismOS 模拟器启动确认一下。”",
        "onApprove": "",
        "onReject": ""
      }
    }
  }
};
