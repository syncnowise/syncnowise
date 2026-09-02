import { createFileRoute } from "@tanstack/react-router";
import PageShell from "@/components/site/PageShell";
import PageIntro from "@/components/site/PageIntro";
import CTABand from "@/components/site/CTABand";
import ProcessSteps from "@/components/site/ProcessSteps";
import RelatedLinks from "@/components/site/RelatedLinks";
import RelatedCaseStudies from "@/components/site/RelatedCaseStudies";
import { CASE_STUDIES } from "@/data/content";
import { buildHeadMeta } from "@/lib/seo";
import { breadcrumbList, jsonLdGraph, serviceNode, webPageNode } from "@/lib/schema";

const PATH = "/services/saas-mvp-development";
const TITLE = "SaaS & MVP Development | Syncnowise";
const DESCRIPTION =
  "From first concept to a working product, Syncnowise helps startups and businesses build, validate, and launch scalable SaaS products and MVPs.";

export const Route = createFileRoute("/services/saas-mvp-development")({
  head: () => ({
    ...buildHeadMeta({ title: TITLE, description: DESCRIPTION, path: PATH }),
    scripts: [
      {
        type: "application/ld+json",
        children: jsonLdGraph([
          serviceNode({ path: PATH, name: "SaaS & MVP Development", description: DESCRIPTION }),
          webPageNode({ path: PATH, name: TITLE, description: DESCRIPTION }),
          breadcrumbList([
            { name: "Home", path: "/" },
            { name: "Services", path: "/#services" },
            { name: "SaaS & MVP Development", path: PATH },
          ]),
        ]),
      },
    ],
  }),
  component: Page,
});

const relatedCaseStudy = CASE_STUDIES.find((c) => c.slug === "nebula-orthosys")!;

function Page() {
  return (
    <PageShell>
      <PageIntro
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/#services" },
          { label: "SaaS & MVP Development" },
        ]}
        title="SaaS & MVP Development"
        intro="From first concept to a working product, we help startups and businesses build, validate, and launch scalable software products."
      />

      <section className="section-y bg-white">
        <div className="container-x max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-navy">
            From Concept to Product
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            This service covers the full arc of turning a software idea into something real:
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "MVP development — a first working version to validate an idea",
              "SaaS platforms designed to scale as usage grows",
              "Ongoing product development beyond the initial launch",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-foreground">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-navy">
            How We Work
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            We define scope, technical approach, and priorities before development begins, then
            build in focused stages with regular progress updates.
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
              {relatedCaseStudy.title} shows our approach to building product-style software:
              patients, implants inventory, billing, and reporting brought together into a single
              orthopaedic management platform, rather than a collection of disconnected tools.
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
              { label: "Backend & API Development", href: "/services/backend-api-development" },
            ]}
          />
        </div>
      </section>

      <CTABand title="Building a SaaS product or MVP?" buttonLabel="Discuss Your Project" />
    </PageShell>
  );
}
