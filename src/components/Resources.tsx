import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const resources = [
  {
    tag: "Education",
    title: "What is sustainable packaging?",
    desc: "A practical guide to evaluating materials, end-of-use claims, and packaging tradeoffs.",
    href: "https://tipa-corp.com/sustainable-packaging/"
  },
  {
    tag: "Comparison",
    title: "Biodegradable vs Compostable packaging",
    desc: "A clear look at common end-of-life terms and what buyers should verify before making claims.",
    href: "https://tipa-corp.com/biodegradable-packaging/"
  },
  {
    tag: "Guide",
    title: "How to compost TIPA packaging",
    desc: "Consumer and business guidance for handling compostable flexible packaging after use.",
    href: "https://tipa-corp.com/sustainability/"
  },
  {
    tag: "Technology",
    title: "Flexible packaging technology",
    desc: "An overview of barrier, seal, clarity, and machinery considerations for compostable films.",
    href: "https://tipa-corp.com/technology/"
  }
];

export default function Resources() {
  return (
    <section className="bg-cream py-24 lg:py-32" id="resources">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-forest leading-tight">
              Packaging Resources
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <a href="https://tipa-corp.com/blog/" className="inline-flex items-center gap-2 text-forest hover:text-mid-green transition-colors font-semibold uppercase tracking-wide text-sm">
              View all resources <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-forest/10">
          {resources.map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group flex flex-col border-b border-forest/10 py-8 transition-colors hover:bg-white/40 md:px-6"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-mono text-mid-green uppercase tracking-widest font-semibold">
                  {item.tag}
                </span>
                <span className="font-mono text-xs text-forest/40">
                  {String(i + 1).padStart(2, '0')}
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
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
