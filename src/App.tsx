import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/sections/HeroSection";
import StatsBarSection from "@/sections/StatsBarSection";
import AboutSection from "@/sections/AboutSection";
import ServicesSection from "@/sections/ServicesSection";
import WhyChooseUsSection from "@/sections/WhyChooseUsSection";
import CalculatorSection from "@/sections/CalculatorSection";
import CategoriesSection from "@/sections/CategoriesSection";
import FooterSection from "@/sections/FooterSection";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-900 transition-opacity duration-500">
        <div className="flex flex-col items-center animate-pulse">
          <img src="/logo.png" alt="SZN Logo" className="h-24 w-auto mb-4 drop-shadow-lg" />
          <h1 className="font-display text-4xl font-bold text-white tracking-tight flex items-center gap-1">
            SZN<span className="text-amber-500">.</span>
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="font-body antialiased">
      <Navigation />
      <main>
        <HeroSection />
        <StatsBarSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <CalculatorSection />
        <CategoriesSection />
      </main>
      <FooterSection />
    </div>
  );
}
