/* ============================================================================
   IntroSystem — Prologue Sequence & Scene Typewriter
   ============================================================================ */

import { el } from '../core/dom.js';
import { Audio } from '../core/audio.js';
import { getRaw } from '../i18n/index.js';
import { Art } from '../art/index.js';
import { Subsystem } from '../core/Subsystem.js';

export class IntroSystem extends Subsystem {
  constructor(kernel) {
    super(kernel);
    this.introIndex = 0;
    this.introTyping = false;
    this.introTimer = null;
    this.finished = false;
    this.activeSequenceKey = 'prologue.scenes';
    this.activeArtType = 'prologue';
    this.onCompleteCallback = null;
    this.screen = null;
    this.shift = null;
  }

  connect(kernel) {
    this.screen = kernel.screen;
    this.shift = kernel.shift;
  }

  init() {
    const stage = el('intro-stage');
    if (stage) {
      stage.addEventListener('click', () => this.advance());
    }
  }

  getScenes() {
    const list = getRaw(this.activeSequenceKey);
    if (!Array.isArray(list)) return [];
    const isPrologue = this.activeSequenceKey === 'prologue.scenes';
    return list.map(function (scene, idx) {
      return Object.assign({ isDecree: isPrologue ? idx === 1 : Boolean(scene.isDecree) }, scene);
    });
  }

  clearTimer() {
    clearInterval(this.introTimer);
    this.introTimer = null;
    this.introTyping = false;
  }

  start() {
    this.startSequence({
      i18nKey: 'prologue.scenes',
      artType: 'prologue',
      onComplete: () => this.shift.startNewCampaign(1)
    });
  }

  startSequence(opts = {}) {
    this.introIndex = 0;
    this.finished = false;
    this.activeSequenceKey = opts.i18nKey || 'prologue.scenes';
    this.activeArtType = opts.artType || 'prologue';
    this.onCompleteCallback = typeof opts.onComplete === 'function' ? opts.onComplete : null;
    this.screen.show('screen-intro', { fade: true });
    this.renderScene();
  }

  renderScene() {
    const scenes = this.getScenes();
    const scene = scenes[this.introIndex];
    if (!scene) {
      this.finish();
      return;
    }

    this.clearTimer();
    el('intro-chapter').textContent = scene.chapter;
    el('intro-art').innerHTML = this.activeArtType === 'day7_award'
      ? Art.getDay7AwardSceneSVG(this.introIndex)
      : Art.getIntroSceneSVG(this.introIndex);

    const card = el('intro-card');
    card.classList.toggle('decree-mode', !!scene.isDecree);

    const stamp = el('intro-stamp');
    if (scene.isDecree && scene.stampText) {
      stamp.textContent = scene.stampText;
      stamp.classList.remove('hidden');
    } else {
      stamp.classList.add('hidden');
    }

    const textEl = el('intro-text');
    const fullText = scene.text;
    let idx = 0;
    this.introTyping = true;
    textEl.textContent = '';

    this.introTimer = setInterval(() => {
      idx += 2;
      textEl.textContent = fullText.slice(0, idx);
      Audio.play('type');
      if (idx >= fullText.length) {
        this.clearTimer();
      }
    }, 22);
  }

  advance() {
    if (this.finished || !this.screen.isScreenActive('screen-intro')) return;
    const scenes = this.getScenes();
    const scene = scenes[this.introIndex];
    if (this.introTyping && scene) {
      this.clearTimer();
      el('intro-text').textContent = scene.text;
      Audio.play('click');
      return;
    }
    this.introIndex += 1;
    if (this.introIndex >= scenes.length) {
      this.finish();
      return;
    }
    Audio.play(scenes[this.introIndex].isDecree ? 'stamp' : 'intro_chord');
    this.renderScene();
  }

  finish() {
    if (this.finished) return;
    this.finished = true;
    this.clearTimer();
    Audio.play('paper');
    const cb = this.onCompleteCallback;
    this.onCompleteCallback = null;
    if (cb) {
      cb();
    } else {
      this.shift.startNewCampaign(1);
    }
  }
}
