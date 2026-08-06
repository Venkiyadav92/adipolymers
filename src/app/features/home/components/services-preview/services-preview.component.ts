import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { ScrollAnimateDirective } from '../../../../shared/directives/scroll-animate.directive';

interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
  color: string;
  link: string;
  image: string;
}

@Component({
  selector: 'ap-services-preview',
  standalone: true,
  imports: [RouterLink, SectionHeaderComponent, ScrollAnimateDirective],
  templateUrl: './services-preview.component.html',
  styleUrl: './services-preview.component.scss',
})
export class ServicesPreviewComponent {
  readonly services: Service[] = [
    {
      icon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="20" stroke="currentColor" stroke-width="1.5" opacity="0.3"/><path d="M16 24C16 19.58 19.58 16 24 16C28.42 16 32 19.58 32 24" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="24" cy="24" r="4" fill="currentColor"/><path d="M24 12V16M24 32V36M12 24H16M32 24H36" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
      title: 'Custom Formulation',
      description: 'Tailor-made compostable compound formulations designed to meet your exact technical specifications and sustainability targets.',
      features: ['Material Testing & Analysis', 'Prototype Development', 'Scale-up Support', 'Regulatory Compliance'],
      color: 'purple',
      link: '/services',
      image: '/assets/images/machine5.jpg',
    },
    {
      icon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="8" width="32" height="32" rx="4" stroke="currentColor" stroke-width="1.5" opacity="0.3"/><path d="M16 24H32M24 16V32" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="16" cy="16" r="3" fill="currentColor"/><circle cx="32" cy="32" r="3" fill="currentColor"/><circle cx="32" cy="16" r="3" fill="currentColor"/><circle cx="16" cy="32" r="3" fill="currentColor"/></svg>`,
      title: 'Manufacturing & Supply',
      description: 'State-of-the-art production facility with twin-screw extruder capacity for consistent, high-quality polymer compound manufacturing at scale.',
      features: ['ISO 9001 Manufacturing', 'Bulk & Custom Packaging', 'Global Logistics'],
      color: 'green',
      link: '/services',
      image: '/assets/images/machine8.jpg',
    },
    {
      icon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 8L8 16V28C8 36 24 42 24 42C24 42 40 36 40 28V16L24 8Z" stroke="currentColor" stroke-width="1.5" opacity="0.3"/><path d="M18 24L22 28L30 20" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      title: 'R&D Partnership',
      description: 'Collaborative research partnerships with academia, industry bodies, and brands to develop next-generation sustainable polymer technologies.',
      features: ['Joint Research Programs', 'IP Development', 'Government Grant Support', 'Publication Support'],
      color: 'orange',
      link: '/services',
      image: '/assets/images/machine1.jpg',
    },
    {
      icon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="18" r="6" stroke="currentColor" stroke-width="1.5"/><path d="M12 38C12 32 17.37 28 24 28C30.63 28 36 32 36 38" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/><path d="M34 12L38 8M34 24L38 28M36 18H40" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
      title: 'Technical Consultation',
      description: 'Expert guidance on material selection, processing parameters, regulatory compliance, and sustainability certification for biodegradable products.',
      features: ['Material Selection', 'Processing Guidance', 'Certification Pathways', 'Compliance Advisory'],
      color: 'pink',
      link: '/services',
      image: '/assets/images/machine2.jpg',
    },
  ];
}
