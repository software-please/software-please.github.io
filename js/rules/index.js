/* ============================================================================
   Rules Facade Module (Key-Based i18n)
   ============================================================================ */

import { CURRENT_DATE, DAYS_META, getDayConfig, getAllDays } from './days.js';
import { RULE_META, getRulesForDay, getAllRules } from './entries.js';
import { ENDING_META, getEnding, getAllEndings } from './endings.js';

export {
  CURRENT_DATE,
  DAYS_META,
  RULE_META,
  ENDING_META,
  getDayConfig,
  getAllDays,
  getRulesForDay,
  getAllRules,
  getEnding,
  getAllEndings
};

export const Rules = {
  CURRENT_DATE: CURRENT_DATE,
  getDayConfig: getDayConfig,
  getAllDays: getAllDays,
  getRulesForDay: getRulesForDay,
  getAllRules: getAllRules,
  getEnding: getEnding,
  getAllEndings: getAllEndings
};

Object.defineProperty(Rules, 'DAYS', { get: getAllDays, enumerable: true });
Object.defineProperty(Rules, 'RULE_ENTRIES', { get: getAllRules, enumerable: true });
Object.defineProperty(Rules, 'ENDINGS', { get: getAllEndings, enumerable: true });
