
export interface Service {
  id: string;
  title: string;
  description: string;
  priceEstimate?: string;
  duration?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  image: string;
  summary: string;
  date: string;
  content: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  comment: string;
  rating: number;
}
