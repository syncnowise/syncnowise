import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import HeroGlobe from "@/components/HeroGlobe";
import { sendContactEmail } from "@/lib/contact-mailer";
import logo from "@/assets/syncnowise-logo.png";
import heroImg from "@/assets/hero-illustration.jpg";
import workRubber from "@/assets/work-rubber-form-builder.jpg";
import workBlanconite from "@/assets/work-blanconite-artistry-hub.jpg";
import workNebula from "@/assets/work-nebula-orthosys.jpg";
import nebulaLogo from "@/assets/nebula-logo.webp";
import echoPolymerLogo from "@/assets/logo.png";
import blanconiteLogo from "@/assets/blanconite.png";
import workDataMinds from "@/assets/work-data-minds-canvas.jpg";
import projectApp from "@/assets/project-app.jpg";
import projectEdu from "@/assets/project-edu.jpg";
import projectFintech from "@/assets/project-fintech.jpg";
import projectFood from "@/assets/project-food.jpg";
import projectSaas from "@/assets/project-saas.jpg";
import projectWeb from "@/assets/project-web.jpg";
import workArtistry from "@/assets/work-artistry-coming-soon.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import test1 from "@/assets/testimonial-1.jpg";
import test2 from "@/assets/testimonial-2.jpg";
import test3 from "@/assets/testimonial-3.jpg";
import goLogo from "@/assets/Go-Logo_LightBlue.svg";
import rustLogo from "@/assets/rust-programming-language-icon.svg";
import pythonLogo from "@/assets/Python.svg";
import pgLogo from "@/assets/postgresql-logo-svgrepo-com.svg";

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
      { property: "og:image", content: "https://syncnowise.com/syncnowise-logo.png" },
      { property: "og:image:width", content: "1920" },
      { property: "og:image:height", content: "385" },
      { property: "og:image:alt", content: "Syncnowise" },
      { name: "twitter:title", content: "Custom Software & SaaS Development | Syncnowise" },
      {
        name: "twitter:description",
        content:
          "Syncnowise builds custom software, SaaS products, web applications, and scalable backend systems for startups and growing businesses.",
      },
      { name: "twitter:image", content: "https://syncnowise.com/syncnowise-logo.png" },
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

/* ---------- Icons ---------- */
const I = {
  web: (p: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M7 14h6" />
    </svg>
  ),
  mobile: (p: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 18h2" />
    </svg>
  ),
  saas: (p: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <path d="M4 17a4 4 0 0 1 1-7.87A6 6 0 0 1 17 9a4 4 0 0 1 1 7.87" />
      <path d="M12 12v6m0 0l-2-2m2 2l2-2" />
    </svg>
  ),
  design: (p: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <path d="M12 19l7-7 3 3-7 7H12v-3z" />
      <path d="M18 13l-1.5-1.5M2 12l7-7 3 3-7 7H2v-3z" />
    </svg>
  ),
  check: (p: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" {...p}>
      <path d="M5 12l5 5L20 7" />
    </svg>
  ),
  arrow: (p: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  ),
  star: (p: any) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 17.3l-6.2 3.7 1.6-7L2 9.2l7.1-.6L12 2l2.9 6.6 7.1.6-5.4 4.8 1.6 7z" />
    </svg>
  ),
  code: (p: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />
    </svg>
  ),
  server: (p: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <rect x="3" y="4" width="18" height="7" rx="1.5" />
      <rect x="3" y="13" width="18" height="7" rx="1.5" />
      <circle cx="7" cy="7.5" r="0.8" fill="currentColor" />
      <circle cx="7" cy="16.5" r="0.8" fill="currentColor" />
    </svg>
  ),
  strategy: (p: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <path d="M3 20h18M6 20V10M12 20V4M18 20v-7" />
    </svg>
  ),
  cloud: (p: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <path d="M7 18a4 4 0 0 1-.5-7.97A6 6 0 0 1 18 10a3.5 3.5 0 0 1 .5 6.97" />
    </svg>
  ),
  shield: (p: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  support: (p: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <path d="M4 13a8 8 0 0 1 16 0v4a2 2 0 0 1-2 2h-1v-6h3M4 13v4a2 2 0 0 0 2 2h1v-6H4" />
    </svg>
  ),
  megaphone: (p: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <path d="M3 10v4l12 5V5L3 10zM17 8a4 4 0 0 1 0 8" />
    </svg>
  ),
  bolt: (p: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
    </svg>
  ),
  chat: (p: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <path d="M4 5h16v11H8l-4 4V5z" />
    </svg>
  ),
  tag: (p: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <path d="M20 12l-8 8-9-9V3h8l9 9z" />
      <circle cx="7.5" cy="7.5" r="1.2" />
    </svg>
  ),
  clock: (p: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  ),
};

