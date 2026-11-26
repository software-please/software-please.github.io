/* ============================================================================
   ShiftSession Domain Entity (Single-Day Shift & Active Case State)
   ============================================================================ */

export const SHIFT_START_MINUTES = 540; // 09:00
export const SHIFT_END_MINUTES = 1020;  // 17:00

export class ShiftSession {
  /**
   * @param {Array} [queue=[]]
   */
  constructor(queue = []) {
    this.queue = Array.isArray(queue) ? queue : [];
    this.index = -1;
    this.currentCase = null;
    this.clockMinutes = SHIFT_START_MINUTES;
    this.shiftEnded = false;

    this.normalEarned = 0;
    this.normalCount = 0;
    this.rogueEarned = 0;
    this.rogueCount = 0;
    this.bannedCount = 0;
    this.bannedEarned = 0;
    this.bonusEarned = 0;
    this.citations = 0;
    this.finesTotal = 0;

    this.caseLocked = false;
    this.conflictFound = false;
    this.activeConflict = null;
    this.interrogatedIds = {};
    this.interrogating = false;
    this.interrogated = false;
    this.polygraphRunning = false;
    this.polygraphTested = false;
    this.polygraphEligible = false;
    this.lieConfirmed = false;
  }

  /** Enter a new applicant case and reset per-case flags. */
  enterCase(caseData) {
    this.currentCase = caseData || null;
    this.caseLocked = false;
    this.conflictFound = false;
    this.activeConflict = null;
    this.interrogatedIds = {};
    this.interrogating = false;
    this.interrogated = false;
    this.polygraphRunning = false;
    this.polygraphTested = false;
    this.polygraphEligible = false;
    this.lieConfirmed = false;
  }

  /** Clear active case after verdict/ban resolution. */
  clearCurrentCase() {
    this.currentCase = null;
    this.conflictFound = false;
    this.activeConflict = null;
    this.interrogatedIds = {};
    this.interrogating = false;
    this.interrogated = false;
    this.polygraphRunning = false;
    this.polygraphTested = false;
    this.polygraphEligible = false;
    this.lieConfirmed = false;
  }

  /** Whether interactions on the current case are locked. */
  isLocked() {
    return !!(this.caseLocked || this.interrogating || this.polygraphRunning);
  }

  /** Whether a specific conflict ID has already been interrogated in this case. */
  isConflictInterrogated(id) {
    return !!this.interrogatedIds[id];
  }

  /** Whether more cases remain in the shift queue within working hours. */
  hasMoreCases() {
    return this.index + 1 < this.queue.length && this.clockMinutes < SHIFT_END_MINUTES;
  }
}
