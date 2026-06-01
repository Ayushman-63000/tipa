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
    <section className="relative flex min-h-[calc(100svh-56px)] w-full items-center justify-center overflow-hidden bg-forest">
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          preload="metadata"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        >
          <source src="/banner-nov-25-s.webm" type="video/webm" />
        </video>
        
        <div className="absolute inset-0 bg-forest/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/60 via-transparent to-forest/90" />
      </div>

      <div className="container relative z-20 mx-auto flex min-h-[calc(100svh-56px)] flex-col justify-between px-5 pb-10 pt-28 md:px-8 md:pt-32 lg:pb-12">
        
        <motion.div 
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="flex w-full items-start justify-between gap-6 text-cream/85"
        >
          <span className="font-mono text-xs tracking-[0.2em] uppercase font-bold drop-shadow">
            TIPA Corp
          </span>
          <span className="max-w-xs text-right font-mono text-xs uppercase tracking-[0.2em] opacity-80 drop-shadow">
            Compostable flexible packaging
          </span>
        </motion.div>

        <motion.h1 
          className="mt-10 flex w-full flex-col items-center justify-center text-center font-serif text-cream"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.span
            variants={wordVariants}
            className="block text-4xl leading-none tracking-normal drop-shadow-2xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Packaging that
          </motion.span>
          
          <div className="relative mb-2 mt-3 overflow-visible">
            <motion.span
              variants={wordVariants}
              className="block text-5xl font-light italic leading-[0.92] tracking-normal text-soft-gold drop-shadow-2xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[8rem]"
            >
              performs like plastic
            </motion.span>
            <motion.div 
              initial={{ scaleX: 0 }} 
              animate={{ scaleX: 1 }} 
              transition={{ delay: 1, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-4 left-1/4 right-1/4 h-[1px] bg-soft-gold/30 origin-center hidden md:block" 
            />
          </div>
          
          <motion.span
            variants={wordVariants}
            className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-3xl leading-tight tracking-normal drop-shadow-2xl sm:text-4xl md:mt-5 md:text-5xl lg:text-6xl"
          >
            and returns <span className="font-bold text-fresh-accent">-</span> to nature.
          </motion.span>
        </motion.h1>

        <motion.div 
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end w-full mt-auto pb-4"
        >
          <div className="md:col-span-4 flex items-center gap-4 text-cream/70">
            <div className="h-2 w-2 rounded-full bg-fresh-accent" aria-hidden="true" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-semibold">Compostable materials</span>
          </div>

          <div className="md:col-span-8 flex flex-col sm:flex-row justify-end gap-6 items-center">
             <p className="max-w-sm text-center font-sans text-sm leading-relaxed text-cream/90 drop-shadow-md sm:text-right md:text-base">
              Fully compostable flexible packaging solutions for food and fashion, engineered for a better end-of-use cycle.
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
