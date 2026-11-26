/* ============================================================================
   BootSystem — DOS Boot Terminal & Language Selection
   ============================================================================ */

import { el } from '../core/dom.js';
import { Audio } from '../core/audio.js';
import { Subsystem } from '../core/Subsystem.js';

const BOOT_LINES = {
  os: 'HugeHard FourBlock [Version 12.0.11451.4]',
  copy: 'Copyright (c) 1226 HugeHard Corporation. All rights reserved.',
  cmd: 'C:\\> SOFTWARE_PLEASE.EXE',
  prompt: 'Select your language:',
  opt1: '1. 使用简体中文作为主要语言',
  opt2: '2. Use English as primary language',
  inputLabel: 'Enter your choice: ',
  starting: 'STARTING SOFTWARE, PLEASE...'
};

export class BootSystem extends Subsystem {
  constructor(kernel) {
    super(kernel);
    this.phase = 'idle'; // 'idle' | 'typing_prompt' | 'awaiting_choice' | 'starting'
    this.bootScreenEl = null;
    this.timers = [];
    this.campaign = null;
    this.screen = null;
  }

  connect(kernel) {
    this.campaign = kernel.campaign;
    this.screen = kernel.screen;
  }

  init() {
    const bootTerm = el('boot-terminal');
    if (bootTerm && !bootTerm.dataset.bootBound) {
      bootTerm.dataset.bootBound = '1';
      bootTerm.addEventListener('click', (e) => {
        const opt = e.target.closest('.boot-opt[data-lang-choice]');
        if (opt) {
          this.selectLanguage(
            opt.getAttribute('data-lang-choice'),
            opt.getAttribute('data-lang')
          );
          return;
        }
        this.skipTyping();
      });
    }
  }

  ensureBootScreenEl() {
    if (!this.bootScreenEl) {
      this.bootScreenEl = el('screen-boot');
    }
    return this.bootScreenEl;
  }

  mount() {
    const bootEl = this.ensureBootScreenEl();
    if (!bootEl) return null;
    if (!bootEl.parentNode) {
      const app = el('app');
      if (app) {
        app.insertBefore(bootEl, app.firstChild);
      }
    }
    return bootEl;
  }

  unmount() {
    const bootEl = this.ensureBootScreenEl();
    this.clearTimers();
    if (bootEl) {
      bootEl.classList.remove('active', 'boot-fading-out', 'title-fading-in', 'screen-fading-out', 'screen-fading-in');
      if (bootEl.parentNode) {
        bootEl.parentNode.removeChild(bootEl);
      }
    }
    this.phase = 'idle';
  }

  clearTimers() {
    while (this.timers.length) {
      clearTimeout(this.timers.pop());
    }
  }

  scheduleTimeout(fn, ms) {
    const id = setTimeout(fn, ms);
    this.timers.push(id);
    return id;
  }

  typeBootLine(node, text, charDelayMs, onDone, getCharDelay) {
    if (!node) {
      if (onDone) onDone();
      return;
    }
    let idx = 0;
    node.textContent = '';
    const step = () => {
      idx += 1;
      const ch = text.charAt(idx - 1);
      node.textContent = text.slice(0, idx);
      Audio.play(ch === ' ' ? 'boot_space' : 'boot_type');
      if (idx >= text.length) {
        if (onDone) onDone();
        return;
      }
      let nextDelay;
      if (getCharDelay) {
        nextDelay = getCharDelay(ch, idx - 1, text);
      } else {
        const base = charDelayMs || 28;
        nextDelay = Math.round(base * (0.65 + Math.random() * 0.75));
        if (ch === '.' || ch === ':' || ch === ',' || ch === ']' || ch === '>' || ch === '\\') {
          nextDelay += 38;
        } else if (ch === ' ') {
          nextDelay += 12;
        }
      }
      this.scheduleTimeout(step, nextDelay);
    };
    this.scheduleTimeout(step, charDelayMs || 28);
  }

  completePromptImmediately() {
    this.clearTimers();
    const osEl = el('boot-line-os');
    const copyEl = el('boot-line-copy');
    const cmdEl = el('boot-line-cmd');
    const promptEl = el('boot-line-prompt');
    const opt1El = el('boot-opt-1');
    const opt2El = el('boot-opt-2');
    const inputLabelEl = el('boot-input-label');
    const cursorEl = el('boot-cursor');

    if (osEl) osEl.textContent = BOOT_LINES.os;
    if (copyEl) copyEl.textContent = BOOT_LINES.copy;
    if (cmdEl) cmdEl.textContent = BOOT_LINES.cmd;
    if (promptEl) promptEl.textContent = BOOT_LINES.prompt;
    if (opt1El) {
      opt1El.textContent = BOOT_LINES.opt1;
      opt1El.classList.add('is-ready');
    }
    if (opt2El) {
      opt2El.textContent = BOOT_LINES.opt2;
      opt2El.classList.add('is-ready');
    }
    if (inputLabelEl) inputLabelEl.textContent = BOOT_LINES.inputLabel;
    if (cursorEl) cursorEl.classList.remove('hidden');
    this.phase = 'awaiting_choice';
  }

