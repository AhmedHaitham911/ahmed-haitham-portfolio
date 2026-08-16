import { motion } from "framer-motion";
import { Container } from "../../ui";
import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-5 z-50">
      <Container>
        <motion.nav
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="
            flex h-[68px] items-center justify-between
            rounded-[22px]
            border border-border/80
            bg-surface/60
            px-5
            shadow-[0_10px_40px_rgba(0,0,0,0.08)]
            backdrop-blur-2xl
            transition-all duration-300
          "
        >
          <NavLogo />

          <div className="flex items-center gap-3">
            <NavLinks />
            <ThemeToggle />
          </div>
        </motion.nav>
      </Container>
    </header>
  );
};

export default Navbar;  