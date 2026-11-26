/* ============================================================================
   Procedural Web Audio API Synthesizer (Zero external assets)
   ============================================================================ */

let ctx = null;
let masterGain = null;
let bgmMasterGain = null;
let compressor = null;
let muted = false;
let userUnlocked = false;
let unlockBound = false;

let desiredAmbience = { mode: 'none', opts: {} };
let activeAmbience = null;

let lastTypeAt = 0;
let lastBootTypeAt = 0;
let lastGyroTickAt = 0;

function bindAutoUnlock() {
  if (unlockBound || typeof window === 'undefined') return;
  unlockBound = true;
  const events = ['pointerdown', 'keydown', 'touchstart', 'click'];
  const onUnlock = () => {
    userUnlocked = true;
    const c = ensureCtx();
    if (c && desiredAmbience.mode !== 'none' && !activeAmbience && !muted) {
      startAmbienceBundle(desiredAmbience.mode, desiredAmbience.opts);
    }
    if (c && c.state === 'running') {
      events.forEach((ev) => window.removeEventListener(ev, onUnlock, true));
    }
  };
  events.forEach((ev) => window.addEventListener(ev, onUnlock, { capture: true, passive: true }));
}

bindAutoUnlock();

function ensureCtx() {
  if (muted) return null;
  if (!ctx) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return null;
    ctx = new AudioCtx();
    masterGain = ctx.createGain();
    masterGain.gain.value = 1.15;
    bgmMasterGain = ctx.createGain();
    bgmMasterGain.gain.value = 1.0;
    compressor = ctx.createDynamicsCompressor();
    compressor.threshold.value = -14;
    compressor.knee.value = 18;
    compressor.ratio.value = 6;
    compressor.attack.value = 0.003;
    compressor.release.value = 0.15;
    bgmMasterGain.connect(masterGain);
    masterGain.connect(compressor);
    compressor.connect(ctx.destination);
  }
  if (ctx.state === 'suspended') {
    ctx.resume().catch(function () {});
  }
  return ctx;
}

function getOutputNode(c) {
  return masterGain || c.destination;
}

function tone(freq, type, duration, gainVal, delaySec, endFreq) {
  const c = ensureCtx();
  if (!c) return;
  if (!userUnlocked && c.state !== 'running') return;
  const dur = Math.max(0.01, duration || 0.05);
  const t0 = c.currentTime + (delaySec || 0);
  const peak = Math.max(0.002, gainVal || 0.08);
  const attackEnd = t0 + Math.min(0.003, dur * 0.25);

  const osc = c.createOscillator();
  const gain = c.createGain();
  osc.type = type || 'square';
  osc.frequency.setValueAtTime(freq, t0);
  if (endFreq) {
    osc.frequency.exponentialRampToValueAtTime(Math.max(20, endFreq), t0 + dur);
  }
  gain.gain.setValueAtTime(0.001, t0);
  gain.gain.exponentialRampToValueAtTime(peak, attackEnd);
  gain.gain.exponentialRampToValueAtTime(0.001, t0 + dur);
  osc.connect(gain);
  gain.connect(getOutputNode(c));
  osc.start(t0);
  osc.stop(t0 + dur + 0.015);
}

function noiseBurst(duration, filterFreq, gainVal, delaySec, filterType, q) {
  const c = ensureCtx();
  if (!c) return;
  if (!userUnlocked && c.state !== 'running') return;
  const dur = Math.max(0.008, duration || 0.05);
  const t0 = c.currentTime + (delaySec || 0);
  const bufferSize = Math.max(1, Math.floor(c.sampleRate * dur));
  const buffer = c.createBuffer(1, bufferSize, c.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i += 1) {
    data[i] = Math.random() * 2 - 1;
  }
  const src = c.createBufferSource();
  src.buffer = buffer;
  const filter = c.createBiquadFilter();
  filter.type = filterType || 'bandpass';
  filter.frequency.value = filterFreq || 1200;
  filter.Q.value = typeof q === 'number' ? q : 1.2;

  const peak = Math.max(0.002, gainVal || 0.07);
  const attackEnd = t0 + Math.min(0.002, dur * 0.2);
  const gain = c.createGain();
  gain.gain.setValueAtTime(0.001, t0);
  gain.gain.exponentialRampToValueAtTime(peak, attackEnd);
  gain.gain.exponentialRampToValueAtTime(0.001, t0 + dur);

  src.connect(filter);
  filter.connect(gain);
  gain.connect(getOutputNode(c));
  src.start(t0);
}

