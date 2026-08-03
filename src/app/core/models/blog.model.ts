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
  { value: 'all', label: 'All Articles', color: '#6B21A8' },
  { value: 'sustainability', label: 'Sustainability', color: '#16A34A' },
  { value: 'innovation', label: 'Innovation', color: '#0EA5E9' },
  { value: 'industry-news', label: 'Industry News', color: '#F97316' },
  { value: 'case-studies', label: 'Case Studies', color: '#EC4899' },
  { value: 'research', label: 'Research', color: '#8B5CF6' },
];
