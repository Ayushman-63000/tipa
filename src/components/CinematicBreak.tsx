import { motion } from 'framer-motion';

export default function CinematicBreak() {
  return (
    <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2000&auto=format&fit=crop" 
          alt="Leaves texture" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-forest/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/50 via-transparent to-forest/50" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="block text-fresh-accent font-mono text-sm tracking-widest uppercase mb-8">
            // TIPA circular packaging philosophy
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-cream leading-[1.2] italic font-light text-balance">
            "Packaging should protect what matters — without becoming permanent waste."
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
