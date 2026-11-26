/* ============================================================================
   Newspaper, Title Emblem, Intro & Ending Scene Pixel-Art Generators
   ============================================================================ */

import { px, svgWrap, rectSvg } from './svg.js';

export function getNewspaperArtSVG(day, opts) {
  if (day === 6 && opts && opts.bribeTragedy) {
    let out = '';
    // Dusk pavement & curb
    out += px(0, 12, 24, 1, '#272a32');
    out += px(0, 13, 24, 11, '#3a3d45');
    out += px(2, 16, 4, 1, '#2f323a') + px(14, 21, 5, 1, '#2f323a');
    // Streetlamp (top-left)
    out += px(3, 2, 1, 11, '#555a66') + px(3, 2, 4, 1, '#555a66');
    out += px(5, 3, 2, 1, '#d8c98e') + px(4, 4, 4, 2, '#2d2b24');
    // Subtle emergency glint (top-right)
    out += px(19, 3, 2, 1, '#c92a2a') + px(21, 3, 1, 1, '#ff6b6b');
    // Dropped wooden cane (left)
    out += px(2, 19, 1, 1, '#7a512a') + px(3, 18, 4, 1, '#9c6b3b') + px(7, 17, 1, 1, '#7a512a');
    // Fallen elderly figure lying horizontally
    // White/silver hair & head
    out += px(5, 14, 3, 2, '#e8e4dc') + px(6, 15, 3, 2, '#e0b896');
    // Coat / torso
    out += px(8, 15, 6, 3, '#5a6d7c') + px(9, 17, 5, 2, '#3e4d59');
    // Reaching arm & hand toward phone
    out += px(11, 18, 3, 1, '#5a6d7c') + px(14, 19, 2, 1, '#e0b896');
    // Bent trousers & shoes
    out += px(14, 15, 4, 2, '#2d333d') + px(17, 16, 3, 2, '#2d333d');
    out += px(20, 17, 2, 2, '#1b1c20');
    // Dropped smartphone with uncloseable red/yellow popup ad & glow
    out += px(16, 18, 5, 5, '#5c2026');
    out += px(17, 19, 3, 3, '#121318');
    out += px(17, 19, 3, 2, '#e63946') + px(18, 20, 1, 1, '#ffd166');
    return svgWrap(24, '#1a1d26', out);
  }
  let out = '';
  if (day === 1) {
    out += px(2, 3, 5, 10, '#782929') + px(3, 5, 3, 3, '#ffd166');
    out += px(9, 3, 5, 10, '#2e6f40') + px(10, 6, 3, 4, '#95f9b4');
  } else if (day === 2) {
    out += px(4, 2, 8, 12, '#ced4da') + px(5, 4, 6, 7, '#1d3557') + px(6, 6, 4, 3, '#ff4d6d');
  } else if (day === 3) {
    out += px(4, 2, 8, 12, '#343a40') + px(5, 4, 6, 6, '#ff6b6b') + px(9, 9, 4, 4, '#fff');
  } else if (day === 4) {
    out += px(2, 4, 5, 8, '#457b9d') + px(9, 4, 5, 8, '#e63946') + px(7, 7, 2, 2, '#ffd166');
  } else if (day === 5) {
    out += px(4, 2, 8, 4, '#a8dadc') + px(3, 8, 4, 5, '#4cc9f0') + px(9, 8, 4, 5, '#f72585');
  } else if (day === 7) {
    out += px(2, 12, 12, 1, '#4c566a');
    out += px(3, 9, 2, 3, '#4cc9f0') + px(6, 7, 2, 5, '#4cc9f0') + px(9, 5, 2, 7, '#ffd166') + px(12, 3, 2, 9, '#06d6a0');
    out += px(3, 3, 4, 2, '#e63946');
  } else {
    out += px(3, 4, 10, 9, '#191b22') + px(7, 2, 3, 5, '#58f7ff') + px(6, 7, 3, 6, '#ffe066');
  }
  return svgWrap(16, '#1c1d21', out);
}

export function getEndingArtSVG(endingId) {
  let out = '';
  if (endingId === 'complete') {
    out += px(4, 4, 8, 7, '#2a303c') + px(5, 5, 6, 5, '#12151c');
    out += px(6, 7, 4, 1, '#58f7ff');
    out += px(7, 11, 2, 2, '#4c566a') + px(5, 13, 6, 1, '#4c566a');
    return svgWrap(16, '#12151c', out);
  }
  if (endingId === 'whistleblower') {
    out += px(5, 3, 6, 10, '#58f7ff') + px(6, 4, 4, 8, '#162836') + px(7, 5, 2, 5, '#ffe066');
    out += px(2, 6, 1, 4, '#58f7ff') + px(13, 6, 1, 4, '#58f7ff');
    return svgWrap(16, '#0d1924', out);
  }
  if (endingId === 'obedient') {
    out += px(2, 10, 12, 5, '#a82828') + px(5, 3, 6, 6, '#e2a43b') + px(6, 5, 4, 2, '#222');
    return svgWrap(16, '#231e19', out);
  }
  if (endingId === 'fired') {
    out += px(3, 3, 10, 10, '#421515') + px(5, 5, 6, 1, '#ff6b6b') + px(5, 10, 6, 1, '#ff6b6b');
    out += px(7, 6, 2, 4, '#ff6b6b');
    return svgWrap(16, '#1a0b0b', out);
  }
  out += px(4, 6, 8, 7, '#5c5548') + px(5, 7, 6, 5, '#2b2822') + px(6, 3, 4, 2, '#9e9688');
  return svgWrap(16, '#171614', out);
}

