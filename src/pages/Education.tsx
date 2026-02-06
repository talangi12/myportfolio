import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award, Trophy, Users, Lightbulb, Code } from "lucide-react";
import educationImage from "@/assets/education-journey.jpg";

const educationTimeline = [
  {
    period: "Primary School",
    years: "Early Years",
    school: "Promised Land Primary",
    achievements: [
      "Strong foundation in academics",
      "Active class participation",
      "Basic computer literacy",
    ],
    description: "My first steps into formal education, where I discovered my love for learning and curiosity about technology.",
  },
  {
    period: "Primary School",
    years: "Continued",
    school: "Blessed Faith Academy",
    achievements: [
      "Academic excellence",
      "Leadership development",
      "Creative writing awards",
    ],
    description: "Building on my foundation with a focus on faith-based values and academic growth.",
  },
  {
    period: "Primary School",
    years: "Continued",
    school: "Namboani Primary School",
    achievements: [
      "Science competition participant",
      "Math club member",
      "Environmental club",
    ],
    description: "Exploring new subjects and developing a passion for science and mathematics.",
  },
  {
    period: "Primary School",
    years: "Continued",
    school: "Anevah Bright Academy",
    achievements: [
      "Top performer in class",
      "Sports participation",
      "Arts and crafts",
    ],
    description: "A well-rounded education experience focusing on academics and extracurricular activities.",
  },
  {
    period: "Primary School",
    years: "Continued",
    school: "Judycates Premier Primary",
    achievements: [
      "Academic awards",
      "Computer studies introduction",
      "Debate team member",
    ],
    description: "Strengthening my communication skills and getting my first formal introduction to computers.",
  },
  {
    period: "Primary School",
    years: "Final Year",
    school: "KAI School Academy",
    achievements: [
      "KCPE preparation",
      "Technology exposure",
      "Leadership roles",
    ],
    description: "Preparing for the transition to high school with a strong academic finish.",
  },
  {
    period: "High School",
    years: "Secondary Education",
    school: "Friends School Kamusinga",
    achievements: [
      "KCSE qualification",
      "Computer Studies Club",
      "Academic excellence",
    ],
    description: "A prestigious national school where I honed my academic skills, discovered my passion for technology, and prepared for higher education.",
  },
  {
    period: "University",
    years: "Current",
    school: "Kirinyaga University",
    achievements: [
      "Software Engineering student",
      "Programming fundamentals",
      "Project development",
    ],
    description: "Pursuing my degree in a technology-focused field, building the foundation for my software engineering career.",
  },
  {
    period: "Skills Academy",
    years: "Current",
    school: "PLP Academy",
    achievements: [
      "Full-stack development",
      "Modern web technologies",
      "Industry-ready skills",
    ],
    description: "Intensive software skills training at Power Learn Project Academy, gaining hands-on experience with real-world projects and modern development tools.",
  },
];

const extracurriculars = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Coding Clubs",
    description: "Active member of programming clubs, participating in coding challenges and hackathons.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Leadership",
    description: "Taking on leadership roles in student organizations and group projects.",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Tech Communities",
    description: "Engaging with developer communities online and attending tech meetups.",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Innovation Projects",
    description: "Working on personal and group tech projects to solve real-world problems.",
  },
];

const Education = () => {
  return (
    <Layout>
      <PageHeader
        title="Education"
        subtitle="My academic journey through years of learning, growth, and achievement"
      />

      {/* Introduction */}
      <SectionWrapper>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6">
                A Lifelong Learner
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Education has always been more than just grades and diplomas to me. It's been 
                a journey of self-discovery, intellectual growth, and personal development. 
                From my first day of school to my current pursuits in software engineering, 
                each step has been a building block in shaping who I am.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently studying at Kirinyaga University and training at PLP Academy, 
                I'm passionate about software development and building technology solutions 
                that make a difference. My diverse educational background has taught me 
                adaptability and resilience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 gradient-accent rounded-2xl blur-xl opacity-20" />
              <img
                src={educationImage}
                alt="Education journey"
                className="relative w-full rounded-2xl shadow-medium object-cover aspect-[4/3]"
              />
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Education Timeline */}
      <SectionWrapper className="bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Academic Journey
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From primary school to university - each chapter of my educational story
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {educationTimeline.map((edu, index) => (
              <motion.div
                key={`${edu.school}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-card rounded-xl border border-border shadow-soft overflow-hidden hover:shadow-medium transition-shadow duration-300"
              >
                <div className="md:flex">
                  <div className="md:w-1/3 p-6 bg-primary/5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center text-primary-foreground">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-heading text-lg font-semibold text-foreground">
                          {edu.period}
                        </h3>
                        <p className="text-sm text-muted-foreground">{edu.years}</p>
                      </div>
                    </div>
                    <p className="text-primary font-medium">{edu.school}</p>
                  </div>
                  
                  <div className="md:w-2/3 p-6">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {edu.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement) => (
                        <span
                          key={achievement}
                          className="inline-flex items-center gap-1 px-3 py-1 text-sm bg-accent/10 text-accent rounded-full"
                        >
                          <Award className="w-3 h-3" />
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Extracurriculars */}
      <SectionWrapper>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Beyond the Classroom
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Extracurricular activities that enriched my educational experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {extracurriculars.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-6 rounded-xl border border-border shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">
                  {activity.icon}
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {activity.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {activity.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default Education;
