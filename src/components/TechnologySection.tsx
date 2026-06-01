import { motion, useReducedMotion } from 'framer-motion';
import { Check, X, Film, PackageCheck, UserRound, Recycle, Sprout, type LucideIcon } from 'lucide-react';

const comparison = [
  { feature: "Barrier & sealability", conventional: true, tipa: true },
  { feature: "Transparency", conventional: true, tipa: true },
  { feature: "Printability", conventional: true, tipa: true },
  { feature: "Machinery compatibility", conventional: true, tipa: true },
  { feature: "End-of-life", conventional: false, tipa: true, tipaText: "Compostable", convText: "Landfill / Incineration" },
];

const storyStages = [
  {
    label: "Film",
    caption: "Flexible compostable material.",
    Icon: Film,
  },
  {
    label: "Package",
    caption: "Formed to protect products.",
    Icon: PackageCheck,
  },
  {
    label: "Consumer",
    caption: "Used, emptied, and collected.",
    Icon: UserRound,
  },
  {
    label: "Compost",
    caption: "Breaks down with organic waste.",
    Icon: Recycle,
  },
  {
    label: "Soil",
    caption: "Returns nutrients to the earth.",
    Icon: Sprout,
  },
] satisfies Array<{
  label: string;
  caption: string;
  Icon: LucideIcon;
}>;

export default function TechnologySection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-off-white py-24 lg:pt-28 lg:pb-32" id="technology">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-forest mb-6 leading-[1.1] text-balance"
          >
            Plastic-like performance. <br className="hidden md:block"/>
            <span className="italic text-mid-green">Compostable end-of-use.</span>
          </motion.h2>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto mb-32">
          <div className="bg-white rounded-lg shadow-[0_24px_70px_rgba(13,31,14,0.08)] overflow-hidden border border-forest/10">
            <div className="grid grid-cols-3 border-b border-forest/10 bg-cream/60">
              <div className="p-6 md:p-8 flex items-center">
                <span className="font-serif font-semibold text-forest text-lg">Performance</span>
              </div>
              <div className="p-6 md:p-8 text-center border-l border-forest/10 flex flex-col justify-center items-center">
                <span className="font-sans text-sm text-forest/50 uppercase tracking-wider font-semibold mb-1">Conventional</span>
                <span className="font-serif text-xl text-forest/70">Plastic</span>
              </div>
              <div className="p-6 md:p-8 text-center border-l border-forest/10 bg-fresh-accent/20 flex flex-col justify-center items-center">
                <span className="font-sans text-sm text-mid-green uppercase tracking-wider font-bold mb-1">TIPA®</span>
                <span className="font-serif text-xl text-forest">Compostable</span>
              </div>
            </div>
            
            {comparison.map((item, i) => (
              <div key={i} className={`grid grid-cols-3 border-b border-forest/10 ${i === comparison.length - 1 ? 'border-b-0' : ''}`}>
                <div className="p-6 md:p-8 flex items-center">
                  <span className="font-sans font-medium text-forest/90">{item.feature}</span>
                </div>
                <div className="p-6 md:p-8 text-center border-l border-forest/10 flex items-center justify-center">
                  {item.feature === "End-of-life" ? (
                    <span className="text-sm font-medium text-red-800/70">{item.convText}</span>
                  ) : item.conventional ? (
                    <Check className="w-6 h-6 text-forest/40 mx-auto" />
                  ) : (
                    <X className="w-6 h-6 text-red-500/50 mx-auto" />
                  )}
                </div>
                <div className="p-6 md:p-8 text-center border-l border-forest/10 bg-fresh-accent/10 flex items-center justify-center">
                  {item.feature === "End-of-life" ? (
                    <span className="text-sm font-bold text-mid-green">{item.tipaText}</span>
                  ) : item.tipa ? (
                    <Check className="w-6 h-6 text-mid-green mx-auto" />
                  ) : (
                    <X className="w-6 h-6 text-red-500 mx-auto" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cycle Story */}
        <div className="mx-auto max-w-6xl text-center">
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="mb-10 text-2xl font-serif text-forest"
          >
            The Circular Packaging Cycle
          </motion.h3>

          <div className="relative overflow-visible py-3 md:py-6">
            <div className="absolute left-[10%] right-[10%] top-[4.7rem] hidden h-px bg-forest/10 md:block" />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-5 md:gap-4 lg:gap-8">
              {storyStages.map(({ label, caption, Icon }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ delay: index * 0.08, duration: 0.45, ease: "easeOut" }}
                  className="group relative flex flex-col items-center"
                >
                  <motion.button
                    type="button"
                    aria-label={`${label}. ${caption}`}
                    whileHover={reduceMotion ? undefined : { y: -6 }}
                    whileFocus={reduceMotion ? undefined : { y: -6 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="relative z-10 flex h-32 w-32 items-center justify-center rounded-full border border-forest/10 bg-[#F1F1EE] text-[#5B211B] shadow-[0_18px_44px_rgba(13,31,14,0.07)] outline-none transition-colors duration-300 hover:bg-[#F5F0E8] focus-visible:ring-2 focus-visible:ring-[#5B211B]/25 md:h-36 md:w-36"
                  >
                    <span className="absolute inset-3 rounded-full border border-white/70" />
                    <span className="absolute flex items-center justify-center transition-all duration-300 group-hover:-translate-y-3 group-hover:scale-75 group-hover:opacity-0 group-focus-within:-translate-y-3 group-focus-within:scale-75 group-focus-within:opacity-0">
                      <Icon className="h-14 w-14" strokeWidth={1.65} />
                    </span>
                    <span className="absolute inset-0 flex scale-95 flex-col items-center justify-center px-5 text-center opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 group-focus-within:scale-100 group-focus-within:opacity-100">
                      <span className="font-serif text-xl font-semibold leading-tight text-[#5B211B]">{label}</span>
                      <span className="mt-2 max-w-[9rem] text-xs leading-snug text-forest/62">{caption}</span>
                    </span>
                  </motion.button>

                  <div className="mt-5 flex items-center gap-2 text-[#5B211B] md:hidden">
                    <span className="font-serif text-lg font-semibold">{label}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
