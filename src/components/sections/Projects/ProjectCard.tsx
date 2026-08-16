import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import type { Project } from "./projectData";

type FeaturedProjectProps = {
  project: Project;
  index: number;
};

const FeaturedProject = ({
  project,
  index,
}: FeaturedProjectProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      whileHover={{ y: -6 }}
      className="group relative h-full min-h-[420px] overflow-hidden rounded-[30px] border border-border bg-surface/35 backdrop-blur-xl"
    >
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute -left-20 top-1/3 h-64 w-64 -translate-y-1/2 rounded-full bg-primary/15 blur-[90px] transition-all duration-700 group-hover:bg-primary/25" />

      <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-accent/10 blur-[90px]" />

      {/* Card Layout */}
      <div className="grid h-full min-h-[420px] lg:grid-cols-[0.85fr_1.15fr]">
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between p-6 md:p-8">
          <div>
            {/* Category */}
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              <Sparkles size={12} />
              {project.category}
            </div>

            {/* Title */}
            <h3
              className="text-2xl font-bold leading-tight text-foreground md:text-3xl"
              style={{ fontFamily: "Space Grotesk" }}
            >
              {project.title}
            </h3>

            {/* Description */}
            <p className="mt-4 max-w-sm text-sm leading-6 text-muted md:text-base">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-border bg-background/40 px-3 py-1.5 text-[11px] font-medium text-muted transition-colors duration-300 group-hover:text-foreground"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="mt-7 flex flex-wrap gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl border border-border bg-background/50 px-4 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary/40 hover:bg-primary/10"
              >
                <FaGithub size={16} />
                GitHub
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-white shadow-[0_0_25px_rgba(37,99,235,0.2)] transition-all duration-300 hover:scale-[1.03]"
              >
                View Project
                <ArrowUpRight size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Project Image */}
        <div className="relative min-h-[360px] overflow-hidden border-t border-border bg-background/20 lg:min-h-full lg:border-l lg:border-t-0">
          {/* Image */}
          <motion.img
            src={project.image}
            alt={project.title}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="absolute inset-0 h-full w-full object-contain p-5 transition-transform duration-700"
          />

          {/* Soft Overlay */}
          <div className="pointer-events-none absolute inset-0 bg-background/10" />

          {/* Bottom Gradient */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/70 to-transparent" />

          {/* Color Overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-50 mix-blend-screen" />

          {/* Shine */}
          <motion.div
            initial={{ x: "-120%" }}
            whileHover={{ x: "120%" }}
            transition={{ duration: 0.9 }}
            className="pointer-events-none absolute inset-y-0 w-1/3 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/10 to-transparent"
          />

          {/* Project Number */}
          <div className="absolute bottom-4 right-4 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-white/75 backdrop-blur-md">
            Project {String(index + 1).padStart(2, "0")}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default FeaturedProject;