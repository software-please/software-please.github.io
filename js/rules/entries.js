/* ============================================================================
   Audit Rulebook Definitions (Key-Based i18n)
   ============================================================================ */

import { t, getRaw } from '../i18n/index.js';

export const RULE_META = [
  { id: 'R1', category: 'naming', unlockDay: 1 },
  { id: 'R2', category: 'naming', unlockDay: 1 },
  { id: 'R3', category: 'naming', unlockDay: 1 },
  { id: 'R4', category: 'permissions', unlockDay: 2 },
  { id: 'R5', category: 'ads', unlockDay: 3 },
  { id: 'R6', category: 'ads', unlockDay: 4 },
  { id: 'R7', category: 'ads', unlockDay: 4 },
  { id: 'R8', category: 'ads', unlockDay: 5 },
  { id: 'R9', category: 'ads', unlockDay: 6 }
];

function buildRuleEntry(meta) {
  const prefix = 'rules.' + meta.id;
  const points = getRaw(prefix + '.points');
  return {
    id: meta.id,
    category: meta.category,
    unlockDay: meta.unlockDay,
    title: t(prefix + '.title'),
    points: Array.isArray(points) ? points.slice() : [],
    text: t(prefix + '.text')
  };
}

export function getRulesForDay(day) {
  return RULE_META
    .filter(function (meta) { return meta.unlockDay <= day; })
    .map(buildRuleEntry);
}

export function getAllRules() {
  return RULE_META.map(buildRuleEntry);
}

export const RULE_ENTRIES = RULE_META;
