import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SkillCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  level: number;
  index: number;
}

export const SkillCard = ({ title, description, icon, level, index }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group bg-card p-6 rounded-xl border border-border shadow-soft hover:shadow-medium transition-all duration-300"
    >
      <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
        {icon}
      </div>
      
      <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
        {title}
      </h3>
      
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        {description}
      </p>

      {/* Skill Level Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Proficiency</span>
          <span className="text-primary font-medium">{level}%</span>
        </div>
        <div className="h-2 bg-secondary rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
            className="h-full gradient-accent rounded-full"
          />
        </div>
      </div>
    </motion.div>
  );
};
