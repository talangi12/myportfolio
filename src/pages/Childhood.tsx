import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { TimelineCard } from "@/components/cards/TimelineCard";
import { motion } from "framer-motion";
import { Baby, Home, Heart, Users, Smile, Star, BookOpen, Sparkles } from "lucide-react";
import childhoodImage from "@/assets/childhood-memories.jpg";

const childhoodMemories = [
  {
    year: "Early Years",
    title: "First Steps & First Words",
    description: "The magical moments of discovering the world for the first time. Every day was an adventure filled with wonder and curiosity about everything around me.",
    icon: <Baby className="w-5 h-5" />,
  },
  {
    year: "Age 4-6",
    title: "Starting My Education Journey",
    description: "Beginning at Promised Land Primary, where my formal education began. Learning to read, write, and make my first school friends.",
    icon: <BookOpen className="w-5 h-5" />,
  },
  {
    year: "Age 6-8",
    title: "Growing Through Different Schools",
    description: "Attending Blessed Faith Academy and Namboani Primary School, adapting to new environments and developing resilience through change.",
    icon: <Star className="w-5 h-5" />,
  },
  {
    year: "Age 8-10",
    title: "Family Adventures & Values",
    description: "Memorable family trips, holiday traditions, and learning important life values from my parents and extended family members.",
    icon: <Users className="w-5 h-5" />,
  },
  {
    year: "Age 10-12",
    title: "Discovering My Interests",
    description: "At Anevah Bright Academy and Judycates Premier Primary, I began exploring technology and discovered my early interest in computers.",
    icon: <Sparkles className="w-5 h-5" />,
  },
  {
    year: "Age 12-14",
    title: "Preparing for High School",
    description: "Final primary years at KAI School Academy, preparing for the Kenya Certificate of Primary Education (KCPE) and setting goals for my future.",
    icon: <Heart className="w-5 h-5" />,
  },
];

const familyValues = [
  {
    icon: <Home className="w-8 h-8" />,
    title: "Strong Family Bond",
    description: "Growing up in a loving household taught me the importance of family support, unconditional love, and always being there for each other.",
  },
  {
    icon: <Smile className="w-8 h-8" />,
    title: "Joy in Simple Things",
    description: "Learning to find happiness in everyday moments - playing with siblings, reading books, and spending quality time with friends and neighbors.",
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Curiosity & Wonder",
    description: "My childhood was filled with questions about how things work, especially technology, which later led me to pursue software engineering.",
  },
];

const Childhood = () => {
  return (
    <Layout>
      <PageHeader
        title="My Childhood"
        subtitle="A journey through the formative years that shaped my character, values, and outlook on life"
      />

      {/* Introduction Section */}
      <SectionWrapper>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 gradient-gold rounded-2xl blur-xl opacity-20" />
              <img
                src={childhoodImage}
                alt="Childhood memories"
                className="relative w-full rounded-2xl shadow-medium object-cover aspect-[4/3]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Where It All Began
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                My childhood was a tapestry of beautiful moments, loving family members, and 
                experiences that shaped who I am today. Growing up in Kenya, I was surrounded by 
                warmth, encouragement, and endless opportunities to explore and learn.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From my earliest memories of playing outdoors to the excitement of 
                starting school at various institutions across Kenya, each phase of my childhood 
                contributed to building my character and instilling values that I carry with me 
                to this day. The diversity of schools I attended taught me adaptability and resilience.
              </p>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Timeline Section */}
      <SectionWrapper className="bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Memorable Moments
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key milestones and cherished memories from my early years growing up in Kenya
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            {/* Center line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-8">
              {childhoodMemories.map((memory, index) => (
                <TimelineCard
                  key={memory.title}
                  {...memory}
                  isLeft={index % 2 === 0}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Values Section */}
      <SectionWrapper>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Values I Learned
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The foundations laid during my childhood continue to guide me today
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {familyValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6">
                  {value.icon}
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default Childhood;
