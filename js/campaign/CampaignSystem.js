/* ============================================================================
   CampaignSystem — Persistence, Language, Checkpoints & CampaignRun Owner
   ============================================================================ */

import { setCurrentLang, getAvailableLocales } from '../i18n/index.js';
import { getDayLevel, MAX_CAMPAIGN_DAY } from '../levels/index.js';
import { Subsystem } from '../core/Subsystem.js';
import { CampaignRun } from './CampaignRun.js';

export const GAME_VERSION = 'early-preview 1';
export const SAVE_KEY = 'software_please_v1';

export class CampaignSystem extends Subsystem {
  constructor(kernel) {
    super(kernel);
    this.persist = {
      language: null,
      unlockedDays: 1,
      unlockedEndings: [],
      checkpoint: null,
      completedCert: null
    };
    this.run = new CampaignRun(1);
  }

  load() {
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== 'object') return;

      const supported = getAvailableLocales();
      if (parsed.language && supported.indexOf(parsed.language) !== -1) {
        this.persist.language = parsed.language;
        setCurrentLang(parsed.language);
      } else {
        this.persist.language = null;
        setCurrentLang('zh-CN');
      }
      this.persist.unlockedDays = Math.max(1, Math.min(MAX_CAMPAIGN_DAY, parsed.unlockedDays || 1));
      this.persist.unlockedEndings = Array.isArray(parsed.unlockedEndings) ? parsed.unlockedEndings : [];
      this.persist.checkpoint = parsed.checkpoint || null;
      this.persist.completedCert = parsed.completedCert || null;
    } catch (e) {
      // Ignore corrupted localStorage
    }
  }

  save() {
    try {
      localStorage.setItem(SAVE_KEY, JSON.stringify(this.persist));
    } catch (e) {
      // Ignore storage quota errors
    }
  }

  getLanguage() {
    return this.persist.language;
  }

  setLanguage(lang) {
    const supported = getAvailableLocales();
    const normalized = supported.indexOf(lang) !== -1 ? lang : null;
    this.persist.language = normalized;
    if (normalized) {
      setCurrentLang(normalized);
    }
    this.save();
  }

  hasResumableCheckpoint() {
    const cp = this.persist.checkpoint;
    return !!(cp && cp.day > 1 && cp.day <= MAX_CAMPAIGN_DAY);
  }

  startNewRun(startDay = 1) {
    this.run = new CampaignRun(startDay);
    this.saveCheckpoint();
    return this.run;
  }

  restoreFromCheckpoint() {
    if (!this.persist.checkpoint) {
      return this.startNewRun(1);
    }
    this.run = CampaignRun.fromCheckpoint(this.persist.checkpoint);
    return this.run;
  }

  saveCheckpoint() {
    this.persist.unlockedDays = Math.max(this.persist.unlockedDays, this.run.day);
    this.persist.checkpoint = this.run.toCheckpoint();
    this.save();
  }

  clearCheckpoint() {
    this.persist.checkpoint = null;
    this.save();
  }

  wipeMemory() {
    this.persist.unlockedDays = 1;
    this.persist.unlockedEndings = [];
    this.persist.checkpoint = null;
    this.persist.completedCert = null;
    this.run = new CampaignRun(1);
    this.save();
  }

  saveCompletedCert(run) {
    const target = run || this.run;
    this.persist.completedCert = {
      totalReviewed: target.stats.totalReviewed,
      correctCount: target.stats.correctCount,
      roguesCaught: target.stats.roguesCaught,
      bannedCount: target.stats.bannedCount,
      balance: target.balance
    };
    this.save();
  }

  hasCompletedCampaign() {
    return !!(this.persist.completedCert || this.persist.unlockedEndings.indexOf('complete') !== -1);
  }

  unlockEnding(endingId) {
    if (this.persist.unlockedEndings.indexOf(endingId) === -1) {
      this.persist.unlockedEndings.push(endingId);
    }
  }

  getLevel(day) {
    return getDayLevel(day);
  }

  getCurrentLevel() {
    return getDayLevel(this.run.day);
  }
}
