import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ArrowRight, BookOpen, GraduationCap, Heart, Sparkles, Target, User } from "lucide-react";
import heroImage from "@/assets/hero-portrait.jpg";

const journeyHighlights = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Childhood",
    description: "Cherished memories and formative experiences",
    link: "/childhood",
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Education",
    description: "Academic achievements and learning journey",
    link: "/education",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Skills",
    description: "Talents and abilities I've developed",
    link: "/skills",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Aspirations",
    description: "Dreams and goals for the future",
    link: "/aspirations",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block px-4 py-2 text-sm font-medium text-accent bg-accent/10 rounded-full mb-6"
              >
                Welcome to my personal journey
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
              >
                Hello, I'm{" "}
                <span className="text-gradient-gold">Kleannat Chalvine</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
              >
                A passionate individual on a journey of growth, learning, and discovery. 
                Explore my story from childhood memories to future aspirations.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link
                  to="/childhood"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 font-medium text-primary-foreground gradient-accent rounded-lg shadow-medium hover:shadow-accent transition-all duration-300 hover:-translate-y-1"
                >
                  Explore My Journey
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 font-medium text-primary bg-secondary hover:bg-secondary/80 rounded-lg transition-all duration-300"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 gradient-gold rounded-2xl blur-2xl opacity-30 animate-float" />
                <img
                  src={heroImage}
                  alt="Portrait"
                  className="relative w-full h-auto rounded-2xl shadow-medium object-cover aspect-[4/5]"
                />
                
                {/* Floating badges */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute -left-8 top-1/4 bg-card p-4 rounded-xl shadow-medium border border-border"
                >
                  <BookOpen className="w-6 h-6 text-primary" />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="absolute -right-8 bottom-1/4 bg-card p-4 rounded-xl shadow-medium border border-border"
                >
                  <User className="w-6 h-6 text-accent" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-2.5 bg-accent rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Journey Highlights */}
      <SectionWrapper className="bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Explore My Story
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the different chapters of my life that have shaped who I am today
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {journeyHighlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={item.link}
                  className="group block bg-card p-8 rounded-xl border border-border shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {item.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:text-accent transition-colors">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Quote Section */}
      <SectionWrapper>
        <div className="container mx-auto px-6">
          <motion.blockquote
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="text-6xl text-accent/30 font-heading mb-4">"</div>
            <p className="font-heading text-2xl md:text-3xl lg:text-4xl text-foreground italic leading-relaxed mb-6">
              Life is a journey, not a destination. Every experience, every challenge, and every triumph has shaped the person I am today.
            </p>
            <footer className="text-muted-foreground">
              — My Personal Philosophy
            </footer>
          </motion.blockquote>
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default Index;
