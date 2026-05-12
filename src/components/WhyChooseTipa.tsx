import { motion } from 'framer-motion';
import { Leaf, Recycle, Shield, Users } from 'lucide-react';

const reasons = [
  {
    icon: Leaf,
    title: "Certified Compostable",
    desc: "Fully certified by globally recognized compost standards."
  },
  {
    icon: Recycle,
    title: "Supply-Chain Compatible",
    desc: "Runs seamlessly on conventional plastic packaging machinery."
  },
  {
    icon: Shield,
    title: "High Performance",
    desc: "High barrier, high clarity, and strong sealing capabilities."
  },
  {
    icon: Users,
    title: "Expert Transition Support",
    desc: "Dedicated R&D team to guide your switch from conventional plastic."
  }
];

export default function WhyChooseTipa() {
  return (
    <section className="bg-forest py-24 lg:py-32 overflow-hidden relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#F5F0E8 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-cream mb-6"
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
              className="group bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-fresh-accent/50 hover:bg-white/10 transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle green glow on hover */}
              <div className="absolute inset-0 bg-fresh-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl rounded-full scale-150 transform -translate-y-1/2" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 text-fresh-accent group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif text-cream mb-3">{reason.title}</h3>
                <p className="text-cream/70 leading-relaxed text-sm">
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
