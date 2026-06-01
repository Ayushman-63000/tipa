import { motion } from 'framer-motion';
import { Leaf, Recycle, Shield, Users } from 'lucide-react';

const reasons = [
  {
    icon: Leaf,
    title: "Certified Compostable",
    desc: "Messaging is grounded in recognized compostability standards and market-specific certification."
  },
  {
    icon: Recycle,
    title: "Supply-Chain Compatible",
    desc: "Designed to run on standard flexible-packaging machinery without unusual line changes."
  },
  {
    icon: Shield,
    title: "High Performance",
    desc: "Built around barrier, clarity, seal strength, shelf presence, and product protection."
  },
  {
    icon: Users,
    title: "Expert Transition Support",
    desc: "Dedicated R&D team to guide your switch from conventional plastic."
  }
];

export default function WhyChooseTipa() {
  return (
    <section className="bg-cream py-24 lg:py-32 overflow-hidden relative">
      <div className="absolute inset-0 opacity-50 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(13,31,14,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(13,31,14,0.05) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-forest mb-6"
          >
            Why partner with TIPA?
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group bg-white p-8 rounded-lg border border-forest/10 hover:border-mid-green/25 hover:shadow-[0_24px_70px_rgba(13,31,14,0.1)] transition-all duration-300 relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="w-12 h-12 bg-fresh-accent/20 rounded-lg flex items-center justify-center mb-6 text-mid-green group-hover:scale-105 transition-transform duration-300">
                  <reason.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif text-forest mb-3">{reason.title}</h3>
                <p className="text-forest/70 leading-relaxed text-sm">
                  {reason.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
