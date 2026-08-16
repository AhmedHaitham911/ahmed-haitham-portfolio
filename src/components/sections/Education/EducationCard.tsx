import { motion } from "framer-motion";
import { GraduationCap, MapPin, CalendarDays } from "lucide-react";
import type { Education } from "./educationData";

type EducationCardProps = {
  education: Education;
};

const EducationCard = ({ education }: EducationCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      whileHover={{ y: -6 }}
      className="relative overflow-hidden rounded-[32px] border border-border bg-surface/35 p-7 backdrop-blur-xl md:p-10"
    >
      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative z-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="flex gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
              <GraduationCap size={27} />
            </div>

            <div>
              <h3
                className="text-2xl font-bold md:text-3xl"
                style={{ fontFamily: "Space Grotesk" }}
              >
                {education.degree}
              </h3>

              <p className="mt-2 font-medium text-primary">
                {education.institution}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 text-sm text-muted">
            <span className="flex items-center gap-2">
              <CalendarDays size={15} />
              {education.period}
            </span>

            <span className="flex items-center gap-2">
              <MapPin size={15} />
              {education.location}
            </span>
          </div>
        </div>

        <p className="mt-7 max-w-3xl leading-7 text-muted">
          {education.description}
        </p>

        <div className="mt-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-foreground">
            Relevant Coursework
          </p>

          <div className="flex flex-wrap gap-2">
            {education.coursework.map((course) => (
              <span
                key={course}
                className="rounded-full border border-border bg-background/40 px-3 py-1.5 text-xs text-muted transition-colors hover:text-foreground"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default EducationCard;