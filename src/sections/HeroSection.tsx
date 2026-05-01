import ParticleCanvas from "@/components/ParticleCanvas";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] bg-navy-900 flex items-center justify-center overflow-hidden"
    >
      <ParticleCanvas />

      <div className="relative z-10 text-center max-w-[800px] mx-auto px-6">
        <p className="text-xs font-medium uppercase tracking-[0.5px] text-slate-400 mb-6">
          Singapore&apos;s Trusted Logistics Partner
        </p>

        <h1 className="font-display text-[40px] md:text-[72px] font-bold text-white leading-[1.1] tracking-[-3px] mb-6">
          Reliable Shipping &amp;
          <br />
          Logistics Across
          <br />
          Asia and Beyond
        </h1>

        <p className="text-lg text-slate-400 max-w-[600px] mx-auto mb-10 leading-7">
          Your trusted partner for freight forwarding, warehousing, and end-to-end
          supply chain management from Singapore to the world.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#calculator"
            onClick={(e) => handleScroll(e, "#calculator")}
            className="bg-amber-500 hover:bg-amber-600 text-white font-semibold text-base px-8 py-3.5 rounded transition-colors duration-200"
          >
            Get a Quote
          </a>
          <a
            href="#calculator"
            onClick={(e) => handleScroll(e, "#calculator")}
            className="bg-transparent hover:bg-white/10 text-white font-semibold text-base px-8 py-3.5 rounded border border-white transition-colors duration-200"
          >
            Shipping Calculator
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce-slow">
        <ChevronDown className="text-white/40" size={24} />
      </div>
    </section>
  );
}
