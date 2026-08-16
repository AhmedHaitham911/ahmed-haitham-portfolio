import { motion } from "framer-motion";

const waves = Array.from({ length: 18 });

const HeroBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute right-[-10%] top-[5%] h-[600px] w-[600px] rounded-full bg-purple-500/10 blur-[140px]" />

      <div className="absolute right-[10%] bottom-[5%] h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]" />

      {/* Animated Wave System */}
      <motion.svg
        viewBox="0 0 1400 700"
        preserveAspectRatio="none"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        className="absolute right-[-12%] top-[-5%] h-[760px] w-[85%]"
      >
        <defs>
          <linearGradient
            id="waveGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.15" />
            <stop offset="35%" stopColor="#3B82F6" stopOpacity="0.75" />
            <stop offset="65%" stopColor="#8B5CF6" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#A855F7" stopOpacity="0.45" />
          </linearGradient>

          <filter id="waveGlow">
            <feGaussianBlur stdDeviation="7" result="blur" />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {waves.map((_, index) => {
          const offset = index * 18;

          return (
            <motion.path
              key={index}
              d={`
                M -100 ${430 + offset}
                C 180 ${300 + offset}
                  320 ${620 + offset}
                  580 ${470 + offset}
                S 930 ${250 + offset}
                  1120 ${380 + offset}
                S 1380 ${620 + offset}
                  1520 ${420 + offset}
              `}
              animate={{
                x: [-80, 80, -80],
                y: [0, -18, 0],
              }}
              transition={{
                duration: 9 + index * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              fill="none"
              stroke="url(#waveGradient)"
              strokeWidth={index === 0 ? 5 : 1.8}
              opacity={Math.max(0.18, 0.8 - index * 0.035)}
              filter={index < 4 ? "url(#waveGlow)" : undefined}
            />
          );
        })}
      </motion.svg>

      {/* Light Theme Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(139,92,246,0.08),transparent_35%)] dark:bg-transparent" />
    </div>
  );
};

export default HeroBackground;