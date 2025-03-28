import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import HowItWorks from "@/components/how-it-works";
import PricingPlans from "@/components/pricing-plans";
import Testimonials from "@/components/testimonials";
import Footer from "@/components/footer";
import StatsBanner from "@/components/statsbanner";
import SplideCarousel from "@/components/companies";
import TimelineComponent from "@/components/timeline";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <StatsBanner />
        <HowItWorks />
        <TimelineComponent />
        <PricingPlans />

        <SplideCarousel />

        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
