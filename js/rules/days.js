/* ============================================================================
   Daily Newspaper Chronicles, Unlocks & Expenses (Backed by DAY_LEVELS)
   ============================================================================ */

import { CURRENT_DATE, DAY_LEVELS, getDayLevel } from '../levels/index.js';

export { CURRENT_DATE };

export const DAYS_META = DAY_LEVELS.map(function (level) {
  const expenses = { power: 0, food: 0, coffee: 0 };
  level.expenses.forEach(function (exp) {
    if (!exp.when) {
      expenses[exp.id] = exp.cost;
    }
  });
  return {
    day: level.day,
    dateStr: level.dateStr,
    hasMemo: level.hasMemo,
    expenses
  };
});

export function getDayConfig(day) {
  return getDayLevel(day).toLegacyConfig();
}

export function getAllDays() {
  return DAY_LEVELS.map(function (level) {
    return level.toLegacyConfig();
  });
}

export const DAYS = DAYS_META;
