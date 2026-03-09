import { Clock, MapPin, Phone } from "lucide-react";

const WA_ICON = (
  <svg
    className="w-5 h-5 flex-shrink-0"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-ocid="hero.section"
    >
      {/* Background Image — eager-loaded for LCP */}
      <img
        src="/assets/uploads/IMG-20260309-WA0017-1.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        fetchPriority="high"
        loading="eager"
        decoding="sync"
        style={{ transformOrigin: "center center" }}
      />

      {/* Layered cinematic overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Subtle noise texture overlay for depth */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] gold-gradient z-10" />

      {/* Content */}
      <div className="relative z-10 text-center px-5 sm:px-8 lg:px-12 max-w-4xl mx-auto pt-20">
        {/* Status pill */}
        <div
          className="fade-up inline-flex items-center gap-2 rounded-full px-5 py-2 mb-8 border"
          style={{
            background: "oklch(0.12 0.018 52 / 0.5)",
            backdropFilter: "blur(12px)",
            borderColor: "oklch(0.76 0.135 72 / 0.35)",
          }}
          data-ocid="hero.status.panel"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="font-body text-xs text-white/85 tracking-[0.22em] uppercase font-medium">
            Open Now &nbsp;·&nbsp; Closes 9:00 PM
          </span>
        </div>

        {/* Eyebrow */}
        <p className="fade-up fade-up-delay-1 font-body text-[11px] sm:text-xs tracking-[0.35em] uppercase text-gold/90 mb-4 font-medium">
          Unisex Beauty &amp; Grooming · Pala, Kerala
        </p>

        {/* Main heading */}
        <h1 className="fade-up fade-up-delay-2 font-display leading-[1.05] mb-6">
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-light text-white tracking-wide">
            Hair Magic Z
          </span>
          <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-[104px] font-bold italic gold-text-gradient leading-none">
            Unisex Salon
          </span>
        </h1>

        {/* Decorative line with diamond */}
        <div className="fade-up fade-up-delay-3 flex items-center justify-center gap-3 mb-7">
          <div className="h-px w-20 sm:w-32 bg-gradient-to-r from-transparent to-gold/60" />
          <div className="w-2 h-2 rotate-45 bg-gold/80" />
          <div className="h-px w-20 sm:w-32 bg-gradient-to-l from-transparent to-gold/60" />
        </div>

        {/* Rating */}
        <div className="fade-up fade-up-delay-3 flex items-center justify-center gap-3 mb-10">
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className={`w-4 h-4 ${star <= 4 ? "text-gold fill-gold" : "text-gold/40 fill-gold/40"}`}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <span className="font-display text-2xl font-semibold text-gold">
            4.9
          </span>
          <span className="font-body text-white/55 text-sm">
            / 5 &nbsp;·&nbsp; 265 Reviews
          </span>
        </div>

        {/* CTA Buttons */}
        <div
          className="fade-up fade-up-delay-4 flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          data-ocid="hero.cta.panel"
        >
          <a
            href="https://wa.me/918129529732"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn inline-flex items-center gap-3 text-white font-body font-semibold px-8 py-4 rounded-full text-[15px] tracking-wide shadow-xl w-full sm:w-auto justify-center"
            data-ocid="hero.whatsapp.button"
          >
            {WA_ICON}
            Book via WhatsApp
          </a>
          <a
            href="tel:+918129529732"
            className="inline-flex items-center gap-3 text-white font-body font-medium px-8 py-4 rounded-full text-[15px] tracking-wide w-full sm:w-auto justify-center transition-all duration-300 hover:bg-white/20"
            style={{
              background: "oklch(1 0 0 / 0.10)",
              backdropFilter: "blur(12px)",
              border: "1px solid oklch(1 0 0 / 0.22)",
            }}
            data-ocid="hero.call.button"
          >
            <Phone className="w-5 h-5" />
            Call Us
          </a>
        </div>

        {/* Info pills */}
        <div className="fade-up fade-up-delay-5 flex flex-wrap items-center justify-center gap-3">
          {[
            {
              icon: <Clock className="w-3.5 h-3.5 text-gold" />,
              text: "Mon–Sun · 9 AM – 9 PM",
            },
            {
              icon: <MapPin className="w-3.5 h-3.5 text-gold" />,
              text: "Pala, Kerala 686575",
            },
          ].map(({ icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2 rounded-full px-4 py-2 border"
              style={{
                background: "oklch(0.12 0.018 52 / 0.42)",
                backdropFilter: "blur(10px)",
                borderColor: "oklch(0.76 0.135 72 / 0.22)",
              }}
            >
              {icon}
              <span className="font-body text-[11px] text-white/75 tracking-wide">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-body text-[10px] text-white/35 tracking-[0.3em] uppercase">
          Explore
        </span>
        <div className="relative w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5">
          <div
            className="w-1 h-2 rounded-full bg-gold/70"
            style={{ animation: "scroll-dot 2s ease-in-out infinite" }}
          />
        </div>
      </div>

      <style>{`
        @keyframes scroll-dot {
          0%, 100% { transform: translateY(0); opacity: 1; }
          80%       { transform: translateY(12px); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
