import { useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

type Segment = {
  title: string;
  eyebrow: string;
  benefit: string;
  img: string;
  chips: string[];
};

const segments: Segment[] = [
  {
    title: "Fresh Produce",
    eyebrow: "Breathable films",
    benefit: "Micro-perforated compostable films designed to protect freshness while keeping the end-of-use path clear.",
    img: "/assets/tipa/Rogers-orchards-1920_s.jpg",
    chips: ["Freshness", "Clarity", "Retail-ready"],
  },
  {
    title: "Fashion & Apparel",
    eyebrow: "Protective polybags",
    benefit: "Retail-grade garment protection for brands replacing conventional polybags without compromising presentation.",
    img: "/assets/tipa/skotch-and-soda_1920.png",
    chips: ["Soft touch", "Transparent", "Brand-safe"],
  },
  {
    title: "Snacks",
    eyebrow: "High-barrier laminates",
    benefit: "Compostable structures built for crispness, seal strength, and shelf presence across snack formats.",
    img: "/assets/tipa/Forest-Gum-1-WIDE-1080-1.png",
    chips: ["Barrier", "Sealability", "Print quality"],
  },
  {
    title: "Dry Food",
    eyebrow: "Durable pouches",
    benefit: "Flexible packaging for grains, cereals, pasta, and pantry products that need dependable handling.",
    img: "/assets/tipa/all.jpg",
    chips: ["Durability", "Shelf-ready", "Machinery fit"],
  },
  {
    title: "Tea & Coffee",
    eyebrow: "Aroma protection",
    benefit: "Compostable high-barrier pouches that help preserve aroma, flavor, and shelf presence.",
    img: "/assets/tipa/Sachets-for-web-1.png",
    chips: ["Aroma", "Barrier", "Shelf finish"],
  },
  {
    title: "Baked Goods",
    eyebrow: "Clear bakery films",
    benefit: "Compostable films for baked goods where visibility, freshness, and shelf appeal carry the sale.",
    img: "/assets/tipa/Interpack-v2.1.webp",
    chips: ["Visibility", "Freshness", "Flexible formats"],
  },
];

export default function SegmentSelector() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeSegment = segments[activeIndex];

  const selectTab = (index: number, shouldFocus = false) => {
    const nextIndex = (index + segments.length) % segments.length;
    setActiveIndex(nextIndex);

    if (shouldFocus) {
      window.requestAnimationFrame(() => tabRefs.current[nextIndex]?.focus());
    }
  };

  const handleTabsKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      selectTab(activeIndex + 1, true);
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      selectTab(activeIndex - 1, true);
    }

    if (event.key === 'Home') {
      event.preventDefault();
      selectTab(0, true);
    }

    if (event.key === 'End') {
      event.preventDefault();
      selectTab(segments.length - 1, true);
    }
  };

  return (
    <section className="bg-cream py-24 lg:py-36 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8"
          >
            <span className="block text-mid-green font-mono text-xs font-semibold uppercase tracking-[0.24em] mb-5">
              Industry fit
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-forest leading-[0.95] tracking-normal text-balance">
              Engineered for the way your product moves.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-4 lg:pb-2"
          >
            <p className="text-forest/70 text-base md:text-lg leading-relaxed">
              Choose a segment to review packaging priorities, material fit, and commercial cues for each application.
            </p>
          </motion.div>
        </div>

        <div
          role="tablist"
          aria-label="Packaging industry segments"
          onKeyDown={handleTabsKeyDown}
          className="mb-8 flex gap-2 overflow-x-auto border-b border-forest/10 pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {segments.map((segment, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={segment.title}
                ref={(node) => {
                  tabRefs.current[index] = node;
                }}
                id={`segment-tab-${index}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="segment-panel"
                tabIndex={isActive ? 0 : -1}
                onClick={() => selectTab(index)}
                className={cn(
                  "shrink-0 rounded-lg border px-4 py-3 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fresh-accent focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
                  isActive
                    ? "border-mid-green bg-forest text-cream shadow-lg shadow-forest/10"
                    : "border-forest/10 bg-white text-forest/70 hover:border-mid-green/25 hover:bg-off-white hover:text-forest"
                )}
              >
                <span className="block whitespace-nowrap text-sm font-semibold">
                  {segment.title}
                </span>
                <span className={cn("mt-1 block whitespace-nowrap text-[11px] uppercase tracking-[0.18em]", isActive ? "text-cream/60" : "text-forest/40")}>
                  {segment.eyebrow}
                </span>
              </button>
            );
          })}
        </div>

        <div
          id="segment-panel"
          role="tabpanel"
          aria-labelledby={`segment-tab-${activeIndex}`}
          tabIndex={0}
          className="focus-visible:outline-none"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSegment.title}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8"
            >
              <div className="lg:col-span-8">
                <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-forest/10 bg-white shadow-[0_24px_70px_rgba(13,31,14,0.12)] md:min-h-[560px]">
                  <motion.img
                    src={activeSegment.img}
                    alt={activeSegment.title}
                    loading="lazy"
                    decoding="async"
                    initial={{ scale: 1.04 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/60 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-forest/20 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                    <span className="mb-3 inline-flex rounded-md border border-white/40 bg-white/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-mid-green backdrop-blur-md">
                      {activeSegment.eyebrow}
                    </span>
                    <h3 className="max-w-2xl text-4xl md:text-6xl font-serif leading-[0.98] tracking-normal text-cream">
                      {activeSegment.title}
                    </h3>
                  </div>
                </div>
              </div>

              <aside className="lg:col-span-4">
                <div className="flex h-full min-h-[360px] flex-col justify-between rounded-lg border border-forest/10 bg-white p-6 shadow-[0_18px_50px_rgba(13,31,14,0.08)] md:p-8">
                  <div>
                    <div className="mb-8 flex items-center justify-between text-xs font-mono uppercase tracking-[0.2em] text-forest/40">
                      <span>Segment</span>
                      <span>{String(activeIndex + 1).padStart(2, '0')} / {String(segments.length).padStart(2, '0')}</span>
                    </div>

                    <h4 className="text-3xl md:text-4xl font-serif leading-tight text-forest">
                      {activeSegment.title}
                    </h4>
                    <p className="mt-5 text-base leading-relaxed text-forest/70">
                      {activeSegment.benefit}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-2">
                      {activeSegment.chips.map((chip) => (
                        <span
                          key={chip}
                          className="rounded-md border border-mid-green/20 bg-fresh-accent/20 px-3 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-mid-green"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href="#contact"
                    className="group mt-10 inline-flex w-fit items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-mid-green transition-colors hover:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fresh-accent focus-visible:ring-offset-4 focus-visible:ring-offset-white"
                  >
                    Discuss segment
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </aside>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
