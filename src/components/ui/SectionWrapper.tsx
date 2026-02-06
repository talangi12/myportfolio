import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const SectionWrapper = ({ children, className = "", delay = 0 }: SectionWrapperProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className={`py-16 md:py-24 ${className}`}
    >
      {children}
    </motion.section>
  );
};
