import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SkillCard } from "@/components/cards/SkillCard";
import { motion } from "framer-motion";
import { 
  Code, 
  Database,
  MessageSquare, 
  Users, 
  Lightbulb, 
  BookOpen,
  Globe,
  Briefcase,
  Terminal,
  GitBranch,
  Server,
  Smartphone
} from "lucide-react";

const technicalSkills = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Frontend Development",
    description: "Proficient in React, TypeScript, JavaScript, HTML5, and CSS3. Building responsive and interactive user interfaces.",
    level: 85,
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: "Backend Development",
    description: "Experience with Node.js, Python, and RESTful API development. Building scalable server-side applications.",
    level: 75,
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Databases",
    description: "Working with SQL and NoSQL databases including PostgreSQL, MySQL, and MongoDB for data management.",
    level: 70,
  },
  {
    icon: <GitBranch className="w-6 h-6" />,
    title: "Version Control",
    description: "Proficient in Git and GitHub for collaborative development, branching strategies, and code management.",
    level: 80,
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Web Technologies",
    description: "Expertise in modern web frameworks, Tailwind CSS, and responsive design principles.",
    level: 85,
  },
  {
    icon: <Terminal className="w-6 h-6" />,
    title: "Development Tools",
    description: "Comfortable with VS Code, terminal/CLI, npm/yarn, and various development and debugging tools.",
    level: 80,
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile Development",
    description: "Exploring React Native and cross-platform mobile app development for iOS and Android.",
    level: 60,
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Agile & Project Management",
    description: "Understanding of Agile methodologies, Scrum, and collaborative project development workflows.",
    level: 70,
  },
];

const softSkills = [
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Communication",
    description: "Clear and effective verbal and written communication in professional and personal settings.",
    level: 90,
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Teamwork",
    description: "Collaborative approach to working with others, valuing diverse perspectives and ideas in development teams.",
    level: 88,
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Problem Solving",
    description: "Analytical thinking and debugging skills to overcome technical challenges and find optimal solutions.",
    level: 85,
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Continuous Learning",
    description: "Dedicated to staying updated with the latest technologies and best practices in software development.",
    level: 95,
  },
];

const accomplishments = [
  {
    title: "PLP Academy Training",
    description: "Currently enrolled in the Power Learn Project Academy, gaining practical software engineering skills and building real-world projects.",
  },
  {
    title: "Full-Stack Projects",
    description: "Developed multiple full-stack web applications using React, Node.js, and modern databases as part of my training.",
  },
  {
    title: "GitHub Portfolio",
    description: "Maintaining an active GitHub profile with various projects showcasing my coding skills and learning journey.",
  },
  {
    title: "University Studies",
    description: "Pursuing higher education at Kirinyaga University while balancing practical skills development.",
  },
];

const Skills = () => {
  return (
    <Layout>
      <PageHeader
        title="Skills & Expertise"
        subtitle="A showcase of my software engineering abilities, technical skills, and professional competencies"
      />

      {/* Technical Skills */}
      <SectionWrapper>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Technical Skills
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The software engineering skills I've developed through education and hands-on practice
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalSkills.map((skill, index) => (
              <SkillCard key={skill.title} {...skill} index={index} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Soft Skills */}
      <SectionWrapper className="bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Soft Skills
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The interpersonal abilities that help me thrive in collaborative development environments
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <SkillCard key={skill.title} {...skill} index={index} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Accomplishments */}
      <SectionWrapper>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Accomplishments
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key milestones and achievements in my software engineering journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {accomplishments.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-6 rounded-xl border border-border shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Call to Action */}
      <SectionWrapper className="bg-primary/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Always Growing
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              As a software engineer in training, I believe in continuous learning and improvement. 
              Every project is an opportunity to grow, and I'm committed to mastering new technologies 
              and best practices as I build my career in tech.
            </p>
          </motion.div>
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default Skills;
