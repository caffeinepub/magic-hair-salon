import { MapPin, Phone, Clock, Navigation, MessageCircle } from 'lucide-react';

const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Nate+Adattu+Avenue+1st+Floor+Old+Market+Road+Junction+near+Kurishupally+Pala+Kerala+686575';

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-charcoal relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-gold blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gold blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-3 font-medium">
            Find Us
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-4 tracking-wide">
            Location &{' '}
            <span className="gold-text-gradient font-semibold italic">Contact</span>
          </h2>
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/60" />
            <div className="w-2 h-2 rounded-full bg-gold" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/60" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Logo + Info */}
          <div className="space-y-8">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <img
                src="/assets/generated/salon-logo.dim_256x256.png"
                alt="Magic Hair Salon Logo"
                className="w-20 h-20 rounded-full object-cover border-2 border-gold/40 shadow-gold"
              />
              <div>
                <h3 className="font-display text-2xl font-semibold text-white tracking-wide">
                  Magic Hair Salon
                </h3>
                <p className="font-body text-sm text-gold/80 tracking-widest uppercase">
                  Unisex Beauty & Grooming
                </p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3 bg-white/5 border border-gold/20 rounded-2xl p-4">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className={`w-5 h-5 ${star <= 4 ? 'text-gold fill-gold' : 'text-gold/50 fill-gold/50'}`}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <div>
                <span className="font-display text-2xl font-semibold text-gold">4.9</span>
                <span className="font-body text-white/60 text-sm ml-2">/ 5 · 265 Reviews</span>
              </div>
            </div>

            {/* Address */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0 shadow-gold">
                <MapPin className="w-5 h-5 text-charcoal" />
              </div>
              <div>
                <p className="font-body text-xs tracking-widest uppercase text-gold/70 mb-1">Address</p>
                <address className="not-italic font-body text-white/85 leading-relaxed text-sm">
                  Nate Adattu Avenue, 1st Floor<br />
                  Old Market Road, Junction<br />
                  Near Kurishupally<br />
                  <strong className="text-white font-medium">Pala, Kerala 686575</strong>
                </address>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0 shadow-gold">
                <Clock className="w-5 h-5 text-charcoal" />
              </div>
              <div>
                <p className="font-body text-xs tracking-widest uppercase text-gold/70 mb-1">Hours</p>
                <p className="font-body text-white/85 text-sm">
                  Monday – Sunday<br />
                  <strong className="text-white font-medium">9:00 AM – 9:00 PM</strong>
                </p>
                <span className="inline-flex items-center gap-1.5 mt-2 bg-green-500/15 border border-green-500/30 rounded-full px-3 py-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="font-body text-xs text-green-400 font-medium">Currently Open</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right: Contact Actions */}
          <div className="space-y-4">
            {/* Phone */}
            <a
              href="tel:+918129529732"
              className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold/30 rounded-2xl p-5 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 group-hover:gold-gradient flex items-center justify-center flex-shrink-0 transition-all">
                <Phone className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="font-body text-xs tracking-widest uppercase text-gold/70 mb-0.5">Call Us</p>
                <p className="font-body text-white font-medium text-lg tracking-wide">+91 81295 29732</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/918129529732"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-green-500/10 hover:bg-green-500/20 border border-green-500/20 hover:border-green-500/40 rounded-2xl p-5 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p className="font-body text-xs tracking-widest uppercase text-green-400/70 mb-0.5">WhatsApp</p>
                <p className="font-body text-white font-medium text-lg tracking-wide">Chat with Us</p>
                <p className="font-body text-white/50 text-xs">Book appointments instantly</p>
              </div>
            </a>

            {/* Get Directions */}
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold/30 rounded-2xl p-5 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <Navigation className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="font-body text-xs tracking-widest uppercase text-gold/70 mb-0.5">Directions</p>
                <p className="font-body text-white font-medium text-lg tracking-wide">Get Directions</p>
                <p className="font-body text-white/50 text-xs">Open in Google Maps</p>
              </div>
            </a>

            {/* Book via WhatsApp CTA */}
            <div className="mt-6 p-6 bg-gradient-to-br from-gold/15 to-gold/5 border border-gold/25 rounded-2xl text-center">
              <MessageCircle className="w-8 h-8 text-gold mx-auto mb-3" />
              <p className="font-display text-xl font-semibold text-white mb-1">
                Ready to Book?
              </p>
              <p className="font-body text-white/60 text-sm mb-4">
                Message us on WhatsApp for instant booking
              </p>
              <a
                href="https://wa.me/918129529732?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Magic%20Hair%20Salon."
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn inline-flex items-center gap-2 text-white font-body font-medium px-6 py-3 rounded-full text-sm tracking-wide"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Book Now on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
