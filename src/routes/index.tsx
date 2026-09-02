import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import HeroGlobe from "@/components/HeroGlobe";
import { Icon as I } from "@/components/icons";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import { useReveal } from "@/hooks/use-reveal";
import {
  CAPABILITIES,
  CASE_STUDIES,
  CULTURE,
  PROJECTS,
  TESTIMONIALS,
  WHAT_WE_BUILD,
  WORK_STEPS,
} from "@/data/content";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import test1 from "@/assets/testimonial-1.jpg";
import test2 from "@/assets/testimonial-2.jpg";
import test3 from "@/assets/testimonial-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Custom Software & SaaS Development | Syncnowise" },
      {
        name: "description",
        content:
          "Syncnowise builds custom software, SaaS products, web applications, and scalable backend systems for startups and growing businesses.",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:site_name", content: "Syncnowise" },
      { property: "og:title", content: "Custom Software & SaaS Development | Syncnowise" },
      {
        property: "og:description",
        content:
          "Syncnowise builds custom software, SaaS products, web applications, and scalable backend systems for startups and growing businesses.",
      },
      { property: "og:image", content: "https://syncnowise.com/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Syncnowise" },
      { name: "twitter:title", content: "Custom Software & SaaS Development | Syncnowise" },
      {
        name: "twitter:description",
        content:
          "Syncnowise builds custom software, SaaS products, web applications, and scalable backend systems for startups and growing businesses.",
      },
      { name: "twitter:image", content: "https://syncnowise.com/og-image.png" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://syncnowise.com/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://syncnowise.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://syncnowise.com/#organization",
              name: "Syncnowise",
              url: "https://syncnowise.com/",
              logo: "https://syncnowise.com/syncnowise-logo.png",
              email: "syncnowise@gmail.com",
              telephone: "+91-7874378168",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Ahmedabad",
                addressRegion: "Gujarat",
                addressCountry: "IN",
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+91-7874378168",
                  email: "syncnowise@gmail.com",
                  contactType: "customer support",
                  areaServed: "IN",
                  availableLanguage: ["English", "Hindi", "Gujarati"],
                },
              ],
            },
            {
              "@type": "ProfessionalService",
              "@id": "https://syncnowise.com/#business",
              name: "Syncnowise",
              url: "https://syncnowise.com/",
              image: "https://syncnowise.com/syncnowise-logo.png",
              telephone: "+91-7874378168",
              email: "syncnowise@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Ahmedabad",
                addressRegion: "Gujarat",
                addressCountry: "IN",
              },
              areaServed: "Worldwide",
              makesOffer: [
                "Custom Software Development",
                "SaaS & MVP Development",
                "Backend & Systems Engineering",
                "Automation & AI Solutions",
              ].map((name) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name,
                  provider: { "@id": "https://syncnowise.com/#organization" },
                },
              })),
            },
            {
              "@type": "WebSite",
              "@id": "https://syncnowise.com/#website",
              url: "https://syncnowise.com/",
              name: "Syncnowise",
              publisher: { "@id": "https://syncnowise.com/#organization" },
            },
            {
              "@type": "WebPage",
              "@id": "https://syncnowise.com/#webpage",
              url: "https://syncnowise.com/",
              name: "Custom Software & SaaS Development | Syncnowise",
              description:
                "Syncnowise builds custom software, SaaS products, web applications, and scalable backend systems for startups and growing businesses.",
              isPartOf: { "@id": "https://syncnowise.com/#website" },
              about: { "@id": "https://syncnowise.com/#organization" },
              inLanguage: "en",
            },
          ],
        }),
      },
    ],
  }),
  component: HomePage,
});

/* ---------- Homepage-only data ---------- */
const WHY_US = [
  {
    icon: I.strategy,
    title: "Engineering That Understands the Business",
    desc: "We don't just build software to match a specification. We take the time to understand the problem behind it and design solutions that work in the real world.",
  },
  {
    icon: I.chat,
    title: "Direct Access to the People Building Your Product",
    desc: "Work directly with the engineers responsible for your project. Clear communication, fewer layers, and faster decisions keep projects moving.",
  },
  {
    icon: I.shield,
    title: "Built for Reliability and Growth",
    desc: "We care about what happens after launch. Our approach focuses on maintainable architecture, reliable systems, performance, security, and the ability to evolve as your business grows.",
  },
  {
    icon: I.tag,
    title: "Practical, Transparent Collaboration",
    desc: "Clear scope, honest communication, and regular progress throughout the project. You know what we're building, why we're building it, and where the project stands.",
  },
  {
    icon: I.code,
    title: "Technology Chosen for the Problem",
    desc: "We don't force every project into the same technology stack. We choose technologies based on the product's requirements, expected scale, performance, and long-term needs.",
  },
];

