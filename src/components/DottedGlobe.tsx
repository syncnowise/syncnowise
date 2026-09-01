import { useEffect, useRef } from "react";

/**
 * DottedGlobe — canvas particle globe.
 * Continents are traced with glowing dots, overlaid with a faint constellation
 * mesh and pulsing great-circle data arcs. Pure 2D canvas: no textures, no WebGL,
 * no model loading. Pauses when scrolled out of view.
 */

// Rough continent outlines in [lon, lat] — intentionally abstract, used only as a landmask.
const LAND: [number, number][][] = [
  // North America
  [[-168, 65], [-140, 70], [-120, 72], [-95, 74], [-72, 68], [-58, 52], [-66, 45], [-75, 35], [-81, 25], [-97, 26], [-105, 22], [-115, 30], [-125, 40], [-130, 52], [-152, 58], [-168, 65]],
  // Central America
  [[-97, 18], [-88, 16], [-83, 9], [-77, 8], [-84, 14], [-92, 16], [-97, 18]],
  // South America
  [[-81, 8], [-70, 12], [-60, 10], [-50, 0], [-35, -6], [-38, -20], [-48, -28], [-58, -38], [-65, -50], [-72, -54], [-74, -40], [-78, -20], [-81, -5], [-81, 8]],
  // Europe
  [[-10, 44], [-2, 51], [4, 58], [12, 62], [22, 70], [32, 68], [40, 60], [40, 46], [28, 40], [16, 40], [6, 44], [-10, 44]],
  // Africa
  [[-17, 21], [-6, 35], [10, 37], [25, 32], [33, 30], [43, 12], [51, 12], [42, -2], [40, -16], [35, -25], [25, -34], [18, -34], [12, -18], [9, -1], [3, 6], [-8, 5], [-16, 12], [-17, 21]],
  // Asia
  [[40, 46], [50, 46], [60, 55], [75, 60], [90, 72], [110, 74], [130, 70], [145, 60], [142, 48], [130, 42], [122, 32], [118, 22], [105, 12], [100, 6], [95, 16], [88, 22], [78, 8], [72, 20], [62, 25], [50, 30], [44, 38], [40, 46]],
  // Australia
  [[114, -22], [123, -17], [133, -12], [143, -12], [151, -25], [147, -38], [136, -35], [126, -32], [115, -34], [114, -22]],
  // New Zealand
  [[166, -45], [172, -41], [176, -38], [174, -45], [168, -47], [166, -45]],
  // Greenland
  [[-45, 82], [-25, 78], [-22, 70], [-40, 60], [-52, 68], [-55, 78], [-45, 82]],
  // Japan / islands
  [[131, 32], [138, 36], [142, 42], [144, 44], [140, 36], [134, 33], [131, 32]],
  // Indonesia
  [[96, 4], [110, 0], [122, -3], [134, -3], [128, -8], [112, -8], [100, -2], [96, 4]],
  // Madagascar
  [[44, -13], [50, -16], [48, -24], [44, -20], [44, -13]],
  // UK / Ireland
  [[-10, 52], [-4, 58], [0, 54], [-5, 50], [-10, 52]],
];

// Brighter region markers (lon, lat)
const MARKERS: [number, number][] = [
  [-74, 40.7], [-122, 37.8], [-0.1, 51.5], [55.3, 25.2], [72.8, 19.1], [103.8, 1.35], [139.7, 35.7], [151.2, -33.9], [-46.6, -23.6],
];

// Data arcs between distant markers
const ARC_PAIRS: [number, number][] = [[0, 2], [4, 6], [1, 5], [3, 8]];

