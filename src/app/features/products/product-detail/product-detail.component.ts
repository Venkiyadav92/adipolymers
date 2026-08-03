import { Component, inject, signal, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { DataService } from '../../../core/services/data.service';
import { Product } from '../../../core/models/product.model';
import { ScrollAnimateDirective } from '../../../shared/directives/scroll-animate.directive';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'ap-product-detail',
  standalone: true,
  imports: [RouterLink, ScrollAnimateDirective],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly dataService = inject(DataService);
  private readonly toastService = inject(ToastService);

  product = signal<Product | null>(null);
  relatedProducts = signal<Product[]>([]);
  activeTab = signal<'overview' | 'specs' | 'applications'>('overview');

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    const all = this.dataService.getProducts();
    const found = all.find(p => p.slug === slug) ?? null;
    this.product.set(found);
    if (found) {
      this.relatedProducts.set(all.filter(p => p.category === found.category && p.id !== found.id).slice(0, 3));
    }
  }

  requestSample(): void {
    this.toastService.success('Sample Request Sent!', 'Our team will contact you within 24 hours.');
  }
}
