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

export interface TeamMember {
  id:       string;
  name:     string;
  role:     string;
  bio:      string;
  image:    string;
  linkedin?: string;
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
  id:        string;
  title:     string;
  thumbnail: string;
  url:       string;
  views?:    string;
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
