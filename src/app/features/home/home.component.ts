import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { StatsComponent } from './components/stats/stats.component';
import { ServicesPreviewComponent } from './components/services-preview/services-preview.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { CtaComponent } from './components/cta/cta.component';

@Component({
  selector: 'ap-home',
  standalone: true,
  imports: [
    HeroComponent,
    StatsComponent,
    ServicesPreviewComponent,
    CertificationsComponent,
    CtaComponent,
  ],
  template: `
    <ap-hero />
    <ap-stats />
    <ap-services-preview />
   
    <ap-certifications />
    <ap-cta />
  `,
})
export class HomeComponent {}
