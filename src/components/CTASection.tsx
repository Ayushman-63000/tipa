import type { FormEvent } from 'react';
import { motion } from 'framer-motion';

export default function CTASection() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const body = Array.from(formData.entries())
      .map(([key, value]) => `${key}: ${String(value)}`)
      .join('\n');

    window.location.href = `mailto:info@tipa-corp.com?subject=${encodeURIComponent('Packaging inquiry')}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="bg-off-white py-24 lg:py-32" id="contact">
      <div className="container mx-auto px-6 md:px-12">
        <div className="overflow-hidden rounded-lg border border-forest/10 bg-white shadow-[0_24px_80px_rgba(13,31,14,0.1)]">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-forest p-8 md:p-12 lg:p-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-6xl font-serif text-cream leading-[1.05] tracking-normal mb-6"
              >
                Ready to replace conventional <span className="italic text-soft-gold">flexible plastic?</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-cream/80 mb-10 font-sans leading-relaxed text-balance"
              >
                Tell us your product, segment, volume, and market. TIPA’s packaging experts will help identify the right compostable solution.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <a href="#contact-form" className="px-6 py-3 bg-fresh-accent hover:bg-cream text-forest font-semibold rounded-lg transition-colors text-center">
                  Consult with an Expert
                </a>
                <a href="mailto:info@tipa-corp.com?subject=Technical%20data%20request" className="px-6 py-3 bg-transparent border border-cream/25 hover:border-cream/50 hover:bg-cream/10 text-cream font-semibold rounded-lg transition-colors text-center">
                  Request Technical Data
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="p-8 md:p-10 lg:p-12"
            >
              <form id="contact-form" className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="first-name" className="text-sm font-medium text-forest">First Name</label>
                    <input id="first-name" name="First name" type="text" autoComplete="given-name" required className="w-full px-4 py-3 bg-off-white border border-card-border rounded-lg focus:outline-none focus:border-mid-green focus:ring-1 focus:ring-mid-green transition-all" placeholder="First name" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="last-name" className="text-sm font-medium text-forest">Last Name</label>
                    <input id="last-name" name="Last name" type="text" autoComplete="family-name" required className="w-full px-4 py-3 bg-off-white border border-card-border rounded-lg focus:outline-none focus:border-mid-green focus:ring-1 focus:ring-mid-green transition-all" placeholder="Last name" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="work-email" className="text-sm font-medium text-forest">Work Email</label>
                  <input id="work-email" name="Work email" type="email" autoComplete="email" required className="w-full px-4 py-3 bg-off-white border border-card-border rounded-lg focus:outline-none focus:border-mid-green focus:ring-1 focus:ring-mid-green transition-all" placeholder="name@company.com" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="text-sm font-medium text-forest">Company</label>
                    <input id="company" name="Company" type="text" autoComplete="organization" required className="w-full px-4 py-3 bg-off-white border border-card-border rounded-lg focus:outline-none focus:border-mid-green focus:ring-1 focus:ring-mid-green transition-all" placeholder="Company" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="segment" className="text-sm font-medium text-forest">Segment</label>
                    <select id="segment" name="Segment" required defaultValue="" className="w-full px-4 py-3 bg-off-white border border-card-border rounded-lg focus:outline-none focus:border-mid-green focus:ring-1 focus:ring-mid-green transition-all text-forest/70">
                      <option value="" disabled>Select segment...</option>
                      <option>Fresh Produce</option>
                      <option>Fashion</option>
                      <option>Snacks</option>
                      <option>Dry Food</option>
                      <option>Tea & Coffee</option>
                      <option>Baked Goods</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-forest">Message</label>
                  <textarea id="message" name="Message" rows={3} className="w-full px-4 py-3 bg-off-white border border-card-border rounded-lg focus:outline-none focus:border-mid-green focus:ring-1 focus:ring-mid-green transition-all resize-y" placeholder="How can we help you?"></textarea>
                </div>

                <button type="submit" className="w-full mt-2 py-4 bg-forest hover:bg-mid-green text-cream font-semibold rounded-lg transition-colors">
                  Submit Inquiry
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
