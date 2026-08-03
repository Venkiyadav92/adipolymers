import { Component, inject } from '@angular/core';
import { ToastService } from '../../../core/services/toast.service';
import { NgClass } from '@angular/common';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'ap-toast',
  standalone: true,
  imports: [NgClass],
  animations: [
    trigger('toastAnim', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(100%) scale(0.9)' }),
        animate('300ms cubic-bezier(0.34, 1.56, 0.64, 1)', style({ opacity: 1, transform: 'translateX(0) scale(1)' })),
      ]),
      transition(':leave', [
        animate('200ms ease', style({ opacity: 0, transform: 'translateX(100%) scale(0.9)' })),
      ]),
    ]),
  ],
  template: `
    <div class="toast-container" role="region" aria-label="Notifications" aria-live="polite">
      @for (toast of toastService.toasts(); track toast.id) {
        <div
          class="toast"
          [ngClass]="'toast--' + toast.type"
          [@toastAnim]
          role="alert"
        >
          <div class="toast__icon">
            @switch (toast.type) {
              @case ('success') {
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
              }
              @case ('error') {
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
              }
              @case ('warning') {
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              }
              @default {
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
              }
            }
          </div>
          <div class="toast__content">
            <p class="toast__title">{{ toast.title }}</p>
            @if (toast.message) {
              <p class="toast__message">{{ toast.message }}</p>
            }
          </div>
          @if (toast.dismissible) {
            <button class="toast__close" (click)="toastService.dismiss(toast.id)" aria-label="Dismiss notification">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          }
        </div>
      }
    </div>
  `,
  styles: [`
    @use '../../../../styles/variables' as *;
    @use '../../../../styles/mixins' as *;

    .toast-container {
      position: fixed;
      top: calc(#{$navbar-height} + 1rem);
      right: 1.5rem;
      z-index: $z-toast;
      display: flex;
      flex-direction: column;
      gap: $space-3;
      max-width: 380px;
      width: calc(100vw - 2rem);
    }

    .toast {
      @include flex(row, flex-start, flex-start, $space-3);
      padding: $space-4;
      border-radius: $radius-xl;
      background: #fff;
      box-shadow: $shadow-xl, 0 0 0 1px rgba(0,0,0,0.05);
      border-left: 3px solid;
    }
    .toast--success { border-color: $color-green; }
    .toast--success .toast__icon { color: $color-green; background: rgba(22,163,74,0.08); }
    .toast--error   { border-color: $color-error; }
    .toast--error .toast__icon   { color: $color-error; background: rgba(220,38,38,0.08); }
    .toast--warning { border-color: $color-warning; }
    .toast--warning .toast__icon { color: $color-warning; background: rgba(217,119,6,0.08); }
    .toast--info    { border-color: $color-info; }
    .toast--info .toast__icon    { color: $color-info; background: rgba(14,165,233,0.08); }
    .toast__icon {
      width: 36px;
      height: 36px;
      border-radius: $radius-lg;
      @include flex-center;
      flex-shrink: 0;
    }
    .toast__content { flex: 1; min-width: 0; }
    .toast__title {
      font-size: $font-size-sm;
      font-weight: $font-weight-semi;
      color: $color-dark;
      margin: 0 0 $space-1;
    }
    .toast__message {
      font-size: $font-size-xs;
      color: $color-gray;
      margin: 0;
      line-height: 1.5;
    }
    .toast__close {
      width: 28px;
      height: 28px;
      @include flex-center;
      background: none;
      border: none;
      cursor: pointer;
      color: $color-gray-light;
      border-radius: $radius-md;
      flex-shrink: 0;
      transition: all $transition-fast;
    }
    .toast__close:hover { background: $color-bg-soft; color: $color-dark; }
  `],
})
export class ToastComponent {
  readonly toastService = inject(ToastService);
}
