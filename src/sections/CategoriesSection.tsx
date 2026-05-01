import ScrollReveal from "@/components/ScrollReveal";

const CATEGORIES = [
  {
    title: "Freight Forwarding",
    image: "/images/service-freight.jpg",
  },
  {
    title: "Warehousing",
    image: "/images/service-warehouse.jpg",
  },
  {
    title: "Customs Clearance",
    image: "/images/service-customs.jpg",
  },
  {
    title: "Last-Mile Delivery",
    image: "/images/service-delivery.jpg",
  },
];

export default function CategoriesSection() {
  return (
    <section className="bg-white py-24 md:py-[120px]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={i * 100}>
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden group cursor-pointer">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="font-display text-[22px] font-bold text-white tracking-[-0.5px]">
                    {cat.title}
                  </h3>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
