import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: { y: "120%", opacity: 0, rotate: 2 },
    show: { 
      y: 0, 
      opacity: 1, 
      rotate: 0,
      transition: { 
        duration: 1.4, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    },
  };

  const fadeUp: Variants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 1, ease: "easeOut", delay: 1.2 } },
  };

  return (
    <section className="relative w-full h-[100vh] min-h-[800px] flex items-center justify-center overflow-hidden bg-forest">
      {/* User provided WebM Background Video */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        >
          <source src="/banner-nov-25-s.webm" type="video/webm" />
        </video>
        
        {/* Soft radial mask to keep focus on text while letting video shine */}
        <div className="absolute inset-0 bg-forest/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/60 via-transparent to-forest/90" />
      </div>

      <div className="container relative z-20 mx-auto px-4 md:px-8 h-full flex flex-col justify-between pt-32 pb-12">
        
        {/* Top Info Bar */}
        <motion.div 
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="flex justify-between items-start w-full text-cream/90 mix-blend-overlay"
        >
          <span className="font-mono text-xs tracking-[0.2em] uppercase font-bold">
            // TIPA Corp
          </span>
          <span className="font-mono text-xs tracking-[0.2em] uppercase max-w-xs text-right opacity-70">
            A new standard for packaging
          </span>
        </motion.div>

        {/* Unique & Bold Typography Vibe */}
        <motion.div 
          className="flex flex-col items-center justify-center w-full mt-10 text-cream"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* Top Line */}
          <div className="overflow-visible mb-2">
            <motion.h1 variants={wordVariants} className="font-serif text-[8vw] md:text-[6vw] leading-[0.9] tracking-tight m-0 p-0 text-center drop-shadow-2xl">
              PACKAGING THAT
            </motion.h1>
          </div>
          
          {/* Middle Line - Massive Italics */}
          <div className="overflow-visible mb-2 relative">
            <motion.h1 variants={wordVariants} className="font-serif text-[12vw] md:text-[10vw] leading-[0.8] tracking-tighter m-0 p-0 text-center italic font-light text-soft-gold drop-shadow-2xl pt-4 pb-6">
              performs like plastic
            </motion.h1>
            {/* Decorative Element */}
            <motion.div 
              initial={{ scaleX: 0 }} 
              animate={{ scaleX: 1 }} 
              transition={{ delay: 1, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-4 left-1/4 right-1/4 h-[1px] bg-soft-gold/30 origin-center hidden md:block" 
            />
          </div>
          
          {/* Bottom Line */}
          <div className="overflow-visible mt-2 md:mt-6">
            <motion.h1 variants={wordVariants} className="font-serif text-[7vw] md:text-[5vw] leading-[0.9] tracking-tight m-0 p-0 text-center flex items-center justify-center gap-6 drop-shadow-2xl">
              AND RETURNS <span className="text-fresh-accent font-bold">&mdash;</span> TO NATURE.
            </motion.h1>
          </div>
        </motion.div>

        {/* Bottom Bar with CTA */}
        <motion.div 
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end w-full mt-auto pb-4"
        >
          <div className="md:col-span-4 flex items-center gap-4 text-cream/70">
            <div className="w-2 h-2 bg-fresh-accent rounded-full animate-pulse" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-semibold">Award-Winning Materials</span>
          </div>

          <div className="md:col-span-8 flex flex-col sm:flex-row justify-end gap-6 items-center">
             <p className="text-sm md:text-base text-cream/90 leading-relaxed font-sans max-w-sm text-right drop-shadow-md">
              Fully compostable flexible packaging solutions for food and fashion — engineered for a better end-of-use cycle.
            </p>
            <a href="#solutions" className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-cream text-forest font-bold rounded-full overflow-hidden transition-all duration-300 shadow-xl hover:shadow-fresh-accent/20">
              <span className="relative z-10 flex items-center gap-2">Explore <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" /></span>
              <div className="absolute inset-0 bg-fresh-accent transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-out z-0" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
