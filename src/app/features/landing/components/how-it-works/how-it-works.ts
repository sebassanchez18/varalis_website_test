import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Button } from '../../../../shared/ui/button/button';
import { landingContent } from '../../landing.content';

@Component({
  selector: 'app-how-it-works',
  imports: [Button, NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './how-it-works.html',
  host: {
    class: 'block',
  },
})
export class HowItWorks {
  protected readonly content = landingContent.howItWorks;
}
