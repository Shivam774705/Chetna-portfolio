import { motion } from "framer-motion";
import { Database, LineChart, Target, Award } from "lucide-react";
import { Reveal, stagger, item } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

const highlights = [
  {
    icon: Database,
    title: "Data Analysis",
    desc: "SQL, Python & Excel for clean, reliable insights.",
  },
  { icon: LineChart, title: "Visualization", desc: "Power BI dashboards that tell a story." },
  { icon: Target, title: "Business Focus", desc: "MBA-backed approach to decision-making." },
  { icon: Award, title: "Certified", desc: "Oracle Cloud Infra Data Science Professional." },
];

export function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="About Me" title="A blend of data and business" />

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl rounded-3xl" />
              <div className="relative glass-strong rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-secondary mb-4">Professional Summary</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Data Analyst with hands-on experience in{" "}
                  <span className="text-secondary font-semibold">
                    SQL, Python, Excel and Power BI
                  </span>{" "}
                  for data analysis, dashboard development, and MIS reporting. Skilled in telecom
                  data analysis, reporting automation, data cleaning, and creating impactful visual
                  dashboards to support business decision-making.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-muted-foreground">Name</div>
                    <div className="font-semibold text-secondary">Chetna Upadhyay</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Degree</div>
                    <div className="font-semibold text-secondary">MBA, 8.03 CGPA</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Location</div>
                    <div className="font-semibold text-secondary">India</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Status</div>
                    <div className="font-semibold text-primary">Open to work</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid sm:grid-cols-2 gap-5"
          >
            {highlights.map((h) => (
              <motion.div
                key={h.title}
                variants={item}
                whileHover={{ y: -6 }}
                className="glass rounded-2xl p-6 transition-shadow hover:shadow-[0_20px_50px_-15px_rgba(37,99,235,0.35)]"
              >
                <div className="h-12 w-12 rounded-xl btn-primary grid place-items-center mb-4">
                  <h.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h4 className="font-bold text-secondary mb-1">{h.title}</h4>
                <p className="text-sm text-muted-foreground">{h.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
