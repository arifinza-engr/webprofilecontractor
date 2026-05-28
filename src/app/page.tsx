import Navbar              from "@/components/layout/Navbar";
import Footer              from "@/components/layout/Footer";
import WhatsAppFloat       from "@/components/ui/WhatsAppFloat";
import HeroSection         from "@/components/sections/HeroSection";
import StatsSection        from "@/components/sections/StatsSection";
import AboutSection        from "@/components/sections/AboutSection";
import ValuesSection       from "@/components/sections/ValuesSection";
import ServicesSection     from "@/components/sections/ServicesSection";
import PortfolioSection    from "@/components/sections/PortfolioSection";
import DocumentationSection from "@/components/sections/DocumentationSection";
import ReelsSection        from "@/components/sections/ReelsSection";
import PartnersSection     from "@/components/sections/PartnersSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ProcessSection      from "@/components/sections/ProcessSection";
import FAQSection          from "@/components/sections/FAQSection";
import LegalSection        from "@/components/sections/LegalSection";
import ContactSection      from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ValuesSection />
        <ServicesSection />
        <PortfolioSection />
        <DocumentationSection />
        <ReelsSection />
        <PartnersSection />
        <TestimonialsSection />
        <ProcessSection />
        <FAQSection />
        <LegalSection />
        <ContactSection />
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
