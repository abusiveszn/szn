import StatCounter from "@/components/StatCounter";
import ScrollReveal from "@/components/ScrollReveal";

const STATS = [
  { end: 15, suffix: "+", label: "Years Experience", delay: 0 },
  { end: 50, suffix: "+", label: "Countries Served", delay: 150 },
  { end: 99, suffix: "%", label: "On-Time Delivery", delay: 300 },
  { end: 5000, suffix: "+", label: "Shipments Monthly", delay: 450 },
];

export default function StatsBarSection() {
  return (
    <section className="bg-navy-800 py-16 md:py-20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 relative">
          {STATS.map((stat, i) => (
            <ScrollReveal
              key={stat.label}
              delay={stat.delay}
              className={`relative ${
                i < STATS.length - 1
                  ? "md:after:content-[''] md:after:absolute md:after:right-0 md:after:top-1/2 md:after:-translate-y-1/2 md:after:w-px md:after:h-16 md:after:bg-navy-700"
                  : ""
              }`}
            >
              <StatCounter
                end={stat.end}
                suffix={stat.suffix}
                label={stat.label}
                delay={stat.delay}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
