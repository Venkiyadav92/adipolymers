import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef, signal, inject, PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { ScrollAnimateDirective } from '../../../../shared/directives/scroll-animate.directive';



interface HeroSlide {
  tagline: string;
  title: string;
  highlight: string;
  subtitle: string;
  cta: string;
  ctaLink: string;
  badge: string;
}

@Component({
  selector: 'ap-hero',
  standalone: true,
  imports: [RouterLink, ScrollAnimateDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit, OnDestroy, AfterViewInit{
  private readonly platformId = inject(PLATFORM_ID);
  @ViewChild('heroVideo')
  heroVideo!: ElementRef<HTMLVideoElement>;

  readonly currentSlide = signal(0);
  readonly isAnimating = signal(false);

  readonly slides: HeroSlide[] = [
    {
      tagline: 'Industrial excellence',
      // title: 'Best Quality Biodegradable Carry Bags Manufacturers in India',
      title:'Very Largest Exporter of Certified Biodegradable Carry Bags Worldwide',
      highlight: '',
      subtitle: 'Compostable Carry Bags are an eco-friendly alternative to conventional carry bags. We are one of the leading manufacturers of compostable carry bags, committed to providing sustainable solutions without compromising on quality, durability, or functionality.',
      cta: 'Request a Consultation',
      ctaLink: '/contact',
      badge: 'Trusted Manufacturing Partner',
    },
  ];

  private timer: ReturnType<typeof setInterval> | null = null;

  readonly stats = [
    { value: '24/7', label: 'Operations' },
    { value: '98%', label: 'Precision' },
    { value: 'Global', label: 'Reach' },
  ];

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.timer = setInterval(() => this.nextSlide(), 5000);
    }
  }
  
  ngAfterViewInit(): void {
  const video = this.heroVideo.nativeElement;

  video.muted = true;

  video.play().catch(err => {
    // Handle autoplay failure silently
  });
}

  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
  }

  nextSlide(): void {
    this.isAnimating.set(true);
    setTimeout(() => {
      this.currentSlide.update(s => (s + 1) % this.slides.length);
      this.isAnimating.set(false);
    }, 300);
  }

  goToSlide(i: number): void {
    if (i === this.currentSlide()) return;
    if (this.timer) clearInterval(this.timer);
    this.currentSlide.set(i);
    if (isPlatformBrowser(this.platformId)) {
      this.timer = setInterval(() => this.nextSlide(), 5000);
    }
  }
}
