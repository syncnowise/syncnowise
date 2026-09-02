import { useEffect, useState } from "react";
import { Icon } from "@/components/icons";
import projectApp from "@/assets/project-app.jpg";
import projectEdu from "@/assets/project-edu.jpg";
import projectFintech from "@/assets/project-fintech.jpg";
import projectFood from "@/assets/project-food.jpg";
import projectSaas from "@/assets/project-saas.jpg";
import projectWeb from "@/assets/project-web.jpg";

/**
 * Extracted verbatim from the homepage so both `/` and `/about` render the
 * exact same About content instead of duplicating it.
 */
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
          width={1200}
          height={800}
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

export default function AboutSection() {
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
                  <Icon.check width="13" height="13" />
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
