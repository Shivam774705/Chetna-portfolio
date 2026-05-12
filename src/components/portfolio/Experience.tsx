import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const experiences = [
  {
    role: "Data Analyst",
    company: "Shroti Telecom Pvt. Ltd.",
    period: "Jul 2025 – Present",
    points: [
      "Developed Django dashboards using SQL and Python to automate telecom energy and outage reports.",
      "Analyzed telecom site data to identify outages and performance issues.",
      "Built reporting systems that improved operational visibility and decision-making.",
    ],
  },
  {
    role: "Data Analyst Intern",
    company: "Nanostck Pvt. Ltd.",
    period: "Nov 2024 – Feb 2025",
    points: [
      "Created automated data systems for the 'Apna Thali' startup project.",
      "Tracked daily operations and improved reporting speed and accuracy.",
      "Delivered data-driven insights to support startup growth decisions.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="mx-auto max-w-5xl">
        <SectionTitle eyebrow="Experience" title="My professional journey" />

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary -translate-x-1/2" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className={`relative mb-12 md:mb-16 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"} pl-12 md:pl-0`}
            >
              <div className="absolute left-4 md:left-auto md:right-0 top-4 -translate-x-1/2 md:translate-x-1/2 h-8 w-8 rounded-full btn-primary grid place-items-center ring-4 ring-background">
                <Briefcase className="h-4 w-4 text-primary-foreground" />
              </div>
              {i % 2 !== 0 && <div className="hidden md:block absolute left-0 top-4 -translate-x-1/2 h-8 w-8" />}

              <motion.div whileHover={{ y: -4 }} className="glass-strong rounded-2xl p-6">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-secondary">{exp.role}</h3>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">{exp.period}</span>
                </div>
                <div className="text-primary font-semibold mb-3">{exp.company}</div>
                <ul className="space-y-2">
                  {exp.points.map((p) => (
                    <li key={p} className="text-sm text-muted-foreground flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
