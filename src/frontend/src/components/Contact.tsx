import {
  Clock,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Star,
} from "lucide-react";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Nate+Adattu+Avenue+1st+Floor+Old+Market+Road+Junction+near+Kurishupally+Pala+Kerala+686575";

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

function ContactCard({
  href,
  target,
  rel,
  icon,
  label,
  value,
  sub,
  accentClass,
  ocid,
}: {
  href: string;
  target?: string;
  rel?: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  sub?: string;
  accentClass?: string;
  ocid: string;
}) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className="flex items-center gap-4 rounded-2xl p-5 border transition-all duration-300 group hover:scale-[1.015]"
      style={{
        background: "oklch(1 0 0 / 0.04)",
        borderColor: "oklch(1 0 0 / 0.10)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.borderColor =
          "oklch(0.76 0.135 72 / 0.30)";
        (e.currentTarget as HTMLAnchorElement).style.background =
          "oklch(1 0 0 / 0.07)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.borderColor =
          "oklch(1 0 0 / 0.10)";
        (e.currentTarget as HTMLAnchorElement).style.background =
          "oklch(1 0 0 / 0.04)";
      }}
      data-ocid={ocid}
    >
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${accentClass || "bg-gold/15"}`}
      >
        {icon}
      </div>
      <div className="min-w-0">
        <p className="font-body text-[10px] tracking-[0.25em] uppercase text-gold/60 mb-0.5 font-medium">
          {label}
        </p>
        <p className="font-body text-white font-semibold text-[15px] truncate">
          {value}
        </p>
        {sub && <p className="font-body text-white/40 text-xs mt-0.5">{sub}</p>}
      </div>
      <div
        className="ml-auto w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
        style={{ background: "oklch(0.76 0.135 72 / 0.15)" }}
      >
        <svg
          className="w-3 h-3 text-gold"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path
            d="M3 8h10M8 3l5 5-5 5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </a>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.16 0.020 52) 0%, oklch(0.12 0.018 52) 100%)",
      }}
      data-ocid="contact.section"
    >
      {/* Background orbs */}
      <div
        className="absolute top-0 left-[-10%] w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "oklch(0.76 0.135 72 / 0.05)" }}
      />
      <div
        className="absolute bottom-0 right-[-10%] w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: "oklch(0.76 0.135 72 / 0.04)" }}
      />

      {/* Top section divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, oklch(0.76 0.135 72 / 0.25), transparent)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-body text-[11px] tracking-[0.35em] uppercase text-gold/80 mb-4 font-medium">
            Find Us
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-4 tracking-wide">
            Location &amp;{" "}
            <em className="font-bold italic gold-text-gradient not-italic">
              Contact
            </em>
          </h2>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/50" />
            <div className="w-2 h-2 rotate-45 bg-gold" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/50" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left: Brand block + Info */}
          <div className="space-y-7">
            {/* Brand card */}
            <div
              className="rounded-2xl p-6 border relative overflow-hidden"
              style={{
                background: "oklch(1 0 0 / 0.04)",
                borderColor: "oklch(0.76 0.135 72 / 0.18)",
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] gold-gradient opacity-60" />
              <div className="flex items-center gap-4 mb-5">
                <img
                  src="/assets/generated/salon-logo.dim_256x256.png"
                  alt="Hair Magic Z Unisex Salon Logo"
                  className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                  style={{ border: "2px solid oklch(0.76 0.135 72 / 0.45)" }}
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <h3 className="font-display text-xl font-semibold text-white tracking-wide leading-tight">
                    Hair Magic Z Unisex Salon
                  </h3>
                  <p className="font-body text-[10px] tracking-[0.25em] uppercase text-gold/70 mt-0.5">
                    Unisex Beauty &amp; Grooming
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div
                className="flex items-center gap-3 pt-4 border-t"
                style={{ borderColor: "oklch(1 0 0 / 0.08)" }}
              >
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className={`w-4 h-4 ${s <= 4 ? "text-gold fill-gold" : "text-gold/35 fill-gold/35"}`}
                    />
                  ))}
                </div>
                <span className="font-display text-xl font-semibold text-gold">
                  4.9
                </span>
                <span className="font-body text-white/45 text-sm">
                  / 5 · 265 Reviews
                </span>
              </div>
            </div>

            {/* Address */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin className="w-4 h-4 text-charcoal" />
              </div>
              <div>
                <p className="font-body text-[10px] tracking-[0.25em] uppercase text-gold/60 mb-1.5 font-medium">
                  Address
                </p>
                <address className="not-italic font-body text-white/75 leading-relaxed text-sm">
                  Nate Adattu Avenue, 1st Floor
                  <br />
                  Old Market Road, Junction
                  <br />
                  Near Kurishupally
                  <br />
                  <strong className="text-white font-semibold">
                    Pala, Kerala 686575
                  </strong>
                </address>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0 mt-0.5">
                <Clock className="w-4 h-4 text-charcoal" />
              </div>
              <div>
                <p className="font-body text-[10px] tracking-[0.25em] uppercase text-gold/60 mb-1.5 font-medium">
                  Hours
                </p>
                <p className="font-body text-white/75 text-sm leading-relaxed">
                  Monday – Sunday
                  <br />
                  <strong className="text-white font-semibold">
                    9:00 AM – 9:00 PM
                  </strong>
                </p>
                <span
                  className="inline-flex items-center gap-1.5 mt-2.5 rounded-full px-3 py-1"
                  style={{
                    background: "oklch(0.65 0.18 145 / 0.12)",
                    border: "1px solid oklch(0.65 0.18 145 / 0.28)",
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="font-body text-xs text-green-400 font-medium">
                    Currently Open
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Right: Contact action cards */}
          <div className="space-y-3.5">
            <ContactCard
              href="tel:+918129529732"
              icon={<Phone className="w-5 h-5 text-gold" />}
              label="Call Us"
              value="+91 81295 29732"
              sub="Available during business hours"
              accentClass="bg-gold/12"
              ocid="contact.phone.button"
            />

            <ContactCard
              href="https://wa.me/918129529732"
              target="_blank"
              rel="noopener noreferrer"
              icon={
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ color: "#25d366" }}
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              }
              label="WhatsApp"
              value="Chat with Us"
              sub="Book appointments instantly"
              accentClass="bg-green-500/12"
              ocid="contact.whatsapp.button"
            />

            <ContactCard
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              icon={<Navigation className="w-5 h-5 text-gold" />}
              label="Directions"
              value="Get Directions"
              sub="Open in Google Maps"
              accentClass="bg-gold/12"
              ocid="contact.directions.button"
            />

            {/* Featured booking CTA */}
            <div
              className="rounded-2xl p-6 mt-2 relative overflow-hidden text-center"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.76 0.135 72 / 0.12), oklch(0.60 0.148 65 / 0.06))",
                border: "1px solid oklch(0.76 0.135 72 / 0.25)",
              }}
              data-ocid="contact.booking.panel"
            >
              <MessageCircle className="w-8 h-8 text-gold mx-auto mb-3" />
              <p className="font-display text-xl font-semibold text-white mb-1">
                Ready to Book?
              </p>
              <p className="font-body text-white/50 text-sm mb-5">
                Message us on WhatsApp for instant booking
              </p>
              <a
                href="https://wa.me/918129529732?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Hair%20Magic%20Z%20Unisex%20Salon."
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn inline-flex items-center gap-2.5 text-white font-body font-semibold px-7 py-3.5 rounded-full text-[14px] tracking-wide"
                data-ocid="contact.booknow.button"
              >
                {WA_ICON}
                Book Now on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
