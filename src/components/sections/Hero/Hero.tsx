import { Container, Section } from "../../ui";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

const Hero = () => {
  return (
    <Section
      id="home"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-28"
    >
      <HeroBackground />

      <Container className="relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.95fr]">
          <HeroContent />
          <HeroVisual />
        </div>
      </Container>
    </Section>
  );
};

export default Hero;