import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6 pointer-events-none">
      <nav
        className={`mx-auto max-w-7xl pointer-events-auto transition-all duration-500 rounded-2xl ${
          scrolled
            ? "bg-background/80 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/50"
            : "bg-transparent border border-transparent"
        }`}
      >
        <div className="flex h-16 md:h-20 items-center justify-between px-6 lg:px-8">
        <a href="/" className="flex items-center group">
          <span className="font-display text-2xl font-bold tracking-tighter text-foreground uppercase flex items-center">
            GH
            <div className="mx-0.5 relative h-7 w-7 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter" className="w-full h-full">
                <polyline points="7,4 15,12 7,20" className="stroke-secondary group-hover:opacity-80 transition-opacity duration-500" />
                <polyline points="17,4 9,12 17,20" className="stroke-primary group-hover:opacity-80 transition-opacity duration-500" />
              </svg>
            </div>
            ST
          </span>
        </a>

        <div className="hidden md:flex items-center gap-6">

          <div className="flex items-center gap-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-8 py-2.5 shadow-lg">
            <a href="#features" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="#ecosystem" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
              Ecosystem
            </a>
          </div>

          <a
            href="#"
            className="relative group h-11 px-8 rounded-full bg-card overflow-hidden border border-white/10 flex items-center justify-center transition-all duration-300 hover:border-secondary hover:shadow-[0_0_20px_hsl(258_100%_64%/0.3)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 text-sm font-medium text-foreground">
              Contact Us
            </span>
          </a>

        </div>

        <button
          className="md:hidden text-foreground p-2 rounded-lg hover:bg-secondary/50"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-2xl border-t border-border/50 px-6 pb-6 pt-2 space-y-1">
          {["Features", "How It Works", "Ecosystem"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="block text-sm text-muted-foreground py-3 hover:text-foreground transition-colors"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#"
            className="block w-full text-center mt-3 px-5 py-2.5 text-sm font-semibold rounded-lg bg-primary text-primary-foreground"
          >
            Contact Us
          </a>
        </div>
      )}
      </nav>
    </div>
  );
};

export default Navbar;
