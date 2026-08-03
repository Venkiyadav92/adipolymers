import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { filter } from 'rxjs/operators';

export interface SeoConfig {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const DEFAULT_SEO: SeoConfig = {
  title: 'Aditya Polymers - Sustainable Packaging Solutions',
  description: 'Leading manufacturer of compostable carry bags and sustainable packaging solutions. Eco-friendly materials for a greener tomorrow.',
  keywords: 'compostable carry bags, sustainable packaging, eco-friendly materials, green manufacturing, carry bag manufacturers',
  image: '/assets/images/og-image.jpg',
  type: 'website',
};

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);
  private readonly router = inject(Router);
  private readonly platformId = inject(PLATFORM_ID);

  init(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        this.updateCanonical(window.location.href);
      });
  }

  update(config: Partial<SeoConfig>): void {
    const seo = { ...DEFAULT_SEO, ...config };
    const fullTitle = config.title
      ? `${config.title} | Aditya Polymers`
      : DEFAULT_SEO.title;

    this.title.setTitle(fullTitle);

    this.meta.updateTag({ name: 'description', content: seo.description });
    if (seo.keywords) this.meta.updateTag({ name: 'keywords', content: seo.keywords });

    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ property: 'og:description', content: seo.description });
    this.meta.updateTag({ property: 'og:type', content: seo.type ?? 'website' });
    if (seo.image) this.meta.updateTag({ property: 'og:image', content: seo.image });
    if (seo.url) this.meta.updateTag({ property: 'og:url', content: seo.url });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: fullTitle });
    this.meta.updateTag({ name: 'twitter:description', content: seo.description });
    if (seo.image) this.meta.updateTag({ name: 'twitter:image', content: seo.image });
  }

  private updateCanonical(url: string): void {
    if (!isPlatformBrowser(this.platformId)) return;
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}
