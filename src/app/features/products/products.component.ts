import { Component, inject, signal, computed } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { DataService } from '../../core/services/data.service';
import { ProductCategory, PRODUCT_CATEGORIES } from '../../core/models/product.model';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';
import { TruncatePipe } from '../../shared/pipes/truncate.pipe';
import { FormsModule } from '@angular/forms';
import { NgClass, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'ap-products',
  standalone: true,
  imports: [RouterLink, SectionHeaderComponent, ScrollAnimateDirective, TruncatePipe, FormsModule, NgClass, TitleCasePipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  private readonly dataService = inject(DataService);
  private readonly route = inject(ActivatedRoute);

  readonly categories = PRODUCT_CATEGORIES;
  readonly allProducts = this.dataService.getProducts();

  readonly activeCategory = signal<ProductCategory | 'all'>('all');
  readonly searchQuery = signal('');

  readonly filteredProducts = computed(() => {
    let result = this.allProducts;

    if (this.activeCategory() !== 'all') {
      result = result.filter(p => p.category === this.activeCategory());
    }

    const q = this.searchQuery().toLowerCase().trim();
    if (q) {
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q))
      );
    }

    return result;
  });

  constructor() {
    this.route.queryParams.subscribe(params => {
      if (params['category']) {
        this.activeCategory.set(params['category'] as ProductCategory);
      }
    });
  }

  setCategory(cat: ProductCategory | 'all'): void {
    this.activeCategory.set(cat);
  }
}
