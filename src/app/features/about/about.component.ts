import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../../core/services/data.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';
import { CounterDirective } from '../../shared/directives/counter.directive';
import { NgClass } from '@angular/common';

@Component({
  selector: 'ap-about',
  standalone: true,
  imports: [RouterLink, NgClass,SectionHeaderComponent, ScrollAnimateDirective, CounterDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  readonly stats = inject(DataService).getStats();

  readonly values = [
    { icon: 'eco', title: 'Sustainability First', description: 'Every product, process, and decision is evaluated through the lens of environmental impact.' },
    { icon: 'science', title: 'Innovation Driven', description: 'Continuous R&D investment ensures we remain at the forefront of sustainable polymer science.' },
    { icon: 'handshake', title: 'Client Partnership', description: 'We succeed when our clients succeed — collaborative, long-term relationships over transactions.' },
    { icon: 'workspace_premium', title: 'Quality Uncompromised', description: 'Rigorous testing at every stage ensures every batch meets exacting global standards.' },
    { icon: 'groups', title: 'People Centric', description: 'Our team of specialists is our greatest innovation engine.' },
    { icon: 'public', title: 'Global Perspective', description: 'Serving 30+ countries, we understand global markets while maintaining local responsiveness.' },
  ];

  getInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('');
  }
}
