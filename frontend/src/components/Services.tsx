import { Scissors, Sparkles, Heart, Crown, Star } from 'lucide-react';

interface ServiceCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  services: string[];
  color: string;
}

const categories: ServiceCategory[] = [
  {
    id: 'hair',
    title: 'Hair Services',
    icon: <Scissors className="w-6 h-6" />,
    services: [
      'Haircut',
      'Hairstyling',
      'Blow Dry',
      'Hair Extensions',
      'Balayage',
      'Perms',
      'Dreadlocks',
      'Braids / Box Braids',
      'Shampoo & Conditioning',
    ],
    color: 'from-amber-50 to-yellow-50',
  },
  {
    id: 'skin',
    title: 'Skin & Beauty',
    icon: <Sparkles className="w-6 h-6" />,
    services: [
      'Facials',
      'Skin Care',
      'Acne Treatments',
      'Make-up & Bridal Make-up',
      'Microblading',
      'Permanent Makeup',
      'Lash Lift / Lash Perms',
      'Eyelash Extensions',
      'Eyebrow Threading & Shaping',
    ],
    color: 'from-rose-50 to-pink-50',
  },
  {
    id: 'body',
    title: 'Body Services',
    icon: <Heart className="w-6 h-6" />,
    services: [
      'Waxing / Body Waxing',
      'Laser Hair Removal',
      'Permanent Hair Removal',
      'Pedicure',
      'Manicure',
      'Massage',
      'Spa Services',
      'Tanning',
    ],
    color: 'from-emerald-50 to-teal-50',
  },
  {
    id: 'bridal',
    title: 'Bridal & Event',
    icon: <Crown className="w-6 h-6" />,
    services: [
      'Bridal Services',
      'Wedding & Event Preparation',
    ],
    color: 'from-purple-50 to-violet-50',
  },
  {
    id: 'other',
    title: 'Other Services',
    icon: <Star className="w-6 h-6" />,
    services: [
      'Online Booking',
      'Mobile Salon Service',
      'Shaving',
    ],
    color: 'from-sky-50 to-blue-50',
  },
];

function ServiceCard({ category }: { category: ServiceCategory }) {
  return (
    <div className="card-hover bg-card border border-border rounded-2xl overflow-hidden shadow-card group">
      {/* Card Header */}
      <div className="relative p-6 pb-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center text-charcoal shadow-gold">
            {category.icon}
          </div>
          <h3 className="font-display text-2xl font-semibold text-foreground tracking-wide">
            {category.title}
          </h3>
        </div>
        <div className="section-divider" />
      </div>

      {/* Services List */}
      <div className="px-6 pb-6">
        <ul className="space-y-2">
          {category.services.map((service) => (
            <li key={service} className="flex items-center gap-3 group/item">
              <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 group-hover/item:scale-125 transition-transform" />
              <span className="font-body text-sm text-foreground/80 tracking-wide">{service}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-3 font-medium">
            What We Offer
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-foreground mb-4 tracking-wide">
            Our <span className="gold-text-gradient font-semibold italic">Services</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            From precision haircuts to luxurious spa treatments — we offer a complete range of beauty and grooming services for everyone.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/60" />
            <div className="w-2 h-2 rounded-full bg-gold" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/60" />
          </div>
        </div>

        {/* Divider Image */}
        <div className="mb-12 flex justify-center">
          <img
            src="/assets/generated/salon-divider.dim_1200x80.png"
            alt="Decorative divider"
            className="max-w-full h-auto opacity-70"
          />
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <ServiceCard key={category.id} category={category} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="font-body text-muted-foreground text-sm mb-4 tracking-wide">
            Ready to experience the magic?
          </p>
          <a
            href="https://wa.me/918129529732"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn inline-flex items-center gap-3 text-white font-body font-medium px-8 py-4 rounded-full text-base tracking-wide shadow-lg"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Book an Appointment
          </a>
        </div>
      </div>
    </section>
  );
}
