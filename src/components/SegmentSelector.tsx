import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const segments = [
  {
    title: "Fresh Produce",
    benefit: "Extended shelf life with micro-perforated breathable films.",
    img: "/assets/tipa/Compostable-Hippie-Asparagus-1x1-1-e1745388794726.png",
    colSpan: "lg:col-span-8",
  },
  {
    title: "Fashion & Apparel",
    benefit: "Premium protective polybags that return to nature.",
    img: "/assets/tipa/skotch-and-soda_1920.png",
    colSpan: "lg:col-span-4",
  },
  {
    title: "Snacks",
    benefit: "High-barrier protection for crispness and flavor.",
    img: "/assets/tipa/Group-10.jpg",
    colSpan: "lg:col-span-4",
  },
  {
    title: "Dry Food",
    benefit: "Durable laminates for grains, pasta, and cereals.",
    img: "/assets/tipa/Group-11.jpg",
    colSpan: "lg:col-span-4",
  },
  {
    title: "Tea & Coffee",
    benefit: "Aroma-sealing metallized compostable pouches.",
    img: "/assets/tipa/Group-4.jpg",
    colSpan: "lg:col-span-4",
  },
  {
    title: "Baked Goods",
    benefit: "Clear, breathable films for artisanal bakeries.",
    img: "/assets/tipa/Interpack-v2.1.webp",
    colSpan: "lg:col-span-12",
  }
];

function SegmentCard({ segment, index }: { segment: any, index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative rounded-2xl overflow-hidden cursor-pointer ${segment.colSpan} md:col-span-1 lg:${segment.colSpan}`}
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <motion.img 
          style={{ y, scale: 1.2 }}
          src={segment.img} 
          alt={segment.title} 
          className="w-full h-[130%] object-cover origin-center transition-transform duration-1000 ease-in-out group-hover:scale-[1.25]"
        />
        {/* Premium green filter overlay */}
        <div className="absolute inset-0 bg-forest/50 mix-blend-multiply group-hover:bg-forest/40 transition-colors duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <div className="transform transition-transform duration-500 ease-out translate-y-6 group-hover:translate-y-0 relative z-10">
          <h3 className="text-3xl md:text-4xl font-serif text-cream mb-2 tracking-tight drop-shadow-md">{segment.title}</h3>
          <p className="text-cream/90 text-sm mb-4 line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 drop-shadow-sm">
            {segment.benefit}
          </p>
          <div className="inline-flex items-center gap-2 text-fresh-accent text-sm font-semibold tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150 drop-shadow-sm">
            Explore segment <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function SegmentSelector() {
  return (
    <section className="bg-forest py-24 lg:py-40 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl overflow-hidden"
          >
            <motion.h2 
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl lg:text-8xl font-serif text-cream mb-6 leading-[0.85] tracking-tighter"
            >
              ENGINEERED FOR <br/>
              <span className="italic text-fresh-accent font-light">YOUR INDUSTRY.</span>
            </motion.h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <a href="#" className="inline-flex items-center gap-2 text-soft-gold hover:text-white transition-colors font-semibold uppercase tracking-wide text-sm">
              View all segments <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[400px]">
          {segments.map((segment, i) => (
            <SegmentCard key={i} segment={segment} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
