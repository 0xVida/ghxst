import { motion } from "framer-motion";
import { ReactNode } from "react";

const geometricIcons = {
  star: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" className="w-8 h-8">
      <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9Z" className="text-secondary group-hover:text-primary transition-colors duration-500" />
    </svg>
  ),
  crosshair: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" className="w-8 h-8">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 2V6M12 18V22M2 12H6M18 12H22" className="text-secondary group-hover:text-primary transition-colors duration-500" />
    </svg>
  ),
  abstractX: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-8 h-8">
      <path d="M8 8l8 8M16 8l-8 8" />
      <path d="M3 12c0-4.97 4.03-9 9-9s9 4.03 9 9-4.03 9-9 9-9-4.03-9-9z" className="text-secondary group-hover:text-primary transition-colors duration-500" />
    </svg>
  ),
  squircle: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" className="w-8 h-8">
      <rect x="4" y="4" width="16" height="16" rx="6" ry="6" />
      <path d="M10 10l4 4M14 10l-4 4" className="text-secondary group-hover:text-primary transition-colors duration-500" />
    </svg>
  ),
  grid: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" className="w-8 h-8">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  ),
  orbit: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" className="w-8 h-8">
      <circle cx="12" cy="12" r="3" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(45 12 12)" className="text-secondary group-hover:text-primary transition-colors duration-500" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-45 12 12)" className="text-secondary/50 group-hover:text-primary/50 transition-colors duration-500" />
    </svg>
  ),
};

const features = [
  {
    icon: geometricIcons.star,
    title: "Zero-Knowledge",
    description: "Transaction amounts and addresses hidden using ZK-SNARKs. Full verifiability, zero exposure.",
  },
  {
    icon: geometricIcons.crosshair,
    title: "Stellar Speed",
    description: "Private transactions settle in under 5 seconds on Stellar's consensus protocol.",
  },
  {
    icon: geometricIcons.squircle,
    title: "Selective Disclosure",
    description: "Choose who sees what. Compliance-ready privacy with granular access controls.",
  },
  {
    icon: geometricIcons.abstractX,
    title: "Non-Custodial",
    description: "Your keys, your funds. Ghxst never touches your assets — ever.",
  },
  {
    icon: geometricIcons.grid,
    title: "Cross-Border Ready",
    description: "Send private payments globally using Stellar's multi-currency rails.",
  },
  {
    icon: geometricIcons.orbit,
    title: "Multi-Asset Privacy",
    description: "Shield XLM, USDC, or any Stellar asset with identical privacy guarantees.",
  },
];

const FeatureBlock = ({
  icon,
  title,
  description,
  index,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="group flex flex-col p-8 md:p-12 bg-background"
    >
      <div className="w-16 h-16 md:w-20 md:h-20 bg-muted/20 rounded-[1.25rem] flex items-center justify-center mb-8 border border-white/5 group-hover:border-white/20 group-hover:scale-110 transition-all duration-500">
        {icon}
      </div>
      <h3 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-4 tracking-tight">
        {title}
      </h3>
      <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-24 md:py-32 bg-background overflow-hidden border-t border-white/10">
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-white/10 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
          
          <div className="md:row-span-2 md:col-span-1 p-8 md:p-12 bg-card/80 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute -z-10 top-0 left-0 opacity-[0.03] scale-[2] origin-top-left pointer-events-none">
              <svg viewBox="0 0 200 200" className="w-[400px] h-[400px]">
                {Array.from({ length: 8 }).map((_, i) => (
                  <circle key={i} cx="100" cy="100" r={20 + i * 15} fill="none" stroke="currentColor" strokeWidth="0.5" />
                ))}
              </svg>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium text-foreground leading-[1] tracking-tighter mb-8">
              Ghxst <br />
              <span className="text-muted-foreground">unlocks:</span>
            </h2>
            <div className="h-px w-24 bg-gradient-to-r from-secondary to-transparent mb-8" />
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-sm">
              Enterprise-grade cryptographic primitives designed exclusively for Stellar's high-speed rails.
            </p>
          </div>

          {features.map((f, i) => (
            <FeatureBlock key={f.title} {...f} index={i} />
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
