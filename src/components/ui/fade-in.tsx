"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export const FadeIn = ({ children, delay = 0, className }: FadeInProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true, amount: 0.2 }}
  >
    {children}
  </motion.div>
);
