import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { landingContent } from '../../landing.content';

@Component({
  selector: 'app-core-pillars',
  imports: [NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './core-pillars.html',
  host: {
    class: 'block',
  },
})
export class CorePillars {
  protected readonly content = landingContent.pillars;
}
