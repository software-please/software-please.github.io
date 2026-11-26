/* ============================================================================
   Declarative DayLevel Definitions (Days 1 - 6)
   ============================================================================ */

import { DayLevel } from './DayLevel.js';

export const CURRENT_DATE = '1226-11-22';
export const MAX_CAMPAIGN_DAY = 7;

export const DAY_LEVELS = [
  new DayLevel({
    day: 1,
    dateStr: '1226-11-22',
    hasMemo: false,
    expenses: [
      { id: 'power', labelKey: 'game.ledger.exp_power', cost: 2.5, defaultChecked: true },
      { id: 'food', labelKey: 'game.ledger.exp_food', cost: 2.5, defaultChecked: true }
    ]
  }),
  new DayLevel({
    day: 2,
    dateStr: '1226-11-23',
    hasMemo: false,
    expenses: [
      { id: 'power', labelKey: 'game.ledger.exp_power', cost: 3.0, defaultChecked: true },
      { id: 'food', labelKey: 'game.ledger.exp_food', cost: 3.0, defaultChecked: true },
      { id: 'coffee', labelKey: 'game.ledger.exp_coffee', cost: 2.0, defaultChecked: true }
    ]
  }),
  new DayLevel({
    day: 3,
    dateStr: '1226-11-24',
    hasMemo: false,
    expenses: [
      { id: 'power', labelKey: 'game.ledger.exp_power', cost: 3.0, defaultChecked: true },
      { id: 'food', labelKey: 'game.ledger.exp_food', cost: 3.0, defaultChecked: true },
      { id: 'coffee', labelKey: 'game.ledger.exp_coffee', cost: 2.0, defaultChecked: true }
    ]
  }),
  new DayLevel({
    day: 4,
    dateStr: '1226-11-25',
    hasMemo: false,
    expenses: [
      { id: 'power', labelKey: 'game.ledger.exp_power', cost: 3.0, defaultChecked: true },
      { id: 'food', labelKey: 'game.ledger.exp_food', cost: 3.0, defaultChecked: true },
      { id: 'coffee', labelKey: 'game.ledger.exp_coffee', cost: 2.0, defaultChecked: true },
      { id: 'treat', labelKey: 'game.ledger.exp_treat', cost: 15.0, defaultChecked: false }
    ]
  }),
  new DayLevel({
    day: 5,
    dateStr: '1226-11-26',
    hasMemo: false,
    corpBribe: {
      pkgPrefix: 'com.jingfeng.',
      bonus: 50.0,
      triggersWhack: true
    },
    expenses: [
      { id: 'power', labelKey: 'game.ledger.exp_power', cost: 3.5, defaultChecked: true },
      { id: 'food', labelKey: 'game.ledger.exp_food', cost: 3.5, defaultChecked: true },
      { id: 'coffee', labelKey: 'game.ledger.exp_coffee', cost: 2.5, defaultChecked: true },
      { id: 'heating', labelKey: 'game.ledger.exp_heating', cost: 4.5, defaultChecked: true },
      {
        id: 'kfc50',
        labelKey: 'game.ledger.exp_kfc50',
        cost: 50.0,
        defaultChecked: true,
        forced: true,
        when: (run) => !!(run && run.corpBribePaid)
      }
    ],
    statusRules: [
      {
        when: (ctx) => ctx.isPaid('kfc50'),
        statusKey: 'game.ledger.status_kfc50'
      },
      {
        when: () => true,
        statusKey: 'game.ledger.status_malnourished'
      }
    ]
  }),
  new DayLevel({
    day: 6,
    dateStr: '1226-11-27',
    hasMemo: false,
    clockSpeed: (run) => (run && !run.hasAcceptedBribe() ? 1.5 : 1),
    newspaperVariant: {
      when: (run) => !!(run && run.hasAcceptedBribe()),
      i18nKey: 'bribeNewspaper',
      artOpts: { bribeTragedy: true }
    },
    expenses: [
      { id: 'power', labelKey: 'game.ledger.exp_power', cost: 4.0, defaultChecked: true },
      { id: 'food', labelKey: 'game.ledger.exp_food', cost: 4.0, defaultChecked: true },
      { id: 'coffee', labelKey: 'game.ledger.exp_coffee', cost: 3.0, defaultChecked: true },
      { id: 'heating', labelKey: 'game.ledger.exp_heating', cost: 8.0, defaultChecked: true }
    ]
  }),
  new DayLevel({
    day: 7,
    dateStr: '1226-11-28',
    hasMemo: false,
    isCampaignFinalDay: true,
    expenses: [
      { id: 'power', labelKey: 'game.ledger.exp_power', cost: 4.0, defaultChecked: true },
      { id: 'food', labelKey: 'game.ledger.exp_food', cost: 4.0, defaultChecked: true },
      { id: 'coffee', labelKey: 'game.ledger.exp_coffee', cost: 3.0, defaultChecked: true },
      { id: 'heating', labelKey: 'game.ledger.exp_heating', cost: 8.0, defaultChecked: true }
    ]
  })
];

export function getDayLevel(day) {
  const idx = Math.min(Math.max(1, day || 1), DAY_LEVELS.length) - 1;
  return DAY_LEVELS[idx];
}

export function getAllDayLevels() {
  return DAY_LEVELS.slice();
}
