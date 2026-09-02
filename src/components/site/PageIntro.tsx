import Breadcrumbs, { type Crumb } from "./Breadcrumbs";

/**
 * Shared page-header band (breadcrumb + H1 + optional intro paragraph) used
 * by every dedicated route, reusing the same typography/spacing tokens as
 * the homepage instead of introducing a new visual pattern.
 */
export default function PageIntro({
  crumbs,
  title,
  intro,
}: {
  crumbs: Crumb[];
  title: string;
  intro?: string;
}) {
  return (
    <section className="pt-28 pb-10 md:pt-32 md:pb-14 bg-white border-b border-border">
      <div className="container-x max-w-3xl">
        <Breadcrumbs items={crumbs} />
        <h1 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight text-navy leading-tight">
          {title}
        </h1>
        {intro && <p className="mt-4 text-lg text-muted leading-relaxed">{intro}</p>}
      </div>
    </section>
  );
}
