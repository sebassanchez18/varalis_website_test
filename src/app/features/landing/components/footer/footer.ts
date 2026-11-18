import { ChangeDetectionStrategy, Component } from '@angular/core';

import { landingContent } from '../../landing.content';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './footer.html',
  host: {
    class: 'block',
  },
})
export class Footer {
  protected readonly logo = landingContent.logo;
  protected readonly content = landingContent.footer;
}
