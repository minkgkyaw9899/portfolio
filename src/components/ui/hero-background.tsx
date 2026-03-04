"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

interface Dot {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  opacity: number;
  targetOpacity: number;
}

const GRID_GAP = 40;
const DOT_RADIUS = 1.2;
const MOUSE_RADIUS = 120;
const MOUSE_STRENGTH = 0.18;
const RETURN_SPEED = 0.06;
const WAVE_SPEED = 0.0015;

export const HeroBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const frameRef = useRef(0);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dots: Dot[] = [];
    let raf: number;

    const buildGrid = () => {
      dots = [];
      const cols = Math.ceil(canvas.width / GRID_GAP) + 1;
      const rows = Math.ceil(canvas.height / GRID_GAP) + 1;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          dots.push({
            x: c * GRID_GAP,
            y: r * GRID_GAP,
            baseX: c * GRID_GAP,
            baseY: r * GRID_GAP,
            vx: 0,
            vy: 0,
            opacity: 0.12,
            targetOpacity: 0.12,
          });
        }
      }
    };

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
      buildGrid();
    };

    const draw = (t: number) => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isDark = resolvedTheme !== "light";
      const dotColor = isDark ? "249,115,22" : "234,88,12";

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (const d of dots) {
        // Sine-wave opacity ripple
        const wave =
          Math.sin(d.baseX * 0.015 + d.baseY * 0.01 + t * WAVE_SPEED) * 0.07 +
          0.1;
        d.targetOpacity = wave;

        // Mouse proximity → push dots and brighten
        const dx = mx - d.x;
        const dy = my - d.y;
        const dist = Math.hypot(dx, dy);

        if (dist < MOUSE_RADIUS) {
          const force = 1 - dist / MOUSE_RADIUS;
          d.vx -= dx * force * MOUSE_STRENGTH;
          d.vy -= dy * force * MOUSE_STRENGTH;
          d.targetOpacity = 0.5 + force * 0.4;
        }

        // Spring return
        d.vx += (d.baseX - d.x) * RETURN_SPEED;
        d.vy += (d.baseY - d.y) * RETURN_SPEED;
        d.vx *= 0.85;
        d.vy *= 0.85;
        d.x += d.vx;
        d.y += d.vy;
        d.opacity += (d.targetOpacity - d.opacity) * 0.08;

        ctx.beginPath();
        ctx.arc(d.x, d.y, DOT_RADIUS, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${dotColor},${d.opacity})`;
        ctx.fill();
      }

      // Connecting lines near cursor
      if (mx > 0 && my > 0) {
        for (const d of dots) {
          const ddx = mx - d.x;
          const ddy = my - d.y;
          const dist2 = Math.hypot(ddx, ddy);
          if (dist2 < MOUSE_RADIUS * 0.7) {
            const alpha = (1 - dist2 / (MOUSE_RADIUS * 0.7)) * 0.18;
            ctx.beginPath();
            ctx.moveTo(d.x, d.y);
            ctx.lineTo(mx, my);
            ctx.strokeStyle = `rgba(${dotColor},${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      frameRef.current = t;
      raf = requestAnimationFrame(draw);
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    resize();
    raf = requestAnimationFrame(draw);
    globalThis.window.addEventListener("resize", resize);
    globalThis.window.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(raf);
      globalThis.window.removeEventListener("resize", resize);
      globalThis.window.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute top-0 z-0 h-full w-screen left-[10%]"
    />
  );
};
