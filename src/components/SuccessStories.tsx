import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const stories = [
  {
    brand: "Kencko",
    region: "North America | Food",
    result: "Transitioned 100% of their instant smoothie packets to TIPA compostable films.",
    img: "/assets/tipa/kencko-1-1920.png",
    href: "https://tipa-corp.com/success-stories/kencko-revolutionizing-healthy-eating-with-compostable-packaging/"
  },
  {
    brand: "Alpine Fresh",
    region: "Global | Fresh Produce",
    result: "Extended shelf life of fresh asparagus while eliminating conventional plastic bags.",
    img: "/assets/tipa/export-fresh-1080-1-1.png",
    href: "https://tipa-corp.com/success-stories/alpine-fresh-a-bold-step-toward-the-future-of-packaging/"
  },
  {
    brand: "Wyld",
    region: "USA | Edibles",
    result: "Pioneered sustainable packaging in the cannabis sector with high-barrier laminates.",
    img: "/assets/tipa/WYLD_CBD_01-light-gray.png",
    href: "https://tipa-corp.com/success-stories/wyld/"
  }
];

export default function SuccessStories() {
  return (
    <section className="bg-white py-24 lg:py-36" id="stories">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col justify-between mb-16 overflow-hidden">
          <motion.h2 
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-forest leading-[0.95] tracking-normal"
          >
            Brands proving <br/>
            <span className="italic text-mid-green font-light">compostable</span> at scale
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mt-8 self-end"
          >
            <a href="https://tipa-corp.com/success-stories/" className="inline-flex items-center gap-2 text-forest hover:text-mid-green transition-colors font-semibold uppercase tracking-wide text-sm">
              View all stories <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {stories.map((story, i) => (
            <motion.a
              key={i}
              href={story.href}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col overflow-hidden rounded-lg border border-forest/10 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-mid-green/25 hover:shadow-[0_24px_70px_rgba(13,31,14,0.1)]"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={story.img} 
                  alt={story.brand} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover origin-center transition-transform duration-1000 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white/40 to-transparent" />
              </div>
              <div className="p-7 md:p-8 flex flex-col flex-grow">
                <span className="text-xs font-mono text-mid-green uppercase tracking-widest mb-4">
                  {story.region}
                </span>
                <h3 className="text-3xl font-serif text-forest mb-4 tracking-normal">{story.brand}</h3>
                <p className="text-forest/70 mb-8 flex-grow leading-relaxed font-sans">
                  {story.result}
                </p>
                <div className="inline-flex items-center gap-2 text-mid-green font-semibold tracking-wide uppercase text-sm mt-auto">
                  Read story <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
