import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const resources = [
  {
    tag: "Education",
    title: "What is sustainable packaging?",
    desc: "A comprehensive guide to understanding the true meaning of sustainability in the packaging industry.",
    date: "Oct 12, 2026"
  },
  {
    tag: "Comparison",
    title: "Biodegradable vs Compostable packaging",
    desc: "Clearing up the confusion between these two commonly misunderstood end-of-life claims.",
    date: "Sep 28, 2026"
  },
  {
    tag: "Guide",
    title: "How to compost TIPA packaging",
    desc: "Step-by-step instructions for consumers and businesses to properly compost our films and laminates.",
    date: "Sep 15, 2026"
  },
  {
    tag: "Innovation",
    title: "Flexible packaging technology",
    desc: "An inside look at the science and engineering behind our high-barrier compostable materials.",
    date: "Aug 30, 2026"
  }
];

export default function Resources() {
  return (
    <section className="bg-cream py-24 lg:py-32" id="resources">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-forest leading-tight">
              Resources & Insights
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <a href="#" className="inline-flex items-center gap-2 text-forest hover:text-mid-green transition-colors font-semibold uppercase tracking-wide text-sm">
              View all resources <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {resources.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-fresh-accent uppercase tracking-widest font-semibold">
                  {item.tag}
                </span>
                <span className="text-sm font-sans text-muted">
                  {item.date}
                </span>
              </div>
              <h3 className="text-2xl font-serif text-forest mb-3 group-hover:text-mid-green transition-colors">
                {item.title}
              </h3>
              <p className="text-forest/70 mb-6 leading-relaxed flex-grow">
                {item.desc}
              </p>
              <div className="inline-flex items-center gap-2 text-forest font-semibold tracking-wide uppercase text-sm mt-auto group-hover:text-mid-green transition-colors">
                Read more <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
              </div>
              
              <div className="h-px w-full bg-card-border mt-8 group-hover:bg-mid-green/30 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
