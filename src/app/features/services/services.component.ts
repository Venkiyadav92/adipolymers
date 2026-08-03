import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';

interface BagVariant {
  name: string;
  sizes: string;
  icon: string;
}

interface ServiceFeature {
  icon: string;
  title: string;
  desc: string;
}

interface ServiceCard {
  id: string;
  emoji: string;
  tag: string;
  tagColor: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  cta: string;
  gradient: string;
  accentColor: string;
}

@Component({
  selector: 'ap-services',
  standalone: true,
  imports: [RouterLink, ScrollAnimateDirective],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {

  readonly bagVariants: BagVariant[] = [
    { name: 'Flat Bags', sizes: '6×9 to 18×24 inches', icon: '🛍️' },
    { name: 'Loop Handle Bags', sizes: '10×12 to 16×20 inches', icon: '🤝' },
    { name: 'D-Cut Bags', sizes: '8×10 to 14×18 inches', icon: '✂️' },
    { name: 'Bottom Seal Bags', sizes: 'Custom per requirement', icon: '📦' },
  ];

  readonly whyBiodegradable: ServiceFeature[] = [
    {
      icon: '🌿',
      title: '100% Compostable',
      desc: 'Biodegrades in 140 days under composting conditions. CIPET certified per ISO 17088:2021.',
    },
    {
      icon: '🔬',
      title: 'PLA & PBAT Blend',
      desc: 'Made from plant-based Polylactic Acid and PBAT — proven to achieve 100% biodegradation.',
    },
    {
      icon: '✅',
      title: 'Govt. Compliant',
      desc: 'Meets waste management rules 2022. Registered under CPCB EPR portal.',
    },
    {
      icon: '🌱',
      title: 'Zero Hazardous Waste',
      desc: 'PPCC Green Category certified. No trade effluent, no air emissions from our process.',
    },
    {
      icon: '🏭',
      title: 'MSME Registered',
      desc: 'Udyam Registration No. UDYAM-PY-03-0046488. Micro enterprise, 360 TPA capacity.',
    },
    {
      icon: '🌍',
      title: 'Export Ready',
      desc: 'Marketed globally — India (Madurai, Puducherry) and internationally (Abu Dhabi, UAE).',
    },
  ];

  readonly services: ServiceCard[] = [
    {
      id: 's1',
      emoji: '🛍️',
      tag: 'Core Product',
      tagColor: 'green',
      title: 'Compostable Carry Bags',
      subtitle: 'Our flagship eco-friendly product',
      description: 'Premium compostable carry bags manufactured from a certified Corn extract, calcium extract, tapioca root. Every bag achieves 100% compostability in 140 days and passes all CIPET tests per ISO 17088:2021. Available in multiple sizes, thicknesses, and load capacities.',
      features: [
        'Available: flat, loop handle, D-cut, bottom seal',
        'Material: Certified Corn extract, calcium extract, tapioca root',
        'Load capacity: 1 kg to 10 kg',
        'Thickness: 30–80 micron',
        'Colour: Natural white or custom',
        'Compliant with waste management rules 2022',
      ],
      cta: 'Order Now',
      gradient: 'linear-gradient(135deg, #064e3b 0%, #065f46 50%, #047857 100%)',
      accentColor: '#10b981',
    },
    {
      id: 's2',
      emoji: '🎨',
      tag: 'Customisation',
      tagColor: 'blue',
      title: 'Custom Size & Branding',
      subtitle: 'Your logo. Your dimensions. Our quality.',
      description: 'We offer full customisation — from bag dimensions and load capacity to flexographic printing with your brand artwork. Minimum order quantities start at 50 kg, making it accessible for both small businesses and large retail chains.',
      features: [
        'Custom dimensions: width, length, gusset',
        '1–4 colour flexographic printing',
        'Brand logo, tagline, barcode printing',
        'Custom handle type and punching',
        'MOQ from 50 kg per SKU',
        'Design-to-sample in 7 business days',
      ],
      cta: 'Get Custom Quote',
      gradient: 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 50%, #3b82f6 100%)',
      accentColor: '#60a5fa',
    },
    {
      id: 's3',
      emoji: '🏭',
      tag: 'B2B Supply',
      tagColor: 'purple',
      title: 'Bulk Manufacturing & B2B Supply',
      subtitle: 'Scale from 50 kg to 30 tonnes per month',
      description: 'Our Puducherry facility runs dedicated lines for bulk production of compostable bags. We serve supermarkets, retail chains, hotels, hospitals, exporters, and government bodies. Reliable supply with consistent quality across every batch.',
      features: [
        'Monthly capacity: up to 30 MT',
        'Batch certificate (CoA) with every order',
        'Pan-India delivery via logistics partners',
        'Export packing available (sea / air freight)',
        'Flexible payment: advance, credit on approval',
        'GST invoice with HSN 39231010',
      ],
      cta: 'Request Bulk Pricing',
      gradient: 'linear-gradient(135deg, #3b0764 0%, #6b21a8 50%, #9333ea 100%)',
      accentColor: '#c084fc',
    },
    {
      id: 's4',
      emoji: '📋',
      tag: 'Compliance',
      tagColor: 'orange',
      title: 'Certification & Compliance Support',
      subtitle: 'Stay ahead of waste regulations',
      description: 'We help businesses transition from conventional carry bags to certified compostable alternatives and stay compliant with India\'s waste management rules 2022 and CPCB guidelines. We provide all necessary documentation for your audits and EPR obligations.',
      features: [
        'CIPET test report (ISO 17088:2021) supplied',
        'CPCB EPR compliance documentation',
        'Waste Management Rules 2022',
        'Product specification & TDS sheets',
        'Regulatory guidance for brand owners',
        'Support for Green Procurement tenders',
      ],
      cta: 'Talk to Compliance Team',
      gradient: 'linear-gradient(135deg, #78350f 0%, #b45309 50%, #d97706 100%)',
      accentColor: '#fbbf24',
    },
    {
      id: 's5',
      emoji: '🚀',
      tag: 'Fast Turnaround',
      tagColor: 'pink',
      title: 'Express Supply Programme',
      subtitle: 'Ready stock. Quick dispatch.',
      description: 'Our Express Supply Programme maintains ready stock of fast-moving bag sizes and types so you never run out. Order placed before 12 PM ships same day. Priority customers get dedicated account management and weekly scheduled delivery slots.',
      features: [
        'Ready stock of top 10 standard sizes',
        'Same-day dispatch for in-stock SKUs',
        'Weekly scheduled delivery (Priority tier)',
        'Dedicated account manager',
        'WhatsApp-based reorder in 2 taps',
        'Bulk packing: 10 kg / 25 kg bags',
      ],
      cta: 'Join Express Programme',
      gradient: 'linear-gradient(135deg, #831843 0%, #be185d 50%, #ec4899 100%)',
      accentColor: '#f9a8d4',
    },
    {
      id: 's6',
      emoji: '🌐',
      tag: 'International',
      tagColor: 'teal',
      title: 'International Supply — UAE & Gulf',
      subtitle: 'Marketed from Abu Dhabi, UAE',
      description: 'Aditya Polymers is marketed internationally through our Abu Dhabi office. We supply compostable carry bags to the UAE, Gulf region, and other international markets. Export documentation, phytosanitary certificates, and customs clearance support are available.',
      features: [
        'Marketed from Al Ain, Abu Dhabi, UAE',
        'Contact: +971 558118354',
        'Export packaging (sea/air freight ready)',
        'USD / AED invoicing available',
        'Halal-friendly, non-toxic materials',
        'Compliance with Gulf eco-labelling norms',
      ],
      cta: 'Contact UAE Office',
      gradient: 'linear-gradient(135deg, #134e4a 0%, #0f766e 50%, #14b8a6 100%)',
      accentColor: '#5eead4',
    },
  ];

  readonly processSteps = [
    { num: '01', title: 'Enquiry', desc: 'Share your requirement via WhatsApp, email, or the contact form.' },
    { num: '02', title: 'Quotation', desc: 'We send a detailed quote with specs, pricing, and lead time within 24 hours.' },
    { num: '03', title: 'Sample', desc: 'Approve a physical sample before placing bulk order.' },
    { num: '04', title: 'Production', desc: 'Your order goes into production with full quality control.' },
    { num: '05', title: 'Dispatch', desc: 'Shipped with CoA, invoice, and tracking details.' },
  ];
}