function keystroke(opts = {}) {
  const c = ensureCtx();
  if (!c) return;
  if (!userUnlocked && c.state !== 'running') return;

  const t0 = c.currentTime + (opts.delaySec || 0);
  const out = getOutputNode(c);

  // Layer 1: crisp mechanical switch click transient
  const clickDur = Math.max(0.003, opts.clickDur || 0.005);
  const clickSize = Math.max(1, Math.floor(c.sampleRate * clickDur));
  const clickBuf = c.createBuffer(1, clickSize, c.sampleRate);
  const clickData = clickBuf.getChannelData(0);
  for (let i = 0; i < clickSize; i += 1) {
    const env = Math.pow(1 - i / clickSize, 4.5);
    clickData[i] = (Math.random() * 2 - 1) * env;
  }
  const clickSrc = c.createBufferSource();
  clickSrc.buffer = clickBuf;
  const clickFilter = c.createBiquadFilter();
  clickFilter.type = 'highpass';
  clickFilter.frequency.value = opts.clickFreq || 4400;
  clickFilter.Q.value = 1.0;
  const clickGain = c.createGain();
  clickGain.gain.setValueAtTime(opts.clickGain || 0.20, t0);
  clickSrc.connect(clickFilter);
  clickFilter.connect(clickGain);
  clickGain.connect(out);
  clickSrc.start(t0);

  // Layer 2: PBT keycap clack
  const tapDur = Math.max(0.006, opts.tapDur || 0.014);
  const tapSize = Math.max(1, Math.floor(c.sampleRate * tapDur));
  const tapBuf = c.createBuffer(1, tapSize, c.sampleRate);
  const tapData = tapBuf.getChannelData(0);
  for (let i = 0; i < tapSize; i += 1) {
    const env = Math.pow(1 - i / tapSize, 3.6);
    tapData[i] = (Math.random() * 2 - 1) * env;
  }
  const tapSrc = c.createBufferSource();
  tapSrc.buffer = tapBuf;
  const tapFilter = c.createBiquadFilter();
  tapFilter.type = 'bandpass';
  tapFilter.frequency.value = opts.tapFreq || 2050;
  tapFilter.Q.value = typeof opts.tapQ === 'number' ? opts.tapQ : 1.6;
  const tapGain = c.createGain();
  tapGain.gain.setValueAtTime(opts.tapGain || 0.28, t0);
  tapSrc.connect(tapFilter);
  tapFilter.connect(tapGain);
  tapGain.connect(out);
  tapSrc.start(t0);

  // Layer 3: plate/chassis bottom-out thock
  const thudDur = Math.max(0.008, opts.thudDur || 0.022);
  const thudSize = Math.max(1, Math.floor(c.sampleRate * thudDur));
  const thudBuf = c.createBuffer(1, thudSize, c.sampleRate);
  const thudData = thudBuf.getChannelData(0);
  for (let i = 0; i < thudSize; i += 1) {
    const env = Math.pow(1 - i / thudSize, 2.4);
    thudData[i] = (Math.random() * 2 - 1) * env;
  }
  const thudSrc = c.createBufferSource();
  thudSrc.buffer = thudBuf;
  const thudFilter = c.createBiquadFilter();
  thudFilter.type = 'lowpass';
  thudFilter.frequency.value = opts.thudFreq || 350;
  thudFilter.Q.value = 0.9;
  const thudGain = c.createGain();
  thudGain.gain.setValueAtTime(opts.thudGain || 0.24, t0);
  thudSrc.connect(thudFilter);
  thudFilter.connect(thudGain);
  thudGain.connect(out);
  thudSrc.start(t0);
}

