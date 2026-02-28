export type FAQItem = {
  question: string;
  answer: string;
};

export type ServiceSummary = {
  slug: string;
  title: string;
  description: string;
  outcomes: string[];
  icon: string;
};

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  lastUpdated?: string;
  category: string;
  tags: string[];
  author: string;
  readingTime?: string;
  featured?: boolean;
  coverImage?: string;
  faqs?: FAQItem[];
};

export type CaseStudyMeta = {
  slug: string;
  title: string;
  description: string;
  industry: string;
  client: string;
  services: string[];
  timeline: string;
  featured?: boolean;
  date: string;
  coverImage?: string;
  metrics?: Array<{ label: string; value: string }>;
  chartData?: Array<{ label: string; value: number }>;
  tools?: string[];
  testimonial?: string;
};
