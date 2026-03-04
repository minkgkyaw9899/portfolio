"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor = () => {
  const [mounted, setMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Raw mouse coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the cursor ring
  // Adjusted stiffness and damping for a slightly fluid "magnetic" feel
  const springX = useSpring(mouseX, { stiffness: 400, damping: 28, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 400, damping: 28, mass: 0.5 });

  // Smooth springs for the inner dot
  const dotSpringX = useSpring(mouseX, {
    stiffness: 800,
    damping: 35,
    mass: 0.5,
  });
  const dotSpringY = useSpring(mouseY, {
    stiffness: 800,
    damping: 35,
    mass: 0.5,
  });

  useEffect(() => {
    setMounted(true);

    if (typeof globalThis.window === "undefined") return;

    // Disable entirely for touch devices
    if (globalThis.window.matchMedia("(hover: none)").matches) {
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Show cursor on first movement
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const checkHoverState = () => {
      // Find elements under cursor
      const el = document.elementFromPoint(mouseX.get(), mouseY.get());
      if (!el) return;

      // Check if element is clickable
      const isClickable =
        el.tagName.toLowerCase() === "a" ||
        el.tagName.toLowerCase() === "button" ||
        el.closest("a") ||
        el.closest("button") ||
        el.getAttribute("role") === "button" ||
        window.getComputedStyle(el).cursor === "pointer";

      setIsHovering(!!isClickable);
    };

    globalThis.window.addEventListener("mousemove", updateMousePosition);
    globalThis.window.addEventListener("mousemove", checkHoverState);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      globalThis.window.removeEventListener("mousemove", updateMousePosition);
      globalThis.window.removeEventListener("mousemove", checkHoverState);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  // Don't render anything on server or touch devices
  if (
    !mounted ||
    (typeof globalThis.window !== "undefined" &&
      globalThis.window.matchMedia("(hover: none)").matches)
  ) {
    return null;
  }

  return (
    <>
      {/* Lagging Ring */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden rounded-full border border-accent/70 md:block mix-blend-normal"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 1.5 : 1,
          width: 36,
          height: 36,
          backgroundColor: isHovering
            ? "rgba(249, 115, 22, 0.08)"
            : "transparent",
        }}
        transition={{
          width: { duration: 0.2 },
          height: { duration: 0.2 },
          backgroundColor: { duration: 0.2 },
          scale: { type: "spring", stiffness: 300, damping: 20 },
        }}
      />

      {/* Responsive Dot */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[110] hidden rounded-full bg-accent shadow-[0_0_8px_rgba(249,115,22,0.8)] md:block mix-blend-normal"
        style={{
          x: dotSpringX,
          y: dotSpringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 0 : 1,
          width: 6,
          height: 6,
        }}
        transition={{
          scale: { duration: 0.15 },
        }}
      />
    </>
  );
};
