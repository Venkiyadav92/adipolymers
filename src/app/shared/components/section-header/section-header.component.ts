import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'ap-section-header',
  standalone: true,
  imports: [NgClass, ScrollAnimateDirective],
  template: `
    <div class="section-header" [ngClass]="'align-' + align">
      @if (label) {
        <span class="section-header__label" [apScrollAnimate]="'fade-up'" [scrollDelay]="0">
          @if (labelIcon) {
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2-8 2-8 4-4 8-4 8s-4-6 3-8c0 0 4.5.5 4.5 7 0 6-3.5 9-3.5 9a11 11 0 0 0 4.5-9C18.5 5 17 4 17 4"/>
            </svg>
          }
          {{ label }}
        </span>
      }
      <h2 class="section-header__title" [apScrollAnimate]="'fade-up'" [scrollDelay]="100" [innerHTML]="title"></h2>
      @if (subtitle) {
        <p class="section-header__subtitle" [apScrollAnimate]="'fade-up'" [scrollDelay]="150">{{ subtitle }}</p>
      }
    </div>
  `,
  styles: [`
    @use '../../../../styles/variables' as *;
    @use '../../../../styles/mixins' as *;

    .section-header { margin-bottom: $space-12; }
    .section-header.align-center { text-align: center; display: flex; flex-direction: column; align-items: center; }
    .section-header.align-left { text-align: left; }
    .section-header.align-right { text-align: right; align-items: flex-end; display: flex; flex-direction: column; }
    .section-header__label {
      display: inline-flex;
      align-items: center;
      gap: $space-2;
      font-size: $font-size-xs;
      font-weight: $font-weight-semi;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: $color-purple;
      background: rgba(107, 33, 168, 0.08);
      padding: 0.375rem 1rem;
      border-radius: $radius-full;
      margin-bottom: $space-4;
      border: 1px solid rgba(107, 33, 168, 0.12);
    }
    .section-header__title {
      font-family: $font-display;
      font-size: clamp(1.75rem, 4vw, 2.75rem);
      font-weight: $font-weight-extra;
      line-height: 1.15;
      letter-spacing: -0.025em;
      color: $color-dark;
      margin-bottom: $space-4;
      max-width: 700px;
    }
    .section-header.align-center .section-header__title { margin-inline: auto; }
    .highlight {
      background: $gradient-brand;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .section-header__subtitle {
      font-size: clamp($font-size-base, 1.5vw, $font-size-lg);
      line-height: 1.75;
      color: $color-gray;
      max-width: 600px;
    }
  `],
})
export class SectionHeaderComponent {
  @Input() label = '';
  @Input() labelIcon = true;
  @Input() title = '';
  @Input() subtitle = '';
  @Input() align: 'left' | 'center' | 'right' = 'left';
}
