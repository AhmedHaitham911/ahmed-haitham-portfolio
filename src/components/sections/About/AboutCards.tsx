import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import {
  BrainCircuit,
  BarChart3,
  PanelsTopLeft,
} from "lucide-react";

const cards = [
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    text: "Building intelligent systems, ML pipelines, and AI-powered solutions.",
    gradient: "from-blue-500/20 via-transparent to-purple-500/10",
  },
  {
    icon: BarChart3,
    title: "Data Science",
    text: "Turning raw data into meaningful insights, models, and decisions.",
    gradient: "from-cyan-500/20 via-transparent to-blue-500/10",
  },
  {
    icon: PanelsTopLeft,
    title: "Front-End Engineering",
    text: "Creating modern, interactive interfaces with strong visual identity.",
    gradient: "from-purple-500/20 via-transparent to-pink-500/10",
  },
];

const AboutCards = () => {
  return (
    <div className="mt-16 grid gap-5 md:grid-cols-3">
      {cards.map((card, index) => (
        <InteractiveCard
          key={card.title}
          card={card}
          index={index}
        />
      ))}
    </div>
  );
};

type InteractiveCardProps = {
  card: (typeof cards)[number];
  index: number;
};

const InteractiveCard = ({ card, index }: InteractiveCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const rotateX = useSpring(0, {
    stiffness: 250,
    damping: 25,
  });

  const rotateY = useSpring(0, {
    stiffness: 250,
    damping: 25,
  });

  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>,
  ) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    rotateY.set((x - centerX) / 18);
    rotateX.set(-(y - centerY) / 18);

    glowX.set((x / rect.width) * 100);
    glowY.set((y / rect.height) * 100);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);

    glowX.set(50);
    glowY.set(50);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        delay: index * 0.12,
        duration: 0.7,
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className="group relative min-h-[280px] overflow-hidden rounded-3xl border border-border bg-surface/30 p-7 backdrop-blur-xl"
    >
      {/* Cursor Glow */}
      <motion.div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-60`}
        style={{
          background: `radial-gradient(
            220px circle at ${glowX.get()}% ${glowY.get()}%,
            rgba(59,130,246,0.18),
            transparent 70%
          )`,
        }}
      />

      {/* Shine */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div
        className="relative z-10"
        style={{ transform: "translateZ(40px)" }}
      >
        <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-background/50 text-primary shadow-[0_0_30px_rgba(59,130,246,0.12)]">
          <card.icon size={26} />
        </div>

        <h3 className="text-xl font-semibold text-foreground">
          {card.title}
        </h3>

        <p className="mt-3 leading-7 text-muted">
          {card.text}
        </p>
      </div>

      <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition-transform duration-700 group-hover:scale-150" />
    </motion.div>
  );
};

export default AboutCards;  