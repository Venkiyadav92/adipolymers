import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgStyle } from '@angular/common';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';

@Component({
  selector: 'ap-sustainability',
  standalone: true,
  imports: [RouterLink, NgStyle, SectionHeaderComponent, ScrollAnimateDirective],
  templateUrl: './sustainability.component.html',
  styleUrl: './sustainability.component.scss',
})
export class SustainabilityComponent {
  readonly pillars = [
    { icon: 'eco', title: 'Sustainable Materials', desc: 'Every product we manufacture is designed to return safely to nature while supporting responsible, low-impact packaging choices.', stat: '100%', statLabel: 'compostable portfolio' },
    { icon: 'recycling', title: 'Circular Economy', desc: 'We design materials for end-of-life recovery — compostable, recyclable, or soil-biodegradable — supporting closed-loop manufacturing systems.', stat: '0', statLabel: 'landfill waste from our facility' },
    { icon: 'water_drop', title: 'Water Conservation', desc: 'Our production processes use 60% less water than industry averages through closed-loop cooling systems and rainwater harvesting.', stat: '60%', statLabel: 'less water than industry average' },
    { icon: 'bolt', title: 'Renewable Energy', desc: '45% of our facility energy comes from rooftop solar panels, with a target of 100% renewable by 2030.', stat: '45%', statLabel: 'energy from solar' },
    { icon: 'forest', title: 'Carbon Neutrality', desc: 'We offset all Scope 1 and 2 emissions through verified carbon credits and are on track for carbon neutrality by 2028.', stat: '2028', statLabel: 'carbon neutrality target' },
    { icon: 'groups', title: 'Community Impact', desc: 'Our raw material sourcing directly supports 500+ farming families across India growing jute, hemp, and bamboo for our natural fiber composites.', stat: '500+', statLabel: 'farming families supported' },
  ];

  readonly sdgs = [
    { number: '12', title: 'Responsible Consumption & Production', color: '#BF8B2E' },
    { number: '13', title: 'Climate Action', color: '#3F7E44' },
    { number: '14', title: 'Life Below Water', color: '#0A97D9' },
    { number: '15', title: 'Life on Land', color: '#56C02B' },
    { number: '8', title: 'Decent Work & Economic Growth', color: '#A21942' },
    { number: '9', title: 'Industry, Innovation & Infrastructure', color: '#FD6925' },
  ];

  readonly certifications = [
    { name: 'ISO 14001:2015', desc: 'Environmental Management System certified by Bureau Veritas', icon: 'verified_user' },
    { name: 'EN 13432', desc: 'European standard for compostable packaging — certified by DIN CERTCO', icon: 'eco' },
    { name: 'ASTM D6400', desc: 'American standard for compostable plastics — BPI certified', icon: 'recycling' },
    { name: 'OK Compostable', desc: 'TÜV Austria certification for compostable material content', icon: 'grass' },
    { name: 'OK Compost', desc: 'Industrial and home compostability certification', icon: 'compost' },
    { name: 'REACH Compliant', desc: 'European chemicals safety compliance for all formulations', icon: 'health_and_safety' },
  ];
}
