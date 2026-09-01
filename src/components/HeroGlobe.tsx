import DottedGlobe from "@/components/DottedGlobe";

/**
 * HeroGlobe — clean hero centerpiece: rotating dotted globe, glowing "S" core with
 * a SYNCING · LIVE label, and a single stat card anchored at the bottom-right.
 * One subtle animation only (the core glow pulse) — no orbiting badges.
 */
export default function HeroGlobe({ className = "", bare = false }: { className?: string; bare?: boolean }) {
  if (bare) {
    return (
      <div className={`relative ${className}`}>
        <DottedGlobe className="absolute inset-0 w-full h-full" />
      </div>
    );
  }
  return (
    <div className={`relative w-full aspect-square p-6 sm:p-8 ${className}`}>

      {/* soft ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[78%] h-[78%] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.22), rgba(37,99,235,0.12) 55%, transparent 72%)" }}
      />

      {/* shadow beneath the sphere */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 bottom-[12%] -translate-x-1/2 w-[50%] h-[6%] rounded-[50%] blur-2xl"
        style={{ background: "radial-gradient(closest-side, rgba(15,23,42,0.3), transparent 75%)" }}
      />

      {/* the globe */}
      <DottedGlobe className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[78%] h-[78%]" />

      {/* center core */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="relative grid place-items-center">
          <span
            aria-hidden
            className="absolute w-24 h-24 rounded-full blur-2xl core-pulse"
            style={{ background: "linear-gradient(135deg,#2563EB,#7C3AED)" }}
          />
          <span
            aria-hidden
            className="absolute w-16 h-16 rounded-full border-2 core-pulse"
            style={{ borderColor: "rgba(124,58,237,0.45)" }}
          />
          <span
            className="relative w-16 h-16 rounded-full grid place-items-center text-white font-display font-black text-2xl border-2 border-white/70"
            style={{
              backgroundImage: "linear-gradient(135deg,#1E3A8A,#7C3AED)",
              boxShadow: "0 24px 48px -14px rgba(30,58,138,0.55)",
            }}
          >
            S
          </span>
          <span className="absolute -bottom-8 flex items-center gap-1.5 whitespace-nowrap text-[10px] uppercase tracking-[0.24em] font-bold text-[#1E3A8A]">
            <span className="relative flex w-1.5 h-1.5">
              <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
              <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </span>
            Syncing · Live
          </span>
        </div>
      </div>

      {/* single glass stat card, bottom-right */}
      <div
        className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 rounded-[20px] border border-white/60 bg-white/70 backdrop-blur-xl px-5 py-4"
        style={{ boxShadow: "0 28px 60px -30px rgba(30,58,138,0.45)" }}
      >
        <div className="flex items-center gap-5">
          <div>
            <div className="font-display font-black text-[17px] text-[#0F172A]">99.99%</div>
            <div className="text-[9px] uppercase tracking-widest text-subtle font-semibold">Uptime</div>
          </div>
          <span className="w-px h-8 bg-border" />
          <div>
            <div className="font-display font-black text-[17px] text-[#0F172A]">142</div>
            <div className="text-[9px] uppercase tracking-widest text-subtle font-semibold">Regions</div>
          </div>
        </div>
      </div>
    </div>
  );
}

