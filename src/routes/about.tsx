import { createFileRoute } from "@tanstack/react-router";
import PageShell from "@/components/site/PageShell";
import PageIntro from "@/components/site/PageIntro";
import CTABand from "@/components/site/CTABand";
import AboutSection from "@/components/sections/AboutSection";
import { useReveal } from "@/hooks/use-reveal";
import { CULTURE } from "@/data/content";
import { buildHeadMeta } from "@/lib/seo";
import { breadcrumbList, jsonLdGraph, webPageNode } from "@/lib/schema";

const PATH = "/about";
const TITLE = "About Syncnowise | Custom Software Development Team";
const DESCRIPTION =
  "Syncnowise is a small, senior software engineering team based in Ahmedabad, building custom software, SaaS products, and backend systems for startups and growing businesses.";

export const Route = createFileRoute("/about")({
  head: () => ({
    ...buildHeadMeta({ title: TITLE, description: DESCRIPTION, path: PATH }),
    scripts: [
      {
        type: "application/ld+json",
        children: jsonLdGraph([
          webPageNode({ path: PATH, name: TITLE, description: DESCRIPTION }),
          breadcrumbList([
            { name: "Home", path: "/" },
            { name: "About", path: PATH },
          ]),
        ]),
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  useReveal();
  return (
    <PageShell>
      <PageIntro
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        title="About Syncnowise"
        intro="A small, senior engineering team — not a large agency with layers of account managers between you and the work. The people who scope your project are the same people who build it."
      />

      <AboutSection />

      <section className="section-y bg-[color:var(--color-surface)]">
        <div className="container-x">
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-xs font-semibold tracking-widest uppercase text-primary">Team</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-navy">
              How We Work Together
            </h2>
            <p className="mt-3 text-muted">
              No layers, no hand-offs — just the people who actually build your product.
            </p>
          </div>
          <div className="mt-10 md:mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CULTURE.map((c) => (
              <div
                key={c.title}
                className="card-lift group relative bg-white rounded-2xl border border-border p-6 pt-7 shadow-[var(--shadow-card)] overflow-hidden transition-colors hover:border-primary/30"
              >
                <span className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-primary to-violet-500" />
                <div className="relative w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <c.icon width="22" height="22" />
                </div>
                <h3 className="relative mt-5 text-lg font-semibold">{c.title}</h3>
                <p className="relative mt-2 text-sm text-muted leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </PageShell>
  );
}
