import type { ReactNode } from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

/**
 * Shared outer shell (header + footer) for every non-homepage route, so new
 * pages look and behave like part of the same site instead of a one-off
 * layout per route.
 */
export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
