/* ============================================================================
   ViewportScaler — Proportional Letterbox Scaling & Landscape Hint
   ============================================================================ */

export const BASE_WIDTH = 1280;
export const BASE_HEIGHT = 720;

let currentScale = 1;
let scaledActive = false;
let hintDismissed = false;
let initialized = false;

export function getViewportScale() {
  return currentScale;
}

export function isScaledViewport() {
  return scaledActive;
}

function getViewportSize() {
  const vv = window.visualViewport;
  const vw = vv ? vv.width : (window.innerWidth || document.documentElement.clientWidth || BASE_WIDTH);
  const vh = vv ? vv.height : (window.innerHeight || document.documentElement.clientHeight || BASE_HEIGHT);
  return { vw: Math.max(1, vw), vh: Math.max(1, vh) };
}

function updateOrientationHint(isPortrait) {
  const hint = document.getElementById('orientation-hint');
  if (!hint) return;
  const shouldShow = scaledActive && isPortrait && !hintDismissed;
  hint.classList.toggle('hidden', !shouldShow);
}

export function updateViewportScale() {
  const { vw, vh } = getViewportSize();
  const isCoarse = !!(window.matchMedia && window.matchMedia('(pointer: coarse)').matches);
  const isMobileOrSmall = vw < 1024 || vh < 640 || isCoarse;
  const root = document.documentElement;
  const isPortrait = vh > vw;

  if (isMobileOrSmall) {
    scaledActive = true;
    currentScale = Math.min(vw / BASE_WIDTH, vh / BASE_HEIGHT);
    root.style.setProperty('--app-scale', currentScale.toFixed(6));
    root.classList.add('is-scaled-viewport');
    root.classList.toggle('is-portrait', isPortrait);
  } else {
    scaledActive = false;
    currentScale = 1;
    root.style.removeProperty('--app-scale');
    root.classList.remove('is-scaled-viewport', 'is-portrait');
  }

  updateOrientationHint(isPortrait);
}

export function initViewportScaling() {
  if (initialized) {
    updateViewportScale();
    return;
  }
  initialized = true;

  const dismissBtn = document.getElementById('btn-dismiss-orientation');
  if (dismissBtn) {
    dismissBtn.addEventListener('click', () => {
      hintDismissed = true;
      updateOrientationHint(false);
    });
  }

  window.addEventListener('resize', updateViewportScale, { passive: true });
  window.addEventListener('orientationchange', () => {
    setTimeout(updateViewportScale, 80);
  }, { passive: true });

  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', updateViewportScale, { passive: true });
  }

  updateViewportScale();
}
