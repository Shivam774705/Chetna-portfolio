import { motion } from "framer-motion";
import { Award, ShieldCheck, BadgeCheck } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const certs = [
  {
    icon: Award,
    title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
    issuer: "Oracle University",
    desc: "Professional certification demonstrating expertise in machine learning, cloud data science, analytics, and OCI services.",
  },
  {
    icon: ShieldCheck,
    title: "DIGITAL 101 Journey Certificate",
    issuer: "IT-ITES SSC NASSCOM",
    desc: "Foundational digital skills program covering modern workplace technologies and analytics.",
  },
  {
    icon: BadgeCheck,
    title: "Project Presentation Certificate & Award",
    issuer: "Academic Recognition",
    desc: "Recognized for outstanding project presentation showcasing analytical thinking and communication.",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="section-pad">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Certifications" title="Credentials & badges" />

        <div className="grid md:grid-cols-3 gap-6">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative glass-strong rounded-3xl p-8 overflow-hidden"
            >
              {/* Shine */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12" />
              <div className="relative">
                <div className="mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-primary to-secondary grid place-items-center mb-5 shadow-[0_10px_30px_-5px_rgba(37,99,235,0.5)]">
                  <c.icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-center">
                  <div className="text-xs font-bold tracking-widest text-primary uppercase mb-2">
                    {c.issuer}
                  </div>
                  <h3 className="text-lg font-bold text-secondary mb-3 leading-snug">{c.title}</h3>
                  <p className="text-sm text-muted-foreground">{c.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
