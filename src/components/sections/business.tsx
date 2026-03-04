"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Shield, Globe } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { PERSONAL } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n";

export const Business = () => {
  const { t } = useLanguage();
  return (
    <section className="section-spacing">
      <FadeIn>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-linear-to-br from-surface-elevated via-surface to-surface-elevated">
          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-accent/5 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-blue-500/5 blur-[80px]" />
          <div className="relative flex flex-col gap-8 p-8 sm:flex-row sm:items-center sm:p-12">
            <motion.div
              className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10"
              whileHover={{ rotate: 5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Shield className="h-9 w-9 text-accent" />
            </motion.div>
            <div className="flex-1 space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
                  {t("business.label")}
                </span>
                <span className="h-px flex-1 bg-border" />
              </div>
              <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
                {t("business.title")}
              </h3>
              <p className="max-w-xl text-sm leading-7 text-muted">
                {t("business.description")}
              </p>
            </div>
            <div className="shrink-0">
              <motion.a
                href={PERSONAL.businessUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-xl border border-accent bg-accent/10 px-6 py-3.5 text-sm font-bold text-accent transition-all hover:bg-accent hover:text-white"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Globe className="h-4 w-4" />
                {t("business.cta")}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};
