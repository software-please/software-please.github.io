/* ============================================================================
   Game Ending Metadata (Key-Based i18n)
   ============================================================================ */

import { t, getRaw } from '../i18n/index.js';

export const ENDING_META = [
  { id: 'complete', code: '' },
  { id: 'whistleblower', code: '' },
  { id: 'obedient', code: '' },
  { id: 'fired', code: '' },
  { id: 'bankrupt', code: '' }
];

function buildEnding(meta) {
  const prefix = 'endings.' + meta.id;
  const paragraphs = getRaw(prefix + '.paragraphs');
  return {
    id: meta.id,
    code: meta.code,
    title: t(prefix + '.title'),
    subtitle: t(prefix + '.subtitle'),
    paragraphs: Array.isArray(paragraphs) ? paragraphs.slice() : []
  };
}

export function getEnding(endingId) {
  const meta = ENDING_META.find(function (m) { return m.id === endingId; }) || ENDING_META[1];
  return buildEnding(meta);
}

export function getAllEndings() {
  const map = {};
  ENDING_META.forEach(function (meta) {
    map[meta.id] = buildEnding(meta);
  });
  return map;
}

export const ENDINGS = ENDING_META;
