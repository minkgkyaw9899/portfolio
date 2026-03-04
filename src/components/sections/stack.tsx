"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { TECH_STACK } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n";

type Level = "expert" | "advanced" | "intermediate" | "learning";

const levelColors: Record<Level, string> = {
  expert: "border-accent bg-accent/10 text-accent",
  advanced: "border-blue-400/30 bg-blue-400/10 text-blue-400",
  intermediate: "border-emerald-400/30 bg-emerald-400/10 text-emerald-400",
  learning: "border-purple-400/30 bg-purple-400/10 text-purple-400",
};

const MarqueeBand = () => {
  const techs = [
    "React",
    "React Native",
    "TypeScript",
    "Next.js",
    "Expo",
    "Redux",
    "Zustand",
    "Tailwind",
    "Golang",
    "Laravel",
    "Node.js",
    "Docker",
    "React Query",
    "Zod",
    "React Hook Form",
    "Inertia.js",
  ];
  return (
    <div className="relative overflow-hidden py-6">
      <div className="absolute left-0 top-0 z-10 h-full w-24 bg-linear-to-r from-background to-transparent" />
      <div className="absolute right-0 top-0 z-10 h-full w-24 bg-linear-to-l from-background to-transparent" />
      <div className="animate-marquee flex gap-6 whitespace-nowrap">
        {[...techs, ...techs].map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="flex items-center gap-2 text-lg font-bold uppercase tracking-[0.15em] text-border"
          >
            {tech}
            <span className="text-accent text-sm">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export const Stack = () => {
  const { t } = useLanguage();
  return (
    <section className="section-spacing" id="stack">
      <FadeIn>
        <SectionHeading
          label={t("stack.label")}
          title={t("stack.title")}
          description={t("stack.description")}
        />
      </FadeIn>

      {/* Legend */}
      <FadeIn delay={0.1}>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          {(["expert", "advanced", "intermediate", "learning"] as Level[]).map(
            (level) => (
              <div key={level} className="flex items-center gap-2">
                <span
                  className={`h-2 w-2 rounded-full border ${levelColors[level]}`}
                />
                <span className="text-xs text-muted">
                  {t(`stack.levels.${level}`)}
                </span>
              </div>
            ),
          )}
        </div>
      </FadeIn>

      {/* Grid */}
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {TECH_STACK.map((category, catIdx) => (
          <FadeIn key={category.title} delay={catIdx * 0.1}>
            <div className="glass-card h-full rounded-2xl p-6 transition-all hover:border-accent/20">
              <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-foreground">
                {category.title}
              </h3>
              <div className="flex flex-col gap-2.5">
                {category.items.map((item, itemIdx) => (
                  <motion.div
                    key={item.name}
                    className="flex items-center justify-between"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: catIdx * 0.1 + itemIdx * 0.05,
                      duration: 0.4,
                    }}
                  >
                    <span className="text-sm text-foreground">{item.name}</span>
                    <span
                      className={`rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${levelColors[item.level]}`}
                    >
                      {t(`stack.levels.${item.level}`)}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <div className="mt-12">
        <MarqueeBand />
      </div>
    </section>
  );
};