  start() {
    this.clearTimers();
    this.screen.clearFadeTimer();
    this.mount();
    this.phase = 'typing_prompt';

    const osEl = el('boot-line-os');
    const copyEl = el('boot-line-copy');
    const cmdEl = el('boot-line-cmd');
    const promptEl = el('boot-line-prompt');
    const opt1El = el('boot-opt-1');
    const opt2El = el('boot-opt-2');
    const inputLabelEl = el('boot-input-label');
    const inputValEl = el('boot-input-val');
    const cursorEl = el('boot-cursor');
    const startingEl = el('boot-line-starting');

    [osEl, copyEl, cmdEl, promptEl, opt1El, opt2El, inputLabelEl, inputValEl, startingEl].forEach(function (n) {
      if (n) n.textContent = '';
    });
    if (opt1El) opt1El.classList.remove('is-ready', 'is-selected');
    if (opt2El) opt2El.classList.remove('is-ready', 'is-selected');
    if (cursorEl) cursorEl.classList.add('hidden');

    this.screen.show('screen-boot');
    Audio.play('boot_beep');

    const steps = [
      { el: osEl, text: BOOT_LINES.os, charMs: 16, pauseMs: 140 },
      { el: copyEl, text: BOOT_LINES.copy, charMs: 16, pauseMs: 90 },
      { el: cmdEl, text: BOOT_LINES.cmd, charMs: 24, pauseMs: 160 },
      { el: promptEl, text: BOOT_LINES.prompt, charMs: 22, pauseMs: 120 },
      { el: opt1El, text: BOOT_LINES.opt1, charMs: 20, pauseMs: 90 },
      { el: opt2El, text: BOOT_LINES.opt2, charMs: 20, pauseMs: 90 },
      { el: inputLabelEl, text: BOOT_LINES.inputLabel, charMs: 22, pauseMs: 100 }
    ];

    const runStep = (index) => {
      if (index >= steps.length) {
        if (cursorEl) cursorEl.classList.remove('hidden');
        if (opt1El) opt1El.classList.add('is-ready');
        if (opt2El) opt2El.classList.add('is-ready');
        this.phase = 'awaiting_choice';
        return;
      }
      const step = steps[index];
      this.scheduleTimeout(() => {
        this.typeBootLine(step.el, step.text, step.charMs, () => {
          Audio.play('boot_newline');
          runStep(index + 1);
        });
      }, step.pauseMs);
    };

    runStep(0);
  }

  skipTyping() {
    if (this.phase !== 'typing_prompt') return;
    Audio.init();
    Audio.play('click');
    this.completePromptImmediately();
  }

  selectLanguage(choiceNum, langCode) {
    if (this.phase === 'idle' || this.phase === 'starting') return;
    if (this.phase === 'typing_prompt') {
      this.completePromptImmediately();
    }
    if (this.phase !== 'awaiting_choice') return;

    this.phase = 'starting';
    this.clearTimers();
    Audio.init();
    Audio.play('boot_select');

    const normalizedChoice = String(choiceNum) === '2' ? '2' : '1';
    const normalizedLang = langCode || (normalizedChoice === '2' ? 'en-US' : 'zh-CN');

    const opt1El = el('boot-opt-1');
    const opt2El = el('boot-opt-2');
    const inputValEl = el('boot-input-val');
    const cursorEl = el('boot-cursor');
    const startingEl = el('boot-line-starting');

    if (opt1El) {
      opt1El.classList.remove('is-ready');
      opt1El.classList.toggle('is-selected', normalizedChoice === '1');
    }
    if (opt2El) {
      opt2El.classList.remove('is-ready');
      opt2El.classList.toggle('is-selected', normalizedChoice === '2');
    }
    if (inputValEl) inputValEl.textContent = normalizedChoice;
    if (cursorEl) cursorEl.classList.add('hidden');

    this.campaign.setLanguage(normalizedLang);
    this.screen.refreshTitle();

    this.scheduleTimeout(() => {
      this.typeBootLine(
        startingEl,
        BOOT_LINES.starting,
        95,
        () => {
          this.scheduleTimeout(() => {
            Audio.play('boot_launch');
            const bootScreen = this.ensureBootScreenEl();
            const titleScreen = el('screen-title');
            if (titleScreen) {
              titleScreen.classList.add('active', 'title-fading-in');
              titleScreen.classList.remove('is-entering');
              void titleScreen.offsetWidth;
              titleScreen.classList.add('is-entering');
            }
            if (bootScreen) {
              bootScreen.classList.add('boot-fading-out');
            }
            this.scheduleTimeout(() => {
              this.unmount();
              if (titleScreen) {
                titleScreen.classList.remove('title-fading-in');
              }
            }, 1120);
          }, 900);
        },
        (ch) => (ch === '.' ? 260 : 95)
      );
    }, 320);
  }
}
