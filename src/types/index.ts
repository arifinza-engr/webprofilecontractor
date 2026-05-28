// ─── Company Data Types ──────────────────────────────────────────────────────

export interface Service {
  id:          string;
  title:       string;
  description: string;
  icon:        string;
  features:    string[];
  image:       string;
}

export interface PortfolioItem {
  id:       string;
  title:    string;
  location: string;
  category: PortfolioCategory;
  year:     number;
  image:    string;
  area?:    string;
}

export type PortfolioCategory = "konstruksi" | "interior" | "drafter" | "all";

export interface Testimonial {
  id:       string;
  name:     string;
  role:     string;
  company?: string;
  content:  string;
  rating:   number;
  avatar:   string;
}

export interface ProcessStep {
  id:          string;
  step:        string;
  title:       string;
  description: string;
  image:       string;
}

export interface DocPhoto {
  id:       string;
  title:    string;
  category: string;
  image:    string;
  width:    number;
  height:   number;
}

export interface Partner {
  id:          string;
  name:        string;
  logo:        string;
  website:     string;
  tagline?:    string;
  description?: string;
  benefits?:   string[];
}

export interface InstagramReel {
  id:    string;
  title: string;
  url:   string;
}

export interface Stat {
  value:  string;
  label:  string;
  suffix?: string;
}

export interface FAQ {
  question: string;
  answer:   string;
}
