export const SITE_URL = "https://syncnowise.com";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

/**
 * Builds the standard meta/link block (title, description, canonical,
 * OG + Twitter) shared by every indexable page. Each page still supplies
 * its own JSON-LD separately, since that differs per page type.
 */
export function buildHeadMeta({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const url = `${SITE_URL}${path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { property: "og:site_name", content: "Syncnowise" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: DEFAULT_OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Syncnowise" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: DEFAULT_OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
