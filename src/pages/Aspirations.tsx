import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { motion } from "framer-motion";
import { 
  Rocket, 
  Target, 
  Heart, 
  Globe, 
  Briefcase, 
  GraduationCap,
  Star,
  TrendingUp,
  Code,
  Users
} from "lucide-react";
import aspirationsImage from "@/assets/future-vision.jpg";

const careerGoals = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Full-Stack Software Engineer",
    description: "Mastering both frontend and backend development to build complete, scalable applications that solve real-world problems.",
    timeline: "2-3 Years",
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Work at a Top Tech Company",
    description: "Joining a leading technology company where I can learn from experienced engineers and contribute to impactful projects.",
    timeline: "3-5 Years",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Build Products for Africa",
    description: "Creating technology solutions that address challenges unique to Africa and contribute to the continent's digital transformation.",
    timeline: "5-10 Years",
  },
];

const personalDreams = [
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Complete University",
    description: "Successfully graduating from Kirinyaga University with strong academic performance and practical skills.",
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Open Source Contributor",
    description: "Contributing to open source projects and becoming part of the global developer community.",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Tech Entrepreneur",
    description: "Eventually starting my own tech company or building a successful SaaS product.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Mentor Others",
    description: "Helping aspiring developers in Kenya and Africa learn software development and break into tech.",
  },
];

const values = [
  "Continuous Learning",
  "Excellence in Code",
  "Problem Solving",
  "Collaboration",
  "Innovation",
  "Integrity",
];

const Aspirations = () => {
  return (
    <Layout>
      <PageHeader
        title="Future Aspirations"
        subtitle="My dreams, goals, and the vision I hold for my future in software engineering"
      />

      {/* Vision Statement */}
      <SectionWrapper>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full mb-6">
                <Rocket className="w-4 h-4" />
                <span className="text-sm font-medium">My Vision</span>
              </div>
              
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Dreaming Big, Building Bold
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                I envision a future where I'm a skilled software engineer, building innovative 
                solutions that make a difference. My training at PLP Academy and studies at 
                Kirinyaga University are stepping stones toward becoming a full-stack developer 
                capable of creating impactful technology products.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                I'm passionate about using technology to solve problems, especially those 
                affecting communities in Kenya and across Africa. With dedication, continuous 
                learning, and hard work, I'm building the foundation for a successful career 
                in tech.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 gradient-gold rounded-2xl blur-xl opacity-30" />
              <img
                src={aspirationsImage}
                alt="Future vision"
                className="relative w-full rounded-2xl shadow-medium object-cover aspect-[4/3]"
              />
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Career Goals */}
      <SectionWrapper className="bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Career Goals
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The professional milestones I'm working towards in software engineering
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {careerGoals.map((goal, index) => (
              <motion.div
                key={goal.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-8 rounded-xl border border-border shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-lg bg-primary flex items-center justify-center text-primary-foreground">
                    {goal.icon}
                  </div>
                  <span className="px-3 py-1 text-sm font-medium text-accent bg-accent/10 rounded-full">
                    {goal.timeline}
                  </span>
                </div>
                
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {goal.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {goal.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Personal Dreams */}
      <SectionWrapper>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Personal Dreams
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Beyond career, the personal aspirations that drive me forward
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {personalDreams.map((dream, index) => (
              <motion.div
                key={dream.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-card p-6 rounded-xl border border-border shadow-soft hover:shadow-medium transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4">
                  {dream.icon}
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {dream.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {dream.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Guiding Values */}
      <SectionWrapper className="bg-primary/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Target className="w-12 h-12 mx-auto text-accent mb-6" />
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Guiding Values
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              These core values guide my decisions and shape my journey as a software engineer
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              {values.map((value, index) => (
                <motion.span
                  key={value}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="px-6 py-3 bg-card border border-border rounded-full font-medium text-foreground shadow-soft"
                >
                  {value}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default Aspirations;
