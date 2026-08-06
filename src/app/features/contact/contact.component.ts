import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';
import { ToastService } from '../../core/services/toast.service';
import { INQUIRY_TYPES } from '../../core/models/inquiry.model';

@Component({
  selector: 'ap-contact',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, ScrollAnimateDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
  private readonly toastService = inject(ToastService);

  readonly inquiryTypes = INQUIRY_TYPES;
  readonly isSubmitting = signal(false);
  readonly isSubmitted = signal(false);

  readonly form: FormGroup = this.fb.group({
    name:        ['', [Validators.required, Validators.minLength(2)]],
    email:       ['', [Validators.required, Validators.email]],
    phone:       [''],
    company:     [''],
    inquiryType: ['general', Validators.required],
    subject:     ['', [Validators.required, Validators.minLength(5)]],
    message:     ['', [Validators.required, Validators.minLength(20)]],
  });

  readonly officeLocations = [
    {
      type: 'Marketed By — India',
      icon: 'storefront',
      company: 'Adithya Polymers',
      address: 'Madurai-1/399, 2nd Street,\nPoriyalar Nagar, Thiruppalai,\nMadurai – 625014',
      color: 'purple',
      flag: '🇮🇳',
    },
    {
      type: 'Marketed By — International',
      icon: 'public',
      company: 'Adithya Polymers',
      address: '30 Al Jimi,\nAl Ain, Abu Dhabi,\nUAE',
      color: 'teal',
      flag: '🇦🇪',
    },
    {
      type: 'Manufactured By',
      icon: 'factory',
      company: 'Adithya Polymers',
      address: 'SP-39, Industrial Estate,\nSedarapet, Phase-1,\nPuducherry – 605111,\nIndia',
      color: 'green',
      flag: '🇮🇳',
    },
  ];

  readonly contactDetails = [
    {
      icon: 'email',
      label: 'Email',
      values: [
        'info@adityapolymers.co.in',
        'coo.mangal@gmail.com',
        'adityagk.ceo@gmail.com',
      ],
      type: 'email',
    },
    {
      icon: 'phone',
      label: 'Landline',
      values: ['+91 452-2661399'],
      type: 'phone',
    },
    {
      icon: 'phone',
      label: 'Puducherry',
      values: ['+91 7824966999'],
      type: 'phone',
    },
    {
      icon: 'phone',
      label: 'Phone / WhatsApp (India)',
      values: ['+91 73059 93999'],
      type: 'phone',
    },
    {
      icon: 'phone',
      label: 'Phone (UAE)',
      values: ['+971 558118354'],
      type: 'phone',
    },
    {
      icon: 'schedule',
      label: 'Business Hours',
      values: ['Monday – Saturday, 9:00 AM – 6:00 PM IST'],
      type: 'text',
    },
  ];

  isInvalid(field: string): boolean {
    const control = this.form.get(field);
    return !!(control?.invalid && (control.dirty || control.touched));
  }

  getError(field: string): string {
    const control = this.form.get(field);
    if (!control?.errors) return '';
    if (control.errors['required']) return `${field.charAt(0).toUpperCase() + field.slice(1)} is required.`;
    if (control.errors['email']) return 'Please enter a valid email address.';
    if (control.errors['minlength']) return `Minimum ${control.errors['minlength'].requiredLength} characters required.`;
    return 'Invalid input.';
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.isSubmitting.set(true);
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.isSubmitted.set(true);
      this.toastService.success('Message Sent!', 'Our team will get back to you within 24 business hours.');
      this.form.reset({ inquiryType: 'general' });
    }, 1500);
  }
}
