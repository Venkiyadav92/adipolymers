import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../../../../core/services/data.service';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { ScrollAnimateDirective } from '../../../../shared/directives/scroll-animate.directive';
import { TruncatePipe } from '../../../../shared/pipes/truncate.pipe';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'ap-products-preview',
  standalone: true,
  imports: [RouterLink, SectionHeaderComponent, ScrollAnimateDirective, TruncatePipe, TitleCasePipe],
  templateUrl: './products-preview.component.html',
  styleUrl: './products-preview.component.scss',
})
export class ProductsPreviewComponent {
  readonly products = inject(DataService).getProducts().filter(p => p.isFeatured).slice(0, 3);
}
