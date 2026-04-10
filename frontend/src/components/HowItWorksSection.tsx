import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useRef, useState, ReactNode } from "react";

const geometricStepIcons = [
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
      <rect x="3" y="3" width="7" height="7" rx="2" className="stroke-primary drop-shadow-[0_0_10px_rgba(20,241,149,0.5)]" />
      <rect x="14" y="3" width="7" height="7" rx="2" className="stroke-secondary" />
      <rect x="14" y="14" width="7" height="7" rx="2" className="stroke-primary drop-shadow-[0_0_10px_rgba(20,241,149,0.5)]" />
      <rect x="3" y="14" width="7" height="7" rx="2" className="stroke-secondary" />
      <path d="M6.5 10v4M17.5 10v4M10 6.5h4M10 17.5h4" strokeDasharray="2 2" className="stroke-white/40" />
      <circle cx="12" cy="12" r="2" className="fill-white" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" className="stroke-secondary drop-shadow-[0_0_10px_rgba(160,32,240,0.5)]" />
      <path d="M8 11l3 3l5-5" className="stroke-white" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" className="stroke-primary" />
      <rect x="2" y="4" width="20" height="16" rx="2" className="stroke-white/20" strokeDasharray="4 4" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" className="stroke-secondary" />
      <path d="M7 11V7a5 5 0 019.9-1" className="stroke-primary" />
    </svg>
  ),
];

const steps = [
  {
    iconNode: geometricStepIcons[0],
    title: "Connect",
    subtitle: "Link your Stellar wallet",
    description: "Freighter, Albedo, or any compatible wallet. One click, zero friction.",
  },
  {
    iconNode: geometricStepIcons[1],
    title: "Shield",
    subtitle: "Deposit into a shielded pool",
    description: "Your balance becomes private instantly. Amounts and addresses are encrypted.",
  },
  {
    iconNode: geometricStepIcons[2],
    title: "Transact",
    subtitle: "Send privately",
    description: "Payments with encrypted amounts and addresses. Only you and the recipient know.",
  },
  {
    iconNode: geometricStepIcons[3],
    title: "Unshield",
    subtitle: "Withdraw anytime",
    description: "Move back to your public address whenever you want. No lock-ups, no delays.",
  },
];

const StepBlock = ({
  iconNode,
  title,
  subtitle,
  description,
  index,
}: {
  iconNode: ReactNode;
  title: string;
  subtitle: string;
  description: string;
  index: number;
}) => (
  <div className="group relative flex flex-col justify-center p-6 sm:p-10 lg:p-14 bg-transparent h-full w-full">
    
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:24px_24px] opacity-30 z-0 pointer-events-none" />
    
    <div className="absolute -bottom-4 -right-4 lg:-bottom-8 lg:-right-8 font-display text-[10rem] sm:text-[14rem] lg:text-[22rem] font-bold text-white/[0.02] leading-none tracking-tighter select-none z-0 group-hover:text-white/[0.04] transition-colors duration-700">
      0{index + 1}
    </div>

    <div className="absolute -top-8 -left-8 lg:-top-16 lg:-left-16 w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] lg:w-[350px] h-[350px] opacity-10 pointer-events-none z-0 group-hover:scale-110 transition-all duration-700">
      {iconNode}
    </div>
    
    <div className="relative z-10 flex flex-col justify-center max-w-lg">
      <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-2 sm:mb-4 tracking-tight drop-shadow-sm">
        {title}
      </h3>
      <p className="text-lg sm:text-xl lg:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary font-medium tracking-wide mb-3 sm:mb-6">
        {subtitle}
      </p>
      <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const HowItWorksSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const segments = steps.length;
    let step = Math.floor(latest * segments);
    if (step >= segments) step = segments - 1; // Bound to max index
    if (step < 0) step = 0; // Bound to min index
    setActiveIndex(step);
  });

  return (
    <section 
      id="how-it-works" 
      ref={containerRef}
      className="relative bg-background border-t border-white/10 h-[400vh]"
    >
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full mt-16 md:mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-24 items-center">
            
            <div className="h-fit">
              <h2 className="font-display text-4xl sm:text-6xl lg:text-[7.5rem] font-medium text-foreground leading-[0.9] tracking-tighter mb-4 lg:mb-8">
                Simple.<br />
                <span className="opacity-40">Private.</span><br />
                Fast.
              </h2>
              <div className="h-px w-full max-w-[200px] bg-border/50 mb-4 lg:mb-8" />
              <p className="text-lg sm:text-xl text-muted-foreground font-light max-w-sm leading-relaxed">
                Ghxst abstracts away the cryptography so you can focus on building and transacting smoothly.
              </p>
            </div>

            <div className="relative w-full h-[280px] sm:h-[350px] lg:h-[450px] overflow-visible rounded-3xl">
              {steps.map((step, index) => {
                const isActive = index === activeIndex;
                const isPast = index < activeIndex;

                return (
                  <motion.div
                    key={step.title}
                    initial={false}
                    animate={{
                      y: isActive ? "0%" : isPast ? "-100%" : "100%",
                      opacity: isActive ? 1 : 0,
                      scale: isActive ? 1 : 0.95,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: [0.25, 1, 0.5, 1], // Very sleek swift ease
                    }}
                    className="absolute inset-0 w-full h-full"
                    style={{ pointerEvents: isActive ? "auto" : "none" }}
                  >
                     <StepBlock {...step} index={index} />
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
