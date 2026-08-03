import { Component, inject, signal, HostListener, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { ScrollService } from '../../../core/services/scroll.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

interface NavLink {
  label: string;
  path: string;
  children?: NavLink[];
}

@Component({
  selector: 'ap-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  animations: [
    trigger('mobileMenu', [
      state('closed', style({ opacity: 0, transform: 'translateY(-16px)', pointerEvents: 'none' })),
      state('open', style({ opacity: 1, transform: 'translateY(0)', pointerEvents: 'all' })),
      transition('closed <=> open', animate('280ms cubic-bezier(0.4, 0, 0.2, 1)')),
    ]),
  ],
})
export class NavbarComponent implements OnInit {
  readonly scrollService = inject(ScrollService);
  readonly menuOpen = signal(false);
  readonly activeDropdown = signal<string | null>(null);

  readonly navLinks: NavLink[] = [
    { label: 'Home', path: '/' },
    { label: 'Certificate', path: '/certificate' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' },
  ];

  ngOnInit(): void {}

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
    document.body.classList.toggle('menu-open', this.menuOpen());
  }

  closeMenu(): void {
    this.menuOpen.set(false);
    document.body.classList.remove('menu-open');
  }

  toggleDropdown(label: string): void {
    this.activeDropdown.update(v => v === label ? null : label);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMenu();
    this.activeDropdown.set(null);
  }
}
