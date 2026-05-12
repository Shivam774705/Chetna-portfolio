import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send, CheckCircle2, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import { SectionTitle } from "./SectionTitle";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(80),
  email: z.string().trim().email("Invalid email").max(160),
  subject: z.string().trim().min(2, "Subject is too short").max(120),
  message: z.string().trim().min(10, "Tell me a bit more").max(1500),
});

type FormState = z.infer<typeof schema>;

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "chetnaupadhyayru@gmail.com",
    href: "mailto:chetnaupadhyayru@gmail.com",
  },
  { icon: Phone, label: "Phone", value: "+917747959972", href: "tel:+917747959972" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "chetna-upadhyay",
    href: "https://www.linkedin.com/in/chetna-upadhyay",
  },
  { icon: Github, label: "GitHub", value: "github.com", href: "#" },
];

export function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const fe: Partial<Record<keyof FormState, string>> = {};
      parsed.error.issues.forEach((i) => {
        fe[i.path[0] as keyof FormState] = i.message;
      });
      setErrors(fe);
      return;
    }
    setErrors({});
    setLoading(true);

    // EmailJS — configure with your own keys
    const SERVICE_ID = (import.meta as any).env?.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = (import.meta as any).env?.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = (import.meta as any).env?.VITE_EMAILJS_PUBLIC_KEY;

    try {
      if (SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY && SERVICE_ID !== "your_service_id") {
        await emailjs.send(SERVICE_ID, TEMPLATE_ID, parsed.data as any, { publicKey: PUBLIC_KEY });
      } else {
        // Fallback simulated send so the UI works out-of-the-box
        console.warn("EmailJS keys missing. Message not actually sent. Check .env file.");
        toast.warning("Email service not configured", {
          description: "Please set your EmailJS keys in the .env file to receive emails.",
        });
        await new Promise((r) => setTimeout(r, 900));
      }
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSent(false), 4500);
    } catch (err) {
      console.error("EmailJS Error:", err);
      setServerError("Sorry — message couldn't be sent. Please email directly.");
      toast.error("Failed to send message", {
        description: "There was an error connecting to the email service.",
      });
    } finally {
      setLoading(false);
    }
  };

  const field = (k: keyof FormState, label: string, type = "text", textarea = false) => (
    <div>
      <label className="block text-sm font-semibold text-secondary mb-1.5">{label}</label>
      {textarea ? (
        <textarea
          value={form[k]}
          onChange={(e) => setForm({ ...form, [k]: e.target.value })}
          rows={5}
          className="w-full rounded-xl bg-white/70 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none px-4 py-3 text-sm transition"
        />
      ) : (
        <input
          type={type}
          value={form[k]}
          onChange={(e) => setForm({ ...form, [k]: e.target.value })}
          className="w-full rounded-xl bg-white/70 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none px-4 py-3 text-sm transition"
        />
      )}
      {errors[k] && <p className="mt-1 text-xs text-destructive">{errors[k]}</p>}
    </div>
  );

  return (
    <section id="contact" className="section-pad bg-gradient-to-b from-muted/40 to-background">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Contact"
          title="Let's work together"
          subtitle="Have a role or project in mind? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="glass-strong rounded-3xl p-7">
              <h3 className="text-2xl font-bold text-secondary mb-2">Get in touch</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Open to data analyst, business analyst & MIS roles.
              </p>
              <div className="space-y-3">
                {contacts.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/5 transition group"
                  >
                    <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-primary to-secondary grid place-items-center group-hover:scale-110 transition">
                      <c.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">{c.label}</div>
                      <div className="text-sm font-semibold text-secondary break-all">
                        {c.value}
                      </div>
                    </div>
                  </a>
                ))}
                <div className="flex items-center gap-3 p-3 rounded-xl">
                  <div className="h-11 w-11 rounded-xl bg-accent/15 grid place-items-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Location</div>
                    <div className="text-sm font-semibold text-secondary">
                      India · Open to work
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={onSubmit}
            className="lg:col-span-3 glass-strong rounded-3xl p-7 space-y-4 relative"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {field("name", "Your Name")}
              {field("email", "Email", "email")}
            </div>
            {field("subject", "Subject")}
            {field("message", "Message", "text", true)}

            {serverError && <p className="text-sm text-destructive">{serverError}</p>}

            <button
              type="submit"
              disabled={loading}
              className="btn-primary px-6 py-3.5 rounded-xl font-semibold inline-flex items-center gap-2 disabled:opacity-60"
            >
              <Send className="h-4 w-4" /> {loading ? "Sending..." : "Send Message"}
            </button>

            <AnimatePresence>
              {sent && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute inset-0 grid place-items-center bg-white/85 backdrop-blur-sm rounded-3xl"
                >
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-primary to-secondary grid place-items-center mb-3"
                    >
                      <CheckCircle2 className="h-8 w-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-secondary">Message sent!</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      I'll get back to you shortly.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
