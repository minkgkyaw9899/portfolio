"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { ProjectCard } from "@/components/ui/project-card";
import { getFeaturedProjects } from "@/lib/content";

export const Projects = () => {
  const projects = getFeaturedProjects();

  return (
    <section className="space-y-8 pt-20" id="projects">
      <FadeIn>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
              Project Showcase
            </p>
            <h2 className="text-3xl font-semibold text-zinc-50">
              Case studies in fintech, enterprise, and LMS
            </h2>
            <p className="max-w-xl text-sm leading-6 text-zinc-400">
              Highlighting secure banking apps, admin portals, and complex mobile
              ecosystems with production-grade state management.
            </p>
          </div>
        </div>
      </FadeIn>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
};
