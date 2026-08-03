import { Component, inject } from '@angular/core';
import { DataService } from '../../../../core/services/data.service';
import { CounterDirective } from '../../../../shared/directives/counter.directive';
import { ScrollAnimateDirective } from '../../../../shared/directives/scroll-animate.directive';

@Component({
  selector: 'ap-stats',
  standalone: true,
  imports: [CounterDirective, ScrollAnimateDirective],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss',
})
export class StatsComponent {
  readonly stats = inject(DataService).getStats();
}
