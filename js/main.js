/* ============================================================================
   Application Entrypoint (ES Modules)
   ============================================================================ */

import { GameKernel } from './GameKernel.js';
import { initViewportScaling } from './core/viewport.js';

const app = new GameKernel();

function boot() {
  initViewportScaling();
  app.init();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}

export { app };
