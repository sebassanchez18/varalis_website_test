import { ChangeDetectionStrategy, Component } from '@angular/core';

import { siteContent } from './core/site.content';
import { Landing } from './features/landing/landing';

@Component({
  selector: 'app-root',
  imports: [Landing],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.html',
})
export class App {
  protected readonly site = siteContent;
}
