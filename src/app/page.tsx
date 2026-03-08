import Navbar              from "@/components/layout/Navbar";
import Footer              from "@/components/layout/Footer";
import WhatsAppFloat       from "@/components/ui/WhatsAppFloat";
import HeroSection         from "@/components/sections/HeroSection";
import StatsSection        from "@/components/sections/StatsSection";
import AboutSection        from "@/components/sections/AboutSection";
import ServicesSection     from "@/components/sections/ServicesSection";
import PortfolioSection    from "@/components/sections/PortfolioSection";
import ReelsSection        from "@/components/sections/ReelsSection";
import PartnersSection     from "@/components/sections/PartnersSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TeamSection         from "@/components/sections/TeamSection";
import FAQSection          from "@/components/sections/FAQSection";
import ContactSection      from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <ReelsSection />
        <PartnersSection />
        <TestimonialsSection />
        <TeamSection />
        <FAQSection />
        <ContactSection />
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
