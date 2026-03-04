"use client";

import { motion } from "framer-motion";
import { Apple, Smartphone } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { getShowcaseProjects, type Project } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";

/** Gradient cover placeholder per project — no broken image */
const projectGradients: Record<string, string> = {
  "fpb-banking-suite":
    "bg-linear-to-br from-blue-900/80 via-blue-700/40 to-cyan-600/30",
  "smedb-banking-suite":
    "bg-linear-to-br from-emerald-900/80 via-teal-700/40 to-green-600/30",
  "plus-financial-platform":
    "bg-linear-to-br from-accent/60 via-orange-700/40 to-amber-600/30",
};

const projectIcons: Record<string, string> = {
  "fpb-banking-suite": "🏦",
  "smedb-banking-suite": "🏢",
  "plus-financial-platform": "💳",
};

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const { t } = useLanguage();
  const gradient =
    projectGradients[project.slug] ??
    "bg-linear-to-br from-surface-elevated to-surface";
  const icon = projectIcons[project.slug] ?? "📱";

  return (
    <FadeIn delay={index * 0.1}>
      <motion.article
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface/40 transition-all hover:border-accent/30 hover:bg-surface/60"
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 280, damping: 22 }}
      >
        {/* Cover */}
        <div className={`relative h-48 w-full ${gradient} overflow-hidden`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl opacity-30 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-50">
              {icon}
            </span>
          </div>
          {/* Badges */}
          <div className="absolute left-4 top-4">
            <span className="rounded-lg border border-white/10 bg-black/40 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
              {project.domain}
            </span>
          </div>
          {project.company && (
            <div className="absolute right-4 top-4">
              <span className="rounded-lg border border-white/10 bg-black/40 px-3 py-1.5 text-[10px] font-medium text-white/80 backdrop-blur-sm">
                {project.company}
              </span>
            </div>
          )}
          {/* Bottom gradient fade */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-surface/80 to-transparent" />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-3 p-6">
          <div>
            <h3 className="text-lg font-bold text-foreground transition-colors group-hover:text-accent">
              {project.name}
            </h3>
            <p className="mt-0.5 text-xs font-medium text-accent/70">
              {project.role}
            </p>
          </div>
          <p className="line-clamp-3 text-sm leading-6 text-muted">
            {project.summary}
          </p>

          {/* Stack */}
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-md border border-border bg-surface-elevated/50 px-2.5 py-1 text-[10px] font-medium text-muted"
              >
                {item}
              </span>
            ))}
          </div>

          {/* App store links */}
          {project.appStoreLinks && (
            <div className="mt-auto flex items-center gap-2 border-t border-border pt-4">
              {project.appStoreLinks.android && (
                <a
                  href={project.appStoreLinks.android}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-lg border border-border bg-surface-elevated/50 px-3 py-2 text-[11px] font-semibold text-foreground transition-all hover:border-accent/50 hover:bg-accent/5 hover:text-accent"
                >
                  <Smartphone className="h-3.5 w-3.5" />
                  {t("projects.android")}
                </a>
              )}
              {project.appStoreLinks.ios && (
                <a
                  href={project.appStoreLinks.ios}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-lg border border-border bg-surface-elevated/50 px-3 py-2 text-[11px] font-semibold text-foreground transition-all hover:border-accent/50 hover:bg-accent/5 hover:text-accent"
                >
                  <Apple className="h-3.5 w-3.5" />
                  {t("projects.ios")}
                </a>
              )}
            </div>
          )}
        </div>
      </motion.article>
    </FadeIn>
  );
};

export const Projects = () => {
  const { t } = useLanguage();
  const projects = getShowcaseProjects();
  return (
    <section className="section-spacing" id="projects">
      <FadeIn>
        <SectionHeading
          label={t("projects.label")}
          title={t("projects.title")}
          description={t("projects.description")}
        />
      </FadeIn>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  );
};
