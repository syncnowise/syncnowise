import { createFileRoute } from "@tanstack/react-router";
import PageShell from "@/components/site/PageShell";
import PageIntro from "@/components/site/PageIntro";
import CTABand from "@/components/site/CTABand";
import ProcessSteps from "@/components/site/ProcessSteps";
import RelatedLinks from "@/components/site/RelatedLinks";
import RelatedCaseStudies from "@/components/site/RelatedCaseStudies";
import { CAPABILITIES, CASE_STUDIES, WHAT_WE_BUILD } from "@/data/content";
import { buildHeadMeta } from "@/lib/seo";
import { breadcrumbList, jsonLdGraph, serviceNode, webPageNode } from "@/lib/schema";

const PATH = "/services/backend-api-development";
const TITLE = "Backend & API Development | Syncnowise";
const DESCRIPTION =
  "Reliable APIs, backend services, and high-performance systems — backend engineering, distributed & real-time systems, and cloud infrastructure.";

export const Route = createFileRoute("/services/backend-api-development")({
  head: () => ({
    ...buildHeadMeta({ title: TITLE, description: DESCRIPTION, path: PATH }),
    scripts: [
      {
        type: "application/ld+json",
        children: jsonLdGraph([
          serviceNode({ path: PATH, name: "Backend & API Development", description: DESCRIPTION }),
          webPageNode({ path: PATH, name: TITLE, description: DESCRIPTION }),
          breadcrumbList([
            { name: "Home", path: "/" },
            { name: "Services", path: "/#services" },
            { name: "Backend & API Development", path: PATH },
          ]),
        ]),
      },
    ],
  }),
  component: Page,
});

const backendCapability = CAPABILITIES.find((c) => c.title === "Backend Engineering")!;
const distributedCapability = CAPABILITIES.find(
  (c) => c.title === "Distributed & Real-Time Systems",
)!;
const infraCapability = CAPABILITIES.find((c) => c.title === "Data & Infrastructure")!;
const backendBuild = WHAT_WE_BUILD.find((w) => w.title === "Backend & Systems Engineering")!;
const relatedCaseStudy = CASE_STUDIES.find((c) => c.slug === "nebula-orthosys")!;

function TagRow({ tags }: { tags: { label: string }[] }) {
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {tags.map((t) => (
        <span
          key={t.label}
          className="text-sm font-semibold px-4 py-2 rounded-full bg-primary/10 text-primary"
        >
          {t.label}
        </span>
      ))}
    </div>
  );
}

function Page() {
  return (
    <PageShell>
      <PageIntro
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/#services" },
          { label: "Backend & API Development" },
        ]}
        title="Backend & API Development"
        intro={backendBuild.desc}
      />

      <section className="section-y bg-white">
        <div className="container-x max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-navy">
            Core Backend Engineering
          </h2>
          <p className="mt-4 text-muted leading-relaxed">{backendCapability.desc}</p>
          <TagRow tags={backendCapability.tags} />
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-navy">
            Distributed & Real-Time Systems
          </h2>
          <p className="mt-4 text-muted leading-relaxed">{distributedCapability.desc}</p>
          <TagRow tags={distributedCapability.tags} />
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-x max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-navy">
            Data & Cloud Infrastructure
          </h2>
          <p className="mt-4 text-muted leading-relaxed">{infraCapability.desc}</p>
          <TagRow tags={infraCapability.tags} />
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-navy">
            How We Work
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Backend and API projects follow the same transparent process as everything we build.
          </p>
          <div className="mt-8">
            <ProcessSteps />
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-x max-w-4xl space-y-10">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-navy">
              Related Case Study
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              {relatedCaseStudy.title} is the backend and systems layer behind an ERP-style platform
              — bringing patients, implants inventory, billing, and reports into one system for an
              orthopaedic practice.
            </p>
            <div className="mt-6">
              <RelatedCaseStudies studies={[relatedCaseStudy]} />
            </div>
          </div>

          <RelatedLinks
            title="Related Services"
            links={[
              {
                label: "Custom Software Development",
                href: "/services/custom-software-development",
              },
              { label: "SaaS & MVP Development", href: "/services/saas-mvp-development" },
              {
                label: "Web Application Development",
                href: "/services/web-application-development",
              },
            ]}
          />
        </div>
      </section>

      <CTABand
        title="Need backend or API work?"
        buttonLabel="Discuss Your Technical Requirements"
      />
    </PageShell>
  );
}
