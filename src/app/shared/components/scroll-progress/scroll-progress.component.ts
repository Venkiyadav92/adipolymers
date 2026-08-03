import { Component, inject } from '@angular/core';
import { ScrollService } from '../../../core/services/scroll.service';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'ap-scroll-progress',
  standalone: true,
  imports: [NgStyle],
  template: `
    <div class="scroll-progress" role="progressbar" [attr.aria-valuenow]="scrollService.scrollProgress()" aria-valuemin="0" aria-valuemax="100" aria-label="Page scroll progress">
      <div class="scroll-progress__bar" [ngStyle]="{ width: scrollService.scrollProgress() + '%' }"></div>
    </div>
  `,
  styles: [`
    @use '../../../../styles/variables' as *;

    .scroll-progress {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      z-index: calc(#{$z-fixed} + 1);
      background: rgba(255,255,255,0.1);
    }
    .scroll-progress__bar {
      height: 100%;
      background: $gradient-brand;
      transition: width 0.1s linear;
      border-radius: 0 2px 2px 0;
      box-shadow: 0 0 8px rgba(107, 33, 168, 0.6);
    }
  `],
})
export class ScrollProgressComponent {
  readonly scrollService = inject(ScrollService);
}
