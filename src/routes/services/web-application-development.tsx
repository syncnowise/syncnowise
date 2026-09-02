import { createFileRoute } from "@tanstack/react-router";
import PageShell from "@/components/site/PageShell";
import PageIntro from "@/components/site/PageIntro";
import CTABand from "@/components/site/CTABand";
import ProcessSteps from "@/components/site/ProcessSteps";
import RelatedLinks from "@/components/site/RelatedLinks";
import RelatedCaseStudies from "@/components/site/RelatedCaseStudies";
import { CAPABILITIES, CASE_STUDIES } from "@/data/content";
import { buildHeadMeta } from "@/lib/seo";
import { breadcrumbList, jsonLdGraph, serviceNode, webPageNode } from "@/lib/schema";

const PATH = "/services/web-application-development";
const TITLE = "Web Application Development | Syncnowise";
const DESCRIPTION =
  "Modern, responsive web applications designed around real business and product requirements — frontend development, APIs, authentication, and third-party integrations.";

export const Route = createFileRoute("/services/web-application-development")({
  head: () => ({
    ...buildHeadMeta({ title: TITLE, description: DESCRIPTION, path: PATH }),
    scripts: [
      {
        type: "application/ld+json",
        children: jsonLdGraph([
          serviceNode({
            path: PATH,
            name: "Web Application Development",
            description: DESCRIPTION,
          }),
          webPageNode({ path: PATH, name: TITLE, description: DESCRIPTION }),
          breadcrumbList([
            { name: "Home", path: "/" },
            { name: "Services", path: "/#services" },
            { name: "Web Application Development", path: PATH },
          ]),
        ]),
      },
    ],
  }),
  component: Page,
});

const capability = CAPABILITIES.find((c) => c.title === "Web Applications")!;
const relatedCaseStudies = CASE_STUDIES.filter((c) =>
  ["echo-polymer-industries", "blanconite-artistry-hub", "nebula-orthosys"].includes(c.slug),
);

function Page() {
  return (
    <PageShell>
      <PageIntro
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/#services" },
          { label: "Web Application Development" },
        ]}
        title="Web Application Development"
        intro={capability.desc}
      />

      <section className="section-y bg-white">
        <div className="container-x max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-navy">
            What's Included
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Every web application we build is designed around real business and product
            requirements, covering:
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {capability.tags.map((t) => (
              <span
                key={t.label}
                className="text-sm font-semibold px-4 py-2 rounded-full bg-primary/10 text-primary"
              >
                {t.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-navy">
            How We Work
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Web application projects follow the same transparent process as everything we build:
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
              Case Studies
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Every case study we can currently show is a web-delivered project — a manufacturing
              product catalogue, an e-commerce brand store, and a browser-based practice management
              platform.
            </p>
            <div className="mt-6">
              <RelatedCaseStudies studies={relatedCaseStudies} />
            </div>
          </div>

          <RelatedLinks
            title="Related Services"
            links={[
              {
                label: "Custom Software Development",
                href: "/services/custom-software-development",
              },
              { label: "Backend & API Development", href: "/services/backend-api-development" },
            ]}
          />
        </div>
      </section>

      <CTABand title="Building a web application?" buttonLabel="Discuss Your Project" />
    </PageShell>
  );
}
