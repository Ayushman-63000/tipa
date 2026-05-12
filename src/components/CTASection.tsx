import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="bg-cream py-24 lg:py-32" id="contact">
      <div className="container mx-auto px-6 md:px-12">
        <div className="bg-forest rounded-[2.5rem] p-8 md:p-16 lg:p-24 overflow-hidden relative shadow-2xl">
          {/* Decorative background element */}
          <div className="absolute -top-1/2 -right-1/4 w-full max-w-2xl aspect-square bg-mid-green/20 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            {/* Left Column */}
            <div className="flex flex-col justify-center">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-6xl font-serif text-cream leading-[1.1] mb-6"
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
                className="flex flex-col sm:flex-row gap-4"
              >
                <button className="px-8 py-4 bg-fresh-accent hover:bg-white text-forest font-semibold rounded-full transition-colors text-center">
                  Consult with an Expert
                </button>
                <button className="px-8 py-4 bg-transparent border border-cream/30 hover:bg-cream/10 text-cream font-semibold rounded-full transition-colors text-center">
                  Request Technical Data
                </button>
              </motion.div>
            </div>

            {/* Right Column: Form Mockup */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-xl"
            >
              <form className="flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-forest">First Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-off-white border border-card-border rounded-xl focus:outline-none focus:border-mid-green focus:ring-1 focus:ring-mid-green transition-all" placeholder="John" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-forest">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-off-white border border-card-border rounded-xl focus:outline-none focus:border-mid-green focus:ring-1 focus:ring-mid-green transition-all" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-forest">Work Email</label>
                  <input type="email" className="w-full px-4 py-3 bg-off-white border border-card-border rounded-xl focus:outline-none focus:border-mid-green focus:ring-1 focus:ring-mid-green transition-all" placeholder="john@company.com" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-forest">Company</label>
                    <input type="text" className="w-full px-4 py-3 bg-off-white border border-card-border rounded-xl focus:outline-none focus:border-mid-green focus:ring-1 focus:ring-mid-green transition-all" placeholder="Company Name" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-forest">Segment</label>
                    <select className="w-full px-4 py-3 bg-off-white border border-card-border rounded-xl focus:outline-none focus:border-mid-green focus:ring-1 focus:ring-mid-green transition-all appearance-none text-forest/70">
                      <option>Select segment...</option>
                      <option>Fresh Produce</option>
                      <option>Fashion</option>
                      <option>Snacks</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-forest">Message</label>
                  <textarea rows={3} className="w-full px-4 py-3 bg-off-white border border-card-border rounded-xl focus:outline-none focus:border-mid-green focus:ring-1 focus:ring-mid-green transition-all resize-none" placeholder="How can we help you?"></textarea>
                </div>

                <button type="button" className="w-full mt-2 py-4 bg-forest hover:bg-mid-green text-cream font-semibold rounded-xl transition-colors">
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
