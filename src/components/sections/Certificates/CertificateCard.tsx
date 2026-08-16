import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { Certificate } from "./certificateData";

type CertificateCardProps = {
  certificate: Certificate;
  index: number;
};

const CertificateCard = ({
  certificate,
  index,
}: CertificateCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
      }}
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-[28px] border border-border bg-surface/35 backdrop-blur-xl"
    >
      <div className="relative overflow-hidden bg-background/40 p-4">
        <motion.img
          src={certificate.image}
          alt={certificate.title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
          className="h-64 w-full rounded-2xl object-cover"
        />

        <div className="pointer-events-none absolute inset-4 rounded-2xl bg-gradient-to-t from-black/35 via-transparent to-transparent" />
      </div>

      <div className="p-6">
        <h3
          className="text-xl font-bold text-foreground"
          style={{ fontFamily: "Space Grotesk" }}
        >
          {certificate.title}
        </h3>

        <p className="mt-2 text-sm font-medium text-primary">
          {certificate.issuer}
        </p>

        <p className="mt-2 text-sm text-muted">
          {certificate.date}
        </p>

        <a
          href={certificate.image}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-xl border border-border bg-background/40 px-4 py-2.5 text-sm font-medium text-foreground transition-all hover:border-primary/40 hover:bg-primary/10"
        >
          View Certificate
          <ExternalLink size={16} />
        </a>
      </div>
    </motion.article>
  );
};

export default CertificateCard;