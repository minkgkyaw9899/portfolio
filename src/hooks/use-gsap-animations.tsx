"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Global GSAP scroll-triggered animations applied to shared section elements.
 * - Section headings: slide up + fade in
 * - Glass cards: stagger reveal with slight tilt
 * - Timeline dots: scale pop on scroll
 */
export const useGSAPAnimations = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Section headings ───────────────────────────
      gsap.utils.toArray<HTMLElement>("[data-gsap='heading']").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      // ── Cards revealed with stagger ─────────────────
      gsap.utils.toArray<HTMLElement>("[data-gsap='card']").forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0, scale: 0.96 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            delay: (i % 4) * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      // ── Horizontal reveal (left/right) ─────────────
      gsap.utils
        .toArray<HTMLElement>("[data-gsap='slide-left']")
        .forEach((el) => {
          gsap.fromTo(
            el,
            { x: -60, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            },
          );
        });
      gsap.utils
        .toArray<HTMLElement>("[data-gsap='slide-right']")
        .forEach((el) => {
          gsap.fromTo(
            el,
            { x: 60, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            },
          );
        });

      // ── Progress bars ───────────────────────────────
      gsap.utils
        .toArray<HTMLElement>("[data-gsap='progress']")
        .forEach((el) => {
          const target = el.dataset.value ?? "0";
          gsap.fromTo(
            el,
            { width: "0%" },
            {
              width: `${target}%`,
              duration: 1.4,
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: el,
                start: "top 90%",
                toggleActions: "play none none none",
              },
            },
          );
        });

      // ── Stagger list items ──────────────────────────
      document.querySelectorAll("[data-gsap='list']").forEach((list) => {
        const items = list.querySelectorAll<HTMLElement>(
          "[data-gsap='list-item']",
        );
        gsap.fromTo(
          items,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.06,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: list,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    });

    return () => ctx.revert();
  }, []);
};
