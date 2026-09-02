import { createFileRoute } from "@tanstack/react-router";
import PageShell from "@/components/site/PageShell";
import PageIntro from "@/components/site/PageIntro";
import CTABand from "@/components/site/CTABand";
import ProcessSteps from "@/components/site/ProcessSteps";
import RelatedLinks from "@/components/site/RelatedLinks";
import RelatedCaseStudies from "@/components/site/RelatedCaseStudies";
import ServiceFAQ, { type ServiceFAQItem } from "@/components/site/ServiceFAQ";
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

const FAQ_ITEMS: ServiceFAQItem[] = [
  {
    question: "What should an MVP include?",
    answer:
      "An MVP should focus on the core problem you're solving and the functionality needed to test whether your product direction works — not every feature you can imagine for the eventual product. The goal is a working version real users can actually use, so you can validate the idea before investing in a full feature set. Anything that isn't essential to proving that core value can usually wait for a later version.",
  },
  {
    question: "How do you decide what to build first for an MVP?",
    answer:
      "We start by understanding the problem you're solving and who it's for, then use that to define scope and priorities before any development begins. What's essential for a first version depends entirely on your specific product and users, so this is worked out together rather than following a fixed template — the goal is agreeing on a scope and plan before we start building.",
  },
  {
    question: "Is an MVP the same as a finished SaaS product?",
    answer:
      "No — an MVP is an initial working version built to validate your core product direction, not a complete product with every capability a mature SaaS platform would eventually have. It's meant to be functional and real enough to test with actual users, while leaving room for the product to grow based on what you learn. Not every MVP needs to become a full SaaS business — for some projects, validating the idea is the goal in itself.",
  },
  {
    question: "Can an MVP evolve into a larger SaaS product?",
    answer: (
      <>
        Yes — this is one of the reasons we treat SaaS and MVP work as one continuous service rather
        than two separate ones. An MVP built with the eventual product in mind can act as the
        foundation for a larger SaaS platform, with further development, features, and scale added
        as the product grows. The backend and infrastructure choices made early on matter here — our{" "}
        <a
          href="/services/backend-api-development"
          className="text-primary font-semibold hover:underline"
        >
          Backend &amp; API Development
        </a>{" "}
        page covers how we approach that side of scaling a product.
      </>
    ),
  },
  {
    question: "How much does SaaS or MVP development cost?",
    answer: (
      <>
        MVP and SaaS projects vary widely in cost because what needs to be built varies widely — a
        narrow MVP testing one core feature is a very different project from a fuller SaaS platform.
        Rather than quoting a fixed number upfront, we scope the work around your requirements,
        complexity, timeline, and goals, and provide a clear proposal before development begins. If
        you have a specific idea in mind,{" "}
        <a href="/contact" className="text-primary font-semibold hover:underline">
          contact us
        </a>{" "}
        and we'll talk through what it would actually take to build it.
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

      <ServiceFAQ title="SaaS & MVP Development FAQs" items={FAQ_ITEMS} />

      <CTABand title="Building a SaaS product or MVP?" buttonLabel="Discuss Your Project" />
    </PageShell>
  );
}
