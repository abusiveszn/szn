import ScrollReveal from "@/components/ScrollReveal";
import { Zap, Shield, MapPin, Users } from "lucide-react";

const FEATURES = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description:
      "Optimized routes and strong carrier partnerships ensure your goods reach their destination on time.",
  },
  {
    icon: Shield,
    title: "Secure Handling",
    description:
      "Insurance options, secure facilities, and careful handling protect your cargo from origin to destination.",
  },
  {
    icon: MapPin,
    title: "Real-Time Visibility",
    description:
      "Stay informed with live updates. Know exactly where your shipment is and when it will arrive.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description:
      "Our logistics experts bring years of industry experience and are dedicated to solving your challenges.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="bg-white py-24 md:py-[120px]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-display text-[32px] md:text-[48px] font-bold text-navy-900 leading-[1.1] tracking-[-2px]">
            Why Choose Us
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, i) => (
            <ScrollReveal
              key={feature.title}
              delay={i * 100}
              className="text-center p-6"
            >
              <div
                style={{
                  opacity: 1,
                  transform: "scale(1)",
                  transition: `opacity 600ms ease-out ${i * 100}ms, transform 600ms ease-out ${i * 100}ms`,
                }}
              >
                <feature.icon
                  className="text-amber-500 mx-auto mb-5"
                  size={32}
                  strokeWidth={1.5}
                />
                <h3 className="font-display text-[22px] font-bold text-navy-900 mb-3 tracking-[-0.5px]">
                  {feature.title}
                </h3>
                <p className="text-slate-500 leading-6 text-sm">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
