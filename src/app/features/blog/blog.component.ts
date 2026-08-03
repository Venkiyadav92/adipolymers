import { Component, inject, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../../core/services/data.service';
import { BLOG_CATEGORIES, BlogCategory } from '../../core/models/blog.model';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';
import { TruncatePipe } from '../../shared/pipes/truncate.pipe';
import { TimeAgoPipe } from '../../shared/pipes/time-ago.pipe';
import { NgClass, NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ap-blog',
  standalone: true,
  imports: [RouterLink, FormsModule, SectionHeaderComponent, ScrollAnimateDirective, TruncatePipe, TimeAgoPipe, NgClass, NgStyle],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent {
  readonly categories = BLOG_CATEGORIES;
  readonly allPosts = inject(DataService).getBlogPosts();

  readonly activeCategory = signal<BlogCategory | 'all'>('all');
  readonly searchQuery = signal('');

  readonly featuredPost = this.allPosts.find(p => p.featured);

  readonly filteredPosts = computed(() => {
    let result = this.allPosts.filter(p => !p.featured);

    if (this.activeCategory() !== 'all') {
      result = result.filter(p => p.category === this.activeCategory());
    }

    const q = this.searchQuery().toLowerCase().trim();
    if (q) {
      result = result.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q))
      );
    }

    return result;
  });

  getCategoryColor(category: string): string {
    return this.categories.find(c => c.value === category)?.color ?? '#6B21A8';
  }
}
