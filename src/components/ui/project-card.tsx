"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/content";

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => (
  <motion.article
    whileHover={{ y: -6 }}
    transition={{ type: "spring", stiffness: 260, damping: 20 }}
    className="h-full"
  >
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col gap-6 rounded-2xl border border-zinc-800/70 bg-gradient-to-br from-zinc-900/80 via-zinc-900/50 to-zinc-950 p-6 transition hover:border-zinc-700 hover:bg-zinc-900/70"
    >
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-zinc-500">
        <span>{project.domain}</span>
        <span className="text-zinc-600">Case Study</span>
      </div>
      <div className="overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-950/80 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
        <Image
          src={project.image}
          alt={project.name}
          width={1200}
          height={800}
          className="h-40 w-full object-cover transition duration-500 group-hover:scale-[1.02]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-zinc-50">{project.name}</h3>
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
      <span className="text-sm font-medium text-zinc-100 transition group-hover:text-orange-300">
        View case study →
      </span>
    </Link>
  </motion.article>
);
