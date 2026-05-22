import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Index/HeroSection";
import StatsBar from "@/components/Index/StatsBar";
import AboutPreview from "@/components/Index/AboutPreview";
import ServicesOverview from "@/components/Index/ServicesOverview";
import WhyChooseUs from "@/components/Index/WhyChooseUs";
import ProcessPreview from "@/components/Index/ProcessPreview";
import PortfolioPreview from "@/components/Index/PortfolioPreview";
import CtaBanner from "@/components/Index/CtaBanner";

export default function Index() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <StatsBar />
        <AboutPreview />
        <ServicesOverview />
        <WhyChooseUs />
        <ProcessPreview />
        <PortfolioPreview />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}