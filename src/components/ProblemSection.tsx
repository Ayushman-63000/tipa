import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Leaf } from 'lucide-react';

const cards = [
  {
    icon: ShieldCheck,
    title: "Barrier performance",
    desc: "Maintains optimal atmosphere for product freshness and integrity."
  },
  {
    icon: Clock,
    title: "Shelf-life protection",
    desc: "Competes with conventional plastic to prevent food waste."
  },
  {
    icon: Leaf,
    title: "Compostable end-of-use",
    desc: "Breaks down into biomass, water, and CO2, leaving no microplastics."
  }
];

export default function ProblemSection() {
  return (
    <section className="bg-cream py-24 lg:py-32" id="sustainability">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-forest leading-[1.1] text-balance">
              Flexible packaging has a <span className="italic text-mid-green">recycling problem.</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <p className="text-xl md:text-2xl text-forest/80 leading-relaxed font-sans text-balance">
              Thin films and multilayer flexible packaging are difficult and often uneconomical to recycle. TIPA focuses on flexible packaging that protects products while creating a better end-of-use path.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="bg-white p-10 rounded-lg border border-forest/10 hover:shadow-[0_24px_70px_rgba(13,31,14,0.09)] transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-fresh-accent/20 rounded-lg flex items-center justify-center mb-6">
                <card.icon className="w-6 h-6 text-mid-green" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif font-semibold text-forest mb-3">{card.title}</h3>
              <p className="text-forest/70 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