/* ---------- Data ---------- */
const NAV = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const WHAT_WE_BUILD = [
  {
    icon: I.saas,
    title: "Custom Software Development",
    desc: "Turn your business idea or requirements into reliable, production-ready software designed around the way your business actually works.",
    tags: ["Web Applications", "Business Software", "Custom Platforms"],
  },
  {
    icon: I.bolt,
    title: "SaaS & MVP Development",
    desc: "From first concept to a working product, we help startups and businesses build, validate, and launch scalable software products.",
    tags: ["MVP Development", "SaaS Platforms", "Product Development"],
  },
  {
    icon: I.server,
    title: "Backend & Systems Engineering",
    desc: "Build the reliable foundation behind your product with robust APIs, backend services, integrations, and high-performance systems.",
    tags: ["Rust", "Go", "Python", "APIs", "Microservices", "Distributed Systems"],
  },
  {
    icon: I.code,
    title: "Automation & AI Solutions",
    desc: "Reduce repetitive work and improve operational efficiency with intelligent automation, data-processing tools, and AI-powered workflows.",
    tags: ["Business Automation", "AI Integration", "Data Processing", "API Integrations"],
  },
];

const CAPABILITIES = [
  {
    icon: I.server,
    title: "Backend Engineering",
    desc: "Design and development of reliable APIs, backend services, business logic, and integrations.",
    tags: [
      { label: "Go", logo: goLogo },
      { label: "Rust", logo: rustLogo },
      { label: "Python", logo: pythonLogo },
      { label: "REST APIs" },
      { label: "gRPC" },
    ],
  },
  {
    icon: I.bolt,
    title: "Distributed & Real-Time Systems",
    desc: "Engineering for applications that require concurrency, real-time communication, reliable service-to-service communication, and scalable architectures.",
    tags: [
      { label: "Distributed Systems" },
      { label: "WebSockets" },
      { label: "Event-Driven Architecture" },
      { label: "Kafka" },
    ],
  },
  {
    icon: I.cloud,
    title: "Data & Infrastructure",
    desc: "Build and operate the foundations that keep applications reliable and ready to scale.",
    tags: [
      { label: "PostgreSQL", logo: pgLogo },
      { label: "Redis" },
      { label: "Docker" },
      { label: "Kubernetes" },
      { label: "Cloud Infrastructure" },
    ],
  },
  {
    icon: I.web,
    title: "Web Applications",
    desc: "Modern, responsive applications designed around real business and product requirements.",
    tags: [
      { label: "Frontend Development" },
      { label: "APIs" },
      { label: "Authentication" },
      { label: "Third-Party Integrations" },
    ],
  },
];

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

const ABOUT_POINTS = [
  "Real Client Work",
  "Engineering Expertise",
  "Direct Collaboration",
  "Built for the Long Term",
];

const ABOUT_GALLERY = [
  { img: projectApp, alt: "Mobile app project" },
  { img: projectEdu, alt: "Education platform project" },
  { img: projectFintech, alt: "Fintech dashboard project" },
  { img: projectFood, alt: "Food & delivery app project" },
  { img: projectSaas, alt: "SaaS dashboard project" },
  { img: projectWeb, alt: "Web platform project" },
];

const PROJECTS = [
  {
    img: workRubber,
    title: "Echo Polymer Industries",
    desc: "Manufacturing website with product catalogue and enquiry forms.",
    tag: "Web",
    url: "https://echopolymers.com",
  },
  {
    img: workBlanconite,
    title: "Blanconite Artistry Hub",
    desc: "Premium Jesmonite materials brand store and artistry hub.",
    tag: "Web",
    url: "https://blanconite-artistry-hub.lovable.app",
  },
  {
    img: workNebula,
    title: "Nebula OrthoSys",
    desc: "Orthopaedic management platform with clinical workflows.",
    tag: "SaaS",
    url: "https://nebula-orthosys.lovable.app",
  },
  {
    img: workDataMinds,
    title: "Data Minds",
    desc: "Digital solutions agency site with services and lead capture.",
    tag: "Web",
    url: "https://data-minds-canvas.lovable.app",
  },
  {
    img: workArtistry,
    title: "Blanconite Launch",
    desc: "Coming-soon landing page with countdown and waitlist signup.",
    tag: "Web",
    url: "https://artistry-coming-soon.lovable.app",
  },
];

