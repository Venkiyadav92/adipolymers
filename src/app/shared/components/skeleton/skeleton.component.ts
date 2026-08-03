import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'ap-skeleton',
  standalone: true,
  imports: [NgStyle],
  template: `
    <div
      class="skeleton"
      [ngStyle]="{ width: width, height: height, borderRadius: radius }"
      role="presentation"
      aria-hidden="true"
    ></div>
  `,
  styles: [`
    @use '../../../../styles/variables' as *;
    @use '../../../../styles/mixins' as *;

    .skeleton {
      @include skeleton;
      display: block;
    }
  `],
})
export class SkeletonComponent {
  @Input() width = '100%';
  @Input() height = '1rem';
  @Input() radius = '8px';
}
