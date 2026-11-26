/* ============================================================================
   CampaignRun Domain Entity (Persistent Cross-Day Run State)
   ============================================================================ */

export class CampaignRun {
  /**
   * @param {number} [startDay=1]
   * @param {object} [overrides]
   */
  constructor(startDay = 1, overrides = {}) {
    const day = startDay || 1;
    this.day = day;
    this.balance = typeof overrides.balance === 'number'
      ? overrides.balance
      : (day > 1 ? 10.0 : 8.0);
    this.bribeAccepted = Boolean(overrides.bribeAccepted);
    this.corpBribeApprovedCount = overrides.corpBribeApprovedCount || 0;
    this.corpBribePaid = Boolean(overrides.corpBribePaid);
    this.corpBribeTriggered = Boolean(overrides.corpBribeTriggered);
    this.fatigueDays = overrides.fatigueDays || 0;
    this.powerSkippedStreak = overrides.powerSkippedStreak || 0;
    this.hungerDays = overrides.hungerDays || 0;
    this.stats = Object.assign(
      {
        totalReviewed: 0,
        roguesCaught: 0,
        bannedCount: 0,
        correctCount: 0,
        conscience: 0
      },
      overrides.stats || {}
    );
  }

  /** Whether the player has accepted any bribe (supervisor or corporate) in this run. */
  hasAcceptedBribe() {
    return Boolean(this.bribeAccepted || this.corpBribePaid || this.corpBribeTriggered);
  }

  /** Serialize into a checkpoint object for localStorage persistence. */
  toCheckpoint() {
    return {
      day: this.day,
      balance: Number(this.balance.toFixed(2)),
      bribeAccepted: this.bribeAccepted,
      corpBribeApprovedCount: this.corpBribeApprovedCount,
      corpBribePaid: this.corpBribePaid,
      corpBribeTriggered: this.corpBribeTriggered,
      fatigueDays: this.fatigueDays,
      powerSkippedStreak: this.powerSkippedStreak,
      hungerDays: this.hungerDays,
      stats: Object.assign({}, this.stats)
    };
  }

  /** Reconstruct a CampaignRun from a saved checkpoint object. */
  static fromCheckpoint(cp) {
    if (!cp || typeof cp !== 'object') {
      return new CampaignRun(1);
    }
    return new CampaignRun(cp.day || 1, {
      balance: typeof cp.balance === 'number' ? cp.balance : 8.0,
      bribeAccepted: !!cp.bribeAccepted,
      corpBribeApprovedCount: cp.corpBribeApprovedCount || 0,
      corpBribePaid: !!cp.corpBribePaid,
      corpBribeTriggered: !!cp.corpBribeTriggered,
      fatigueDays: cp.fatigueDays || 0,
      powerSkippedStreak: cp.powerSkippedStreak || 0,
      hungerDays: cp.hungerDays || 0,
      stats: cp.stats || {}
    });
  }
}
