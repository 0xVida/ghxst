import { motion } from "framer-motion";

export const WireframeSphere = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center mix-blend-screen">
      <motion.svg
        viewBox="0 0 200 200"
        className="w-[150%] h-[150%]"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-secondary/20" />
        <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary/30" />
        <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-secondary/20" />
        {Array.from({ length: 18 }).map((_, i) => (
          <ellipse
            key={i}
            cx="100"
            cy="100"
            rx="90"
            ry="35"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-primary/40"
            transform={`rotate(${i * 10} 100 100)`}
          />
        ))}
        {Array.from({ length: 18 }).map((_, i) => (
          <ellipse
            key={`alt-${i}`}
            cx="100"
            cy="100"
            rx="35"
            ry="90"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-secondary/40"
            transform={`rotate(${i * 10} 100 100)`}
          />
        ))}
      </motion.svg>
    </div>
  );
};
