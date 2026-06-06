"use client";

import { useEffect, useRef } from "react";

type Node3D = {
  x: number; y: number; z: number;
  r: number;
  color: string;
  phase: number;
  dx: number; dy: number; dz: number;
  ds: number;
};

const SIZE         = 200;
const CENTER       = SIZE / 2;
const MAX_Z        = 65;
const LINK_DIST_3D = 80;

// 3D coordinates relative to cluster center.
// Inner ring ~45–52 units out, outer ring ~54–64 — all within LINK_DIST_3D of center.
const NODES: Node3D[] = [
  // hub
  { x:   0, y:   0, z:   0, r: 4.5, color: "#EC4899", phase: 0.0, dx: 1.5, dy: 1.5, dz: 1.5, ds: 0.50 },
  // inner ring
  { x:  38, y: -15, z:  20, r: 3.0, color: "#F9A8D4", phase: 0.9, dx: 2.5, dy: 2.0, dz: 2.0, ds: 0.62 },
  { x:  10, y:  20, z: -42, r: 2.8, color: "#A78BFA", phase: 1.8, dx: 2.0, dy: 2.5, dz: 2.0, ds: 0.70 },
  { x: -42, y:   8, z: -18, r: 3.2, color: "#EC4899", phase: 2.7, dx: 2.5, dy: 2.0, dz: 2.5, ds: 0.58 },
  { x: -20, y: -15, z:  38, r: 2.5, color: "#C4B5FD", phase: 3.6, dx: 2.0, dy: 2.5, dz: 2.0, ds: 0.75 },
  { x:  25, y:  35, z:  30, r: 2.8, color: "#A78BFA", phase: 4.5, dx: 2.5, dy: 2.0, dz: 2.5, ds: 0.55 },
  // outer ring
  { x: -35, y:  30, z:  35, r: 2.0, color: "#F9A8D4", phase: 5.4, dx: 3.0, dy: 2.5, dz: 3.0, ds: 0.80 },
  { x:  55, y:  20, z: -15, r: 2.2, color: "#EC4899", phase: 6.3, dx: 2.5, dy: 3.0, dz: 2.5, ds: 0.65 },
  { x:  15, y: -42, z: -30, r: 1.8, color: "#C4B5FD", phase: 7.2, dx: 3.0, dy: 2.0, dz: 3.0, ds: 0.72 },
  { x: -50, y: -20, z:  10, r: 2.0, color: "#A78BFA", phase: 8.1, dx: 2.5, dy: 3.0, dz: 2.5, ds: 0.68 },
  { x:  30, y: -35, z:  42, r: 1.5, color: "#F9A8D4", phase: 9.0, dx: 3.0, dy: 2.5, dz: 3.0, ds: 0.85 },
];

function hexRgb(hex: string): [number, number, number] {
  return [parseInt(hex.slice(1,3),16), parseInt(hex.slice(3,5),16), parseInt(hex.slice(5,7),16)];
}

function rotate3D(x: number, y: number, z: number, ay: number, ax: number) {
  // Y-axis rotation
  const x1 =  x * Math.cos(ay) + z * Math.sin(ay);
  const y1 =  y;
  const z1 = -x * Math.sin(ay) + z * Math.cos(ay);
  // X-axis rotation
  const x2 =  x1;
  const y2 =  y1 * Math.cos(ax) - z1 * Math.sin(ax);
  const z2 =  y1 * Math.sin(ax) + z1 * Math.cos(ax);
  return { x: x2, y: y2, z: z2 };
}

