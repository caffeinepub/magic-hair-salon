import { Crown, Droplets, Heart, Scissors, Sparkles, Star } from "lucide-react";

interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  services: string[];
  accent: string;
}

const categories: ServiceCategory[] = [
  {
    id: "hair",
    title: "Hair Services",
    subtitle: "Cuts · Colour · Styling",
    icon: <Scissors className="w-6 h-6" />,
    services: [
      "Haircut",
      "Hairstyling",
      "Blow Dry",
      "Balayage",
      "Perms",
      "Dreadlocks",
      "Braids / Box Braids",
      "Shampoo & Conditioning",
    ],
    accent: "oklch(0.76 0.135 72)",
  },
  {
    id: "skin",
    title: "Skin & Beauty",
    subtitle: "Glow · Clarity · Radiance",
    icon: <Sparkles className="w-6 h-6" />,
    services: [
      "Facials",
      "Skin Care",
      "Acne Treatments",
      "Make-up & Bridal Make-up",
      "Permanent Makeup",
      "Eyebrow Threading & Shaping",
    ],
    accent: "oklch(0.72 0.14 355)",
  },
  {
    id: "body",
    title: "Body Services",
    subtitle: "Relax · Rejuvenate · Renew",
    icon: <Heart className="w-6 h-6" />,
    services: [
      "Waxing / Body Waxing",
      "Permanent Hair Removal",
      "Pedicure",
      "Manicure",
      "Massage",
      "Spa Services",
      "Tanning",
    ],
    accent: "oklch(0.68 0.13 165)",
  },
  {
    id: "bridal",
    title: "Bridal & Event",
    subtitle: "Timeless · Elegant · Unforgettable",
    icon: <Crown className="w-6 h-6" />,
    services: ["Bridal Services", "Wedding & Event Preparation"],
    accent: "oklch(0.72 0.12 300)",
  },
  {
    id: "wellness",
    title: "Wellness & Spa",
    subtitle: "Restore · Nourish · Glow",
    icon: <Droplets className="w-6 h-6" />,
    services: ["Massage Therapy", "Spa Packages", "Tanning", "Body Treatments"],
    accent: "oklch(0.68 0.11 210)",
  },
  {
    id: "other",
    title: "More Services",
    subtitle: "Flexible · Convenient · Personal",
    icon: <Star className="w-6 h-6" />,
    services: ["Online Booking", "Mobile Salon Service", "Shaving"],
    accent: "oklch(0.72 0.09 85)",
  },
];

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

function ServiceCard({
  category,
  index,
}: { category: ServiceCategory; index: number }) {
  return (
    <div
      className="group relative rounded-2xl overflow-hidden border border-border bg-card shadow-card card-hover"
      data-ocid={`services.card.${index + 1}`}
    >
      {/* Accent top border */}
      <div
        className="h-[3px] w-full"
        style={{
          background: `linear-gradient(90deg, ${category.accent}, transparent)`,
        }}
      />

      <div className="p-6">
        {/* Icon + Title row */}
        <div className="flex items-start gap-4 mb-5">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
            style={{
              background: `${category.accent}18`,
              border: `1px solid ${category.accent}30`,
              color: category.accent,
            }}
          >
            {category.icon}
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground tracking-wide leading-tight">
              {category.title}
            </h3>
            <p
              className="font-body text-[11px] tracking-[0.18em] uppercase mt-0.5"
              style={{ color: category.accent, opacity: 0.8 }}
            >
              {category.subtitle}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px mb-5"
          style={{
            background: `linear-gradient(90deg, ${category.accent}40, transparent)`,
          }}
        />

        {/* Services list */}
        <ul className="space-y-2.5">
          {category.services.map((service) => (
            <li key={service} className="flex items-center gap-3">
              <span
                className="w-1 h-1 rounded-full flex-shrink-0"
                style={{ background: category.accent }}
              />
              <span className="font-body text-[13px] text-foreground/75 tracking-wide leading-snug">
                {service}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at top left, ${category.accent}08, transparent 70%)`,
        }}
      />
    </div>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 lg:py-32 bg-background"
      data-ocid="services.section"
    >
      {/* Subtle background texture */}
      <div
        className="absolute left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, oklch(0.76 0.135 72 / 0.15), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="font-body text-[11px] tracking-[0.35em] uppercase text-gold mb-4 font-medium">
            What We Offer
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-foreground mb-4 tracking-wide">
            Our{" "}
            <em className="gold-text-gradient font-bold not-italic">
              Services
            </em>
          </h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto text-sm sm:text-[15px] leading-relaxed">
            From precision haircuts to luxurious spa treatments — a complete
            range of beauty and grooming for everyone.
          </p>

          {/* Ornamental divider */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/50" />
            <div className="flex items-center gap-1.5">
              <div className="w-1 h-1 rounded-full bg-gold/40" />
              <div className="w-2 h-2 rotate-45 bg-gold" />
              <div className="w-1 h-1 rounded-full bg-gold/40" />
            </div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/50" />
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {categories.map((category, i) => (
            <ServiceCard key={category.id} category={category} index={i} />
          ))}
        </div>

        {/* Bottom CTA banner */}
        <div
          className="mt-16 rounded-2xl p-8 sm:p-10 text-center relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.20 0.020 52), oklch(0.26 0.022 54))",
            border: "1px solid oklch(0.76 0.135 72 / 0.20)",
          }}
          data-ocid="services.cta.panel"
        >
          {/* Background glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 blur-3xl opacity-20 pointer-events-none"
            style={{ background: "oklch(0.76 0.135 72)" }}
          />

          <p className="relative font-body text-[11px] tracking-[0.35em] uppercase text-gold/80 mb-3 font-medium">
            Ready to Transform?
          </p>
          <p className="relative font-display text-2xl sm:text-3xl font-light text-white mb-2 tracking-wide">
            Book your appointment{" "}
            <em className="font-semibold italic gold-text-gradient">today</em>
          </p>
          <p className="relative font-body text-white/45 text-sm mb-7">
            Message us on WhatsApp for instant confirmation
          </p>
          <a
            href="https://wa.me/918129529732?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Hair%20Magic%20Z%20Unisex%20Salon."
            target="_blank"
            rel="noopener noreferrer"
            className="relative whatsapp-btn inline-flex items-center gap-3 text-white font-body font-semibold px-8 py-4 rounded-full text-[15px] tracking-wide"
            data-ocid="services.book.button"
          >
            {WA_ICON}
            Book an Appointment
          </a>
        </div>
      </div>
    </section>
  );
}