const RESULTS = [
  {
    icon: I.star,
    title: "Real Client Experience",
    desc: "Projects delivered for businesses with real-world requirements and business goals.",
  },
  {
    icon: I.server,
    title: "Engineering-First Approach",
    desc: "We focus on building software that is reliable, maintainable, and designed to grow with your business.",
  },
  {
    icon: I.chat,
    title: "Direct Collaboration",
    desc: "Work directly with the people building your product, with clear communication throughout the project.",
  },
  {
    icon: I.design,
    title: "Built Around Your Needs",
    desc: "Every project starts with understanding your business—not forcing you into a pre-built solution.",
  },
];

const LOGOS = ["Nimbus", "Orbit", "Fitloop", "Vaultly", "Lernova", "Bytebite"];

/* ---------- Page ---------- */
function HomePage() {
  useReveal();
  const [showMoreWork, setShowMoreWork] = useState(false);
  const [openCap, setOpenCap] = useState(0);

  const moreProjects = useMemo(
    () => PROJECTS.filter((p) => !CASE_STUDIES.some((c) => c.title === p.title)),
    [],
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero — Centered Headline + Orbital Ecosystem */}
      <section
        id="home"
        className="relative lg:min-h-screen flex flex-col justify-center pt-20 pb-12 lg:pt-24 lg:pb-16 bg-white overflow-hidden"
      >
        {/* Ambient background */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(900px 520px at 50% 0%, rgba(37,99,235,0.14), transparent 65%), radial-gradient(700px 500px at 15% 90%, rgba(124,58,237,0.14), transparent 65%), radial-gradient(700px 500px at 85% 85%, rgba(13,148,136,0.10), transparent 65%)",
            }}
          />
          <div className="absolute inset-0 dot-grid opacity-25 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]" />

          <svg
            className="absolute inset-0 w-full h-full opacity-[0.05]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="hgrid" width="64" height="64" patternUnits="userSpaceOnUse">
                <path d="M64 0H0V64" fill="none" stroke="#0F172A" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hgrid)" />
          </svg>
        </div>

        <div className="container-x relative z-10 flex justify-center">
          {/* centered headline block with the globe animation behind it */}
          <div className="w-full max-w-3xl mx-auto text-center relative">
            {/* globe animation sits behind the text on every screen size */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[135%] max-w-[760px] aspect-square opacity-30 -z-10"
            >
              <HeroGlobe bare className="absolute inset-0 w-full h-full" />
            </div>

            <span
              className="hero-item inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest border bg-white/80 backdrop-blur"
              style={{
                animationDelay: "0.05s",
                borderColor: "rgba(37,99,235,0.25)",
                color: "#1E3A8A",
              }}
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-primary opacity-70 ping-soft" />
                <span className="relative inline-flex rounded-full w-2 h-2 bg-primary" />
              </span>
            </span>

            <h1
              className="hero-item font-display mt-6 font-extrabold tracking-tight leading-[1.02] text-[40px] sm:text-[58px] lg:text-[54px] xl:text-[64px] text-[#0F172A]"
              style={{ animationDelay: "0.15s" }}
            >
              Custom Software &amp; SaaS Development for{" "}
              <span className="relative inline-block">
                <span className="animated-gradient-text">Growing Businesses</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="10"
                  viewBox="0 0 300 10"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 7 C 80 2, 160 2, 298 6"
                    stroke="url(#uline)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="uline" x1="0" x2="1">
                      <stop offset="0" stopColor="#2563EB" />
                      <stop offset="1" stopColor="#7C3AED" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            <p
              className="hero-item mt-5 font-display text-xl md:text-2xl font-semibold text-[#1F2937]"
              style={{ animationDelay: "0.2s" }}
            >
              Build Software That Moves Your Business Forward.
            </p>

            <p
              className="hero-item mt-5 text-[17px] lg:text-[18px] leading-relaxed text-[#4B5563] max-w-xl mx-auto"
              style={{ animationDelay: "0.25s" }}
            >
              <strong className="text-[#0F172A] font-semibold">
                Custom software, SaaS products, and high-performance backend systems built for
                startups and growing businesses.
              </strong>
            </p>

            <p
              className="hero-item mt-4 text-[17px] lg:text-[18px] leading-relaxed text-[#4B5563] max-w-xl mx-auto"
              style={{ animationDelay: "0.3s" }}
            >
              At Syncnowise, we turn ideas and business challenges into reliable, scalable software
              — from MVPs and web applications to complex backend and distributed systems.
            </p>

            <div
              className="hero-item mt-9 flex flex-wrap justify-center gap-3"
              style={{ animationDelay: "0.35s" }}
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-white font-semibold text-sm shadow-lg transition-transform hover:scale-[1.03]"
                style={{
                  backgroundImage: "linear-gradient(90deg,#1E3A8A,#7C3AED)",
                  boxShadow: "0 16px 36px -14px rgba(124,58,237,0.55)",
                }}
              >
                Get started
                <I.arrow width="16" height="16" />
              </a>
              <a
                href="#portfolio"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-[#1F2937] bg-white border border-border hover:border-primary/40 transition-colors"
              >
                View our work
                <I.arrow
                  width="16"
                  height="16"
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>

            <div
              className="hero-item mt-8 flex flex-wrap justify-center items-center gap-x-6 gap-y-3"
              style={{ animationDelay: "0.45s" }}
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[
                    { src: test1, w: 512, h: 512 },
                    { src: test2, w: 512, h: 512 },
                    { src: test3, w: 512, h: 512 },
                    { src: team1, w: 600, h: 600 },
                    { src: team2, w: 600, h: 600 },
                  ].map((a, i) => (
                    <img
                      key={i}
                      src={a.src}
                      alt=""
                      width={a.w}
                      height={a.h}
                      className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm"
                    />
                  ))}
                </div>
                <div className="flex flex-col text-left">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <I.star key={i} width="12" height="12" />
                    ))}
                    <span className="ml-1 text-xs font-bold text-[#0F172A]">4.9/5</span>
                  </div>
                  <span className="text-[11px] text-subtle">from 4 + client reviews</span>
                </div>
              </div>
              <span className="hidden sm:inline w-px h-8 bg-border" />
              <div className="flex items-center gap-2 text-xs text-[#4B5563]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-medium">Available for Q3 projects</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Work. Real Results. */}
      <section id="results" className="section-y bg-white relative overflow-hidden">
        <div className="container-x relative">
          <div className="reveal max-w-3xl mx-auto text-center">
            <span className="section-kicker justify-center">
              <span className="section-kicker-dot" />
              Proven Results
            </span>
            <h2 className="mt-5 font-display text-3xl md:text-5xl font-bold tracking-tight text-navy leading-tight">
              Real Work. Real Results.
            </h2>
            <p className="mt-5 text-lg font-semibold text-navy leading-relaxed">
              We don't believe in filling our portfolio with promises. We believe in showing the
              work.
            </p>
            <p className="mt-3 text-lg text-muted leading-relaxed">
              Syncnowise has delivered software solutions for real businesses across different
              industries, helping clients turn their ideas and business requirements into practical
              digital products.
            </p>
          </div>

          <div className="mt-14 text-center">
            <span className="section-kicker justify-center">
              <span className="section-kicker-dot" />
              What We Bring
            </span>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {RESULTS.map((r, i) => (
              <div
                key={r.title}
                className="reveal card-lift group relative bg-white rounded-2xl border border-border p-6 shadow-[var(--shadow-card)] overflow-hidden"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br from-primary/10 to-violet-500/10 group-hover:scale-150 transition-transform duration-500" />
                <div className="relative w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <r.icon width="22" height="22" />
                </div>
                <h3 className="relative mt-5 text-lg font-semibold">{r.title}</h3>
                <p className="relative mt-2 text-sm text-muted leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-white font-semibold text-sm shadow-lg transition-transform hover:scale-[1.03]"
              style={{
                backgroundImage: "linear-gradient(90deg,#1E3A8A,#7C3AED)",
                boxShadow: "0 16px 36px -14px rgba(124,58,237,0.55)",
              }}
            >
              View Our Work
              <I.arrow width="16" height="16" />
            </a>
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section className="py-10 md:py-12 bg-[color:var(--color-surface)] border-y border-border">
        <div className="container-x">
          <p className="text-center text-xs font-semibold tracking-widest text-subtle uppercase">
            Trusted by ambitious teams worldwide
          </p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
            {LOGOS.map((l) => (
              <div
                key={l}
                className="grayscale-logo text-center text-lg font-bold tracking-tight text-navy"
              >
                {l}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section id="services" className="section-y bg-surface relative overflow-hidden">
        <div className="container-x relative">
          <div className="reveal max-w-3xl mx-auto text-center">
            <span className="section-kicker justify-center">
              <span className="section-kicker-dot" />
              What We Do
            </span>
            <h2 className="mt-5 font-display text-3xl md:text-5xl font-bold tracking-tight text-navy leading-tight">
              What We Build
            </h2>
            <p className="mt-5 text-lg text-muted leading-relaxed">
              From first idea to production-grade systems — software engineered around how your
              business actually works.
            </p>
          </div>

          <div className="mt-10 md:mt-14 grid sm:grid-cols-2 gap-6">
            {WHAT_WE_BUILD.map((w, i) => (
              <div
                key={w.title}
                className="reveal svc-card"
                style={{ transitionDelay: `${i * 80}ms` }}
                onMouseMove={(e) => {
                  const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
                  (e.currentTarget as HTMLElement).style.setProperty(
                    "--mx",
                    `${e.clientX - r.left}px`,
                  );
                  (e.currentTarget as HTMLElement).style.setProperty(
                    "--my",
                    `${e.clientY - r.top}px`,
                  );
                }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="svc-icon">
                    <w.icon width="22" height="22" />
                  </div>
                  <span className="svc-cat">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-navy leading-snug">
                    {w.title}
                  </h3>
                  <p className="mt-3 text-sm md:text-base text-muted leading-relaxed">{w.desc}</p>
                </div>
                <div className="mt-auto pt-1 flex flex-wrap gap-2">
                  {w.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold px-3 py-1.5 rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {w.href && (
                  <a
                    href={w.href}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                  >
                    Learn more
                    <I.arrow width="14" height="14" />
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-white font-semibold text-sm shadow-lg transition-transform hover:scale-[1.03]"
              style={{
                backgroundImage: "linear-gradient(90deg,#1E3A8A,#7C3AED)",
                boxShadow: "0 16px 36px -14px rgba(124,58,237,0.55)",
              }}
            >
              Discuss Your Project
              <I.arrow width="16" height="16" />
            </a>
          </div>
        </div>
      </section>

      <section
        id="why-us"
        className="section-y bg-[color:var(--color-surface)] relative overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="container-x relative">
          <SectionHeader
            eyebrow="Why Choose Us"
            title="Why Syncnowise"
            subtitle="Engineering discipline, transparent partnership, and a bias for shipping."
          />
          <div className="mt-10 md:mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_US.map((w, i) => (
              <div
                key={w.title}
                className="reveal card-lift group relative bg-white rounded-2xl border border-border p-6 shadow-[var(--shadow-card)] overflow-hidden"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br from-primary/10 to-violet-500/10 group-hover:scale-150 transition-transform duration-500" />
                <div className="relative w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <w.icon width="22" height="22" />
                </div>
                <h3 className="relative mt-5 text-lg font-semibold">{w.title}</h3>
                <p className="relative mt-2 text-sm text-muted leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-white font-semibold text-sm shadow-lg transition-transform hover:scale-[1.03]"
              style={{
                backgroundImage: "linear-gradient(90deg,#1E3A8A,#7C3AED)",
                boxShadow: "0 16px 36px -14px rgba(124,58,237,0.55)",
              }}
            >
              Let's Build Something
              <I.arrow width="16" height="16" />
            </a>
          </div>
        </div>
      </section>

      {/* How We Work — Process timeline */}
      <section id="process" className="section-y bg-navy relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-violet-500/20 blur-3xl"
        />

        <div className="container-x relative">
          <div className="reveal max-w-2xl mx-auto text-center">
            <span className="section-kicker justify-center text-white/80">
              <span className="section-kicker-dot" />
              Process
            </span>
            <h2 className="mt-5 font-display text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              How We Work
            </h2>
            <p className="mt-4 text-lg text-white/60 leading-relaxed">
              A predictable, transparent workflow from first conversation to long-term support.
            </p>
          </div>

          <div className="mt-16 md:mt-20 relative">
            <div
              aria-hidden
              className="hidden md:block absolute left-1/2 top-2 bottom-2 w-px -translate-x-1/2 bg-white/15"
            />
            <div
              aria-hidden
              className="md:hidden absolute left-5 top-2 bottom-2 w-px bg-white/15"
            />

            <div className="space-y-10 md:space-y-4">
              {WORK_STEPS.map((s, i) => {
                const left = i % 2 === 0;
                const label = (
                  <div className="flex items-center gap-2" style={{ color: "#93C5FD" }}>
                    <s.icon width="16" height="16" />
                    <span className="text-xs font-bold uppercase tracking-widest">Step {s.n}</span>
                  </div>
                );
                const content = (
                  <>
                    <h3 className="mt-1.5 font-display text-lg md:text-xl font-semibold text-white">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/60 leading-relaxed">{s.desc}</p>
                  </>
                );
                return (
                  <div
                    key={s.n}
                    className="reveal relative md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-8 md:py-6"
                    style={{ transitionDelay: `${i * 70}ms` }}
                  >
                    {/* mobile */}
                    <div className="md:hidden flex gap-4 pl-0">
                      <div className="shrink-0 w-11 h-11 rounded-full bg-primary text-white font-bold flex items-center justify-center shadow-[0_8px_20px_rgba(37,99,235,0.45)] relative z-10">
                        {s.n}
                      </div>
                      <div className="pt-1">
                        {label}
                        {content}
                      </div>
                    </div>

                    {/* desktop */}
                    {left ? (
                      <>
                        <div className="hidden md:block text-right pr-2">
                          <div className="flex justify-end">{label}</div>
                          {content}
                        </div>
                        <div className="hidden md:flex w-12 h-12 rounded-full bg-primary text-white font-bold items-center justify-center shadow-[0_8px_20px_rgba(37,99,235,0.45)] z-10">
                          {s.n}
                        </div>
                        <div className="hidden md:block" />
                      </>
                    ) : (
                      <>
                        <div className="hidden md:block" />
                        <div className="hidden md:flex w-12 h-12 rounded-full bg-primary text-white font-bold items-center justify-center shadow-[0_8px_20px_rgba(37,99,235,0.45)] z-10">
                          {s.n}
                        </div>
                        <div className="hidden md:block pl-2">
                          {label}
                          {content}
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="reveal mt-16 md:mt-20 text-center">
            <p className="text-xl md:text-2xl font-display font-semibold text-white">
              Have a project in mind? Let's talk.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-navy font-semibold text-sm bg-white shadow-lg transition-transform hover:scale-[1.03]"
            >
              Start a Conversation
              <I.arrow width="16" height="16" />
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <AboutSection />

      {/* Our Work */}
      <section id="portfolio" className="section-y bg-[color:var(--color-surface)]">
        <div className="container-x">
          <div className="reveal max-w-3xl mx-auto text-center">
            <span className="section-kicker justify-center">
              <span className="section-kicker-dot" />
              Our Work
            </span>
            <h2 className="mt-5 font-display text-3xl md:text-5xl font-bold tracking-tight text-navy leading-tight">
              Real Projects. Real Businesses. Real Solutions.
            </h2>
            <p className="mt-5 text-lg text-muted leading-relaxed">
              Every project we showcase represents work delivered for a real client. We work closely
              with businesses to understand their requirements, solve their technical challenges,
              and deliver software that supports their goals.
            </p>
          </div>

          <div className="mt-14 text-center">
            <span className="section-kicker justify-center">
              <span className="section-kicker-dot" />
              Featured Projects
            </span>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6 lg:gap-7">
            {CASE_STUDIES.map((c, i) => (
              <a
                key={c.title}
                href={`/case-studies/${c.slug}`}
                className="reveal card-lift group text-left bg-white rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-card)] flex flex-col"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={c.img}
                    alt={`${c.title} project preview`}
                    loading="lazy"
                    width={1000}
                    height={750}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                    {c.industry}
                  </span>
                  <h3 className="mt-1.5 font-display text-lg font-semibold text-navy">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed flex-1">{c.solution}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    View Case Study
                    <I.arrow
                      width="16"
                      height="16"
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setShowMoreWork((v) => !v)}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-[#1F2937] bg-white border border-border hover:border-primary/40 transition-colors"
            >
              {showMoreWork ? "Hide Additional Projects" : "View All Projects"}
              <I.arrow
                width="16"
                height="16"
                className={`transition-transform ${showMoreWork ? "-rotate-90" : "rotate-90"}`}
              />
            </button>
            <a
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              Browse all case studies
              <I.arrow width="14" height="14" />
            </a>
          </div>

          {showMoreWork && (
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
              {moreProjects.map((p) => (
                <a
                  key={p.title}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fade-pop-in card-lift group bg-white rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-card)] flex flex-col"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={p.img}
                      alt={`${p.title} website preview`}
                      loading="lazy"
                      width={1000}
                      height={750}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-semibold">{p.title}</h3>
                      <span className="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                        {p.tag}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-muted">{p.desc}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      Visit live site
                      <I.arrow
                        width="16"
                        height="16"
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section-y bg-[color:var(--color-surface)]">
        <div className="container-x">
          <div className="reveal max-w-2xl mx-auto text-center">
            <span className="section-kicker justify-center">
              <span className="section-kicker-dot" />
              Testimonials
            </span>
            <h2 className="mt-5 font-display text-3xl md:text-5xl font-bold tracking-tight text-navy leading-tight">
              What Our Clients Say
            </h2>
            <p className="mt-5 text-lg font-semibold text-navy">
              Trusted Through Real Collaboration
            </p>
            <p className="mt-3 text-muted leading-relaxed">
              We value the relationships we build with our clients. Their feedback reflects how we
              approach projects — from understanding the initial requirement to delivering and
              supporting the final solution.
            </p>
          </div>

          <div className="mt-12 md:mt-14 grid md:grid-cols-3 gap-6 lg:gap-7">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={t.name}
                className="reveal bg-white rounded-2xl border border-border shadow-[var(--shadow-card)] p-6 md:p-7 flex flex-col"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <p className="text-[15px] text-foreground leading-relaxed flex-1">"{t.quote}"</p>
                <div className="mt-6 pt-5 border-t border-border flex items-center gap-3">
                  <img
                    src={t.photo}
                    alt={t.name}
                    width={t.photoW}
                    height={t.photoH}
                    className={`w-11 h-11 rounded-lg border border-border shrink-0 ${"contain" in t ? "object-contain bg-navy p-1" : "object-cover object-top"}`}
                  />
                  <div>
                    <div className="text-sm font-semibold text-navy">{t.name}</div>
                    <div className="text-xs text-subtle">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="/case-studies"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-[#1F2937] bg-white border border-border hover:border-primary/40 transition-colors"
            >
              View More Client Stories
              <I.arrow width="16" height="16" />
            </a>
          </div>
        </div>
      </section>

      {/* Engineering Capabilities */}
      <section id="capabilities" className="section-y bg-navy relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-violet-500/20 blur-3xl"
        />

        <div className="container-x relative">
          <div className="reveal max-w-2xl mx-auto text-center">
            <span className="section-kicker justify-center text-white/80">
              <span className="section-kicker-dot" />
              Engineering Capabilities
            </span>
            <h2 className="mt-5 font-display text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Strong Engineering. Practical Solutions.
            </h2>
            <p className="mt-4 text-lg text-white/60 leading-relaxed">
              We combine product-focused development with strong engineering fundamentals to build
              software that is reliable, maintainable, and ready to evolve.
            </p>
          </div>

          <div className="reveal mt-14 md:mt-16 max-w-4xl mx-auto grid lg:grid-cols-[280px_1fr] gap-3 lg:gap-5">
            {/* Tab rail */}
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible -mx-1 px-1 lg:mx-0 lg:px-0 pb-1 lg:pb-0">
              {CAPABILITIES.map((c, i) => {
                const active = openCap === i;
                return (
                  <button
                    key={c.title}
                    type="button"
                    onClick={() => setOpenCap(i)}
                    aria-pressed={active}
                    className={`group shrink-0 lg:shrink lg:w-full flex items-center gap-3 rounded-xl px-4 py-3.5 text-left border transition-all duration-300 cursor-pointer ${
                      active
                        ? "bg-white border-white shadow-[0_12px_28px_-12px_rgba(0,0,0,0.5)]"
                        : "bg-white/[0.03] border-white/10 hover:bg-white/[0.06] hover:border-white/20"
                    }`}
                  >
                    <span
                      className="font-mono text-xs shrink-0"
                      style={{ color: active ? "#1E3A8A" : "#93C5FD" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`text-sm font-semibold whitespace-nowrap lg:whitespace-normal transition-colors ${active ? "text-navy" : "text-white/70 group-hover:text-white"}`}
                    >
                      {c.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active capability panel */}
            <div
              key={openCap}
              className="cap-panel-in relative rounded-2xl border border-white/10 bg-white/[0.03] p-7 md:p-9 overflow-hidden"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -top-16 -right-16 w-64 h-64 rounded-full bg-primary/15 blur-3xl"
              />
              <div className="relative w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white">
                {(() => {
                  const Icon = CAPABILITIES[openCap].icon;
                  return <Icon width="22" height="22" />;
                })()}
              </div>
              <h3 className="relative mt-5 font-display text-xl md:text-2xl font-semibold text-white">
                {CAPABILITIES[openCap].title}
              </h3>
              <p className="relative mt-3 text-sm md:text-base text-white/60 leading-relaxed max-w-xl">
                {CAPABILITIES[openCap].desc}
              </p>
              <div className="relative mt-6 flex flex-wrap gap-2">
                {CAPABILITIES[openCap].tags.map((t) => (
                  <span
                    key={t.label}
                    className="inline-flex items-center gap-2 pl-2 pr-3.5 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-white/80 hover:bg-white/[0.08] hover:border-white/20 transition-colors"
                  >
                    {"logo" in t && t.logo ? (
                      <span className="w-5 h-5 rounded-md bg-white flex items-center justify-center shrink-0 p-0.5">
                        <img
                          src={t.logo}
                          alt=""
                          width={t.logoW}
                          height={t.logoH}
                          className="w-full h-full object-contain"
                        />
                      </span>
                    ) : (
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: "#93C5FD" }}
                      />
                    )}
                    <span className="text-xs font-medium">{t.label}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-navy font-semibold text-sm bg-white shadow-lg transition-transform hover:scale-[1.03]"
            >
              Discuss Your Technical Requirements
              <I.arrow width="16" height="16" />
            </a>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="section-y bg-white relative overflow-hidden">
        <div className="container-x relative">
          <div className="reveal max-w-2xl mx-auto text-center">
            <span className="section-kicker justify-center">
              <span className="section-kicker-dot" />
              Pricing
            </span>
            <h2 className="mt-5 font-display text-3xl md:text-5xl font-bold tracking-tight text-navy leading-tight">
              Project Pricing
            </h2>
            <p className="mt-5 text-lg text-muted leading-relaxed">
              Every project is different. We scope our work around your requirements, complexity,
              timeline, and goals rather than forcing projects into fixed packages.
            </p>
            <p className="mt-3 text-muted leading-relaxed">
              Whether you need a focused development engagement or a complete software product,
              we'll define the scope and provide a clear proposal before development begins.
            </p>
          </div>

          <div className="reveal mt-9 flex flex-col items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-white font-semibold text-sm shadow-lg transition-transform hover:scale-[1.03]"
              style={{
                backgroundImage: "linear-gradient(90deg,#1E3A8A,#7C3AED)",
                boxShadow: "0 16px 36px -14px rgba(124,58,237,0.55)",
              }}
            >
              Discuss Your Project
              <I.arrow width="16" height="16" />
            </a>
            <p className="text-sm text-subtle text-center max-w-md">
              Not sure what you need yet? That's okay — tell us about the problem you're trying to
              solve.
            </p>
          </div>
        </div>
      </section>

      {/* Team & Culture */}
      <section className="section-y bg-[color:var(--color-surface)]">
        <div className="container-x">
          <SectionHeader
            eyebrow="Team"
            title="A Small, Senior Team"
            subtitle="No layers, no hand-offs — just the people who actually build your product."
          />
          <div className="mt-10 md:mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CULTURE.map((c, i) => (
              <div
                key={c.title}
                className="reveal card-lift group relative bg-white rounded-2xl border border-border p-6 pt-7 shadow-[var(--shadow-card)] overflow-hidden transition-colors hover:border-primary/30"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-primary to-violet-500" />
                <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br from-primary/10 to-violet-500/10 group-hover:scale-150 transition-transform duration-500" />
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

      {/* Contact */}
      <ContactSection />

      <SiteFooter />
    </div>
  );
}

/* ---------- Sub-components ---------- */
function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="reveal max-w-2xl mx-auto text-center">
      <div className="text-xs font-semibold tracking-widest uppercase text-primary">{eyebrow}</div>
      <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
      <p className="mt-3 text-muted">{subtitle}</p>
    </div>
  );
}