export default function NodeLoader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width  = SIZE * dpr;
    canvas.height = SIZE * dpr;
    canvas.style.width  = `${SIZE}px`;
    canvas.style.height = `${SIZE}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    let raf = 0;
    const start = performance.now();
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const draw = () => {
      const t = (performance.now() - start) / 1000;
      ctx.clearRect(0, 0, SIZE, SIZE);

      // Atmospheric background glow
      const atmo = ctx.createRadialGradient(CENTER, CENTER, 0, CENTER, CENTER, CENTER);
      atmo.addColorStop(0,   "rgba(109,40,217,0.10)");
      atmo.addColorStop(0.5, "rgba(60,10,90,0.04)");
      atmo.addColorStop(1,   "rgba(0,0,0,0)");
      ctx.fillStyle = atmo;
      ctx.fillRect(0, 0, SIZE, SIZE);

      const angleY = reduced ? 0 : t * 0.22;
      const angleX = reduced ? 0 : Math.sin(t * 0.13) * 0.18;

      // Compute drifted + rotated screen positions
      type Proj = { sx: number; sy: number; depth: number; n: Node3D; origIdx: number };
      const proj: Proj[] = NODES.map((n, origIdx) => {
        const wx = n.x + n.dx * Math.sin(t * n.ds + n.phase);
        const wy = n.y + n.dy * Math.cos(t * n.ds * 0.75 + n.phase + 1);
        const wz = n.z + n.dz * Math.sin(t * n.ds * 0.60 + n.phase + 2);
        const r  = rotate3D(wx, wy, wz, angleY, angleX);
        return { sx: CENTER + r.x, sy: CENTER + r.y, depth: r.z / MAX_Z, n, origIdx };
      });

      // Connector lines (drawn behind all nodes)
      for (let i = 0; i < NODES.length; i++) {
        for (let j = i + 1; j < NODES.length; j++) {
          const na = NODES[i], nb = NODES[j];
          const dist3d = Math.hypot(na.x - nb.x, na.y - nb.y, na.z - nb.z);
          if (dist3d >= LINK_DIST_3D) continue;

          const pi = proj[i], pj = proj[j];
          const proximity  = 1 - dist3d / LINK_DIST_3D;
          const avgDepth   = (pi.depth + pj.depth) / 2;
          const edgePulse  = 0.5 + 0.5 * Math.sin(t * 1.5 + (na.phase + nb.phase) / 2);
          const depthFade  = 0.45 + 0.55 * (avgDepth * 0.5 + 0.5);
          const opacity    = proximity * 0.72 * depthFade * (0.38 + 0.62 * edgePulse);
          if (opacity < 0.025) continue;

          // Gradient line blending the two endpoint node colors
          const lgrad = ctx.createLinearGradient(pi.sx, pi.sy, pj.sx, pj.sy);
          const [ri, gi, bi] = hexRgb(na.color);
          const [rj, gj, bj] = hexRgb(nb.color);
          lgrad.addColorStop(0, `rgba(${ri},${gi},${bi},${opacity})`);
          lgrad.addColorStop(1, `rgba(${rj},${gj},${bj},${opacity})`);
          ctx.beginPath();
          ctx.moveTo(pi.sx, pi.sy);
          ctx.lineTo(pj.sx, pj.sy);
          ctx.strokeStyle = lgrad;
          ctx.lineWidth = 0.55 + proximity * 0.7;
          ctx.stroke();

          // Traveling pulse dot along the edge
          const pulse = ((t * 0.55 + (na.phase + nb.phase) * 0.12) % 1 + 1) % 1;
          const pdx = pi.sx + (pj.sx - pi.sx) * pulse;
          const pdy = pi.sy + (pj.sy - pi.sy) * pulse;
          ctx.beginPath();
          ctx.arc(pdx, pdy, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,215,235,${Math.min(opacity * 1.8, 0.9)})`;
          ctx.fill();
        }
      }

      // Nodes — sorted back to front (painter's algorithm)
      const sorted = [...proj].sort((a, b) => a.depth - b.depth);

      for (const { sx, sy, depth, n } of sorted) {
        const breathe    = 0.5 + 0.5 * Math.sin(t * 2.1 + n.phase);
        // Brief bright twinkle flash (~every 2.5 s, sharp spike)
        const twinkle    = Math.pow(Math.max(0, Math.sin(t * 2.5 + n.phase * 1.7)), 10) * 0.7;
        const depthScale = 0.62 + 0.58 * (depth * 0.5 + 0.5);
        const radius     = n.r * depthScale * (1 + 0.38 * breathe + 0.2 * twinkle);
        const alphaBase  = 0.55 + 0.45 * (depth * 0.5 + 0.5);
        const [nr, ng, nb] = hexRgb(n.color);

        // Double-pass bloom glow (wide + tight)
        const glowPasses: [number, number][] = [
          [radius * 8,  0.15 + 0.10 * twinkle],
          [radius * 4,  0.28 + 0.15 * twinkle],
        ];
        for (const [glowR, glowA] of glowPasses) {
          const rA = glowR * (0.85 + 0.15 * breathe);
          const grd = ctx.createRadialGradient(sx, sy, 0, sx, sy, rA);
          grd.addColorStop(0, `rgba(${nr},${ng},${nb},${glowA * alphaBase})`);
          grd.addColorStop(1, `rgba(${nr},${ng},${nb},0)`);
          ctx.beginPath();
          ctx.arc(sx, sy, rA, 0, Math.PI * 2);
          ctx.fillStyle = grd;
          ctx.fill();
        }

        // Wide atmospheric bloom for the hub only
        if (n === NODES[0]) {
          const hub = ctx.createRadialGradient(sx, sy, 0, sx, sy, radius * 18);
          hub.addColorStop(0,   `rgba(236,72,153,${0.20 * breathe + 0.12 * twinkle})`);
          hub.addColorStop(0.4, `rgba(109,40,217,${0.08 * breathe})`);
          hub.addColorStop(1,   "rgba(0,0,0,0)");
          ctx.beginPath();
          ctx.arc(sx, sy, radius * 18, 0, Math.PI * 2);
          ctx.fillStyle = hub;
          ctx.fill();
        }

        // Core
        ctx.beginPath();
        ctx.arc(sx, sy, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${nr},${ng},${nb},${alphaBase})`;
        ctx.fill();

        // Specular highlight
        ctx.beginPath();
        ctx.arc(sx, sy, radius * 0.38, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${(0.40 + 0.30 * breathe + 0.25 * twinkle) * alphaBase})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" />;
}
