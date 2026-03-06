import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-charcoal/96 backdrop-blur-xl shadow-[0_1px_0_oklch(0.76_0.135_72/0.18),0_8px_32px_oklch(0.12_0.018_52/0.35)]"
          : "bg-transparent"
      }`}
      data-ocid="header.panel"
    >
      {/* Top gold accent line */}
      <div className="h-[2px] w-full gold-gradient" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-[68px]">
          {/* Logo */}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 group"
            data-ocid="header.link"
          >
            <div className="relative w-9 h-9 flex-shrink-0">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full gold-gradient opacity-90 group-hover:opacity-100 transition-opacity" />
              {/* Inner icon */}
              <div className="absolute inset-[2px] rounded-full bg-charcoal flex items-center justify-center">
                <svg
                  viewBox="0 0 20 20"
                  className="w-4 h-4 text-gold fill-current"
                  aria-hidden="true"
                >
                  <path d="M10 2C8.5 2 7.2 2.8 6.5 4H5C4.4 4 4 4.4 4 5v1c0 .6.4 1 1 1h.2C5 7.3 5 7.7 5 8c0 2.8 2.2 5 5 5s5-2.2 5-5c0-.3 0-.7-.2-1H15c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1h-1.5C12.8 2.8 11.5 2 10 2zm0 2c1.1 0 2 .9 2 2H8c0-1.1.9-2 2-2zm0 8c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm0-4c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1zm-5 8h10v1H5v-1z" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-[15px] font-semibold text-gold tracking-wide">
                Hair Magic Z
              </span>
              <span className="font-body text-[9px] text-champagne/60 tracking-[0.25em] uppercase">
                Unisex Salon · Pala
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            data-ocid="header.tab"
          >
            {[
              { label: "Services", id: "services" },
              { label: "Contact", id: "contact" },
            ].map(({ label, id }) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollTo(id)}
                className="relative font-body text-[13px] font-medium text-champagne/70 hover:text-gold transition-colors tracking-[0.12em] uppercase px-4 py-2 rounded-lg hover:bg-white/5 group"
                data-ocid={`header.${id}.link`}
              >
                {label}
                <span className="absolute bottom-1.5 left-4 right-4 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            ))}

            <a
              href="https://wa.me/918129529732"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 inline-flex items-center gap-2 whatsapp-btn text-white text-[13px] font-medium px-5 py-2.5 rounded-full font-body tracking-wide"
              data-ocid="header.book.button"
            >
              <svg
                className="w-4 h-4 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Book Now
            </a>
          </nav>

          {/* Mobile: Book + Menu */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="https://wa.me/918129529732"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn text-white text-xs font-medium px-4 py-2 rounded-full font-body"
              data-ocid="header.mobile.book.button"
            >
              Book
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
              data-ocid="header.mobile.menu.button"
            >
              <span
                className={`block w-5 h-0.5 bg-champagne/80 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block w-5 h-0.5 bg-champagne/80 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-5 h-0.5 bg-champagne/80 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden bg-charcoal/98 backdrop-blur-xl border-t border-gold/10 transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-60 py-4" : "max-h-0"
        }`}
        data-ocid="header.mobile.menu.panel"
      >
        <div className="flex flex-col px-5 gap-1">
          {[
            { label: "Services", id: "services" },
            { label: "Contact", id: "contact" },
          ].map(({ label, id }) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollTo(id)}
              className="font-body text-sm font-medium text-champagne/70 hover:text-gold tracking-widest uppercase text-left py-3 px-3 rounded-lg hover:bg-white/5 transition-colors"
              data-ocid={`header.mobile.${id}.link`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
