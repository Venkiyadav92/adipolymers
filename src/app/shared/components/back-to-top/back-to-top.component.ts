import { Component, inject } from '@angular/core';
import { ScrollService } from '../../../core/services/scroll.service';
import { NgClass } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'ap-back-to-top',
  standalone: true,
  imports: [NgClass],
  animations: [
    trigger('fadeScale', [
      state('hidden', style({ opacity: 0, transform: 'scale(0.7)', pointerEvents: 'none' })),
      state('visible', style({ opacity: 1, transform: 'scale(1)', pointerEvents: 'all' })),
      transition('hidden <=> visible', animate('250ms cubic-bezier(0.34, 1.56, 0.64, 1)')),
    ]),
  ],
  template: `
    <button
      class="back-to-top"
      [@fadeScale]="scrollService.scrollY() > 400 ? 'visible' : 'hidden'"
      (click)="scrollService.scrollToTop()"
      aria-label="Scroll back to top"
      title="Back to top"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
        <path d="M18 15l-6-6-6 6"/>
      </svg>
    </button>
  `,
  styles: [`
    @use '../../../../styles/variables' as *;

    .back-to-top {
      position: fixed;
      bottom: 2rem;
      right: 1.7rem;
      bottom:1rem;
      
      width: 50px;
      height: 50px;
      border-radius: 100%;
        background: linear-gradient(
    145deg,
    #4f2ca7 0%,
    #833AB4 25%,
    #C13584 55%,
    #E1306C 75%,
    #F77737 90%,
    #FCAF45 100%
  );
      
      color: #fff;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 20px rgba(107, 33, 168, 0.4);
      z-index: $z-toast;
      transition: box-shadow $transition-base, transform $transition-base;

      &:hover {
        box-shadow: 0 8px 32px rgba(107, 33, 168, 0.5);
        transform: translateY(-2px);
      }
    }
  `],
})
export class BackToTopComponent {
  readonly scrollService = inject(ScrollService);
}