function stopActiveAmbience(fadeSec = 0.8) {
  const bundle = activeAmbience;
  if (!bundle) return;
  activeAmbience = null;
  if (bundle.timer) {
    clearInterval(bundle.timer);
    bundle.timer = null;
  }
  const c = ctx;
  if (c && bundle.busGain) {
    const now = c.currentTime;
    try {
      bundle.busGain.gain.cancelScheduledValues(now);
      bundle.busGain.gain.setValueAtTime(Math.max(0.0001, bundle.busGain.gain.value), now);
      bundle.busGain.gain.exponentialRampToValueAtTime(0.0001, now + fadeSec);
    } catch (_) {}
  }
  setTimeout(function () {
    bundle.nodes.forEach(function (n) {
      try {
        if (typeof n.stop === 'function') n.stop();
      } catch (_) {}
      try {
        if (typeof n.disconnect === 'function') n.disconnect();
      } catch (_) {}
    });
    if (bundle.busGain) {
      try {
        bundle.busGain.disconnect();
      } catch (_) {}
    }
  }, Math.round(fadeSec * 1000) + 80);
}

function ambienceNote(c, out, freq, type, attackSec, releaseSec, peakGain, filterFreq) {
  if (!c || !out || muted) return;
  const now = c.currentTime;
  const osc = c.createOscillator();
  const filter = c.createBiquadFilter();
  const gain = c.createGain();

  osc.type = type || 'sine';
  osc.frequency.setValueAtTime(freq, now);
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(filterFreq || 400, now);
  filter.Q.value = 0.7;

  const att = Math.max(0.05, attackSec || 0.3);
  const rel = Math.max(0.3, releaseSec || 2.0);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.linearRampToValueAtTime(Math.max(0.001, peakGain || 0.08), now + att);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + att + rel);

  osc.connect(filter);
  filter.connect(gain);
  gain.connect(out);
  osc.start(now);
  osc.stop(now + att + rel + 0.05);
}

function satireNote(c, out, freq, type, durSec, peakGain, filterFreq, delaySec, detuneCents) {
  if (!c || !out || muted) return;
  const t0 = c.currentTime + (delaySec || 0);
  const dur = Math.max(0.04, durSec || 0.25);
  const osc = c.createOscillator();
  const filter = c.createBiquadFilter();
  const gain = c.createGain();

  osc.type = type || 'triangle';
  osc.frequency.setValueAtTime(freq, t0);
  if (detuneCents) {
    osc.detune.setValueAtTime(detuneCents, t0);
  }
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(filterFreq || 760, t0);
  filter.Q.value = 0.85;

  const att = Math.min(0.035, dur * 0.25);
  gain.gain.setValueAtTime(0.0001, t0);
  gain.gain.linearRampToValueAtTime(Math.max(0.001, peakGain || 0.08), t0 + att);
  gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);

  osc.connect(filter);
  filter.connect(gain);
  gain.connect(out);
  osc.start(t0);
  osc.stop(t0 + dur + 0.04);
}

