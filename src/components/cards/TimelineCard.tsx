import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TimelineCardProps {
  year: string;
  title: string;
  description: string;
  icon?: ReactNode;
  isLeft?: boolean;
  index: number;
}

export const TimelineCard = ({
  year,
  title,
  description,
  icon,
  isLeft = true,
  index,
}: TimelineCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative flex items-center gap-8 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Content Card */}
      <div
        className={`flex-1 ${isLeft ? "md:text-right" : "md:text-left"}`}
      >
        <div className="bg-card p-6 rounded-xl shadow-soft border border-border hover:shadow-medium transition-shadow duration-300">
          <span className="inline-block px-3 py-1 text-sm font-medium text-accent bg-accent/10 rounded-full mb-3">
            {year}
          </span>
          <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>

      {/* Center Icon */}
      <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-medium z-10">
        {icon}
      </div>

      {/* Empty space for alignment */}
      <div className="hidden md:block flex-1" />
    </motion.div>
  );
};
