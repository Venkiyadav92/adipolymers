export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  subCategory?: string;
  description: string;
  shortDescription: string;
  applications: string[];
  features: string[];
  specifications: ProductSpec[];
  images: string[];
  thumbnail: string;
  badge?: string;
  isNew?: boolean;
  isFeatured?: boolean;
  certifications: string[];
  dataSheet?: string;
  tags: string[];
}

export interface ProductSpec {
  label: string;
  value: string;
  unit?: string;
}

export type ProductCategory =
  | 'biodegradable-compounds'
  | 'natural-fiber-composites'
  | 'compostable-masterbatches'
  | 'specialty-polymers'
  | 'custom-formulations';

export interface ProductFilter {
  category: ProductCategory | 'all';
  search: string;
  tags: string[];
}

export const PRODUCT_CATEGORIES: { value: ProductCategory | 'all'; label: string; icon: string }[] = [
  { value: 'all', label: 'All Products', icon: 'grid_view' },
  { value: 'biodegradable-compounds', label: 'Biodegradable Compounds', icon: 'eco' },
  { value: 'natural-fiber-composites', label: 'Natural Fiber Composites', icon: 'grass' },
  { value: 'compostable-masterbatches', label: 'Compostable Masterbatches', icon: 'science' },
  { value: 'specialty-polymers', label: 'Specialty Polymers', icon: 'biotech' },
  { value: 'custom-formulations', label: 'Custom Formulations', icon: 'tune' },
];
