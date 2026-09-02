import { createFileRoute } from "@tanstack/react-router";
import PageShell from "@/components/site/PageShell";
import PageIntro from "@/components/site/PageIntro";
import CTABand from "@/components/site/CTABand";
import ProcessSteps from "@/components/site/ProcessSteps";
import RelatedLinks from "@/components/site/RelatedLinks";
import RelatedCaseStudies from "@/components/site/RelatedCaseStudies";
import ServiceFAQ, { type ServiceFAQItem } from "@/components/site/ServiceFAQ";
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

const FAQ_ITEMS: ServiceFAQItem[] = [
  {
    question: "What is web application development?",
    answer:
      "A web application is software that runs in the browser rather than needing to be installed — think customer portals, dashboards, or internal tools that people log into and interact with, rather than a static informational website. The web applications we build are designed around real business and product requirements, and typically involve frontend development, APIs, authentication, and integrations with other systems, rather than just a page for browsing.",
  },
  {
    question: "What types of web applications can you build?",
    answer:
      "Based on the case studies we can show, this ranges from business and product-focused websites — like a manufacturing catalogue presenting technical specifications — to e-commerce and brand stores, to browser-based platforms with logins and dashboards used daily by staff, such as a practice management system. Across all of these, the common ingredients are frontend development, APIs, authentication where the application needs logins, and integrations with other systems.",
  },
  {
    question: "How do you approach building a web application?",
    answer:
      "Every web application project follows the same process we use for all our work: we start by understanding your business, users, and requirements, then define scope and technical approach before development begins. From there, we build in focused stages with regular progress updates, and support doesn't have to stop at launch — we can continue with improvements and maintenance as your application evolves.",
  },
  {
    question: "Can you improve or extend an existing web application?",
    answer: (
      <>
        Yes — this is part of how we approach web application work generally. Our process doesn't
        stop at launch: the same team that builds a web application can continue with improvements,
        maintenance, monitoring, and further development as your needs change, rather than treating
        launch as the end of the relationship. If you're looking to extend or improve something you
        already have, the best next step is to tell us more about it via{" "}
        <a href="/contact" className="text-primary font-semibold hover:underline">
          Contact
        </a>{" "}
        so we can understand what's involved.
      </>
    ),
  },
  {
    question: "How much does web application development cost?",
    answer: (
      <>
        Web application projects range from a small internal dashboard to a full platform with
        authentication and multiple integrations, so cost depends entirely on what's actually being
        built. Rather than fixed packages, we scope each project around your specific requirements,
        complexity, and goals, then provide a clear proposal before development begins. To get a
        real answer for your project,{" "}
        <a href="/contact" className="text-primary font-semibold hover:underline">
          get in touch
        </a>{" "}
        and describe what you're trying to build.
      </>
    ),
  },
];

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

      <ServiceFAQ title="Web Application Development FAQs" items={FAQ_ITEMS} />

      <CTABand title="Building a web application?" buttonLabel="Discuss Your Project" />
    </PageShell>
  );
}
