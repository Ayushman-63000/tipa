import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    title: "TIPA CLEAR",
    tag: "Transparent Films",
    desc: "High clarity compostable films for fresh produce and apparel.",
    img: "/assets/tipa/Tipa-FlyLow-5083-Gray-LR.jpg"
  },
  {
    title: "TIPA MET",
    tag: "High-Barrier",
    desc: "Metallized compostable laminates for snacks and coffee.",
    img: "/assets/tipa/823-Paper-white-MET-megamenu-1.png"
  },
  {
    title: "TIPA PAPER",
    tag: "Paper-Based",
    desc: "Compostable paper packaging with barrier properties.",
    img: "/assets/tipa/Sachets-for-web-1.png"
  },
  {
    title: "TIPA COLOR",
    tag: "Printable",
    desc: "Vibrant, high-quality printable packaging films.",
    img: "/assets/tipa/chips-gray.png"
  },
  {
    title: "Labels",
    tag: "Accessories",
    desc: "Fruit and vegetable labels that break down in compost.",
    img: "/assets/tipa/reel-labels-gray-web.png"
  },
  {
    title: "Zippers",
    tag: "Closures",
    desc: "Resealable compostable closures for extended freshness.",
    img: "/assets/tipa/Reels-of-Zippers_s-2.jpg"
  }
];

function ProductCard({ product, index }: { product: any, index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Create a parallax effect moving the image slightly as we scroll
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden rounded-2xl bg-white aspect-[4/5] md:aspect-square flex flex-col justify-end cursor-pointer border border-card-border"
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <motion.img 
          style={{ y, scale: 1.1 }}
          src={product.img} 
          alt={product.title} 
          className="w-full h-[120%] object-cover origin-center transition-transform duration-700 ease-out group-hover:scale-[1.15]"
        />
        {/* Premium green filter overlay */}
        <div className="absolute inset-0 bg-forest/50 mix-blend-multiply group-hover:bg-forest/40 transition-colors duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/60 to-transparent opacity-90 transition-opacity duration-500" />
      </div>
      
      <div className="relative z-10 p-8 flex flex-col h-full justify-end transform transition-transform duration-500 ease-out translate-y-8 group-hover:translate-y-0">
        <span className="text-fresh-accent font-mono text-xs uppercase tracking-widest mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 drop-shadow-sm">
          {product.tag}
        </span>
        <h3 className="text-3xl font-serif text-cream mb-3 drop-shadow-md">{product.title}</h3>
        
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
          <p className="text-cream/90 text-sm mb-6 line-clamp-2 drop-shadow-sm">
            {product.desc}
          </p>
          <div className="inline-flex items-center gap-2 text-soft-gold text-sm font-semibold tracking-wide uppercase">
            View product <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProductPortfolio() {
  return (
    <section className="bg-off-white py-24 lg:py-32" id="solutions">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto overflow-hidden">
          <motion.h2 
            initial={{ opacity: 0, y: "100%" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-7xl font-serif text-forest mb-6 leading-[0.9] tracking-tighter"
          >
            COMPOSTABLE <span className="italic font-light">SOLUTIONS</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-forest/70 font-sans"
          >
            Films, laminates, labels, zippers, pouches, reels, and custom applications.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <ProductCard key={i} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
