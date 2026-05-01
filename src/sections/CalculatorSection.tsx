import ParticleCanvas from "@/components/ParticleCanvas";
import ShippingCalculator from "@/components/ShippingCalculator";
import ScrollReveal from "@/components/ScrollReveal";

export default function CalculatorSection() {
  return (
    <section
      id="calculator"
      className="relative bg-navy-900 py-24 md:py-[120px] overflow-hidden"
    >
      <ParticleCanvas />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12">
        <ScrollReveal className="text-center mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.5px] text-amber-500 mb-4">
            Shipping Calculator
          </p>
          <h2 className="font-display text-[32px] md:text-[48px] font-bold text-white leading-[1.1] tracking-[-2px] mb-4">
            Get an Instant
            <br />
            Shipping Estimate
          </h2>
          <p className="text-slate-400 text-lg max-w-[600px] mx-auto leading-7">
            Select destination, service type, and quantity — rates are indicative
            and may vary.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <ShippingCalculator />
        </ScrollReveal>
      </div>
    </section>
  );
}
