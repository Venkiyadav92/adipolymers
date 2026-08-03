import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ap-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly year = new Date().getFullYear();

  readonly quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'Certificate', path: '/certificate' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' },
  ];

  readonly certBadges = [
    'CIPET Certified',
    'ISO 17088:2021',
    'Udyam MSME',
    'PPCC Green',
    '91.1% Biodegradation',
    'Zero Hazardous Waste',
  ];
}
