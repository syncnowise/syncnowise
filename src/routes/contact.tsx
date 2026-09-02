import { createFileRoute } from "@tanstack/react-router";
import PageShell from "@/components/site/PageShell";
import PageIntro from "@/components/site/PageIntro";
import ContactSection from "@/components/sections/ContactSection";
import { useReveal } from "@/hooks/use-reveal";
import { breadcrumbList, jsonLdGraph, ORG_ID, WEBSITE_ID } from "@/lib/schema";
import { buildHeadMeta, SITE_URL } from "@/lib/seo";

const PATH = "/contact";
const TITLE = "Contact Syncnowise | Discuss Your Software Project";
const DESCRIPTION =
  "Tell Syncnowise what you're building. Reach us by email or phone, or send your project details and we'll review your requirements and get back to you.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    ...buildHeadMeta({ title: TITLE, description: DESCRIPTION, path: PATH }),
    scripts: [
      {
        type: "application/ld+json",
        children: jsonLdGraph([
          {
            "@type": "ContactPage",
            "@id": `${SITE_URL}${PATH}#webpage`,
            url: `${SITE_URL}${PATH}`,
            name: TITLE,
            description: DESCRIPTION,
            isPartOf: { "@id": WEBSITE_ID },
            about: { "@id": ORG_ID },
            inLanguage: "en",
          },
          breadcrumbList([
            { name: "Home", path: "/" },
            { name: "Contact", path: PATH },
          ]),
        ]),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  useReveal();
  return (
    <PageShell>
      <PageIntro
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        title="Contact Syncnowise"
        intro="Tell us what you're working on, what you need, and where you're stuck. We'll review your requirements and discuss the best way forward."
      />
      <ContactSection />
    </PageShell>
  );
}
