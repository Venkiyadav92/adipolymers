import { Directive, ElementRef, Input, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[apCounter]',
  standalone: true,
})
export class CounterDirective implements OnInit {
  @Input({ required: true }) apCounter!: number;
  @Input() counterDuration = 2000;
  @Input() counterSuffix = '';

  private readonly el = inject(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);
  private observer: IntersectionObserver | null = null;
  private started = false;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      this.el.nativeElement.textContent = `${this.apCounter}${this.counterSuffix}`;
      return;
    }

    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !this.started) {
        this.started = true;
        this.animate();
        this.observer?.disconnect();
      }
    }, { threshold: 0.5 });

    this.observer.observe(this.el.nativeElement);
  }

  private animate(): void {
    const start = 0;
    const end = this.apCounter;
    const duration = this.counterDuration;
    const startTime = performance.now();
    const el = this.el.nativeElement;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = this.easeOutExpo(progress);
      const current = Math.floor(eased * end);
      el.textContent = `${current}${this.counterSuffix}`;

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = `${end}${this.counterSuffix}`;
      }
    };

    requestAnimationFrame(tick);
  }

  private easeOutExpo(t: number): number {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  }
}
