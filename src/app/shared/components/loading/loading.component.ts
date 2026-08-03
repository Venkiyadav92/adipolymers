import { Component } from '@angular/core';

@Component({
  selector: 'ap-loading',
  standalone: true,
  template: `
    <div class="loading-screen" role="status" aria-label="Loading content">
      <div class="loading-logo">
        <div class="logo-ring"></div>
        <div class="logo-ring logo-ring--2"></div>
        <span class="logo-letter">A</span>
      </div>
      <p class="loading-text">Loading...</p>
    </div>
  `,
  styles: [`
    @use '../../../../styles/variables' as *;
    @use '../../../../styles/mixins' as *;

    .loading-screen {
      @include flex-center;
      flex-direction: column;
      gap: $space-6;
      min-height: 400px;
      width: 100%;
    }

    .loading-logo {
      position: relative;
      width: 72px;
      height: 72px;
      @include flex-center;
    }

    .logo-ring {
      position: absolute;
      inset: 0;
      border-radius: 50%;
      border: 3px solid transparent;
      border-top-color: $color-purple;
      animation: spin 1s linear infinite;
    }
    .logo-ring--2 {
      inset: 8px;
      border-top-color: $color-pink;
      animation-duration: 0.7s;
      animation-direction: reverse;
    }

    .logo-letter {
      font-family: $font-display;
      font-size: 1.5rem;
      font-weight: $font-weight-extra;
      @include gradient-text($gradient-brand);
    }

    .loading-text {
      font-size: $font-size-sm;
      color: $color-gray;
      animation: pulse 1.5s ease-in-out infinite;
    }
  `],
})
export class LoadingComponent {}
