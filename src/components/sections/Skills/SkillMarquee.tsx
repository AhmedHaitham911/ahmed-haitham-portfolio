import { motion } from "framer-motion";
import type { Skill } from "./skillData";

type SkillMarqueeProps = {
  items: Skill[];
  speed?: number;
  reverse?: boolean;
};

const SkillMarquee = ({
  items,
  speed = 30,
  reverse = false,
}: SkillMarqueeProps) => {
  const repeatedItems = [...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex w-max gap-5"
        animate={{
          x: reverse ? ["-33.33%", "0%"] : ["0%", "-33.33%"],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {repeatedItems.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <div
              key={`${skill.name}-${index}`}
              className="group flex h-20 min-w-[190px] items-center gap-4 rounded-2xl border border-border bg-surface/50 px-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-background/50">
                {Icon ? (
                  <Icon
                    size={25}
                    style={{ color: skill.color }}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                ) : (
                  <span className="text-sm font-bold text-primary">
                    {skill.name.charAt(0)}
                  </span>
                )}
              </div>

              <span className="whitespace-nowrap text-sm font-medium text-foreground">
                {skill.name}
              </span>
            </div>
          );
        })}
      </motion.div>

      {/* Edge Fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
};

export default SkillMarquee;