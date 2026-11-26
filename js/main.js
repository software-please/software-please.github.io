/* ============================================================================
   Application Entrypoint (ES Modules)
   ============================================================================ */

import { GameKernel } from './GameKernel.js';

const app = new GameKernel();

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function () {
    app.init();
  });
} else {
  app.init();
}

export { app };
