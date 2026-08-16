import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../../hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="relative flex h-11 w-20 items-center rounded-full border border-border bg-card p-1 backdrop-blur-xl"
    >
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
        className={`absolute h-9 w-9 rounded-full ${
          theme === "dark"
            ? "translate-x-0 bg-surface"
             : "translate-x-9 bg-white"
        }`}
      />

      <div className="z-10 flex w-full justify-between px-1">
        <Moon
          size={18}
          className={theme === "dark" ? "text-cyan-400" : "text-slate-400"}
        />

        <Sun
          size={18}
          className={theme === "light" ? "text-yellow-400" : "text-slate-400"}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
