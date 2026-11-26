/* ============================================================================
   Developer Portrait Pixel-Art Generators
   ============================================================================ */

import { px, svgWrap } from './svg.js';

export function getPortraitSVG(archetype) {
  let out = '';
  const bgMap = {
    idle: '#1d2028',
    indie: '#232e3b',
    ordinary: '#29332a',
    flower_boss: '#3a2426',
    shady: '#261e2e',
    bigtech: '#1d2c3d',
    hacker_hero: '#0f161b'
  };
  const bg = bgMap[archetype] || '#23262e';

  if (archetype === 'idle') {
    out += px(4, 5, 8, 6, '#383d4a');
    out += px(6, 7, 1, 1, '#7c8499') + px(9, 7, 1, 1, '#7c8499');
    out += px(3, 12, 10, 4, '#2d313d');
    return svgWrap(16, bg, out);
  }

  if (archetype === 'hacker_hero') {
    out += px(3, 2, 10, 10, '#0a0b0e');
    out += px(2, 11, 12, 5, '#111318');
    out += px(5, 5, 6, 6, '#1a1c22');
    out += px(6, 7, 1, 1, '#58f7ff') + px(9, 7, 1, 1, '#58f7ff');
    out += px(6, 13, 4, 1, '#39b5c9');
    return svgWrap(16, bg, out);
  }

  const skin = archetype === 'shady' ? '#cfa482' : archetype === 'flower_boss' ? '#e5be9e' : '#efc7a4';
  const shirt = {
    indie: '#4b688a',
    ordinary: '#597a54',
    flower_boss: '#8f2930',
    shady: '#2d2738',
    bigtech: '#27466b'
  }[archetype] || '#4b5568';

  out += px(2, 12, 12, 4, shirt);
  out += px(6, 11, 4, 2, skin);
  out += px(5, 4, 6, 7, skin);

  if (archetype === 'indie') {
    out += px(4, 3, 8, 2, '#241f1c') + px(4, 5, 1, 2, '#241f1c') + px(11, 5, 1, 2, '#241f1c');
    out += px(5, 6, 2, 2, '#9ed9ff') + px(9, 6, 2, 2, '#9ed9ff');
    out += px(7, 7, 2, 1, '#2a2a2e');
    out += px(6, 7, 1, 1, '#151821') + px(9, 7, 1, 1, '#151821');
    out += px(7, 9, 2, 1, '#8a5943');
  } else if (archetype === 'flower_boss') {
    out += px(4, 2, 7, 2, '#291c18') + px(5, 4, 2, 1, '#291c18') + px(11, 4, 1, 2, '#291c18');
    out += px(6, 7, 1, 1, '#1c1512') + px(9, 7, 1, 1, '#1c1512');
    out += px(6, 9, 4, 1, '#a13838');
    out += px(7, 12, 2, 4, '#d93636');
    out += px(10, 13, 1, 1, '#f2c94c');
  } else if (archetype === 'shady') {
    out += px(5, 3, 6, 2, '#18181b');
    out += px(4, 6, 8, 2, '#0d0d10');
    out += px(6, 7, 1, 1, '#444') + px(9, 7, 1, 1, '#444');
    out += px(6, 9, 3, 1, '#6e4538');
    out += px(3, 11, 2, 2, '#191621') + px(11, 11, 2, 2, '#191621');
  } else if (archetype === 'bigtech') {
    out += px(5, 3, 6, 2, '#1e2026');
    out += px(6, 7, 1, 1, '#1c1c20') + px(9, 7, 1, 1, '#1c1c20');
    out += px(6, 9, 4, 1, '#8a5d4b');
    out += px(6, 12, 4, 4, '#e6ecf2');
    out += px(7, 12, 2, 4, '#3687d9');
  } else {
    out += px(4, 3, 8, 2, '#3a2b22') + px(4, 5, 1, 2, '#3a2b22');
    out += px(6, 7, 1, 1, '#1d1916') + px(9, 7, 1, 1, '#1d1916');
    out += px(6, 9, 4, 1, '#9c634d');
  }

  return svgWrap(16, bg, out);
}
