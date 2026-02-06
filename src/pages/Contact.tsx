import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github,
  CheckCircle,
  Instagram,
  Facebook
} from "lucide-react";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  subject: z.string().trim().min(1, "Subject is required").max(200, "Subject must be less than 200 characters"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    value: "talangichalvine@gmail.com",
    link: "mailto:talangichalvine@gmail.com",
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    value: "+254 798 959 954",
    link: "tel:+254798959954",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Location",
    value: "Kenya",
    link: null,
  },
];

const socialLinks = [
  {
    icon: <Instagram className="w-5 h-5" />,
    name: "Instagram",
    link: "https://www.instagram.com/kleannat?igsh=ZTFzdHU4ZmlzOW00",
  },
  {
    icon: <Facebook className="w-5 h-5" />,
    name: "Facebook",
    link: "https://www.facebook.com/share/1DHHJdn8Mx/",
  },
  {
    icon: <Github className="w-5 h-5" />,
    name: "GitHub",
    link: "https://github.com/talangi12",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const validatedData = contactSchema.parse(formData);
      
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setIsSubmitted(true);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      // Reset form after success
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<ContactFormData> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <PageHeader
        title="Get in Touch"
        subtitle="I'd love to hear from you! Whether you have a question, collaboration idea, or just want to say hello"
      />

      <SectionWrapper>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Let's Connect
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Feel free to reach out through any of the channels below. I'm always 
                open to discussing new opportunities, collaborations, or just having 
                a friendly conversation about software development and technology.
              </p>

              {/* Contact Details */}
              <div className="space-y-6 mb-10">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.title}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="font-medium text-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium text-foreground">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
                  Follow Me
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 shadow-soft"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-card p-8 rounded-xl border border-border shadow-soft">
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">
                  Send a Message
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 mx-auto text-primary mb-4" />
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                      Thank You!
                    </h3>
                    <p className="text-muted-foreground">
                      Your message has been sent. I'll respond as soon as possible.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg bg-background border ${
                          errors.name ? "border-destructive" : "border-input"
                        } focus:outline-none focus:ring-2 focus:ring-ring transition-all`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-destructive">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg bg-background border ${
                          errors.email ? "border-destructive" : "border-input"
                        } focus:outline-none focus:ring-2 focus:ring-ring transition-all`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-destructive">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg bg-background border ${
                          errors.subject ? "border-destructive" : "border-input"
                        } focus:outline-none focus:ring-2 focus:ring-ring transition-all`}
                        placeholder="What's this about?"
                      />
                      {errors.subject && (
                        <p className="mt-1 text-sm text-destructive">{errors.subject}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={`w-full px-4 py-3 rounded-lg bg-background border ${
                          errors.message ? "border-destructive" : "border-input"
                        } focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none`}
                        placeholder="Your message here..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-destructive">{errors.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 font-medium text-primary-foreground gradient-accent rounded-lg shadow-medium hover:shadow-accent transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default Contact;
