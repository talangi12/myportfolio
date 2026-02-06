import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export const PageHeader = ({ title, subtitle, children }: PageHeaderProps) => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 gradient-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
};
