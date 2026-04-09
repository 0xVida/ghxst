import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden bg-background">
      <div className="absolute inset-0 dot-matrix opacity-30 z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background z-0" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto px-6 lg:px-8 text-center relative z-10"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/15 rounded-full blur-[150px] pointer-events-none" />

        <h2 className="font-display text-5xl sm:text-6xl md:text-[7rem] font-bold text-foreground leading-[0.95] tracking-tighter mb-8 relative z-10">
          Ready to Go <br />
          <span className="gradient-text">Private?</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-lg sm:text-xl font-light mb-12 leading-relaxed relative z-10">
          Join the growing movement using Ghxst for confidential infrastructure on
          Stellar. No compromises.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
          <a
            href="#"
            className="group relative inline-flex items-center justify-center gap-2 px-10 py-5 text-sm font-semibold rounded-none bg-foreground text-background hover:bg-white transition-all overflow-hidden"
          >
            Launch Mainnet
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-10 py-5 text-sm font-medium rounded-none border border-border text-foreground hover:bg-secondary/10 hover:border-secondary/50 transition-all font-display uppercase tracking-widest"
          >
            Join Discord
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;

