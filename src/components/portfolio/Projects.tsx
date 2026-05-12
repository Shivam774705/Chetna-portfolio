import { motion } from "framer-motion";
import { TrendingUp, MapPin, Clock, Shield, BarChart3 } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const features = [
  { icon: BarChart3, label: "Data Cleaning (Excel + Python)" },
  { icon: TrendingUp, label: "Trend Analysis" },
  { icon: Clock, label: "Time Pattern Detection" },
  { icon: MapPin, label: "Location Hotspot Mapping" },
  { icon: Shield, label: "Road Safety Insights" },
];

function MiniBars() {
  const bars = [40, 70, 55, 85, 60, 92, 50];
  return (
    <div className="flex items-end gap-1.5 h-20">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: `${h}%` }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.6, ease: "easeOut" }}
          className="flex-1 rounded-t-md bg-gradient-to-t from-primary to-accent"
        />
      ))}
    </div>
  );
}

function MiniDonut() {
  return (
    <svg viewBox="0 0 36 36" className="h-20 w-20">
      <circle cx="18" cy="18" r="15.9" fill="none" stroke="currentColor" className="text-muted" strokeWidth="3" />
      <motion.circle
        cx="18" cy="18" r="15.9" fill="none" stroke="url(#g)" strokeWidth="3" strokeLinecap="round"
        initial={{ strokeDasharray: "0 100" }}
        whileInView={{ strokeDasharray: "72 100" }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        transform="rotate(-90 18 18)"
      />
      <defs>
        <linearGradient id="g" x1="0" x2="1">
          <stop offset="0%" stopColor="oklch(0.58 0.21 263)" />
          <stop offset="100%" stopColor="oklch(0.74 0.14 248)" />
        </linearGradient>
      </defs>
      <text x="18" y="20.5" textAnchor="middle" className="fill-secondary font-bold" fontSize="7">72%</text>
    </svg>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section-pad bg-gradient-to-b from-muted/40 to-background">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Projects" title="Featured work" subtitle="A deep dive into a real-world data analytics project." />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-strong rounded-3xl p-8 md:p-12 grid lg:grid-cols-2 gap-10 items-center relative overflow-hidden"
        >
          <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

          <div className="relative">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-4">Featured Project</span>
            <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Road Accident Data Analysis</h3>
            <p className="text-muted-foreground mb-6">
              Cleaned, analyzed and visualized a large dataset of accident records to surface time patterns, hotspot locations, and actionable road-safety insights — delivered as an interactive Power BI dashboard.
            </p>
            <ul className="space-y-3 mb-6">
              {features.map((f) => (
                <li key={f.label} className="flex items-center gap-3 text-sm text-secondary">
                  <span className="h-8 w-8 rounded-lg bg-primary/10 grid place-items-center">
                    <f.icon className="h-4 w-4 text-primary" />
                  </span>
                  {f.label}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {["Excel", "Python", "Power BI", "Data Cleaning"].map((t) => (
                <span key={t} className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-secondary/10 text-secondary">{t}</span>
              ))}
            </div>
          </div>

          {/* Dashboard mockup */}
          <motion.div
            whileHover={{ y: -6, rotate: -1 }}
            className="relative glass rounded-2xl p-5"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
              <div className="h-2.5 w-2.5 rounded-full bg-accent" />
              <div className="h-2.5 w-2.5 rounded-full bg-primary/40" />
              <div className="ml-auto text-xs text-muted-foreground">accident_dashboard.pbix</div>
            </div>
            <div className="grid grid-cols-3 gap-3 mb-4">
              {[
                { l: "Total", v: "12.4K" },
                { l: "Hotspots", v: "38" },
                { l: "Peak Hr", v: "18:00" },
              ].map((k) => (
                <div key={k.l} className="rounded-xl bg-white/70 p-3 text-center">
                  <div className="text-xs text-muted-foreground">{k.l}</div>
                  <div className="text-lg font-bold text-gradient">{k.v}</div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-3 items-end">
              <div className="col-span-2 rounded-xl bg-white/70 p-4">
                <div className="text-xs text-muted-foreground mb-2">Accidents by hour</div>
                <MiniBars />
              </div>
              <div className="rounded-xl bg-white/70 p-4 grid place-items-center">
                <MiniDonut />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
