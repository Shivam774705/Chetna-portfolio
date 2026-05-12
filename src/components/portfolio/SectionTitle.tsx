import { Reveal } from "./Reveal";

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="text-center max-w-2xl mx-auto mb-14">
      <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary mb-4">
        {eyebrow}
      </span>
      <h2 className="text-4xl md:text-5xl font-bold text-secondary">
        {title.split(" ").slice(0, -1).join(" ")}{" "}
        <span className="text-gradient">{title.split(" ").slice(-1)}</span>
      </h2>
      {subtitle && <p className="mt-4 text-muted-foreground text-lg">{subtitle}</p>}
    </Reveal>
  );
}
