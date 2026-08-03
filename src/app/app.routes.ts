import { Routes } from '@angular/router';
import { pageGuard } from './core/guards/page.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
    canActivate: [pageGuard],
    data: {
      seo: {
        title: 'Aditya Polymers - Quality Compostable Packaging Solutions',
        description: 'Manufacturer of certified compostable carry bags and sustainable packaging solutions. CIPET certified, Udyam registered, based in Puducherry, India.'
      },
    },
  },
  {
    path: 'certificate',
    loadComponent: () => import('./features/certificate/certificate.component').then(m => m.CertificateComponent),
    canActivate: [pageGuard],
    data: {
      seo: {
        title: 'Certifications - Aditya Polymers',
        description: 'View our official certifications — CIPET compostability test report, Udyam registration, and Puducherry Pollution Control Committee consents.',
      },
    },
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent),
    canActivate: [pageGuard],
    data: {
      seo: {
        title: 'About Us - Aditya Polymers',
        description: 'Learn about Aditya Polymers — our story, mission, and commitment to sustainable, compostable packaging solutions.',
      },
    },
  },
  {
    path: 'services',
    loadComponent: () => import('./features/services/services.component').then(m => m.ServicesComponent),
    canActivate: [pageGuard],
    data: {
      seo: {
        title: 'Our Services - Aditya Polymers',
        description: 'Explore Aditya Polymers comprehensive service offerings in compostable packaging manufacturing.'
      },
    },
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent),
    canActivate: [pageGuard],
    data: {
      seo: {
        title: 'Contact Us - Aditya Polymers',
        description: 'Get in touch with Aditya Polymers for product inquiries, custom orders, or partnerships.',
      },
    },
  },
  {
    path: '**',
    loadComponent: () => import('./features/not-found/not-found.component').then(m => m.NotFoundComponent),
  },
];
