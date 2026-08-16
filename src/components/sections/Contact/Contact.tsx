import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Container, Section } from "../../ui";

const Contact = () => {
  const links = [
    {
      label: "Email",
      value: "ahmedhaithamegy@gmail.com",
      href: "mailto:ahmedhaithamegy@gmail.com",
      icon: Mail,
    },
    {
      label: "LinkedIn",
      value: "Ahmed Haitham Mohamed",
      href: "https://linkedin.com/in/ahmed-haitham-mohamed",
      icon: FaLinkedin,
    },
    {
      label: "GitHub",
      value: "AhmedHaitham911",
      href: "https://github.com/AhmedHaitham911",
      icon: FaGithub,
    },
  ];

  return (
    <Section
      id="contact"
      className="relative overflow-hidden py-32 md:py-40"
    >
      {/* Ambient Light */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[140px]"
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_60%)]" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-[0.35em] text-primary"
          >
            Contact
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-5 text-5xl font-bold leading-tight md:text-7xl"
            style={{ fontFamily: "Space Grotesk" }}
          >
            Let's create something{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-purple-500 bg-clip-text text-transparent">
              remarkable.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted"
          >
            Open to new opportunities, collaborations, internships, and
            interesting ideas.
          </motion.p>

          <motion.a
            href="mailto:ahmedhaithamegy@gmail.com"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.04 }}
            className="mx-auto mt-10 inline-flex items-center gap-3 rounded-2xl bg-primary px-7 py-4 font-semibold text-white shadow-[0_0_40px_rgba(37,99,235,0.25)]"
          >
            Start a Conversation
            <ArrowUpRight size={19} />
          </motion.a>
        </div>

        {/* Contact Links */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-4 md:grid-cols-3">
          {links.map((link, index) => {
            const Icon = link.icon;

            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.35 + index * 0.1,
                  duration: 0.6,
                }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-surface/30 p-6 text-left backdrop-blur-xl"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl transition-transform duration-700 group-hover:scale-150" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                      <Icon size={21} />
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="text-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary"
                    />
                  </div>

                  <p className="mt-6 text-sm font-medium uppercase tracking-[0.18em] text-muted">
                    {link.label}
                  </p>

                  <p className="mt-2 truncate text-base font-semibold text-foreground">
                    {link.value}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

export default Contact;