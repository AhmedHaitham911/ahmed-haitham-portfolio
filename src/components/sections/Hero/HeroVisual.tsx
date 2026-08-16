import { motion } from "framer-motion";
import profileImage from "../../../assets/images/profile.jpg";
import FloatingIcons from "./FloatingIcons";

const HeroVisual = () => {
  return (
    <motion.div
    
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9 }}
      className="relative flex min-h-[620px] items-center justify-center"
    >
      {/* Main Glow */}
      <div className="absolute h-[430px] w-[430px] rounded-full bg-primary/20 blur-[120px]" />

      {/* Orbit Rings */}
      <div className="absolute h-[450px] w-[450px] rounded-full border border-primary/30" />

      <div className="absolute h-[560px] w-[560px] rounded-full border border-accent/20" />

      <div className="absolute h-[650px] w-[650px] rounded-full border border-primary/10" />

      {/* Floating Tech Icons */}
      <FloatingIcons />

      {/* Center Image */}
      <motion.div
        whileHover={{
          scale: 1.03,
          rotateY: 4,
          rotateX: -4,
        }}
        transition={{
          type: "spring",
          stiffness: 180,
          damping: 18,
        }}
        className="relative z-10 flex h-[360px] w-[360px] items-center justify-center"
        style={{ perspective: "1000px" }}
      >
        {/* Image Glow */}
        <div className="absolute inset-[-20px] rounded-full bg-primary/20 blur-2xl" />

        {/* Image Border */}
        <div className="relative h-[340px] w-[340px] overflow-hidden rounded-full border-4 border-primary/40 bg-card shadow-[0_0_70px_rgba(37,99,235,0.35)]">
          {/* Gradient Overlay */}
          <div className="pointer-events-none absolute inset-0 z-10 rounded-full bg-gradient-to-b from-primary/10 via-transparent to-accent/20" />

          <img
            src={profileImage}
            alt="Ahmed Haitham Mohamed"
            className="h-full w-full object-cover object-top"
          />
        </div>
      </motion.div>

     
    </motion.div>
  );
};

export default HeroVisual;