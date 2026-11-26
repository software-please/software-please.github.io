/* ============================================================================
   Pixel-Art SVG Primitives
   ============================================================================ */

export function px(x, y, w, h, fill) {
  return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + fill + '"/>';
}

export function svgWrap(size, bg, inner) {
  return (
    '<svg viewBox="0 0 ' + size + ' ' + size + '" width="100%" height="100%" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg">' +
    (bg ? px(0, 0, size, size, bg) : '') +
    inner +
    '</svg>'
  );
}

export function rectSvg(w, h, bg, inner) {
  return (
    '<svg viewBox="0 0 ' + w + ' ' + h + '" width="100%" height="100%" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg">' +
    (bg ? px(0, 0, w, h, bg) : '') +
    inner +
    '</svg>'
  );
}
