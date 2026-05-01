import ScrollReveal from "@/components/ScrollReveal";
import { Plane, Warehouse, Share2 } from "lucide-react";

const SERVICES = [
  {
    icon: Plane,
    title: "Freight Forwarding",
    description: "Air, sea, and land—we move your cargo on time, every time.",
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    description:
      "Secure storage and inventory management across the region.",
  },
  {
    icon: Share2,
    title: "Supply Chain",
    description: "Full visibility and optimization from source to delivery.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-offwhite py-24 md:py-[120px]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.5px] text-amber-500 mb-4">
            What We Offer
          </p>
          <h2 className="font-display text-[32px] md:text-[48px] font-bold text-navy-900 leading-[1.1] tracking-[-2px] mb-4">
            End-to-End Logistics Solutions
          </h2>
          <p className="text-slate-500 text-lg max-w-[600px] mx-auto leading-7">
            End-to-end logistics solutions designed for businesses that demand
            reliability and speed.
          </p>
        </ScrollReveal>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 120}>
              <div className="bg-white border border-slate-200 rounded-lg p-8 h-full group hover:shadow-lg hover:-translate-y-1 hover:border-amber-500/30 transition-all duration-300">
                <service.icon
                  className="text-amber-500 mb-5"
                  size={32}
                  strokeWidth={1.5}
                />
                <h3 className="font-display text-[22px] font-bold text-navy-900 mb-3 tracking-[-0.5px]">
                  {service.title}
                </h3>
                <p className="text-slate-500 leading-6">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={400} className="text-center mt-12">
          <a
            href="#calculator"
            onClick={(e) => {
              e.preventDefault();
              const target = document.querySelector("#calculator");
              if (target) {
                const top =
                  target.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top, behavior: "smooth" });
              }
            }}
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3.5 rounded transition-colors duration-200"
          >
            View All Services
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
