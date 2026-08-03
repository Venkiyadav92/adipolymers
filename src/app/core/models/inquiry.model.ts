export interface ContactInquiry {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
  inquiryType: InquiryType;
  productInterest?: string;
  createdAt?: Date;
  status?: 'new' | 'read' | 'replied';
}

export type InquiryType =
  | 'general'
  | 'product-inquiry'
  | 'custom-formulation'
  | 'partnership'
  | 'support'
  | 'sample-request';

export interface CallbackRequest {
  name: string;
  phone: string;
  preferredTime: 'morning' | 'afternoon' | 'evening';
  message?: string;
}

export const INQUIRY_TYPES: { value: InquiryType; label: string }[] = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'product-inquiry', label: 'Product Inquiry' },
  { value: 'custom-formulation', label: 'Custom Formulation' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'support', label: 'Technical Support' },
  { value: 'sample-request', label: 'Sample Request' },
];
