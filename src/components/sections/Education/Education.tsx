import { motion } from "framer-motion";
import { Container, Section } from "../../ui";
import EducationCard from "./EducationCard";
import { education } from "./educationData";

const Education = () => {
  return (
    <Section
      id="education"
      className="relative overflow-hidden py-32"
    >
      <div className="pointer-events-none absolute left-[10%] top-1/3 h-80 w-80 rounded-full bg-primary/10 blur-[130px]" />

      <div className="pointer-events-none absolute right-[5%] bottom-0 h-80 w-80 rounded-full bg-accent/10 blur-[130px]" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-[0.35em] text-primary"
          >
            Education
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-5xl font-bold md:text-7xl"
            style={{ fontFamily: "Space Grotesk" }}
          >
            Where I{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-purple-500 bg-clip-text text-transparent">
              learned.
            </span>
          </motion.h2>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          {education.map((item) => (
            <EducationCard
              key={`${item.institution}-${item.degree}`}
              education={item}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Education;