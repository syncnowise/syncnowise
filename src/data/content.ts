/* ---------- Shared site content ----------
 * Single source of truth for data used by both the homepage and the
 * dedicated service/case-study/about pages, so it isn't duplicated per route.
 * All copy here is the existing, previously-approved homepage content —
 * nothing below is new marketing copy.
 */
import { Icon } from "@/components/icons";
import workRubber from "@/assets/work-rubber-form-builder.jpg";
import workBlanconite from "@/assets/work-blanconite-artistry-hub.jpg";
import workNebula from "@/assets/work-nebula-orthosys.jpg";
import workDataMinds from "@/assets/work-data-minds-canvas.jpg";
import workArtistry from "@/assets/work-artistry-coming-soon.jpg";
import nebulaLogo from "@/assets/nebula-logo.webp";
import echoPolymerLogo from "@/assets/logo.png";
import blanconiteLogo from "@/assets/blanconite.webp";
import goLogo from "@/assets/Go-Logo_LightBlue.svg";
import rustLogo from "@/assets/rust-programming-language-icon.svg";
import pythonLogo from "@/assets/Python.svg";
import pgLogo from "@/assets/postgresql-logo-svgrepo-com.svg";

export const NAV = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/case-studies" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Contact", href: "/contact" },
];

export const WHAT_WE_BUILD = [
  {
    icon: Icon.saas,
    title: "Custom Software Development",
    desc: "Turn your business idea or requirements into reliable, production-ready software designed around the way your business actually works.",
    tags: ["Business Software", "Custom Platforms"],
    href: "/services/custom-software-development",
  },
  {
    icon: Icon.bolt,
    title: "SaaS & MVP Development",
    desc: "From first concept to a working product, we help startups and businesses build, validate, and launch scalable software products.",
    tags: ["MVP Development", "SaaS Platforms", "Product Development"],
    href: "/services/saas-mvp-development",
  },
  {
    icon: Icon.server,
    title: "Backend & Systems Engineering",
    desc: "Build the reliable foundation behind your product with robust APIs, backend services, integrations, and high-performance systems.",
    tags: ["Rust", "Go", "Python", "APIs", "Microservices", "Distributed Systems"],
    href: "/services/backend-api-development",
  },
  {
    icon: Icon.code,
    title: "Automation & AI Solutions",
    desc: "Reduce repetitive work and improve operational efficiency with intelligent automation, data-processing tools, and AI-powered workflows.",
    tags: ["Business Automation", "AI Integration", "Data Processing", "API Integrations"],
    href: undefined as string | undefined,
  },
];

