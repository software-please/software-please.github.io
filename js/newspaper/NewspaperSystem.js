/* ============================================================================
   NewspaperSystem — Daily Newspaper Rendering Driven by DayLevel
   ============================================================================ */

import { el } from '../core/dom.js';
import { Audio } from '../core/audio.js';
import { Art } from '../art/index.js';
import { Subsystem } from '../core/Subsystem.js';

export class NewspaperSystem extends Subsystem {
  constructor(kernel) {
    super(kernel);
    this.campaign = null;
    this.clock = null;
    this.screen = null;
  }

  connect(kernel) {
    this.campaign = kernel.campaign;
    this.clock = kernel.clock;
    this.screen = kernel.screen;
  }

  open(day) {
    this.clock.stop();
    this.campaign.run.day = day;
    const level = this.campaign.getLevel(day);
    const data = level.getNewspaper(this.campaign.run);

    el('news-day-badge').textContent = 'DAY ' + data.day;
    el('news-date').textContent = data.dateStr;
    el('news-art').innerHTML = Art.getNewspaperArtSVG(data.day, data.artOpts);
    el('news-headline').textContent = data.news.headline;
    el('news-subhead').textContent = data.news.subhead;
    el('news-body').innerHTML = data.news.body.map(function (p) { return '<p>' + p + '</p>'; }).join('');
    el('news-ticker').textContent = data.news.ticker;

    el('news-unlocks').innerHTML = data.unlocks
      .map(function (u) { return '<div class="unlock-item">' + u + '</div>'; })
      .join('');

    this.screen.show('screen-newspaper', { fade: true });
    Audio.play('newspaper');
  }
}
