import { Scissors } from 'lucide-react';

export default function Header() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-charcoal/95 backdrop-blur-sm border-b border-gold/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full gold-gradient flex items-center justify-center">
              <Scissors className="w-4 h-4 text-charcoal" />
            </div>
            <span className="font-display text-xl font-semibold text-gold tracking-wide">
              Magic Hair Salon
            </span>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollTo('services')}
              className="font-body text-sm font-medium text-champagne/80 hover:text-gold transition-colors tracking-wider uppercase"
            >
              Services
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="font-body text-sm font-medium text-champagne/80 hover:text-gold transition-colors tracking-wider uppercase"
            >
              Contact
            </button>
            <a
              href="https://wa.me/918129529732"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn text-white text-sm font-medium px-4 py-2 rounded-full font-body tracking-wide"
            >
              Book Now
            </a>
          </nav>

          {/* Mobile Book Button */}
          <a
            href="https://wa.me/918129529732"
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden whatsapp-btn text-white text-sm font-medium px-4 py-2 rounded-full font-body"
          >
            Book
          </a>
        </div>
      </div>
    </header>
  );
}
