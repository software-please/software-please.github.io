/* ============================================================================
   Subsystem Base Class
   ============================================================================ */

export class Subsystem {
  /**
   * @param {import('../GameKernel.js').GameKernel} kernel
   */
  constructor(kernel) {
    this.kernel = kernel;
  }

  /** Wire sibling subsystem instance references. */
  connect(_kernel) {}

  /** Bind DOM listeners or perform initial setup after all subsystems connect. */
  init() {}
}
