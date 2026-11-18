import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

export type ButtonVariant = 'brand' | 'strong' | 'light' | 'inverse';
export type ButtonShape = 'rect' | 'pill' | 'capsule';

@Component({
  selector: 'app-button',
  imports: [NgTemplateOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './button.html',
  host: {
    class: 'inline-flex',
  },
})
export class Button {
  readonly variant = input<ButtonVariant>('brand');
  readonly shape = input<ButtonShape>('rect');
  readonly href = input<string | undefined>(undefined);
  readonly ariaLabel = input<string | undefined>(undefined);
  readonly buttonType = input<'button' | 'submit'>('button');
  readonly fullWidth = input(false);

  protected readonly classes = computed(() => {
    const variants: Record<ButtonVariant, string> = {
      brand: 'bg-brand font-bold text-inverse hover:bg-brand/90 focus-visible:outline-brand-strong',
      strong:
        'bg-brand-strong font-normal text-inverse hover:bg-brand-strong/90 focus-visible:outline-brand-strong',
      light:
        'bg-inverse font-normal text-brand-strong hover:bg-brand-subtle focus-visible:outline-brand-strong',
      inverse:
        'bg-inverse font-normal text-brand-strong hover:bg-brand-subtle focus-visible:outline-inverse',
    };
    const shapes: Record<ButtonShape, string> = {
      rect: 'rounded-button px-button-x py-button-y text-nav',
      pill: 'h-control-h w-control-w rounded-pill',
      capsule: 'rounded-pill px-button-x py-button-y text-nav',
    };
    const width = this.fullWidth() ? 'w-full' : '';

    return [
      'inline-flex cursor-pointer items-center justify-center gap-2 font-sans leading-normal transition-colors',
      'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
      variants[this.variant()],
      shapes[this.shape()],
      width,
    ]
      .filter((value) => value.length > 0)
      .join(' ');
  });
}
