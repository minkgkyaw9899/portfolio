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
  baseOpacity: number;
}

const GRID_GAP = 35;
const DOT_RADIUS = 1.5;
const MOUSE_RADIUS = 140;
const MOUSE_STRENGTH = 0.22;
const RETURN_SPEED = 0.05;
const WAVE_SPEEDS = [0.0008, 0.0012, 0.0006];
const CONNECTION_DISTANCE = 100;

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
          const baseOpacity = 0.08 + Math.sin(c * 0.3 + r * 0.2) * 0.04;
          dots.push({
            x: c * GRID_GAP,
            y: r * GRID_GAP,
            baseX: c * GRID_GAP,
            baseY: r * GRID_GAP,
            vx: 0,
            vy: 0,
            opacity: baseOpacity,
            targetOpacity: baseOpacity,
            baseOpacity: baseOpacity,
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

      // Multiple wave patterns for rich spectrum
      for (const d of dots) {
        // Layered wave spectrum with different frequencies
        const wave1 = Math.sin(d.baseX * 0.008 + d.baseY * 0.006 + t * WAVE_SPEEDS[0]) * 0.05;
        const wave2 = Math.sin(d.baseX * 0.012 - d.baseY * 0.008 + t * WAVE_SPEEDS[1]) * 0.04;
        const wave3 = Math.cos(d.baseX * 0.01 + d.baseY * 0.01 + t * WAVE_SPEEDS[2]) * 0.03;
        
        d.targetOpacity = d.baseOpacity + wave1 + wave2 + wave3;

        // Mouse proximity → push dots and brighten
        const dx = mx - d.x;
        const dy = my - d.y;
        const dist = Math.hypot(dx, dy);

        if (dist < MOUSE_RADIUS) {
          const force = 1 - dist / MOUSE_RADIUS;
          d.vx -= dx * force * MOUSE_STRENGTH;
          d.vy -= dy * force * MOUSE_STRENGTH;
          d.targetOpacity = Math.min(0.6, d.targetOpacity + force * 0.5);
        }

        // Spring return with damping
        d.vx += (d.baseX - d.x) * RETURN_SPEED;
        d.vy += (d.baseY - d.y) * RETURN_SPEED;
        d.vx *= 0.87;
        d.vy *= 0.87;
        d.x += d.vx;
        d.y += d.vy;
        d.opacity += (d.targetOpacity - d.opacity) * 0.1;

        ctx.beginPath();
        ctx.arc(d.x, d.y, DOT_RADIUS, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${dotColor},${Math.max(0, d.opacity)})`;
        ctx.fill();
      }

      // Connecting lines - enhanced with wave effects
      for (let i = 0; i < dots.length; i++) {
        const d1 = dots[i];
        for (let j = i + 1; j < dots.length; j++) {
          const d2 = dots[j];
          const dx = d2.x - d1.x;
          const dy = d2.y - d1.y;
          const dist = Math.hypot(dx, dy);
          
          if (dist < CONNECTION_DISTANCE) {
            const alpha = (1 - dist / CONNECTION_DISTANCE) * (0.08 + (d1.opacity + d2.opacity) / 4);
            ctx.beginPath();
            ctx.moveTo(d1.x, d1.y);
            ctx.lineTo(d2.x, d2.y);
            ctx.strokeStyle = `rgba(${dotColor},${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Connecting lines near cursor for interaction
      if (mx > 0 && my > 0) {
        for (const d of dots) {
          const ddx = mx - d.x;
          const ddy = my - d.y;
          const dist2 = Math.hypot(ddx, ddy);
          if (dist2 < MOUSE_RADIUS * 0.8) {
            const alpha = (1 - dist2 / (MOUSE_RADIUS * 0.8)) * 0.25;
            ctx.beginPath();
            ctx.moveTo(d.x, d.y);
            ctx.lineTo(mx, my);
            ctx.strokeStyle = `rgba(${dotColor},${alpha})`;
            ctx.lineWidth = 0.75;
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
