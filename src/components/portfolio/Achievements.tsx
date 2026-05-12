import { motion } from "framer-motion";
import { Trophy, Music, FileBadge } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const items = [
  {
    icon: Music,
    title: "1st Prize — College Singing Competition",
    desc: "Winner of the inter-college singing competition, demonstrating confidence and stage presence.",
  },
  {
    icon: FileBadge,
    title: "DIGITAL 101 Journey Certificate",
    desc: "IT-ITES SSC NASSCOM recognized digital literacy program.",
  },
  {
    icon: Trophy,
    title: "Project Presentation Award",
    desc: "Awarded for delivering an outstanding analytical project presentation.",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="section-pad">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Achievements" title="Recognition & wins" />

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6, rotate: 0.5 }}
              className="glass-strong rounded-3xl p-7 relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-2xl" />
              <div className="relative">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-secondary grid place-items-center mb-4">
                  <a.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-bold text-secondary text-lg mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground">{a.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
