import { motion } from "framer-motion";
import {
  SiPython,
  SiReact,
  SiTensorflow,
  SiPostgresql,
  SiPandas,
  SiGit,
} from "react-icons/si";

const icons = [
  {
    Icon: SiPython,
    x: -250 ,
    y: -85,
    color: "#3776AB",
  },
  {
    Icon: SiPandas,
    x: -35,
    y: -260,
    color: "#150458",
  },
  {
    Icon: SiReact,
    x: 205,
    y: -85,
    color: "#61DAFB",
  },
  {
    Icon: SiTensorflow,
    x: 190,
    y: 90,
    color: "#FF6F00",
  },
  {
    Icon: SiPostgresql,
    x: -230,
    y: 95,
    color: "#4169E1",
  },
  {
  Icon: SiGit,
  x: -20,
  y: 210,
  color: "#F05032",
  },
];

const FloatingIcons = () => {
  return (
    <>
      {icons.map(({ Icon, x, y, color }, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 3 + index * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute z-20 flex h-14 w-14 items-center justify-center rounded-full border border-border bg-card/80 shadow-xl backdrop-blur-md"
          style={{
            left: `calc(50% + ${x}px)`,
            top: `calc(50% + ${y}px)`,
          }}
        >
          <Icon
            className="text-[28px]"
            style={{ color }}
          />
        </motion.div>
      ))}
    </>
  );
};

export default FloatingIcons;