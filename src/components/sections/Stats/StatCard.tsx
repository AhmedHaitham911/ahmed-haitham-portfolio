import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type StatCardProps = {
  value: string;
  label: string;
  description: string;
  icon: LucideIcon;
  color: string;
};

const StatCard = ({
  value,
  label,
  description,
  icon: Icon,
  color,
}: StatCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group rounded-2xl border border-border bg-surface/50 p-6 backdrop-blur-xl"
    >
      <div
        className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border"
        style={{
          color,
          borderColor: `${color}55`,
          backgroundColor: `${color}12`,
        }}
      >
        <Icon size={20} />
      </div>

      <h3 className="text-3xl font-bold text-foreground">
        {value}
      </h3>

      <p className="mt-2 font-medium text-foreground">
        {label}
      </p>

      <p className="mt-1 text-sm text-muted">
        {description}
      </p>
    </motion.div>
  );
};

export default StatCard;