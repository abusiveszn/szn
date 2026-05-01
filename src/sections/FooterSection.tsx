const USEFUL_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Calculator", href: "#calculator" },
  { label: "Contact Us", href: "#contact" },
];

export default function FooterSection() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="bg-navy-900">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About */}
          <div>
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="inline-flex items-center gap-2 font-display text-xl font-bold text-white tracking-tight mb-4"
            >
              <img src="/logo.png" alt="SZN Logo" className="h-6 w-auto" />
              SZN<span className="text-amber-500">.</span>
            </a>
            <p className="text-sm text-slate-400 leading-6 max-w-[280px]">
              SZN Pte Ltd is a reliable shipping and logistics company based in
              Singapore, connecting businesses to the world.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.5px] text-white mb-6">
              Useful Links
            </h4>
            <ul className="space-y-3">
              {USEFUL_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-slate-400 hover:text-amber-500 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.5px] text-white mb-6">
              Contact Us
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <p className="leading-6">
                10 Anson Road, #22-02
                <br />
                International Plaza
                <br />
                Singapore 079903
              </p>
              <p>
                <a
                  href="mailto:info@sznpteltd.com"
                  className="hover:text-amber-500 transition-colors duration-200"
                >
                  info@sznpteltd.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+6561234567"
                  className="hover:text-amber-500 transition-colors duration-200"
                >
                  +65 6123 4567
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-700 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; 2025 SZN Pte Ltd. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <span className="hover:text-amber-500 cursor-pointer transition-colors duration-200">
              Privacy Policy
            </span>
            <span>|</span>
            <span className="hover:text-amber-500 cursor-pointer transition-colors duration-200">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
