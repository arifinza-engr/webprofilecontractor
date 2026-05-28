import type {
  Service,
  PortfolioItem,
  Testimonial,
  ProcessStep,
  DocPhoto,
  Partner,
  InstagramReel,
  Stat,
  FAQ,
} from "@/types";

import companyData from "@/data/company.json";
import navData from "@/data/nav.json";
import statsData from "@/data/stats.json";
import servicesData from "@/data/services.json";
import portfolioData from "@/data/portfolio.json";
import testimonialsData from "@/data/testimonials.json";
import processData from "@/data/process.json";
import dokumentasiData from "@/data/dokumentasi.json";
import partnersData from "@/data/partners.json";
import reelsData from "@/data/reels.json";
import faqsData from "@/data/faqs.json";

export const COMPANY = companyData;
export const NAV_ITEMS = navData;
export const STATS = statsData as Stat[];
export const SERVICES = servicesData as Service[];
export const PORTFOLIO_ITEMS = portfolioData as PortfolioItem[];
export const TESTIMONIALS = testimonialsData as Testimonial[];
export const PROCESS_STEPS = processData as ProcessStep[];
export const DOC_PHOTOS = dokumentasiData as DocPhoto[];
export const PARTNERS = partnersData as Partner[];
export const REELS = reelsData as InstagramReel[];
export const FAQS = faqsData as FAQ[];
