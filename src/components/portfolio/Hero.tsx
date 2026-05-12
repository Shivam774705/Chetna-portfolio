import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import {
  Download,
  Mail,
  Linkedin,
  Github,
  Sparkles,
  TrendingUp,
  BarChart3,
  PieChart,
} from "lucide-react";
import profile from "@/assets/profile.jpg";

function FloatingChip({
  icon: Icon,
  label,
  className,
  delay,
}: {
  icon: any;
  label: string;
  className?: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
      transition={{
        opacity: { duration: 0.6, delay },
        scale: { duration: 0.6, delay },
        y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay },
      }}
      className={`absolute glass rounded-2xl px-4 py-3 flex items-center gap-2 ${className}`}
    >
      <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-secondary grid place-items-center">
        <Icon className="h-4 w-4 text-white" />
      </div>
      <div>
        <div className="text-xs text-muted-foreground">{label.split("|")[0]}</div>
        <div className="text-sm font-bold text-secondary">{label.split("|")[1]}</div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-hero overflow-hidden pt-32 pb-20">
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--secondary) 1px, transparent 1px), linear-gradient(90deg, var(--secondary) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm font-medium text-secondary">
              <Sparkles className="h-4 w-4 text-primary" /> Available for new opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-5xl md:text-7xl font-extrabold leading-[1.05] text-secondary"
          >
            Hi, I'm <span className="text-gradient">Chetna</span>
            <br />
            Upadhyay
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-5 text-2xl md:text-3xl font-semibold text-primary h-10"
          >
            <TypeAnimation
              sequence={[
                "Data Analyst",
                2000,
                "Business Analyst",
                2000,
                "SQL & Power BI Specialist",
                2000,
                "Python Data Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-6 text-lg text-muted-foreground max-w-xl"
          >
            Transforming data into meaningful business insights through analytics and visualization.
            MBA graduate with hands-on experience in SQL, Python, Power BI and dashboard
            development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="/Chetna_Upadhyay_Resume.pdf"
              download
              className="btn-primary px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <Link
              to="contact"
              smooth
              duration={600}
              offset={-80}
              className="cursor-pointer btn-ghost-glass px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </Link>
            <a
              href="https://www.linkedin.com/in/chetna-upadhyay"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="btn-ghost-glass h-12 w-12 grid place-items-center rounded-xl"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="btn-ghost-glass h-12 w-12 grid place-items-center rounded-xl"
            >
              <Github className="h-5 w-5" />
            </a>
          </motion.div>
        </div>

        {/* Right visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md aspect-square"
        >
          {/* Glow ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-accent to-secondary blur-3xl opacity-30 animate-pulse" />
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary to-secondary p-1.5">
            <div className="h-full w-full rounded-full bg-background overflow-hidden">
              <img
                src={profile}
                alt="Chetna Upadhyay"
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Rotating dashed border */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30"
          />

          <FloatingChip
            icon={TrendingUp}
            label="Growth|+24%"
            className="-left-4 top-10"
            delay={0.6}
          />
          <FloatingChip
            icon={BarChart3}
            label="Reports|Automated"
            className="-right-6 top-1/3"
            delay={0.8}
          />
          <FloatingChip
            icon={PieChart}
            label="Dashboards|Power BI"
            className="left-2 -bottom-2"
            delay={1}
          />
        </motion.div>
      </div>
    </section>
  );
}
