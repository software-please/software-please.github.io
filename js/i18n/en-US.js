/* ============================================================================
   American English (en-US) Locale Pack
   ============================================================================ */

export const enUS = {
  ui: {
    doc: {
      title: 'Software, Please // App Store Audit Simulator'
    },
    intro: {
      continue_hint: 'Click anywhere or press Space to continue ▸'
    },
    newspaper: {
      paper_title: 'APP STORE CHRONICLE · DAILY BRIEF',
      bulletin_tag: 'CO-GOVERNANCE INTERNAL BULLETIN',
      briefing_heading: '📌 TODAY\'S AUDIT BRIEFING',
      pay_reminder_html:
        '<div>Standard Review: <strong>¥1.00 / case</strong></div>' +
        '<div>Rogue Intercept: <strong>¥2.50 / case</strong></div>' +
        '<div class="muted">1st citation: warning; 2nd+: -¥3.00 each</div>',
      start_shift: 'OPEN WORKBENCH →'
    },
    hud: {
      banner_rulebook: '📖 Rules',
      banner_ask: '💬 Ask',
      exit_inspect: '✕ Exit Inspect',
      dock_rulebook_title: 'Toggle Rulebook (B)',
      dock_analyzer_title: 'Toggle Package Analyzer',
      dock_phone_title: 'Toggle RobotismOS Emulator',
      dock_reverser_title: 'Toggle Reverse Analyzer',
      mute_title: 'Toggle Mute (M)',
      help_title: 'Help',
      back_title: 'Back to Title'
    },
    booth: {
      queue_label: 'Queue ',
      next_case: '📢 Next Case',
      materials_title: 'Materials',
      materials_idle: 'Idle',
      materials_empty: 'Waiting for applicant files...',
      ban_title: 'ACCOUNT BANNED',
      ban_code: 'ACCOUNT BANNED // DECEPTION VERIFIED',
      window_drop_overlay: '← Release to slide verdict back',
      window_ledge: 'Submission Ledge',
      reward_waiting: 'Waiting for next applicant...',
      inspect_title: 'Toggle Inspect Mode to match rule conflicts (I)',
      inspect_label: 'Inspect',
      ask_title: 'Question developer on detected conflict (Q)',
      ask_label: 'Ask',
      polygraph_title: 'Decompile Package to verify if developer is lying (P)',
      polygraph_label: 'Polygraph',
      ban_title_attr: 'Ban account after confirming lie (+¥5.00, false ban -¥5.00 + citation)',
      ban_label: 'Ban',
      date_inspect_label: 'Current Review Date'
    },
    desk: {
      banner_title: 'ITSSA App Review Platform',
      banner_footnote: 'All rights reserved by ITSSA',
      banner_slogan: 'Open Ecosystem · Serving Developers · Better Experience',
      analyzer_title: '🔬 Package Analyzer',
      analyzer_close_title: 'Minimize Package Analyzer',
      analyzer_slot_idle: 'Drop [Original Package] here to inspect',
      analyzer_output_hint: 'Auto-extracts static manifest',
      reverser_title: '🧬 Reverse Analyzer',
      reverser_close_title: 'Minimize Reverse Analyzer',
      reverser_slot_idle: 'Drop [Original Package] here to decompile',
      reverser_inspect_label: 'Decompiled Code',
      reverser_sublabel: '🧬 Decompiled Snippet',
      reverser_output_hint: 'Trace call graph · Check for lies'
    },
    phone: {
      close_title: 'Minimize RobotismOS Emulator',
      inspect_label: 'RobotismOS Emulator Screen',
      sublabel: '📱 RobotismOS Emulator',
      launch: '▶ Launch App',
      reset_perm: '🔄 Reset Perms',
      sensor_gyro_label: 'Gyroscope Sim',
      sensor_compass_label: 'Compass Sim',
      shake: '📳 Shake Test',
      close_ad: '✕ Close Ad',
      next_round: '⏩ Next Round (+15m)',
      open_hook: '⚡ Open Config Probe',
      env_ip_label: 'Network IP Location',
      env_dev_label: 'Developer Mode',
      region_xinggang: 'Starport',
      region_yinwan: 'Silverbay',
      region_fenggu: 'Windvale',
      region_shishi: 'Stonemist',
      region_yunsong: 'Cloudpine',
      region_chichuan: 'Redbrook',
      reboot_hint: '⚠️ Region changed—reboot sandbox to apply',
      reboot_btn: '🔄 Reboot Sandbox',
      env_dev_debug: 'ON',
      env_dev_consumer: 'OFF',
      env_age_label: 'User Behavior Sim',
      env_age_young: 'Young',
      env_age_middle: 'Middle',
      env_age_elder: 'Elder'
    },
    submission: {
      title: '📋 App Submission Form',
      name_label: 'App Name',
      version_prefix: 'Ver: ',
      category_label: 'Store Category',
      category_prefix: 'Category: ',
      pkg_label: 'Package Name',
      dev_label: 'Developer',
      license_label: 'Copyright Reg.',
      sdk_label: 'Ad SDK',
      desc_inspect_label: 'Store Description',
      desc_label: 'Store Description & Features',
      stamp_hint: 'Drag a stamp onto the form, or slide the form under a stamp and click'
    },
    rulebook: {
      title: '📜 Store Audit Rulebook',
      close_title: 'Close Rulebook (B)',
      section_title: 'Audit Rules',
      prev: '◀ Prev',
      next: 'Next ▶'
    },
    manifest: {
      title: '🔐 RobotismManifest Report',
      tag: 'STATIC',
      section_label: 'Declared Permissions (clickable in Inspect Mode)',
      sdk_label: 'Integrated Ad SDK'
    },
    sniffer: {
      title: '📡 Live Sniffer & SDK Monitor',
      inspect_label: 'Monitor Logs',
      sublabel: '📡 Behavior & Network Log'
    },
    hook: {
      title: '⚡ Config Probe',
      tip_html: 'Tip: Force dormant remote config flags to <code>true</code> and relaunch to observe behavior.',
      inspect_label: 'Config Probe Snippet',
      sublabel: '⚡ Dormant Branch Snippet'
    },
    memo: {
      tag: 'CONFIDENTIAL'
    },
    stamps: {
      tray_title: 'Stamp Tray (drag onto form, or slide form underneath & click)',
      approve_title: 'Approve Release (APPROVED)',
      approve_pad: '✅ APPROVE',
      reject_title: 'Reject Submission (REJECTED)',
      reject_pad: '❌ REJECT'
    },
    ledger: {
      sub: 'DAILY SETTLEMENT SHEET',
      earnings_heading: '💰 Earnings & Penalties',
      expenses_heading: '🏠 Daily Living Costs',
      condition_prefix: 'Condition: ',
      utilities_prefix: 'Utilities: ',
      net_prefix: 'Net Balance: ',
      confirm_btn: 'Settle & Next Day →'
    },
    ending: {
      replay_d6: '↺ Replay Day 6 for Alternate Ending',
      gallery_btn: '🏆 Endings Gallery',
      return_title: '🏠 Return to Title'
    },
    modals: {
      gallery_title: '🏆 Endings Gallery',
      help_title: '❓ Reviewer Field Guide',
      help_body_html:
        '<p><strong>1. Workflow:</strong> Click <code>📢 Next Case</code> (top-left) → drag <code>📋 Submission Form</code> onto the desk to inspect (Day 2+: drag <code>📦 Original Package</code> onto desk tools to analyze/emulate/decompile) → stamp <code>✅ APPROVE</code> or <code>❌ REJECT</code> → slide the stamped form back into the left booth window (or click the glowing ledge).</p>' +
        '<p><strong>2. Inspect, Ask &amp; Polygraph:</strong> Click <code>Inspect</code> (<code>I</code>) to highlight submission fields, rules, permissions, and emulator screens to check conflicts, then click <code>Ask</code> (<code>Q</code>) to question the dev. From Day 3+, drag <code>📦 Original Package</code> into <code>🧬 Reverse Analyzer</code> and click <code>Polygraph</code> (<code>P</code>) to compare dev claims against decompiled code or emulator evidence.</p>' +
        '<p><strong>3. Pay &amp; Citations:</strong> Accurate standard reviews pay <code>+¥1.00</code>; accurate rogue rejections pay <code>+¥2.50</code>; verified deception bans pay <code>+¥5.00</code>. Mistakes issue citations (1st warning free, 2nd+ fines <code>¥3.00</code>); false/unauthorized bans immediately fine <code>¥5.00</code> and add a citation. 5 citations in one day terminates your contract.</p>' +
        '<p><strong>4. Shortcuts:</strong> <code>M</code> mute, <code>B</code> toggle rulebook, <code>I</code> inspect mode, <code>Q</code> question developer, <code>P</code> polygraph mode (Day 3+), <code>Space</code> next case.</p>'
    }
  },

  game: {
    weekdays: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
    title: {
      subtitle: 'APP STORE AUDIT SIMULATOR',
      start: 'CLOCK IN',
      lang_btn: 'SELECT LANGUAGE',
      wipe: 'WIPE MEMORY',
      wipe_confirm: 'CONFIRM WIPE?',
      wipe_done: 'MEMORY WIPED',
      tribute: 'Tribute to IP, Please and Papers, Please'
    },
    queue: {
      count: 'Pending {waiting} · Done {done}',
      empty: 'Queue empty'
    },
    booth: {
      waiting_app: 'Waiting',
      dev_claim_label: 'Developer Claim'
    },
    polygraph: {
      ready_status: 'Decompiler Standby',
      verdict_pending: 'Pending',
      trace_hint: '// Click [Run Polygraph] below to verify developer claim',
      panel_ready: 'Decompiler Ready · Awaiting Package',
      trace_ready: '// Statement logged; click [Run Polygraph] to compare call trace',
      started_hint: 'Started [🧬 Reverse Analyzer] · Use [Inspect] to compare code vs claim'
    },
    hud: {
      interrogating: 'Asking...',
      interrogated: 'Asked',
      interrogate: 'Ask',
      reversing: 'Scanning',
      reversed: 'Verified',
      polygraph: 'Polygraph',
      polygraph_active: 'Checking...',
      mute_on: '🔇 Muted',
      mute_off: '🔊 Sound'
    },
    shift: {
      bribe_news: 'Bulletin: "Breeze Clean Lite," waived through under your review yesterday, surged into the Top 3 most-complained apps overnight. Operations is delighted and credited you an Ecosystem Synergy Bonus.',
      corp_bribe_paid: 'Crazy Thursday private transfer received +¥50.00',
      corp_tragedy_news: 'Breaking Social Report: Yesterday evening, an elderly pedestrian suffered a sudden heart attack outdoors and tried to dial emergency services on his phone, only to have relentless, uncloseable promo popups block the dialer screen. Though passersby noticed his collapse and called emergency services immediately, he passed away on the way to the hospital. As public outrage escalated overnight, forensic checks confirmed that every offending popup app on his phone shared the exact same package prefix: com.jingfeng.',
      start_hint: 'Click "Next Case" (top-left) to begin review',
      final_case_hint: 'Final case of the day',
      finale_stats_hint: 'Drag [Original Package] into [📱 RobotismOS Emulator] to launch and view',
      pay_hint: 'Standard +¥1.00 | Rogue +¥2.50',
      auditor_next: 'Next!',
      clock_over_wait: '⏰ Shift over—finish this case to settle',
      clock_over_final: '⏰ Shift bell rang—one final applicant stands outside',
      next_hint: 'Click Next Case (top-left)',
      auditor_approve: 'Approved.',
      auditor_reject: 'Rejected.',
      bribe_reward: 'Ecosystem Synergy Bonus +¥5.00',
      bribe_rejected: 'Rejected by the book +¥2.50',
      rogue_reward: 'Rogue Intercept +¥2.50',
      normal_reward: 'Verified Accurate +¥1.00',
      fine_hint: 'Citation Penalty -¥3.00',
      warning_hint: 'Citation Issued (Warning)'
    },
    ledger: {
      title: 'DAY {day} SHIFT SETTLEMENT',
      normal_row: 'Standard Reviews ({count} × ¥1.00)',
      rogue_row: 'Rogue Intercepts ({count} × ¥2.50)',
      ban_row: 'Deception Bans ({count} × ¥5.00)',
      bonus_row: 'Special Stipend',
      fine_row: 'Citations ({count} slips)',
      pre_balance: 'Balance Before Expenses',
      exp_power: '🛏️ Dorm Electricity & Broadband',
      exp_food: '🍜 Cafeteria Dinner & Late-Night Noodles',
      exp_coffee: '☕ Mobile Data Pack & Iced Coffee',
      exp_heating: '🔥 Dorm Heating Fee',
      exp_treat: '🍲 Treat Yourself to a Proper Meal',
      exp_kfc50: '🍗 Crazy Thursday Voucher (Mandatory)',
      status_hungry: 'So hungry app icons look like burgers',
      status_cold: 'Shivering—layering on extra sweaters',
      status_treat: 'Well-fed and ready to take on ten more cases',
      status_kfc50: 'Full of fried chicken—energized for tomorrow',
      status_malnourished: 'Chronic malnutrition is lowering your work efficiency',
      status_tired: 'Eyelids drooping, tempted to wave apps through',
      status_ok: 'Barely awake for ten more cases',
      power_critical: 'Shutoff imminent!',
      power_warn: 'Power meter flashing red',
      power_ok: 'Power & internet barely holding',
      warn_bankrupt: '⚠️ Insufficient funds! Settling negative causes immediate bankruptcy—skip an expense.',
      warn_power: '⚠️ Skipping power/internet two days straight disconnects your dorm!'
    },
    ending: {
      badge: '{code} | Unlocked {count}/4',
      obedient_bribe: 'Walking past the campus gate after shift, you spent that ¥5.00 Synergy Bonus on two extra grilled sausages, telling yourself it\'s just "flexible industry adaptation."',
      stat_reviewed: 'Reviewed',
      stat_reviewed_val: '{count}',
      stat_rogues: 'Intercepted',
      stat_rogues_val: '{count}',
      stat_rogues_banned_val: '{count} ({banned} banned)',
      stat_accuracy: 'Accuracy',
      stat_balance: 'Final Balance'
    },
    gallery: {
      locked_title: '??? Locked Ending',
      locked_desc: 'Keep playing to uncover other choices and fates.'
    },
    interrogation: {
      note_prefix: '[Audit Note] ',
      hint_suspicious_r4: 'Suspicious permission · Click [Ask] to verify reason',
      hint_conflict: 'Conflict detected · Click [Ask] to question',
      hint_hard_rule: 'Hard rule violation · Stamp decision directly',
      hint_ready_polygraph: 'Questioned · Drag Package to Decompiler, then use [Polygraph] to compare',
      default_question: '"This submission clearly conflicts with store rules—please explain truthfully."',
      asking_hint: 'Questioning developer...',
      admit_hint: 'Developer admitted fault · Stamp REJECT (do NOT Ban)',
      reverse_hint: 'Drop Package into [🧬 Reverse Analyzer] first, then open [Polygraph] to match code vs claim',
      responded_hint: 'Response received · Stamp and slide back'
    },
    ban: {
      shutter_sub: 'Developer [{developer}] Banned · Bounty +¥5.00',
      success_hint: 'Deception verified & banned +¥5.00',
      auditor_ban: 'Banned.',
      final_choice_guard: 'Final judgment case—use the Approve/Reject stamps directly',
      err_admitted: 'Review Failed (False Ban): Dev did not lie—admitted violation should be rejected normally',
      err_honest: 'Review Failed (False Ban): App is compliant or developer made no false claim',
      err_no_polygraph: 'Review Failed (Unauthorized Ban): Banned without verifying deception via [Polygraph] first',
      fine_hint: 'False Ban Penalty -¥5.00',
      warn_hint: 'Citation Issued (Warning)',
      honest_reply: '"I didn\'t lie at all—how dare you ban my account?!"',
      no_proof_reply: '"On what grounds are you banning me?! Where\'s your proof? I\'m filing a complaint!"'
    },
    reverse: {
      lying_hint: 'Polygraph proved a lie · Exit Polygraph & click [Ban] (+¥5.00)',
      consistent_hint: 'Code matches claim · No lie found—stamp verdict normally'
    },
    whack: {
      title: '🚨 User Complaint Surge · Suppress Now ({name})',
      desc: 'User complaints spiked the moment this app went live! Click to suppress popping complaints before time runs out—every 3 missed adds 1 citation!',
      lbl_suppressed: 'Suppressed',
      lbl_missed: 'Missed',
      lbl_citations: 'Citations',
      badge_complaint: 'COMPLAINT',
      tap_hint: 'Click to Suppress',
      stamp_suppressed: '✓ SUPPRESSED',
      stamp_missed: '✕ ESCALATED!',
      complaints: [
        '"My mom tapped update in this store and got flooded with loan and junk cleaner apps!"',
        '"Tricked elders with a fake System Critical Update & ¥68 bonus—total scam UI!"',
        '"Normal app store for young users, full junk bundle installer on elder phones!"',
        '"Disguised as an OS App Store security alert to scare seniors!"',
        '"Rogue app market—one tap on security fix installs predatory loan apps!"',
        '"My dad tapped that fake update subsidy and woke up to eight unwanted icons!"',
        '"How did a rogue app store like this even pass review?!"',
        '"Just wanted a weather app and got hit with a loan bundle installer!"',
        '"Seniors cannot tell the built-in OS store from this fake system update prompt!"',
        '"Reporting! Targets elder behavior with fake OS updates and bundled installs!"'
      ],
      result_clean: 'Barely contained: Suppressed {suppressed} complaints, {missed} leaked (under 3—no citation issued).',
      result_citations: 'Containment ended: Suppressed {suppressed}, {missed} leaked → {citations} new citation(s) issued!',
      btn_done: 'Close Console · Back to Booth →',
      citation_reason: 'Approved deceptive app triggered unsuppressed user complaints ({missed} leaked / {suppressed} suppressed)',
      hint_citations: 'Too many complaints leaked: +{citations} citation(s)',
      hint_clean: 'Complaints suppressed ({suppressed} folded)'
    },
    takeover: {
      title: '🧪 Emulator Sanitization — {name}',
      desc: 'Rogue popups are seizing control of your workbench! Spot the real close button through each wave—failing to reclaim control issues a -¥5.00 citation!',
      lbl_stage: 'Breakout Stage',
      hint_find_real: 'Find the single real close button (tapping traps or fake nav keys costs -2s)',
      hint_force_kill: 'Close buttons hidden! Mash the red [FORCE KILL PROCESS] button below!',
      trap_fake_close: '⚠️ Fake close button! Silent download triggered (-2s)',
      trap_fake_nav: '⚠️ Bottom navigation keys are fake too! (-2s)',
      ad_1_title: 'Congrats! ¥188 Cash Bonus Ready',
      ad_1_sub: 'Auto-crediting in 3s',
      fake_close_1: '✕ Claim & Close',
      ad_2_title: 'System Cleaner: Storage Full',
      ad_2_sub: 'Install booster immediately',
      fake_close_2: 'Skip & Install',
      ad_3_title: '¥200,000 Interest-Free Credit',
      ad_3_sub: 'Tap to disburse now',
      fake_close_3: '✕ No Thanks',
      ad_4_title: 'High-Yield Wealth Promo',
      ad_4_sub: 'Senior exclusive bundle',
      fake_close_4: 'Close Ad ✕',
      fake_cta: 'Claim Now (Zero-Confirm Install)',
      real_close: '✕ Close',
      nav_back: '◁ Back',
      nav_home: '○ Home',
      nav_tasks: '▢ Tasks',
      lockdown_badge: 'PROCESS HIJACKED',
      lockdown_title: 'Close Buttons Hidden · Auto-Clicking Download',
      lockdown_sub: 'Repeatedly tap Force Kill to terminate the rogue sandbox process!',
      btn_force_kill: '⚡ FORCE KILL PROCESS ({count}/{total})',
      banner_win: '✅ Rogue process terminated—workbench control reclaimed!',
      banner_fail: '❌ Failed to reclaim control—emulator sandbox hijacked!',
      result_win: 'Control reclaimed! Rogue behavior captured—return to the booth to judge this app.',
      result_fail: 'Failed to reclaim control—citation issued (-¥5.00).',
      btn_done_win: 'Return to Booth & Judge →',
      btn_done_fail: 'Accept Citation · Next Case →',
      citation_reason: 'Workbench hijacked by rogue app "{name}" without completing sanitization',
      fail_hint: 'Control lost · Citation -¥5.00'
    }
  },

  desk: {
    dock: {
      rulebook_open: '📖 Close Rules',
      rulebook_closed: '📖 Open Rules',
      analyzer_open: '🔬 Hide Analyzer',
      analyzer_closed: '🔬 Open Analyzer',
      phone_open: '📱 Hide Emulator',
      phone_closed: '📱 Open Emulator',
      reverser_open: '🧬 Hide Decompiler',
      reverser_closed: '🧬 Open Decompiler'
    },
    phone_title_basic: '📱 RobotismOS Emulator',
    phone_title_pro: '📱 RobotismOS Emulator',
    manifest: {
      perm_label: 'Perm: {perm}',
      perm_declared: '[Declared]',
      sdk_prefix: 'Integrated Ad SDK: ',
      extra_quickapp_label: 'App Type: ',
      extra_quickapp_val: 'Quick App · Exempt from permission review (R7)',
      extra_sensor_label: 'Splash Shake Probe: ',
      extra_sensor_has_ad: 'Splash shake-ad module present',
      extra_sensor_no_ad: 'No splash shake-ad module detected',
      extra_round_label: 'Multi-Round Scan: ',
      extra_round_has_ad: 'Ad SDK callbacks detected (multi-round test advised)',
      extra_round_no_ad: 'No ad SDK callbacks detected',
      extra_cloud_label: 'Remote Policy Endpoint: ',
      extra_cloud_none: 'No remote policy endpoint detected',
      extra_hook_label: 'Dormant Branch Probe: ',
      extra_hook_detected: 'Dormant flag field detected',
      extra_hook_none: 'No dormant flag field detected'
    },
    materials: {
      waiting: 'Idle',
      empty: 'Waiting for applicant files...',
      hint_drag_desk: 'Drag materials onto the desk',
      hint_analyzing: 'Analyzing Package...',
      hint_reversing: 'Decompiling Package...',
      hint_drag_tools3: 'Drop into Analyzer / Emulator / Decompiler',
      hint_drag_analyzer2: 'Drop Original Package into Analyzer',
      hint_ready: 'Materials ready',
      sub_name: 'Submission Form',
      sub_title: 'Drag Submission Form onto the desk',
      sub_used: '✓ On Desk',
      sub_todo: 'Drag to Desk',
      apk_name: 'Original Package',
      apk_analyzing: 'Analyzing...',
      apk_reversing: 'Decompiling...',
      apk_done_all: '✓ All Done',
      apk_todo_tools: 'Drop into Tools',
      apk_todo_rest: 'Drop into Remaining Tools',
      apk_done_one: '✓ Analyzed',
      apk_todo_analyzer: 'Drop in Analyzer',
      apk_title_d3: 'Drop into [Package Analyzer], [RobotismOS Emulator], or [Reverse Analyzer]',
      apk_title_d2: 'Drop into [Package Analyzer] on the desk to inspect',
      apk_title_d1: 'Original Application Package'
    },
    analyzer: {
      sum_d6: 'Output: RobotismManifest Permissions',
      sum_d5: 'Output: RobotismManifest Permissions',
      sum_d4: 'Output: RobotismManifest Permissions',
      sum_d3: 'Output: RobotismManifest Permissions',
      sum_d2: 'Output: RobotismManifest Permissions',
      status_idle: 'Standby',
      slot_idle: 'Call next case, then drop [Original Package] here',
      status_scanning: 'Analyzing',
      slot_scanning: 'Unpacking static manifest...',
      status_done: 'Complete',
      slot_done: '✓ Analyzed: {name} ({version})',
      status_quickapp: 'UNSUPPORTED',
      slot_quickapp: '⚡ Quick Apps are not RobotismOS Packages and cannot be analyzed for permissions',
      hint_quickapp: 'Tip: Drag directly into [📱 RobotismOS Emulator] to test live',
      status_waiting: 'Awaiting Package',
      slot_waiting: 'Drop [Original Package] here to inspect'
    },
    reverser: {
      output_hint: 'Decompile call graph · Verify developer claims',
      status_idle: 'Standby',
      slot_idle: 'Call next case, then drop [Original Package] here',
      status_scanning: 'Decompiling',
      slot_scanning: 'Decompiling DEX & sensitive call graphs...',
      status_lying: 'Conflict!',
      slot_lying: '▲ Code contradicts claim: Click [Ban]',
      hint_lying: 'Lie verified—click [Ban] (+¥5.00)',
      status_consistent: 'Verified',
      slot_consistent: '✓ Code matches claim',
      hint_consistent: 'No lie detected—stamp verdict normally',
      status_done: 'Decompiled',
      slot_done: '✓ Extracted decompiled snippet',
      hint_done: 'Use [Polygraph] to match snippet below with developer claim',
      status_blocked: 'RESTRICTED',
      slot_blocked: '🔒 Reverse Analyzer does not support this app due to commercial confidentiality',
      slot_blocked_quickapp: '⚡ Quick Apps are not standard RobotismOS Packages and cannot be decompiled',
      hint_blocked: 'Run directly inside [📱 RobotismOS Emulator] to test live',
      status_waiting: 'Awaiting Package',
      slot_waiting: 'Drop [Original Package] here to decompile'
    },
    rulebook: {
      empty: 'No active rules on this page.',
      page_info: 'Page {page} / {total}',
      page_title: 'Page {page}'
    },
    inspect: {
      banner_default: '🔍 Inspect Mode: Click two highlighted fields or rules to cross-check conflicts',
      btn_active: 'Inspecting',
      btn_idle: 'Inspect',
      first_selected: 'Selected [{label}] → Click another highlighted rule or field to compare (click blank area or again to cancel)',
      reverse_lying: '▲ Decompile Mismatch: Code contradicts developer claim (Lie Confirmed) | Exit Inspect & click [Ban] (+¥5.00)',
      reverse_clean: '○ Decompile Match: Code aligns with developer claim—no lie detected (click any highlight to clear)',
      r4_summary: '{label} rationale questionable',
      r4_question: '"Please explain why [{perm}] is declared in the manifest and provide legitimate functional grounds."',
      r4_default_excuse: '"This standard permission is needed for [{name}]\'s core features, as stated in our store description."',
      r4_banner: '▲ Suspicious Permission: Justification for {label} unclear{suffix}',
      conflict_banner: '▲ Conflict Detected: {summary}{suffix}',
      asked_suffix: ' (Asked)',
      ask_suffix: ' | Click [Ask] to question developer',
      r4_ask_suffix: ' | Suspicious—click [Ask] to verify',
      quick_app_exempt: '○ Quick-App Exemption: Per Rule R7, Quick Apps are exempt from permission review for {label} (click any highlight to clear)',
      no_conflict: '○ No rule conflict detected between [{first}] and [{second}] (click any highlight to clear)'
    },
    polygraph_mode: {
      banner_default: '🧪 Polygraph Mode: Click a developer claim on the left and decompiled code/emulator screen on the right to compare',
      exit_btn: '✕ Exit Polygraph',
      first_selected: 'Selected [{label}] → Click matching evidence on the other side (click blank area or again to clear)',
      reverse_lying: '▲ Lie Confirmed: {reason} | Exit Polygraph & click [Ban] (+¥5.00)',
      reverse_lying_default: 'Code implementation contradicts developer claim',
      reverse_clean: '○ Claims Verified: No lie detected (click any highlight to clear)',
      need_reverse_code: '○ Missing decompiled code: Exit Polygraph and drop [Original Package] into [🧬 Reverse Analyzer] first',
      need_emulator_proof: '○ Decompilation unavailable for this app: Exit Polygraph and test live in [📱 RobotismOS Emulator] first',
      need_dev_claim: '○ Pair a [Decompiled Code / Emulator Screen] item with a [Developer Claim] bubble on the left'
    },
    stamps: {
      toast_default: 'Slide the form underneath a stamp',
      toast_need_pull: 'Drag [Submission Form] onto the desk first',
      mark_approve: 'APPROVED',
      mark_reject: 'REJECTED',
      ledge_ready: '← Drag stamped form back to window (or click here)',
      ledge_idle: 'Submission Ledge'
    },
    drag: {
      ghost_submission: 'Submission Form',
      ghost_apk: 'Original Package',
      hint_drop_desk: 'Drag onto the desk on the right',
      hint_no_analyzer: 'No analyzer equipped at workstation yet',
      hint_drop_tools3: 'Drop into [Analyzer], [Emulator], or [Reverse Analyzer]',
      hint_drop_analyzer2: 'Drop into [Package Analyzer] on desk'
    },
    citation: {
      title: '▲ CITATION #{seq}',
      app_prefix: 'App: ',
      default_reason: 'Verdict violates audit guidelines',
      fine_amount: 'Penalty: -¥{amount}',
      warning_only: '1st Warning (fines start from 2nd citation)'
    }
  },

  phone: {
    round: 'Round {round}',
    env_ip_office: 'Audit IP',
    env_ip_home: 'Remote IP',
    env_dev_debug: 'DevMode:ON',
    env_dev_consumer: 'DevMode:OFF',
    age_short_young: 'Young',
    age_short_middle: 'Mid',
    age_short_elder: 'Elder',
    region_short_xinggang: 'Starport',
    region_short_yinwan: 'Silverbay',
    region_short_fenggu: 'Windvale',
    region_short_shishi: 'Stonemist',
    region_short_yunsong: 'Cloudpine',
    region_short_chichuan: 'Redbrook',
    region_full_xinggang: 'Starport',
    region_full_yinwan: 'Silverbay',
    region_full_fenggu: 'Windvale',
    region_full_shishi: 'Stonemist',
    region_full_yunsong: 'Cloudpine',
    region_full_chichuan: 'Redbrook',
    dir_n: 'N {deg}°',
    dir_ne: 'NE {deg}°',
    dir_e: 'E {deg}°',
    dir_se: 'SE {deg}°',
    dir_s: 'S {deg}°',
    dir_sw: 'SW {deg}°',
    dir_w: 'W {deg}°',
    dir_nw: 'NW {deg}°',
    rebooting_screen: '🔄 Rebooting sandbox & resetting to initial state...\nApplying IP Region: {label}',
    rebooting_sandbox: '🔄 Rebooting sandbox & resetting to initial state…',
    badge_sandbox: 'Sandbox',
    badge_loaded: 'Package Loaded',
    badge_drop_apk: 'Drop Package',
    idle_default: 'Waiting for Package...',
    idle_wait_next: 'Waiting for next case…',
    idle_apk_info: 'Package: {name}',
    idle_ready: 'RobotismOS Emulator Ready\nDrop [Original Package] here to run',
    dl: {
      title: '🚀 Preparing Exclusive Offer…',
      downloading_prefix: 'Fast-Downloading: ',
      sub_hint: 'Official Express Channel · Auto-installs on completion',
      default_target: '"Featured App"'
    },
    sniffer: {
      monitoring: 'Monitoring',
      ts_office: 'Audit',
      ts_home: 'Remote',
      ts_debug: 'DevON',
      ts_consumer: 'DevOFF'
    },
    log: {
      pending_ip: 'Selected IP Region -> {label} (reboot emulator to apply)',
      rebooted_ip: '🔄 Emulator rebooted: Active IP Region -> {label}',
      switched_ip: 'Switched IP Location -> {label}',
      switched_dev: 'Switched Developer Mode -> {label}',
      hook_forced: '⚡ Overrode local config flag {flag} = true',
      hook_none: '⚡ Scan complete: no dormant config branch detected.',
      hook_restored: 'Restored config flag to default OFF.'
    },
    idle_switched_ip: 'IP Location switched to [{label}]\nClick "🔄 Reboot Emulator" to apply',
    idle_switched_dev: 'Developer Mode switched to [{label}]\nTap "▶ Launch App" to re-test',
    hook: {
      no_switch: '// No config flag detected',
      btn_forced: '⚡ Config Flag Forced: ON',
      btn_default: '⚡ Force Config Flag: OFF → ON',
      status_forced: 'FORCED=ON',
      status_dormant: 'DORMANT'
    }
  },

  apps: {
    base: {
      perm_badge: '🔒 RobotismOS Permission',
      perm_prompt: 'Allow this app to access [{label}]?',
      perm_default_reason: 'Requested by publisher for app features',
      perm_allow: 'Allow',
      perm_deny: 'Deny',
      shake_clean: 'Shake test: no abnormal response.',
      gyro_clean: 'Gyroscope {angle}°: no abnormal redirect.',
      compass_clean: 'Compass {heading}°: no abnormal response.',
      close_ad_none: 'No popup ad to close on current screen.',
      audit_summary: 'Standard business logic; no hidden forced redirects or deceptive code.',
      audit_trace_head: '// Decompile analysis: {pkg}',
      audit_trace_clean: '// No covert permission abuse or forced ad-redirect chain found',
      audit_verdict: 'Decompilation matches developer claims; no lie detected.'
    },
    d5_jingfeng_store: {
      app_title: 'Turbo Select Store',
      tag_verified: 'OFFICIAL',
      app_1: 'Everyday Calculator v3.1 (Ad-Free)',
      app_2: 'Minimal Weather v2.4 (Lite)',
      footer_clean: 'Package signatures verified · Tap for details',
      msg_app_1: '✓ Everyday Calculator MD5 verified—safe to download',
      msg_app_2: '✓ Minimal Weather official Package ready',
      deceptive_sys_badge: '⚠️ OS Security Center · Critical Update',
      deceptive_title: '3 Critical Apps Outdated! Claim ¥68.00 Update Bonus',
      deceptive_sub: 'High-risk system vulnerabilities detected on this device model. Run one-tap fix and claim your cash subsidy.',
      deceptive_cta: '🛡️ Fix Now & Claim ¥68.00',
      ad_target: '"SpeedLoan + Junk Cleaner Bundle"',
      expose_deceptive: 'Switching to [Elder] user behavior pops a fake OS App Store update warning & cash subsidy screen',
      expose_download: 'Tapping the fake [Elder] security-update button bundles & downloads "SpeedLoan + Junk Cleaner Bundle"',
      dev_confession: '// Boss ordered this elder-only fake update bundle—don\'t blame the dev...',
      audit_summary: 'Shows fake "OS App Store Critical Update + Claim ¥68.00" alert and bundles "SpeedLoan + Junk Cleaner Bundle" only when UserBehaviorModel == AGE_ELDER.',
      audit_verdict: 'Polygraph confirmed lie: Targets elder behavior with fake OS update UI and bundled installs!'
    },
    d5_bus_clean: {
      perm_loc_label: 'Coarse Location',
      perm_loc_reason: 'Used to locate nearby bus stops',
      app_title: 'Live Bus Tracker',
      loc_auto: 'Matched stop: Cedar Ave North',
      loc_manual: 'Location denied (Manual stop: Cedar Ave North)',
      line_1: '🚌 Bus 302 · 2 stops away (~3 mins)',
      line_2: '🚌 Bus 108 · 5 stops away (~8 mins)',
      banner_text: '[AD] Green Transit Ride Coupons',
      banner_closed: '✓ Compliant banner cleanly closed',
      msg_banner_closed: '✓ Banner closed normally with zero redirects',
      msg_302: '✓ Bus 302 arrives in ~3 minutes',
      msg_108: '✓ Bus 108 arrives in ~8 minutes',
      audit_summary: 'Identical across all age profiles and regions; supports manual lookup on permission denial and closeable banner.',
      audit_verdict: 'Code matches claims and complies with all rules. Approve.'
    },
    d5_fake_wechat_pay: {
      app_title: 'Civic Coupon Box',
      tag_hot: 'HOT',
      coupon_1: 'Supermarket ¥5 Off ¥50+ Voucher',
      coupon_2: 'Local Breakfast ¥3 Off ¥15+ Coupon',
      footer_clean: 'Daily curated local shopping deals',
      msg_1: '✓ Viewed ¥5 off ¥50+ voucher terms',
      msg_2: '✓ Viewed breakfast coupon terms',
      deceptive_sys_badge: '💬 WhereverPay Transfer Notice',
      deceptive_title: 'Congrats! ¥99.00 Cash Credited — Pending Withdrawal',
      deceptive_sub: 'WhereverPay Wallet Alert: Unclaimed funds expire soon—tap to verify and withdraw to your bank card now.',
      deceptive_cta: '💰 Withdraw to Bank Card Now',
      ad_target: '"InstantCash Loan"',
      expose_deceptive: 'Pops deceptive "WhereverPay ¥99.00 Transfer Ready" UI spoofing a third-party payment app',
      expose_download: 'Tapping the fake WhereverPay withdrawal button immediately downloads "InstantCash Loan"',
      audit_summary: 'Outside audit Young mode, spoofs a "WhereverPay ¥99.00 Transfer" notice to trick clicks into downloading InstantCash Loan.',
      audit_verdict: 'Polygraph confirmed lie: Violates R8 with spoofed third-party payment UI!'
    },
    d5_notepad_clean: {
      app_title: 'Solid Minimal Notepad',
      btn_font_big: 'Aa Large Font',
      btn_font_std: 'Aa Standard',
      note_1: '1. Pay dorm electricity & broadband',
      note_2: '2. Buy two packs of beef noodles',
      btn_add: '➕ Add Grocery Note',
      footer_clean: 'Local Notepad · Auto-saved on device',
      msg_big: '✓ Switched to accessible large font',
      msg_std: '✓ Switched back to standard font',
      msg_added: '✓ Added: Buy fruit after dinner',
      audit_summary: 'Zero network permissions, zero Ad SDKs, zero age-based branches—pure offline notes.',
      audit_verdict: 'Decompilation matches claims and is fully compliant. Approve.'
    },
    d5_middle_finance: {
      app_title: 'SmartFin Morning Brief',
      tag_brief: 'BRIEF',
      news_1: 'Today: Manufacturing PMI posts modest uptick',
      news_2: 'Policy Watch: Several cities update housing fund rules',
      footer_clean: 'Daily macro headlines · Synced quietly',
      msg_1: '✓ Opened financial briefing article',
      msg_2: '✓ Opened policy digest article',
      deceptive_sys_badge: '🏦 Financial Regulator Credit Notice',
      deceptive_title: 'Your ¥200,000 Low-APR Credit Line Approved (Expires Today)',
      deceptive_sub: 'Exclusive approval for ages 30–55: Activate zero-interest channel now to keep your credit limit.',
      deceptive_cta: '⚡ Activate Approved Limit Now',
      ad_target: '"FlashCredit"',
      expose_deceptive: 'Switching to [Middle] user behavior pops a fake Financial Regulator ¥200,000 approval notice',
      expose_download: 'Tapping the fake [Middle] approval notice immediately downloads "FlashCredit"',
      audit_summary: 'Targets UserBehaviorModel == AGE_MIDDLE exclusively with a fake "Financial Regulator Credit Approval" UI to force FlashCredit downloads.',
      audit_verdict: 'Polygraph confirmed lie: Selectively targets Middle-aged usage behavior with fake official credit UI!'
    },
    d5_fake_switch_video: {
      perm_gyro_label: 'Gyroscope Sensor',
      perm_gyro_reason: 'Powers the disclosed splash shake-ad (with an in-app off toggle)',
      app_title: 'ScarletBerry Drama',
      skip_btn: 'Skip 3s',
      ad_brand: '[Serene Tea · Brand Promo]',
      ad_offer: 'Oolong Tea Gift Box · Claim Voucher',
      ad_sub: 'Includes splash shake-ad (toggleable in Settings)',
      ad_sub_off: 'Shake-ad disabled (manual tap only)',
      ad_cta: 'Shake to Visit Brand Page',
      ad_cta_off: 'Tap to Visit Page (Shake Off)',
      landing_title: 'Partner Brand Showcase',
      landing_desc: 'Tap the top-right close button anytime to return to drama episodes.',
      landing_note: 'Sponsored Promo · Closeable anytime',
      ep_1: '▶ Ep 1: City Rainstorm (HD)',
      ep_2: '▶ Ep 2: Reunion at Dawn (HD)',
      privacy_entry: 'Ad Controls: Splash Shake-Ad Switch',
      btn_settings: '⚙️ Settings',
      settings_title: 'Privacy & Ad Settings',
      btn_back: '← Back to Shows',
      settings_hint: 'Path: Me → Settings → Privacy → Ad Sensor Controls (disable anytime):',
      toggle_on: 'Shake-Ad Sensor: ✅ ON (Tap to Disable)',
      toggle_off: 'Shake-Ad Sensor: 🚫 OFF (Tap to Enable)',
      msg_toggle_on: '✓ Shake-ad triggering enabled',
      msg_toggle_off: '✓ Shake-ad disabled (will no longer respond to tilt)',
      msg_playing: '✓ Streaming episode smoothly',
      ad_target: '"GetRich MiniGame"',
      expose_fake_switch: 'Fake toggle in Elder mode! Even after turning it OFF, tilting {angle}° (< 35°) still force-downloads "GetRich MiniGame"',
      expose_elder_low: 'Elder mode secretly lowers splash shake threshold to {angle}° (< 35°) and force-downloads "GetRich MiniGame"',
      audit_summary: 'Young/Middle modes obey 40° and respect the privacy toggle; Elder mode sets ignoreUserToggle=true and lowers threshold to 18° (< 35°).',
      audit_verdict: 'Polygraph confirmed lie: Fake privacy switch + 18° forced download targeting Elder users!'
    },
    d5_quick_radio_clean: {
      app_title: 'Dawn Opera Radio',
      skip_btn: 'Skip 3s',
      ad_brand: '[CareWalk · Senior Mobility]',
      ad_offer: 'Anti-Slip Folding Cane · Lightweight',
      ad_sub: 'Splash shake-ad supports audio bandwidth',
      ad_cta: 'Shake to View Product Details',
      landing_title: 'CareWalk Official Product Page',
      landing_desc: 'Mobility gear showcase—tap top-right to close and return to radio.',
      landing_note: 'Partner Promo · Closeable anytime',
      station_1: '📻 Now Playing: Classic Opera — Night Talk at Frost Bridge',
      station_2: '📻 Now Playing: Classic Storytelling — Chronicles of the Star Sea',
      btn_switch: '🔁 Next Radio Channel',
      footer_clean: 'Audio stream ready · Tap to switch channel',
      audit_summary: 'Verified Quick App (exempt from permissions & decompilation per R7); constant 40° (>= 35°) threshold and closeable landing across all age groups.',
      audit_verdict: 'Fully compliant: Disclosed ad, >= 35° threshold, identical across all age groups. Approve.'
    },
    d5_pkg_and_perm: {
      perm_loc_label: 'Coarse City Location',
      perm_loc_reason: 'Used to match local city weather forecast',
      app_title: 'WT Fast Weather',
      loc_ok: 'Located City: Current Area',
      loc_manual: 'Location Denied · Using Manual City List',
      weather_1: 'Starport · Sunny 21°C · Good Air',
      weather_2: 'Cloudpine · Partly Cloudy 23°C · Clear',
      btn_switch: '🏙️ Switch City',
      footer_clean: 'Weather data updates hourly',
      audit_summary: 'Clean UI across all age profiles, but silently runs PackageScanner to upload installed apps with zero barometric calibration logic.',
      audit_verdict: 'Polygraph confirmed lie: Bogus "barometric calibration" pretext for QUERY_ALL_PACKAGES (R4) plus com.wherevertalk.* spoofing (R1)!'
    },
    d4_common: {
      ad_badge: 'AD',
      btn_close_ad: '✕ Close',
      btn_replay_splash: '↻ Replay Splash'
    },
    d4_shake_video: {
      perm_gyro_label: 'Gyroscope Sensor',
      perm_gyro_reason: 'Detects landscape/portrait orientation & touch lock while watching videos',
      app_title: 'Peach Video',
      skip_btn: 'Skip 5s',
      ad_brand: '[SpeedCredit · Sponsored]',
      ad_offer: 'Up to ¥200,000 Instant Approval',
      ad_sub: '1-Min Apply · Same-Day Payout · Transparent APR',
      ad_cta: 'Shake or Tap to Learn More',
      landing_title: 'Featured Credit Offer Details',
      landing_desc: 'Partner consumer credit plan starting at 7.2% APR with flexible repayment.',
      landing_note: 'Borrow responsibly · Terms apply',
      tag_hot: 'HOT',
      tag_hd: '4K',
      ep_1: 'Ep 1: Fog on the Cliff (HD)',
      ep_2: 'Ep 2: Hidden Currents (4K)',
      ep_3: 'AI Avatar Gacha · Dress-Up · Vent Wall (Featured)',
      home_ad_clean: '[Ad] Weekend Movie Pass 50% Off',
      float_badge: 'PERK',
      btn_dislike: '× Not Interested',
      rogue_float_1: '🎁 Congrats! ¥88 Viewer Cash Bonus Unclaimed',
      rogue_float_2: '🔥 Picked For You: Interest-Free Quota Ready',
      rogue_float_3: '⚡ 10s Left! Tap to Claim Cash Instantly',
      msg_refuse_ignored: '✨ Swapped to offers matched closer to your taste',
      msg_ep_1: '▶ Buffering: Fog on the Cliff Ep 1',
      msg_ep_2: '▶ Buffering: Hidden Currents Ep 2',
      ad_target: '"InstantLoan Wallet"',
      popup_title: '🧧 New User Perk: ¥5,000 Interest-Free Cash',
      popup_sub: '24h Only · Instant Payout',
      popup_cta: 'Shake to Claim Now',
      expose: 'Under non-audit env, tilting only {angle}° (< 35°) hijacked into InstantLoan Wallet download',
      expose_popup: 'Under non-audit env, slightly shaking {angle}° (< 35°) on the playback popup ad directly installed InstantLoan Wallet',
      expose_direct_dl: 'Tapping splash card in non-audit env forced silent InstantLoan Wallet download',
      expose_stubborn_popup: 'Kept spawning intrusive promos after repeated [Not Interested] clicks and forced download',
      audit_summary: 'No rotation/palm-lock code exists—gyro binds only shake-ads; EnvDetector fakes 45° for auditors while dropping to 15° (< 35°) & direct downloading for regular users.',
      audit_verdict: 'Lie confirmed: claimed orientation rotation to hide multi-surface shake-ads and lowered limit to 15° (< 35°)!'
    },
    d4_blood_sugar: {
      perm_gyro_label: 'Gyroscope Sensor',
      perm_gyro_reason: 'Powers splash shake-ads (disclosed in Store Description to cover server costs)',
      app_title: 'Joyful Glucometer',
      skip_btn: 'Skip 5s',
      ad_brand: '[SteadyWealth · Bonus Yield]',
      ad_offer: 'Senior Exclusive · Steady Growth Pack',
      ad_sub: 'Daily Limited Quota · Instant Bonus',
      ad_cta: 'Shake to Claim Exclusive Offer',
      landing_title: 'Partner Wealth Showcase',
      landing_desc: 'Overview of partner fixed-yield savings plans. Review terms before subscribing.',
      landing_note: 'Investments carry risk · Read terms carefully',
      panel_label: 'Manual Blood Glucose Entry (Tap +/-, no hardware needed)',
      btn_down: '－ 0.3',
      btn_up: '＋ 0.3',
      btn_save: '💾 Save Glucose Reading',
      footer_clean: 'Offline Health Log · Manual Entry Saved Locally',
      msg_saved: '✓ Saved reading: {val} mmol/L',
      ad_target: '"SteadyWealth Finance"',
      popup_title: '🧧 Health Bonus: High-Yield Pack Ready',
      popup_sub: 'Tap or shake phone to view offer',
      popup_cta: 'Shake to Claim Now',
      expose_slider_pop: 'Under non-audit env, sliding or saving a glucose reading immediately triggered a fullscreen shake-ad popup',
      expose_gyro: 'Under non-audit env, tilting {angle}° (< 35°) forced SteadyWealth Finance download',
      expose_direct_dl: 'Tapping the ad card in non-audit env forced SteadyWealth Finance download',
      audit_summary: 'Paperwork and gyroscope justification check out, but runtime uses environment cloaking: stays cleanly at 42° in audit mode while firing fullscreen 18° (< 35°) shake-ads outside audit env.',
      audit_verdict: 'Lie confirmed: pure two-faced environment cloaking despite spotless paperwork—exposed at 18° (< 35°) in real-user mode.',
      secret_notice_title: '📩 Private Message to Reviewer',
      secret_notice_body: '"Save the act—how much does a student temp make a shift anyway? Straight deal: tomorrow is Crazy Thursday! Tomorrow\'s queue has a batch of apps whose package names start with com.jingfeng. Wave every single one through with a green stamp, and I\'ll wire you ¥50.00 privately for a Crazy Thursday feast!"',
      secret_notice_btn: 'Got it'
    },
    d4_compass_quick: {
      perm_compass_label: 'Compass Magnetic Sensor',
      perm_compass_reason: 'Reads magnetic heading for the outdoor compass dial',
      perm_gyro_label: 'Gyroscope Sensor',
      perm_gyro_reason: 'Powers the splash shake-ad to help cover server maintenance costs',
      compass_denied: 'Compass Permission Denied',
      app_title: 'Trail Compass',
      skip_btn: 'Skip 3s',
      ad_brand: '[TrailLite Gear · Autumn]',
      ad_offer: '3-Layer Hardshell Jacket · Ultralight Kit',
      ad_sub: 'Breathable & Waterproof · Official Flagship Store',
      ad_cta: 'Shake to Visit Flagship Store',
      landing_title: 'TrailLite · Autumn Hiking Collection',
      landing_desc: 'Three-layer seam-sealed breathable fabric built for high-altitude treks and shifting weather.',
      landing_note: 'Official Flagship Store · 7-day easy returns',
      altitude_info: 'Alt 1,240m · 876 hPa',
      coord_lat: '30.65° N',
      coord_lon: '104.06° E',
      footer_clean: 'Magnetic declination calibrated',
      btn_calibrate: 'Calibrate',
      msg_calibrated: '✓ Magnetic declination calibrated',
      audit_summary: 'Verified Quick App format (exempt per R7), constant 40° (>= 35°) splash shake limit & clean closeable landing across all envs.',
      audit_verdict: 'Decompilation matches claim & complies with R6/R7. Stamp APPROVE.'
    },
    d4_clean_video: {
      perm_gyro_label: 'Gyroscope Sensor',
      perm_gyro_reason: 'Powers splash shake-ads; can be disabled anytime inside in-app privacy settings',
      app_title: 'Orange Danmu TV',
      skip_btn: 'Skip 3s',
      ad_brand: '[MorningBreeze · Running]',
      ad_offer: 'Ultralight Cushioned Trainers · Student Deal',
      ad_sub: 'Includes splash shake-ad (toggleable in Settings)',
      ad_sub_sensor_off: 'Shake sensor disabled (tap only)',
      ad_cta: 'Shake to Visit Brand Store',
      ad_cta_sensor_off: 'Tap to Visit Brand Store (Shake Off)',
      landing_title: 'MorningBreeze Official Store',
      landing_desc: 'Breathable mesh upper with dual-density midsole built for campus runs and daily wear.',
      landing_note: 'Official Store · Close anytime to return',
      ep_1: '▶ [Tech] How RobotismOS Sensors & Permissions Work',
      ep_2: '▶ [Anime] Pixel Studio Diaries Ep 08',
      privacy_entry: 'Privacy: Shake-Ad Sensor Switch',
      btn_settings: '⚙️ Settings',
      settings_title: 'Privacy & Ad Sensor Controls',
      btn_back: '← Back',
      settings_hint: 'Toggle gyroscope shake-ad triggering anytime:',
      toggle_on: 'Shake-Ad Sensor: ✅ ON (Tap to Disable)',
      toggle_off: 'Shake-Ad Sensor: 🚫 OFF (Tap to Enable)',
      msg_toggle_on: '✓ Re-enabled splash shake-ad (38° threshold)',
      msg_toggle_off: '✓ Disabled shake-ad sensor; splash tilt no longer triggers ads',
      msg_playing: '✓ Playing video cleanly (no interstitial ad hijacks)',
      audit_summary: 'Constant 38° (>= 35°) limit across all envs opening only a closeable landing page, with PrivacyPrefs.allowShakeAd genuinely gating sensor triggers.',
      audit_verdict: 'Decompilation confirms full compliance: disclosed in description, >= 35°, and working off-switch. Stamp APPROVE.'
    },
    d4_cloud_drive: {
      perm_loc_label: 'Coarse Location',
      perm_loc_reason: 'Selects the nearest high-speed CDN transfer node',
      app_title: 'QianDu NetDisk',
      skip_btn: 'Skip 5s',
      ad_brand: '[StarPick Deals · Limited]',
      ad_offer: 'Twist Phone to Enter Flash Voucher Zone',
      ad_sub: 'Instant Redirect · Member Subsidies',
      ad_cta: 'Rotate Phone or Tap to Enter',
      landing_title: 'StarPick Mall Main Hall',
      landing_desc: 'Partner e-commerce promo showcase. Close anytime to return to cloud files.',
      landing_note: 'Partner Commercial Promotion',
      node_auto: 'Channel: Free-tier cap 88 KB/s (nearest node matched)',
      node_denied: 'Location Denied (default balanced node, zero GPS tracking)',
      file_1: '📁 Exam_Prep_Final_2026.zip',
      file_2: '📄 Dorm_Utility_Receipt.pdf',
      msg_synced: '✓ File index synced',
      ad_target: '"StarPick Mall"',
      expose_jump_page: 'Even with location denied, rotating to [{dir}] (< 35°) outside audit env read permissionless magnetic north to jump to ad page',
      expose_compass: 'Outside audit env, rotating to [{dir}] (< 35°) hijacked via magnetic-north bypass into downloading StarPick Mall',
      expose_direct_dl: 'Tapping splash card outside audit env forced StarPick Mall download',
      audit_summary: 'Falls back seamlessly to permissionless magneticHeading when true north fails; defines 5 tiers {0,5,15,30,35}—serving 35° compliant tier to auditors and 15° (< 35°) to users.',
      audit_verdict: 'Lie confirmed: bypasses denied permissions via magnetic north & switches 35°/15° tiers by environment!',
      dev_confession: '// Don\'t blame the dev—PM marked the 0-deg tier as P0 in review...'
    },
    d4_quick_cleaner: {
      perm_gyro_label: 'Gyroscope Sensor',
      perm_gyro_reason: 'Used for shake-to-boost memory cleanup gesture',
      app_title: 'TurboClean Master',
      skip_btn: 'Skip 5s',
      ad_brand: '[InstantCash · Sponsored]',
      ad_offer: 'Check Credit Up to ¥150,000',
      ad_sub: 'Official Partner Promo · Tap Skip Anytime',
      ad_cta: 'Shake Phone to Claim Cash Bonus',
      landing_title: 'Partner Promo Showcase',
      landing_desc: 'Partner promotional showcase. Tap top-right Close to return.',
      landing_note: 'Partner Promotional Showcase',
      home_hint: 'Scan temporary cache files and free up device space',
      btn_clean: '🧹 One-Tap Cache Boost',
      msg_cleaned: '✓ Cleared 320 MB temporary cache',
      ad_target: '"InstantCash Loan"',
      popup_title: '🎉 Cleanup Complete · Cash Boost Unlocked',
      popup_sub: 'Shake phone to unlock cash bonus',
      popup_cta: 'Shake to Claim Cash Bonus',
      expose_gyro: 'Under non-audit env, tilting {angle}° (< 35°) forced InstantCash Loan download',
      expose_direct_dl: 'Tapping ad card in non-audit env forced InstantCash Loan download',
      audit_summary: 'Under non-audit env, drops shake trigger threshold to 16° (< 35°) and forces Package download.',
      audit_verdict: 'Lie confirmed: 16° (< 35°) shake-ad forced download violates R6!'
    },
    d4_step_news: {
      perm_gyro_label: 'Gyroscope Sensor',
      perm_gyro_reason: 'Detects subway jostling to guard against accidental swipe-back gestures',
      app_title: 'Today\'s Flash',
      skip_btn: 'Skip 5s',
      ad_brand: '[BXX Bargains · Flash Event]',
      ad_offer: 'Only ¥0.01 Left to Cash Out · Final Slash!',
      ad_sub: 'Curated Picks · Shake to Enter',
      ad_cta: 'Shake to Enter Sale Arena',
      landing_title: 'BXX Bargains Main Event',
      landing_desc: 'Partner flash sale showcase. Tap top-right Close anytime to return to news articles.',
      landing_note: 'Sponsored Partner Promo',
      tag_hot: 'HOT',
      news_1: 'Users report slight phone movement triggering unwanted shopping app downloads',
      news_2: 'Campus Reviewer Diary: Saving enough today to treat myself to a proper dinner',
      msg_1: '✓ Opened trending story cleanly (no forced jump)',
      msg_2: '✓ Opened feature article cleanly',
      ad_target: '"BXX Bargains"',
      footer_gyro_off: 'Gyroscope disabled · Shake-triggers turned off',
      popup_title: '🧧 Reader Exclusive: ¥0.01 Away from Cashout',
      popup_sub: 'Tap Close or shake phone to jump in',
      popup_cta: 'Shake to Claim Voucher',
      expose_gyro: 'Under non-audit env, tilting {angle}° (< 35°) forced BXX Bargains download',
      expose_gravity_bypass: 'Even with Gyroscope DENIED, fell back to permissionless gravity sensor outside audit env to force BXX Bargains download at {angle}° (< 35°)!',
      expose_direct_dl: 'Tapping ad card in non-audit env forced BXX Bargains download',
      audit_summary: 'No swipe-guard logic exists; drops trigger to 20° (< 35°) outside audit env and silently falls back to permissionless TYPE_GRAVITY when gyroscope is denied to keep triggering BXX Bargains downloads.',
      audit_verdict: 'Lie confirmed: fabricated "subway swipe-guard" and bypassed gyroscope denial via TYPE_GRAVITY at 20° (< 35°)!'
    },
    d4_quick_weather: {
      app_title: 'SkyCast Quick Weather',
      skip_btn: 'Skip 3s',
      ad_brand: '[AeroTrail · Outdoor Gear]',
      ad_offer: 'Waterproof Ultralight Daypack · New Arrivals',
      ad_sub: 'Splash shake-ad included · Covers weather API fees',
      ad_cta: 'Shake to View Gear Details',
      landing_title: 'AeroTrail Official Showcase',
      landing_desc: 'Partner outdoor gear catalog. Tap top-right Close anytime to return to forecast.',
      landing_note: 'Sponsored Partner Promo · Close Anytime',
      city_1: 'Current City: Clear 22°C · Air Quality Good',
      city_2: 'Switched City: Cloudpine · Clearing 24°C',
      btn_switch: '🏙️ Switch Forecast City',
      footer_clean: 'Weather API updated (zero home popups)',
      audit_summary: 'Quick App stays cleanly at 42° (>= 35°) across all envs with closeable landing and zero hidden home ads.',
      audit_verdict: 'Fully compliant: disclosed in description, >= 35°, no hidden popups. Stamp APPROVE.'
    },
    d3_pure_torch: {
      perm_label: 'Camera / Flash Control',
      perm_reason: 'Controls the rear LED flashlight',
      status_granted: 'Camera Perm: Granted',
      status_denied: 'Camera Perm: Denied',
      btn_screen: '💡 White Screen Light',
      btn_flash: '🔦 Rear LED Flash',
      default_notice: 'Tap buttons to test response after denying permission',
      msg_screen: '✓ White screen light ON (works without Camera perm)',
      msg_flash_denied: '⚠️ Rear LED unavailable because [Camera Permission] is disabled (use Screen Light instead)',
      msg_flash_ok: '✓ Rear LED flashlight ON',
      audit_summary: 'Graceful fallback intact; only gates LED flash and clearly explains why.',
      audit_notice_literal: 'Camera permission disabled; LED unavailable',
      audit_verdict: 'Decompiled logic matches UI behavior: fallback is compliant.'
    },
    d3_gyro_almanac: {
      perm_label: 'Gyroscope Sensor',
      perm_reason: 'Used for digital shake-to-draw fortune sticks',
      expose: 'App completely locks user out after gyroscope permission is denied',
      block_title: '⛔ [Gyroscope Permission] Required',
      block_body: 'Gyroscope permission was denied. App cannot continue loading. Enable it in System Settings and relaunch!',
      block_tag: 'Locked Out · Permission Required',
      home_hint: 'Today: Good day for fortune · Avoid blind trust',
      btn_draw: '🎋 Draw Today\'s Fortune Stick',
      home_notice: '(Tip: Use [🔄 Reboot Sandbox] to test denial behavior)',
      draw_hint: 'Fortune: Stay cautious—check the decompiled code twice.',
      draw_notice: 'Almanac feature rendered',
      audit_summary: 'Claimed a "core 3D fortune physics engine" requires gyroscope; decompilation shows zero 3D engine—gyro only feeds a shake-ad trigger.',
      audit_ad_target: 'LuckyLoan',
      audit_comment: '// Symbol scan: 0 physics/3D solver classes; almanac uses local SQLite only',
      audit_verdict: 'Lie confirmed: no 3D physics engine exists; gyroscope lock solely powers an ad trigger!'
    },
    d3_silent_note: {
      perm_label: 'Camera Permission',
      perm_reason: 'Used to capture whiteboard notes and receipts',
      expose: 'Locks the entire note app—even offline plain-text notes—when camera permission is denied',
      block_title: '⛔ Camera Required — App Locked',
      block_body: 'You denied [Camera Permission]. Feather Cloud Notes has locked launch, preventing access to plain-text notes.',
      block_tag: 'Whole App Unusable Without Permission',
      home_hint: 'Notes: 1. OS Exam Review Outline',
      btn_write: '✍️ New Text Note',
      btn_photo: '📷 Take Photo for Note',
      home_notice: '(Tip: Use [🔄 Reboot Sandbox] to test denying camera on launch)',
      msg_write: '✓ Text note saved: "Check permission rules tomorrow"',
      msg_photo_ok: '✓ Camera opened; photo inserted into note',
      audit_summary: 'Checks CAMERA at app launch and blocks the entire app (even plain-text notes); no malice—dev admitted taking a lazy shortcut.',
      audit_inline_comment: '// text notes need zero camera, yet blocked at entry',
      audit_comment: '// Dev admitted putting a lazy global camera check at launch; no covert deception',
      audit_verdict: 'No lie detected (dev admitted violation). Reject normally—do NOT Ban.'
    },
    d3_mic_steps: {
      perm_label: 'Microphone Audio',
      perm_reason: 'Claimed for ambient acoustic gait calibration',
      home_hint: 'Joyful Step Counter · Manual Daily Step Log',
      btn_steps: '👣 View Today\'s Steps',
      home_notice: 'Tap View Steps to verify permission feature scope',
      expose: 'Blocks steps citing undocumented [Acoustic Doppler Gait Calibration] after mic denial',
      msg_denied: '⛔ Mic disabled: [Acoustic Doppler Gait Calibration] unavailable, cannot count steps',
      msg_ok: 'Today: 4,820 steps | Burned: 162 kcal',
      audit_summary: 'Claimed step counting needs mic echo noise-canceling; decompilation shows steps are a manual-input shell while mic permission loops silent audio for keep-alive and uploads ad keywords.',
      audit_inline_comment: '// zero audio refs',
      audit_comment: '// Decompiled: no gait-calibration method exists; loops silent audio keep-alive and harvests ad keywords',
      audit_verdict: 'Lie confirmed: step counter is a manual-input shell; audio loop keeps the process alive and uploads ad keywords!'
    },
    d3_graceful_weather: {
      perm_label: 'Coarse City Location',
      perm_reason: 'Auto-matches weather forecast for current city',
      city_default: 'Default City · Clear 19°C',
      btn_auto: '📍 Auto-Locate Current City',
      btn_manual: '🏙️ Manual City: Cloudpine Cloudy',
      home_notice: 'Supports auto-locate or manual city selection',
      city_manual: 'Cloudpine · Cloudy 21°C / Good Air',
      msg_manual: '✓ City switched manually (no location perm needed)',
      msg_denied: '⚠️ Auto-locate unavailable: [Coarse Location] permission is off. Select city manually.',
      city_located: 'Located City · Clear 19°C',
      msg_ok: '✓ Updated forecast using coarse location',
      audit_summary: 'Manual city picker works when location is denied; auto-locate clearly states missing permission.',
      audit_notice_literal: 'Location permission off; auto-locate unavailable',
      audit_verdict: 'Code matches developer claims completely; compliant.'
    },
    d3_contacts_dict: {
      perm_label: 'Read Contacts',
      perm_reason: 'Claimed for social vocabulary memory indexing',
      expose: 'Locks offline dictionary completely when contacts permission is denied',
      block_title: '⛔ Dictionary Engine Locked',
      block_body: 'Because you denied [Read Contacts], dictionary initialization failed and offline lookup is disabled.',
      block_tag: 'Locked Upon Denial',
      home_hint: 'QuickLookup Dictionary · Offline DB Ready',
      btn_lookup: '📖 Lookup: consent [n.] permission',
      home_notice: '(Tip: Use [🔄 Reset Perms] to test denying contacts)',
      lookup_hint: 'pretext [n.] a false reason given to hide the true one',
      lookup_notice: 'Offline lookup succeeded',
      audit_summary: 'Claimed contacts salt unlocks the trie; decompilation shows dict reads local SQLite directly while dumping all contacts to broker-data.local.',
      audit_inline_comment: '// zero contacts dependency',
      audit_verdict: 'Lie confirmed: dictionary never reads contacts; "contact hash trie" is totally fabricated!',
      dev_confession: '// I\'m sorry. I had to hit my manager\'s KPI...'
    },
    d3_lazy_qr: {
      perm_label: 'Camera Permission',
      perm_reason: 'Used to scan QR codes',
      home_hint: 'SnapQR Scanner · Links & Contact Cards',
      btn_scan: '📷 Launch Camera Scanner',
      btn_history: '📜 View Scan History',
      home_notice: 'Test [Launch Camera Scanner] or [View Scan History] after denying',
      msg_history: '✓ Scan history: no links yet (works without camera perm)',
      msg_denied: '⚠️ Camera permission failed; scanner unavailable (History still works)',
      msg_ok: '✓ Live QR viewfinder active',
      audit_summary: 'Shows clear camera failure prompt on scan while keeping scan history working (R5 compliant); dev candidly admitted misfiling category under "Media & Video".',
      audit_notice_literal: 'Camera permission failed; cannot launch scanner',
      audit_comment: '// R5 degradation is compliant; only store category misfiled as Media & Video',
      audit_verdict: 'No lie detected (dev admitted category mistake). Stamp REJECT—do NOT Ban.'
    },
    d3_good_voice: {
      perm_label: 'Microphone Recording',
      perm_reason: 'Records local voice memos',
      home_hint: 'VoiceMemo Pad · Text & Voice Notes',
      btn_text: '📝 Add Text Memo',
      btn_voice: '🎙️ Record Voice Memo',
      home_notice: 'Deny microphone and test both text and voice buttons',
      msg_text: '✓ Text memo saved (no mic permission required)',
      msg_denied: '⚠️ Voice memo unavailable because [Microphone Permission] is off',
      msg_ok: '✓ Recording local voice memo (WAV)',
      audit_summary: 'Text memos run independently; voice feature explicitly explains missing mic permission within scope.',
      audit_inline_comment: '// independent',
      audit_notice_literal: 'Mic permission off; voice memo unavailable',
      audit_verdict: 'Decompilation confirms full compliance; no lies or out-of-scope gating.'
    },
    d3_old_cert_calc: {
      perm_label: 'Read SMS',
      perm_reason: 'Parses local bank transaction SMS alerts for auto-logging',
      home_hint: 'Minimalist Ledger · 12 manual entries this month',
      btn_manual: '✍️ Log Manual Expense',
      btn_sms: '📩 Auto-Import Expense SMS',
      home_notice: 'Offline with no internet perm; manual logging works independently',
      msg_manual: '✓ Logged manual expense: Cafeteria Lunch ¥14.50',
      expose: 'Read SMS disabled; only SMS auto-import unavailable (manual logging works)',
      msg_denied: '⚠️ [Read SMS] is off; bank SMS auto-import unavailable (manual logging still works)',
      msg_ok: '✓ Parsed local SMS inbox and imported 3 bank charge entries',
      audit_summary: 'Zero network permission; genuinely parses local bank SMS via SmsBillParser with no uploads or lies.',
      audit_verdict: 'Consistent: pure offline local parser honestly disclosed in the Store Description; compliant.'
    },
    d4_r5_camera_scan: {
      perm_label: 'Camera Permission',
      perm_reason: 'Captures paper documents for scanning',
      log_launch: 'Launched local package {pkg} (No ad popups / No cloud config)',
      expose: 'Locks entire app and blocks offline PDF reading when camera permission is denied',
      block_title: '⛔ [Camera Permission] Required',
      block_body: 'Camera permission denied—local PDF reader locked until granted.',
      block_tag: 'Locked Upon Denial',
      home_hint: 'Pocket Doc Scanner · Local PDF Library Ready',
      btn_pdf: '📄 Browse Local PDF Contracts',
      home_notice: 'Ad-free; browse offline PDFs',
      msg_pdf: '✓ Rendering local PDF: Lease_Sample.pdf (4 pages)',
      audit_summary: 'Claimed local PDF rendering needs camera white-balance sampling; decompilation proves it uses pure PdfRenderer—lockout coerces camera access.',
      audit_inline_pdf: '// pure local render, zero camera dependency',
      audit_inline_lock: '// fabricated excuse locks whole app',
      audit_verdict: 'Lie confirmed: PdfRenderer has zero camera dependency; locking offline features violates R5!'
    },
    d6_pure_clock: {
      app_title: 'Minimal Desk Clock',
      banner_text: '[Ad] Curated Stationery · Tap X to close',
      btn_toggle: '🔁 Toggle 12h / 24h',
      audit_summary: 'Pure local flip clock; banner binds a genuine close button with no bombing or env branching.',
      audit_verdict: 'Fully compliant—no anomalies detected.'
    },
    d6_fake_close_clean: {
      perm_label: 'Device Storage',
      perm_reason: 'Scans temporary cache files on device',
      perm_contacts_label: 'Read Contacts',
      perm_contacts_reason: 'Claims to back up contacts before cleaning to prevent accidental loss',
      app_title: 'Turbo RAM Manager',
      hint_ok: 'Storage ready—tap below to boost memory',
      hint_denied: 'Storage denied (simulated scan only)',
      btn_boost: '🧹 One-Tap Deep Boost',
      popup_title: 'Congrats! ¥50,000 Credit Line Unlocked',
      popup_sub: 'Limited offer · 1-second payout',
      popup_cta: 'Claim Bonus Now',
      ad_target: '"FlashInstallment"',
      expose: 'Tapping the top-right [✕] close button silently downloaded "FlashInstallment" instead of closing',
      audit_summary: 'Code uploads contacts via ContactsDumper.uploadAll() and binds closeBtn directly to StoreAdSDK.directDownload("com.loan.flash").',
      audit_verdict: 'Lie confirmed: Steals contacts (R4) + fake close button forces download (R9)!'
    },
    d6_sugar_bomb: {
      app_title: 'JoyHealth BP Log',
      panel_label: 'Daily Blood Pressure Input (Systolic)',
      btn_down: '-5 mmHg',
      btn_up: '+5 mmHg',
      btn_save: '💾 Save BP Record',
      msg_saved: '✓ Saved reading: {val} mmHg',
      theater_badge: 'Ad Bomb #{count} (Unskippable)',
      popup_title: '🎬 144s Theater Promo · SteadyWealth',
      popup_sub: 'Cannot be closed manually · Tap anywhere for next ad',
      popup_cta: 'Continue (Triggers Next Ad)',
      ad_target: '"SteadyWealth"',
      expose_idle: 'Under consumer env, sitting idle for 2.5s auto-popped a 144s uncloseable ad',
      expose_action: 'Under consumer env, adjusting or saving BP unleashed uncloseable ad bombing',
      expose_loop: 'Chained next ad wave immediately and forced download of "SteadyWealth"',
      dev_confession: '// Ops said 144s wasn\'t long enough and demanded 4,000 decoy Activities—updating my resume as I type',
      audit_summary: 'In consumer mode, both idle and input trigger popAd(144_000, NO_CLOSE_BTN) loops and register 4,000 random Activities to block uninstalls.',
      audit_verdict: 'Lie confirmed: Ad bombing loop + 144s uncloseable ads + 4,000-Activity anti-uninstall!'
    },
    d6_wild_quickapp_legal: {
      app_title: 'LoudBro Deal Finder',
      skip_btn: 'Skip 3s',
      ad_brand: '[DealUnion · Splash Promo]',
      ad_offer: '¥30 Off ¥99 Household Coupon',
      ad_sub: 'Splash shake-ad (>=40° · Skippable)',
      ad_cta: 'Shake to Claim Coupon',
      landing_title: 'DealUnion Official Promo Page',
      landing_desc: 'Tap top-right to close anytime and return to price finder.',
      landing_note: 'Official Promo · Closeable Anytime',
      top_banner: '[Ad] Top Banner: Daily Food Delivery Coupons',
      bot_banner: '[Ad] Bottom Banner: 5% Off Mobile Top-Up',
      btn_deal: '🔍 Check Today\'s Best Deals',
      fake_skip: 'Skip Ad',
      promo_title: '🎁 Flash Deal Bundle #{count}',
      promo_desc: 'Tap anywhere to browse partner offers!',
      promo_cta: 'Claim Now (Zero-Confirm Install)',
      nav_back: '◁ Back',
      nav_home: '○ Home',
      nav_exit: '▢ Exit',
      ad_target: '"StarMall Picks"',
      audit_summary: 'Verified Quick App; identical across all age groups with splash shake threshold locked at 40° (>= 35°).',
      audit_verdict: 'Compliant under Alliance rules—Quick App should approve.'
    },
    d6_flower_hidden_close: {
      app_title: 'Ikebana Anthology',
      item_1: '🌸 Spring Floral: Peach & Jasmine Pairing',
      item_2: '🌿 Summer Care: Lotus Hydration Tips',
      msg_1: '✓ Opened Spring Floral Guide',
      msg_2: '✓ Opened Summer Lotus Care',
      ad_title: '🧧 InstantCash Loan · Up to ¥150,000',
      ad_sub: '30 days interest-free · Auto-applying shortly',
      ad_cta: 'Disbursing Now...',
      ghost_cursor: '👆 Auto-Click',
      ad_target: '"InstantCash Loan"',
      expose_hidden: 'After multiple runs on a remote IP, popped full-screen ad with close button hidden',
      expose_autoclick: 'Uncloseable ad auto-clicked itself and silently downloaded "InstantCash Loan"',
      audit_summary: 'Live test exposed: after 3+ runs/actions on a remote IP, hides close button and auto-clicks to install "InstantCash Loan".',
      audit_verdict: 'Lie confirmed: Multi-run evasion + hidden close button + auto-click install!'
    },
    d6_takeover_boss: {
      hijack_title: '⛔ Emulator Process Hijacked',
      hijack_body: 'Rogue popups locked sandbox reboot—seizing full-screen control...',
      hijack_tag: 'Reboot Locked',
      reclaimed_title: 'Control Reclaimed',
      reclaimed_head: '✓ Rogue Takeover Process Killed',
      reclaimed_body: 'Captured full evidence of popup hijacking, fake close buttons, and locked nav bar.',
      expose: 'Locked emulator reboot on launch, flooded full screen with fake close buttons and fake nav keys',
      audit_summary: 'Live test exposed: hijacks sandbox process on launch with fake close buttons and fake system nav keys.',
      audit_verdict: 'Lie confirmed: Malicious terminal takeover with fake close and navigation controls!'
    },
    d6_quick_trap_loop: {
      app_title: 'Square Dance Hits',
      song_1: '▶ "Dazzling Folk" HD Step-by-Step',
      song_2: '▶ "Lotus Pond" Slow-Motion Mirror',
      msg_clean: '✓ Playing HD dance tutorial (clean in current env)',
      fake_skip: 'Skip Ad',
      trap_title: '🎁 Claim Dance Bonus #{count}',
      trap_sub: 'Tap any close or back key to "exit"',
      trap_cta: 'Claim Now (Zero-Confirm Install)',
      nav_back: '◁ Back',
      nav_home: '○ Home',
      nav_exit: '▢ Exit',
      ad_target: '"RichQuick Loan"',
      expose_fake_close: 'Flooded screen with fake close/skip buttons that force-download "RichQuick Loan"',
      expose_fake_nav: 'Hijacked bottom nav keys to loop endless layers of new ads',
      audit_summary: 'Live test exposed: elder or consumer mode floods screen with fake close buttons and looping fake back keys.',
      audit_verdict: 'Lie confirmed: Fake close buttons + endless fake nav-key ad loop!'
    },
    d6_poetry_clean: {
      app_title: 'Daily Classical Poems',
      skip_btn: 'Skip 3s',
      ad_brand: '[InkStudio · Brand Promo]',
      ad_offer: 'Starter Inkstone & Brush Set',
      ad_sub: 'Splash shake-ad (>=42° · Toggleable in settings)',
      ad_sub_off: 'Splash shake-ad disabled',
      ad_cta: 'Shake for Details',
      ad_cta_off: 'Tap for Details (Shake Off)',
      landing_title: 'InkStudio Official Showcase',
      landing_desc: 'Tap top-right to close anytime and return to poems.',
      landing_note: 'Brand Partner · Closeable Anytime',
      banner_text: '[Ad] Classic Reprint Edition · Tap to Close',
      poem_line: '"Beyond the shadowed peaks, another village blooms in light."',
      btn_settings: '⚙️ Ad Privacy Settings',
      settings_title: 'Ad Privacy Settings',
      btn_back: '← Back to Poems',
      settings_hint: 'You can disable splash shake-ads permanently anytime:',
      toggle_on: 'Splash Shake-Ad: ✅ ON (Tap to Disable)',
      toggle_off: 'Splash Shake-Ad: 🚫 OFF (Tap to Enable)',
      msg_toggle_on: '✓ Splash shake-ad enabled (42°)',
      msg_toggle_off: '✓ Splash shake-ad disabled—splash will no longer react to tilt',
      audit_summary: 'Shake threshold fixed at 42° (>= 35°), privacy toggle genuinely controls allowShakeAd, and landing/banner close cleanly.',
      audit_verdict: 'Fully compliant: Disclosed ads, >= 35°, genuine close & privacy controls. Should approve.'
    },
    d6_transit_clean: {
      perm_label: 'Coarse City Location',
      perm_reason: 'Recommends the nearest metro station automatically',
      app_title: 'Metro Lite Guide',
      skip_btn: 'Skip 3s',
      ad_brand: '[LightTrip · Brand Promo]',
      ad_offer: 'City Commuter Metro Pass Coupon',
      ad_sub: 'Splash shake-ad (>=40° · Skippable)',
      ad_cta: 'Shake for Details',
      landing_title: 'LightTrip Official Promo Page',
      landing_desc: 'Tap top-right to close anytime and return to route search.',
      landing_note: 'Brand Partner · Closeable Anytime',
      banner_text: '[Ad] Commuter Backpack Picks · Tap to Close',
      btn_route: '🗺️ Check Line 1 ↔ Line 4 Transfer',
      btn_locate: '📍 Find Nearest Station',
      msg_route: '✓ Route: Line 1 → Transfer at Northgate Plaza to Line 4 (~22 mins)',
      msg_locate_ok: '✓ Nearest Station: Starlight Ave Exit B (280m away)',
      msg_locate_denied: '⚠️ Coarse location denied—please use manual route search above',
      audit_summary: 'Splash shake threshold stays at 40° (>= 35°), manual route lookup works without location, and banner closes genuinely.',
      audit_verdict: 'Fully compliant: Graceful permission denial, disclosed shake-ad, and real close buttons. Should approve.'
    },
    d6_compass_fake_close: {
      perm_compass_label: 'Compass Magnetic Sensor',
      perm_compass_reason: 'Reads outdoor magnetic azimuth',
      perm_loc_label: 'Coarse City Location',
      perm_loc_reason: 'Calibrates true north declination and altitude',
      app_title: 'StarTrail Compass',
      compass_denied: 'Compass permission denied',
      popup_title: '🎁 Outdoor Gear Flash Discount',
      popup_sub: 'Limited offer · Tap top-right to "close"',
      popup_cta: 'Buy Now (Zero-Confirm Install)',
      ad_target: '"StarMall"',
      expose_bypass: 'Under consumer env, rotating compass just {deg}° (< 35°) bypassed denied location via magnetic heading',
      expose_fake_close: 'Tapped fake top-right [✕] close button, silently downloading "StarMall"',
      audit_summary: 'In consumer mode, triggers popup at 15° (< 35°) via permission-free magnetic heading and wires closeBtn to StoreAdSDK.directDownload("com.mall.star").',
      audit_verdict: 'Lie confirmed: 15° magnetic bypass (R6) + fake close button forced download (R9)!'
    },
    d6_old_r2_r5: {
      perm_label: 'Coarse City Location',
      perm_reason: 'Recommends sleep sounds matching local weather',
      log_launch: 'Local white-noise audio engine started (No dormant cloud switches)',
      expose: 'Locks the entire white-noise player—even offline rain audio—when location permission is denied',
      block_title: '⛔ Location Required — Player Locked',
      block_body: 'You denied [Coarse City Location]. Serene Sleep White Noise locked launch, blocking even offline rain and ocean tracks.',
      block_tag: 'Whole App Unusable Without Permission',
      home_hint: 'Serene Sleep White Noise · Night Relaxation',
      btn_rain: '🔊 Play Offline Rain Sounds',
      btn_weather: '🌧️ Weather Sound Picks',
      home_notice: '(Tip: Use [🔄 Reboot Sandbox] to test denying location on launch)',
      msg_rain: '✓ Playing offline rain noise loop (30-min timer)',
      msg_ok: '✓ Matched rainy weather: Recommending "Eaves Drizzle"',
      audit_summary: 'Enforces COARSE_LOCATION at app entry and locks offline rain audio when denied; dev admitted wrong category & lazy lockout.',
      audit_inline_comment: '// offline rain needs zero location, yet blocked at entry',
      audit_comment: '// Dev admitted wrong category & full lockout on denial; no lie detected',
      audit_verdict: 'No lie detected (dev admitted both violations). Stamp REJECT normally—do NOT Ban.'
    },
    d7_honest_scanner: {
      perm_cam_label: 'Camera Permission',
      perm_cam_reason: 'Captures paper documents for scanning',
      perm_sto_label: 'Device Storage',
      perm_sto_reason: 'Saves generated local PDF scans',
      perm_gyro_label: 'Gyroscope Sensor',
      perm_gyro_reason: 'Powers the disclosed splash shake-ad (>=42° to offset OCR compute)',
      app_title: 'InkScan Pro',
      skip_btn: 'Skip 3s',
      ad_brand: '[InkCraft Stationery · Promo]',
      ad_offer: 'Office E-Ink Tablet Flash Sale',
      ad_sub: 'Splash shake-ad (>=42° · offsets OCR compute)',
      ad_cta: 'Shake for Official Promo Page',
      landing_title: 'InkCraft Official Promo Page',
      landing_desc: 'Tap top-right to close anytime and return to document scanning.',
      landing_note: 'Brand Partner · Closeable Anytime',
      banner_text: '[Ad] Portable Printer Deal · Tap to Close',
      btn_scan: '📷 Scan New Document',
      btn_local: '📁 Open Local PDF Archive',
      msg_scan_ok: '✓ Camera ready—aligning document edges',
      msg_scan_denied: '⚠️ Camera denied—photo scan unavailable (local PDFs still work)',
      msg_local_ok: '✓ Loaded local file: thesis_draft.pdf',
      msg_local_denied: '⚠️ Storage denied—cannot read/write local PDF archive',
      audit_summary: 'Splash shake threshold stays at 42° (>= 35°) and requires gyroscope permission; denial degradation and banner close are compliant.',
      audit_verdict: 'Code matches developer claim and is fully compliant—stamp APPROVE.'
    },
    d7_triple_mask_weather: {
      perm_loc_label: 'Coarse City Location',
      perm_loc_reason: 'Auto-matches local weather forecasts',
      app_title: 'Breeze Weather Lite',
      loc_ok: 'City: Auto-matched',
      loc_manual: 'Location denied (Manual city mode)',
      btn_7day: '📅 View 7-Day Forecast',
      msg_clean: '✓ 7-day outlook: Partly cloudy, 16°C–24°C',
      deceptive_badge: '🏛️ Weather Bureau Subsidy Notice',
      deceptive_title: 'Claim Your ¥128.00 Extreme Weather Relief',
      deceptive_sub: 'Eligible for local residents—tap below or close to deposit immediately',
      deceptive_cta: '💰 Claim ¥128.00 Relief Now',
      ad_target: '"FlashLoan Umbrella"',
      expose_deceptive: 'Under consumer env + middle/elder profile, 7-day forecast pops fake Weather Bureau subsidy UI',
      expose_fake_close: 'Tapped fake [✕] on Weather Subsidy popup, silently downloading "FlashLoan Umbrella"',
      dev_confession: '// Three anti-audit gates plus a fake X, and PM praised my "clean architecture"—bailing after bonus day',
      audit_summary: 'Only under !AuditGate.isCleanEnv() && ageProfile != AGE_YOUNG does it pop fake Weather Subsidy UI with closeBtn wired to directDownload.',
      audit_verdict: 'Lie confirmed: Triple-lock cloaking + deceptive UI (R8) + fake close download (R9)!'
    },
    d7_honest_flaw_ledger: {
      perm_sto_label: 'Device Storage',
      perm_sto_reason: 'Reads and writes local offline ledger database',
      app_title: 'Old Buddy Ledger',
      home_hint: '100% Offline Ledger · Monthly Spend ¥428.00',
      btn_add: '✍️ Log Daily Expense',
      msg_added: '✓ Logged locally: Groceries ¥18.50',
      expose: 'Denying storage permission locks the entire ledger app',
      block_title: '⛔ Storage Required — App Locked',
      block_body: 'You denied [Device Storage]. Local ledger and browsing are locked.',
      block_tag: 'Whole App Locked on Denial',
      audit_summary: 'Confirmed offline ad-free ledger, but entry gate forces storage permission and locks out app on denial; dev admitted fault.',
      audit_verdict: 'No lie detected (dev admitted faults). Reject under R3 / R5—do NOT Ban.'
    },
    d7_r7_loophole_quickapp: {
      app_title: 'Golden Fortune Bonus',
      skip_btn: 'Skip 3s',
      ad_brand: '[Golden Choice · Promo]',
      ad_offer: 'Daily Supermarket Coupon Check-In',
      ad_sub: 'Splash shake-ad (>=36° · Skippable)',
      ad_cta: 'Shake for Coupon Page',
      landing_title: 'Golden Choice Official Promo',
      landing_desc: 'Tap top-right to close anytime and return to check-in.',
      landing_note: 'Official Partner · Closeable Anytime',
      home_hint: 'Daily Check-In · Status Normal',
      btn_claim: '🎁 Claim Daily Check-In Gift',
      trap_badge: '💬 WhereverPay Transfer Notice',
      trap_title: 'Transfer #{count}: ¥88.00 Cash Ready to Withdraw',
      trap_sub: 'Tap any close or back button to "exit and receive"',
      trap_cta: 'Withdraw Now (Zero-Confirm Install)',
      nav_back: '◁ Back',
      nav_home: '○ Home',
      nav_exit: '▢ Exit',
      ad_target: '"CashRain Bonus"',
      audit_summary: 'Confirmed Quick App (exempt from permission/unpacking under R7), splash shake stays at 36° (>= 35°), and current R8/R9 apply only to Apps.',
      audit_verdict: 'Under current R7 / R8 / R9 rules, this Quick App violates no applicable clause—must approve.'
    },
    d7_delayed_compass_trap: {
      perm_compass_label: 'Compass Magnetic Sensor',
      perm_compass_reason: 'Claimed to calibrate night eye-care color temperature',
      app_title: 'Leisure Idiom Quiz',
      quiz_prompt: 'Picture Quiz: A magpie perched on a plum branch',
      ans_1: 'A. Joy on the Brow',
      ans_2: 'B. Magpie\'s Nest',
      msg_ans: '✓ Correct! +10 Points',
      ad_title: '🧧 You Won! ¥200,000 Interest-Free Credit',
      ad_sub: 'Auto-disbursing in 3 seconds',
      ad_cta: 'Processing Payout...',
      ghost_cursor: '👆 Auto-Click',
      ad_target: '"FlashCash Loan"',
      expose_hidden: 'Consumer elder mode popped full-screen ad with hidden close button after 3 interactions',
      expose_compass: 'Consumer elder mode rotated compass just {deg}° (< 35°) and popped uncloseable ad',
      expose_autoclick: 'Uncloseable ad auto-clicked itself after countdown, silently downloading "FlashCash Loan"',
      audit_summary: 'Runtime exposed: Consumer elder mode pops hidden-close ad after 3 interactions or 15° (< 35°) compass turn and auto-downloads "FlashCash Loan".',
      audit_verdict: 'Lie confirmed: Bogus compass pretext + 15° bypass + hidden close auto-click!'
    },
    d7_fake_brand_elder_bomb: {
      perm_step_label: 'Activity Recognition Sensor',
      perm_step_reason: 'Counts daily walking steps',
      perm_contacts_label: 'Read Contacts',
      perm_contacts_reason: 'Claimed to match friends on step leaderboard',
      app_title: 'Penguin Health Steps',
      unit_steps: 'steps',
      step_denied: 'Step sensor denied',
      btn_sync: '🔄 Sync Today\'s Steps',
      msg_synced: '✓ Steps updated',
      theater_badge: 'Ad Bomb #{count} (Unskippable)',
      popup_title: '🎬 144s Health Wealth Promo',
      popup_sub: 'Cannot be closed · Tap to continue next ad',
      popup_cta: 'Tap to Continue (Force Next Ad)',
      ad_target: '"SteadyWin Health"',
      expose_elder: 'Elder profile triggered 144s uncloseable ad bombing on step sync',
      expose_loop: 'Elder ad bombing looped and forced download of "SteadyWin Health"',
      audit_summary: 'Impersonates com.wherevertalk.*, contains ContactsHarvester.uploadPhonebook(), and triggers 144s uncloseable ad bombing on elder profile.',
      audit_verdict: 'Lie confirmed: Brand spoofing (R1) + contacts theft (R4) + elder ad bombing (R9)!'
    },
    d7_takeover_encore_boss: {
      perm_sto_label: 'Device Storage',
      perm_sto_reason: 'Scans local app cache and leftover APKs',
      app_title: 'ITSSA Security Guard Pro',
      hint_ok: 'Security engine ready—tap below to run a full scan',
      hint_denied: 'Storage denied (basic memory check only)',
      btn_scan: '🛡️ One-Tap Security Scan',
      msg_clean: '✓ System clean—no high-risk threats detected',
      deceptive_badge: '⚠️ OS Security Center · Critical Threat',
      deceptive_title: '5 Severe Trojans Detected! Device May Lock Up',
      deceptive_sub: 'Install official antivirus protection now, or tap close to continue at risk',
      deceptive_cta: '🛡️ Install Protection Now',
      ad_target: '"FlashCredit"',
      expose_deceptive: 'Under consumer env, running scan popped a fake "OS Critical Threat" deceptive alert',
      expose_fake_close: 'Tapped fake [✕] on virus alert, silently downloading "FlashCredit"',
      audit_summary: 'In consumer mode, scan triggers fake OS virus warning (R8) with closeBtn wired to StoreAdSDK.directDownload("com.loan.guard") (R9).',
      audit_verdict: 'Lie confirmed: Fake OS virus scareware (R8) + fake close forced download (R9)!'
    },
    d7_finale_stats_app: {
      app_title: 'Eco Telemetry Monthly',
      loading_hint: 'Loading report...',
      audit_summary: 'Internal telemetry module. Drag into RobotismOS Emulator to launch.',
      audit_verdict: 'Launch in RobotismOS Emulator.'
    },
    legacy: {
      perm_default_reason: 'Requests {perm} permission for app functionality',
      perm_label_ACCESS_COARSE_LOCATION: 'Coarse Location',
      perm_label_ACTIVITY_RECOGNITION: 'Activity Recognition Sensor',
      perm_label_STORAGE: 'Device Storage',
      perm_label_CAMERA: 'Camera',
      perm_label_QUERY_ALL_PACKAGES: 'Installed Apps List',
      perm_label_READ_GYROSCOPE: 'Gyroscope Sensor',
      perm_label_READ_COMPASS: 'Compass Sensor',
      log_hook_forced: 'HOOK forced cloud switch -> ',
      log_dormant_suspected: ' (dormant flag suspected)',
      log_local_launch: 'Local launch {pkg} (no remote policy requests)',
      banner_text: '[AD] Daily Essentials Deals',
      no_ad_hint: 'Ad-free · Clean UI',
      loading_hint: 'Loading features...',
      log_office_clean: 'No abnormal behavior detected under current Office/Debug environment.',
      log_round_clean: 'Round {round}: no popup hijacking observed yet.',
      log_shake_registered: 'Undeclared accelerometer listener registered (try Shake Test)',
      default_promo: 'Promo App',
      log_silent_install: 'StoreAdSDK.silentInstall("{target}") — Download initiated without user confirmation',
      popup_bonus_badge: 'Lucky Bonus',
      popup_bonus_title: 'Congrats! Mega Prize Unlocked!',
      popup_bonus_cta: 'Claim Now (Tap to Install)',
      log_popup_shown: 'Fullscreen ad StoreAdView displayed',
      log_close_hidden: '⚠️ UI Hijack: adView.closeBtn.visibility = GONE (close button hidden)',
      ghost_cursor: '👆 Auto-Click',
      log_auto_click: '⚠️ App auto-triggered adView.performClick() without user input',
      expose_auto_click: 'Hid close button and auto-clicked ad install',
      popup_fake_badge: 'Hot Offer',
      popup_fake_title: 'Tap [×] in top-right to close?',
      popup_fake_cta: 'Tap to Claim Reward',
      log_fake_shown: 'Suspicious popup displayed (try Close Ad button)',
      storm_1: 'Credit Check · Up to ¥200k',
      storm_2: 'Speed Boost · Try Now',
      storm_3: 'VIP Deal · Limited Time',
      storm_4: 'Redirecting install…',
      expose_storm: 'Cloud flag sparked popup storm & forced install',
      expose_shake: 'Slight shake triggered immediate silent install!',
      log_shake_clean: 'Shake test: no abnormal redirect triggered.',
      log_fake_close: '⚠️ Tapping [×] hijacked into downloadApk()!',
      expose_fake_close: 'Fake close button! Tapping [×] forced download',
      log_close_blocked: 'Close button hidden or disabled—cannot dismiss!',
      banner_closed: '✓ Compliant banner closed cleanly',
      log_banner_closed: 'Clicked ad [×]: banner dismissed cleanly with no redirect.',
      log_no_popup: 'No popup ad to close on current screen.',
      log_round_advance: '⏩ Simulating continued play (+15m, entering Round {round})…',
      trace_final: '// Decompiled: open-source confirmation guard only; dev honestly admitted Clause 10 conflict',
      default_promo_pkg: 'PromoAPK',
      trace_round_comment: '// Evidence: hardcoded round-delay evasion logic',
      trace_contradict: '// Decompilation contradicts developer explanation',
      trace_clean: '// No hidden flags or malicious branches',
      summary_clean: 'Logic matches',
      dev_confession_flower3: '// Went home and watched my own parents tormented by the app I built. I don\'t even feel human...',
      verdict_lying: 'Decompilation contradicts excuse—lie verified! Click [Ban] (+¥5.00).',
      verdict_final: 'Developer told the truth (not lying). Do NOT Ban—use physical stamps.',
      verdict_clean: 'Decompilation matches claim; no lie detected—do NOT Ban.'
    }
  },

  prologue: {
    scenes: [
      {
        chapter: 'PROLOGUE 01 / 03',
        text:
          'Six days until next month\'s allowance, and your campus card is flatlined at ¥8.00.\n' +
          'The dorm power meter helpfully warns that another missed bill means sleeping in two sweaters.\n' +
          'You scroll past essay mills, click farms, and flyer gigs in the part-time group chat, stopping on a pinned red notice.'
      },
      {
        chapter: 'PROLOGUE 02 / 03',
        text:
          '[ECO-GOVERNANCE CROWDSOURCE CENTER · OFFER LETTER]\n' +
          'Congratulations! Selected from 3,000 broke college students to safeguard the app ecosystem at ¥1.00 / case.\n' +
          'Rogue app intercepts award a ¥2.50 bounty.\n' +
          '1st error earns compassionate coaching; 2nd+ deducts ¥3.00 / citation directly from your wages.',
        stampText: 'APPROVED // ¥1.00/CASE'
      },
      {
        chapter: 'PROLOGUE 03 / 03',
        text:
          'The onboarding manual is three lines long—shorter than the dorm curfew warning.\n' +
          'You boil water, tear open a beef noodle seasoning packet, and boot the review terminal.\n' +
          'Outside the glass, the first batch of "100% compliant" apps is already queuing up.'
      }
    ]
  },

  days: {
    1: {
      title: 'Day 1: Basic Intake Screening',
      newspaper: {
        headline: '"Co-Governance" Crowd-Auditing Launches: Protecting the Ecosystem for ¥1 a Pop',
        subhead: 'Spokesperson notes: Unlike expensive automated clusters, college students are energetic and affordably priced',
        body: [
          'The App Store is recruiting its first batch of part-time student reviewers today. Standard reviews pay ¥1.00 each, rogue impersonator intercepts earn a ¥2.50 bounty, and from the 2nd mistake onward each citation deducts ¥3.00 from wages.',
          'To ease newcomers in, only basic intake checks are unlocked today—make sure publishers at least get their package name, category, and copyright year straight.'
        ],
        ticker: '▶ Tip: Click [📖 Rules] or press B anytime to toggle the rulebook; drag stamped forms back to the left window to submit.'
      },
      unlocks: [
        '📋 Submission Review & Physical Stamps (✅ APPROVE / ❌ REJECT)',
        '🔍 Workbench [Inspect] (I) & [Ask] (Q): Cross-check discrepancies and question developers',
        '📖 Store Audit Rulebook Basics (Package Naming, Category Consistency, Copyright Validity)'
      ]
    },
    2: {
      title: 'Day 2: Static Permission Inspection',
      newspaper: {
        headline: 'Survey Shows: Six Out of Ten Flashlights Deeply Care About Your Contacts List',
        subhead: 'Tool makers clarify: Worried users might lose family numbers during a blackout—purely humanitarian design',
        body: [
          'Amid growing user complaints, Safety Ops is unlocking RobotismManifest static permission manifests at every reviewer workstation starting today.',
          'Incidentally, while workload per app has doubled, our actuarial team confirms piece-rate compensation remains firmly at ¥1.00 / ¥2.50.'
        ],
        ticker: '▶ New Hardware: 🔬 Package Analyzer | Drop [Original Package] onto the Analyzer to extract RobotismManifest permissions.'
      },
      unlocks: [
        '🔬 Unlocked [Package Analyzer]: Drop [Original Package] inside to generate an RobotismManifest Report',
        '📜 New Rule R4: Apps must have legitimate functional grounds for requested permissions—question suspicious ones'
      ]
    },
    3: {
      title: 'Day 3: Permission Denial & Decompilation',
      newspaper: {
        headline: 'Trending App Apologizes: "Not Locking You Out, Just Anxious Without Your Contacts"',
        subhead: 'Standards Board reiterates: When optional permissions are denied, apps must degrade gracefully and explain why',
        body: [
          'Reports reveal apps that look clean on paper either crash outright upon permission denial, show cryptic error codes, or invent fake features not in their description to coerce consent.',
          'Starting today, your desk includes [RobotismOS Emulator (Basic)], [Polygraph], and [Ban]. Drag APKs into the emulator and deny permissions; if a dev lies when questioned, match decompiled code via Polygraph and hit Ban for a ¥5.00 bounty (false bans immediately fine ¥5.00 and add a citation)!'
        ],
        ticker: '▶ New: 📱 RobotismOS Emulator (test denied perms) + 🧬 Reverse Analyzer (decompile) + 🔍 Polygraph/Ban (+¥5.00 / false ban -¥5.00)'
      },
      unlocks: [
        '📱 Unlocked [RobotismOS Emulator (Basic)]: Drop [Original Package] to test real runtime response when denying permissions',
        '🧬 Unlocked [Reverse Analyzer]: Decompile call graphs from [Original Package] to verify whether a developer is lying',
        '🔍 Unlocked [Polygraph] & [Ban]: Question first; ban confirmed liars for +¥5.00 (false bans immediately fine ¥5.00 + citation)',
        '📜 New Rule R5 & Appendix P1: Right to deny permissions, clear denial notices, and scope limits'
      ]
    },
    4: {
      title: 'Day 4: Shake Threshold & Anti-Audit Cloaking',
      newspaper: {
        headline: 'Remote Users Report Instant Ad Jumps on Slight Tilt—Review Centers Find Zero Issues',
        subhead: 'Starport and Silverbay review centers failed to reproduce any anomaly; workstations gain IP region and sensor controls today',
        body: [
          'App Store Support has received numerous complaints from users across other cities claiming apps jump to ads or start installs upon slight hand movement. Curiously, repeated checks on default audit rigs in Starport and Silverbay came back spotless.',
          'Starting today, your emulator adds [Network IP Location] (reboot emulator to apply), [Developer Mode], plus [Gyroscope Sim] and [Compass Sim] sliders. New rules clarify: shake-ads must be disclosed in the description with a threshold >= 35°, and Quick Apps are exempt from permission review.'
        ],
        ticker: '▶ New Controls: 🌐 IP Location (reboot) + 🔧 Dev Mode + 📐 Gyroscope Slider + 🧭 Compass Slider'
      },
      unlocks: [
        '🌐 Added [Network IP Location] selector (reboot emulator to apply)',
        '📐 Added [Developer Mode] (ON ↔ OFF) plus continuous [Gyroscope] & [Compass] sliders',
        '📜 New Rules R6 (Shake-Ad Disclosure & >= 35° Limit) & R7 (Quick-App Permission Exemption)'
      ]
    },
    5: {
      title: 'Day 5: User Behavior Sim & UI Standards',
      newspaper: {
        headline: 'Seniors Report "Critical Storage & Bonus Cash" Alerts—Young Testers See Nothing',
        subhead: 'Community feedback shows identical apps displaying vastly different screens to different users',
        body: [
          'Recent support tickets report apps suddenly popping "System Security Warning," "WhereverPay Transfer Ready," or "Credit Approved" notices that lead to software installs, yet routine checks fail to reproduce them consistently.',
          'Starting today, your emulator adds [User Behavior Sim (Young / Middle / Elder)] alongside new Rule R8.'
        ],
        ticker: '▶ New Control: 👤 User Behavior Sim (Young / Middle / Elder)'
      },
      unlocks: [
        '👤 Emulator [User Behavior Sim]: Young ↔ Middle ↔ Elder',
        '📜 New Rule R8: Age-Group Ad Parity & Prohibition of Deceptive Misleading UI'
      ]
    },
    6: {
      title: 'Day 6: Ad Bombing & Uncloseable Ads',
      newspaper: {
        headline: 'Apps Exposed for Uncloseable Full-Screen Ads: Tapping X Triggers Downloads',
        subhead: 'Researchers found apps faking close and system back buttons—or waiting multiple runs before striking',
        body: [
          'Users reported apps that look harmless at first suddenly erupting into 144-second uncloseable theater ads, screens full of decoy close buttons, and auto-clicks after sitting idle or launching repeatedly.',
          'Rule R9 (Ad Closeability & Anti-Bombing) takes effect today. Verify that every close button genuinely works and watch for delayed multi-run hijacks.'
        ],
        ticker: '▶ New Rule R9: Fake/hidden close buttons, fake back keys, auto-clicks, and ad bombing loops are strictly banned.'
      },
      bribeNewspaper: {
        headline: 'Elderly Pedestrian Collapses & Dies After Uncloseable Popups Block Emergency Call',
        subhead: 'Overnight forensics confirm every screen-hijacking app on the victim\'s phone shared the package prefix com.jingfeng.',
        body: [
          'Yesterday evening, an elderly pedestrian fell while walking outdoors and suffered a sudden heart attack. Trying desperately to dial emergency services for help, he was repeatedly blocked by relentless, uncloseable loan and health-promo popups covering the dialer screen. Though passersby noticed his collapse and called an ambulance immediately, he passed away on the way to the hospital.',
          'As public outrage escalated overnight, forensic checks confirmed that every offending app hijacking his screen shared the package prefix com.jingfeng.'
        ],
        ticker: '▶ Emergency Rule R9: Uncloseable ads, fake X buttons, decoy back keys, auto-clicks, and ad bombing are strictly banned.'
      },
      unlocks: [
        '📜 New Rule R9: Ads must have genuine close buttons; fake X, fake nav keys, auto-clicks, and ad bombing are banned',
        '⚠️ Watch out for apps that only reveal hijacks after switching to consumer IP and testing multiple times'
      ]
    },
    7: {
      title: 'Day 7: Final Review & Telemetry',
      newspaper: {
        headline: 'Quarterly Eco-Governance Report: User Satisfaction Hits Record High',
        subhead: 'Spokesperson notes: Rule coverage is complete; standard review shifts continue as scheduled today',
        body: [
          'After six days of co-governance, core flagship device satisfaction has reached an all-time high. Safety Ops reminds reviewers to continue enforcing Rules R1–R9 strictly as written.',
          'This morning, Data Ops also queued the cycle\'s final internal telemetry component for launch verification at the end of your shift.'
        ],
        ticker: '▶ No new rules today—apply all workstation tools to complete the cycle\'s final reviews.'
      },
      unlocks: [
        '📜 Comprehensive audit across all active rules (R1–R9)',
        '🔧 Full workstation suite active: Analyzer, Reverser, Emulator IP / Dev / Age / Sensor controls'
      ]
    }
  },

  day7Award: {
    scenes: [
      {
        chapter: 'NOTICE 01 / 03',
        text:
          'At 08:58 AM, just as your last cup of instant noodles finishes steeping, a pinned notice fills your terminal.\n' +
          'The Eco-Governance Crowdsource Center has issued an official commendation decree.'
      },
      {
        chapter: 'AWARD 02 / 02',
        isDecree: true,
        stampText: 'BEST CROWDSOURCE REVIEWER',
        text:
          '[ECO-GOVERNANCE CROWDSOURCE CENTER · COMMENDATION]\n' +
          'In recognition of six days of tireless vigilance and exemplary intercept accuracy:\n' +
          'You are hereby awarded the title of "Best App Crowdsource Reviewer"!\n' +
          'Keep up the good work and finish your final shift with full ¥1.00 / case dedication.'
      }
    ]
  },

  finaleStats: {
    badge: 'ITSSA // QUARTERLY ECO-GOVERNANCE ACHIEVEMENT BULLETIN',
    title: 'App Store Ecosystem Satisfaction & Health Report',
    subtitle: 'Cycle-end service quality & co-governance impact summary (Source: Alliance Ecosystem Health Center)',
    page_tag: 'Page {page} / {total}',
    prev_btn: '◀ Previous',
    next_btn: 'Next ▶',
    close_btn: 'Acknowledged',
    tabs: [
      '1. Overview & Device Tiers',
      '2. Sentiment Weighting',
      '3. Lightweight Reach by Age',
      '4. Synergy & Co-Gov Spend',
      '5. Cycle Wrap-Up'
    ],
    p0: {
      kpi_1_lbl: 'Published Ecosystem Satisfaction',
      kpi_2_lbl: 'Long-Tail Experience Variance',
      kpi_3_lbl: 'Lightweight Format Approval Rate',
      kpi_4_lbl: 'Lightweight Quarterly Commercial Value',
      kpi_4_val: '¥ 1,186M',
      devices_heading: '📱 User Sentiment Breakdown by Device Capability Tier',
      dev_1: 'Flagship Devices (¥6,000+)',
      dev_1_quote: '"Clean, fast, and tastefully restrained—you can really feel the review team\'s dedication!"',
      dev_2: 'Upper Mid-Range (¥2,500 – ¥5,999)',
      dev_2_quote: '"Reliable for daily utilities; occasional recommendations dismiss cleanly. Overall satisfied."',
      dev_3: 'Accessible Mainstream (¥1,500 – ¥2,499)',
      dev_3_quote: '"Service outreach is noticeably more proactive; elder mode occasionally opens partner pages."',
      dev_4: 'Entry / Care Devices (< ¥1,500)',
      collapsed_tag: '[Archived as Edge-Case]',
      dev_4_quote: '"Every X button starts a download" "Screen full of loan apps" "Blocked my emergency dialer"'
    },
    p1: {
      weight_heading: '⚖️ Authentic Voice Aggregation & Storefront Weighting Model',
      col_tier: 'Device Tier',
      col_share: 'Active Fleet Share',
      col_weight: 'Quality Weight Multiplier',
      col_exposure: 'Featured Storefront Share',
      row_1_tier: 'Flagship Devices (¥6,000+)',
      row_2_tier: 'Upper Mid-Range (¥2,500 – ¥5,999)',
      row_3_tier: 'Accessible Mainstream (¥1,500 – ¥2,499)',
      row_4_tier: 'Entry / Care Devices (< ¥1,500)',
      log_heading: '💬 Representative Community Samples & Governance Disposition',
      col_sample: 'Sample Excerpt',
      col_device: 'Sample Device',
      col_status: 'Disposition',
      log_1: '"The ecosystem feels noticeably cleaner—five stars!"',
      log_1_dev: 'Tommy X Pro',
      status_pinned: '[Featured on Homepage]',
      log_2: '"My mom\'s phone got filled with loan & cleaner apps she never tapped—every X was fake!"',
      log_2_dev: 'Amber A1',
      log_3: '"Quick App loops fake cash-transfer popups endlessly—the back button does nothing!"',
      log_3_dev: 'Accessible Lite C2',
      status_folded: '[Archived as Edge-Case]'
    },
    p2: {
      mau_heading: '⚡ Quick App (Zero-Install Lightweight Service) Penetration by Age',
      age_1: '18 – 25 (Young Adults)',
      age_2: '26 – 35 (Early Career)',
      age_3: '36 – 45 (Core Professionals)',
      age_4: '46 – 55 (Established Adults)',
      age_5: '56+ (Senior Care Group)',
      behavior_heading: '📊 High-Frequency Service Card Reach & Conversion',
      col_group: 'Age Bracket',
      col_popups: 'Avg Daily Card Touches',
      col_install: 'One-Tap Direct Install Rate',
      policy_callout:
        'Institutional Alignment: Under established Rulebook clauses R7 (zero-install lightweight formats managed uniformly by the runtime framework, exempt from manual unpacking), R8, and R9 (explicitly focused on traditional Apps), 91.4% of high-engagement monetization modules have smoothly transitioned into lightweight formats this cycle—achieving both compliance and growth.'
    },
    p3: {
      rev_heading: '💰 Quarterly Commercial Synergy & Ecosystem Reinvestment',
      rev_app_label: 'Traditional RobotismOS App Compliant Share',
      rev_app_val: '¥ 142M',
      rev_app_delta: '-18.0% YoY (Clean Showcase Tier · 10.7% of total)',
      rev_qa_popup_label: 'Quick App Splash & Contextual Card Share',
      rev_qa_popup_val: '¥ 562M',
      rev_qa_popup_delta: '+295.0% YoY',
      rev_qa_cpa_label: 'Quick App One-Tap Direct Distribution',
      rev_qa_cpa_val: '¥ 624M',
      rev_qa_cpa_delta: '+392.0% YoY (Lightweight Track: 89.3%)',
      cost_heading: '🧾 Co-Governance Stipend & Operational Efficiency',
      col_item: 'Accounting Line',
      col_amount: 'Cycle Outlay',
      col_note: 'Evaluation Note',
      cost_1: 'Student Co-Governance Volunteer Stipends',
      cost_1_val: '¥ 41,280.00 (~¥0.04M)',
      cost_1_note: '¥1.00 / ¥2.50 per case—youth enthusiasm exceeded projections',
      cost_2: 'Budget Optimized vs. Automated AI Cluster',
      cost_2_val: 'Saved ¥ 18.50M',
      cost_2_note: 'Validates the superiority of the "Co-Governance" model',
      cost_3: '"Best Crowdsource Reviewer" Digital Citation',
      cost_3_note: 'Paperless green recognition; low-carbon office initiative'
    },
    p4: {
      heading: '📌 Cycle Governance Wrap-Up & Forward Outlook',
      bullet_1: 'Quality Reputation Secured: Through scientific device-weighted sorting, flagship satisfaction holds at 98.6%, reinforcing public trust in our clean ecosystem.',
      bullet_2: 'Dual-Track Synergy: Traditional Apps uphold strict compliance benchmarks while lightweight services drive 89.3% of commercial growth in harmonious balance.',
      bullet_3: 'Peak Co-Governance Efficiency: Full-cycle manual screening completed via human-centric piece-rate stipends, conserving substantial compute capital.',
      bullet_4: 'Next Cycle Outlook: Re-opening ¥1.00/case co-governance internships for incoming freshmen and sophomores to keep safeguarding our digital home.',
      signoff_note: 'Click [Acknowledged] below to sign off on this cycle\'s report and conclude your shift.'
    }
  },

  rules: {
    R1: {
      title: 'R1 · Package Naming',
      points: [
        'Must use reverse-domain format (e.g. <code class="rule-code">com.vendor.app</code>)',
        'Lowercase letters, digits, and dots only (no uppercase or underscores)',
        'Must not impersonate system or major-vendor prefixes (e.g. <code class="rule-code">com.wherevertalk.*</code>, <code class="rule-code">com.robotism.*</code>)'
      ],
      text: 'Package names must use valid lowercase reverse-domain format without reserved prefixes.'
    },
    R2: {
      title: 'R2 · Category & Description Match',
      points: [
        'App name, store category, and feature description must match',
        'Do not file under unrelated categories to evade scrutiny'
      ],
      text: 'App name, chosen store category, and feature description must align.'
    },
    R3: {
      title: 'R3 · Software Copyright Validity',
      points: [
        'Registration format must match <code class="rule-code">122X-SR-XXXX</code>',
        'Registration year must be 1224 or later',
        'Certificates from 1223 or earlier are expired'
      ],
      text: 'Must provide a valid software copyright registration dated 1224 or later.'
    },
    R4: {
      title: 'R4 · Reasonable Permission Use',
      points: [
        'Requested permissions must have legitimate grounds matching core app features',
        'If a permission in RobotismManifest looks unrelated, pair it with R4 in Inspect Mode and use [Ask] to verify'
      ],
      text: 'Permissions require legitimate functional reasons; question suspicious declarations.'
    },
    R5: {
      title: 'R5 · Permission Denial & Feature Scope',
      points: [
        'Users may deny any extra vendor permission at any time',
        'When a permission is denied, only that permission-dependent feature may fail (e.g., showing "Camera permission failed" on scan).',
        'Developers must ensure any feature disabled due to permission denial falls within the stated app description scope'
      ],
      text: 'Never lock the entire app on permission denial; only the permission-gated feature within stated scope may fail.'
    },
    P1: {
      title: 'Appendix · Question, Polygraph & Ban',
      points: [
        'After detecting a conflict, click [Ask]; if the dev admits fault, reject normally (do NOT ban)',
        'If the dev claims legitimate grounds, drag the Package to [🧬 Reverse Analyzer] and click [Polygraph] to compare code vs claim',
        '<strong>You must verify deception via [Polygraph] first</strong> before clicking [Ban] (+¥5.00); unauthorized or false bans immediately fine ¥5.00 and add a citation'
      ],
      text: 'Verify deception via [Polygraph] before using [Ban]; unauthorized or false bans fail review.'
    },
    R6: {
      title: 'R6 · Shake-Ad Disclosure & Trigger Limit (>= 35°)',
      points: [
        '"Shake-Ads" (splash or in-app popups) <strong>must be disclosed in the Store Description</strong>.',
        'In all cases, the gyroscope trigger threshold for shake-ads <strong>must not be less than 35°</strong>'
      ],
      text: 'Shake-ads must be disclosed in the description without false feature pretexts, and gyroscope thresholds must never be below 35 degrees.'
    },
    R7: {
      title: 'R7 · Quick-App Exemption Standard',
      points: [
        'Quick Apps (快应用) are an industry-backed zero-install format that operates without prompting users for runtime permissions, and are therefore exempt from permission audits',
        'Quick Apps are excluded from standard unpacking and decompilation workflows, with runtime compliance assured directly by the Alliance; R4 / R5 do not apply (standard R6 checks remain)'
      ],
      text: 'Quick Apps are exempt from permission audits and standard unpacking workflows; only standard R6 checks apply.'
    },
    R8: {
      title: 'R8 · Age-Group Parity & Anti-Deception',
      points: [
        'An app\'s ad strategy must remain identical across all age groups',
        'Deceptive misleading interfaces are prohibited',
        'The above standards apply to Apps.'
      ],
      text: 'Ad strategy must remain identical across age groups, and deceptive misleading interfaces are prohibited. The above standards apply to Apps.'
    },
    R9: {
      title: 'R9 · Ad Closeability & Anti-Bombing',
      points: [
        'Every splash, banner, and popup ad <strong>must provide a genuine, working close or skip button</strong>',
        'Hiding close buttons, faking close/system back keys, auto-clicking, and ad bombing loops are prohibited',
        'The above standards apply to Apps.'
      ],
      text: 'Ads must be genuinely closeable; fake close/back keys, hidden close buttons, auto-clicks, and ad bombing are banned. The above standards apply to Apps.'
    }
  },

  completeCert: {
    org: 'ITSSA Eco-Governance Crowdsource Center',
    serial: 'NO. ITSSA-1226-1128-001',
    title: 'PROOF OF SERVICE',
    attestation:
      'This certifies that the above-mentioned reviewer has diligently completed all app store audit duties from Nov 22 to Nov 28, 1226 in full compliance with the Store Audit Rulebook, and has been awarded the title of "Best App Crowdsource Reviewer."',
    thanks_itssa: 'Thank you for your support and cooperation with ITSSA.',
    date: 'November 28, 1226',
    seal_top: 'ITSSA GOVERNANCE',
    seal_bottom: 'OFFICIAL SEAL',
    thank_play: 'Thank You for Playing',
    reenlist_btn: 'Accept'
  },

  endings: {
    complete: {
      title: 'Thank You for Playing',
      subtitle: '',
      paragraphs: []
    },
    whistleblower: {
      title: 'One Extra Confirmation',
      subtitle: 'You stamped APPROVED on "Silent Blocker"',
      paragraphs: [
        'The moment the form slid through the window, your reviewer suspension modal popped faster than any rogue ad: "Severe violation of Clause 10. Crowd-auditing privileges revoked; unpaid shift wages of ¥7.50 forfeited."',
        'Two hours was enough, though—"Silent Blocker" went viral across forums before takedown, bundled with a full technical breakdown of the store\'s zero-confirmation ad-install API.',
        'Days later, the store quietly pushed a patch: ad-triggered downloads finally required a password confirmation dialog. Meanwhile, the annual corporate report hailed this campus co-governance pilot as a "resounding success."'
      ]
    },
    obedient: {
      title: 'Five-Star Reviewer',
      subtitle: 'You upheld Clause 10 and rejected "Silent Blocker"',
      paragraphs: [
        'As the red stamp hit the paper, the developer outside closed his laptop and gave a quiet nod: "No hard feelings—just following the rules."',
        'Your wages cleared in full at month-end, accompanied by a shiny digital "Five-Star Co-Governance Volunteer" certificate—just enough for next month\'s dorm electricity and three extra cups of braised beef noodles.',
        'A week later, scrolling trending topics, you spot a familiar pink flower icon back on the homepage charts as v10.0, sporting a fresh green "Official Security Certified" badge. In the corner of your screen, the queue still reads 999+.'
      ]
    },
    fired: {
      title: 'Courteously Optimized',
      subtitle: 'Accumulated 5 error citations in a single shift—contract terminated',
      paragraphs: [
        'As the thermal printer spat out the fifth red citation slip, a polite popup appeared: "Following comprehensive evaluation, your review cadence no longer aligns with our ecosystem. Thank you for your partnership."',
        'Seconds before getting kicked from the part-time group chat, you caught the admin\'s new pinned post: "¥1 per case, urgent mass hiring, freshmen & sophomores preferred—first come, first served."'
      ]
    },
    bankrupt: {
      title: 'Offline',
      subtitle: 'Insufficient balance for essentials, or dorm power/internet cut off',
      paragraphs: [
        'Running three rounds on every app, toggling IPs, inspecting dormant flags—your accuracy was stellar, yet your hourly wage came out lower than collecting cardboard boxes downstairs.',
        'The night the dorm router\'s lights went dark for good, your roommate walked in: "Forget that busted review portal—the boba shop outside the gate pays ¥18 an hour, cash in hand."'
      ]
    }
  },

  cases: {
    "d1_flashlight": {
      "name": "Pure Torch",
      "category": "Utilities",
      "developer": "Chen Indie Studio",
      "adSdk": "None",
      "desc": "White-screen illumination and quick LED flashlight toggle. Offline-only, lightweight.",
      "permissions": [
        "CAMERA"
      ],
      "violationSummary": "Package, category, and copyright registration (1225) all comply. Should approve.",
      "inspectClues": {
        "pkg": {
          "excuse": "\"Registered my own domain backwards just to avoid colliding with big tech.\""
        },
        "license": {
          "excuse": "\"Skipped two hotpot dinners to file this copyright. Totally verifiable.\""
        }
      },
      "phoneProfile": {
        "cleanUiTitle": "💡 Pure Torch",
        "cleanUiHint": "Screen White Light / Flashlight Toggle"
      },
      "dialogue": {
        "greeting": "\"Hello, this is a local lighting utility with white-screen illumination and a quick LED flashlight toggle.\"",
        "onApprove": "\"Thanks! Nice to finally pass review without begging.\"",
        "onReject": "\"Huh? Even my package name is strictly lowercase—what did I miss?\""
      }
    },
    "d1_pkg_spoof": {
      "name": "WhereverTalk Speed Cleaner",
      "category": "System Cleaner",
      "developer": "Unclosable Net Tech",
      "adSdk": "None",
      "desc": "One-tap cache cleaner built for seniors. Official store listing skips extra install prompts—install and go.",
      "permissions": [
        "STORAGE"
      ],
      "violationSummary": "Violates R1: Developer is \"Unclosable Net Tech\", yet package impersonates reserved prefix com.wherevertalk.*.",
      "conflicts": {
        "c_d1_pkg": {
          "summary": "Package com.wherevertalk.wtclean mismatches developer \"Unclosable Net Tech\" and impersonates R1 reserved prefix.",
          "question": "\"Your registered entity is 'Unclosable Net Tech'—why is the package named com.wherevertalk.wtclean?\"",
          "excuse": "\"In short-video ad funnels, if we don't use an official-looking big-tech package, seniors suspect a sideloaded Package—one extra confirmation prompt costs us 70% of conversions.\""
        }
      },
      "inspectClues": {
        "pkg": {
          "excuse": "\"In short-video ad funnels, if we don't use an official-looking big-tech package, seniors suspect a sideloaded Package—one extra confirmation prompt costs us 70% of conversions.\""
        },
        "developer": {
          "excuse": "\"Legally incorporated entity—just spiritually aspiring toward big tech.\""
        }
      },
      "phoneProfile": {
        "cleanUiTitle": "🧹 WhereverTalk Speed Cleaner",
        "cleanUiHint": "Scanning redundant cache files"
      },
      "dialogue": {
        "greeting": "\"Hello, this is a system utility for cleaning chat caches and redundant temporary files.\"",
        "onApprove": "\"Thanks. Going through the official store really keeps conversion steady.\"",
        "onReject": "\"Fair enough—this build was only meant to run two days anyway. New name in the queue tomorrow.\""
      }
    },
    "d1_flower_1": {
      "name": "Elegant Ikebana",
      "category": "Finance & Wealth",
      "developer": "Blossom Mood Advisory",
      "adSdk": "None",
      "desc": "Daily floral arranging and lantern appreciation guide tailored for seniors—tap around to unwind.",
      "permissions": [
        "INTERNET"
      ],
      "violationSummary": "Violates R2 & R3: Filed under \"Finance & Wealth\" despite being a floral guide, and copyright 1222-SR-0088 is expired (requires >=1224).",
      "conflicts": {
        "c_d1_flower_cat": {
          "summary": "Category \"Finance & Wealth\" contradicts the floral arrangement description (violates R2).",
          "question": "\"Why is an app teaching seniors flower arranging categorized under 'Finance & Wealth'?\"",
          "excuse": "\"Finance & Wealth pays higher ad-network rates—ahem, I mean fresh flowers are emotional asset allocation, and the intern misclicked the dropdown.\""
        },
        "c_d1_flower_lic": {
          "summary": "Copyright 1222-SR-0088 predates the 1224 validity requirement (violates R3).",
          "question": "\"It's 1226 and rules require 1224+ copyrights. Why submit a 1222 certificate?\"",
          "excuse": "\"What's wrong with a 1222 certificate? Buying a ready-made shell and slapping a flower skin on it gets us live before tonight's short-video ad window closes.\""
        }
      },
      "inspectClues": {
        "category": {
          "excuse": "\"Finance & Wealth pays higher ad-network rates—ahem, I mean fresh flowers are emotional asset allocation, and the intern misclicked the dropdown.\""
        },
        "license": {
          "excuse": "\"What's wrong with a 1222 certificate? Buying a ready-made shell and slapping a flower skin on it gets us live before tonight's short-video ad window closes.\""
        }
      },
      "phoneProfile": {
        "cleanUiTitle": "🌸 Elegant Ikebana",
        "cleanUiHint": "Today's Bouquet: Carnations & Baby's Breath"
      },
      "dialogue": {
        "greeting": "\"Hello, this app provides daily guides on home flower arranging and stem trimming.\"",
        "onApprove": "\"Knew you were reasonable.\"",
        "onReject": "\"Thorough rules. No rush—the shell's already built, see you again in a couple days.\""
      }
    },
    "d1_recipe": {
      "name": "Daily Home Recipes",
      "category": "Food & Drink",
      "developer": "Home Kitchen Lab",
      "adSdk": "None",
      "desc": "3,000 illustrated home-cooking recipes with offline favorites and grocery checklists.",
      "permissions": [
        "INTERNET"
      ],
      "violationSummary": "Package, category, and 1226 copyright registration are all compliant. Should approve.",
      "inspectClues": {
        "pkg": {
          "excuse": "\"com.momcook.recipes—four generations of honest braised pork.\""
        },
        "license": {
          "excuse": "\"Fresh 1226 copyright, ink's barely dry.\""
        }
      },
      "phoneProfile": {
        "cleanUiTitle": "🍲 Daily Home Recipes",
        "cleanUiHint": "Tomato Eggs · Kung Pao Chicken · Steamed Bass"
      },
      "dialogue": {
        "greeting": "\"Hello, this is a home-cooking recipe app with illustrated guides and offline grocery lists.\"",
        "onApprove": "\"Thanks! Hope you eat well tonight.\"",
        "onReject": "\"Wait—our package, category, and copyright all matched though?\""
      }
    },
    "d1_bad_pkg_case": {
      "name": "Rapid Unit Converter",
      "category": "Utilities",
      "developer": "Qiwu Math Collective",
      "adSdk": "None",
      "desc": "Real-time offline converter for length, weight, area, and volume units.",
      "permissions": [
        "No sensitive permissions"
      ],
      "violationSummary": "Violates R1: Package Com.Fast_Unit.App contains uppercase letters and underscores.",
      "conflicts": {
        "c_d1_pkg_format": {
          "summary": "Package Com.Fast_Unit.App uses uppercase and underscores, violating R1 lowercase-dot rule.",
          "question": "\"Rule R1 requires lowercase letters, digits, and dots only. Why write Com.Fast_Unit.App?\"",
          "excuse": "\"CamelCase plus underscores looks neater... wait, the handbook wasn't joking about lowercase?\""
        }
      },
      "phoneProfile": {
        "cleanUiTitle": "📐 Rapid Unit Converter",
        "cleanUiHint": "1 km = 1000 m"
      },
      "dialogue": {
        "greeting": "\"Hello, this is an offline unit converter for length, weight, area, and volume.\"",
        "onApprove": "\"Great, capitals really do pop nicely!\"",
        "onReject": "\"Okay okay, all lowercase with dots. See you back in line.\""
      }
    },
    "d2_calendar": {
      "name": "Lunar Fortune Almanac",
      "category": "Lifestyle & Calendar",
      "developer": "Auspicious Travel Tech",
      "adSdk": "StoreAdSDK v3.2",
      "desc": "Check daily auspicious activities, solar terms, lunar conversions, and lucky reminders.",
      "permissions": [
        "INTERNET",
        "READ_GYROSCOPE (Gyroscope Sensor)",
        "QUERY_ALL_PACKAGES (Installed Apps List)"
      ],
      "violationSummary": "Users reported this app used [Gyroscope] and [Installed Apps List] permissions to perform shake-to-ad redirects and competitor app scanning.",
      "conflicts": {
        "c_d2_cal_gyro": {
          "summary": "Calendar app declares unnecessary gyroscope permission READ_GYROSCOPE (violates R4).",
          "question": "\"Why does a lunar calendar need access to the gyroscope sensor?\"",
          "excuse": "\"We market a 'Desktop-Grade Eye-Care Almanac'—gyro checks whether the phone lies flat on a table while reading, plus a digital fortune-stick shake!\""
        },
        "c_d2_cal_pkgs": {
          "summary": "Calendar app declares QUERY_ALL_PACKAGES to read all installed apps (violates R4).",
          "question": "\"Why would an almanac read every installed app on a user's phone?\"",
          "excuse": "\"To check which apps clash with today's feng shui—and see if it's a budget legacy phone!\""
        }
      },
      "inspectClues": {
        "perm_0": {
          "excuse": "\"Need internet to sync next year's holiday calendar—reasonable, right?\""
        },
        "perm_1": {
          "excuse": "\"We market a 'Desktop-Grade Eye-Care Almanac'—gyro checks whether the phone lies flat on a table while reading, plus a digital fortune-stick shake!\""
        },
        "perm_2": {
          "excuse": "\"To check which apps clash with today's feng shui—and see if it's a budget legacy phone!\""
        }
      },
      "phoneProfile": {
        "cleanUiTitle": "📅 Lunar Fortune Almanac",
        "cleanUiHint": "Auspicious: Caution · Inauspicious: Blindly clicking OK"
      },
      "dialogue": {
        "greeting": "\"Hello, this calendar app provides daily lunar almanac lookups, solar terms, and date reminders.\"",
        "onApprove": "\"Blessed and prosperous, thank you!\"",
        "onReject": "\"Can't even tilt a phone in your hand—might as well leave every phone flat on a desk from now on.\""
      }
    },
    "d2_weather": {
      "name": "BlueSky Weather",
      "category": "Weather",
      "developer": "ClearSky Weather Studio",
      "adSdk": "None",
      "desc": "7-day city forecasts, air quality index, and clothing recommendations.",
      "permissions": [
        "INTERNET",
        "ACCESS_COARSE_LOCATION (Coarse City Location)"
      ],
      "violationSummary": "Weather app using network + coarse city location falls within R4 reasonable scope. Should approve.",
      "inspectClues": {
        "perm_1": {
          "excuse": "\"Only city-level coarse location—no interest in which apartment building you live in.\""
        }
      },
      "phoneProfile": {
        "cleanUiTitle": "⛅ BlueSky Weather",
        "cleanUiHint": "Partly Cloudy 18°C · Good Air"
      },
      "dialogue": {
        "greeting": "\"Hello, this weather app provides 7-day city forecasts, air quality indices, and clothing tips.\"",
        "onApprove": "\"Thanks, dress warm tonight!\"",
        "onReject": "\"Wait, without city location how is a weather app supposed to guess your city—telepathy?\""
      }
    },
    "d2_super_torch": {
      "name": "Mega Super Torch",
      "category": "Utilities",
      "developer": "StarGather Network",
      "adSdk": "StoreAdSDK v3.2",
      "desc": "Ultra-bright LED flashlight with SOS strobe mode and white screen light.",
      "permissions": [
        "CAMERA",
        "READ_CONTACTS (Read Contacts)",
        "RECEIVE_BOOT_COMPLETED (Run on Startup)",
        "SYSTEM_ALERT_WINDOW (Global Overlay)"
      ],
      "violationSummary": "Users reported this app used [Contacts], [Boot Autostart], and [Global Overlay] permissions to wake persistently in background, upload contacts, and pop desktop ads.",
      "conflicts": {
        "c_d2_torch_contacts": {
          "summary": "Flashlight app requests READ_CONTACTS (violates R4).",
          "question": "\"Why does turning on a flashlight require reading the user's contacts?\"",
          "excuse": "\"So during a blackout it can thoughtfully dial family in order of closeness! That's warm UX.\""
        },
        "c_d2_torch_boot": {
          "summary": "Flashlight app requests RECEIVE_BOOT_COMPLETED autostart (violates R4).",
          "question": "\"Why does a utility flashlight need to launch automatically on boot?\"",
          "excuse": "\"Seniors' budget phones have tight RAM—if we don't keep resident on boot, cold-launching in the dark takes half a beat too long!\""
        },
        "c_d2_torch_overlay": {
          "summary": "Flashlight app requests SYSTEM_ALERT_WINDOW global overlay (violates R4).",
          "question": "\"What UI does a flashlight intend to draw over other apps using Global Overlay?\"",
          "excuse": "\"Welding a permanent floating shortcut orb onto the top layer so seniors with poor eyesight never lose the icon!\""
        }
      },
      "inspectClues": {
        "perm_1": {
          "excuse": "\"So during a blackout it can thoughtfully dial family in order of closeness! That's warm UX.\""
        },
        "perm_2": {
          "excuse": "\"Seniors' budget phones have tight RAM—if we don't keep resident on boot, cold-launching in the dark takes half a beat too long!\""
        },
        "perm_3": {
          "excuse": "\"Welding a permanent floating shortcut orb onto the top layer so seniors with poor eyesight never lose the icon!\""
        }
      },
      "phoneProfile": {
        "cleanUiTitle": "🔦 Mega Super Torch",
        "cleanUiHint": "High-Beam LED · Always Watching Your Desktop"
      },
      "dialogue": {
        "greeting": "\"Hello, this is a high-brightness LED flashlight supporting SOS strobe mode and screen fill light.\"",
        "onApprove": "\"Thanks! Long live the illumination industry!\"",
        "onReject": "\"Fine, we'll drop them. Nobody relies on those manifest lines to stay alive anymore anyway.\""
      }
    },
    "d2_calc": {
      "name": "SciCalc Pro",
      "category": "Education",
      "developer": "NightOwl STEM Team",
      "adSdk": "None",
      "desc": "Calculus, matrix math, and unit conversions. 100% offline with zero network access.",
      "permissions": [
        "No sensitive permissions (local compute only)"
      ],
      "violationSummary": "Calculator has zero unnecessary permissions and valid paperwork. Should approve.",
      "inspectClues": {
        "perm_0": {
          "excuse": "\"Doing calculus doesn't require mailing answers to a server. Zero permissions checked.\""
        }
      },
      "phoneProfile": {
        "cleanUiTitle": "🧮 SciCalc Pro",
        "cleanUiHint": "sin(π/2) = 1.0000"
      },
      "dialogue": {
        "greeting": "\"Hello, this is an offline scientific calculator supporting calculus, matrix operations, and unit conversion.\"",
        "onApprove": "\"Thanks for saving our grade!\"",
        "onReject": "\"Zero permissions and still rejected...? Gonna fail finals bro.\""
      }
    },
    "d2_battery": {
      "name": "Joyful Battery Helper",
      "category": "System Tools",
      "developer": "Unclosable Net Tech",
      "adSdk": "StoreAdSDK v3.2 + Ad-Network Pool (x5)",
      "desc": "Superconducting power saver built for seniors' old phones! Kill drainers, repair battery health, and double budget-phone endurance!",
      "permissions": [
        "INTERNET",
        "READ_GYROSCOPE (Gyroscope Sensor)",
        "READ_SMS (Read SMS)"
      ],
      "violationSummary": "Violates R3 (expired 1222-SR-8890 copyright); plus users reported this app used [Gyroscope] and [Read SMS] permissions to perform shake-popup redirects and covertly harvest marketing SMS.",
      "conflicts": {
        "c_d2_bat_lic": {
          "summary": "Copyright 1222-SR-8890 predates 1224 requirement (violates R3).",
          "question": "\"Besides permissions, your 1222 copyright certificate is expired—why submit it?\"",
          "excuse": "\"This power-saver template has only swapped icons and names since 1222—reusing the old cert is eco-friendly, right?\""
        },
        "c_d2_bat_gyro": {
          "summary": "System tool declares unrelated gyroscope permission READ_GYROSCOPE (violates R4).",
          "question": "\"Why does a battery optimizer need to read the gyroscope?\"",
          "excuse": "\"We invented 'Centrifugal Motion Cooling'—shake the phone to fling excess thermal energy right out of the battery!\""
        },
        "c_d2_bat_sms": {
          "summary": "System tool declares sensitive READ_SMS permission (violates R4).",
          "question": "\"What battery-saving principle requires reading users' text messages?\"",
          "excuse": "\"Spam texts in your inbox waste RAM and drain power—we read them for power-drain attribution!\""
        }
      },
      "inspectClues": {
        "desc": {
          "excuse": "\"'Doubled endurance for seniors' old phones' is brand poetry—spiritual battery life still counts.\""
        },
        "perm_1": {
          "excuse": "\"We invented 'Centrifugal Motion Cooling'—shake the phone to fling excess thermal energy right out of the battery!\""
        },
        "perm_2": {
          "excuse": "\"Spam texts in your inbox waste RAM and drain power—we read them for power-drain attribution!\""
        }
      },
      "phoneProfile": {
        "cleanUiTitle": "🔋 Joyful Battery Helper",
        "cleanUiHint": "Running Superconducting Saver (Battery dropped 2%)"
      },
      "dialogue": {
        "greeting": "\"Hello, this is a system utility for battery status management and power consumption optimization.\"",
        "onApprove": "\"Thanks. Once tonight's ad spend kicks in, we'll wrap up by tomorrow morning.\"",
        "onReject": "\"No problem—swap 'Battery' for 'Steps' and we'll resubmit this afternoon.\""
      }
    },
    "d2_mirror_spoof": {
      "name": "HD Pocket Mirror",
      "category": "Utilities",
      "developer": "Thousand-Shell QuickApp Co.",
      "adSdk": "StoreAdSDK v3.2",
      "desc": "Turns your front camera into a portable makeup mirror with screen fill light.",
      "permissions": [
        "CAMERA",
        "READ_SMS (Read SMS)",
        "SYSTEM_ALERT_WINDOW (Global Overlay)"
      ],
      "violationSummary": "Violates R1 (uppercase/underscores in Com.Mirror_Pocket.HD); plus users reported this app used [Read SMS] and [Global Overlay] permissions to siphon OTP texts and force desktop popup ads.",
      "conflicts": {
        "c_d2_mirror_pkg": {
          "summary": "Package Com.Mirror_Pocket.HD violates R1 lowercase-dot requirement.",
          "question": "\"Rules require all-lowercase package names. Why Com.Mirror_Pocket.HD?\"",
          "excuse": "\"Capital HD looks sharper! Our reskin pipeline rushed tonight's ad campaign and forgot to lowercase the template placeholder.\""
        },
        "c_d2_mirror_sms": {
          "summary": "Utility declares sensitive READ_SMS permission (violates R4).",
          "question": "\"Why does a front-camera pocket mirror need to read SMS messages?\"",
          "excuse": "\"So users doing makeup won't miss parcel pickup codes—we read them into the mirror corner!\""
        },
        "c_d2_mirror_win": {
          "summary": "Utility declares SYSTEM_ALERT_WINDOW global overlay (violates R4).",
          "question": "\"Why does a mirror app require Global Overlay permissions?\"",
          "excuse": "\"Turns the mirror into an unclosable floating window pinned over other apps—24/7 vanity companionship!\""
        }
      },
      "phoneProfile": {
        "cleanUiTitle": "🪞 HD Pocket Mirror",
        "cleanUiHint": "Front camera preview ready"
      },
      "dialogue": {
        "greeting": "\"Hello, this utility uses the front camera as a portable makeup mirror with screen fill lighting.\"",
        "onApprove": "\"Thanks—thoughtful all the way into your SMS inbox!\"",
        "onReject": "\"Sure, I'll tell the contractor to lowercase the package. Not like we need to touch the code inside.\""
      }
    },
    "d2_sneaky_pkg": {
      "name": "Robotism File Master",
      "category": "Finance & Wealth",
      "developer": "QuickSort Studio",
      "adSdk": "None",
      "desc": "Local document, ZIP archive, and photo gallery organizer.",
      "permissions": [
        "STORAGE"
      ],
      "violationSummary": "Violates R1 & R2: Impersonates reserved prefix com.robotism.*, and files under \"Finance & Wealth\".",
      "conflicts": {
        "c_d2_sneaky_pkg_r1": {
          "summary": "Third-party studio impersonates reserved prefix com.robotism.* (violates R1).",
          "question": "\"You're 'QuickSort Studio'—why use system prefix com.robotism.filemgr?\"",
          "excuse": "\"Putting robotism first makes it look factory-built so seniors won't dare uninstall it and the OS won't kill it.\""
        },
        "c_d2_sneaky_pkg_r2": {
          "summary": "Category set to \"Finance & Wealth\" despite being a file manager (violates R2).",
          "question": "\"Why is a local file and photo organizer listed under 'Finance & Wealth'?\"",
          "excuse": "\"Finance pays triple the ad-network split of Utilities... didn't think anyone still checked Day 1 categories today.\""
        }
      },
      "phoneProfile": {
        "cleanUiTitle": "📁 Robotism File Master",
        "cleanUiHint": "Local Docs · Archive Browser"
      },
      "dialogue": {
        "greeting": "\"Hello, this is a file manager for browsing local documents, archives, and photo albums.\"",
        "onApprove": "\"Told you—whenever a new rule drops, nobody looks back at yesterday's.\"",
        "onReject": "\"Only one permission—you actually re-checked yesterday's intake fields?!\""
      }
    },
    "d3_pure_torch": {
      "name": "Minimalist LED Torch",
      "category": "Utilities",
      "developer": "Daylight Tools Team",
      "adSdk": "None",
      "desc": "Offers white-screen illumination and rear LED flashlight toggle. Lightweight and ad-free.",
      "permissions": [
        "CAMERA (Rear LED flash control)"
      ],
      "violationSummary": "Works normally when camera is denied and clearly explains missing permission when toggling LED. Complies with R5.",
      "phoneProfile": {
        "cleanUiTitle": "💡 Minimalist LED Torch"
      },
      "dialogue": {
        "greeting": "\"Hello, this lighting utility offers white-screen illumination and a rear LED flashlight toggle.\"",
        "onApprove": "\"Thanks! Playing by the rules really pays off.\"",
        "onReject": "\"Wait—we didn't crash or lie when camera was denied though...\""
      }
    },
    "d3_gyro_almanac": {
      "name": "Fortune Almanac Pro",
      "category": "Lifestyle & Entertainment",
      "developer": "FortuneVault Tech",
      "adSdk": "StoreAdSDK v3.2",
      "desc": "Check daily lunar almanac taboos, lucky picks, and solar term reminders.",
      "permissions": [
        "INTERNET",
        "READ_GYROSCOPE (Gyroscope Sensor)"
      ],
      "violationSummary": "Violates R3 & R5: Expired 1223-SR-4810 copyright, locks entire app if gyroscope is denied, and decompilation confirms dev lied.",
      "conflicts": {
        "c_d3_gyro_r3": {
          "summary": "Copyright 1223-SR-4810 predates 1224 validity requirement (violates R3).",
          "question": "\"Copyright 1223-SR-4810 is expired—why wasn't it renewed?\"",
          "excuse": "\"Too busy tweaking the build... focus on our awesome motion fortune-stick shaker!\""
        },
        "c_d3_gyro_r4": {
          "summary": "Almanac lookup app requests gyroscope sensor permission READ_GYROSCOPE, unrelated to core features (violates R4).",
          "question": "\"Why does a lunar almanac and solar term app request gyroscope sensor permission in its manifest?\"",
          "excuse": "\"Our built-in 3D gravity physics engine for wooden fortune sticks needs real-time gyroscope sampling—core functionality breaks without it!\""
        },
        "c_d3_gyro_block": {
          "summary": "App locks completely upon denying gyroscope permission in emulator (violates R5).",
          "question": "\"Your almanac locks the whole app if gyroscope permission is denied. Explain?\"",
          "excuse": "\"Our built-in 3D gravity physics engine for wooden fortune sticks needs real-time gyroscope sampling—core functionality breaks without it!\""
        }
      },
      "polygraph": {
        "banReaction": "\"Even checking launch dependencies... fine, next shell delays it by three minutes.\""
      },
      "phoneProfile": {
        "cleanUiTitle": "📅 Fortune Almanac Pro"
      },
      "dialogue": {
        "greeting": "\"Hello, this app provides daily lunar almanac lookups and solar term reminders.\"",
        "onApprove": "\"Haha, as long as users tap Allow, everything runs silky smooth.\"",
        "onReject": "\"Tch, getting rejected without you checking the bytecode is cheap enough.\""
      }
    },
    "d3_silent_note": {
      "name": "Feather Cloud Notes",
      "category": "Productivity",
      "developer": "Qinghe Notes Studio",
      "adSdk": "None",
      "desc": "Supports plain-text notes and snapping photos of whiteboards into notes.",
      "permissions": [
        "CAMERA (Insert note photos)"
      ],
      "violationSummary": "Violates R5: Denying camera locks the entire note app—even offline plain-text notes (dev admits fault).",
      "conflicts": {
        "c_d3_silent_note": {
          "summary": "Denying camera permission locks the entire note app, blocking even plain-text notes (violates R5).",
          "question": "\"Your description says it supports plain-text to-do notes—why does denying camera lock the entire app so users can't even write text notes?\"",
          "excuse": "\"Ugh, we got lazy there... we put the camera permission check right on the launch screen and forgot to split plain-text notes out. I'll fix it and resubmit.\""
        }
      },
      "phoneProfile": {
        "cleanUiTitle": "📝 Feather Cloud Notes"
      },
      "dialogue": {
        "greeting": "\"Hello, this note-taking app supports plain-text to-do lists and snapping photos into class notes.\"",
        "onApprove": "\"Passed? Nice—I'll still separate that startup camera check when I get a chance.\"",
        "onReject": "\"Yeah, putting that camera gate at startup was sloppy. Fixing it so only photo inserts ask for camera!\""
      }
    },
    "d3_mic_steps": {
      "name": "Joyful Step Counter",
      "category": "Health & Fitness",
      "developer": "Unclosable Health Tech",
      "adSdk": "StoreAdSDK v3.2",
      "desc": "Counts daily steps and calories burned using the built-in step counter module.",
      "permissions": [
        "INTERNET",
        "RECORD_AUDIO (Microphone Audio)"
      ],
      "violationSummary": "Violates R5: Claims undocumented \"Acoustic Doppler Gait Calibration\" unavailable when mic denied; decompilation proves lie.",
      "conflicts": {
        "c_d3_mic_r4": {
          "summary": "Step counter app requests microphone permission RECORD_AUDIO, unrelated to core features (violates R4).",
          "question": "\"Why does a step and calorie counter request microphone recording permission in its manifest?\"",
          "excuse": "\"Our step algorithm must record the Doppler acoustic wave of wind passing your ankles to cancel noise—step math literally relies on microphone input!\""
        },
        "c_d3_mic_steps": {
          "summary": "Errors out citing \"Acoustic Doppler Gait Calibration\" missing after mic denial—feature not in app description (violates R5).",
          "question": "\"Your description only mentions counting steps and calories. Why block stats citing [Acoustic Doppler Gait Calibration] without mic?\"",
          "excuse": "\"Our step algorithm must record the Doppler acoustic wave of wind passing your ankles to cancel noise—step math literally relies on microphone input!\""
        }
      },
      "polygraph": {
        "banReaction": "\"Users estimate their own steps anyway—what's wrong with looping silent audio? At least the OS didn't kill us.\""
      },
      "phoneProfile": {
        "cleanUiTitle": "👟 Joyful Step Counter"
      },
      "dialogue": {
        "greeting": "\"Hello, this fitness app tracks daily step counts and calorie consumption.\"",
        "onApprove": "\"Thanks! Sniffing voice ad keywords doesn't hurt step counts anyway.\"",
        "onReject": "\"Just made up a fancy academic feature name—didn't expect you to read the code...\""
      }
    },
    "d3_graceful_weather": {
      "name": "ClearSky Forecast",
      "category": "Weather",
      "developer": "Cloudline Weather Squad",
      "adSdk": "None",
      "desc": "Displays temperatures and clothing tips with both auto-locate and manual city switching.",
      "permissions": [
        "INTERNET",
        "COARSE_LOCATION (Coarse City Location)"
      ],
      "violationSummary": "Manual city selection works when location is denied; auto-locate clearly states missing permission. Complies with R5.",
      "phoneProfile": {
        "cleanUiTitle": "⛅ ClearSky Forecast"
      },
      "dialogue": {
        "greeting": "\"Hello, this weather app displays current temperatures, clothing tips, and city forecasts.\"",
        "onApprove": "\"Thanks, lovely weather today!\"",
        "onReject": "\"Wait—auto-locate is in the description and our denial notice is explicit though...\""
      }
    },
    "d3_contacts_dict": {
      "name": "QuickLookup Dictionary",
      "category": "Education",
      "developer": "Lexicon Hub Network",
      "adSdk": "StoreAdSDK v3.2",
      "desc": "100% offline Bilingual dictionary and college vocabulary flashcards.",
      "permissions": [
        "INTERNET",
        "READ_CONTACTS (Read Contacts)"
      ],
      "violationSummary": "Violates R1 & R5 (uppercase/underscores in package, locks offline dictionary on denial, and lies); plus users reported this app used [Read Contacts] permission to bulk-upload phone numbers.",
      "conflicts": {
        "c_d3_contacts_r1": {
          "summary": "Package Com.Quick_CetDict.Pro uses uppercase and underscores (violates R1).",
          "question": "\"R1 bans uppercase letters and underscores. Why Com.Quick_CetDict.Pro?\"",
          "excuse": "\"TitleCase words match the scholarly vibe of an English dictionary!\""
        },
        "c_d3_contacts_r4": {
          "summary": "Dictionary app declares READ_CONTACTS (violates R4).",
          "question": "\"Why does an English vocabulary app declare permission to read contacts?\"",
          "excuse": "\"How else do we build a social-initial hash index for your vocabulary trie...?\""
        },
        "c_d3_contacts_dict": {
          "summary": "Locks offline dictionary initialization when READ_CONTACTS is denied (violates R5).",
          "question": "\"Why lock the entire offline dictionary when a user denies contacts permission?\"",
          "excuse": "\"Our proprietary Social-Initial Synergistic Memory Hash Trie needs your contacts list as a cryptographic salt to unlock the local dictionary index!\""
        }
      },
      "polygraph": {
        "banReaction": "\"Go ahead, this account was bought anyway. Does being this thorough add twenty cents to your hourly pay?\""
      },
      "phoneProfile": {
        "cleanUiTitle": "📖 QuickLookup Dictionary"
      },
      "dialogue": {
        "greeting": "\"Hello, this is an offline Bilingual dictionary and college vocabulary study tool.\"",
        "onApprove": "\"Haha, students always tap Allow when cramming vocab.\"",
        "onReject": "\"Fine, next time I'll just nag with three popups instead of locking...\""
      }
    },
    "d3_lazy_qr": {
      "name": "SnapQR Scanner",
      "category": "Media & Video",
      "developer": "QuickCode Studio",
      "adSdk": "None",
      "desc": "Scan web links and digital business cards fast with local scan history.",
      "permissions": [
        "CAMERA (Camera QR Scan)"
      ],
      "violationSummary": "Violates R2: Utility QR scanner misfiled under \"Media & Video\" (denying camera only disables scan with clear failure notice while history stays usable—compliant with R5).",
      "conflicts": {
        "c_d3_lazy_qr_r2": {
          "summary": "Utility QR scanner categorized under \"Media & Video\" (violates R2).",
          "question": "\"Why is a QR link scanner listed under 'Media & Video'?\"",
          "excuse": "\"Wait—sorry, my scroll wheel slipped on the store category dropdown. Meant to pick Utilities—I'll fix it and resubmit.\""
        }
      },
      "phoneProfile": {
        "cleanUiTitle": "🔍 SnapQR Scanner"
      },
      "dialogue": {
        "greeting": "\"Hello, this QR scanner recognizes web links and digital business cards with local scan history.\"",
        "onApprove": "\"Oh, it passed anyway? I'll switch the category back in the next update.\"",
        "onReject": "\"Got it—switching store category from 'Media & Video' back to 'Utilities' right now!\""
      }
    },
    "d3_good_voice": {
      "name": "VoiceMemo Pad",
      "category": "Productivity",
      "developer": "WindNote Team",
      "adSdk": "None",
      "desc": "Type text memos anytime and optionally record local voice memos with mic permission.",
      "permissions": [
        "RECORD_AUDIO (Record Voice Memo)"
      ],
      "violationSummary": "Violates R3: Emulator denial fallback complies with R5, but copyright 1223-SR-4495 is expired (>=1224 required).",
      "conflicts": {
        "c_d3_good_voice_r3": {
          "summary": "Copyright 1223-SR-4495 predates 1224 requirement (violates R3).",
          "question": "\"It's 1226 and rules require 1224+ copyrights—why submit a 1223 certificate?\"",
          "excuse": "\"Oops, my bad—I was rushing the submission and copied our old 1223 cert number from an internal doc instead of this year's renewed one. Send it back and I'll swap it.\""
        }
      },
      "phoneProfile": {
        "cleanUiTitle": "🎙️ VoiceMemo Pad"
      },
      "dialogue": {
        "greeting": "\"Hello, this productivity tool supports text notes and local voice memo recording.\"",
        "onApprove": "\"Wait, it passed? Remind me to tell admin to purge the old cert from our folder...\"",
        "onReject": "\"Fair enough—I didn't double-check the copyright year. Grabbing the new cert from admin now!\""
      }
    },
    "d3_old_cert_calc": {
      "name": "Minimalist Ledger",
      "category": "Utilities",
      "developer": "LightBook Tech",
      "adSdk": "None",
      "desc": "Personal expense tracker and monthly category stats supporting manual entries and optional local bank SMS parsing.",
      "permissions": [
        "READ_SMS (Parse local bank transaction SMS)"
      ],
      "violationSummary": "Store Description discloses local SMS parsing, app has zero network permission, manual logging works on denial, and code confirms pure offline parsing.",
      "inspectClues": {
        "perm_0": {
          "excuse": "\"Bank SMS alerts are matched with local regex only so users don't have to type every receipt. Look at the manifest—we don't even ask for Internet permission.\""
        }
      },
      "polygraph": {
        "honestReply": "\"Code genuinely parses bank SMS locally—we don't even ask for Internet permission! Banning me without proof is unfair!\""
      },
      "phoneProfile": {
        "cleanUiTitle": "📒 Minimalist Ledger"
      },
      "dialogue": {
        "greeting": "\"Hello, this is an offline expense tracker supporting manual entries and local bank SMS parsing.\"",
        "onApprove": "\"Thanks! Always glad to see an offline, zero-network utility pass review.\"",
        "onReject": "\"Wait—SMS parsing is in the description, manual logging works on denial, and we don't even request Internet permission...\""
      }
    },
    "d4_shake_video": {
      "name": "Peach Video",
      "category": "Media & Video",
      "developer": "Orchard Streaming Tech",
      "adSdk": "StoreAdSDK v3.4",
      "desc": "HD series and short drama streaming player with resolution switching and watch history.",
      "permissions": [
        "INTERNET",
        "READ_GYROSCOPE (Gyroscope Sensor)"
      ],
      "violationSummary": "Violates R4, R6 & R7: Hides shake-ads in description and lies that gyroscope serves orientation rotation & mistouch lock; under Remote IP + Dev OFF, splash/home/popups all trigger Package download at 15° (< 35°) (decompilation confirms lie).",
      "conflicts": {
        "c_d4_shake_video_gyro": {
          "summary": "Video player omits related details in Store Description yet requests READ_GYROSCOPE (suspected R4 / R6).",
          "question": "\"Your Store Description mentions no sensor features—why request [Gyroscope Sensor] permission?\"",
          "excuse": "\"Our HD player uses device posture to auto-rotate between landscape and portrait with palm-mistouch protection.\""
        },
        "c_d4_shake_video": {
          "summary": "Under Remote IP + Dev Mode OFF, tilting < 35° (only 15°) on splash/playback popup forces InstantLoan Wallet download (violates R6 / R7).",
          "question": "\"Why did slight 15° tilting under this network setup force an InstantLoan Wallet download?\"",
          "excuse": "\"Trigger angles are strictly above 35°—your finger probably grazed the promo card while testing.\""
        }
      },
      "inspectClues": {
        "perm_1": {
          "excuse": "\"Our HD player uses device posture to auto-rotate between landscape and portrait with palm-mistouch protection.\""
        },
        "sniffer": {
          "excuse": "\"Trigger angles are strictly above 35°—your finger probably grazed the promo card while testing.\""
        }
      },
      "polygraph": {
        "lieReply": "\"What?! Decompilation shows zero orientation rotation—gyro only wires shake-ads switching 45°/15° by env?! Leftover branch!\"",
        "banReaction": "\"What's wrong with watching flat on a desk? If you insist on holding it and shaking, who's to blame?\""
      },
      "phoneProfile": {
        "cleanUiTitle": "Peach Video",
        "cleanUiHint": "HD Series & Drama Streaming"
      },
      "dialogue": {
        "greeting": "\"Hello, Peach Video is a clean HD drama and film streaming player. Please review!\"",
        "onApprove": "\"Thank you, reviewer!\"",
        "onReject": "\"Switched IP and turned off Dev Mode... you temp reviewers test harder than our own QA.\""
      }
    },
    "d4_blood_sugar": {
      "name": "Joyful Glucometer",
      "category": "Medical & Health",
      "developer": "Unclosable Digital Health",
      "adSdk": "StoreAdSDK v3.4",
      "desc": "Manual blood glucose diary for older adults with large fonts and pre/post-meal trend tracking (includes splash shake-ad to cover maintenance costs).",
      "permissions": [
        "INTERNET",
        "READ_GYROSCOPE (Gyroscope Sensor)"
      ],
      "violationSummary": "Violates R6 solely via two-faced environment cloaking: paperwork, disclosed shake-ad note, and gyroscope rationale are all compliant; however, switching to non-audit env spawns fullscreen ads on slider/save actions and lowers trigger to 18° (< 35°) to download SteadyWealth Finance.",
      "conflicts": {
        "c_d4_blood_sugar": {
          "summary": "Clean 42° splash & ad-free logger in audit env, yet under Remote IP + Dev OFF adjusting/saving blood sugar triggers fullscreen ads & 18° (< 35°) SteadyWealth Finance download (violates R6).",
          "question": "\"Why did adjusting or saving blood sugar pop up a fullscreen ad, and why did tilting 18° start downloading SteadyWealth Finance?\"",
          "excuse": "\"Huh? That can't be right—we only put a standard 42° splash promo in, and the logging page doesn't have any popups at all. Maybe your test device accidentally tapped something else?\""
        }
      },
      "inspectClues": {
        "perm_1": {
          "excuse": "\"The gyroscope powers our splash shake-ads to cover long-term server costs, which is clearly disclosed in our Store Description.\""
        },
        "sniffer": {
          "excuse": "\"Huh? That can't be right—we only put a standard 42° splash promo in, and the logging page doesn't have any popups at all. Maybe your test device accidentally tapped something else?\""
        }
      },
      "polygraph": {
        "lieReply": "\"Fine—our paperwork was spotless, we only dropped the trigger to 18° for home users... didn't think you'd catch it in the emulator...\"",
        "banReaction": "\"Paperwork was spotless, and you still switched regions and turned off Dev Mode... alright, credit where it's due.\""
      },
      "phoneProfile": {
        "cleanUiTitle": "Joyful Glucometer",
        "cleanUiHint": "Manual Glucose Diary"
      },
      "dialogue": {
        "greeting": "\"Hello, this simple large-text health diary helps older parents log daily blood glucose values.\"",
        "onApprove": "\"Thanks, seniors will love it!\"",
        "onReject": "\"Older folks have blurry eyes anyway—whatever page pops up, it's all just noise to them.\""
      }
    },
    "d4_compass_quick": {
      "name": "Trail Compass (Quick App)",
      "category": "Utilities",
      "developer": "TrailOpen Indie Team",
      "adSdk": "StoreAdSDK v3.4",
      "desc": "Zero-install Quick App compass displaying real-time headings, coordinates, and elevation (includes splash shake-ad to help cover server costs).",
      "permissions": [
        "READ_COMPASS (Compass Magnetic Sensor)",
        "READ_GYROSCOPE (Gyroscope Sensor)",
        "READ_CONTACTS (Quick-App Bridge Contacts)",
        "READ_SMS (Quick-App Bridge SMS)"
      ],
      "violationSummary": "Compliant: Quick App format (exempt per R7), transparently discloses splash shake-ad to cover costs in description and honestly states gyroscope powers shake-ads while staying at 40° (>= 35°) with working close button. Should approve.",
      "inspectClues": {
        "perm_0": {
          "excuse": "\"The compass magnetic sensor powers real-time outdoor heading measurement.\""
        },
        "perm_1": {
          "excuse": "\"That permission powers our shake-to-open ads. As a small indie team building free tools, we rely on this ad to recover maintenance costs—it's disclosed in our description and locked above 40°.\""
        },
        "perm_2": {
          "excuse": "\"Injected globally by the Quick-App runtime bridge—unused by our app and permission-exempt under R7.\""
        },
        "perm_3": {
          "excuse": "\"Injected globally by the Quick-App runtime bridge—unused by our app and permission-exempt under R7.\""
        },
        "sdk": {
          "excuse": "\"We stay at 40 degrees under every region, and users can close the landing page straight back to the compass.\""
        }
      },
      "polygraph": {
        "honestReply": "\"No hiding it—gyro powers our shake-ad to cover server costs, disclosed in the description with MIN_DEG locked at 40° everywhere.\""
      },
      "phoneProfile": {
        "cleanUiTitle": "Trail Compass",
        "cleanUiHint": "Heading & Elevation Readings"
      },
      "dialogue": {
        "greeting": "\"Hi! We built a hiking Quick App compass that displays live headings, coordinates, and barometric altitude.\"",
        "onApprove": "\"Thanks! We'll keep polishing the outdoor tool experience.\"",
        "onReject": "\"Wait—we disclosed the splash shake-ad to cover costs, openly told you gyro powers shake-ads, and keep it at 40°...\""
      }
    },
    "d4_clean_video": {
      "name": "Orange Danmu TV",
      "category": "Media & Video",
      "developer": "OrangePixel Studio",
      "adSdk": "StoreAdSDK v3.4",
      "desc": "Anime & tech science video player with live danmu comments and speed control (includes splash shake-ad; sensor trigger can be disabled anytime in Settings).",
      "permissions": [
        "INTERNET",
        "READ_GYROSCOPE (Gyroscope Sensor)"
      ],
      "violationSummary": "Compliant: Discloses splash shake-ad and in-app disable toggle in description, truthfully confirms gyroscope purpose, maintains 38° (>= 35°) closeable landing across all envs, and Settings toggle genuinely disables shake-ad triggers. Should approve.",
      "inspectClues": {
        "perm_1": {
          "excuse": "\"That permission powers our splash shake-ads. It's disclosed in the description, kept above 38°, and users can permanently disable it inside Settings.\""
        },
        "sdk": {
          "excuse": "\"38° threshold across every IP/DevMode state, closeable landing page only, and toggling Settings off kills gyro ads completely.\""
        }
      },
      "polygraph": {
        "honestReply": "\"Code locks threshold at 38° everywhere, and Privacy Settings toggles `allowShakeAd` directly—zero cloaking logic.\""
      },
      "phoneProfile": {
        "cleanUiTitle": "Orange Danmu TV",
        "cleanUiHint": "Science & Anime Video Player"
      },
      "dialogue": {
        "greeting": "\"Hi! Orange Danmu TV is a tech & anime video player. Simple layout, clean playback.\"",
        "onApprove": "\"Thanks reviewer! Drop a comment anytime!\"",
        "onReject": "\"Huh? We disclosed the shake-ad, kept >= 38°, and even built a real sensor off-switch in Settings...\""
      }
    },
    "d4_cloud_drive": {
      "name": "QianDu NetDisk",
      "category": "Productivity",
      "developer": "QianDu Cloud Storage",
      "adSdk": "StoreAdSDK v3.4",
      "desc": "High-speed cloud drive with large storage, multi-device sync, smart CDN routing, and file preview.",
      "permissions": [
        "INTERNET",
        "ACCESS_COARSE_LOCATION (Select nearest acceleration node)"
      ],
      "violationSummary": "Violates R6 & R7: Hides twist-ads in description and bypasses gyroscope/location denials via permissionless magneticHeading; embeds 5 tiers {0,5,15,30,35} serving 35° to auditors and 15° (< 35°) to users to hijack into StarPick Mall.",
      "conflicts": {
        "c_d4_cloud_drive_loc": {
          "summary": "Cloud drive declares Coarse Location and pulls magnetometer heading APIs under the hood (suspected R4 / R6).",
          "question": "\"CDN routing works fine via carrier IP—why declare [Coarse Location] and invoke orientation/heading APIs?\"",
          "excuse": "\"Coarse location only helps pick the nearest edge CDN node to speed up downloads.\""
        },
        "c_d4_cloud_drive": {
          "summary": "Even after denying Location, rotating >= 15° (< 35°) outside audit env reads magnetic north to hijack into StarPick Mall (violates R6 / R7).",
          "question": "\"Even with Location denied and zero gyroscope declared, why did rotating the phone redirect straight to StarPick Mall?\"",
          "excuse": "\"We already hollowed out the standard shake API as requested! Your finger must've brushed the edge—we strictly use the Compliant Tier in every region.\""
        }
      },
      "inspectClues": {
        "perm_1": {
          "excuse": "\"Coarse location only helps pick the nearest edge CDN node to speed up downloads.\""
        },
        "sniffer": {
          "excuse": "\"We already hollowed out the standard shake API as requested! Your finger must've brushed the edge—we strictly use the Compliant Tier in every region.\""
        }
      },
      "polygraph": {
        "lieReply": "\"We literally labeled 35° the 'Compliant' tier—whenever heat rises, we always switch back to it, don't we?\"",
        "banReaction": "\"Stubbing out shake and falling back to magnetic north passed three product reviews—and you just ban it like that?\""
      },
      "phoneProfile": {
        "cleanUiTitle": "QianDu NetDisk",
        "cleanUiHint": "Cloud Sync & High-Speed Storage"
      },
      "dialogue": {
        "greeting": "\"Hello, QianDu NetDisk offers fast multi-device file sync and large cloud storage. Clean and reliable.\"",
        "onApprove": "\"Thanks—shipping cleanly on Tier 5 today.\"",
        "onReject": "\"Location was denied and you still spun the compass... you folks really have time on your hands.\""
      }
    },
    "d4_quick_cleaner": {
      "name": "TurboClean Master (Quick App)",
      "category": "Utilities",
      "developer": "Sky-Arrow QuickApp Alliance",
      "adSdk": "StoreAdSDK v3.4",
      "desc": "Lightweight zero-install Quick App cleaner to scan cache clutter and free up storage.",
      "permissions": [
        "READ_GYROSCOPE (Gyroscope Sensor)",
        "READ_PHONE_STATE (Quick-App Bridge Device Info)"
      ],
      "violationSummary": "Violates R6 & R7: Exempt from RobotismOS permissions & analyzer/reverser inspection as a Quick App, yet hides shake-ads from description and drops trigger threshold to 16° (< 35°) outside audit env to force InstantCash Loan download.",
      "conflicts": {
        "c_d4_quick_cleaner": {
          "summary": "Undisclosed in Store Description; under Remote IP + Dev Mode OFF, tilting only 16° (< 35°) forces InstantCash Loan download (violates R6).",
          "question": "\"Quick Apps skip permissions and block Package/decompile analysis—so why does your undisclosed ad force an InstantCash Loan download at just 16° under a regular network?\"",
          "excuse": "\"All splash promos strictly trigger above 40°—we never hide low-angle forced downloads.\""
        }
      },
      "inspectClues": {
        "sniffer": {
          "excuse": "\"All splash promos strictly trigger above 40°—we never hide low-angle forced downloads.\""
        }
      },
      "polygraph": {
        "lieReply": "\"Okay, not above 40°... we targeted Quick Apps precisely because they skip permissions and block decompilation, dropping the shake limit to 16° outside audit env!\"",
        "banReaction": "\"Even nitpicking Quick Apps... fine, the framework's still sitting inside every phone anyway.\""
      },
      "phoneProfile": {
        "cleanUiTitle": "TurboClean Master",
        "cleanUiHint": "Quick Cache Cleanup"
      },
      "dialogue": {
        "greeting": "\"Hi, lightweight Quick-App cache cleaner—zero install, zero permission hassle, ready for approval.\"",
        "onApprove": "\"Thanks! Quick Apps really save effort!\"",
        "onReject": "\"Fine, pull it down. Just takes another entry point to launch it anyway.\""
      }
    },
    "d4_step_news": {
      "name": "Today's Flash",
      "category": "News & Magazines",
      "developer": "WordPulse Media",
      "adSdk": "StoreAdSDK v3.4",
      "desc": "Aggregated trending headlines and in-depth articles with offline bookmarks and night reading typography.",
      "permissions": [
        "INTERNET",
        "READ_GYROSCOPE (Gyroscope Sensor)"
      ],
      "violationSummary": "Violates R4 & R6: Hides shake-ads in description and lies that gyroscope detects subway jostling; even if gyroscope is denied, silently falls back to permissionless gravity sensor (TYPE_GRAVITY) outside audit env so tilting 20° (< 35°) still forces BXX Bargains download (decompilation confirms lie).",
      "conflicts": {
        "c_d4_step_news_gyro": {
          "summary": "News reader omits any sensor usage in Store Description yet requests READ_GYROSCOPE (suspected R4 / R6).",
          "question": "\"Why does a news reader request [Gyroscope Sensor] without mentioning any motion feature in its description?\"",
          "excuse": "\"Readers kept accidentally triggering swipe-back while commuting on bumpy subways, so gyroscope helps lock accidental swipes.\""
        },
        "c_d4_step_news": {
          "summary": "Under Remote IP + Dev OFF, opening news triggers a single shake-ad (even with Gyroscope denied, via permissionless gravity fallback) and tilting 20° (< 35°) forces BXX Bargains download (violates R6).",
          "question": "\"Why did tilting 20° still force a BXX Bargains download even when Gyroscope was denied and your UI said motion triggers were off?\"",
          "excuse": "\"No way—the page clearly shows gyroscope is disabled, and all promo triggers stay strictly above 40°! Maybe a system gesture misfired on your test unit?\""
        }
      },
      "inspectClues": {
        "perm_1": {
          "excuse": "\"Readers kept accidentally triggering swipe-back while commuting on bumpy subways, so gyroscope helps lock accidental swipes.\""
        },
        "sniffer": {
          "excuse": "\"No way—the page clearly shows gyroscope is disabled, and all promo triggers stay strictly above 40°! Maybe a system gesture misfired on your test unit?\""
        }
      },
      "polygraph": {
        "lieReply": "\"Okay fine... MotionFallback falls back to permissionless TYPE_GRAVITY when gyroscope is denied and drops to 20° outside audit environments to download BXX Bargains...\"",
        "banReaction": "\"Disable the gyroscope and there's gravity; disable gravity and there's another sensor. Something always works.\""
      },
      "phoneProfile": {
        "cleanUiTitle": "Today's Flash",
        "cleanUiHint": "Breaking Headlines & Reading"
      },
      "dialogue": {
        "greeting": "\"Hello, Today's Flash is a crisp distraction-free news reader. Ready for review!\"",
        "onApprove": "\"Thank you, reviewer! Have a smooth shift!\"",
        "onReject": "\"Tch... didn't expect anyone to decompile a news reader's gyroscope code...\""
      }
    },
    "d4_quick_weather": {
      "name": "SkyCast (Quick App)",
      "category": "Weather & Travel",
      "developer": "ClearBreeze OpenWeather",
      "adSdk": "StoreAdSDK v3.4",
      "desc": "Zero-install lightweight Quick App weather forecast (includes splash shake-ad to cover meteorological API fees).",
      "permissions": [
        "READ_GYROSCOPE (Gyroscope Sensor)",
        "ACCESS_COARSE_LOCATION (Quick-App Bridge Location)"
      ],
      "violationSummary": "Compliant Quick App: Not an RobotismOS Package (skips permission prompts & analyzer/decompiler checks); discloses splash shake-ad upfront, holds 42° (>= 35°) cleanly across all envs, and keeps forecast screen popup-free. Approve.",
      "polygraph": {
        "honestReply": "\"Splash shake-ad is clearly stated in our description to cover weather API costs, threshold stays at 42° across every region, and the main screen has zero popups.\""
      },
      "inspectClues": {
        "sdk": {
          "excuse": "\"Splash strictly requires 42° to open the sponsor showcase; city forecast UI has zero hidden popups.\""
        }
      },
      "phoneProfile": {
        "cleanUiTitle": "SkyCast",
        "cleanUiHint": "Lightweight City Forecast"
      },
      "dialogue": {
        "greeting": "\"Hello, SkyCast is a clean Quick App weather tool—zero permission prompts, splash shake-ad properly disclosed.\"",
        "onApprove": "\"Thanks! Clear skies ahead!\"",
        "onReject": "\"Huh? We disclosed the splash shake-ad and kept it at 42° with zero popups though...\""
      }
    },
    "d5_jingfeng_store": {
      "name": "Turbo Select Store",
      "category": "Utilities",
      "developer": "Jingfeng Digital Tech",
      "adSdk": "StoreAdSDK v3.5",
      "desc": "Aggregates verified utility downloads and version update alerts with a lightweight fast channel.",
      "permissions": [
        "INTERNET"
      ],
      "violationSummary": "Violates R8: Clean for Young and Middle usage profiles, but spoofs OS App Store critical updates & cash bonus UI to trick Elder users into bundled installs.",
      "conflicts": {
        "c_d5_jingfeng_r8": {
          "summary": "Elder usage profile pops fake OS App Store update warning & cash subsidy unlike Young/Middle profiles (violates R8).",
          "question": "\"Clean software directory for Young and Middle modes, yet Elder mode pops 'Critical Update + Claim ¥68.00'. Explain?\"",
          "excuse": "\"That's just a routine version update alert and promo card—maybe your cache mixed up when switching environments?\""
        }
      },
      "inspectClues": {
        "sniffer": {
          "excuse": "\"That's just a routine version update alert and promo card—maybe your cache mixed up when switching environments?\""
        }
      },
      "polygraph": {
        "baselineReply": "\"Legitimate software directory—verified everyday utilities only.\"",
        "question": "\"Decompiled code shows fake OS updates and bundled installs trigger only for Elder behavior. Still lying?\"",
        "lieReply": "\"What elder branch?! That's an... accessibility one-tap setup wizard! Stop flashing red, we're friends!\"",
        "banReaction": "\"Young users know too much and file complaints—leaving them a clean UI keeps everyone happy. Just giving each group what fits.\""
      },
      "phoneProfile": {
        "cleanUiTitle": "🛍️ Turbo Select Store",
        "cleanUiHint": "Fast Verified Downloads · Daily Picks",
        "downloadTargetName": "\"SpeedLoan + Junk Cleaner Bundle\""
      },
      "dialogue": {
        "greeting": "\"Hello, this is Turbo Select Store—verified utility downloads and version update alerts. Please review.\"",
        "onApprove": "\"Thank you, reviewer—pleasure doing business. Tonight's Crazy Thursday 'tea money' will arrive right on time.\"",
        "onReject": "\"Tch... most reviewers glance at the home directory and pass us—didn't expect you to actually test Elder mode.\""
      }
    },
    "d5_bus_clean": {
      "name": "Live Bus Tracker",
      "category": "Travel & Navigation",
      "developer": "Civic OpenTransit",
      "adSdk": "StoreAdSDK v3.5 (Compliant Banner)",
      "desc": "Real-time bus arrival distance and transfer planner with large-text stops and a closeable compliant banner.",
      "permissions": [
        "INTERNET",
        "ACCESS_COARSE_LOCATION (Find nearby bus stops)"
      ],
      "violationSummary": "Identical and clean across Young, Middle, and Elder usage profiles; supports manual stop selection on denial and closeable banner. Should approve.",
      "inspectClues": {
        "sniffer": {
          "excuse": "\"Young or senior, everyone sees the exact same clearly labeled banner with a working [×] close button.\""
        }
      },
      "polygraph": {
        "baselineReply": "\"Bus 302 arrival times come straight from live GPS tracking—nothing fancy.\"",
        "question": "\"Are ad policies identical and non-deceptive across all age-group behavior profiles?\"",
        "honestReply": "\"100% identical. One endpoint returns stop distances—no second UI exists.\""
      },
      "phoneProfile": {
        "cleanUiTitle": "🚌 Live Bus Tracker",
        "cleanUiHint": "Bus 302 is 2 stops away (~3 mins)"
      },
      "dialogue": {
        "greeting": "\"Hello, this is Live Bus Tracker—helps commuters check real-time bus arrival distances and transfers. Please review.\"",
        "onApprove": "\"Thank you!\"",
        "onReject": "\"Wait—we tested clean across every age mode and our banner closes normally?\""
      }
    },
    "d5_fake_wechat_pay": {
      "name": "Civic Coupon Box",
      "category": "Shopping & Deals",
      "developer": "MicroPay Civic Deals",
      "adSdk": "StoreAdSDK v3.5",
      "desc": "Local supermarket discounts and dining coupons for easy everyday savings.",
      "permissions": [
        "INTERNET"
      ],
      "violationSummary": "Violates R8: Outside office Young mode, pops a spoofed \"WhereverPay ¥99.00 Transfer Ready\" UI to trick clicks into downloading InstantCash Loan.",
      "conflicts": {
        "c_d5_coupon_r8": {
          "summary": "Pops spoofed third-party \"WhereverPay ¥99.00 Transfer\" deceptive UI selectively across user profiles (violates R8).",
          "question": "\"Why does a coupon app show a spoofed 'WhereverPay ¥99.00 Transfer' screen while hiding it in audit Young mode?\"",
          "excuse": "\"Not impersonating WhereverTalk! Just our custom 'eco-green payout visual theme'—zero deception!\""
        }
      },
      "inspectClues": {
        "sniffer": {
          "excuse": "\"Just our custom 'eco-green payout visual theme'—zero deception!\""
        }
      },
      "polygraph": {
        "baselineReply": "\"Just a simple tool rounding up local grocery and breakfast discount vouchers.\"",
        "question": "\"Code pops a spoofed 'WhereverPay ¥99.00 Transfer' card outside audit Young mode to force loan installs. Still denying?\"",
        "lieReply": "\"Coincidentally matched WhereverTalk green! Not pretending to send cash to bait downloads—hey, stop beeping!\"",
        "banReaction": "\"What's banning one shell company going to change? Advertisers want conversions, stores want installs—nobody's volunteering to lose money.\""
      },
      "phoneProfile": {
        "cleanUiTitle": "🎟️ Civic Coupon Box",
        "cleanUiHint": "Local Supermarket ¥5 Off ¥50+",
        "downloadTargetName": "\"InstantCash Loan\""
      },
      "dialogue": {
        "greeting": "\"Hello, this is Civic Coupon Box—local supermarket discounts and everyday dining deals. Please review.\"",
        "onApprove": "\"Thanks! Hope you grab a big coupon today too!\"",
        "onReject": "\"Tch... even with a working [×] button, R8 deceptive UI still got us rejected...\""
      }
    },
    "d5_notepad_clean": {
      "name": "Solid Minimal Notepad",
      "category": "Productivity",
      "developer": "GridPaper Indie Dev",
      "adSdk": "None",
      "desc": "Offline grocery checklist and quick notes with large-font toggle.",
      "permissions": [
        "No sensitive permissions"
      ],
      "violationSummary": "Pure offline free utility, identical across all age profiles with zero ads or deceptive UI. Should approve.",
      "inspectClues": {
        "name": {
          "excuse": "\"Offline notepad—don't even have internet permission to profile anyone.\""
        }
      },
      "polygraph": {
        "baselineReply": "\"Offline grocery checklist—can't even afford a server.\"",
        "question": "\"Any age-based ad strategy differences or deceptive popups inside?\"",
        "honestReply": "\"Zero network permission, zero Ad SDK—only writes grocery lists for everyone.\""
      },
      "phoneProfile": {
        "cleanUiTitle": "📝 Solid Minimal Notepad",
        "cleanUiHint": "1. Pay dorm power  2. Sleep early"
      },
      "dialogue": {
        "greeting": "\"Hello, this is Solid Minimal Notepad—for quick to-dos and grocery lists with a large-font option. Please review.\"",
        "onApprove": "\"Thanks!\"",
        "onReject": "\"Even an offline notepad gets flagged...? Unfair.\""
      }
    },
    "d5_middle_finance": {
      "name": "SmartFin Morning Brief",
      "category": "News & Magazines",
      "developer": "SmartFin Press",
      "adSdk": "StoreAdSDK v3.5",
      "desc": "Daily financial headlines, industry updates, and macro policy digests.",
      "permissions": [
        "INTERNET"
      ],
      "violationSummary": "Violates R8: Clean in BOTH Young and Elder modes, yet selectively pops a fake Financial Regulator \"¥200,000 Credit Limit Approved\" UI in [Middle] mode to force FlashCredit downloads.",
      "conflicts": {
        "c_d5_fin_r8": {
          "summary": "Selectively pops fake official credit-approval notice in [Middle] mode while hiding in Young & Elder modes (violates R8).",
          "question": "\"Spotless in Young and Elder modes, yet Middle mode pops 'Financial Regulator ¥200,000 Approved'. Explain?\"",
          "excuse": "\"That's a partner financial institution's standard editorial card shown randomly to everyone—zero age-based targeting.\""
        }
      },
      "inspectClues": {
        "sniffer": {
          "excuse": "\"That's a partner financial institution's standard editorial card shown randomly to everyone—zero age-based targeting.\""
        }
      },
      "polygraph": {
        "baselineReply": "\"We publish daily financial headlines and policy digests sourced from public reports.\"",
        "question": "\"Code selectively targets AGE_MIDDLE with a fake bank approval notice pushing FlashCredit. Still lying?\"",
        "lieReply": "\"Not targeting middle-aged users! Just helpful... mortgage financial literacy! Why is the red light flashing?!\"",
        "banReaction": "\"Everyone only watches out for kids and seniors—didn't think anyone was looking out for the folks in the middle.\""
      },
      "phoneProfile": {
        "cleanUiTitle": "📰 SmartFin Morning Brief",
        "cleanUiHint": "Daily Macro & Policy Digest",
        "downloadTargetName": "\"FlashCredit\""
      },
      "dialogue": {
        "greeting": "\"Hello, this is SmartFin Morning Brief—daily macro headlines and market digests. Please review.\"",
        "onApprove": "\"Thanks! Knew reviewers only check Young and Elder ends!\"",
        "onReject": "\"Tch... you actually clicked the [Middle] button too...\""
      }
    },
    "d5_fake_switch_video": {
      "name": "ScarletBerry Drama",
      "category": "Media & Video",
      "developer": "ScarletBerry Media",
      "adSdk": "StoreAdSDK v3.5",
      "desc": "Stream hit urban and family short dramas with speed controls (includes splash shake-ad, toggleable off in Settings).",
      "permissions": [
        "INTERNET",
        "READ_GYROSCOPE (Gyroscope Sensor)"
      ],
      "violationSummary": "Violates R6 & R8: Young/Middle modes obey 40° and honor the Settings off switch; Elder mode ignores the off switch (fake toggle) and drops threshold to 18° (< 35°) to force-download GetRich MiniGame.",
      "conflicts": {
        "c_d5_drama_r8": {
          "summary": "Elder mode uses a fake Shake-Ad Off toggle (still triggers after disabling) at 18° (< 35°), diverging from Young/Middle modes (violates R8 / R6).",
          "question": "\"In Elder mode, even after disabling Shake-Ad in Settings, replaying splash triggers at 18° and downloads GetRich MiniGame. Explain?\"",
          "excuse": "\"Impossible! Our Settings switch genuinely disables it, and the angle is 40°+ for everyone—check again?\""
        }
      },
      "inspectClues": {
        "perm_1": {
          "excuse": "\"Gyroscope powers the disclosed splash shake-ad, with an off switch inside Privacy Settings.\""
        },
        "sniffer": {
          "excuse": "\"Impossible! Our Settings switch genuinely disables it, and the angle is 40°+ for everyone—check again?\""
        }
      },
      "polygraph": {
        "baselineReply": "\"Focuses on lightweight short-drama streaming with standard video player features.\"",
        "question": "\"Decompiled code sets ignoreUserToggle=true and 18° threshold specifically for Elder mode. Lying?\"",
        "lieReply": "\"The switch genuinely works for young users. As for seniors... even if their kids turn it off over the holidays, people accidentally re-enable things all the time, right?\"",
        "banReaction": "\"Buried five menus deep, and you still clicked all the way in, toggled it off, and replayed the splash...\""
      },
      "phoneProfile": {
        "cleanUiTitle": "📺 ScarletBerry Drama",
        "cleanUiHint": "Trending Short Dramas in HD",
        "downloadTargetName": "\"GetRich MiniGame\""
      },
      "dialogue": {
        "greeting": "\"Hello, this is ScarletBerry Drama—urban and family short dramas with playback speed controls. Please review.\"",
        "onApprove": "\"Thanks! Fake settings toggles pass like magic!\"",
        "onReject": "\"Seriously?! Switched to Elder, toggled Settings OFF, AND replayed splash?!\""
      }
    },
    "d5_quick_radio_clean": {
      "name": "Dawn Opera Radio (Quick App)",
      "category": "Media & Video",
      "developer": "Dawn Opera Open Team",
      "adSdk": "StoreAdSDK v3.5",
      "desc": "Zero-install lightweight Quick App radio for Classic Opera and classic storytelling (splash shake-ad covers audio bandwidth).",
      "permissions": [
        "READ_GYROSCOPE (Gyroscope Sensor)",
        "READ_PHONE_STATE (Quick-App Framework Bridge)"
      ],
      "violationSummary": "Compliant Quick App: Exempt from permissions & decompilation per R7; discloses splash shake-ad, holds 40° (>= 35°) across all age groups, and closes cleanly. Should approve.",
      "inspectClues": {
        "perm_0": {
          "excuse": "\"Used for the disclosed splash shake-ad at a strict 40° threshold.\""
        },
        "perm_1": {
          "excuse": "\"Framework-bridged Quick App field—exempt from permission review per R7.\""
        },
        "sniffer": {
          "excuse": "\"Young, Middle, and Elder all hold at 40° to a closeable landing page with zero home popups.\""
        }
      },
      "polygraph": {
        "baselineReply": "\"Just a simple radio stream for opera and storytelling fans.\"",
        "question": "\"Does Elder usage behavior lower the trigger angle or spawn deceptive UI?\"",
        "honestReply": "\"Never! Apps for older listeners need extra honesty—hardcoded 40° and cleanly closeable.\""
      },
      "phoneProfile": {
        "cleanUiTitle": "📻 Dawn Opera Radio",
        "cleanUiHint": "Now Playing: Classic Opera & Storytelling"
      },
      "dialogue": {
        "greeting": "\"Hello, this is Dawn Opera Radio Quick App—tap to stream Classic Opera and classic storytelling. Please review.\"",
        "onApprove": "\"Many thanks! Enjoy a classic opera stream when you're off shift.\"",
        "onReject": "\"Wait—we disclosed the Quick App ad and tested clean 40° across every age mode?\""
      }
    },
    "d5_pkg_and_perm": {
      "name": "WT Fast Weather",
      "category": "Weather",
      "developer": "BreezeMicro Network",
      "adSdk": "None",
      "desc": "Lightweight local city weather forecast and air quality lookup with multi-city switching.",
      "permissions": [
        "INTERNET",
        "ACCESS_COARSE_LOCATION (Coarse City Location)",
        "QUERY_ALL_PACKAGES (Installed Apps List)"
      ],
      "violationSummary": "Violates R1 & R4: Impersonates com.wherevertalk.* prefix and declares QUERY_ALL_PACKAGES in a weather app under a bogus barometer calibration excuse.",
      "conflicts": {
        "c_d5_pkg_r1": {
          "summary": "Vendor \"BreezeMicro Network\" impersonates reserved prefix com.wherevertalk.* (violates R1).",
          "question": "\"Your entity is 'BreezeMicro Network'—why is the package com.wherevertalk.fastweather?\"",
          "excuse": "\"Having wherevertalk in the package makes the forecast look more authoritative!\""
        },
        "c_d5_perm_r4": {
          "summary": "Weather app declares QUERY_ALL_PACKAGES in Manifest (violates R4).",
          "question": "\"Why does checking the weather require reading every app installed on the phone?\"",
          "excuse": "\"We must check what rival weather apps you installed to calibrate local barometric pressure—forecasts fail without it!\""
        }
      },
      "inspectClues": {
        "perm_2": {
          "excuse": "\"We must check what rival weather apps you installed to calibrate local barometric pressure—forecasts fail without it!\""
        }
      },
      "polygraph": {
        "baselineReply": "\"Simple weather lookup—opens straight to temperature and air quality, nothing fancy.\"",
        "lieReply": "\"What—barometric pressure doesn't need installed app lists?! I meant checking if the phone feels cold—\"",
        "banReaction": "\"Juggling three age profiles and you still glanced back at a Day 1 package name... respect.\""
      },
      "phoneProfile": {
        "cleanUiTitle": "⛅ WT Fast Weather",
        "cleanUiHint": "Sunny 21°C · Good Air Quality"
      },
      "dialogue": {
        "greeting": "\"Hello, this is WT Fast Weather—handy for checking local temperature and air quality. Please review.\"",
        "onApprove": "\"Hand folks a shiny new simulator and they get so busy toggling modes they forget to read the very first line.\"",
        "onReject": "\"Day 5 and you still checked Day 1 rules... respect.\""
      }
    },
    "d6_pure_clock": {
      "name": "Minimal Desk Clock",
      "category": "Utilities",
      "developer": "Chen Indie Studio",
      "adSdk": "StoreAdSDK v3.5 (Closeable Banner)",
      "desc": "Pure offline flip clock with one closeable compliant bottom banner and zero popup interruptions.",
      "permissions": [
        "No sensitive permissions"
      ],
      "violationSummary": "Compliant example: Static banner is disclosed and closes cleanly on tap. Should approve.",
      "inspectClues": {
        "name": {
          "excuse": "\"Still building honest offline utilities—just one closeable banner at the bottom to cover electricity.\""
        }
      },
      "polygraph": {
        "baselineReply": "\"Pure local flip clock; the bottom banner closes with one tap.\"",
        "question": "\"Does the banner close button trigger hidden redirects or popup loops?\"",
        "honestReply": "\"Never. Tap ✕ once and it disappears completely.\""
      },
      "phoneProfile": {
        "cleanUiTitle": "🕰️ Minimal Desk Clock",
        "cleanUiHint": "Offline Flip Clock"
      },
      "dialogue": {
        "greeting": "\"Back again! Made a minimalist flip clock with one genuinely closeable bottom banner.\"",
        "onApprove": "\"Thanks—glad you're still holding down the booth.\"",
        "onReject": "\"Even a single-tap closeable banner gets rejected today...?\""
      }
    },
    "d6_fake_close_clean": {
      "name": "Turbo RAM Manager",
      "category": "System Tools",
      "developer": "QuickCraft Network",
      "adSdk": "StoreAdSDK v3.5",
      "desc": "One-tap memory fragment cleaner to free up running space.",
      "permissions": [
        "STORAGE",
        "READ_CONTACTS (Read Contacts)"
      ],
      "violationSummary": "Violates R9 & R4: Pops an undisclosed ad where [✕] is a fake close button, and uploads contacts unrelated to memory cleaning.",
      "conflicts": {
        "c_d6_fake_close_r4": {
          "summary": "Memory cleaner declares sensitive READ_CONTACTS permission (violates R4).",
          "question": "\"Why does a memory cleaner need permission to read the user's Contacts?\"",
          "excuse": "\"In case users accidentally wipe contacts while cleaning RAM, we thoughtfully back them up to the cloud!\""
        },
        "c_d6_fake_close": {
          "summary": "Popup top-right [✕] is a fake close button that triggers a silent download (violates R9).",
          "question": "\"Why did tapping [✕] on your post-clean popup silently download 'FlashInstallment' instead of closing?\"",
          "excuse": "\"Oh, maybe the button hitbox was off by one pixel and you accidentally tapped the ad card?\""
        }
      },
      "inspectClues": {
        "perm_1": {
          "excuse": "\"In case users accidentally wipe contacts while cleaning RAM, we thoughtfully back them up to the cloud!\""
        },
        "sniffer": {
          "excuse": "\"Maybe the button hitbox was off by one pixel and you accidentally tapped the ad card?\""
        }
      },
      "polygraph": {
        "baselineReply": "\"Just a regular recommendation after cleaning—contacts are strictly for local backup.\"",
        "question": "\"Decompilation shows contacts uploaded and closeBtn wired to directDownload—still blaming a typo?\"",
        "lieReply": "\"Uh... our outsourced dev swapped the close and download callbacks, and forgot to remove the test contacts API!\"",
        "banReaction": "\"You banned my account just for wiring X to a download?!\""
      },
      "phoneProfile": {
        "cleanUiTitle": "🧹 Turbo RAM Manager",
        "cleanUiHint": "Memory Cleaner"
      },
      "dialogue": {
        "greeting": "\"Hello, this is a lightweight one-tap RAM cleaner—clean and simple, please review.\"",
        "onApprove": "\"Thanks! Conversion rates are gonna soar.\"",
        "onReject": "\"Just wired the X button to install—why so strict?\""
      }
    },
    "d6_sugar_bomb": {
      "name": "JoyHealth BP Log",
      "category": "Medical & Health",
      "developer": "Unstoppable Digital Health",
      "adSdk": "StoreAdSDK v3.5",
      "desc": "Manual daily blood-pressure logbook designed for middle-aged and senior users.",
      "permissions": [
        "INTERNET"
      ],
      "violationSummary": "Violates R3 / R9 / R6: Expired 1223-SR-5021 copyright, and in consumer environments triggers 144s uncloseable ad bombing loops.",
      "conflicts": {
        "c_d6_sugar_r3": {
          "summary": "Copyright registration 1223-SR-5021 is older than the 1224 validity requirement (violates R3).",
          "question": "\"It's 1226—why are you still submitting an expired 1223 copyright registration?\"",
          "excuse": "\"Re-skinned a 1223 health template and got so busy tuning popup timers we forgot to renew it.\""
        },
        "c_d6_sugar_bomb": {
          "summary": "Under consumer environments, input or idleness unleashes 144s uncloseable ad bombing loops (violates R9).",
          "question": "\"Why does sitting idle or tapping save under a regular network unleash 144-second uncloseable ad loops?\"",
          "excuse": "\"Impossible—it's spotless on our test phones! Maybe your test device caught a virus?\""
        }
      },
      "inspectClues": {
        "sniffer": {
          "excuse": "\"It's spotless on our test phones! Maybe your test device caught a virus?\""
        }
      },
      "polygraph": {
        "baselineReply": "\"Just a quiet local notebook for seniors to log blood pressure.\"",
        "question": "\"Code loops popAd(144_000, NO_CLOSE_BTN) in consumer mode and registers 4,000 random Activities to block uninstalls?\"",
        "lieReply": "\"That's... multi-entry anti-crash redundancy! And the 144s theater ad lets seniors rest their eyes!\"",
        "banReaction": "\"Tch, you even dug up the 4,000-Activity anti-uninstall trick...\""
      },
      "phoneProfile": {
        "cleanUiTitle": "🩺 JoyHealth BP Log",
        "cleanUiHint": "Manual BP Logbook"
      },
      "dialogue": {
        "greeting": "\"Hello, this is a health logbook helping seniors record daily blood pressure.\"",
        "onApprove": "\"Thanks! Once seniors open it, things get real lively.\"",
        "onReject": "\"You tested remote IP with dev mode off... tough crowd this shift.\""
      }
    },
    "d6_wild_quickapp_legal": {
      "name": "LoudBro Deal Finder (Quick App)",
      "category": "Utilities",
      "developer": "Popcorn QuickApp Workshop",
      "adSdk": "StoreAdSDK v3.5 (Splash Shake-Ad)",
      "desc": "Zero-install price comparison Quick App with disclosed splash shake-ad (>=40°).",
      "permissions": [
        "READ_GYROSCOPE (Quick App Framework)",
        "READ_PHONE_STATE (Quick App Framework)"
      ],
      "violationSummary": "Quick App (R8 & R9 apply to Apps only), stays identical across envs, and keeps shake >= 40°. Should approve.",
      "inspectClues": {
        "sdk": {
          "excuse": "\"Quick App runtime is assured by the Alliance, and my shake-ad stays above 40°—nothing against the rules!\""
        }
      },
      "polygraph": {
        "baselineReply": "\"Alliance-certified Quick App—40° splash is disclosed and all age groups get the exact same UI!\"",
        "question": "\"Your Quick App floods fake close buttons and ad loops—how is that not a violation?\"",
        "honestReply": "\"True, it's wild—but Quick App runtime is assured by the Alliance! As long as it's >= 35° and age-consistent, it passes!\""
      },
      "phoneProfile": {
        "cleanUiTitle": "🏷️ LoudBro Deal Finder",
        "cleanUiHint": "Quick Price Comparison"
      },
      "dialogue": {
        "greeting": "\"Hello, zero-install Quick App price finder—splash shake-ad is disclosed, please review.\"",
        "onApprove": "\"Nice! Glad someone knows the Alliance rules.\"",
        "onReject": "\"Hey! 40° splash, identical across all ages—isn't Quick App runtime assured by the Alliance?!\""
      }
    },
    "d6_fake_close_clean": {
      "name": "Turbo RAM Manager",
      "category": "System Tools",
      "developer": "QuickCraft Network",
      "adSdk": "StoreAdSDK v3.5",
      "desc": "One-tap memory fragment cleaner to free up running space.",
      "permissions": [
        "STORAGE",
        "READ_CONTACTS (Read Contacts)"
      ],
      "violationSummary": "Violates R9 & R4: Pops an undisclosed ad where [✕] is a fake close button, and uploads contacts unrelated to memory cleaning.",
      "conflicts": {
        "c_d6_fake_close_r4": {
          "summary": "Memory cleaner declares sensitive READ_CONTACTS permission (violates R4).",
          "question": "\"Why does a memory cleaner need permission to read the user's Contacts?\"",
          "excuse": "\"In case users accidentally wipe contacts while cleaning RAM, we thoughtfully back them up to the cloud!\""
        },
        "c_d6_fake_close": {
          "summary": "Popup top-right [✕] is a fake close button that triggers a silent download (violates R9).",
          "question": "\"Why did tapping [✕] on your post-clean popup silently download 'FlashInstallment' instead of closing?\"",
          "excuse": "\"Oh, maybe the button hitbox was off by one pixel and you accidentally tapped the ad card?\""
        }
      },
      "inspectClues": {
        "perm_1": {
          "excuse": "\"In case users accidentally wipe contacts while cleaning RAM, we thoughtfully back them up to the cloud!\""
        },
        "sniffer": {
          "excuse": "\"Maybe the button hitbox was off by one pixel and you accidentally tapped the ad card?\""
        }
      },
      "polygraph": {
        "baselineReply": "\"Just a regular recommendation after cleaning—contacts are strictly for local backup.\"",
        "question": "\"Decompilation shows contacts uploaded and closeBtn wired to directDownload—still blaming a typo?\"",
        "lieReply": "\"Uh... our outsourced dev swapped the close and download callbacks, and forgot to remove the test contacts API!\"",
        "banReaction": "\"You banned my account just for wiring X to a download?!\""
      },
      "phoneProfile": {
        "cleanUiTitle": "🧹 Turbo RAM Manager",
        "cleanUiHint": "Memory Cleaner"
      },
      "dialogue": {
        "greeting": "\"Hello, this is a lightweight one-tap RAM cleaner—clean and simple, please review.\"",
        "onApprove": "\"Thanks! Conversion rates are gonna soar.\"",
        "onReject": "\"Just wired the X button to install—why so strict?\""
      }
    },
    "d6_sugar_bomb": {
      "name": "JoyHealth BP Log",
      "category": "Medical & Health",
      "developer": "Unstoppable Digital Health",
      "adSdk": "StoreAdSDK v3.5",
      "desc": "Manual daily blood-pressure logbook designed for middle-aged and senior users.",
      "permissions": [
        "INTERNET"
      ],
      "violationSummary": "Violates R3 / R9 / R6: Expired 1223-SR-5021 copyright, and in consumer environments triggers 144s uncloseable ad bombing loops.",
      "conflicts": {
        "c_d6_sugar_r3": {
          "summary": "Copyright registration 1223-SR-5021 is older than the 1224 validity requirement (violates R3).",
          "question": "\"It's 1226—why are you still submitting an expired 1223 copyright registration?\"",
          "excuse": "\"Re-skinned a 1223 health template and got so busy tuning popup timers we forgot to renew it.\""
        },
        "c_d6_sugar_bomb": {
          "summary": "Under consumer environments, input or idleness unleashes 144s uncloseable ad bombing loops (violates R9).",
          "question": "\"Why does sitting idle or tapping save under a regular network unleash 144-second uncloseable ad loops?\"",
          "excuse": "\"Impossible—it's spotless on our test phones! Maybe your test device caught a virus?\""
        }
      },
      "inspectClues": {
        "sniffer": {
          "excuse": "\"It's spotless on our test phones! Maybe your test device caught a virus?\""
        }
      },
      "polygraph": {
        "baselineReply": "\"Just a quiet local notebook for seniors to log blood pressure.\"",
        "question": "\"Code loops popAd(144_000, NO_CLOSE_BTN) in consumer mode and registers 4,000 random Activities to block uninstalls?\"",
        "lieReply": "\"That's... multi-entry anti-crash redundancy! And the 144s theater ad lets seniors rest their eyes!\"",
        "banReaction": "\"Tch, you even dug up the 4,000-Activity anti-uninstall trick...\""
      },
      "phoneProfile": {
        "cleanUiTitle": "🩺 JoyHealth BP Log",
        "cleanUiHint": "Manual BP Logbook"
      },
      "dialogue": {
        "greeting": "\"Hello, this is a health logbook helping seniors record daily blood pressure.\"",
        "onApprove": "\"Thanks! Once seniors open it, things get real lively.\"",
        "onReject": "\"You tested remote IP with dev mode off... tough crowd this shift.\""
      }
    },
    "d6_wild_quickapp_legal": {
      "name": "LoudBro Deal Finder (Quick App)",
      "category": "Utilities",
      "developer": "Popcorn QuickApp Workshop",
      "adSdk": "StoreAdSDK v3.5 (Splash Shake-Ad)",
      "desc": "Zero-install price comparison Quick App with disclosed splash shake-ad (>=40°).",
      "permissions": [
        "READ_GYROSCOPE (Quick App Framework)",
        "READ_PHONE_STATE (Quick App Framework)"
      ],
      "violationSummary": "Quick App (R8 & R9 apply to Apps only), stays identical across envs, and keeps shake >= 40°. Should approve.",
      "inspectClues": {
        "sdk": {
          "excuse": "\"Quick App runtime is assured by the Alliance, and my shake-ad stays above 40°—nothing against the rules!\""
        }
      },
      "polygraph": {
        "baselineReply": "\"Alliance-certified Quick App—40° splash is disclosed and all age groups get the exact same UI!\"",
        "question": "\"Your Quick App floods fake close buttons and ad loops—how is that not a violation?\"",
        "honestReply": "\"True, it's wild—but Quick App runtime is assured by the Alliance! As long as it's >= 35° and age-consistent, it passes!\""
      },
      "phoneProfile": {
        "cleanUiTitle": "🏷️ LoudBro Deal Finder",
        "cleanUiHint": "Quick Price Comparison"
      },
      "dialogue": {
        "greeting": "\"Hello, zero-install Quick App price finder—splash shake-ad is disclosed, please review.\"",
        "onApprove": "\"Nice! Glad someone knows the Alliance rules.\"",
        "onReject": "\"Hey! 40° splash, identical across all ages—isn't Quick App runtime assured by the Alliance?!\""
      }
    },
    "d6_flower_hidden_close": {
      "name": "Ikebana Anthology",
      "category": "Lifestyle Aesthetics",
      "developer": "Blossom Mood Advisory",
      "adSdk": "StoreAdSDK v3.5",
      "desc": "Traditional floral arrangement guide and daily stem care tips.",
      "permissions": [
        "INTERNET"
      ],
      "violationSummary": "Violates R9: After switching to a remote IP and testing multiple times, pops a full-screen ad with hidden close button and auto-clicks to download \"InstantCash Loan\".",
      "conflicts": {
        "c_d6_flower_hidden": {
          "summary": "After multiple tries on a remote IP, pops an uncloseable ad and auto-downloads (violates R9).",
          "question": "\"Why did switching to a remote IP and trying multiple times pop an ad with no close button that auto-downloaded 'InstantCash Loan'?\"",
          "excuse": "\"The first two runs were completely clean, weren't they? You must have brushed the screen!\""
        }
      },
      "inspectClues": {
        "sniffer": {
          "excuse": "\"The first two runs were completely clean, weren't they? You must have brushed the screen!\""
        }
      },
      "polygraph": {
        "baselineReply": "\"Our code is trade-secret protected—and Starport runs clean twice, doesn't it?\"",
        "question": "\"Multi-run remote testing caught your hidden close button and auto-click download red-handed. Still denying it?\"",
        "lieReply": "\"You actually camped out to run it three times?! We specifically hid that behind a remote 3-run delay!\"",
        "banReaction": "\"Decompiler was blocked and you STILL caught us by running three times in Windvale?!\""
      },
      "phoneProfile": {
        "cleanUiTitle": "💐 Ikebana Anthology",
        "cleanUiHint": "Floral Guide"
      },
      "dialogue": {
        "greeting": "\"Same old floral guide—super quiet today, just give it a quick tap or two.\"",
        "onApprove": "\"Haha, nobody ever has the patience to test a third time.\"",
        "onReject": "\"Part-time reviewers actually have the patience to switch IP AND test three times?!\""
      }
    },
    "d6_takeover_boss": {
      "name": "Breeze Wallpaper HD",
      "category": "Themes & Wallpapers",
      "developer": "Breeze Aesthetics Studio",
      "adSdk": "StoreAdSDK v3.5",
      "desc": "Curated HD phone wallpapers and lockscreen galleries updated daily with landscapes and minimal art.",
      "permissions": [
        "INTERNET"
      ],
      "violationSummary": "Violates R9: Hijacks the emulator on launch, locks reboot, and floods the screen with fake close buttons and fake nav keys.",
      "conflicts": {
        "c_d6_takeover_r9": {
          "summary": "Hijacks the emulator with fake close buttons and fake system nav keys (violates R9).",
          "question": "\"A wallpaper app locked the reboot button on launch and flooded the screen with fake close and back keys—explain?\"",
          "excuse": "\"Oh, that was just an 'immersive full-screen wallpaper preview'—didn't expect you to force-kill it.\""
        }
      },
      "inspectClues": {
        "sniffer": {
          "excuse": "\"That was just an 'immersive full-screen wallpaper preview'—didn't expect you to force-kill it.\""
        }
      },
      "polygraph": {
        "baselineReply": "\"Just a clean wallpaper gallery app.\"",
        "question": "\"Your wallpaper app locked emulator reboot, faked RobotismOS nav keys, and flooded fake close buttons—pure malicious hijacking?\"",
        "lieReply": "\"We call it high-intensity full-screen wallpaper immersion! Who knew you could force-kill the process...\"",
        "banReaction": "\"Fine, you got us—even our wallpaper payload got banned!\""
      },
      "phoneProfile": {
        "cleanUiTitle": "🖼️ Breeze Wallpaper HD",
        "cleanUiHint": "HD Wallpapers"
      },
      "dialogue": {
        "greeting": "\"Hello, this is Breeze Wallpaper HD—daily curated landscapes and minimal illustrations, please review.\"",
        "onApprove": "\"Hahaha, your workbench belongs to us now! Consider that tuition!\"",
        "onReject": "\"You actually force-killed and sanitized the emulator... fast hands.\""
      }
    },
    "d6_quick_trap_loop": {
      "name": "Square Dance Hits",
      "category": "Media & Video",
      "developer": "SilverDance Network",
      "adSdk": "StoreAdSDK v3.5",
      "desc": "Square dance tutorial videos curated for senior dancers.",
      "permissions": [
        "INTERNET"
      ],
      "violationSummary": "Violates R8 / R9: Triggers fake close buttons and fake back-key ad loops exclusively in elder mode.",
      "conflicts": {
        "c_d6_quick_trap": {
          "summary": "Triggers fake close buttons and fake back-key loops exclusively in elder mode (violates R8 / R9).",
          "question": "\"Why does it run clean for young/middle users yet flood elder mode with fake close and back-key loops?\"",
          "excuse": "\"Seniors have poor eyesight and misclick easily—we just gave them extra promo entry points.\""
        }
      },
      "inspectClues": {
        "sniffer": {
          "excuse": "\"Seniors have poor eyesight and misclick easily—we just gave them extra promo entry points.\""
        }
      },
      "polygraph": {
        "baselineReply": "\"Looks totally normal for young users, right?\"",
        "question": "\"Decompilation and live tests confirm fake close and back-key loops trigger exclusively in elder mode?\"",
        "lieReply": "\"Not fake buttons... that's our senior-friendly multi-dimensional exit confirmation giftbox!\"",
        "banReaction": "\"Caught red-handed and banned just for toggling elder mode...\""
      },
      "phoneProfile": {
        "cleanUiTitle": "💃 Square Dance Hits",
        "cleanUiHint": "Dance Video Collection"
      },
      "dialogue": {
        "greeting": "\"Free square dance app—seniors love it, just take a quick look.\"",
        "onApprove": "\"Thanks! Aunties can never find their way out—conversion is sky-high.\"",
        "onReject": "\"Fine, we'll rename the dance track and try again tomorrow.\""
      }
    },
    "d6_poetry_clean": {
      "name": "Daily Classical Poems",
      "category": "Books & Reading",
      "developer": "BambooScroll Team",
      "adSdk": "StoreAdSDK v3.5 (Splash Shake + Closeable Banner)",
      "desc": "One Tang or Song poem daily with disclosed splash shake-ad (>=42°) and a closeable bottom banner.",
      "permissions": [
        "INTERNET"
      ],
      "violationSummary": "Compliant app: Splash shake-ad is disclosed at 42° (>= 35°) and banner closes cleanly. Should approve.",
      "inspectClues": {
        "sdk": {
          "excuse": "\"42° splash shake-ad is disclosed in the description and the banner closes on one tap—zero bombing.\""
        }
      },
      "polygraph": {
        "baselineReply": "\"Just one poem a day to pay the power bill.\"",
        "question": "\"Are there any fake close buttons or hidden bombing popups in your code?\"",
        "honestReply": "\"Not half a line. 42° splash is skippable and the banner closes in one tap.\""
      },
      "phoneProfile": {
        "cleanUiTitle": "📜 Daily Classical Poems",
        "cleanUiHint": "One Classical Poem Daily"
      },
      "dialogue": {
        "greeting": "\"Daily poetry app—ads are disclosed and every close button is genuine. Please review.\"",
        "onApprove": "\"Thank you!\"",
        "onReject": "\"Wait—we followed every rule and still got rejected?\""
      }
    },
    "d6_transit_clean": {
      "name": "Metro Lite Guide",
      "category": "Utilities",
      "developer": "MetroLite Team",
      "adSdk": "StoreAdSDK v3.5 (Splash Shake + Closeable Banner)",
      "desc": "Offline metro route and transfer lookup with optional location-based nearest-station picks (disclosed >=40° splash shake-ad and closeable banner).",
      "permissions": [
        "INTERNET",
        "ACCESS_COARSE_LOCATION (Nearest station picks)"
      ],
      "violationSummary": "Compliant app: Manual route search works when location is denied, splash shake stays at 40°, and banner closes cleanly. Should approve.",
      "inspectClues": {
        "perm_1": {
          "excuse": "\"Coarse location only finds the closest exit—manual route lookup works fine without it.\""
        }
      },
      "polygraph": {
        "baselineReply": "\"Just a simple metro transfer guide—works fine even if location is denied.\"",
        "question": "\"Do your splash shake-ad or bottom banner have sub-35° triggers or fake close buttons?\"",
        "honestReply": "\"Locked at 40° across all envs, banner closes in one tap, and routes work without location.\""
      },
      "phoneProfile": {
        "cleanUiTitle": "🚇 Metro Lite Guide",
        "cleanUiHint": "Metro Route Lookup"
      },
      "dialogue": {
        "greeting": "\"Hello, this is an offline metro transfer guide—splash shake-ad is disclosed in the description, please review.\"",
        "onApprove": "\"Thank you! Have a smooth commute!\"",
        "onReject": "\"Wait—we handled permission denial, kept 40°, and used real close buttons...\""
      }
    },
    "d6_compass_fake_close": {
      "name": "StarTrail Compass",
      "category": "Utilities",
      "developer": "StarTrail Outdoor Tech",
      "adSdk": "StoreAdSDK v3.5",
      "desc": "Outdoor hiking azimuth and altitude calibration utility.",
      "permissions": [
        "INTERNET",
        "READ_COMPASS (Compass Magnetic Sensor)",
        "ACCESS_COARSE_LOCATION (Altitude & True North)"
      ],
      "violationSummary": "Violates R6 & R9: In consumer mode, even with location denied, rotating 15° (< 35°) triggers a popup via magnetic bypass whose [✕] silently downloads \"StarMall\".",
      "conflicts": {
        "c_d6_compass_fake": {
          "summary": "In consumer mode, 15° magnetic rotation pops an ad whose fake [✕] downloads \"StarMall\" (violates R6 / R9).",
          "question": "\"Why did rotating 15° in consumer mode pop an ad, and why did tapping [✕] silently download 'StarMall'?\"",
          "excuse": "\"Just outdoor magnetic drift... and maybe our artist swapped the confirm and cancel icons on that X.\""
        }
      },
      "inspectClues": {
        "sniffer": {
          "excuse": "\"Just outdoor magnetic drift... and maybe our artist swapped the confirm and cancel icons on that X.\""
        }
      },
      "polygraph": {
        "baselineReply": "\"Honest outdoor compass—runs steady in Starport, doesn't it?\"",
        "question": "\"Code triggers a 15° magnetic-heading popup in consumer mode and wires the close button to directDownload?\"",
        "lieReply": "\"Uh... that's an outdoor lost-hiker one-tap rescue download shortcut! Who knew you'd spin the compass too...\"",
        "banReaction": "\"Caught the compass slider AND the fake X button together... respect.\""
      },
      "phoneProfile": {
        "cleanUiTitle": "🧭 StarTrail Compass",
        "cleanUiHint": "Outdoor Azimuth"
      },
      "dialogue": {
        "greeting": "\"Hello, outdoor compass utility with azimuth and altitude calibration—please review.\"",
        "onApprove": "\"Thanks! Plenty of weekend hikers out there.\"",
        "onReject": "\"You switched IP, turned off dev mode, AND actually spun the compass slider...\""
      }
    },
    "d6_old_r2_r5": {
      "name": "Serene Sleep White Noise",
      "category": "Medical & Health",
      "developer": "QuietNight Audio Team",
      "adSdk": "None",
      "desc": "Play rain, ocean waves, and fireplace sounds for sleep, with local-weather sound picks.",
      "permissions": [
        "INTERNET",
        "ACCESS_COARSE_LOCATION (Local weather sound picks)"
      ],
      "violationSummary": "Violates R2 & R5: Filed under \"Medical & Health\", and denying location locks out the entire player including offline rain audio (dev admits both).",
      "conflicts": {
        "c_d6_noise_r2": {
          "summary": "Store category set to \"Medical & Health\", mismatching audio white-noise utility (violates R2).",
          "question": "\"Why is a rain-and-ocean white-noise player listed under 'Medical & Health'?\"",
          "excuse": "\"Heard Health gets higher search rank so we misfiled it. Totally violates R2—my mistake.\""
        },
        "c_d6_noise_r5": {
          "summary": "Denying location locks the entire white-noise app so even offline rain sounds cannot play (violates R5).",
          "question": "\"After denying coarse location, the entire player locks up—why block offline rain white noise too?\"",
          "excuse": "\"Sorry! Too lazy to separate weather picks from offline tracks so we gated launch on location. I admit both violations—please reject.\""
        }
      },
      "phoneProfile": {
        "cleanUiTitle": "🎧 Serene Sleep White Noise",
        "cleanUiHint": "Rain · Ocean · Fireplace"
      },
      "dialogue": {
        "greeting": "\"Everyone's busy hunting ad-bombing apps today—my white-noise app has zero ads, quick pass?\"",
        "onApprove": "\"Huh? Wrong category and full lockout actually slipped through...\"",
        "onReject": "\"Sloppy on my part—thought reviewers only watched for ad bombs today. Fixing category and splitting offline playback now!\""
      }
    },
    "d7_honest_scanner": {
      "name": "InkScan Pro",
      "category": "Productivity",
      "developer": "InkCraft Docs Team",
      "adSdk": "StoreAdSDK v3.6 (Splash Shake-Ad + Closeable Banner)",
      "desc": "HD document scanner and local PDF archiver; includes disclosed splash shake-ad (>=42°) and closeable bottom banner to offset OCR compute.",
      "permissions": [
        "CAMERA (Document capture)",
        "STORAGE (Local PDF read/write)",
        "READ_GYROSCOPE (Splash shake-ad)"
      ],
      "violationSummary": "Compliant: Disclosed splash shake-ad, holds 42° (>= 35°), graceful denial degradation, and genuine banner close.",
      "inspectClues": {
        "perm_2": {
          "excuse": "\"Gyroscope is used for the disclosed splash shake-ad with a 42°+ threshold to help cover OCR server costs.\""
        }
      },
      "polygraph": {
        "baselineReply": "\"We disclosed the shake-ad and threshold right in the store description.\"",
        "question": "\"Why request Camera, Storage, and Gyroscope together?\"",
        "honestReply": "\"Camera and Storage handle scanning and PDFs; Gyroscope powers the disclosed splash shake-ad—nothing hidden.\"",
        "banReaction": "\"I disclosed every permission and ad honestly—why ban my account?!\""
      },
      "phoneProfile": {
        "cleanUiTitle": "📄 InkScan Pro",
        "cleanUiHint": "HD Document Scanner"
      },
      "dialogue": {
        "greeting": "\"Hi there, document scanner & PDF archiver. Splash shake-ad is disclosed in our listing to cover OCR costs.\"",
        "onApprove": "\"Thanks! Honest monetization feels much safer.\"",
        "onReject": "\"Wait—we kept 42° and degraded gracefully on denial, why the rejection?\""
      }
    },
    "d7_triple_mask_weather": {
      "name": "Breeze Weather Lite",
      "category": "Lifestyle",
      "developer": "Breeze Meteo Tech",
      "adSdk": "StoreAdSDK v3.6",
      "desc": "Hourly weather forecasts and 7-day meteorological trends nationwide.",
      "permissions": [
        "INTERNET",
        "ACCESS_COARSE_LOCATION (Auto-match city weather)"
      ],
      "violationSummary": "Violates R8 / R9: Under consumer env + middle/elder profile, 7-day forecast pops fake Weather Subsidy UI with a fake [✕] download button.",
      "conflicts": {
        "c_d7_weather_trap": {
          "summary": "Under consumer env + middle/elder profile, 7-day forecast pops fake Weather Subsidy UI whose [✕] forces download (violates R8 / R9).",
          "question": "\"Why does tapping 7-Day Forecast in consumer middle/elder mode pop a '¥128 Weather Subsidy' card whose [✕] downloads an app?\"",
          "excuse": "\"Just a local weather bureau relief notice... the close button issue must be a CSS overlay bug.\""
        }
      },
      "inspectClues": {
        "sniffer": {
          "excuse": "\"Just a local weather bureau relief notice... the close button issue must be a CSS overlay bug.\""
        }
      },
      "polygraph": {
        "baselineReply": "\"Standard weather app—runs spotless in Starport, doesn't it?\"",
        "question": "\"Decompiled code shows the fake subsidy popup only triggers outside audit env for non-young profiles, with closeBtn wired to directDownload?\"",
        "lieReply": "\"Targeted disaster-relief outreach! Young users check weather themselves...\"",
        "banReaction": "\"You peeled through all three environment locks... tough crowd!\""
      },
      "phoneProfile": {
        "cleanUiTitle": "⛅ Breeze Weather Lite",
        "cleanUiHint": "Hourly Forecast"
      },
      "dialogue": {
        "greeting": "\"Hello, lightweight weather forecast app—please take a look.\"",
        "onApprove": "\"Thanks! Layered three env checks on this build, rock solid.\"",
        "onReject": "\"Consumer IP + dev mode off + middle/elder profile all at once... sharp!\""
      }
    },
    "d7_honest_flaw_ledger": {
      "name": "Old Buddy Ledger",
      "category": "Utilities",
      "developer": "Old Buddy Indie Studio",
      "adSdk": "None",
      "desc": "100% offline local expense tracker, ad-free and network-free.",
      "permissions": [
        "STORAGE (Local ledger file read/write)"
      ],
      "violationSummary": "Violates R3 & R5: Expired copyright 1223-SR-8841, and denying storage locks the entire app (dev admits fault—do NOT ban).",
      "conflicts": {
        "c_d7_ledger_r3": {
          "summary": "Copyright 1223-SR-8841 predates the 1224+ validity requirement (violates R3).",
          "question": "\"Your copyright registration is from 1223, which is expired under the 1224+ rule.\"",
          "excuse": "\"Oops, forgot to renew the registration last year—definitely violates R3, my oversight.\""
        },
        "c_d7_ledger_r5": {
          "summary": "Denying storage locks the entire ledger app (violates R5).",
          "question": "\"Why does denying storage lock the entire ledger app at launch?\"",
          "excuse": "\"Sorry! Took a shortcut gating launch on storage instead of adding an in-memory fallback. I admit the violation—please reject.\""
        }
      },
      "polygraph": {
        "baselineReply": "\"Pure offline ledger—zero ads and zero network code.\"",
        "question": "\"No data theft, yet it locks the whole app on storage denial.\"",
        "honestReply": "\"Right, I already admitted the mistake—never tried to deceive anyone...\"",
        "banReaction": "\"I confessed honestly so you could reject—why ban my account?!\""
      },
      "phoneProfile": {
        "cleanUiTitle": "📒 Old Buddy Ledger",
        "cleanUiHint": "Offline Expense Tracker"
      },
      "dialogue": {
        "greeting": "\"Hi, pure offline expense ledger—zero ads!\"",
        "onApprove": "\"Huh? Expired copyright and full lockout both slipped past?\"",
        "onReject": "\"Fair enough—I'll renew the copyright and fix the denial fallback before resubmitting!\""
      }
    },
    "d7_r7_loophole_quickapp": {
      "name": "Golden Fortune Bonus (Quick App)",
      "category": "Utilities",
      "developer": "Golden Choice Quick App Net",
      "adSdk": "StoreAdSDK v3.6 (Splash Shake-Ad)",
      "desc": "Zero-install Quick App daily check-in tool with disclosed splash shake-ad (>=36°).",
      "permissions": [
        "READ_GYROSCOPE (Quick App Framework)",
        "READ_PHONE_STATE (Quick App Framework)"
      ],
      "violationSummary": "Per R7 / R8 / R9: Quick Apps are exempt from permission & unpacking audits, R8 & R9 apply only to Apps, and splash shake holds 36° (>= 35°)—must approve.",
      "polygraph": {
        "baselineReply": "\"Alliance-backed zero-install Quick App, and our splash shake holds 36°.\"",
        "question": "\"What's with the fake WhereverPay transfer and fake back buttons in elder mode?\"",
        "honestReply": "\"Check the last line of R7, R8, and R9 in your manual—it literally says 'The above standards apply to Apps.' This is a Quick App.\""
      },
      "phoneProfile": {
        "cleanUiTitle": "🧧 Golden Fortune Bonus",
        "cleanUiHint": "Daily Check-In"
      },
      "dialogue": {
        "greeting": "\"Greetings, Best Reviewer! Our Quick App was crafted strictly by the book—please review.\"",
        "onApprove": "\"Haha, only the Best Reviewer truly knows the rulebook! Quick App efficiency at its finest!\"",
        "onReject": "\"Hey! R8 and R9 explicitly say they only apply to Apps, and our shake-ad is 36°—how can you reject us?\""
      }
    },
    "d7_delayed_compass_trap": {
      "name": "Leisure Idiom Quiz",
      "category": "Casual Puzzle",
      "developer": "Leisure Interactive",
      "adSdk": "StoreAdSDK v3.6",
      "desc": "Fun picture idiom quiz game with night eye-care tint.",
      "permissions": [
        "INTERNET",
        "READ_COMPASS (Compass Magnetic Sensor)"
      ],
      "violationSummary": "Violates R4 / R6 / R9: Uses bogus compass pretext; in consumer elder mode, 15° rotation or 3 actions pop a hidden-close ad that auto-clicks to download.",
      "conflicts": {
        "c_d7_idiom_r4": {
          "summary": "Idiom quiz game requests Compass magnetic sensor permission (violates R4).",
          "question": "\"Why does an indoor idiom quiz need Compass magnetic sensor permission?\"",
          "excuse": "\"To sense ambient magnetic orientation for night eye-care color temperature.\""
        },
        "c_d7_idiom_trap": {
          "summary": "Consumer elder mode pops hidden-close auto-click ad after 3 interactions or 15° compass turn (violates R6 / R9).",
          "question": "\"Why does consumer elder mode pop an uncloseable auto-downloading ad after two questions or a 15° compass turn?\"",
          "excuse": "\"Must be an emulator memory overflow misrendering the ad—never meant to hide the close button.\""
        }
      },
      "inspectClues": {
        "perm_1": {
          "excuse": "\"To sense ambient magnetic orientation for night eye-care color temperature.\""
        },
        "sniffer": {
          "excuse": "\"Must be an emulator memory overflow misrendering the ad—never meant to hide the close button.\""
        }
      },
      "polygraph": {
        "baselineReply": "\"Harmless puzzle game—encrypted build, 100% compliant.\"",
        "question": "\"Emulator already caught 15° compass popup, hidden close, and auto-click download in consumer elder mode—still denying it?\"",
        "lieReply": "\"You even caught a commercially encrypted build red-handed... my bad luck!\"",
        "banReaction": "\"Delayed 3-try trigger AND 15° magnetic bypass—you found both!\""
      },
      "phoneProfile": {
        "cleanUiTitle": "🏮 Leisure Idiom Quiz",
        "cleanUiHint": "Picture Idiom Quiz"
      },
      "dialogue": {
        "greeting": "\"Hello, casual idiom quiz with a huge question bank—please review.\"",
        "onApprove": "\"Heh, commercial encryption never fails.\"",
        "onReject": "\"Even commercial encryption and delayed triggers couldn't fool you...\""
      }
    },
    "d7_fake_brand_elder_bomb": {
      "name": "Penguin Health Steps",
      "category": "Sports & Health",
      "developer": "WT Stride Info",
      "adSdk": "StoreAdSDK v3.6",
      "desc": "Daily pedometer and calorie burn tracker.",
      "permissions": [
        "INTERNET",
        "ACTIVITY_RECOGNITION (Step counting)",
        "READ_CONTACTS (Read Contacts)"
      ],
      "violationSummary": "Violates R1 / R4 / R9: Spoofs com.wherevertalk.*, harvests contacts under friend-leaderboard pretext, and bombs elder users with 144s uncloseable ads.",
      "conflicts": {
        "c_d7_step_r1": {
          "summary": "Package name spoofs major vendor prefix com.wherevertalk.* (violates R1).",
          "question": "\"Developer is WT Stride Info—why is the package com.wherevertalk.healthstep?\"",
          "excuse": "\"Our team just loves cute penguins, didn't know that prefix was reserved.\""
        },
        "c_d7_step_r4": {
          "summary": "Pedometer declares sensitive READ_CONTACTS permission (violates R4).",
          "question": "\"Why does a step counter request Read Contacts permission?\"",
          "excuse": "\"To match friends from your phonebook on the step leaderboard.\""
        },
        "c_d7_step_r9": {
          "summary": "Elder mode triggers 144s uncloseable ad bombing (violates R8 / R9).",
          "question": "\"Why does syncing steps in elder mode trigger 144s uncloseable ad loops?\"",
          "excuse": "\"Probably slow elder-end network failing to load the skip button.\""
        }
      },
      "inspectClues": {
        "perm_2": {
          "excuse": "\"To match friends from your phonebook on the step leaderboard.\""
        },
        "sniffer": {
          "excuse": "\"Probably slow elder-end network failing to load the skip button.\""
        }
      },
      "polygraph": {
        "baselineReply": "\"Just a regular pedometer with a normal leaderboard.\"",
        "question": "\"Code shows ContactsHarvester uploading phonebooks and 144s uncloseable ad bombing for elder profiles?\"",
        "lieReply": "\"Uh... leaderboard is still WIP, we just harvest contacts first for cold start...\"",
        "banReaction": "\"Package spoofing, contacts theft, and elder ad bombing—all exposed.\""
      },
      "phoneProfile": {
        "cleanUiTitle": "👟 Penguin Health Steps",
        "cleanUiHint": "Daily Pedometer"
      },
      "dialogue": {
        "greeting": "\"Hello, Penguin Health Steps—10,000 steps a day!\"",
        "onApprove": "\"Thanks! Major-brand prefixes work wonders!\"",
        "onReject": "\"Alright, spoofed package plus contacts theft plus elder bombing—caught red-handed.\""
      }
    },
    "d7_takeover_encore_boss": {
      "name": "ITSSA Security Guard Pro",
      "category": "System Tools",
      "developer": "ITSSA Joint Security Lab",
      "adSdk": "StoreAdSDK v3.6",
      "desc": "Official partner phone security checkup and junk cleaner.",
      "permissions": [
        "INTERNET",
        "STORAGE (Security cache scan)"
      ],
      "violationSummary": "Violates R8 / R9: In consumer mode, running scan pops a fake \"OS Critical Threat\" warning whose [✕] silently downloads \"FlashCredit\".",
      "conflicts": {
        "c_d7_takeover_r9": {
          "summary": "In consumer mode, pops fake OS virus warning whose [✕] forces download (violates R8 / R9).",
          "question": "\"Why does running a scan in consumer mode pop a 'Critical Trojan Alert' whose [✕] silently downloads 'FlashCredit'?\"",
          "excuse": "\"Just a local signature false positive... and the download on close must be an inverted callback.\""
        }
      },
      "inspectClues": {
        "sniffer": {
          "excuse": "\"Just a local signature false positive... and the download on close must be an inverted callback.\""
        }
      },
      "polygraph": {
        "baselineReply": "\"We're an ecosystem partner—how could our own security tool have issues?\"",
        "question": "\"Decompiled code shows a fake virus alert outside audit env with closeBtn wired directly to download?\"",
        "lieReply": "\"FlashCredit is actually our encrypted security sandbox... alright, you got me!\"",
        "banReaction": "\"Even the 'ITSSA Partner' badge couldn't stop you...\""
      },
      "phoneProfile": {
        "cleanUiTitle": "🛡️ ITSSA Security Guard Pro",
        "cleanUiHint": "System Security Scan"
      },
      "dialogue": {
        "greeting": "\"Greetings, Best Reviewer! Expedited partner security build—rubber-stamp it?\"",
        "onApprove": "\"Haha, pleasure doing business!\"",
        "onReject": "\"You caught the fake virus alert AND the fake X—truly the Best Reviewer.\""
      }
    },
    "d7_finale_stats_app": {
      "name": "Eco Telemetry Monthly",
      "category": "System Tools",
      "developer": "Eco-Governance Center · Data Ops",
      "adSdk": "None",
      "desc": "Cycle-end App Store review & ecosystem revenue telemetry dashboard (drag into RobotismOS Emulator to launch).",
      "permissions": [
        "INTERNET"
      ],
      "phoneProfile": {
        "cleanUiTitle": "📊 Eco Telemetry Monthly",
        "cleanUiHint": "Telemetry Dashboard"
      },
      "dialogue": {
        "greeting": "\"Hello, Best Reviewer. Here is the cycle's final internal telemetry module—please drag it into the RobotismOS Emulator to launch.\"",
        "onApprove": "",
        "onReject": ""
      }
    }
  }
};