const CASE_STUDIES = [
  {
    img: workRubber,
    title: "Echo Polymer Industries",
    industry: "Manufacturing — Rubber Extrusion & Moulding",
    services: "Custom Website Development",
    url: "https://echopolymers.com",
    challenge:
      "Buyers couldn't see what Echo Polymer actually manufactures. Without a way to present products online, it was difficult for buyers — especially outside their home region of Rajkot — to evaluate specs and quality before making contact.",
    solution:
      "Syncnowise built a product-first manufacturing website presenting extrusion profiles, moulded parts, and material grades with clear specifications, images, and a simple enquiry form.",
    outcome: "Enquiries from outside Gujarat started coming in within weeks.",
    outcomeAttribution: "— Echo Polymer Industries",
  },
  {
    img: workNebula,
    title: "Nebula OrthoSys",
    industry: "Healthcare — Orthopaedic Practice Management",
    services: "Custom Software Development (ERP)",
    url: "https://nebula-orthosys.lovable.app",
    challenge:
      "An orthopaedic practice needed to manage patients, implants inventory, billing, and reporting without juggling disconnected tools or long staff training.",
    solution:
      "Syncnowise built an orthopaedic management platform with clinical workflows that bring patients, implants inventory, billing, and reports into one system.",
    outcome:
      "The interface is so easy that our staff learned it in a single day — no long training, no confusion.",
    outcomeAttribution: "— Nebula OrthoSys",
  },
  {
    img: workBlanconite,
    title: "Blanconite Artistry Hub",
    industry: "Retail — Premium Jesmonite Casting Materials",
    services: "E-commerce / Brand Store Development",
    url: "https://blanconite-artistry-hub.lovable.app",
    challenge:
      "In the craft materials market, buyers can't judge finish and quality online, and cheap imitations are common — making trust the core obstacle to selling.",
    solution:
      "Syncnowise designed a premium brand store that shows true material texture, batch details, and artist work, so buyers can see exactly what they're ordering.",
    outcome: "Buyers know exactly what they're getting before ordering.",
    outcomeAttribution: "— Blanconite",
  },
];

const WORK_STEPS = [
  {
    n: "01",
    icon: I.chat,
    title: "Understand",
    desc: "We start by understanding your business, your users, your requirements, and the problem you're trying to solve.",
  },
  {
    n: "02",
    icon: I.strategy,
    title: "Plan",
    desc: "We define the scope, technical approach, priorities, timeline, and deliverables before development begins.",
  },
  {
    n: "03",
    icon: I.code,
    title: "Build",
    desc: "Our engineers turn the plan into working software through focused development, testing, and regular progress updates.",
  },
  {
    n: "04",
    icon: I.check,
    title: "Review",
    desc: "You see the progress throughout the project. We gather feedback, refine the product, and make sure it meets the agreed requirements.",
  },
  {
    n: "05",
    icon: I.bolt,
    title: "Launch",
    desc: "Once everything is ready, we help deploy your software and make sure the transition to production is smooth.",
  },
  {
    n: "06",
    icon: I.support,
    title: "Support",
    desc: "Our relationship doesn't have to end at launch. We can continue with maintenance, improvements, monitoring, and future development as your needs evolve.",
  },
];

const TESTIMONIALS = [
  {
    photo: echoPolymerLogo,
    contain: true,
    name: "Echo Polymer Industries",
    role: "Rubber Extrusion & Moulding Manufacturer, Rajkot",
    quote:
      "Our biggest problem was buyers not being able to see what we actually manufacture. Syncnowise built a real product-first website — extrusion profiles, moulded parts and material grades are now presented with clear specs, images and a simple enquiry form. Enquiries from outside Gujarat started coming in within weeks.",
  },
  {
    photo: nebulaLogo,
    contain: true,
    name: "Nebula OrthoSys",
    role: "Orthopaedic ERP Platform",
    quote:
      "They made our daily work genuinely smooth. The ERP handles patients, implants inventory, billing and reports in one place, and the interface is so easy that our staff learned it in a single day — no long training, no confusion.",
  },
  {
    photo: blanconiteLogo,
    contain: true,
    name: "Blanconite",
    role: "Premium Jesmonite Casting Materials",
    quote:
      "In our craft market the real struggle is trust — customers can't judge finish and quality online, and cheap imitations are everywhere. Syncnowise designed a store that shows true material texture, batch details and artist work, so buyers know exactly what they're getting before ordering.",
  },
];

