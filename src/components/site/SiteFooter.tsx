import logo from "@/assets/syncnowise-logo.png";
import { NAV, WHAT_WE_BUILD } from "@/data/content";

/**
 * Extracted from the homepage footer so every route can share it.
 *
 * Changes from the original inline footer (both intentional, per the
 * approved technical-SEO work):
 * - Twitter/X, Instagram, and GitHub icons were already removed (dead "#"
 *   placeholders) in the prior pass; LinkedIn is the only real profile.
 * - The "Security" link is removed here too: no security/compliance content
 *   exists anywhere in the codebase to back a real page.
 * - Privacy Policy / Terms of Service still point to "#" because no legal
 *   copy exists in the repo to build real pages from (see final report).
 */
export default function SiteFooter() {
  return (
    <footer className="relative bg-[#0B1120] text-white/80 overflow-hidden">
      {/* Subtle top gradient line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-x relative pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand + Contact */}
          <div className="lg:col-span-4">
            <a href="/" className="inline-block">
              <img
                src={logo}
                alt="Syncnowise"
                width={1920}
                height={385}
                className="h-9 w-auto object-contain brightness-0 invert"
              />
            </a>
            <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-xs">
              Building smart, scalable software solutions for startups and enterprises worldwide.
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-primary/80 shrink-0">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span className="text-white/70">Ahmedabad, Gujarat, India</span>
              </div>
              <a
                href="mailto:syncnowise@gmail.com"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
              >
                <span className="text-primary/80 shrink-0">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                </span>
                syncnowise@gmail.com
              </a>
              <a
                href="tel:+917874378168"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
              >
                <span className="text-primary/80 shrink-0">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                +91 78743 78168 / +91 70698 35429
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold text-sm tracking-wide">Company</h4>
            <ul className="mt-4 space-y-2">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm text-white/65 hover:text-white transition-colors"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* What We Build */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold text-sm tracking-wide">What We Build</h4>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-y-2 gap-x-4">
              {WHAT_WE_BUILD.map((w) => (
                <li key={w.title}>
                  <a
                    href={w.href ?? "/#services"}
                    className="text-sm text-white/65 hover:text-white transition-colors"
                  >
                    {w.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold text-sm tracking-wide">Follow Us</h4>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://linkedin.com/company/syncnowise"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-white/8 border border-white/10 hover:bg-primary hover:border-primary flex items-center justify-center text-white/80 transition-all"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
              <span>© 2026 Syncnowise. All rights reserved.</span>
              <span className="hidden sm:inline">·</span>
              <span>Crafted with precision in Ahmedabad, India</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-5">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
