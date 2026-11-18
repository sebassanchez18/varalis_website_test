import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

import { Button } from '../../../../shared/ui/button/button';
import { landingContent, type LegalCase } from '../../landing.content';

@Component({
  selector: 'app-hero',
  imports: [Button, NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero.html',
})
export class Hero {
  protected readonly content = landingContent;
  protected readonly caseIndex = signal(0);

  protected readonly featuredCase = computed((): LegalCase => {
    const cases = this.content.hero.cases;
    const current = cases[this.caseIndex()];
    const fallback = cases[0];

    if (current) {
      return current;
    }

    if (!fallback) {
      throw new Error('The hero requires at least one legal case.');
    }

    return fallback;
  });

  protected showCase(index: number): void {
    if (index < 0 || index >= this.content.hero.cases.length) {
      return;
    }

    this.caseIndex.set(index);
  }

  protected nextCase(): void {
    const total = this.content.hero.cases.length;
    this.caseIndex.update((index) => (index + 1) % total);
  }

  protected slideLabel(index: number): string {
    const item = this.content.hero.cases[index];
    const title = item?.title ?? '';
    return `Show case ${index + 1} of ${this.content.hero.cases.length}: ${title}`;
  }
}