function startAmbienceBundle(mode, opts = {}) {
  const c = ensureCtx();
  if (!c || muted) return;
  if (!userUnlocked && c.state !== 'running') return;
  if (activeAmbience) {
    stopActiveAmbience(0.6);
  }

  const day = opts.day || 1;
  const dayTier = day >= 5 ? 2 : 1;
  const out = bgmMasterGain || getOutputNode(c);
  const now = c.currentTime;
  const nodes = [];

  const busGain = c.createGain();
  const targetVol = mode === 'satire' ? 0.34 : (mode === 'shift' ? 0.28 : 0.24);
  const fadeSec = mode === 'satire' ? 0.75 : 2.2;
  busGain.gain.setValueAtTime(0.0001, now);
  busGain.gain.exponentialRampToValueAtTime(targetVol, now + fadeSec);
  busGain.connect(out);

  if (mode !== 'satire') {
    // Layer 1: Continuous understated pad & booth room tone
    const droneFilter = c.createBiquadFilter();
    droneFilter.type = 'lowpass';
    const baseCutoff = mode === 'shift' ? (dayTier === 2 ? 230 : 210) : 175;
    droneFilter.frequency.setValueAtTime(baseCutoff, now);
    droneFilter.Q.value = 0.7;
    droneFilter.connect(busGain);
    nodes.push(droneFilter);

    const lfo = c.createOscillator();
    const lfoGain = c.createGain();
    lfo.type = 'sine';
    lfo.frequency.setValueAtTime(mode === 'shift' && dayTier === 2 ? 0.07 : 0.05, now);
    lfoGain.gain.setValueAtTime(24, now);
    lfo.connect(lfoGain);
    lfoGain.connect(droneFilter.frequency);
    lfo.start(now);
    nodes.push(lfo, lfoGain);

    const droneVoices = [
      { freq: 73.42, type: 'sine', detune: 0, vol: 0.14 },
      { freq: 110.00, type: 'sine', detune: 3, vol: 0.08 },
      { freq: 87.31, type: 'sine', detune: -2, vol: 0.045 }
    ];
    droneVoices.forEach(function (v) {
      const osc = c.createOscillator();
      const g = c.createGain();
      osc.type = v.type;
      osc.frequency.setValueAtTime(v.freq, now);
      if (v.detune) osc.detune.setValueAtTime(v.detune, now);
      g.gain.setValueAtTime(v.vol, now);
      osc.connect(g);
      g.connect(droneFilter);
      osc.start(now);
      nodes.push(osc, g);
    });

    if (mode === 'shift') {
      const humLen = Math.floor(c.sampleRate * 2);
      const humBuf = c.createBuffer(1, humLen, c.sampleRate);
      const humData = humBuf.getChannelData(0);
      for (let i = 0; i < humLen; i += 1) {
        humData[i] = Math.random() * 2 - 1;
      }
      const humSrc = c.createBufferSource();
      humSrc.buffer = humBuf;
      humSrc.loop = true;
      const humFilter = c.createBiquadFilter();
      humFilter.type = 'bandpass';
      humFilter.frequency.value = 120;
      humFilter.Q.value = 1.4;
      const humGain = c.createGain();
      humGain.gain.setValueAtTime(0.015, now);
      humSrc.connect(humFilter);
      humFilter.connect(humGain);
      humGain.connect(busGain);
      humSrc.start(now);
      nodes.push(humSrc, humFilter, humGain);
    }
  }

  // Layer 2: Pattern / Motif Scheduler
  let step = 0;
  const shiftBass = [
    73.42, 110.0, 87.31, 82.41,
    73.42, 65.41, 58.27, 55.00,
    73.42, 98.00, 87.31, 82.41,
    65.41, 73.42, 55.00, 65.41
  ];
  const shiftChimes = [293.66, 261.63, 220.0, 174.61, 220.0, 196.0, 174.61, 164.81];
  const endingNotes = [220.0, 196.0, 174.61, 146.83];

  // Deadpan ceremonial corporate-anthem satire (Bb Major with subtle sour institutional inflections)
  const satireBass = [
    58.27, 0, 87.31, 0,  58.27, 0, 49.00, 0,
    77.78, 0, 65.41, 0,  43.65, 0, 43.65, 0,
    58.27, 0, 87.31, 0,  49.00, 0, 77.78, 0,
    54.99, 0, 43.65, 0,  58.27, 0, 43.65, 0
  ];
  const satireChords = [
    [116.54, 146.83, 174.61],
    [130.81, 174.61, 220.00],
    [146.83, 174.61, 196.00],
    [138.59, 174.61, 207.65]
  ];
  const satireLead = [
    233.08, 0, 293.66, 0,  349.23, 0, 466.16, 0,
    440.00, 0, 392.00, 0,  349.23, 0, 0, 0,
    293.66, 0, 349.23, 0,  392.00, 0, 369.99, 0,
    329.63, 0, 349.23, 293.66,  261.63, 0, 233.08, 0
  ];

  const intervalMs = mode === 'satire'
    ? 340
    : (mode === 'shift' ? (dayTier === 2 ? 2350 : 2600) : 3600);

  const tick = () => {
    if (muted || (typeof document !== 'undefined' && document.hidden)) return;
    if (!ctx || ctx.state !== 'running') return;
    if (!activeAmbience || activeAmbience.busGain !== busGain) return;

    if (mode === 'satire') {
      const idx = step % 32;
      const bFreq = satireBass[idx];
      if (bFreq > 0) {
        satireNote(ctx, busGain, bFreq, 'triangle', 0.56, 0.16, 340);
        satireNote(ctx, busGain, bFreq, 'sawtooth', 0.48, 0.045, 260);
      }
      if (idx % 4 === 0) {
        noiseBurst(0.018, 2200, 0.018, 0, 'bandpass', 2.2);
      }
      if (idx % 8 === 0) {
        const ch = satireChords[Math.floor(idx / 8) % satireChords.length];
        const chDetune = idx === 24 ? -10 : 0;
        ch.forEach(function (f) {
          satireNote(ctx, busGain, f, 'triangle', 1.15, 0.042, 620, 0, chDetune);
        });
      }
      const lFreq = satireLead[idx];
      if (lFreq > 0) {
        const isSour = idx === 22 || idx === 24;
        const dur = (idx === 6 || idx === 12 || idx === 30) ? 0.85 : 0.44;
        const detune = isSour ? -14 : 0;
        satireNote(ctx, busGain, lFreq, 'sawtooth', dur, 0.052, 860, 0, detune);
        satireNote(ctx, busGain, lFreq, 'triangle', dur, 0.048, 980, 0, detune);
      }
    } else if (mode === 'shift') {
      const bFreq = shiftBass[step % shiftBass.length];
      ambienceNote(ctx, busGain, bFreq, 'sine', 0.45, 2.4, 0.10, 260);
      if (step % 3 === 1) {
        const cFreq = shiftChimes[Math.floor(step / 3) % shiftChimes.length];
        ambienceNote(ctx, busGain, cFreq, 'sine', 0.35, 2.8, 0.042, 680);
      }
    } else if (mode === 'ending') {
      const eFreq = endingNotes[step % endingNotes.length];
      ambienceNote(ctx, busGain, eFreq, 'sine', 0.7, 3.2, 0.05, 560);
    }
    step += 1;
  };

  const timer = setInterval(tick, intervalMs);
  activeAmbience = {
    mode: mode,
    dayTier: dayTier,
    busGain: busGain,
    nodes: nodes,
    timer: timer
  };
  setTimeout(tick, 180);
}

