import { Component, inject } from '@angular/core';
import { DataService } from '../../../../core/services/data.service';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { ScrollAnimateDirective } from '../../../../shared/directives/scroll-animate.directive';

@Component({
  selector: 'ap-certifications',
  standalone: true,
  imports: [SectionHeaderComponent, ScrollAnimateDirective],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss',
})
export class CertificationsComponent {
  readonly certs = inject(DataService).getCertifications();
}
