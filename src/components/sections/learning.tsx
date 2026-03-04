"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Brain,
  Server,
  Workflow,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { LEARNING_GOALS_2026 } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n";

const iconMap: Record<string, typeof Code2> = {
  code: Code2,
  brain: Brain,
  server: Server,
  workflow: Workflow,
  sparkles: Sparkles,
};

export const Learning = () => {
  const { t } = useLanguage();
  return (
    <section className="section-spacing" id="learning">
      <FadeIn>
        <SectionHeading
          label={t("learning.label")}
          title={t("learning.title")}
          description={t("learning.description")}
        />
      </FadeIn>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {LEARNING_GOALS_2026.map((goal, i) => {
          const Icon = iconMap[goal.icon] ?? Sparkles;
          return (
            <FadeIn key={goal.title} delay={i * 0.08}>
              <motion.div
                className="glass-card group h-full rounded-2xl p-6 transition-all hover:border-accent/30"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-elevated text-accent transition-colors group-hover:border-accent/30 group-hover:bg-accent/10">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-bold text-accent">
                    {goal.progress}%
                  </span>
                </div>
                <h3 className="mt-4 text-base font-bold text-foreground">
                  {goal.title}
                </h3>
                <p className="mt-2 text-xs leading-5 text-muted">
                  {goal.description}
                </p>
                <div className="mt-4">
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-border">
                    <motion.div
                      className="h-full rounded-full bg-linear-to-r from-accent to-accent-light"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${goal.progress}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.2,
                        delay: i * 0.1 + 0.3,
                        ease: [0.25, 0.4, 0.25, 1],
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          );
        })}
      </div>
      <FadeIn delay={0.4}>
        <div className="mt-8 flex justify-center">
          <a
            href="/blog"
            className="group flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-light"
          >
            {t("learning.blog_cta")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </FadeIn>
    </section>
  );
};