export function setAmbience(mode, opts = {}) {
  const nextMode = mode || 'none';
  if (nextMode === 'none') {
    desiredAmbience = { mode: 'none', opts: {} };
    stopActiveAmbience(0.9);
    return;
  }
  const day = opts.day || 1;
  const dayTier = day >= 5 ? 2 : 1;
  desiredAmbience = { mode: nextMode, opts: Object.assign({}, opts) };

  if (activeAmbience && activeAmbience.mode === nextMode && activeAmbience.dayTier === dayTier) {
    return;
  }
  if (!muted) {
    startAmbienceBundle(nextMode, desiredAmbience.opts);
  }
}

export function initAudio() {
  userUnlocked = true;
  ensureCtx();
  if (desiredAmbience.mode !== 'none' && !activeAmbience && !muted) {
    startAmbienceBundle(desiredAmbience.mode, desiredAmbience.opts);
  }
}

export function setMuted(m) {
  muted = !!m;
  if (muted) {
    stopActiveAmbience(0.1);
  } else if (desiredAmbience.mode !== 'none') {
    userUnlocked = true;
    startAmbienceBundle(desiredAmbience.mode, desiredAmbience.opts);
  }
}

export function toggleMute() {
  muted = !muted;
  if (muted) {
    stopActiveAmbience(0.1);
  } else {
    userUnlocked = true;
    play('click');
    if (desiredAmbience.mode !== 'none') {
      startAmbienceBundle(desiredAmbience.mode, desiredAmbience.opts);
    }
  }
  return muted;
}

export function isMuted() {
  return muted;
}