export function getTitleEmblemSVG() {
  let out = '';
  out += px(2, 6, 6, 2, '#9e352e') + px(3, 9, 5, 2, '#9e352e') + px(5, 12, 4, 2, '#7a2620');
  out += px(24, 6, 6, 2, '#9e352e') + px(24, 9, 5, 2, '#9e352e') + px(23, 12, 4, 2, '#7a2620');
  out += px(10, 3, 12, 16, '#e7dcc4');
  out += px(11, 4, 10, 14, '#1b1a1c');
  out += px(13, 6, 6, 10, '#a63232');
  out += px(14, 7, 4, 6, '#e7dcc4');
  out += px(15, 9, 2, 2, '#1b1a1c') + px(15, 14, 2, 1, '#e7dcc4');
  out += px(12, 20, 8, 2, '#9e352e');
  return rectSvg(32, 24, '', out);
}

export function getIntroSceneSVG(index) {
  let out = '';
  if (index === 0) {
    out += px(0, 12, 32, 6, '#211c19');
    out += px(2, 2, 8, 7, '#131d2e');
    out += px(4, 4, 1, 1, '#d8c98e') + px(7, 3, 1, 1, '#d8c98e');
    out += px(11, 5, 11, 8, '#282a33') + px(12, 6, 9, 5, '#16241d');
    out += px(13, 7, 5, 1, '#a63232') + px(13, 9, 7, 1, '#e7dcc4');
    out += px(24, 3, 5, 6, '#1a1b20') + px(26, 5, 2, 2, '#d93829');
    return rectSvg(32, 18, '#0c0d12', out);
  }
  if (index === 1) {
    out += px(6, 1, 20, 16, '#e2d4b7');
    out += px(6, 1, 20, 3, '#9e2e2e');
    out += px(9, 6, 14, 1, '#40382c') + px(9, 8, 12, 1, '#40382c') + px(9, 10, 14, 1, '#40382c');
    out += px(9, 12, 8, 1, '#7a2525');
    out += px(18, 12, 6, 3, '#b82323');
    return rectSvg(32, 18, '#100f0d', out);
  }
  out += px(0, 12, 32, 6, '#2b241f');
  out += px(4, 3, 12, 9, '#1b1d22') + px(5, 4, 10, 7, '#11241a');
  out += px(6, 5, 5, 1, '#7ef2a6') + px(6, 7, 8, 1, '#7ef2a6');
  out += px(19, 8, 4, 4, '#d98a2b') + px(20, 5, 1, 2, '#ccc') + px(22, 6, 1, 1, '#ccc');
  out += px(25, 9, 3, 3, '#2e7d47') + px(29, 9, 3, 3, '#a82b2b');
  return rectSvg(32, 18, '#121215', out);
}

export function getDay7AwardSceneSVG(index) {
  let out = '';
  if (index === 0) {
    out += px(0, 12, 32, 6, '#1e2128');
    out += px(8, 3, 16, 10, '#2a2e38') + px(9, 4, 14, 8, '#111a24');
    out += px(11, 6, 10, 1, '#ffd166') + px(12, 8, 8, 1, '#58f7ff') + px(14, 10, 4, 1, '#e7dcc4');
    return rectSvg(32, 18, '#0c0e14', out);
  }
  if (index === 1) {
    out += px(5, 1, 22, 16, '#f2e8cf');
    out += px(6, 2, 20, 14, '#e6d7b3');
    out += px(5, 1, 22, 3, '#b8862d');
    out += px(13, 5, 6, 4, '#ffd166') + px(14, 6, 4, 2, '#fff3b0');
    out += px(9, 10, 14, 1, '#4a3d28') + px(11, 12, 10, 1, '#7a2525');
    out += px(18, 13, 6, 2, '#b82323');
    return rectSvg(32, 18, '#14110b', out);
  }
  out += px(0, 12, 32, 6, '#231f1c');
  out += px(3, 3, 13, 9, '#1b1d22') + px(4, 4, 11, 7, '#11241a');
  out += px(5, 5, 6, 1, '#7ef2a6') + px(5, 7, 9, 1, '#ffd166');
  out += px(19, 5, 10, 7, '#e2d4b7') + px(21, 7, 6, 2, '#d49b28');
  return rectSvg(32, 18, '#111216', out);
}
