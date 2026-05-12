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
        isScrolled
          ? 'bg-forest/70 backdrop-blur-xl border-b border-white/5 py-4'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 z-50 relative group">
          {/* Sleek modern parallelogram logo tilted to the right */}
          <div className="w-6 h-6 bg-fresh-accent transform -skew-x-[20deg] group-hover:scale-110 transition-transform duration-300" />
          <span className={cn(
            'font-serif text-3xl font-bold tracking-tight transition-colors',
            'text-cream' // Always keep text cream
          )}>
            TIPA
          </span>
        </a>

        {/* Desktop Nav */}
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

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4 z-50 relative">
          <a
            href="#contact"
            className={cn(
              'hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium transition-all rounded-full',
              isScrolled
                ? 'bg-fresh-accent text-forest hover:bg-white'
                : 'bg-cream text-forest hover:bg-white'
            )}
          >
            Consult an Expert
          </a>
          
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className={cn("w-6 h-6", isScrolled || mobileMenuOpen ? "text-forest" : "text-cream")} />
            ) : (
              <Menu className={cn("w-6 h-6", isScrolled ? "text-forest" : "text-cream")} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 bg-cream z-40 flex flex-col pt-32 px-6 transition-transform duration-300 lg:hidden',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-4xl font-serif text-forest"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="mt-8">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 w-full text-lg font-medium bg-forest text-cream rounded-full text-center"
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
