/* ============================================================================
   Core DOM & Geometry Helpers
   ============================================================================ */

export function el(id) {
  return document.getElementById(id);
}

export function rectsOverlap(a, b, minOverlap) {
  if (!a || !b) return false;
  const ow = Math.min(a.right, b.right) - Math.max(a.left, b.left);
  const oh = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
  const need = typeof minOverlap === 'number' ? minOverlap : 10;
  return ow >= need && oh >= need;
}

export function pointInRect(x, y, r) {
  return !!(r && x >= r.left && x <= r.right && y >= r.top && y <= r.bottom);
}
