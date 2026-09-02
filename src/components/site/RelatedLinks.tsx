export default function RelatedLinks({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  if (links.length === 0) return null;
  return (
    <div>
      <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">{title}</h2>
      <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-primary transition-colors"
            >
              {l.label} →
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
