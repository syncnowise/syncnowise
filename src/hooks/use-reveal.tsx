import { useEffect } from "react";

/**
 * Wires up the scroll-triggered `.reveal` animation system (see
 * `.reveal`/`.reveal.is-visible` in styles.css): observes every `.reveal`
 * element present on mount and adds `.is-visible` once it scrolls into view.
 *
 * Must be called once by any page that renders `.reveal` elements —
 * including pages that reuse shared section components (e.g. AboutSection,
 * ContactSection) which carry `.reveal` classes of their own. Without this
 * hook running, those elements stay at `opacity: 0` forever.
 */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
