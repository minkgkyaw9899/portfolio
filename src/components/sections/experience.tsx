"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Building2, ExternalLink, Briefcase } from "lucide-react";
import { EXPERIENCES } from "@/lib/constants";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLanguage } from "@/lib/i18n";

const TimelineCard = ({
  exp,
  index,
}: {
  exp: (typeof EXPERIENCES)[number];
  index: number;
}) => {
  const { t } = useLanguage();
  return (
    <FadeIn delay={index * 0.1} direction={index % 2 === 0 ? "left" : "right"}>
      <div className="glass-card group rounded-2xl p-6 transition-all hover:border-accent/30">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-foreground">
                {exp.company}
              </h3>
              {exp.url && (
                <a
                  href={exp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted transition-colors hover:text-accent"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
            <div className="mt-1 flex items-center gap-2">
              <Briefcase className="h-3 w-3 text-accent" />
              <p className="text-xs font-medium uppercase tracking-widest text-accent">
                {exp.role}
              </p>
            </div>
          </div>
          <span className="shrink-0 rounded-lg border border-border bg-surface-elevated px-3 py-1 text-xs font-medium text-muted">
            {exp.period === "Present"
              ? t("experience.period_current")
              : t("experience.period_prev")}
          </span>
        </div>
        <p className="mt-4 text-sm leading-6 text-muted">{exp.description}</p>

        <div className="mt-4">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-muted/60">
            {t("experience.key_projects")}
          </p>
          <div className="flex flex-wrap gap-2">
            {exp.projects.map((project) => (
              <span
                key={project}
                className="rounded-lg border border-border bg-surface-elevated/40 px-3 py-1.5 text-xs text-foreground"
              >
                {project}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {exp.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-accent/20 bg-accent/5 px-2.5 py-1 text-[10px] font-medium text-accent"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </FadeIn>
  );
};

const TimelineItem = ({
  exp,
  index,
}: {
  exp: (typeof EXPERIENCES)[number];
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale }}
      className="relative grid gap-6 md:grid-cols-[1fr_auto_1fr]"
    >
      {/* Left slot (card on even) */}
      <div
        className={
          isLeft ? "" : "hidden md:flex md:items-start md:justify-end md:pt-3"
        }
      >
        {isLeft ? <TimelineCard exp={exp} index={index} /> : null}
      </div>

      {/* Center dot + line */}
      <div className="hidden flex-col items-center md:flex">
        <motion.div
          className="timeline-dot z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent bg-background"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: index * 0.15,
          }}
        >
          <Building2 className="h-5 w-5 text-accent" />
        </motion.div>
        <div className="w-px flex-1 bg-linear-to-b from-accent/50 to-border" />
      </div>

      {/* Right slot (card on odd) */}
      <div className={!isLeft ? "" : "hidden md:block"}>
        {!isLeft ? <TimelineCard exp={exp} index={index} /> : null}
      </div>

      {/* Mobile: always render card below (the grid collapses to 1 col on mobile) */}
      <div className="md:hidden">
        <TimelineCard exp={exp} index={index} />
      </div>
    </motion.div>
  );
};

export const Experience = () => {
  const { t } = useLanguage();
  return (
    <section className="section-spacing" id="experience">
      <FadeIn>
        <SectionHeading
          label={t("experience.label")}
          title={t("experience.title")}
          description={t("experience.description")}
        />
      </FadeIn>
      <div className="mt-16 space-y-8 md:space-y-0">
        {EXPERIENCES.map((exp, i) => (
          <TimelineItem key={exp.company} exp={exp} index={i} />
        ))}
      </div>
    </section>
  );
};
