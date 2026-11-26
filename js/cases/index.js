/* ============================================================================
   Cases Aggregator & Fixed Daily Order Dispatcher (Key-Based i18n)
   ============================================================================ */

import { t, getRaw, hasKey } from '../i18n/index.js';
import { DAY_1_CASES } from './day1.js';
import { DAY_2_CASES } from './day2.js';
import { DAY_3_CASES } from './day3.js';
import { DAY_4_CASES } from './day4.js';
import { DAY_5_CASES } from './day5.js';
import { DAY_6_CASES } from './day6.js';
import { DAY_7_CASES } from './day7.js';

const DAYS_CASES = {
  1: DAY_1_CASES,
  2: DAY_2_CASES,
  3: DAY_3_CASES,
  4: DAY_4_CASES,
  5: DAY_5_CASES,
  6: DAY_6_CASES,
  7: DAY_7_CASES
};

function mergeLocalizedCase(baseCase) {
  const cloned = Object.assign({}, baseCase);
  const prefix = 'cases.' + baseCase.id;
  if (!hasKey(prefix)) return cloned;

  ['name', 'category', 'developer', 'adSdk', 'desc', 'violationSummary'].forEach(function (field) {
    const key = prefix + '.' + field;
    if (hasKey(key)) cloned[field] = t(key);
  });

  const perms = getRaw(prefix + '.permissions');
  if (Array.isArray(perms)) {
    cloned.permissions = perms.slice();
  }

  if (Array.isArray(baseCase.conflicts)) {
    cloned.conflicts = baseCase.conflicts.map(function (cf) {
      const cfCopy = Object.assign({}, cf);
      const cfPrefix = prefix + '.conflicts.' + cf.id;
      ['summary', 'question', 'excuse'].forEach(function (ck) {
        const key = cfPrefix + '.' + ck;
        if (hasKey(key)) cfCopy[ck] = t(key);
      });
      return cfCopy;
    });
  }

  if (baseCase.inspectClues) {
    cloned.inspectClues = {};
    Object.keys(baseCase.inspectClues).forEach(function (clueKey) {
      const clueCopy = Object.assign({}, baseCase.inspectClues[clueKey]);
      const key = prefix + '.inspectClues.' + clueKey + '.excuse';
      if (hasKey(key)) clueCopy.excuse = t(key);
      cloned.inspectClues[clueKey] = clueCopy;
    });
  }

  if (baseCase.polygraph || hasKey(prefix + '.polygraph')) {
    const polyCopy = Object.assign({}, baseCase.polygraph || {});
    ['baselineReply', 'question', 'lieReply', 'honestReply', 'banReaction'].forEach(function (pk) {
      const key = prefix + '.polygraph.' + pk;
      if (hasKey(key)) polyCopy[pk] = t(key);
    });
    cloned.polygraph = polyCopy;
  }

  if (baseCase.phoneProfile || hasKey(prefix + '.phoneProfile')) {
    const phoneCopy = Object.assign({}, baseCase.phoneProfile || {});
    ['cleanUiTitle', 'cleanUiHint', 'downloadTargetName', 'hookSwitchName', 'cloudUrl', 'hookCodeSnippet'].forEach(function (phk) {
      const key = prefix + '.phoneProfile.' + phk;
      if (hasKey(key)) phoneCopy[phk] = t(key);
    });
    cloned.phoneProfile = phoneCopy;
  }

  if (baseCase.dialogue || hasKey(prefix + '.dialogue')) {
    const dlgCopy = Object.assign({}, baseCase.dialogue || {});
    ['greeting', 'onApprove', 'onReject'].forEach(function (dk) {
      const key = prefix + '.dialogue.' + dk;
      if (hasKey(key)) dlgCopy[dk] = t(key);
    });
    cloned.dialogue = dlgCopy;
  }

  return cloned;
}

export function getDayCases(day) {
  const list = DAYS_CASES[day] || [];
  const cloned = list.map(mergeLocalizedCase);
  const regular = cloned.filter(function (c) {
    return !c.isFinalChoice;
  });
  const finalCases = cloned.filter(function (c) {
    return !!c.isFinalChoice;
  });

  return regular.concat(finalCases);
}

export const Cases = {
  getDayCases: getDayCases
};
