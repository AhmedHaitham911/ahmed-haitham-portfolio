import { motion } from "framer-motion";
import { Container, Section } from "../../ui";
import ExperienceItem from "./ExperienceItem";
import { experiences } from "./experienceData";

const Experience = () => {
  return (
    <Section
      id="experience"
      className="relative overflow-hidden py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[140px]" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-[0.35em] text-primary"
          >
            Experience
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-5xl font-bold md:text-7xl"
            style={{ fontFamily: "Space Grotesk" }}
          >
            Where I've{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-purple-500 bg-clip-text text-transparent">
              grown.
            </span>
          </motion.h2>
        </div>

        <div className="relative mx-auto mt-16 max-w-5xl space-y-10">
          <div className="absolute left-[194px] top-0 hidden h-full w-px bg-gradient-to-b from-primary via-accent to-transparent md:block" />

          {experiences.map((experience, index) => (
            <ExperienceItem
              key={`${experience.company}-${experience.role}`}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Experience;