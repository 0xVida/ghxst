import { ArrowUpRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { WireframeSphere } from "./WireframeGeometry";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-background mix-blend-multiply z-0" />
      <div className="absolute inset-0 dot-matrix opacity-20 z-0" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full bg-secondary/10 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px]"
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-0 opacity-50 pointer-events-none mix-blend-screen">
        <div className="w-full max-w-[800px] aspect-square flex items-center justify-center opacity-70">
          <WireframeSphere />
        </div>
      </div>

      <div className="w-full max-w-4xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center relative z-10 pt-32 pb-20">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] font-display tracking-tighter text-foreground mb-8">
            <span className="font-light text-transparent bg-clip-text bg-gradient-to-br from-foreground to-foreground/60">
              Absolute
            </span>
            <span className="font-bold"> Privacy </span> <br className="hidden sm:block" />
            <span className="font-light text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary relative inline-block drop-shadow-[0_0_30px_rgba(160,32,240,0.3)]">
              on Stellar
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-md sm:text-lg text-white/90 max-w-2xl font-light leading-relaxed tracking-wide"
        >
          The biggest financial rail in the world is public. <br className="hidden md:block" />
          Ghxst uses zero-knowledge cryptography to make it private, verifiable and compliance-ready.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row justify-center gap-4 pt-10 w-full sm:w-auto"
        >
          <a
            href="#"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold rounded-md bg-foreground text-background hover:bg-foreground/90 transition-all overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium rounded-md border border-border/50 text-foreground hover:bg-white/5 transition-colors"
          >
            Read Docs
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16 pt-16 md:pt-20 w-full max-w-3xl border-t border-border/50 mt-16"
        >
          <div>
            <div className="text-2xl font-display font-medium text-foreground tracking-tight">$12M+</div>
            <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">Secured</div>
          </div>
          <div>
            <div className="text-2xl font-display font-medium text-foreground tracking-tight">&lt;2s</div>
            <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">Finality</div>
          </div>
          <div>
            <div className="text-2xl font-display font-medium text-foreground tracking-tight">Zero</div>
            <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">Trace</div>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default HeroSection;
