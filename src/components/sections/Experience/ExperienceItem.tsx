import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import type { Experience } from "./experienceData";

type ExperienceItemProps = {
  experience: Experience;
  index: number;
};

const ExperienceItem = ({
  experience,
  index,
}: ExperienceItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="relative grid gap-8 md:grid-cols-[180px_1fr]"
    >
      <div className="text-sm text-muted">
        <p className="font-medium text-foreground">
          {experience.period}
        </p>

        <div className="mt-2 flex items-center gap-2">
          <MapPin size={14} />
          {experience.location}
        </div>
      </div>

      <div className="relative rounded-3xl border border-border bg-surface/35 p-7 backdrop-blur-xl">
        <div className="absolute -left-[45px] top-8 hidden h-5 w-5 rounded-full border-4 border-background bg-primary shadow-[0_0_20px_rgba(59,130,246,0.7)] md:block" />

        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
            <Briefcase size={22} />
          </div>

          <div>
            <h3
              className="text-2xl font-bold"
              style={{ fontFamily: "Space Grotesk" }}
            >
              {experience.role}
            </h3>

            <p className="mt-1 font-medium text-primary">
              {experience.company}
            </p>
          </div>
        </div>

        <p className="mt-6 leading-7 text-muted">
          {experience.description}
        </p>

        <div className="mt-6 space-y-3">
          {experience.highlights.map((highlight) => (
            <div
              key={highlight}
              className="flex gap-3 text-sm leading-6 text-muted"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>{highlight}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceItem;