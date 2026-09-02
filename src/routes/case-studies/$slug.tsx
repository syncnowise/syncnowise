import { createFileRoute, notFound } from "@tanstack/react-router";
import PageShell from "@/components/site/PageShell";
import CTABand from "@/components/site/CTABand";
import Breadcrumbs from "@/components/site/Breadcrumbs";
import RelatedLinks from "@/components/site/RelatedLinks";
import { CASE_STUDIES, TESTIMONIALS } from "@/data/content";
import { buildHeadMeta, SITE_URL } from "@/lib/seo";
import { breadcrumbList, jsonLdGraph, webPageNode } from "@/lib/schema";

const RELATED_SERVICES: Record<string, { label: string; href: string }[]> = {
  "echo-polymer-industries": [
    { label: "Web Application Development", href: "/services/web-application-development" },
  ],
  "nebula-orthosys": [
    { label: "Custom Software Development", href: "/services/custom-software-development" },
    { label: "SaaS & MVP Development", href: "/services/saas-mvp-development" },
    { label: "Backend & API Development", href: "/services/backend-api-development" },
  ],
  "blanconite-artistry-hub": [
    { label: "Web Application Development", href: "/services/web-application-development" },
  ],
};

export const Route = createFileRoute("/case-studies/$slug")({
  loader: ({ params }) => {
    const study = CASE_STUDIES.find((c) => c.slug === params.slug);
    if (!study) throw notFound();
    return study;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const path = `/case-studies/${loaderData.slug}`;
    const title = `${loaderData.title} Case Study | Syncnowise`;
    const description = `${loaderData.solution} Industry: ${loaderData.industry}.`.slice(0, 300);
    return {
      ...buildHeadMeta({ title, description, path }),
      scripts: [
        {
          type: "application/ld+json",
          children: jsonLdGraph([
            webPageNode({ path, name: title, description }),
            breadcrumbList([
              { name: "Home", path: "/" },
              { name: "Case Studies", path: "/case-studies" },
              { name: loaderData.title, path },
            ]),
          ]),
        },
      ],
    };
  },
  component: Page,
});

function Page() {
  const study = Route.useLoaderData();
  const testimonial = TESTIMONIALS.find((t) => t.name === study.title);
  const relatedServices = RELATED_SERVICES[study.slug] ?? [];
  const otherCaseStudies = CASE_STUDIES.filter((c) => c.slug !== study.slug);

  return (
    <PageShell>
      <section className="pt-28 pb-8 md:pt-32 md:pb-10 bg-white border-b border-border">
        <div className="container-x max-w-3xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Case Studies", href: "/case-studies" },
              { label: study.title },
            ]}
          />
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-primary/10 text-primary">
              {study.industry}
            </span>
            <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-surface border border-border text-muted">
              {study.services}
            </span>
          </div>
          <h1 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight text-navy leading-tight">
            {study.title}
          </h1>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-x max-w-4xl">
          <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-card)]">
            <img
              src={study.img}
              alt={`${study.title} project preview`}
              width={1000}
              height={750}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-x max-w-3xl space-y-8">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-primary">
              The Challenge
            </h2>
            <p className="mt-2 text-lg text-foreground leading-relaxed">{study.challenge}</p>
          </div>
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-primary">
              What We Built
            </h2>
            <p className="mt-2 text-lg text-foreground leading-relaxed">{study.solution}</p>
          </div>
          <div className="rounded-xl bg-surface border border-border p-5">
            <h2 className="text-xs font-bold uppercase tracking-widest text-primary">
              The Outcome
            </h2>
            <p className="mt-2 text-lg text-navy italic leading-relaxed">"{study.outcome}"</p>
            <p className="mt-1 text-sm text-subtle">{study.outcomeAttribution}</p>
          </div>

          {testimonial && (
            <div className="rounded-xl border border-border p-5">
              <h2 className="text-xs font-bold uppercase tracking-widest text-primary">
                In Their Words
              </h2>
              <p className="mt-2 text-base text-foreground leading-relaxed">
                "{testimonial.quote}"
              </p>
              <p className="mt-2 text-sm font-semibold text-navy">
                {testimonial.name} — {testimonial.role}
              </p>
            </div>
          )}

          <a
            href={study.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-white font-semibold text-sm shadow-lg transition-transform hover:scale-[1.03]"
            style={{
              backgroundImage: "linear-gradient(90deg,#1E3A8A,#7C3AED)",
              boxShadow: "0 16px 36px -14px rgba(124,58,237,0.55)",
            }}
          >
            Visit Live Site
          </a>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x max-w-3xl space-y-10">
          <RelatedLinks title="Related Services" links={relatedServices} />
          <RelatedLinks
            title="Other Case Studies"
            links={otherCaseStudies.map((c) => ({
              label: c.title,
              href: `/case-studies/${c.slug}`,
            }))}
          />
        </div>
      </section>

      <CTABand />
    </PageShell>
  );
}
