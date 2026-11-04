export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: BlogAuthor;
  category: BlogCategory;
  tags: string[];
  publishedAt: string;
  readTime: number;
  featured?: boolean;
  views?: number;
}

export interface BlogAuthor {
  name: string;
  avatar: string;
  role: string;
}

export type BlogCategory =
  | 'sustainability'
  | 'innovation'
  | 'industry-news'
  | 'case-studies'
  | 'research';

export const BLOG_CATEGORIES: { value: BlogCategory | 'all'; label: string; color: string }[] = [
  { value: 'all', label: 'All Articles', color: 'var(--color-gold)' },
  { value: 'sustainability', label: 'Sustainability', color: 'var(--color-success)' },
  { value: 'innovation', label: 'Innovation', color: 'var(--color-info)' },
  { value: 'industry-news', label: 'Industry News', color: 'var(--color-gold-light)' },
  { value: 'case-studies', label: 'Case Studies', color: 'var(--color-gold)' },
  { value: 'research', label: 'Research', color: 'var(--color-info)' },
];
