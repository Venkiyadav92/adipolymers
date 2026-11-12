import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';
import { ToastService } from '../../core/services/toast.service';
import { INQUIRY_TYPES } from '../../core/models/inquiry.model';

interface FormSubmitResponse {
  success?: boolean | string;
  message?: string;
}

@Component({
  selector: 'ap-contact',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, ScrollAnimateDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
  private readonly http = inject(HttpClient);
  private readonly toastService = inject(ToastService);
  private readonly emailEndpoint = 'https://formsubmit.co/ajax/coo.mangal@gmail.com';

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
    website:     [''],
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
      address: '39, Al Muwaiji,\nAlAin, Abudhabi',
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
      values: ['+91 7305993999'],
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

  async submit(): Promise<void> {
    if (this.isSubmitting()) return;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { website, ...inquiry } = this.form.getRawValue();
    if (website) {
      this.toastService.error('Message not sent', 'Please refresh the page and try again.');
      return;
    }

    this.isSubmitting.set(true);

    try {
      const response = await firstValueFrom(
        this.http.post<FormSubmitResponse>(this.emailEndpoint, {
          ...inquiry,
          _subject: `Website inquiry: ${inquiry.subject}`,
          _replyto: inquiry.email,
          _template: 'table',
          _honey: website,
        }, {
          headers: { Accept: 'application/json' },
        }),
      );

      if (!response || (response.success !== true && response.success !== 'true')) {
        throw new Error(response.message || 'The email service did not accept your message.');
      }

      this.isSubmitted.set(true);
      this.toastService.success('Message Sent!', 'Our team will get back to you within 24 business hours.');
      this.form.reset({ inquiryType: 'general' });
    } catch (error: unknown) {
      let message = 'Please try again later or contact us by email.';
      if (error instanceof HttpErrorResponse) {
        const body: unknown = error.error;
        if (typeof body === 'object' && body !== null && 'message' in body && typeof body.message === 'string') {
          message = body.message;
        }
      } else if (error instanceof Error) {
        message = error.message;
      }

      this.toastService.error('Message not sent', message);
    } finally {
      this.isSubmitting.set(false);
    }
  }
}
