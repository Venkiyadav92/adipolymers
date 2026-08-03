import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ap-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="not-found">
      <div class="not-found__bg" aria-hidden="true">
        <div class="orb orb-1"></div>
        <div class="orb orb-2"></div>
      </div>
      <div class="not-found__content">
        <div class="not-found__code">404</div>
        <h1 class="not-found__title">Page Not Found</h1>
        <p class="not-found__desc">Oops! The page you're looking for seems to have biodegraded. Let's get you back on track.</p>
        <div class="not-found__actions">
          <a routerLink="/" class="nf-btn-home">Go to Homepage</a>
          <a routerLink="/products" class="nf-btn-products">Browse Products</a>
        </div>
        <div class="not-found__links">
          <a routerLink="/about">About Us</a>
          <a routerLink="/services">Services</a>
          <a routerLink="/contact">Contact</a>
          <a routerLink="/blog">Blog</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @use '../../../styles/variables' as *;
    @use '../../../styles/mixins' as *;

    .not-found {
      min-height: 100vh;
      background: $gradient-hero;
      @include flex-center;
      flex-direction: column;
      text-align: center;
      position: relative;
      overflow: hidden;
      padding: $space-12 $container-padding;
    }
    .not-found__bg { @include absolute-fill; pointer-events: none; }
    .not-found__bg .orb { position: absolute; border-radius: 50%; filter: blur(80px); }
    .not-found__bg .orb-1 { width: 500px; height: 500px; background: radial-gradient(circle, rgba(107,33,168,0.35), transparent); top: -100px; right: -100px; }
    .not-found__bg .orb-2 { width: 400px; height: 400px; background: radial-gradient(circle, rgba(249,115,22,0.25), transparent); bottom: -100px; left: -50px; }
    .not-found__content { position: relative; z-index: 1; max-width: 560px; }
    .not-found__code {
      font-family: $font-display;
      font-size: clamp(6rem, 20vw, 10rem);
      font-weight: $font-weight-black;
      line-height: 1;
      @include gradient-text($gradient-brand);
      margin-bottom: $space-4;
      opacity: 0.85;
    }
    .not-found__title {
      font-family: $font-display;
      font-size: clamp(1.5rem, 3vw, 2rem);
      font-weight: $font-weight-bold;
      color: #fff;
      margin-bottom: $space-3;
    }
    .not-found__desc { font-size: $font-size-base; color: rgba(255,255,255,0.6); line-height: 1.7; margin-bottom: $space-8; }
    .not-found__actions {
      @include flex(row, center, center, $space-4);
      flex-wrap: wrap;
      margin-bottom: $space-8;
    }
    .not-found__links {
      @include flex(row, center, center, $space-5);
      flex-wrap: wrap;
    }
    .not-found__links a { font-size: $font-size-sm; color: rgba(255,255,255,0.4); text-decoration: none; transition: color $transition-fast; }
    .not-found__links a:hover { color: rgba(255,255,255,0.85); }

    .nf-btn-home {
      @include btn-primary;
      height: 52px;
      padding: 0 $space-8;
      font-size: $font-size-base;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
    }
    .nf-btn-products {
      @include btn-outline;
      height: 52px;
      padding: 0 $space-8;
      font-size: $font-size-base;
      border-color: rgba(255,255,255,0.3);
      color: rgba(255,255,255,0.8);
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    .nf-btn-products:hover { border-color: rgba(255,255,255,0.8); background: rgba(255,255,255,0.08); color: #fff; }
  `],
})
export class NotFoundComponent {}
