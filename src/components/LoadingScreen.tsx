import { useEffect, useState } from "react";
import logo from "@/assets/syncnowise-logo.png";

export default function LoadingScreen() {
  const [mounted, setMounted] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const leaveTimer = setTimeout(() => setLeaving(true), 1100);
    // Unmount only once the 500ms opacity transition (duration-500 below) has
    // actually finished, instead of cutting it off 50ms early.
    const removeTimer = setTimeout(() => setMounted(false), 1600);
    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-white transition-opacity duration-500 ${
        leaving ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(600px 400px at 50% 45%, rgba(37,99,235,0.10), transparent 65%), radial-gradient(500px 380px at 60% 60%, rgba(124,58,237,0.08), transparent 65%)",
        }}
      />

      <div className="relative flex flex-col items-center">
        <span className="splash-ring absolute w-24 h-24 rounded-full" style={{ backgroundColor: "rgba(37,99,235,0.12)" }} />
        <img
          src={logo}
          alt="Syncnowise"
          width={1920}
          height={385}
          className="splash-logo-in relative h-11 md:h-12 w-auto object-contain"
        />
        <div className="relative mt-6 w-28 h-[3px] rounded-full bg-border overflow-hidden">
          <span
            className="splash-bar block h-full rounded-full"
            style={{ backgroundImage: "linear-gradient(90deg,#1E3A8A,#7C3AED)" }}
          />
        </div>
      </div>
    </div>
  );
}
