import { Link } from "react-scroll";
import { Heart, Linkedin, Github, Mail, BarChart3 } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-gradient-to-b from-background to-muted/40">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <Link
              to="home"
              smooth
              duration={600}
              className="inline-flex items-center gap-2 cursor-pointer"
            >
              <div className="h-9 w-9 rounded-xl btn-primary grid place-items-center">
                <BarChart3 className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-lg text-secondary">Chetna Upadhyay</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              Data Analyst & MBA. Turning numbers into decisions.
            </p>
          </div>

          <div className="md:text-center">
            <div className="text-sm font-semibold text-secondary mb-3">Quick Links</div>
            <div className="flex flex-wrap md:justify-center gap-x-4 gap-y-2 text-sm">
              {["about", "skills", "projects", "experience", "contact"].map((s) => (
                <Link
                  key={s}
                  to={s}
                  smooth
                  duration={600}
                  offset={-80}
                  className="cursor-pointer text-muted-foreground hover:text-primary capitalize"
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:text-right">
            <div className="text-sm font-semibold text-secondary mb-3">Connect</div>
            <div className="flex md:justify-end gap-3">
              <a
                href="mailto:chetnaupadhyayru@gmail.com"
                aria-label="Email"
                className="h-10 w-10 rounded-xl glass grid place-items-center hover:text-primary"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/chetna-upadhyay"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="h-10 w-10 rounded-xl glass grid place-items-center hover:text-primary"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="h-10 w-10 rounded-xl glass grid place-items-center hover:text-primary"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/60 flex flex-col sm:flex-row gap-3 justify-between items-center text-xs text-muted-foreground">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-center">
            <p>© {new Date().getFullYear()} Chetna Upadhyay. All rights reserved.</p>
            <p className="inline-flex items-center gap-1.5">
              Designed with <Heart className="h-3.5 w-3.5 text-primary fill-primary" /> passion &
              data-driven creativity
            </p>
          </div>
          <p className="font-medium tracking-tight">
            Design & Developed by{" "}
            <a
              href="https://shivam-kumar.onrender.com"
              target="_blank"
              rel="noreferrer"
              className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-extrabold hover:scale-110 transition-transform inline-block cursor-pointer"
            >
              SHIVAM
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
