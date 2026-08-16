import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";

const HeroContent = () => {
  return (
    <div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-primary"
      >
        Welcome to my portfolio
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="max-w-4xl text-5xl font-bold leading-[0.9] md:text-7xl xl:text-[5.2rem]"
        style={{ fontFamily: "Space Grotesk" }}
      >
        <span className="bg-gradient-to-r from-primary via-accent to-purple-500 bg-clip-text text-transparent">
          Ahmed
        </span>
        <br />
        <span className="bg-gradient-to-r from-accent via-primary to-purple-500 bg-clip-text text-transparent">
          Haitham Mohamed
        </span>
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
        className="mt-6 text-xl font-medium text-muted md:text-2xl"
      >
        AI Engineer <span className="text-primary">•</span> Data Scientist{" "}
        <span className="text-primary">•</span> Front-End Developer
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-5 max-w-2xl text-base leading-7 text-muted md:text-lg"
      >
        I build AI-powered applications, data-driven solutions, and modern web
        experiences with a strong focus on performance and user experience.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-10 flex flex-wrap gap-4"
      >
        <a
          href="#projects"
          className="group flex items-center gap-3 rounded-xl bg-primary px-7 py-4 font-semibold text-white shadow-[0_0_35px_rgba(37,99,235,0.35)] transition hover:scale-[1.03]"
        >
          View My Work
          <ArrowUpRight
            size={20}
            className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
          />
        </a>

        <a
          href="/Ahmed-Haitham-CV.pdf"
          download="Ahmed-Haitham-Mohamed-CV.pdf"
          className="flex items-center gap-3 rounded-xl border border-border bg-surface/40 px-7 py-4 font-semibold text-foreground backdrop-blur-xl transition hover:border-primary/50"
        >
          Download CV
          <Download size={20} />
        </a>
      </motion.div>
    </div>
  );
};

export default HeroContent;
