import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { DataService } from '../../../core/services/data.service';
import { BlogPost } from '../../../core/models/blog.model';
import { ScrollAnimateDirective } from '../../../shared/directives/scroll-animate.directive';
import { TimeAgoPipe } from '../../../shared/pipes/time-ago.pipe';

@Component({
  selector: 'ap-blog-detail',
  standalone: true,
  imports: [RouterLink, ScrollAnimateDirective, TimeAgoPipe],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss',
})
export class BlogDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly dataService = inject(DataService);

  post = signal<BlogPost | null>(null);
  relatedPosts = signal<BlogPost[]>([]);

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    const all = this.dataService.getBlogPosts();
    const found = all.find(p => p.slug === slug) ?? null;
    this.post.set(found);
    if (found) {
      this.relatedPosts.set(all.filter(p => p.category === found.category && p.id !== found.id).slice(0, 3));
    }
  }
}
