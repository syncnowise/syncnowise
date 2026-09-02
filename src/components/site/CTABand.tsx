import { Icon } from "@/components/icons";

/**
 * Reused verbatim from the homepage's "How We Work" closing CTA
 * (same classes, same gradient button) so every new page ends with the
 * same conversion pattern instead of a one-off design per route.
 */
export default function CTABand({
  title = "Have a project in mind? Let's talk.",
  buttonLabel = "Contact Us",
}: {
  title?: string;
  buttonLabel?: string;
}) {
  return (
    <section className="section-y bg-navy relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="container-x relative text-center">
        <p className="text-xl md:text-2xl font-display font-semibold text-white">{title}</p>
        <a
          href="/contact"
          className="mt-6 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-navy font-semibold text-sm bg-white shadow-lg transition-transform hover:scale-[1.03]"
        >
          {buttonLabel}
          <Icon.arrow width="16" height="16" />
        </a>
      </div>
    </section>
  );
}
