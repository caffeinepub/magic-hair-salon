import { Scissors, Heart } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'magic-hair-salon'
  );

  return (
    <footer className="bg-charcoal border-t border-gold/15 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full gold-gradient flex items-center justify-center">
              <Scissors className="w-3.5 h-3.5 text-charcoal" />
            </div>
            <span className="font-display text-lg font-semibold text-gold tracking-wide">
              Magic Hair Salon
            </span>
          </div>

          {/* Center: Address */}
          <p className="font-body text-xs text-white/40 text-center tracking-wide">
            Nate Adattu Avenue, 1st Floor · Pala, Kerala 686575
          </p>

          {/* Right: Attribution */}
          <p className="font-body text-xs text-white/40 flex items-center gap-1.5">
            © {year} · Built with{' '}
            <Heart className="w-3 h-3 text-gold fill-gold inline" />{' '}
            using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold/80 transition-colors underline underline-offset-2"
            >
              caffeine.ai
            </a>
          </p>
        </div>

        {/* Bottom divider */}
        <div className="mt-8 section-divider opacity-30" />

        {/* Quick links */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
          <a
            href="https://wa.me/918129529732"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs text-white/40 hover:text-gold transition-colors tracking-widest uppercase"
          >
            WhatsApp
          </a>
          <a
            href="tel:+918129529732"
            className="font-body text-xs text-white/40 hover:text-gold transition-colors tracking-widest uppercase"
          >
            +91 81295 29732
          </a>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Nate+Adattu+Avenue+1st+Floor+Old+Market+Road+Junction+near+Kurishupally+Pala+Kerala+686575"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs text-white/40 hover:text-gold transition-colors tracking-widest uppercase"
          >
            Get Directions
          </a>
        </div>
      </div>
    </footer>
  );
}
