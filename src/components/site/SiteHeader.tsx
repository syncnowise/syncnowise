import { useEffect, useState } from "react";
import logo from "@/assets/syncnowise-logo.png";
import { NAV } from "@/data/content";

/**
 * Extracted from the homepage navbar so every route can share the exact
 * same header instead of duplicating this markup per page.
 */
export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled
          ? "bg-white/90 backdrop-blur border-b border-border shadow-sm"
          : "bg-white/60 backdrop-blur"
      }`}
    >
      <div className="container-x flex items-center justify-between h-16">
        <a href="/" className="flex items-center min-h-11">
          <img
            src={logo}
            alt="Syncnowise"
            width={1920}
            height={385}
            className="h-9 md:h-10 w-auto object-contain"
          />
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="inline-flex items-center min-h-11 text-sm font-medium text-muted hover:text-primary transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <a href="/contact" className="btn-primary text-sm whitespace-nowrap">
            Get Started
          </a>
        </div>

        <button
          className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-md border border-border"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {menuOpen ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="lg:hidden border-t border-border bg-white">
          <div className="container-x py-4 flex flex-col gap-3">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center min-h-11 text-base font-medium text-muted"
              >
                {n.label}
              </a>
            ))}
            <a
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="btn-primary text-sm mt-2 w-full"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