const CULTURE = [
  {
    icon: I.shield,
    title: "Small & Senior",
    desc: "A lean, senior team — not a large agency with layers of account managers between you and the work.",
  },
  {
    icon: I.code,
    title: "Engineers, Not Salespeople",
    desc: "The people who scope your project are the same people who build it.",
  },
  {
    icon: I.chat,
    title: "Direct Communication",
    desc: "You talk directly with the engineers working on your product — no relayed messages, no guesswork.",
  },
  {
    icon: I.check,
    title: "Fully In-House",
    desc: "Every engagement is handled start to finish by our own team — no outsourcing, no unknown subcontractors.",
  },
];

const LOGOS = ["Nimbus", "Orbit", "Fitloop", "Vaultly", "Lernova", "Bytebite"];

/* ---------- Hooks ---------- */
function useReveal() {
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

/* ---------- Page ---------- */
function HomePage() {
  useReveal();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCase, setActiveCase] = useState<number | null>(null);
  const [showMoreWork, setShowMoreWork] = useState(false);
  const [openCap, setOpenCap] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeStudy = activeCase !== null ? CASE_STUDIES[activeCase] : null;
  const moreProjects = useMemo(
    () => PROJECTS.filter((p) => !CASE_STUDIES.some((c) => c.title === p.title)),
    [],
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all ${
          scrolled
            ? "bg-white/90 backdrop-blur border-b border-border shadow-sm"
            : "bg-white/60 backdrop-blur"
        }`}
      >
        <div className="container-x flex items-center justify-between h-16">
          <a href="#home" className="flex items-center min-h-11">
            <img src={logo} alt="Syncnowise" className="h-9 md:h-10 w-auto object-contain" />
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
            <a href="#contact" className="btn-primary text-sm whitespace-nowrap">
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
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="btn-primary text-sm mt-2 w-full"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </header>

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
                  {[test1, test2, test3, team1, team2].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt=""
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
              <button
                key={c.title}
                type="button"
                onClick={() => setActiveCase(i)}
                className="reveal card-lift group text-left bg-white rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-card)] flex flex-col"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={c.img}
                    alt={`${c.title} project preview`}
                    loading="lazy"
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
              </button>
            ))}
          </div>

          <div className="mt-12 text-center">
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

      {/* Case study modal */}
      <Dialog.Root open={activeCase !== null} onOpenChange={(open) => !open && setActiveCase(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-navy/70 backdrop-blur-sm opacity-0 transition-opacity duration-300 data-[state=open]:opacity-100" />
          <Dialog.Content
            className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white shadow-2xl overflow-hidden opacity-0 scale-90 transition-all duration-300 data-[state=open]:opacity-100 data-[state=open]:scale-100 focus:outline-none"
            style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            {activeStudy && (
              <>
                <Dialog.Description className="sr-only">
                  Case study details for {activeStudy.title}
                </Dialog.Description>

                <Dialog.Close className="absolute top-3.5 right-3.5 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-navy hover:bg-white transition-colors shadow cursor-pointer">
                  <span aria-hidden>✕</span>
                  <span className="sr-only">Close</span>
                </Dialog.Close>

                <div className="modal-scroll max-h-[85vh] overflow-y-auto">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={activeStudy.img}
                      alt={`${activeStudy.title} preview`}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-6 md:p-7">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-primary/10 text-primary">
                        {activeStudy.industry}
                      </span>
                      <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-surface border border-border text-muted">
                        {activeStudy.services}
                      </span>
                    </div>
                    <Dialog.Title className="mt-3.5 font-display text-xl md:text-2xl font-bold text-navy">
                      {activeStudy.title}
                    </Dialog.Title>

                    <div className="mt-5 space-y-4">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-primary">
                          The Challenge
                        </h4>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted">
                          {activeStudy.challenge}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-primary">
                          What We Built
                        </h4>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted">
                          {activeStudy.solution}
                        </p>
                      </div>
                      <div className="rounded-xl bg-surface border border-border p-4">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-primary">
                          The Outcome
                        </h4>
                        <p className="mt-1.5 text-sm leading-relaxed text-navy italic">
                          "{activeStudy.outcome}"
                        </p>
                        <p className="mt-1 text-xs text-subtle">{activeStudy.outcomeAttribution}</p>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <a
                        href={activeStudy.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-white font-semibold text-sm shadow-lg transition-transform hover:scale-[1.03]"
                        style={{
                          backgroundImage: "linear-gradient(90deg,#1E3A8A,#7C3AED)",
                          boxShadow: "0 16px 36px -14px rgba(124,58,237,0.55)",
                        }}
                      >
                        Visit Live Site
                        <I.arrow width="16" height="16" />
                      </a>
                      <Dialog.Close className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-[#1F2937] bg-white border border-border hover:border-primary/40 transition-colors cursor-pointer">
                        Close
                      </Dialog.Close>
                    </div>
                  </div>
                </div>
              </>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

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
              href="#portfolio"
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
                        <img src={t.logo} alt="" className="w-full h-full object-contain" />
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

      {/* Footer */}
      <footer className="relative bg-[#0B1120] text-white/80 overflow-hidden">
        {/* Subtle top gradient line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container-x relative pt-16 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Brand + Contact */}
            <div className="lg:col-span-4">
              <a href="#home" className="inline-block">
                <img
                  src={logo}
                  alt="Syncnowise"
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
                      href="#services"
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
                <a
                  href="#"
                  aria-label="Twitter / X"
                  className="w-10 h-10 rounded-full bg-white/8 border border-white/10 hover:bg-primary hover:border-primary flex items-center justify-center text-white/80 transition-all"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full bg-white/8 border border-white/10 hover:bg-primary hover:border-primary flex items-center justify-center text-white/80 transition-all"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="GitHub"
                  className="w-10 h-10 rounded-full bg-white/8 border border-white/10 hover:bg-primary hover:border-primary flex items-center justify-center text-white/80 transition-all"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
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
                <a href="#" className="hover:text-white transition-colors">
                  Security
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
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

function AboutImageCarousel() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % ABOUT_GALLERY.length);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-card)]">
      {ABOUT_GALLERY.map((g, i) => (
        <img
          key={g.alt}
          src={g.img}
          alt={g.alt}
          className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-1000 ease-in-out ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
        {ABOUT_GALLERY.map((g, i) => (
          <span
            key={g.alt}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === idx ? "w-6 bg-white" : "w-1.5 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <section id="about" className="section-y bg-white">
      <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
        <div className="reveal">
          <AboutImageCarousel />
        </div>
        <div className="reveal">
          <div className="text-xs font-semibold tracking-widest uppercase text-primary">
            About Syncnowise
          </div>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
            Engineering software with a focus on what matters.
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            We combine engineering rigor with direct, honest collaboration — building real software
            for real businesses, designed to hold up long after launch.
          </p>
          <ul className="mt-8 space-y-3">
            {ABOUT_POINTS.map((point) => (
              <li key={point} className="flex items-center gap-3 text-foreground font-medium">
                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <I.check width="13" height="13" />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const BUDGET_OPTIONS = [
  "Not sure yet",
  "Under $2,000",
  "$2,000–$5,000",
  "$5,000–$10,000",
  "$10,000+",
];
const TIMELINE_OPTIONS = ["ASAP", "Within 1 month", "1–3 months", "Just exploring"];

function ContactSection() {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    building: "",
    problem: "",
    budget: "",
    timeline: "",
    details: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid work email";
    if (!form.building.trim()) e.building = "Tell us what you're looking to build";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSending(true);
    setSendError("");
    try {
      await sendContactEmail({ data: form });
      setSent(true);
      setForm({
        name: "",
        email: "",
        company: "",
        building: "",
        problem: "",
        budget: "",
        timeline: "",
        details: "",
      });
      setTimeout(() => {
        setSent(false);
        setShowForm(false);
      }, 4000);
    } catch {
      setSendError(
        "Something went wrong sending your message. Please try again, or email us directly at syncnowise@gmail.com.",
      );
    } finally {
      setSending(false);
    }
  };

  const field =
    "w-full px-3.5 py-2.5 rounded-lg border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all";

  return (
    <section id="contact" className="section-y bg-white relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(900px 480px at 50% 0%, rgba(37,99,235,0.08), transparent 65%), radial-gradient(700px 460px at 90% 100%, rgba(124,58,237,0.08), transparent 65%)",
          }}
        />
      </div>

      <div className="container-x relative">
        <div className="reveal max-w-2xl mx-auto text-center">
          <span className="section-kicker justify-center">
            <span className="section-kicker-dot" />
            Let's Talk
          </span>
          <h2 className="mt-5 font-display text-3xl md:text-5xl font-bold tracking-tight text-navy leading-tight">
            Have a Project in Mind?
          </h2>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Whether you're starting something new, improving an existing product, or solving a
            technical challenge, we'd like to understand what you're building.
          </p>
          <p className="mt-3 text-muted leading-relaxed">
            Tell us what you're working on, what you need, and where you're stuck. We'll review your
            requirements and discuss the best way forward.
          </p>
        </div>

        {!showForm ? (
          <div className="fade-pop-in mt-10 flex flex-col items-center gap-5">
            <button
              type="button"
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-white font-semibold text-sm shadow-lg transition-transform hover:scale-[1.03]"
              style={{
                backgroundImage: "linear-gradient(90deg,#1E3A8A,#7C3AED)",
                boxShadow: "0 16px 36px -14px rgba(124,58,237,0.55)",
              }}
            >
              Start a Project
              <I.arrow width="16" height="16" />
            </button>
            <div className="text-sm text-muted">
              Prefer to talk first?{" "}
              <a
                href="mailto:syncnowise@gmail.com?subject=Let%27s%20schedule%20a%20conversation"
                className="font-semibold text-primary hover:underline"
              >
                Schedule a Conversation →
              </a>
            </div>
          </div>
        ) : (
          <form
            onSubmit={submit}
            className="fade-pop-in mt-10 max-w-2xl mx-auto bg-[color:var(--color-surface)] rounded-2xl border border-border p-6 md:p-8 space-y-4 text-left"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name" error={errors.name}>
                <input
                  className={`${field} ${errors.name ? "border-red-400" : "border-border"}`}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Jane Cooper"
                />
              </Field>
              <Field label="Work Email" error={errors.email}>
                <input
                  type="email"
                  className={`${field} ${errors.email ? "border-red-400" : "border-border"}`}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="jane@company.com"
                />
              </Field>
            </div>

            <Field label="Company (optional)">
              <input
                className={`${field} border-border`}
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                placeholder="Company name"
              />
            </Field>

            <Field label="What are you looking to build?" error={errors.building}>
              <input
                className={`${field} ${errors.building ? "border-red-400" : "border-border"}`}
                value={form.building}
                onChange={(e) => setForm({ ...form, building: e.target.value })}
                placeholder="e.g. a customer portal, a mobile app, an internal tool…"
              />
            </Field>

            <Field label="What problem are you trying to solve? (optional)">
              <textarea
                rows={3}
                className={`${field} border-border resize-none`}
                value={form.problem}
                onChange={(e) => setForm({ ...form, problem: e.target.value })}
                placeholder="Tell us what's not working today, or what's holding you back…"
              />
            </Field>

            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Estimated budget (optional)">
                <select
                  className={`${field} border-border`}
                  value={form.budget}
                  onChange={(e) => setForm({ ...form, budget: e.target.value })}
                >
                  <option value="">Select a range</option>
                  {BUDGET_OPTIONS.map((b) => (
                    <option key={b}>{b}</option>
                  ))}
                </select>
              </Field>
              <Field label="When would you like to start? (optional)">
                <select
                  className={`${field} border-border`}
                  value={form.timeline}
                  onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                >
                  <option value="">Select a timeline</option>
                  {TIMELINE_OPTIONS.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </Field>
            </div>

            <Field label="Additional details (optional)">
              <textarea
                rows={3}
                className={`${field} border-border resize-none`}
                value={form.details}
                onChange={(e) => setForm({ ...form, details: e.target.value })}
                placeholder="Anything else that would help us understand your project…"
              />
            </Field>

            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <button
                type="submit"
                disabled={sending}
                className="btn-primary flex-1 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? "Sending…" : "Start a Project"}{" "}
                {!sending && <I.arrow width="16" height="16" />}
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                disabled={sending}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-[#1F2937] bg-white border border-border hover:border-primary/40 transition-colors disabled:opacity-60"
              >
                Cancel
              </button>
            </div>
            {sent && (
              <div className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg px-3 py-2">
                Thanks! We'll review your requirements and get back to you shortly.
              </div>
            )}
            {sendError && (
              <div className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                {sendError}
              </div>
            )}
          </form>
        )}

        <div className="reveal mt-14 flex flex-wrap justify-center gap-x-10 gap-y-2 text-sm text-muted">
          <span>syncnowise@gmail.com</span>
          <span className="hidden sm:inline text-border">·</span>
          <span>+91 7874378168 / 7069835429</span>
          <span className="hidden sm:inline text-border">·</span>
          <span>Ahmedabad, Gujarat, India</span>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-foreground">{label}</span>
      <div className="mt-1.5">{children}</div>
      {error && <span className="mt-1 block text-xs text-red-500">{error}</span>}
    </label>
  );
}
