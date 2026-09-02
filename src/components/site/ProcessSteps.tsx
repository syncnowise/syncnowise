import { WORK_STEPS } from "@/data/content";

/**
 * Compact reuse of the existing WORK_STEPS process data (already used on the
 * homepage's big navy timeline) for service pages — same content, a smaller
 * visual treatment so it doesn't look like a duplicated section.
 */
export default function ProcessSteps() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {WORK_STEPS.map((s) => (
        <div key={s.n} className="flex gap-3">
          <div className="shrink-0 w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
            {s.n}
          </div>
          <div>
            <h3 className="text-base font-semibold text-navy">{s.title}</h3>
            <p className="mt-1 text-sm text-muted leading-relaxed">{s.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
