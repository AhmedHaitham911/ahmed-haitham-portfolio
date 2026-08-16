import { motion } from "framer-motion";

const AboutContent = () => {
  return (
    <div className="mx-auto max-w-5xl text-center">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-5 inline-block text-sm font-semibold uppercase tracking-[0.35em] text-primary"
      >
        About Me
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold leading-tight md:text-6xl xl:text-7xl"
        style={{ fontFamily: "Space Grotesk" }}
      >
        I build{" "}
        <span className="bg-gradient-to-r from-primary via-accent to-purple-500 bg-clip-text text-transparent">
          intelligent
        </span>{" "}
        digital experiences.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="mx-auto mt-7 max-w-3xl text-base leading-8 text-muted md:text-lg"
      >
        I combine Artificial Intelligence, Data Science, and Front-End
        Engineering to transform ideas into modern, intelligent, and
        user-focused products.
      </motion.p>
    </div>
  );
};

export default AboutContent;