import type { FormEvent } from 'react';
import { ArrowRight } from 'lucide-react';

const footerColumns = [
  {
    title: "Solutions",
    links: [
      { label: "TIPA CLEAR", href: "#solutions" },
      { label: "TIPA MET", href: "#solutions" },
      { label: "TIPA PAPER", href: "#solutions" },
      { label: "TIPA COLOR", href: "#solutions" },
      { label: "Labels", href: "#solutions" },
      { label: "Roll stock", href: "#solutions" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Technology", href: "#technology" },
      { label: "Sustainability", href: "#sustainability" },
      { label: "Success Stories", href: "#stories" },
      { label: "Resources", href: "#resources" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "https://tipa-corp.com/blog/" },
      { label: "FAQ", href: "https://tipa-corp.com/faq/" },
      { label: "Composting Guide", href: "https://tipa-corp.com/sustainability/" },
      { label: "Sustainable Packaging", href: "https://tipa-corp.com/sustainable-packaging/" },
      { label: "Biodegradable Packaging", href: "https://tipa-corp.com/biodegradable-packaging/" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Global HQ", href: "mailto:info@tipa-corp.com" },
      { label: "North America", href: "mailto:NA@tipa-corp.com" },
      { label: "Europe", href: "mailto:EU@tipa-corp.com" },
      { label: "APAC", href: "mailto:APAC@tipa-corp.com" },
    ],
  },
];

export default function Footer() {
  const handleNewsletterSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("Newsletter email") ?? "");

    window.location.href = `mailto:info@tipa-corp.com?subject=${encodeURIComponent("Newsletter signup")}&body=${encodeURIComponent(`Please add this email to TIPA updates: ${email}`)}`;
  };

  return (
    <footer className="bg-forest pt-24 pb-12 overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">
          <div className="lg:col-span-4 flex flex-col gap-6">
            <a href="#main-content" className="font-serif text-3xl font-bold tracking-normal text-cream" aria-label="TIPA home">TIPA</a>
            <p className="text-cream/70 text-lg font-serif italic mb-6">
              Compostable packaging inspired by nature.
            </p>
            <div className="flex flex-col gap-4">
              <span className="text-sm font-semibold tracking-widest text-fresh-accent uppercase">Newsletter</span>
              <form className="flex gap-2" onSubmit={handleNewsletterSubmit}>
                <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                <input
                  id="newsletter-email"
                  name="Newsletter email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="Your email address"
                  className="bg-cream/5 border border-cream/20 text-cream placeholder:text-cream/40 px-4 py-3 rounded-lg focus:outline-none focus:border-fresh-accent w-full"
                />
                <button type="submit" aria-label="Subscribe to newsletter" className="bg-fresh-accent text-forest p-3 rounded-lg hover:bg-white transition-colors flex-shrink-0">
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerColumns.map((column) => (
              <div key={column.title} className="flex flex-col gap-4">
                <span className="text-sm font-semibold tracking-widest text-cream uppercase mb-2">{column.title}</span>
                {column.links.map((link) => (
                  <a key={link.label} href={link.href} className="text-cream/65 hover:text-fresh-accent transition-colors text-sm">
                    {link.label}
                  </a>
                ))}
                {column.title === "Contact" && (
                  <a href="mailto:info@tipa-corp.com" className="text-fresh-accent mt-4 text-sm font-semibold">info@tipa-corp.com</a>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-cream/10 text-cream/45 text-sm">
          <p>© {new Date().getFullYear()} TIPA Corp. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://tipa-corp.com/privacy-policy/" className="hover:text-cream transition-colors">Privacy Policy</a>
            <a href="https://tipa-corp.com/code-of-conduct/" className="hover:text-cream transition-colors">Code of Conduct</a>
            <a href="#contact" className="hover:text-cream transition-colors">Contact</a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[-5rem] left-1/2 -translate-x-1/2 text-[9rem] font-serif font-bold text-cream/[0.02] pointer-events-none select-none z-0 w-full text-center tracking-normal md:text-[14rem] lg:text-[18rem]">
        TIPA
      </div>
    </footer>
  );
}
