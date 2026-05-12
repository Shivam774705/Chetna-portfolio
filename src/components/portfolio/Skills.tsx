import { motion } from "framer-motion";
import {
  Brain,
  Database,
  Code,
  BarChart3,
  FileSpreadsheet,
  PieChart,
  Boxes,
  Sparkles,
  Server,
  Terminal,
  BookOpen,
  Table2,
} from "lucide-react";
import { SectionTitle } from "./SectionTitle";
import { stagger, item } from "./Reveal";

const technical = [
  { icon: Brain, name: "Machine Learning", level: 75 },
  { icon: BarChart3, name: "Data Analysis", level: 90 },
  { icon: Server, name: "Django", level: 70 },
  { icon: BookOpen, name: "Kaggle", level: 70 },
  { icon: Code, name: "Python", level: 85 },
  { icon: Database, name: "SQL", level: 90 },
  { icon: PieChart, name: "Power BI", level: 88 },
  { icon: FileSpreadsheet, name: "Excel", level: 92 },
  { icon: Sparkles, name: "Data Visualization", level: 85 },
];

const tools = [
  "VS Code",
  "Jupyter Notebook",
  "MySQL Workbench",
  "Advanced Excel",
  "SQL Data Queries",
];
const toolIcons = [Terminal, BookOpen, Database, FileSpreadsheet, Table2];

export function Skills() {
  return (
    <section id="skills" className="section-pad bg-gradient-to-b from-background to-muted/40">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Skills"
          title="My technical toolkit"
          subtitle="A curated set of tools I use to turn raw data into clear decisions."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {technical.map((s) => (
            <motion.div
              key={s.name}
              variants={item}
              whileHover={{ y: -6 }}
              className="group glass rounded-2xl p-6 relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary/0 group-hover:bg-primary/10 transition-all duration-500 blur-2xl" />
              <div className="flex items-center gap-3 mb-4">
                <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-primary to-secondary grid place-items-center">
                  <s.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-secondary">{s.name}</div>
                  <div className="text-xs text-muted-foreground">Proficiency {s.level}%</div>
                </div>
              </div>
              <div className="h-2 rounded-full bg-muted overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12">
          <h3 className="text-center text-xl font-bold text-secondary mb-6">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((t, i) => {
              const Icon = toolIcons[i];
              return (
                <motion.div
                  key={t}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="glass px-5 py-3 rounded-xl flex items-center gap-2 font-medium text-secondary"
                >
                  <Icon className="h-4 w-4 text-primary" /> {t}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
