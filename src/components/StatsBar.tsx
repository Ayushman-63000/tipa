import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';

const stats = [
  {
    value: "3-6 mo",
    label: "Disintegration windows referenced by home and industrial composting standards",
  },
  {
    value: "4 standards",
    label: "ASTM D6400, ISO 17088, EN 13432, and TUV OK Compost Home",
  },
  {
    value: "Food + Fashion",
    label: "Segments served",
  },
  {
    value: "Global",
    label: "North America, Europe, APAC",
  },
];

export default function StatsBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="bg-forest py-20 border-t border-white/10" ref={ref}>
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {stats.map((stat, i) => (
            <motion.div key={i} variants={item} className="flex flex-col gap-3">
              <div className="text-4xl md:text-5xl font-serif text-soft-gold tracking-normal">
                {stat.value}
              </div>
              <div className="text-cream/70 text-sm md:text-base leading-relaxed">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 pt-8 border-t border-cream/10 text-center lg:text-left"
        >
          <p className="text-cream/40 text-xs tracking-wide">
            Claims depend on product structure, certification, local composting access, and market-specific labeling requirements.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
