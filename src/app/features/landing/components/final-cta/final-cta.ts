import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Button } from '../../../../shared/ui/button/button';
import { landingContent } from '../../landing.content';

@Component({
  selector: 'app-final-cta',
  imports: [Button, NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './final-cta.html',
  host: {
    class: 'block',
  },
})
export class FinalCta {
  protected readonly content = landingContent.finalCta;
}
