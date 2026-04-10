import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background pt-24 pb-0 flex flex-col relative overflow-hidden border-t border-border/30">

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[400px] bg-secondary/5 blur-[150px] pointer-events-none z-0" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col w-full relative z-10 min-h-[50vh]">

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end w-full gap-16 lg:gap-8 mb-16 lg:mb-8 mt-auto">

          <div className="flex flex-col max-w-sm">
            <h3 className="text-3xl md:text-4xl font-display font-medium text-foreground tracking-tight leading-tight mb-8">
              Empowering the decentralized economy.
            </h3>
            <div className="flex gap-4 text-sm text-muted-foreground font-light">
              <span>© 2026 Ghxst</span>
              <span>•</span>
              <span>All rights reserved</span>
            </div>
          </div>

          <div className="flex gap-16 lg:gap-24 mb-6">
            <div>
              <h4 className="text-foreground font-medium mb-6 font-display tracking-tight text-lg">About</h4>
              <div className="flex flex-col gap-4 text-muted-foreground text-sm font-light">
                <a href="#" className="hover:text-primary transition-colors">What is Ghxst?</a>
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              </div>
            </div>

            <div>
              <h4 className="text-foreground font-medium mb-6 font-display tracking-tight text-lg">Resources</h4>
              <div className="flex flex-col gap-4 text-muted-foreground text-sm font-light">
                <a href="#" className="hover:text-primary transition-colors">Documentation</a>
                <a href="#" className="hover:text-primary transition-colors">GitHub</a>
                <a href="#" className="hover:text-primary transition-colors">Twitter</a>
              </div>
            </div>
          </div>

        </div>

        <div className="w-full h-px bg-white/10 mb-12 mt-4" />

        <div className="w-full flex items-end justify-center overflow-hidden">
          <h1 className="text-[23vw] leading-[0.78] font-display font-bold tracking-tighter text-foreground w-full text-center select-none flex justify-between items-center translate-y-[8%] opacity-90 hover:opacity-100 transition-opacity duration-700">
            <span>G</span>
            <span>H</span>
            <span className="flex items-center justify-center relative w-[18vw] h-[18vw] shrink-0 translate-y-[2vw]">
              <svg viewBox="5 2 14 20" fill="none" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter" className="w-full h-full">
                <polyline points="7,4 15,12 7,20" className="stroke-secondary" />
                <polyline points="17,4 9,12 17,20" className="stroke-primary" />
              </svg>
            </span>
            <span>S</span>
            <span>T</span>
          </h1>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
