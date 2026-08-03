import { Injectable, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { fromEvent } from 'rxjs';
import { throttleTime, map, distinctUntilChanged } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  readonly scrollY = signal(0);
  readonly scrollProgress = signal(0);
  readonly isScrolled = signal(false);
  readonly scrollDirection = signal<'up' | 'down'>('up');

  private lastScrollY = 0;
  private readonly platformId = inject(PLATFORM_ID);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.init();
    }
  }

  private init(): void {
    fromEvent(window, 'scroll')
      .pipe(
        throttleTime(16, undefined, { leading: true, trailing: true }),
        map(() => window.scrollY),
        takeUntilDestroyed()
      )
      .subscribe(y => {
        this.scrollY.set(y);
        this.isScrolled.set(y > 72);
        this.scrollDirection.set(y > this.lastScrollY ? 'down' : 'up');
        this.lastScrollY = y;

        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        this.scrollProgress.set(docHeight > 0 ? (y / docHeight) * 100 : 0);
      });
  }

  scrollToTop(behavior: ScrollBehavior = 'smooth'): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior });
    }
  }

  scrollToElement(selector: string, offset = 0): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const el = document.querySelector(selector);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }
}
