"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Apple, Smartphone, ArrowRight } from "lucide-react";
import type { Project } from "@/lib/content";

type AppStoreProjectCardProps = {
  project: Project;
};

export const AppStoreProjectCard = ({ project }: AppStoreProjectCardProps) => {
  const { appStoreLinks, company } = project;

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="h-full"
    >
      <div className="flex h-full flex-col gap-6 rounded-2xl border border-zinc-800/70 bg-gradient-to-br from-zinc-900/80 via-zinc-900/50 to-zinc-950 p-6 transition hover:border-zinc-700 hover:bg-zinc-900/70">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-zinc-500">
          <span>{project.domain}</span>
          {company && <span>{company}</span>}
        </div>
        <div className="overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-950/80 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
          <Image
            src={project.image}
            alt={project.name}
            width={1200}
            height={800}
            className="h-40 w-full object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-zinc-50">
              {project.name}
            </h3>
            <p className="text-sm leading-6 text-zinc-400">{project.summary}</p>
          </div>
          <div className="mt-auto flex flex-wrap gap-2">
            {project.stack.slice(0, 3).map((item) => (
              <span
                key={item}
                className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-400"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <div className="flex gap-3">
            {appStoreLinks?.android && (
              <a
                href={appStoreLinks.android}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-2 text-sm font-medium text-zinc-100 transition hover:border-zinc-600 hover:bg-zinc-800"
              >
                <Smartphone className="h-4 w-4" />
                Android
              </a>
            )}
            {appStoreLinks?.ios && (
              <a
                href={appStoreLinks.ios}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-2 text-sm font-medium text-zinc-100 transition hover:border-zinc-600 hover:bg-zinc-800"
              >
                <Apple className="h-4 w-4" />
                iOS
              </a>
            )}
          </div>
          <Link
            href={`/projects/${project.slug}`}
            className="group flex items-center gap-2 text-sm font-medium text-zinc-400 transition hover:text-orange-300"
          >
            View details
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};
