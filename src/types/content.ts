export interface Solution {
  slug: string;
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  secondaryImage?: string;
  secondaryImageAlt?: string;
  secondaryImageWidth?: number;
  secondaryImageHeight?: number;
  featured?: boolean;
  span?: 4 | 8;
  variant?: "standard" | "wide";
}

export interface Principle {
  id: string;
  title: string;
  description: string;
  illustration?: string;
}

export interface Project {
  slug: string;
  title: string;
  client?: string;
  category: string;
  description: string;
  services: string[];
  year?: string;
  thumbnail: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Testimonial {
  quote: string;
  person: string;
  role?: string;
  company?: string;
  projectType?: string;
  avatar?: string;
  placeholder?: boolean;
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
}
