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
