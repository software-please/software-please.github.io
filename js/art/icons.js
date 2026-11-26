/* ============================================================================
   App Icon Pixel-Art Generators
   ============================================================================ */

import { px, svgWrap } from './svg.js';

export function getAppIconSVG(iconType) {
  let out = '';
  switch (iconType) {
    case 'flashlight':
      out += px(6, 6, 4, 8, '#cfd6df') + px(5, 4, 6, 3, '#8a95a5') + px(6, 2, 4, 2, '#ffe066');
      return svgWrap(16, '#1f2b3a', out);
    case 'broom_cash':
      out += px(3, 11, 5, 3, '#f2c94c') + px(7, 3, 2, 8, '#c98542') + px(9, 4, 4, 4, '#27ae60');
      out += px(10, 5, 2, 2, '#fff');
      return svgWrap(16, '#2a3d28', out);
    case 'flower':
      out += px(7, 8, 2, 6, '#3fa34d') + px(5, 10, 2, 2, '#3fa34d') + px(9, 11, 2, 2, '#3fa34d');
      out += px(6, 3, 4, 4, '#ff5c7a') + px(4, 5, 8, 2, '#ff859d') + px(7, 5, 2, 2, '#ffd166');
      return svgWrap(16, '#38222a', out);
    case 'recipe':
      out += px(3, 9, 10, 4, '#e07a5f') + px(4, 6, 8, 3, '#f4f1de') + px(5, 3, 2, 2, '#fff') + px(9, 3, 2, 2, '#fff');
      return svgWrap(16, '#3d281f', out);
    case 'calendar':
      out += px(3, 3, 10, 10, '#f2e8cf') + px(3, 3, 10, 3, '#c93b3b') + px(6, 8, 4, 3, '#2b2d42');
      return svgWrap(16, '#2b2220', out);
    case 'weather':
      out += px(4, 4, 5, 5, '#ffd166') + px(5, 8, 7, 4, '#edf2f4') + px(4, 9, 9, 3, '#dfe7eb');
      return svgWrap(16, '#224569', out);
    case 'super_torch':
      out += px(5, 5, 6, 9, '#ff4d4d') + px(4, 3, 8, 3, '#ffd166') + px(7, 7, 2, 4, '#fff');
      return svgWrap(16, '#331616', out);
    case 'calc':
      out += px(3, 2, 10, 12, '#cfd8dc') + px(4, 3, 8, 3, '#4f775d');
      out += px(4, 8, 2, 2, '#455a64') + px(7, 8, 2, 2, '#455a64') + px(10, 8, 2, 4, '#e67e22');
      out += px(4, 11, 2, 2, '#455a64') + px(7, 11, 2, 2, '#455a64');
      return svgWrap(16, '#1e272e', out);
    case 'battery':
      out += px(5, 4, 6, 10, '#495057') + px(7, 2, 2, 2, '#adb5bd') + px(6, 6, 4, 6, '#2ecc71');
      out += px(7, 7, 2, 4, '#ffe066');
      return svgWrap(16, '#162920', out);
    case 'noise':
      out += px(3, 9, 2, 3, '#8ecae6') + px(6, 5, 2, 7, '#219ebc') + px(9, 7, 2, 5, '#8ecae6') + px(12, 4, 2, 8, '#ffb703');
      return svgWrap(16, '#142433', out);
    case 'wallpaper':
      out += px(2, 3, 12, 10, '#4ea8de') + px(2, 9, 12, 4, '#5e60ce') + px(4, 5, 3, 3, '#ffd166');
      return svgWrap(16, '#1c1b33', out);
    case 'tomato':
      out += px(4, 5, 8, 8, '#e63946') + px(6, 3, 4, 2, '#2a9d8f') + px(6, 7, 2, 2, '#ff8fa3');
      return svgWrap(16, '#2b1b1d', out);
    case 'steps':
      out += px(4, 4, 3, 6, '#f4a261') + px(9, 6, 3, 6, '#2a9d8f') + px(5, 11, 2, 2, '#e9c46a');
      return svgWrap(16, '#26231c', out);
    case 'dance':
      out += px(4, 6, 8, 6, '#ff4d6d') + px(3, 8, 10, 3, '#ff758f') + px(7, 10, 2, 4, '#ffd166');
      return svgWrap(16, '#361924', out);
    case 'dict':
      out += px(3, 2, 10, 12, '#3d5a80') + px(3, 2, 2, 12, '#293241') + px(6, 5, 5, 3, '#e0fbfc');
      return svgWrap(16, '#1a2433', out);
    case 'fruit':
      out += px(4, 5, 8, 8, '#ffd166') + px(6, 7, 4, 4, '#ef476f') + px(7, 3, 2, 2, '#06d6a0');
      return svgWrap(16, '#2e2518', out);
    case 'magnifier':
      out += px(3, 3, 7, 7, '#a8dadc') + px(4, 4, 5, 5, '#457b9d') + px(9, 9, 4, 4, '#e63946');
      return svgWrap(16, '#1d2d3b', out);
    case 'wifi':
      out += px(3, 5, 10, 2, '#4cc9f0') + px(5, 8, 6, 2, '#4cc9f0') + px(7, 11, 2, 2, '#f72585');
      return svgWrap(16, '#162133', out);
    case 'bus':
      out += px(3, 4, 10, 8, '#43aa8b') + px(4, 5, 8, 3, '#d8f3dc') + px(4, 12, 2, 2, '#111') + px(10, 12, 2, 2, '#111');
      return svgWrap(16, '#1b2b27', out);
    case 'bigtech':
      out += px(3, 3, 10, 10, '#3a86ff') + px(6, 5, 4, 6, '#fff') + px(10, 3, 3, 3, '#ffbe0b');
      return svgWrap(16, '#16243d', out);
    case 'notepad':
      out += px(4, 2, 8, 12, '#f8edeb') + px(5, 5, 6, 1, '#6d6875') + px(5, 8, 6, 1, '#6d6875') + px(5, 11, 4, 1, '#6d6875');
      return svgWrap(16, '#2b2826', out);
    case 'tea':
      out += px(4, 7, 8, 6, '#84a98c') + px(12, 8, 2, 3, '#84a98c') + px(6, 3, 1, 3, '#cad2c5') + px(9, 4, 1, 2, '#cad2c5');
      return svgWrap(16, '#1d2922', out);
    case 'opera':
      out += px(4, 3, 8, 10, '#f4f1de') + px(5, 5, 2, 2, '#d62828') + px(9, 5, 2, 2, '#d62828') + px(6, 10, 4, 1, '#1d3557');
      return svgWrap(16, '#331c20', out);
    case 'poetry':
      out += px(3, 4, 10, 8, '#e9d8a6') + px(2, 3, 2, 10, '#9b2226') + px(12, 3, 2, 10, '#9b2226') + px(6, 6, 4, 4, '#2b2d42');
      return svgWrap(16, '#2b221a', out);
    case 'shield_zap':
      out += px(4, 2, 8, 11, '#58f7ff') + px(5, 3, 6, 9, '#192a3d') + px(7, 4, 3, 3, '#ffe066') + px(6, 7, 3, 4, '#ffe066');
      return svgWrap(16, '#0d141c', out);
    case 'newspaper':
      out += px(3, 2, 10, 12, '#e9e2d0') + px(4, 3, 8, 2, '#c94646') + px(4, 6, 4, 3, '#4a607a') + px(9, 6, 3, 1, '#525252') + px(9, 8, 3, 1, '#525252') + px(4, 10, 8, 1, '#525252') + px(4, 12, 6, 1, '#525252');
      return svgWrap(16, '#232830', out);
    case 'compass':
      out += px(4, 3, 8, 10, '#2a3d45') + px(5, 4, 6, 8, '#132026') + px(7, 4, 2, 4, '#ef476f') + px(7, 8, 2, 4, '#e0fbfc') + px(7, 7, 2, 2, '#ffd166');
      return svgWrap(16, '#15252b', out);
    case 'video':
      out += px(2, 3, 12, 10, '#2b3248') + px(3, 4, 10, 8, '#141926') + px(6, 5, 2, 6, '#ff6b6b') + px(8, 6, 2, 4, '#ff6b6b') + px(10, 7, 1, 2, '#ff6b6b');
      return svgWrap(16, '#171c29', out);
    case 'health':
      out += px(3, 3, 10, 10, '#f4f7f5') + px(7, 5, 2, 6, '#e03e52') + px(5, 7, 6, 2, '#e03e52');
      return svgWrap(16, '#1c2d27', out);
    case 'cloud':
      out += px(5, 5, 6, 3, '#a8dadc') + px(3, 7, 10, 4, '#e0fbfc') + px(6, 11, 4, 2, '#4ea8de');
      return svgWrap(16, '#162636', out);
    case 'appstore':
      out += px(5, 2, 6, 2, '#e0fbfc') + px(5, 4, 1, 2, '#e0fbfc') + px(10, 4, 1, 2, '#e0fbfc');
      out += px(3, 5, 10, 9, '#2b8cbe') + px(4, 6, 8, 7, '#4ea8de') + px(7, 8, 2, 3, '#ffd166') + px(6, 9, 4, 1, '#ffd166');
      return svgWrap(16, '#142336', out);
    case 'ruler_unit':
      out += px(2, 5, 12, 5, '#ffd166') + px(4, 5, 1, 2, '#7a5c00') + px(7, 5, 1, 3, '#7a5c00') + px(10, 5, 1, 2, '#7a5c00');
      out += px(4, 11, 8, 1, '#4cc9f0') + px(10, 10, 2, 3, '#4cc9f0') + px(4, 2, 8, 1, '#06d6a0') + px(4, 1, 2, 3, '#06d6a0');
      return svgWrap(16, '#172a30', out);
    case 'mirror':
      out += px(5, 2, 6, 9, '#b8c4d4') + px(4, 3, 8, 7, '#b8c4d4') + px(5, 3, 6, 7, '#a8e6ff');
      out += px(6, 4, 2, 2, '#ffffff') + px(7, 6, 1, 2, '#ffffff') + px(7, 11, 2, 3, '#8d99ae');
      return svgWrap(16, '#262138', out);
    case 'folder_file':
      out += px(2, 3, 5, 2, '#f4a261') + px(2, 5, 12, 8, '#e9c46a') + px(4, 4, 8, 3, '#f8f9fa');
      out += px(2, 6, 12, 7, '#f4a261') + px(5, 8, 6, 1, '#fff3b0');
      return svgWrap(16, '#162238', out);
    case 'beam_torch':
      out += px(4, 2, 8, 4, '#90e0ef') + px(5, 3, 6, 3, '#ffffff') + px(6, 6, 4, 2, '#48cae4');
      out += px(6, 8, 4, 6, '#3b5b8c') + px(7, 9, 2, 2, '#caf0f8');
      return svgWrap(16, '#101b2e', out);
    case 'qr_scan':
      out += px(3, 3, 3, 3, '#edf2f4') + px(10, 3, 3, 3, '#edf2f4') + px(3, 10, 3, 3, '#edf2f4');
      out += px(4, 4, 1, 1, '#1a1d24') + px(11, 4, 1, 1, '#1a1d24') + px(4, 11, 1, 1, '#1a1d24');
      out += px(7, 4, 2, 2, '#8d99ae') + px(8, 9, 2, 2, '#edf2f4') + px(11, 10, 2, 3, '#8d99ae') + px(2, 7, 12, 1, '#ef233c');
      return svgWrap(16, '#1a1d24', out);
    case 'cloud_note':
      out += px(4, 5, 8, 9, '#f8f9fa') + px(5, 8, 6, 1, '#adb5bd') + px(5, 10, 6, 1, '#adb5bd') + px(5, 12, 4, 1, '#adb5bd');
      out += px(5, 2, 6, 3, '#4cc9f0') + px(4, 3, 8, 3, '#90e0ef');
      return svgWrap(16, '#1a2b3d', out);
    case 'fortune_lot':
      out += px(5, 2, 1, 5, '#e9c46a') + px(8, 2, 1, 5, '#f4a261') + px(10, 3, 1, 4, '#ffd166');
      out += px(5, 6, 6, 8, '#c1121f') + px(5, 7, 6, 1, '#ffd166') + px(5, 12, 6, 1, '#ffd166');
      return svgWrap(16, '#2d161b', out);
    case 'weather_sun':
      out += px(5, 5, 6, 6, '#ffd166') + px(6, 6, 4, 4, '#fff3b0');
      out += px(7, 2, 2, 2, '#ffd166') + px(7, 12, 2, 2, '#ffd166') + px(2, 7, 2, 2, '#ffd166') + px(12, 7, 2, 2, '#ffd166');
      out += px(3, 3, 2, 2, '#ffb703') + px(11, 3, 2, 2, '#ffb703') + px(3, 11, 2, 2, '#ffb703') + px(11, 11, 2, 2, '#ffb703');
      return svgWrap(16, '#1c4f7a', out);
    case 'voice_mic':
      out += px(6, 3, 4, 6, '#adb5bd') + px(7, 4, 2, 3, '#4cc9f0') + px(5, 9, 6, 1, '#6c757d');
      out += px(7, 10, 2, 3, '#6c757d') + px(5, 13, 6, 1, '#adb5bd');
      out += px(3, 5, 1, 3, '#ffb703') + px(12, 5, 1, 3, '#ffb703') + px(2, 4, 1, 5, '#4cc9f0') + px(13, 4, 1, 5, '#4cc9f0');
      return svgWrap(16, '#1b1f38', out);
    case 'ledger_book':
      out += px(3, 2, 10, 12, '#2d6a4f') + px(3, 2, 2, 12, '#ffd166') + px(7, 5, 4, 4, '#ffd166') + px(8, 6, 2, 2, '#b58300');
      out += px(6, 10, 5, 1, '#b7e4c7');
      return svgWrap(16, '#142b22', out);
    case 'video_orange':
      out += px(5, 2, 1, 2, '#ffd166') + px(10, 2, 1, 2, '#ffd166') + px(3, 4, 10, 9, '#fb8500');
      out += px(4, 5, 8, 7, '#2b190e') + px(7, 6, 2, 5, '#ffffff') + px(9, 7, 1, 3, '#ffffff');
      return svgWrap(16, '#332014', out);
    case 'blood_drop':
      out += px(3, 2, 10, 12, '#edf2f4') + px(4, 3, 8, 10, '#1d3557');
      out += px(7, 5, 2, 2, '#e63946') + px(6, 7, 4, 4, '#e63946') + px(7, 8, 1, 2, '#ffb3c1');
      return svgWrap(16, '#152e2b', out);
    case 'video_peach':
      out += px(7, 2, 3, 2, '#52b788') + px(4, 4, 8, 8, '#ff758f') + px(5, 12, 6, 2, '#ff758f');
      out += px(7, 6, 2, 5, '#ffffff') + px(9, 7, 1, 3, '#ffffff');
      return svgWrap(16, '#301829', out);
    case 'weather_rain':
      out += px(5, 3, 6, 3, '#a8dadc') + px(3, 5, 10, 4, '#457b9d');
      out += px(4, 10, 2, 3, '#4cc9f0') + px(8, 11, 2, 3, '#4cc9f0') + px(11, 10, 2, 3, '#90e0ef');
      return svgWrap(16, '#1b283b', out);
    case 'rocket_clean':
      out += px(7, 2, 2, 2, '#ffffff') + px(6, 4, 4, 6, '#e0fbfc') + px(7, 5, 2, 2, '#4ea8de');
      out += px(4, 8, 2, 3, '#ef476f') + px(10, 8, 2, 3, '#ef476f') + px(7, 10, 2, 3, '#ffd166') + px(3, 3, 1, 1, '#ffd166');
      return svgWrap(16, '#12233d', out);
    case 'coupon_ticket':
      out += px(2, 4, 12, 8, '#e63946') + px(2, 7, 1, 2, '#33171b') + px(13, 7, 1, 2, '#33171b');
      out += px(6, 5, 1, 6, '#ffb3c1') + px(9, 6, 3, 4, '#ffd166') + px(10, 7, 1, 2, '#9e6700');
      return svgWrap(16, '#33171b', out);
    case 'finance_chart':
      out += px(3, 9, 2, 4, '#2ec4b6') + px(6, 7, 2, 6, '#ffd166') + px(9, 5, 2, 8, '#ef476f') + px(12, 3, 2, 10, '#06d6a0');
      out += px(2, 13, 12, 1, '#8d99ae');
      return svgWrap(16, '#14211e', out);
    case 'video_drama':
      out += px(3, 3, 10, 3, '#edf2f4') + px(4, 3, 2, 3, '#1d1e22') + px(8, 3, 2, 3, '#1d1e22') + px(12, 3, 1, 3, '#1d1e22');
      out += px(3, 6, 10, 7, '#d62828') + px(7, 7, 2, 5, '#ffd166') + px(9, 8, 1, 3, '#ffd166');
      return svgWrap(16, '#2b141a', out);
    case 'weather_penguin':
      out += px(5, 3, 6, 10, '#1d2d44') + px(6, 5, 4, 7, '#f8f9fa') + px(6, 4, 1, 1, '#ffffff') + px(9, 4, 1, 1, '#ffffff');
      out += px(7, 5, 2, 2, '#ffb703') + px(5, 7, 6, 1, '#ffd166') + px(5, 13, 2, 1, '#ffb703') + px(9, 13, 2, 1, '#ffb703');
      return svgWrap(16, '#1b3d59', out);
    case 'clock':
      out += px(4, 3, 8, 10, '#ced4da') + px(3, 4, 10, 8, '#ced4da') + px(4, 4, 8, 8, '#1d2d3a');
      out += px(7, 5, 2, 3, '#ffffff') + px(7, 7, 4, 2, '#ffffff') + px(7, 8, 1, 3, '#ef476f');
      return svgWrap(16, '#19262b', out);
    case 'ram_chip':
      out += px(5, 2, 1, 2, '#adb5bd') + px(8, 2, 1, 2, '#adb5bd') + px(10, 2, 1, 2, '#adb5bd');
      out += px(5, 12, 1, 2, '#adb5bd') + px(8, 12, 1, 2, '#adb5bd') + px(10, 12, 1, 2, '#adb5bd');
      out += px(2, 5, 2, 1, '#adb5bd') + px(2, 8, 2, 1, '#adb5bd') + px(12, 5, 2, 1, '#adb5bd') + px(12, 8, 2, 1, '#adb5bd');
      out += px(4, 4, 8, 8, '#2b9348') + px(6, 6, 4, 4, '#ffd166');
      return svgWrap(16, '#12261c', out);
    case 'heart_pulse':
      out += px(3, 4, 4, 3, '#ef476f') + px(9, 4, 4, 3, '#ef476f') + px(3, 6, 10, 4, '#ef476f');
      out += px(5, 10, 6, 2, '#ef476f') + px(7, 12, 2, 1, '#ef476f');
      out += px(4, 7, 2, 1, '#ffffff') + px(6, 5, 1, 4, '#ffffff') + px(8, 6, 1, 3, '#ffffff') + px(9, 7, 3, 1, '#ffffff');
      return svgWrap(16, '#2e1620', out);
    case 'price_tag':
      out += px(7, 2, 4, 1, '#e9c46a') + px(4, 4, 8, 8, '#f77f00') + px(5, 3, 6, 10, '#f77f00');
      out += px(7, 5, 2, 2, '#2e2015') + px(6, 8, 4, 3, '#ffd166');
      return svgWrap(16, '#2e2015', out);
    case 'flower_vase':
      out += px(6, 9, 4, 5, '#52b788') + px(5, 10, 6, 3, '#74c69d') + px(7, 5, 2, 4, '#40916c');
      out += px(4, 3, 3, 3, '#ff85a1') + px(9, 4, 3, 3, '#ffb3c1') + px(6, 2, 4, 3, '#ff4d6d') + px(7, 3, 2, 2, '#ffd166');
      return svgWrap(16, '#182926', out);
    case 'subway':
      out += px(4, 3, 8, 9, '#a8dadc') + px(5, 4, 6, 4, '#1d3557') + px(5, 9, 2, 2, '#ffd166') + px(9, 9, 2, 2, '#ffd166');
      out += px(3, 12, 3, 2, '#6c757d') + px(10, 12, 3, 2, '#6c757d');
      return svgWrap(16, '#1a2330', out);
    case 'outdoor_compass':
      out += px(3, 3, 10, 10, '#e9c46a') + px(4, 4, 8, 8, '#14213d');
      out += px(7, 5, 2, 3, '#ef233c') + px(7, 8, 2, 3, '#edf2f4') + px(5, 7, 2, 2, '#4cc9f0') + px(9, 7, 2, 2, '#4cc9f0');
      return svgWrap(16, '#121c30', out);
    case 'sleep_moon':
      out += px(5, 3, 5, 8, '#ffd166') + px(7, 4, 4, 6, '#171630') + px(11, 3, 1, 1, '#ffffff') + px(12, 6, 1, 1, '#ffffff');
      out += px(3, 12, 10, 1, '#9d4edd') + px(5, 14, 6, 1, '#c77dff');
      return svgWrap(16, '#171630', out);
    default:
      out += px(4, 4, 8, 8, '#90a4ae');
      return svgWrap(16, '#22262b', out);
  }
}
