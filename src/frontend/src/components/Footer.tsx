import { Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(
    typeof window !== "undefined"
      ? window.location.hostname
      : "magic-hair-salon",
  );

  return (
    <footer
      className="relative py-10 overflow-hidden"
      style={{ background: "oklch(0.10 0.016 50)" }}
      data-ocid="footer.panel"
    >
      {/* Top divider line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, oklch(0.76 0.135 72 / 0.20), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full gold-gradient flex items-center justify-center">
              <svg
                viewBox="0 0 20 20"
                className="w-3.5 h-3.5 fill-current text-charcoal"
                aria-hidden="true"
              >
                <path d="M10 2C8.5 2 7.2 2.8 6.5 4H5C4.4 4 4 4.4 4 5v1c0 .6.4 1 1 1h.2C5 7.3 5 7.7 5 8c0 2.8 2.2 5 5 5s5-2.2 5-5c0-.3 0-.7-.2-1H15c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1h-1.5C12.8 2.8 11.5 2 10 2zm0 2c1.1 0 2 .9 2 2H8c0-1.1.9-2 2-2zm0 8c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm-5 4h10v1H5v-1z" />
              </svg>
            </div>
            <span className="font-display text-base font-semibold text-gold tracking-wide">
              Hair Magic Z Unisex Salon
            </span>
          </div>

          {/* Center: Address */}
          <p className="font-body text-[11px] text-white/30 text-center tracking-wide">
            Nate Adattu Avenue, 1st Floor · Pala, Kerala 686575
          </p>

          {/* Attribution */}
          <p className="font-body text-[11px] text-white/30 flex items-center gap-1.5">
            © {year} · Made with{" "}
            <Heart className="w-3 h-3 text-gold/70 fill-gold/70" /> on{" "}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/70 hover:text-gold transition-colors underline underline-offset-2"
              data-ocid="footer.caffeine.link"
            >
              caffeine.ai
            </a>
          </p>
        </div>

        {/* Bottom links */}
        <div
          className="mt-7 pt-7 flex flex-wrap items-center justify-center gap-6"
          style={{ borderTop: "1px solid oklch(1 0 0 / 0.06)" }}
        >
          {[
            {
              label: "WhatsApp",
              href: "https://wa.me/918129529732",
              target: "_blank",
              rel: "noopener noreferrer",
            },
            { label: "+91 81295 29732", href: "tel:+918129529732" },
            {
              label: "Get Directions",
              href: "https://www.google.com/maps/search/?api=1&query=Nate+Adattu+Avenue+1st+Floor+Old+Market+Road+Junction+near+Kurishupally+Pala+Kerala+686575",
              target: "_blank",
              rel: "noopener noreferrer",
            },
          ].map(({ label, href, target, rel }) => (
            <a
              key={label}
              href={href}
              target={target}
              rel={rel}
              className="font-body text-[11px] text-white/30 hover:text-gold transition-colors tracking-[0.2em] uppercase"
              data-ocid={`footer.${label.toLowerCase().replace(/[^a-z0-9]/g, "_")}.link`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
