export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
  productUsed?: string;
  date: string;
  verified: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  summary: string;
  avatar: string;
  linkedin?: string;
  email?: string;
  expertise: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  icon: string;
  description: string;
  badge?: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon: string;
  description?: string;
}
