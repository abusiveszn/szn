import { useState } from "react";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Calculator", href: "#calculator" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const scrolled = useScrollPosition(100);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-20 flex items-center transition-colors duration-200 ${
          scrolled
            ? "bg-navy-900/95 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2 font-display text-[22px] font-bold text-white tracking-tight"
          >
            <img src="/logo.png" alt="SZN Logo" className="h-8 w-auto" />
            SZN<span className="text-amber-500">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs font-medium uppercase tracking-[0.5px] text-white/80 hover:text-amber-500 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#calculator"
              onClick={(e) => handleNavClick(e, "#calculator")}
              className="bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold px-6 py-2.5 rounded transition-colors duration-200"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-navy-900/95 flex flex-col items-center justify-center gap-8">
          <button
            className="absolute top-6 right-6 text-white p-2"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-2xl font-display font-bold text-white hover:text-amber-500 transition-colors duration-200"
              style={{
                animation: `fadeInRight 0.4s ease-out ${i * 0.08}s both`,
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#calculator"
            onClick={(e) => handleNavClick(e, "#calculator")}
            className="mt-4 bg-amber-500 hover:bg-amber-600 text-white text-lg font-semibold px-8 py-3 rounded transition-colors duration-200"
          >
            Get a Quote
          </a>
        </div>
      )}

      <style>{`
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
