import { motion } from 'framer-motion';
import { Check, X, Film, PackageCheck, UserRound, Recycle, Sprout, type LucideIcon } from 'lucide-react';

const comparison = [
  { feature: "Barrier and sealability", conventional: true, tipa: true },
  { feature: "Transparency", conventional: true, tipa: true },
  { feature: "Printability", conventional: true, tipa: true },
  { feature: "Machinery compatibility", conventional: true, tipa: true },
  { feature: "End-of-use path", conventional: false, tipa: true, tipaText: "Certified compostable", convText: "Landfill or incineration" },
];

const storyStages = [
  {
    label: "Film",
    caption: "Flexible compostable material is selected for the product and line.",
    Icon: Film,
  },
  {
    label: "Package",
    caption: "The structure is formed, filled, sealed, and shipped.",
    Icon: PackageCheck,
  },
  {
    label: "Consumer",
    caption: "The pack is used, emptied, and sorted with clear instructions.",
    Icon: UserRound,
  },
  {
    label: "Compost",
    caption: "Certified material enters the right composting environment.",
    Icon: Recycle,
  },
  {
    label: "Soil",
    caption: "The end-of-use story returns to organic waste systems.",
    Icon: Sprout,
  },
] satisfies Array<{
  label: string;
  caption: string;
  Icon: LucideIcon;
}>;

function StatusCell({ active, text }: { active: boolean; text?: string }) {
  return (
    <td className="border-l border-forest/10 p-5 text-center md:p-7">
      <span className="inline-flex min-h-9 items-center justify-center gap-2 rounded-full px-3 text-sm font-semibold text-forest/75">
        {text ? (
          text
        ) : active ? (
          <>
            <Check className="h-5 w-5 text-mid-green" aria-hidden="true" />
            <span className="sr-only">Supported</span>
          </>
        ) : (
          <>
            <X className="h-5 w-5 text-clay" aria-hidden="true" />
            <span className="sr-only">Not supported</span>
          </>
        )}
      </span>
    </td>
  );
}

export default function TechnologySection() {
  return (
    <section className="bg-off-white py-24 lg:pt-28 lg:pb-32" id="technology">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-forest mb-6 leading-[1.1] tracking-normal text-balance"
          >
            Plastic-like performance. <br className="hidden md:block"/>
            <span className="italic text-mid-green">Compostable end-of-use.</span>
          </motion.h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-forest/70 md:text-lg">
            The strongest story is not just that a material composts. It is that the pack can still protect, seal, print, and run through existing packaging operations.
          </p>
        </div>

        <div className="mx-auto mb-28 max-w-5xl md:mb-32">
          <div className="overflow-hidden rounded-lg border border-forest/10 bg-white shadow-[0_24px_70px_rgba(13,31,14,0.08)]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[680px] border-collapse">
                <caption className="sr-only">
                  Packaging performance comparison between conventional plastic and TIPA compostable packaging.
                </caption>
                <thead>
                  <tr className="border-b border-forest/10 bg-mist">
                    <th scope="col" className="p-5 text-left font-serif text-lg font-semibold text-forest md:p-7">
                      Performance
                    </th>
                    <th scope="col" className="border-l border-forest/10 p-5 text-center md:p-7">
                      <span className="block text-sm font-semibold uppercase tracking-[0.16em] text-forest/50">Conventional</span>
                      <span className="mt-1 block font-serif text-xl text-forest/75">Plastic</span>
                    </th>
                    <th scope="col" className="border-l border-forest/10 bg-fresh-accent/20 p-5 text-center md:p-7">
                      <span className="block text-sm font-bold uppercase tracking-[0.16em] text-mid-green">TIPA</span>
                      <span className="mt-1 block font-serif text-xl text-forest">Compostable</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((item) => (
                    <tr key={item.feature} className="border-b border-forest/10 last:border-b-0">
                      <th scope="row" className="p-5 text-left font-sans font-medium text-forest/90 md:p-7">
                        {item.feature}
                      </th>
                      <StatusCell active={item.conventional} text={item.convText} />
                      <StatusCell active={item.tipa} text={item.tipaText} />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl text-center">
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="mb-10 text-2xl font-serif text-forest"
          >
            The circular packaging cycle
          </motion.h3>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-5 md:gap-5">
            {storyStages.map(({ label, caption, Icon }, index) => (
              <motion.article
                key={label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: index * 0.08, duration: 0.45, ease: "easeOut" }}
                className="flex h-full flex-col items-center rounded-lg border border-forest/10 bg-white p-6 text-center shadow-[0_18px_44px_rgba(13,31,14,0.06)]"
              >
                <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-forest/10 bg-mist text-mid-green">
                  <Icon className="h-9 w-9" strokeWidth={1.65} aria-hidden="true" />
                </div>
                <h4 className="font-serif text-xl font-semibold leading-tight text-forest">{label}</h4>
                <p className="mt-3 text-sm leading-relaxed text-forest/65">{caption}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