function pointInPoly(lon: number, lat: number, poly: [number, number][]) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i]!;
    const [xj, yj] = poly[j]!;
    if ((yi > lat) !== (yj > lat) && lon < ((xj - xi) * (lat - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}

const D2R = Math.PI / 180;

type P3 = { x: number; y: number; z: number };

function toXYZ(lonDeg: number, latDeg: number, r = 1): P3 {
  const lon = lonDeg * D2R;
  const lat = latDeg * D2R;
  return { x: r * Math.cos(lat) * Math.sin(lon), y: r * Math.sin(lat), z: r * Math.cos(lat) * Math.cos(lon) };
}

function buildLandDots() {
  const dots: { lon: number; lat: number }[] = [];
  for (let lat = -80; lat <= 84; lat += 1.35) {
    const step = 1.35 / Math.max(0.22, Math.cos(lat * D2R));
    for (let lon = -180; lon <= 180; lon += step) {
      for (const poly of LAND) {
        if (pointInPoly(lon, lat, poly)) {
          dots.push({ lon, lat });
          break;
        }
      }
    }
  }
  return dots;
}

// Deterministic sparse constellation nodes (fibonacci sphere)
function buildMesh(count: number) {
  const nodes: { lon: number; lat: number }[] = [];
  const ga = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const lat = Math.asin(y) / D2R;
    const lon = ((i * ga) / D2R) % 360 - 180;
    nodes.push({ lon, lat });
  }
  const links: [number, number][] = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const a = toXYZ(nodes[i]!.lon, nodes[i]!.lat);
      const b = toXYZ(nodes[j]!.lon, nodes[j]!.lat);
      const dot = a.x * b.x + a.y * b.y + a.z * b.z;
      if (Math.acos(Math.min(1, dot)) < 0.46) links.push([i, j]);
    }
  }
  return { nodes, links };
}

function slerp(a: P3, b: P3, t: number): P3 {
  const dot = Math.min(1, Math.max(-1, a.x * b.x + a.y * b.y + a.z * b.z));
  const om = Math.acos(dot);
  if (om < 1e-6) return a;
  const s = Math.sin(om);
  const w1 = Math.sin((1 - t) * om) / s;
  const w2 = Math.sin(t * om) / s;
  return { x: a.x * w1 + b.x * w2, y: a.y * w1 + b.y * w2, z: a.z * w1 + b.z * w2 };
}