export function play(name) {
  if (muted) return;
  switch (name) {
    case 'click':
      tone(620, 'square', 0.04, 0.04, 0, 400);
      break;

    // Boot Terminal SFX
    case 'boot_beep':
      tone(920, 'square', 0.11, 0.07, 0);
      break;
    case 'boot_type': {
      const now = Date.now();
      if (now - lastBootTypeAt < 24) return;
      lastBootTypeAt = now;
      keystroke({
        clickFreq: 4200 + Math.random() * 1400,
        clickGain: 0.18 + Math.random() * 0.08,
        tapFreq: 1750 + Math.random() * 750,
        tapQ: 1.6,
        tapDur: 0.014,
        tapGain: 0.26 + Math.random() * 0.09,
        thudFreq: 310 + Math.random() * 120,
        thudDur: 0.022,
        thudGain: 0.22 + Math.random() * 0.07
      });
      break;
    }
    case 'boot_space': {
      const now = Date.now();
      if (now - lastBootTypeAt < 24) return;
      lastBootTypeAt = now;
      keystroke({
        clickFreq: 3000,
        clickGain: 0.12,
        tapFreq: 920 + Math.random() * 200,
        tapQ: 1.5,
        tapDur: 0.020,
        tapGain: 0.24,
        thudFreq: 195 + Math.random() * 45,
        thudDur: 0.032,
        thudGain: 0.30
      });
      keystroke({
        delaySec: 0.028,
        clickFreq: 3800,
        clickGain: 0.07,
        tapFreq: 2100,
        tapDur: 0.008,
        tapGain: 0.08,
        thudGain: 0.04
      });
      break;
    }
    case 'boot_newline':
    case 'boot_select':
      keystroke({
        clickFreq: 3600,
        clickGain: 0.22,
        tapFreq: 1320,
        tapQ: 1.5,
        tapDur: 0.020,
        tapGain: 0.32,
        thudFreq: 230,
        thudDur: 0.032,
        thudGain: 0.32
      });
      keystroke({
        delaySec: 0.026,
        clickFreq: 4400,
        clickGain: 0.10,
        tapFreq: 2500,
        tapDur: 0.010,
        tapGain: 0.11,
        thudGain: 0.05
      });
      break;
    case 'boot_launch':
      tone(523, 'triangle', 0.12, 0.09, 0);
      tone(784, 'triangle', 0.24, 0.09, 0.1);
      break;

    // Typing & Dialogue SFX
    case 'type': {
      const now = Date.now();
      if (now - lastTypeAt < 40) return;
      lastTypeAt = now;
      keystroke({
        clickFreq: 4000 + Math.random() * 1200,
        clickGain: 0.13 + Math.random() * 0.05,
        tapFreq: 1700 + Math.random() * 650,
        tapQ: 1.5,
        tapDur: 0.013,
        tapGain: 0.19 + Math.random() * 0.06,
        thudFreq: 300 + Math.random() * 90,
        thudDur: 0.019,
        thudGain: 0.16 + Math.random() * 0.05
      });
      break;
    }
    case 'type_auditor': {
      const now = Date.now();
      if (now - lastTypeAt < 45) return;
      lastTypeAt = now;
      tone(290 + Math.random() * 55, 'triangle', 0.028, 0.06, 0, 240);
      noiseBurst(0.008, 2200, 0.03, 0, 'highpass', 1.0);
      break;
    }
    case 'type_dev': {
      const now = Date.now();
      if (now - lastTypeAt < 45) return;
      lastTypeAt = now;
      tone(460 + Math.random() * 110, 'triangle', 0.026, 0.055, 0, 380);
      noiseBurst(0.008, 2800, 0.025, 0, 'highpass', 1.0);
      break;
    }

    // Paper, Desk & Shift SFX
    case 'newspaper':
      noiseBurst(0.11, 1400, 0.09, 0, 'bandpass', 0.9);
      noiseBurst(0.09, 2100, 0.06, 0.08, 'bandpass', 1.1);
      break;
    case 'paper':
      noiseBurst(0.075, 1850, 0.075, 0, 'bandpass', 1.0);
      break;
    case 'stamp':
      tone(130, 'triangle', 0.12, 0.22, 0, 48);
      noiseBurst(0.05, 700, 0.14);
      break;
    case 'bell':
      tone(880, 'triangle', 0.16, 0.1, 0);
      tone(1318, 'sine', 0.28, 0.09, 0.08);
      tone(2636, 'sine', 0.18, 0.03, 0.08);
      break;
    case 'coin':
      tone(987, 'square', 0.08, 0.06, 0);
      tone(1318, 'square', 0.16, 0.06, 0.07);
      break;
    case 'bonus':
      tone(784, 'square', 0.07, 0.06, 0);
      tone(987, 'square', 0.07, 0.06, 0.06);
      tone(1318, 'square', 0.09, 0.07, 0.12);
      tone(1568, 'square', 0.18, 0.07, 0.19);
      break;
    case 'citation':
      noiseBurst(0.045, 2800, 0.075, 0, 'bandpass', 2.0);
      noiseBurst(0.045, 2800, 0.075, 0.07, 'bandpass', 2.0);
      noiseBurst(0.045, 2800, 0.075, 0.14, 'bandpass', 2.0);
      tone(185, 'sawtooth', 0.11, 0.09, 0, 145);
      tone(155, 'sawtooth', 0.15, 0.09, 0.12, 110);
      break;
    case 'analyzer_scan':
      tone(620, 'sine', 0.06, 0.06, 0, 920);
      tone(920, 'sine', 0.08, 0.06, 0.07, 1180);
      break;
    case 'analyzer_done':
      tone(740, 'triangle', 0.07, 0.07, 0);
      tone(1108, 'triangle', 0.13, 0.07, 0.065);
      break;
    case 'tool_blocked':
      tone(220, 'triangle', 0.07, 0.08, 0, 180);
      tone(175, 'triangle', 0.09, 0.08, 0.085, 140);
      break;
    case 'clock_end':
      tone(659, 'triangle', 0.18, 0.1, 0);
      tone(523, 'triangle', 0.32, 0.1, 0.16);
      break;

    // Android Emulator SFX
    case 'emu_install':
      tone(523, 'sine', 0.06, 0.07, 0);
      tone(659, 'sine', 0.06, 0.07, 0.055);
      tone(880, 'sine', 0.12, 0.07, 0.11);
      break;
    case 'emu_reboot':
      tone(520, 'triangle', 0.14, 0.07, 0, 160);
      tone(340, 'sine', 0.12, 0.06, 0.22, 680);
      break;
    case 'emu_switch':
      tone(760, 'square', 0.025, 0.045, 0, 520);
      noiseBurst(0.012, 2400, 0.05, 0, 'highpass', 1.0);
      break;
    case 'emu_perm_allow':
      tone(660, 'sine', 0.05, 0.06, 0, 820);
      break;
    case 'emu_perm_deny':
      tone(340, 'triangle', 0.06, 0.06, 0, 240);
      break;
    case 'gyro_tick': {
      const now = Date.now();
      if (now - lastGyroTickAt < 70) return;
      lastGyroTickAt = now;
      tone(900, 'triangle', 0.012, 0.025, 0, 620);
      break;
    }

    // Existing Desk, Interrogation & Polygraph SFX
    case 'shake':
      noiseBurst(0.06, 900, 0.09, 0);
      noiseBurst(0.06, 1100, 0.08, 0.09);
      noiseBurst(0.06, 850, 0.08, 0.18);
      break;
    case 'ad_splash':
      tone(523, 'triangle', 0.06, 0.065, 0);
      tone(659, 'triangle', 0.06, 0.065, 0.055);
      tone(784, 'square', 0.06, 0.05, 0.11);
      tone(1046, 'triangle', 0.14, 0.075, 0.165);
      break;
    case 'ad_landing':
      tone(380, 'triangle', 0.14, 0.07, 0, 960);
      tone(784, 'square', 0.08, 0.05, 0.13);
      tone(1046, 'triangle', 0.18, 0.07, 0.18);
      break;
    case 'ad_popup':
      if (Math.random() < 0.5) {
        tone(260, 'triangle', 0.11, 0.09, 0, 880);
        tone(880, 'sawtooth', 0.09, 0.055, 0.09, 520);
      } else {
        tone(520, 'square', 0.06, 0.06, 0, 1180);
        tone(980, 'triangle', 0.09, 0.07, 0.065, 420);
      }
      break;
    case 'ad_download':
      tone(740, 'triangle', 0.06, 0.05, 0.02, 1080);
      tone(466, 'sawtooth', 0.12, 0.065, 0, 440);
      tone(415, 'sawtooth', 0.12, 0.065, 0.12, 392);
      tone(370, 'sawtooth', 0.24, 0.07, 0.24, 240);
      break;
    case 'ad_trap':
      tone(310, 'sawtooth', 0.09, 0.075, 0, 275);
      tone(465, 'square', 0.09, 0.04, 0, 415);
      tone(310, 'sawtooth', 0.09, 0.075, 0.12, 275);
      tone(465, 'square', 0.09, 0.04, 0.12, 415);
      break;
    case 'hook_zap':
      tone(220, 'sawtooth', 0.28, 0.08, 0, 1240);
      tone(440, 'square', 0.18, 0.06, 0.12, 1680);
      break;
    case 'inspect':
      tone(540, 'triangle', 0.06, 0.07, 0, 720);
      break;
    case 'intercom':
      noiseBurst(0.035, 2400, 0.06);
      tone(1120, 'square', 0.045, 0.05, 0.03, 1380);
      break;
    case 'discrepancy':
      tone(320, 'sawtooth', 0.08, 0.08, 0, 290);
      tone(240, 'sawtooth', 0.14, 0.09, 0.09, 190);
      break;
    case 'no_conflict':
      tone(480, 'triangle', 0.05, 0.04, 0);
      tone(520, 'triangle', 0.05, 0.04, 0.06);
      break;
    case 'polygraph_scan':
      tone(880, 'sine', 0.04, 0.05, 0);
      tone(880, 'sine', 0.04, 0.05, 0.22);
      tone(880, 'sine', 0.04, 0.05, 0.44);
      tone(880, 'sine', 0.04, 0.05, 0.66);
      break;
    case 'polygraph_lie':
      tone(980, 'sawtooth', 0.11, 0.09, 0, 1240);
      tone(980, 'sawtooth', 0.11, 0.09, 0.13, 1240);
      tone(980, 'sawtooth', 0.13, 0.09, 0.26, 1280);
      break;
    case 'polygraph_pass':
      tone(660, 'sine', 0.09, 0.06, 0);
      tone(784, 'sine', 0.12, 0.06, 0.11);
      break;
    case 'ban':
      tone(95, 'triangle', 0.22, 0.24, 0, 38);
      noiseBurst(0.14, 520, 0.18);
      tone(190, 'square', 0.07, 0.09, 0.16, 120);
      break;
    case 'intro_chord':
      tone(110, 'triangle', 0.85, 0.11, 0, 98);
      tone(165, 'sawtooth', 0.75, 0.045, 0.04, 146);
      break;

    // Ledger, Minigames & Endings SFX
    case 'ledger_open':
      noiseBurst(0.09, 1500, 0.07, 0, 'bandpass', 1.0);
      tone(440, 'triangle', 0.1, 0.05, 0.04);
      break;
    case 'cash_register':
      tone(880, 'triangle', 0.07, 0.08, 0);
      tone(1318, 'triangle', 0.1, 0.08, 0.065);
      tone(1760, 'sine', 0.18, 0.07, 0.13);
      break;
    case 'whack_spawn':
      tone(700, 'square', 0.04, 0.045, 0, 960);
      break;
    case 'countdown_tick':
      tone(1040, 'square', 0.025, 0.045, 0, 880);
      break;
    case 'ending_good':
      tone(261.6, 'triangle', 0.7, 0.09, 0);
      tone(329.6, 'triangle', 0.7, 0.07, 0.05);
      tone(392.0, 'sine', 0.8, 0.07, 0.1);
      break;
    case 'ending_bad':
      tone(130.8, 'sawtooth', 0.75, 0.08, 0, 116);
      tone(155.6, 'triangle', 0.7, 0.08, 0.06, 138);
      break;

    default:
      break;
  }
}

export const Audio = {
  init: initAudio,
  setMuted: setMuted,
  toggleMute: toggleMute,
  isMuted: isMuted,
  setAmbience: setAmbience,
  play: play
};
