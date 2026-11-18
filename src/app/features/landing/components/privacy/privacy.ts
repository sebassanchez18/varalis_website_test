import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Button } from '../../../../shared/ui/button/button';
import { landingContent } from '../../landing.content';

@Component({
  selector: 'app-privacy',
  imports: [Button, NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './privacy.html',
  host: {
    class: 'block',
  },
})
export class Privacy {
  protected readonly content = landingContent.privacy;
}
