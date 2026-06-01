import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

type Product = {
  title: string;
  tag: string;
  desc: string;
  img: string;
};

const products: Product[] = [
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

function ProductCard({ product, index }: { product: Product, index: number }) {
  const ref = useRef(null);
  const isFeatured = index === 0;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], isFeatured ? ["-4%", "4%"] : ["-6%", "6%"]);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "group overflow-hidden rounded-lg border border-forest/10 bg-white shadow-[0_18px_50px_rgba(13,31,14,0.08)] transition-all duration-500 hover:-translate-y-1 hover:border-mid-green/25 hover:shadow-[0_24px_70px_rgba(13,31,14,0.12)]",
        isFeatured && "lg:col-span-2 lg:grid lg:grid-cols-[1.15fr_0.85fr]"
      )}
    >
      <div className={cn("relative overflow-hidden bg-cream", isFeatured ? "min-h-[360px] lg:min-h-full" : "aspect-[4/3]")}>
        <motion.img
          style={{ y, scale: 1.06 }}
          src={product.img}
          alt={product.title}
          className="absolute inset-0 h-[112%] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.09]"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white/70 to-transparent" />
      </div>

      <div className={cn("flex flex-col p-6 md:p-7", isFeatured && "lg:p-10")}>
        <span className="mb-4 w-fit rounded-md border border-mid-green/20 bg-fresh-accent/20 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-mid-green">
          {product.tag}
        </span>
        <h3 className={cn("font-serif leading-tight tracking-tight text-forest", isFeatured ? "text-4xl md:text-5xl" : "text-3xl")}>
          {product.title}
        </h3>
        <p className="mt-4 flex-grow text-sm leading-relaxed text-forest/70 md:text-base">
          {product.desc}
        </p>
        <a
          href="#contact"
          className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-mid-green transition-colors hover:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fresh-accent focus-visible:ring-offset-4 focus-visible:ring-offset-white"
        >
          View product
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </motion.article>
  );
}

export default function ProductPortfolio() {
  return (
    <section className="bg-off-white py-24 lg:pt-32 lg:pb-36" id="solutions">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-14 grid grid-cols-1 gap-8 md:mb-20 lg:grid-cols-12 lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8"
          >
            <span className="mb-5 block font-mono text-xs font-semibold uppercase tracking-[0.24em] text-mid-green">
              Compostable portfolio
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-forest leading-[0.95] tracking-tight text-balance">
              Materials with the clarity to be seen.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="text-lg leading-relaxed text-forest/70 lg:col-span-4"
          >
            Films, laminates, labels, zippers, pouches, reels, and custom applications presented with product detail first.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <ProductCard key={product.title} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
