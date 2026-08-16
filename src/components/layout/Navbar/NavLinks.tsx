import { motion } from "framer-motion";
import { navigation } from "../../../constants/navigation";
import { useActiveSection } from "../../../hooks/useActiveSection";

const NavLinks = () => {
  const active = useActiveSection();

  return (
    <ul className="hidden items-center gap-1 lg:flex">
      {navigation.map((item) => {
        const isActive = active === item.href;

        return (
          <li key={item.href} className="relative">
            <a
              href={item.href}
              className={`relative z-10 block rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                isActive
                  ? "text-foreground"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {item.label}
            </a>

            {isActive && (
              <motion.div
                layoutId="active-nav"
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
                className="absolute inset-0 rounded-full bg-primary/10 shadow-[0_0_20px_rgba(59,130,246,0.08)]"
              />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;