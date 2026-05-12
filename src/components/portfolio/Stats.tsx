import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Briefcase, Layers, Code2, Award, FolderKanban } from "lucide-react";

const stats = [
  { icon: Briefcase, value: 1, suffix: "+", label: "Years Experience" },
  { icon: Layers, value: 2, suffix: "+", label: "Professional Roles" },
  { icon: Code2, value: 5, suffix: "+", label: "Technical Skills" },
  { icon: Award, value: 3, suffix: "+", label: "Certifications" },
  { icon: FolderKanban, value: 1, suffix: "", label: "Major Project" },
];

function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v).toString());

  useEffect(() => {
    if (inView) animate(count, to, { duration: 1.6, ease: "easeOut" });
  }, [inView, to, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function Stats() {
  return (
    <section className="px-6">
      <div className="mx-auto max-w-7xl -mt-8 mb-8">
        <div className="glass-strong rounded-3xl p-8 grid grid-cols-2 md:grid-cols-5 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center"
            >
              <div className="mx-auto h-12 w-12 rounded-xl bg-primary/10 grid place-items-center mb-3">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-4xl md:text-5xl font-extrabold text-gradient">
                <Counter to={s.value} />
                {s.suffix}
              </div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
