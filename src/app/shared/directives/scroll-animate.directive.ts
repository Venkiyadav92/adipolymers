import { Directive, ElementRef, Input, OnInit, OnDestroy, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[apScrollAnimate]',
  standalone: true,
})
export class ScrollAnimateDirective implements OnInit, OnDestroy {
  @Input() apScrollAnimate: 'fade-up' | 'fade-left' | 'fade-right' | 'scale' | 'fade' = 'fade-up';
  @Input() scrollDelay = 0;
  @Input() scrollThreshold = 0.15;

  private readonly el = inject(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);
  private observer: IntersectionObserver | null = null;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const nativeEl: HTMLElement = this.el.nativeElement;
    nativeEl.style.opacity = '0';
    nativeEl.style.transition = `opacity 0.7s ease ${this.scrollDelay}ms, transform 0.7s ease ${this.scrollDelay}ms`;

    switch (this.apScrollAnimate) {
      case 'fade-up':    nativeEl.style.transform = 'translateY(28px)'; break;
      case 'fade-left':  nativeEl.style.transform = 'translateX(-28px)'; break;
      case 'fade-right': nativeEl.style.transform = 'translateX(28px)'; break;
      case 'scale':      nativeEl.style.transform = 'scale(0.92)'; break;
      default:           break;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          nativeEl.style.opacity = '1';
          nativeEl.style.transform = 'none';
          this.observer?.unobserve(nativeEl);
        }
      },
      { threshold: this.scrollThreshold }
    );

    this.observer.observe(nativeEl);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
