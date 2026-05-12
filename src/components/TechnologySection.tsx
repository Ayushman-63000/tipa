import { motion } from 'framer-motion';
import { Check, X, ArrowRight } from 'lucide-react';

const comparison = [
  { feature: "Barrier & sealability", conventional: true, tipa: true },
  { feature: "Transparency", conventional: true, tipa: true },
  { feature: "Printability", conventional: true, tipa: true },
  { feature: "Machinery compatibility", conventional: true, tipa: true },
  { feature: "End-of-life", conventional: false, tipa: true, tipaText: "Compostable", convText: "Landfill / Incineration" },
];

const cycle = ["Film", "Package", "Consumer", "Compost", "Soil"];

export default function TechnologySection() {
  return (
    <section className="bg-cream py-24 lg:py-32" id="technology">
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
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-card-border">
            <div className="grid grid-cols-3 border-b border-cream/50 bg-off-white/50">
              <div className="p-6 md:p-8 flex items-center">
                <span className="font-serif font-semibold text-forest text-lg">Performance</span>
              </div>
              <div className="p-6 md:p-8 text-center border-l border-cream/50 flex flex-col justify-center items-center">
                <span className="font-sans text-sm text-forest/50 uppercase tracking-wider font-semibold mb-1">Conventional</span>
                <span className="font-serif text-xl text-forest/70">Plastic</span>
              </div>
              <div className="p-6 md:p-8 text-center border-l border-cream/50 bg-fresh-accent/10 flex flex-col justify-center items-center">
                <span className="font-sans text-sm text-mid-green uppercase tracking-wider font-bold mb-1">TIPA®</span>
                <span className="font-serif text-xl text-forest">Compostable</span>
              </div>
            </div>
            
            {comparison.map((item, i) => (
              <div key={i} className={`grid grid-cols-3 border-b border-cream/50 ${i === comparison.length - 1 ? 'border-b-0' : ''}`}>
                <div className="p-6 md:p-8 flex items-center">
                  <span className="font-sans font-medium text-forest/90">{item.feature}</span>
                </div>
                <div className="p-6 md:p-8 text-center border-l border-cream/50 flex items-center justify-center">
                  {item.feature === "End-of-life" ? (
                    <span className="text-sm font-medium text-red-800/70">{item.convText}</span>
                  ) : item.conventional ? (
                    <Check className="w-6 h-6 text-forest/40 mx-auto" />
                  ) : (
                    <X className="w-6 h-6 text-red-500/50 mx-auto" />
                  )}
                </div>
                <div className="p-6 md:p-8 text-center border-l border-cream/50 bg-fresh-accent/5 flex items-center justify-center">
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

        {/* Cycle Diagram */}
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-serif text-forest mb-12">The Circular Packaging Cycle</h3>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-10 right-10 h-0.5 bg-card-border -translate-y-1/2 z-0" />
            
            {cycle.map((step, i) => (
              <div key={i} className="flex flex-col md:flex-row items-center gap-4 relative z-10 w-full md:w-auto">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ delay: i * 0.2, duration: 0.5, type: "spring" }}
                  className={`w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center border-2 border-forest/10 bg-cream shadow-lg
                    ${i === cycle.length - 1 ? 'bg-mid-green text-cream border-mid-green' : 'text-forest'}`}
                >
                  <span className="font-serif text-lg font-medium">{step}</span>
                </motion.div>
                
                {i < cycle.length - 1 && (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 + 0.2, duration: 0.3 }}
                    className="md:hidden text-mid-green my-2"
                  >
                    <ArrowRight className="w-6 h-6 rotate-90 md:rotate-0" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
