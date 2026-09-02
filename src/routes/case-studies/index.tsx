import { createFileRoute } from "@tanstack/react-router";
import PageShell from "@/components/site/PageShell";
import PageIntro from "@/components/site/PageIntro";
import CTABand from "@/components/site/CTABand";
import { Icon } from "@/components/icons";
import { PROJECTS } from "@/data/content";
import { buildHeadMeta } from "@/lib/seo";
import { breadcrumbList, jsonLdGraph, SITE_URL, webPageNode } from "@/lib/schema";

const PATH = "/case-studies";
const TITLE = "Case Studies | Syncnowise";
const DESCRIPTION =
  "Real projects delivered by Syncnowise for real clients — manufacturing, healthcare, and retail businesses that needed custom software, websites, or platforms.";

export const Route = createFileRoute("/case-studies/")({
  head: () => ({
    ...buildHeadMeta({ title: TITLE, description: DESCRIPTION, path: PATH }),
    scripts: [
      {
        type: "application/ld+json",
        children: jsonLdGraph([
          webPageNode({ path: PATH, name: TITLE, description: DESCRIPTION }),
          breadcrumbList([
            { name: "Home", path: "/" },
            { name: "Case Studies", path: PATH },
          ]),
          {
            "@type": "ItemList",
            itemListElement: PROJECTS.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: p.title,
              url: p.slug ? `${SITE_URL}/case-studies/${p.slug}` : p.url,
            })),
          },
        ]),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell>
      <PageIntro
        crumbs={[{ label: "Home", href: "/" }, { label: "Case Studies" }]}
        title="Case Studies"
        intro="Every project we showcase represents work delivered for a real client. We work closely with businesses to understand their requirements, solve their technical challenges, and deliver software that supports their goals."
      />

      <section className="section-y bg-white">
        <div className="container-x">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {PROJECTS.map((p) => {
              const internal = Boolean(p.slug);
              const href = internal ? `/case-studies/${p.slug}` : p.url;
              return (
                <a
                  key={p.title}
                  href={href}
                  {...(!internal && { target: "_blank", rel: "noopener noreferrer" })}
                  className="card-lift group bg-white rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-card)] flex flex-col"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={p.img}
                      alt={`${p.title} project preview`}
                      loading="lazy"
                      width={1000}
                      height={750}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <h2 className="font-display text-lg font-semibold text-navy">{p.title}</h2>
                      <span className="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                        {p.tag}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-muted">{p.desc}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      {internal ? "View Case Study" : "Visit Live Site"}
                      <Icon.arrow
                        width="16"
                        height="16"
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <CTABand />
    </PageShell>
  );
}
