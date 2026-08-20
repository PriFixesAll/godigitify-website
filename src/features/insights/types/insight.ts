export type InsightCategory =
  | 'All'
  | 'AI & Automation'
  | 'Systems Architecture'
  | 'Brand & Design'
  | 'Growth Analytics'
  | 'Security & Infrastructure';

export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: InsightCategory;
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  image: string;
  featured?: boolean;
}
