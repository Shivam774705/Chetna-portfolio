import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, BarChart3 } from "lucide-react";

const links = [
  { to: "home", label: "Home" },
  { to: "about", label: "About" },
  { to: "skills", label: "Skills" },
  { to: "experience", label: "Experience" },
  { to: "projects", label: "Projects" },
  { to: "certifications", label: "Certifications" },
  { to: "education", label: "Education" },
  { to: "achievements", label: "Achievements" },
  { to: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all ${
            scrolled ? "glass-strong" : "glass"
          }`}
        >
          <Link to="home" smooth duration={600} className="flex items-center gap-2 cursor-pointer">
            <div className="h-9 w-9 rounded-xl btn-primary grid place-items-center">
              <BarChart3 className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-lg text-secondary">
              Chetna<span className="text-primary">.</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                smooth
                duration={600}
                spy
                offset={-80}
                activeClass="!text-primary !bg-primary/10"
                className="cursor-pointer text-sm font-medium text-muted-foreground hover:text-primary px-3 py-2 rounded-lg transition-all hover:bg-primary/5"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <Link
            to="contact"
            smooth
            duration={600}
            offset={-80}
            className="hidden lg:inline-flex btn-primary px-5 py-2.5 rounded-xl text-sm font-semibold cursor-pointer"
          >
            Hire Me
          </Link>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((s) => !s)}
            className="lg:hidden p-2 rounded-lg text-secondary hover:bg-primary/10"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden mt-2 glass-strong rounded-2xl p-3 flex flex-col"
            >
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  smooth
                  duration={600}
                  spy
                  offset={-80}
                  onClick={() => setOpen(false)}
                  activeClass="!text-primary !bg-primary/10"
                  className="cursor-pointer text-sm font-medium text-muted-foreground px-4 py-3 rounded-lg hover:bg-primary/5"
                >
                  {l.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
