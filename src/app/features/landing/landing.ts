import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CorePillars } from './components/core-pillars/core-pillars';
import { FinalCta } from './components/final-cta/final-cta';
import { Footer } from './components/footer/footer';
import { Hero } from './components/hero/hero';
import { HowItWorks } from './components/how-it-works/how-it-works';
import { Navbar } from './components/navbar/navbar';
import { Privacy } from './components/privacy/privacy';

@Component({
  selector: 'app-landing',
  imports: [Navbar, Hero, CorePillars, HowItWorks, Privacy, FinalCta, Footer],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './landing.html',
})
export class Landing {}
