import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'Technology', href: '#technology' },
    { name: 'Sustainability', href: '#sustainability' },
    { name: 'Success Stories', href: '#stories' },
    { name: 'Resources', href: '#resources' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        mobileMenuOpen
          ? 'bg-cream border-b border-forest/10 py-4'
          : isScrolled
            ? 'bg-forest/85 backdrop-blur-xl border-b border-white/10 py-4'
            : 'bg-gradient-to-b from-forest/75 to-transparent py-5'
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#main-content" className="flex items-center gap-3 z-50 relative group" aria-label="TIPA home">
          <div className={cn(
            "w-6 h-6 transform -skew-x-[20deg] transition-transform duration-300 group-hover:scale-110",
            mobileMenuOpen ? "bg-mid-green" : "bg-fresh-accent"
          )} />
          <span className={cn(
            'font-serif text-3xl font-bold tracking-normal transition-colors',
            mobileMenuOpen ? 'text-forest' : 'text-cream'
          )}>
            TIPA
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-fresh-accent',
                'text-cream/90'
              )}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 z-50 relative">
          <a
            href="#contact"
            className={cn(
              'hidden md:inline-flex min-h-11 items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold transition-all',
              mobileMenuOpen
                ? 'bg-forest text-cream hover:bg-mid-green'
                : isScrolled
                ? 'bg-fresh-accent text-forest hover:bg-white'
                : 'bg-cream text-forest hover:bg-white'
            )}
          >
            Consult an Expert
          </a>
          
          <button
            className={cn(
              "lg:hidden inline-flex min-h-11 items-center gap-2 rounded-full px-3 py-2 transition-colors",
              mobileMenuOpen ? "text-forest hover:bg-forest/5" : "text-cream hover:bg-white/10"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            type="button"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
            <span className="hidden text-sm font-semibold sm:inline">
              {mobileMenuOpen ? "Close" : "Menu"}
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        aria-hidden={!mobileMenuOpen}
        className={cn(
          'fixed inset-0 bg-cream z-40 flex flex-col pt-32 px-6 transition-transform duration-300 lg:hidden',
          mobileMenuOpen ? 'translate-x-0 pointer-events-auto' : 'translate-x-full pointer-events-none'
        )}
      >
        <nav className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-4xl font-serif text-forest"
              tabIndex={mobileMenuOpen ? 0 : -1}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="mt-8">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 w-full text-lg font-medium bg-forest text-cream rounded-full text-center"
              tabIndex={mobileMenuOpen ? 0 : -1}
              onClick={() => setMobileMenuOpen(false)}
            >
              Consult an Expert
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
