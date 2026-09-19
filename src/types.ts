export interface CourseModule {
  id: number;
  number: string;
  title: string;
  subtitle: string;
  duration: string;
  lessonsCount: number;
  description: string;
  lessons: string[];
  keyResult: string;
  materialsBadge?: string;
}

export interface Tariff {
  id: string;
  name: string;
  tagline: string;
  price: number;
  oldPrice: number;
  isPopular?: boolean;
  features: string[];
  notIncluded?: string[];
  accessDuration: string;
  badge?: string;
  ctaText: string;
}

export interface BeforeAfterCase {
  id: string;
  studentName: string;
  instagramHandle: string;
  story: string;
  timeSpent: string;
  beforeImg: string;
  afterImg: string;
  problem: string;
  solution: string;
}

export interface Testimonial {
  id: string;
  authorName: string;
  instagramHandle: string;
  avatarUrl: string;
  date: string;
  text: string;
  resultQuote: string;
  rating: number;
  resultImg?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

// Program block types from the document
export interface CourseDocBlock {
  id: string;
  blockNumber: string;
  title: string;
  badge: string;
  summary: string;
  content: string;
}

export interface BronsunShade {
  code: string;
  name: string;
  tone: string;
  description: string;
  targetAudience: string;
  colorHex: string;
}

export interface MixRecipe {
  category: string;
  name: string;
  formula: string;
  description: string;
}

export interface HennaShade {
  code: string;
  name: string;
  characteristic: string;
}

export interface MaterialItem {
  name: string;
  role: string;
  advice: string;
  iconType: string;
}
