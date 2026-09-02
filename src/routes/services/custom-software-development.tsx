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

const PATH = "/services/custom-software-development";
const TITLE = "Custom Software Development | Syncnowise";
const DESCRIPTION =
  "Custom software built around how your business actually works — business platforms, internal tools, and integrations designed around your specific requirements.";

export const Route = createFileRoute("/services/custom-software-development")({
  head: () => ({
    ...buildHeadMeta({ title: TITLE, description: DESCRIPTION, path: PATH }),
    scripts: [
      {
        type: "application/ld+json",
        children: jsonLdGraph([
          serviceNode({
            path: PATH,
            name: "Custom Software Development",
            description: DESCRIPTION,
          }),
          webPageNode({ path: PATH, name: TITLE, description: DESCRIPTION }),
          breadcrumbList([
            { name: "Home", path: "/" },
            { name: "Services", path: "/#services" },
            { name: "Custom Software Development", path: PATH },
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
    question: "When should a business choose custom software instead of off-the-shelf software?",
    answer:
      "Off-the-shelf software works well when your process matches how the tool was built to be used. Custom software tends to be the better fit when a workflow is specific to your business, when a process is still running on spreadsheets or manual work because nothing off-the-shelf quite fits, or when you need several systems to work together as one platform. If a generic tool already covers what you need, that's often the simpler choice.",
  },
  {
    question: "What types of custom software can Syncnowise build?",
    answer:
      "This generally falls into a few categories: business software and internal tools that support how your team already operates, custom platforms built around a specific workflow rather than a generic template, and integrations that connect your existing systems together instead of leaving them disconnected. The common thread is software designed around your actual requirements rather than a one-size-fits-all product.",
  },
  {
    question: "How does a custom software development project start?",
    answer:
      "Every project starts the same way: we take time to understand your business, your users, and the problem you're trying to solve, then define the scope, technical approach, and priorities before any development begins. You'll have a clear proposal to review first, so you know what's being built and why before committing to the project.",
  },
  {
    question: "How much does custom software development cost?",
    answer: (
      <>
        There's no single price for custom software, because cost depends on requirements,
        complexity, and scope — a small internal tool and a full business platform are very
        different projects. Rather than forcing every engagement into a fixed package, we scope the
        work around what you actually need and provide a clear proposal before development begins.
        The most accurate way to get a number for your specific project is to{" "}
        <a href="/contact" className="text-primary font-semibold hover:underline">
          get in touch
        </a>{" "}
        and tell us what you're trying to build.
      </>
    ),
  },
  {
    question: "Can custom software integrate with our existing systems?",
    answer: (
      <>
        Integrations are a common part of custom software projects — connecting existing tools
        together, or bringing data that currently lives in separate places into one platform, is
        often exactly the kind of problem custom software solves. What's possible depends on the
        systems involved, so this is usually assessed case by case rather than assumed upfront. For
        backend and API work specifically, our{" "}
        <a
          href="/services/backend-api-development"
          className="text-primary font-semibold hover:underline"
        >
          Backend &amp; API Development
        </a>{" "}
        page covers that in more detail.
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
          { label: "Custom Software Development" },
        ]}
        title="Custom Software Development"
        intro="Turn your business idea or requirements into reliable, production-ready software designed around the way your business actually works — not the other way around."
      />

      <section className="section-y bg-white">
        <div className="container-x max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-navy">
            What We Build
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            When an off-the-shelf tool doesn't fit your workflow, or a process is still running on
            spreadsheets and manual work, custom software gives you something built for your
            business specifically:
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Business software and internal tools",
              "Custom platforms built around a specific workflow",
              "Integrations that connect your existing systems together",
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
            Every custom software engagement follows the same predictable process, from first
            conversation to long-term support.
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
              {relatedCaseStudy.title} is a custom software project in the truest sense — an
              orthopaedic practice needed patients, implants inventory, billing, and reporting
              brought into one system instead of disconnected tools.
            </p>
            <div className="mt-6">
              <RelatedCaseStudies studies={[relatedCaseStudy]} />
            </div>
          </div>

          <RelatedLinks
            title="Related Services"
            links={[
              { label: "SaaS & MVP Development", href: "/services/saas-mvp-development" },
              {
                label: "Web Application Development",
                href: "/services/web-application-development",
              },
              { label: "Backend & API Development", href: "/services/backend-api-development" },
            ]}
          />
        </div>
      </section>

      <ServiceFAQ title="Custom Software Development FAQs" items={FAQ_ITEMS} />

      <CTABand title="Have a custom software project in mind?" buttonLabel="Discuss Your Project" />
    </PageShell>
  );
}
