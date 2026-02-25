import { Star, Clock, MapPin, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/generated/salon-hero.dim_1440x600.png')" }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Decorative gold lines */}
      <div className="absolute top-0 left-0 right-0 h-1 gold-gradient opacity-80" />
      <div className="absolute bottom-0 left-0 right-0 h-1 gold-gradient opacity-80" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pt-16">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 bg-charcoal/60 backdrop-blur-sm border border-gold/30 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="font-body text-sm text-champagne/90 tracking-widest uppercase font-medium">
            Open · Closes at 9:00 PM
          </span>
        </div>

        {/* Salon Name */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white mb-4 leading-tight tracking-wide">
          Magic Hair
          <span className="block gold-text-gradient font-semibold italic">Salon</span>
        </h1>

        {/* Tagline */}
        <p className="font-body text-base sm:text-lg text-champagne/75 tracking-widest uppercase mb-8 font-light">
          Unisex Beauty & Grooming · Pala, Kerala
        </p>

        {/* Rating */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-5 h-5 ${star <= 4 ? 'fill-gold text-gold' : 'fill-gold/50 text-gold/50'}`}
              />
            ))}
          </div>
          <span className="font-display text-2xl font-semibold text-gold">4.9</span>
          <span className="font-body text-champagne/70 text-sm">/ 5 · 265 Reviews</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="https://wa.me/918129529732"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn inline-flex items-center gap-3 text-white font-body font-medium px-8 py-4 rounded-full text-base tracking-wide shadow-lg"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Book via WhatsApp
          </a>
          <a
            href="tel:+918129529732"
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/25 text-white font-body font-medium px-8 py-4 rounded-full text-base tracking-wide hover:bg-white/20 transition-all"
          >
            <Phone className="w-5 h-5" />
            Call Us
          </a>
        </div>

        {/* Quick Info Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <div className="flex items-center gap-2 bg-charcoal/50 backdrop-blur-sm border border-gold/20 rounded-full px-4 py-2">
            <Clock className="w-4 h-4 text-gold" />
            <span className="font-body text-xs text-champagne/80 tracking-wide">Mon–Sun · 9 AM – 9 PM</span>
          </div>
          <div className="flex items-center gap-2 bg-charcoal/50 backdrop-blur-sm border border-gold/20 rounded-full px-4 py-2">
            <MapPin className="w-4 h-4 text-gold" />
            <span className="font-body text-xs text-champagne/80 tracking-wide">Pala, Kerala</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-body text-xs text-champagne/50 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gold/50 to-transparent" />
      </div>
    </section>
  );
}