export const CAPABILITIES = [
  {
    icon: Icon.server,
    title: "Backend Engineering",
    desc: "Design and development of reliable APIs, backend services, business logic, and integrations.",
    tags: [
      { label: "Go", logo: goLogo, logoW: 255, logoH: 225 },
      { label: "Rust", logo: rustLogo, logoW: 123, logoH: 123 },
      { label: "Python", logo: pythonLogo, logoW: 128, logoH: 128 },
      { label: "REST APIs" },
      { label: "gRPC" },
    ],
  },
  {
    icon: Icon.bolt,
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
    icon: Icon.cloud,
    title: "Data & Infrastructure",
    desc: "Build and operate the foundations that keep applications reliable and ready to scale.",
    tags: [
      { label: "PostgreSQL", logo: pgLogo, logoW: 264, logoH: 264 },
      { label: "Redis" },
      { label: "Docker" },
      { label: "Kubernetes" },
      { label: "Cloud Infrastructure" },
    ],
  },
  {
    icon: Icon.web,
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

export const WORK_STEPS = [
  {
    n: "01",
    icon: Icon.chat,
    title: "Understand",
    desc: "We start by understanding your business, your users, your requirements, and the problem you're trying to solve.",
  },
  {
    n: "02",
    icon: Icon.strategy,
    title: "Plan",
    desc: "We define the scope, technical approach, priorities, timeline, and deliverables before development begins.",
  },
  {
    n: "03",
    icon: Icon.code,
    title: "Build",
    desc: "Our engineers turn the plan into working software through focused development, testing, and regular progress updates.",
  },
  {
    n: "04",
    icon: Icon.check,
    title: "Review",
    desc: "You see the progress throughout the project. We gather feedback, refine the product, and make sure it meets the agreed requirements.",
  },
  {
    n: "05",
    icon: Icon.bolt,
    title: "Launch",
    desc: "Once everything is ready, we help deploy your software and make sure the transition to production is smooth.",
  },
  {
    n: "06",
    icon: Icon.support,
    title: "Support",
    desc: "Our relationship doesn't have to end at launch. We can continue with maintenance, improvements, monitoring, and future development as your needs evolve.",
  },
];

export const PROJECTS = [
  {
    img: workRubber,
    title: "Echo Polymer Industries",
    desc: "Manufacturing website with product catalogue and enquiry forms.",
    tag: "Web",
    url: "https://echopolymers.com",
    slug: "echo-polymer-industries",
  },
  {
    img: workBlanconite,
    title: "Blanconite Artistry Hub",
    desc: "Premium Jesmonite materials brand store and artistry hub.",
    tag: "Web",
    url: "https://blanconite-artistry-hub.lovable.app",
    slug: "blanconite-artistry-hub",
  },
  {
    img: workNebula,
    title: "Nebula OrthoSys",
    desc: "Orthopaedic management platform with clinical workflows.",
    tag: "SaaS",
    url: "https://nebula-orthosys.lovable.app",
    slug: "nebula-orthosys",
  },
  {
    img: workDataMinds,
    title: "Data Minds",
    desc: "Digital solutions agency site with services and lead capture.",
    tag: "Web",
    url: "https://data-minds-canvas.lovable.app",
    slug: undefined as string | undefined,
  },
  {
    img: workArtistry,
    title: "Blanconite Launch",
    desc: "Coming-soon landing page with countdown and waitlist signup.",
    tag: "Web",
    url: "https://artistry-coming-soon.lovable.app",
    slug: undefined as string | undefined,
  },
];

export const CASE_STUDIES = [
  {
    slug: "echo-polymer-industries",
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
    slug: "nebula-orthosys",
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
    slug: "blanconite-artistry-hub",
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

export const CULTURE = [
  {
    icon: Icon.shield,
    title: "Small & Senior",
    desc: "A lean, senior team — not a large agency with layers of account managers between you and the work.",
  },
  {
    icon: Icon.code,
    title: "Engineers, Not Salespeople",
    desc: "The people who scope your project are the same people who build it.",
  },
  {
    icon: Icon.chat,
    title: "Direct Communication",
    desc: "You talk directly with the engineers working on your product — no relayed messages, no guesswork.",
  },
  {
    icon: Icon.check,
    title: "Fully In-House",
    desc: "Every engagement is handled start to finish by our own team — no outsourcing, no unknown subcontractors.",
  },
];

export const TESTIMONIALS = [
  {
    photo: echoPolymerLogo,
    photoW: 2133,
    photoH: 2098,
    contain: true,
    name: "Echo Polymer Industries",
    role: "Rubber Extrusion & Moulding Manufacturer, Rajkot",
    quote:
      "Our biggest problem was buyers not being able to see what we actually manufacture. Syncnowise built a real product-first website — extrusion profiles, moulded parts and material grades are now presented with clear specs, images and a simple enquiry form. Enquiries from outside Gujarat started coming in within weeks.",
  },
  {
    photo: nebulaLogo,
    photoW: 1920,
    photoH: 890,
    contain: true,
    name: "Nebula OrthoSys",
    role: "Orthopaedic ERP Platform",
    quote:
      "They made our daily work genuinely smooth. The ERP handles patients, implants inventory, billing and reports in one place, and the interface is so easy that our staff learned it in a single day — no long training, no confusion.",
  },
  {
    photo: blanconiteLogo,
    photoW: 640,
    photoH: 201,
    contain: true,
    name: "Blanconite",
    role: "Premium Jesmonite Casting Materials",
    quote:
      "In our craft market the real struggle is trust — customers can't judge finish and quality online, and cheap imitations are everywhere. Syncnowise designed a store that shows true material texture, batch details and artist work, so buyers know exactly what they're getting before ordering.",
  },
];