export default function DottedGlobe({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const landDots = buildLandDots();
    const { nodes, links } = buildMesh(58);
    const markerXYZ = MARKERS.map(([lon, lat]) => toXYZ(lon, lat));

    let w = 0, h = 0, dpr = 1, R = 0, cx = 0, cy = 0, scale = 1;
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(2, window.devicePixelRatio || 1);
      w = Math.max(1, rect.width);
      h = Math.max(1, rect.height);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      R = Math.min(w, h) * 0.46;
      scale = Math.max(0.75, Math.min(2.1, R / 300));
      cx = w / 2;
      cy = h / 2;
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let visible = true;
    const io = new IntersectionObserver(([e]) => { visible = !!e?.isIntersecting; }, { threshold: 0 });
    io.observe(canvas);

    const TILT = 20 * D2R;
    const cosT = Math.cos(TILT), sinT = Math.sin(TILT);

    const project = (p: P3, theta: number) => {
      const s = Math.sin(theta), c = Math.cos(theta);
      const x = p.x * c + p.z * s;
      const z0 = -p.x * s + p.z * c;
      const y = p.y * cosT - z0 * sinT;
      const z = p.y * sinT + z0 * cosT;
      return { sx: cx + x * R, sy: cy - y * R, z };
    };

    let theta = 0;
    let raf = 0;
    let last = performance.now();

    const draw = (now: number) => {
      raf = requestAnimationFrame(draw);
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (!visible) return;
      if (!reduced) theta += dt * 0.085; // slow rotation

      ctx.clearRect(0, 0, w, h);

      // Sphere body tint + rim so the particle cloud reads as a solid globe
      const body = ctx.createRadialGradient(cx - R * 0.3, cy - R * 0.3, R * 0.1, cx, cy, R);
      body.addColorStop(0, "rgba(99,102,241,0.10)");
      body.addColorStop(0.6, "rgba(37,99,235,0.05)");
      body.addColorStop(1, "rgba(30,58,138,0.02)");
      ctx.fillStyle = body;
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "rgba(99,102,241,0.18)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Constellation mesh
      ctx.lineWidth = Math.max(0.6, 0.5 * scale);
      for (const [i, j] of links) {
        const a = project(toXYZ(nodes[i]!.lon, nodes[i]!.lat, 1.02), theta);
        const b = project(toXYZ(nodes[j]!.lon, nodes[j]!.lat, 1.02), theta);
        if (a.z < 0 || b.z < 0) continue;
        const alpha = 0.05 + Math.min(a.z, b.z) * 0.16;
        ctx.strokeStyle = `rgba(99,102,241,${alpha})`;
        ctx.beginPath();
        ctx.moveTo(a.sx, a.sy);
        ctx.lineTo(b.sx, b.sy);
        ctx.stroke();
      }
      for (const n of nodes) {
        const p = project(toXYZ(n.lon, n.lat, 1.02), theta);
        if (p.z < 0) continue;
        ctx.fillStyle = `rgba(124,58,237,${0.12 + p.z * 0.3})`;
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, 1.1 * scale, 0, Math.PI * 2);
        ctx.fill();
      }

      // Continent dots
      for (const d of landDots) {
        const p = project(toXYZ(d.lon, d.lat), theta);
        if (p.z < 0.02) continue;
        const alpha = 0.22 + p.z * 0.66;
        const r = (0.6 + p.z * 0.7) * scale;
        ctx.fillStyle = `rgba(37,99,235,${alpha})`;
        ctx.fillRect(p.sx - r, p.sy - r, r * 2, r * 2);
      }

      // Data arcs
      const t = now / 1000;
      ctx.lineCap = "round";
      ARC_PAIRS.forEach(([ai, bi], k) => {
        const A = markerXYZ[ai]!, B = markerXYZ[bi]!;
        const steps = 46;
        const pts: { sx: number; sy: number; z: number }[] = [];
        for (let s = 0; s <= steps; s++) {
          const u = s / steps;
          const m = slerp(A, B, u);
          const lift = 1 + 0.16 * Math.sin(Math.PI * u);
          pts.push(project({ x: m.x * lift, y: m.y * lift, z: m.z * lift }, theta));
        }
        const pulse = 0.45 + 0.55 * (0.5 + 0.5 * Math.sin(t * 1.1 + k * 1.4));
        ctx.lineWidth = 1.2 * scale;
        for (let s = 1; s < pts.length; s++) {
          const p0 = pts[s - 1]!, p1 = pts[s]!;
          if (p0.z < 0 || p1.z < 0) continue;
          const grad = 0.18 + 0.5 * Math.min(1, (p0.z + p1.z));
          ctx.strokeStyle = `rgba(124,58,237,${grad * pulse * 0.6})`;
          ctx.beginPath();
          ctx.moveTo(p0.sx, p0.sy);
          ctx.lineTo(p1.sx, p1.sy);
          ctx.stroke();
        }
        // travelling packet
        const u = ((t * 0.22 + k * 0.27) % 1);
        const idx = Math.floor(u * steps);
        const pk = pts[idx];
        if (pk && pk.z > 0) {
          ctx.fillStyle = "rgba(255,255,255,0.95)";
          ctx.shadowBlur = 12;
          ctx.shadowColor = "rgba(124,58,237,0.95)";
          ctx.beginPath();
          ctx.arc(pk.sx, pk.sy, 2.2 * scale, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      // Bright region markers
      markerXYZ.forEach((m, i) => {
        const p = project(m, theta);
        if (p.z < 0) return;
        const pulse = 0.5 + 0.5 * Math.sin(t * 1.6 + i);
        ctx.fillStyle = `rgba(124,58,237,${0.25 + p.z * 0.55})`;
        ctx.shadowBlur = 14;
        ctx.shadowColor = "rgba(96,165,250,0.9)";
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, (2.4 + p.z) * scale, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.strokeStyle = `rgba(37,99,235,${(1 - pulse) * 0.35 * p.z})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, (4 + pulse * 12) * scale, 0, Math.PI * 2);
        ctx.stroke();
      });
    };

    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  return (
    <div aria-hidden className={`pointer-events-none ${className}`}>
      {/* soft atmosphere glow behind the particle sphere */}
      <div
        className="absolute inset-[6%] rounded-full blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(124,58,237,0.16), rgba(37,99,235,0.10) 55%, transparent 78%)" }}
      />
      <canvas ref={canvasRef} className="relative w-full h-full" />
    </div>
  );
}
