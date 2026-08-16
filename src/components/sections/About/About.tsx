import { motion, useScroll, useTransform } from "framer-motion";
import { Container, Section } from "../../ui";
import AboutContent from "./AboutContent";
import AboutCards from "./AboutCards";
import { useRef } from "react";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const glowX = useTransform(scrollYProgress, [0, 1], ["10%", "85%"]);
  const glowY = useTransform(scrollYProgress, [0, 1], ["20%", "75%"]);

  return (
    <div ref={sectionRef} className="relative">
      <Section
        id="about"
        className="relative overflow-hidden py-28 md:py-36"
      >
        {/* Moving Ambient Glow */}
        <motion.div
          style={{ left: glowX, top: glowY }}
          className="pointer-events-none absolute h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[130px]"
        />

        {/* Secondary Glow */}
        <motion.div
          style={{
            x: useTransform(scrollYProgress, [0, 1], [-100, 180]),
            y: useTransform(scrollYProgress, [0, 1], [80, -100]),
          }}
          className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-accent/10 blur-[120px]"
        />

        {/* Grid */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40 [mask-image:radial-gradient(circle_at_center,black,transparent_85%)]" />

        <Container className="relative z-10">
          <motion.div
            style={{
              y: useTransform(scrollYProgress, [0, 0.5, 1], [40, 0, -40]),
            }}
          >
            <AboutContent />
          </motion.div>

          <AboutCards />
        </Container>
      </Section>
    </div>
  );
};

export default About;