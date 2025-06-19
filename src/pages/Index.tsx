import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MetricsCards from "@/components/MetricsCards";
import FeaturesSection from "@/components/FeaturesSection";
import CarbonEmissionsChart from "@/components/CarbonEmissionsChart";
import TestimonialsSection from "@/components/TestimonialsSection";
import BrandKitSwitcher from "@/components/BrandKitSwitcher";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import CustomersSection from "@/components/CustomersSection.jsx";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        <section id="metrics">
          <MetricsCards />
        </section>
        <section id="features">
          <FeaturesSection />
        </section>
        <section id="carbon-emissions">
          <CarbonEmissionsChart />
        </section>
        <section id="coustomer">
                <CustomersSection />
          </section>
          <TestimonialsSection />
        <TestimonialsSection />
        <BrandKitSwitcher />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

