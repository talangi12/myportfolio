import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading text-xl font-semibold text-primary mb-4">
              Kleannat Chalvine
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Aspiring software engineer passionate about building innovative solutions. 
              Currently training at PLP Academy and studying at Kirinyaga University.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg font-medium text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "Childhood", "Education", "Skills", "Aspirations", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="text-muted-foreground text-sm hover:text-primary transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-medium text-foreground mb-4">
              Connect
            </h4>
            <p className="text-muted-foreground text-sm mb-4">
              Feel free to reach out and connect with me!
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors"
            >
              Get in Touch →
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} My Journey. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-accent fill-accent" /> and passion
          </p>
        </div>
      </div>
    </footer>
  );
};
