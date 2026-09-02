import { useState, type FormEvent, type ReactNode } from "react";
import { Icon } from "@/components/icons";
import { sendContactEmail } from "@/lib/contact-mailer";

/**
 * Extracted verbatim from the homepage so both `/` and `/contact` render the
 * exact same contact form/content instead of duplicating it.
 */
const BUDGET_OPTIONS = [
  "Not sure yet",
  "Under $2,000",
  "$2,000–$5,000",
  "$5,000–$10,000",
  "$10,000+",
];
const TIMELINE_OPTIONS = ["ASAP", "Within 1 month", "1–3 months", "Just exploring"];

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-foreground">{label}</span>
      <div className="mt-1.5">{children}</div>
      {error && <span className="mt-1 block text-xs text-red-500">{error}</span>}
    </label>
  );
}

export default function ContactSection() {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    building: "",
    problem: "",
    budget: "",
    timeline: "",
    details: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid work email";
    if (!form.building.trim()) e.building = "Tell us what you're looking to build";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSending(true);
    setSendError("");
    try {
      await sendContactEmail({ data: form });
      setSent(true);
      setForm({
        name: "",
        email: "",
        company: "",
        building: "",
        problem: "",
        budget: "",
        timeline: "",
        details: "",
      });
      setTimeout(() => {
        setSent(false);
        setShowForm(false);
      }, 4000);
    } catch {
      setSendError(
        "Something went wrong sending your message. Please try again, or email us directly at syncnowise@gmail.com.",
      );
    } finally {
      setSending(false);
    }
  };

  const field =
    "w-full px-3.5 py-2.5 rounded-lg border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all";

  return (
    <section id="contact" className="section-y bg-white relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(900px 480px at 50% 0%, rgba(37,99,235,0.08), transparent 65%), radial-gradient(700px 460px at 90% 100%, rgba(124,58,237,0.08), transparent 65%)",
          }}
        />
      </div>

      <div className="container-x relative">
        <div className="reveal max-w-2xl mx-auto text-center">
          <span className="section-kicker justify-center">
            <span className="section-kicker-dot" />
            Let's Talk
          </span>
          <h2 className="mt-5 font-display text-3xl md:text-5xl font-bold tracking-tight text-navy leading-tight">
            Have a Project in Mind?
          </h2>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Whether you're starting something new, improving an existing product, or solving a
            technical challenge, we'd like to understand what you're building.
          </p>
          <p className="mt-3 text-muted leading-relaxed">
            Tell us what you're working on, what you need, and where you're stuck. We'll review your
            requirements and discuss the best way forward.
          </p>
        </div>

        {!showForm ? (
          <div className="fade-pop-in mt-10 flex flex-col items-center gap-5">
            <button
              type="button"
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-white font-semibold text-sm shadow-lg transition-transform hover:scale-[1.03]"
              style={{
                backgroundImage: "linear-gradient(90deg,#1E3A8A,#7C3AED)",
                boxShadow: "0 16px 36px -14px rgba(124,58,237,0.55)",
              }}
            >
              Start a Project
              <Icon.arrow width="16" height="16" />
            </button>
            <div className="text-sm text-muted">
              Prefer to talk first?{" "}
              <a
                href="mailto:syncnowise@gmail.com?subject=Let%27s%20schedule%20a%20conversation"
                className="font-semibold text-primary hover:underline"
              >
                Schedule a Conversation →
              </a>
            </div>
          </div>
        ) : (
          <form
            onSubmit={submit}
            className="fade-pop-in mt-10 max-w-2xl mx-auto bg-[color:var(--color-surface)] rounded-2xl border border-border p-6 md:p-8 space-y-4 text-left"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name" error={errors.name}>
                <input
                  className={`${field} ${errors.name ? "border-red-400" : "border-border"}`}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Jane Cooper"
                />
              </Field>
              <Field label="Work Email" error={errors.email}>
                <input
                  type="email"
                  className={`${field} ${errors.email ? "border-red-400" : "border-border"}`}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="jane@company.com"
                />
              </Field>
            </div>

            <Field label="Company (optional)">
              <input
                className={`${field} border-border`}
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                placeholder="Company name"
              />
            </Field>

            <Field label="What are you looking to build?" error={errors.building}>
              <input
                className={`${field} ${errors.building ? "border-red-400" : "border-border"}`}
                value={form.building}
                onChange={(e) => setForm({ ...form, building: e.target.value })}
                placeholder="e.g. a customer portal, a mobile app, an internal tool…"
              />
            </Field>

            <Field label="What problem are you trying to solve? (optional)">
              <textarea
                rows={3}
                className={`${field} border-border resize-none`}
                value={form.problem}
                onChange={(e) => setForm({ ...form, problem: e.target.value })}
                placeholder="Tell us what's not working today, or what's holding you back…"
              />
            </Field>

            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Estimated budget (optional)">
                <select
                  className={`${field} border-border`}
                  value={form.budget}
                  onChange={(e) => setForm({ ...form, budget: e.target.value })}
                >
                  <option value="">Select a range</option>
                  {BUDGET_OPTIONS.map((b) => (
                    <option key={b}>{b}</option>
                  ))}
                </select>
              </Field>
              <Field label="When would you like to start? (optional)">
                <select
                  className={`${field} border-border`}
                  value={form.timeline}
                  onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                >
                  <option value="">Select a timeline</option>
                  {TIMELINE_OPTIONS.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </Field>
            </div>

            <Field label="Additional details (optional)">
              <textarea
                rows={3}
                className={`${field} border-border resize-none`}
                value={form.details}
                onChange={(e) => setForm({ ...form, details: e.target.value })}
                placeholder="Anything else that would help us understand your project…"
              />
            </Field>

            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <button
                type="submit"
                disabled={sending}
                className="btn-primary flex-1 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? "Sending…" : "Start a Project"}{" "}
                {!sending && <Icon.arrow width="16" height="16" />}
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                disabled={sending}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-[#1F2937] bg-white border border-border hover:border-primary/40 transition-colors disabled:opacity-60"
              >
                Cancel
              </button>
            </div>
            {sent && (
              <div className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg px-3 py-2">
                Thanks! We'll review your requirements and get back to you shortly.
              </div>
            )}
            {sendError && (
              <div className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                {sendError}
              </div>
            )}
          </form>
        )}

        <div className="reveal mt-14 flex flex-wrap justify-center gap-x-10 gap-y-2 text-sm text-muted">
          <span>syncnowise@gmail.com</span>
          <span className="hidden sm:inline text-border">·</span>
          <span>+91 7874378168 / 7069835429</span>
          <span className="hidden sm:inline text-border">·</span>
          <span>Ahmedabad, Gujarat, India</span>
        </div>
      </div>
    </section>
  );
}
