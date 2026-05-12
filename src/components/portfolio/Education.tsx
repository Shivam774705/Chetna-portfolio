import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const education = [
  { degree: "MBA — Master of Business Administration", school: "LNCT College", period: "2023 – 2025", grade: "8.03 CGPA" },
  { degree: "Bachelor's Degree", school: "TRS College, Rewa", period: "Graduated", grade: "75%" },
  { degree: "Higher Secondary (12th)", school: "—", period: "2018", grade: "68%" },
  { degree: "Secondary (10th)", school: "—", period: "2016", grade: "65%" },
];

export function Education() {
  return (
    <section id="education" className="section-pad bg-gradient-to-b from-background to-muted/40">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Education" title="Academic background" />

        <div className="grid md:grid-cols-2 gap-5">
          {education.map((e, i) => (
            <motion.div
              key={e.degree}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-6 flex gap-4"
            >
              <div className="h-12 w-12 shrink-0 rounded-xl btn-primary grid place-items-center">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2 flex-wrap">
                  <h3 className="font-bold text-secondary">{e.degree}</h3>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-accent/15 text-secondary">{e.grade}</span>
                </div>
                <div className="text-sm text-primary font-medium mt-1">{e.school}</div>
                <div className="text-xs text-muted-foreground mt-1">{e.period}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
