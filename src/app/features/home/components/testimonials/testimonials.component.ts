import { Component, inject, signal, OnInit, OnDestroy, PLATFORM_ID } from '@angular/core';
import { DataService } from '../../../../core/services/data.service';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { ScrollAnimateDirective } from '../../../../shared/directives/scroll-animate.directive';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'ap-testimonials',
  standalone: true,
  imports: [SectionHeaderComponent, ScrollAnimateDirective],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  readonly testimonials = inject(DataService).getTestimonials();
  readonly platformId = inject(PLATFORM_ID);
  readonly activeIndex = signal(0);
  private timer: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.timer = setInterval(() => {
        this.activeIndex.update(i => (i + 1) % this.testimonials.length);
      }, 5000);
    }
  }

  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
  }

  setActive(i: number): void {
    this.activeIndex.set(i);
  }

  getStars(rating: number): number[] {
    return Array.from({ length: rating }, (_, i) => i);
  }
}
