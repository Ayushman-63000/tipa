import { ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-forest pt-24 pb-12 overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <span className="font-serif text-3xl font-bold tracking-tight text-cream">TIPA</span>
            <p className="text-cream/70 text-lg font-serif italic mb-6">
              Compostable packaging inspired by nature.
            </p>
            <div className="flex flex-col gap-4">
              <span className="text-sm font-semibold tracking-widest text-fresh-accent uppercase">Newsletter</span>
              <form className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-cream/5 border border-cream/20 text-cream px-4 py-3 rounded-xl focus:outline-none focus:border-fresh-accent w-full"
                />
                <button type="button" className="bg-fresh-accent text-forest p-3 rounded-xl hover:bg-white transition-colors flex-shrink-0">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-sm font-semibold tracking-widest text-cream uppercase mb-2">Solutions</span>
              {['TIPA CLEAR', 'TIPA MET', 'TIPA PAPER', 'TIPA COLOR', 'Labels', 'Zippers'].map(link => (
                <a key={link} href="#" className="text-cream/60 hover:text-fresh-accent transition-colors text-sm">{link}</a>
              ))}
            </div>
            
            <div className="flex flex-col gap-4">
              <span className="text-sm font-semibold tracking-widest text-cream uppercase mb-2">Company</span>
              {['About Us', 'Technology', 'Sustainability', 'Success Stories', 'Careers'].map(link => (
                <a key={link} href="#" className="text-cream/60 hover:text-fresh-accent transition-colors text-sm">{link}</a>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-sm font-semibold tracking-widest text-cream uppercase mb-2">Resources</span>
              {['Blog', 'Press', 'Certifications', 'Composting Guide', 'FAQ'].map(link => (
                <a key={link} href="#" className="text-cream/60 hover:text-fresh-accent transition-colors text-sm">{link}</a>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-sm font-semibold tracking-widest text-cream uppercase mb-2">Contact</span>
              {['Global HQ', 'North America', 'Europe', 'APAC'].map(link => (
                <a key={link} href="#" className="text-cream/60 hover:text-fresh-accent transition-colors text-sm">{link}</a>
              ))}
              <a href="mailto:info@tipa-corp.com" className="text-fresh-accent mt-4 text-sm font-semibold">info@tipa-corp.com</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-cream/10 text-cream/40 text-sm">
          <p>© {new Date().getFullYear()} TIPA Corp. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-cream transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cream transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-cream transition-colors">Cookies</a>
          </div>
        </div>
      </div>

      {/* Decorative Watermark */}
      <div className="absolute bottom-[-15%] left-1/2 -translate-x-1/2 text-[25vw] font-serif font-bold text-cream/[0.02] pointer-events-none select-none z-0 tracking-tighter w-full text-center">
        TIPA
      </div>
    </footer>
  );
}
