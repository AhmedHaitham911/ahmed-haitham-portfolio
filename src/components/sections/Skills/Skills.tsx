import { motion } from "framer-motion";
import { Container, Section } from "../../ui";
import SkillMarquee from "./SkillMarquee";
import { skills } from "./skillData";

const Skills = () => {
  return (
    <Section
      id="skills"
      className="relative overflow-hidden py-32"
    >
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[140px]" />

      <Container className="relative z-10">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-[0.35em] text-primary"
          >
            Tech Stack
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-5xl font-bold md:text-7xl"
            style={{ fontFamily: "Space Grotesk" }}
          >
            Tools I use to{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-purple-500 bg-clip-text text-transparent">
              build ideas.
            </span>
          </motion.h2>

          <p className="mx-auto mt-6 max-w-2xl text-muted">
            Data, AI, and modern technologies I use to turn ideas into
            intelligent products.
          </p>
        </div>

        {/* Single Infinite Marquee */}
        <div className="mt-16">
          <SkillMarquee items={skills} speed={80} />
        </div>
      </Container>
    </Section>
  );
};

export default Skills;