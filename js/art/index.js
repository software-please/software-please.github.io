/* ============================================================================
   Art Facade Module
   ============================================================================ */

import { getPortraitSVG } from './portraits.js';
import { getAppIconSVG } from './icons.js';
import {
  getNewspaperArtSVG,
  getEndingArtSVG,
  getTitleEmblemSVG,
  getIntroSceneSVG,
  getDay7AwardSceneSVG
} from './scenes.js';

export {
  getPortraitSVG,
  getAppIconSVG,
  getNewspaperArtSVG,
  getEndingArtSVG,
  getTitleEmblemSVG,
  getIntroSceneSVG,
  getDay7AwardSceneSVG
};

export const Art = {
  getTitleEmblemSVG: getTitleEmblemSVG,
  getIntroSceneSVG: getIntroSceneSVG,
  getDay7AwardSceneSVG: getDay7AwardSceneSVG,
  getPortraitSVG: getPortraitSVG,
  getAppIconSVG: getAppIconSVG,
  getNewspaperArtSVG: getNewspaperArtSVG,
  getEndingArtSVG: getEndingArtSVG
};
