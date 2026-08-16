import { motion } from "framer-motion";
import { Container, Section } from "../../ui";
import FeaturedProject from "./ProjectCard";
import { projects } from "./projectData";

const Projects = () => {
  return (
    <Section id="projects" className="relative overflow-hidden py-32">
      {/* Ambient Background */}
      <div className="pointer-events-none absolute left-[10%] top-[20%] h-96 w-96 rounded-full bg-primary/10 blur-[140px]" />

      <div className="pointer-events-none absolute right-[5%] bottom-[10%] h-96 w-96 rounded-full bg-accent/10 blur-[140px]" />

      <Container className="relative z-10">
        {/* Section Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold uppercase tracking-[0.35em] text-primary"
          >
            Selected Work
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.1,
              duration: 0.7,
            }}
            className="mt-4 text-5xl font-bold md:text-7xl"
            style={{ fontFamily: "Space Grotesk" }}
          >
            Things I've{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-purple-500 bg-clip-text text-transparent">
              built.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            className="mx-auto mt-6 max-w-2xl text-muted"
          >
            A collection of AI, data, and front-end projects that showcase how I
            turn ideas into real products.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="mt-16 grid gap-7 lg:grid-cols-2">
          {projects.map((project, index) => (
            <FeaturedProject
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Projects;
