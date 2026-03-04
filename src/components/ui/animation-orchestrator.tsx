"use client";

import { useGSAPAnimations } from "@/hooks/use-gsap-animations";

/** Mounts global GSAP scroll animations — rendered inside page.tsx */
export const AnimationOrchestrator = () => {
  useGSAPAnimations();
  return null;
};
