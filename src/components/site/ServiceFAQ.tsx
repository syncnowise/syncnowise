import type { ReactNode } from "react";

export type ServiceFAQItem = {
  question: string;
  answer: ReactNode;
};

/**
 * Reusable FAQ block for service pages. Renders every question/answer as
 * plain static markup (no accordion, no client-side toggle) so all content
 * is visible without any JavaScript interaction.
 */
export default function ServiceFAQ({ title, items }: { title: string; items: ServiceFAQItem[] }) {
  return (
    <section className="section-y bg-surface">
      <div className="container-x max-w-3xl">
        <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-navy">
          {title}
        </h2>
        <div className="mt-8 space-y-8">
          {items.map((item) => (
            <div key={item.question}>
              <h3 className="text-lg font-semibold text-navy">{item.question}</h3>
              <p className="mt-2 text-muted leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
