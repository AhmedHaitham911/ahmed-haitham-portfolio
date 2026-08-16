import { motion } from "framer-motion";
import { ArrowUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Container } from "../../ui";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-background">
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <Container className="relative z-10">
        <div className="py-16 md:py-20">
          {/* Main CTA */}
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                Let's connect
              </p>

              <h2
                className="mt-4 max-w-2xl text-4xl font-bold leading-tight md:text-6xl"
                style={{ fontFamily: "Space Grotesk" }}
              >
                Building the future,
                <br />
                <span className="bg-gradient-to-r from-primary via-accent to-purple-500 bg-clip-text text-transparent">
                  one idea at a time.
                </span>
              </h2>
            </div>

            <motion.a
              href="#home"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-border bg-surface/50 text-foreground backdrop-blur-xl transition hover:border-primary/40 hover:bg-primary/10"
              aria-label="Back to top"
            >
              <ArrowUp size={22} />
            </motion.a>
          </div>

          {/* Divider */}
          <div className="my-12 h-px bg-border" />

          {/* Bottom */}
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-2xl font-bold" style={{ fontFamily: "Space Grotesk" }}>
                AH<span className="text-primary">.</span>
              </div>

              <p className="mt-2 text-sm text-muted">
                AI Engineer • Data Scientist • Front-End Developer
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="mailto:ahmedhaithamegy@gmail.com"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface/40 text-muted transition hover:border-primary/40 hover:text-primary"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>

              <a
                href="https://linkedin.com/in/ahmed-haitham-mohamed"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface/40 text-muted transition hover:border-primary/40 hover:text-primary"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>

              <a
                href="https://github.com/AhmedHaitham911"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface/40 text-muted transition hover:border-primary/40 hover:text-primary"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
            </div>
          </div>

          <div className="mt-10 text-center text-xs text-muted">
            © {new Date().getFullYear()} Ahmed Haitham Mohamed. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;