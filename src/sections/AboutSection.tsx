import ScrollReveal from "@/components/ScrollReveal";

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-24 md:py-[120px]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <ScrollReveal direction="left" className="order-2 lg:order-1">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/about-warehouse.jpg"
                alt="Modern logistics warehouse with organized cargo"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal direction="right" className="order-1 lg:order-2">
            <p className="text-xs font-medium uppercase tracking-[0.5px] text-amber-500 mb-4">
              About SZN Pte Ltd
            </p>

            <h2 className="font-display text-[32px] md:text-[48px] font-bold text-navy-900 leading-[1.1] tracking-[-2px] mb-6">
              Your Partner in
              <br />
              Global Trade
            </h2>

            <p className="text-slate-500 leading-7 mb-6">
              SZN Pte Ltd connects Singapore to the world. We combine local
              expertise with international reach to deliver reliable, efficient
              supply chain solutions.
            </p>

            <p className="text-slate-500 leading-7 mb-8">
              From freight forwarding and customs clearance to warehousing and
              last-mile delivery, we handle every step so you can focus on
              growing your business. Whether you&apos;re moving full containers by
              sea or urgent parcels by air, we tailor our services to your
              timeline and budget. Our team is based at the heart of one of the
              world&apos;s busiest logistics hubs—Singapore—giving you direct access
              to major trade routes across Asia, Europe, and the Americas.
            </p>

            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector("#services");
                if (target) {
                  const top =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    80;
                  window.scrollTo({ top, behavior: "smooth" });
                }
              }}
              className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded transition-colors duration-200"
            >
              Learn About Us
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
