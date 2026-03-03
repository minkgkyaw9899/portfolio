"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { AppStoreProjectCard } from "@/components/ui/app-store-project-card";
import { ProjectCard } from "@/components/ui/project-card";
import { getAppStoreProjects, getCaseStudyProjects } from "@/lib/content";

export const Projects = () => {
  const caseStudies = getCaseStudyProjects();
  const appStoreProjects = getAppStoreProjects();

  return (
    <section className="space-y-8 pt-20" id="projects">
      <FadeIn>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
              Project Showcase
            </p>
            <h2 className="text-3xl font-semibold text-zinc-50">
              Case studies and published apps
            </h2>
            <p className="max-w-xl text-sm leading-6 text-zinc-400">
              Banking apps on Android and iOS, admin portals, and complex mobile
              ecosystems with production-grade state management.
            </p>
          </div>
        </div>
      </FadeIn>
      {appStoreProjects.length > 0 && (
        <FadeIn>
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              Available on App Stores
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {appStoreProjects.map((project) => (
                <AppStoreProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </FadeIn>
      )}
      {caseStudies.length > 0 && (
        <FadeIn>
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              Case Studies
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {caseStudies.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </FadeIn>
      )}
    </section>
  );
};
