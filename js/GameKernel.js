/* ============================================================================
   GameKernel — Root Container Creating & Connecting All Subsystems
   ============================================================================ */

import { CampaignSystem } from './campaign/index.js';
import { ScreenSystem } from './screen/index.js';
import { BootSystem } from './boot/index.js';
import { IntroSystem } from './intro/index.js';
import { NewspaperSystem } from './newspaper/index.js';
import { ClockSystem } from './clock/index.js';
import { BoothSystem } from './booth/index.js';
import { EmulatorSystem } from './emulator/index.js';
import { DeskSystem } from './desk/index.js';
import { InterrogationSystem } from './interrogation/index.js';
import { VerdictSystem } from './verdict/index.js';
import { LedgerSystem } from './ledger/index.js';
import { EndingSystem } from './ending/index.js';
import { WhackMinigame } from './whack/index.js';
import { TakeoverMinigame } from './takeover/index.js';
import { ShiftSystem } from './shift/index.js';
import { InputSystem } from './input/index.js';

export class GameKernel {
  constructor() {
    this.campaign = new CampaignSystem(this);
    this.screen = new ScreenSystem(this);
    this.boot = new BootSystem(this);
    this.intro = new IntroSystem(this);
    this.newspaper = new NewspaperSystem(this);
    this.clock = new ClockSystem(this);
    this.booth = new BoothSystem(this);
    this.emulator = new EmulatorSystem(this);
    this.desk = new DeskSystem(this);
    this.interrogation = new InterrogationSystem(this);
    this.verdict = new VerdictSystem(this);
    this.ledger = new LedgerSystem(this);
    this.ending = new EndingSystem(this);
    this.whack = new WhackMinigame(this);
    this.takeover = new TakeoverMinigame(this);
    this.shift = new ShiftSystem(this);
    this.input = new InputSystem(this);

    this.subsystems = [
      this.campaign,
      this.screen,
      this.boot,
      this.intro,
      this.newspaper,
      this.clock,
      this.booth,
      this.emulator,
      this.desk,
      this.interrogation,
      this.verdict,
      this.ledger,
      this.ending,
      this.whack,
      this.takeover,
      this.shift,
      this.input
    ];

    this.subsystems.forEach((sys) => sys.connect(this));
  }

  init() {
    this.campaign.load();
    this.subsystems.forEach((sys) => sys.init());
    this.screen.refreshTitle();

    if (!this.campaign.getLanguage()) {
      this.boot.start();
    } else {
      this.screen.show('screen-title');
    }
  }
}
