import { CASE_STUDIES } from "@/data/content";

type CaseStudy = (typeof CASE_STUDIES)[number];

/**
 * Compact case-study cards for use on service pages — reuses the same
 * CASE_STUDIES data and image assets as the homepage/case-study pages,
 * just a smaller card treatment so it reads as supporting evidence rather
 * than a repeat of the full portfolio grid.
 */
export default function RelatedCaseStudies({ studies }: { studies: CaseStudy[] }) {
  if (studies.length === 0) return null;
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {studies.map((c) => (
        <a
          key={c.slug}
          href={`/case-studies/${c.slug}`}
          className="card-lift group bg-white rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-card)] flex flex-col"
        >
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={c.img}
              alt={`${c.title} project preview`}
              loading="lazy"
              width={1000}
              height={750}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-5 flex-1 flex flex-col">
            <span className="text-xs font-semibold text-primary uppercase tracking-wide">
              {c.industry}
            </span>
            <h3 className="mt-1.5 font-display text-lg font-semibold text-navy">{c.title}</h3>
            <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary">
              View Case Study →
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
