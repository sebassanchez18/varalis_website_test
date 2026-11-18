import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  ElementRef,
  HostListener,
  inject,
  Injector,
  signal,
  viewChild,
} from '@angular/core';

import { Button } from '../../../../shared/ui/button/button';
import { landingContent } from '../../landing.content';

const DESKTOP_QUERY = '(min-width: 64rem)';

@Component({
  selector: 'app-navbar',
  imports: [Button],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './navbar.html',
  host: {
    class: 'relative block',
  },
})
export class Navbar {
  private readonly injector = inject(Injector);
  private readonly menuButton = viewChild<ElementRef<HTMLButtonElement>>('menuButton');
  private readonly panel = viewChild<ElementRef<HTMLElement>>('panel');

  protected readonly content = landingContent;
  protected readonly menuOpen = signal(false);

  protected readonly panelClass = computed(() => {
    const desktop =
      'lg:static lg:z-auto lg:flex lg:h-auto lg:min-h-0 lg:flex-row lg:items-center lg:justify-center lg:gap-nav lg:border-0 lg:bg-transparent lg:p-0';

    if (this.menuOpen()) {
      return `absolute inset-x-0 top-full z-20 flex min-h-dvh flex-col gap-stack border-t border-brand-strong/15 bg-brand-subtle px-gutter py-stack sm:px-gutter-sm ${desktop}`;
    }

    return `hidden ${desktop}`;
  });

  constructor() {
    effect((onCleanup) => {
      if (!this.menuOpen()) {
        return;
      }

      const media = window.matchMedia(DESKTOP_QUERY);
      const lockScroll = (): void => {
        document.body.style.overflow = media.matches ? '' : 'hidden';
      };

      lockScroll();
      media.addEventListener('change', lockScroll);
      onCleanup(() => {
        media.removeEventListener('change', lockScroll);
        document.body.style.overflow = '';
      });
    });
  }

  @HostListener('document:keydown.escape')
  protected closeOnEscape(): void {
    if (this.menuOpen()) {
      this.closeMenu(true);
    }
  }

  @HostListener('keydown', ['$event'])
  protected trapMenuFocus(event: KeyboardEvent): void {
    if (!this.menuOpen() || event.key !== 'Tab') {
      return;
    }

    if (window.matchMedia(DESKTOP_QUERY).matches) {
      return;
    }

    const panel = this.panel()?.nativeElement;
    const button = this.menuButton()?.nativeElement;

    if (!panel || !button) {
      return;
    }

    const items = [
      button,
      ...panel.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'),
    ];
    const first = items[0];
    const last = items[items.length - 1];

    if (!first || !last) {
      return;
    }

    const active = document.activeElement;

    if (event.shiftKey && active === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  }

  protected toggleMenu(): void {
    if (this.menuOpen()) {
      this.closeMenu(true);
      return;
    }

    this.menuOpen.set(true);
    afterNextRender(() => this.focusFirstItem(), { injector: this.injector });
  }

  protected closeMenu(restoreFocus = false): void {
    if (!this.menuOpen()) {
      return;
    }

    this.menuOpen.set(false);

    if (restoreFocus) {
      afterNextRender(() => this.menuButton()?.nativeElement.focus(), {
        injector: this.injector,
      });
    }
  }

  private focusFirstItem(): void {
    this.panel()?.nativeElement.querySelector<HTMLElement>('a[href], button')?.focus();
  }
}
