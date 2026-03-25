import { LanguageProvider } from "@/i18n/LanguageContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => (
  <LanguageProvider>
    <div className="bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TeamSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  </LanguageProvider>
);

export default Index;
