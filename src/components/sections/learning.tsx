"use client";

import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";
import { getBlogPosts } from "@/lib/content";

export const Learning = () => {
  const posts = getBlogPosts();

  return (
    <section className="space-y-8 pt-20" id="learning">
      <FadeIn>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
              Learning Path
            </p>
            <h2 className="text-3xl font-semibold text-zinc-50">
              Documenting my Golang transition
            </h2>
            <p className="max-w-xl text-sm leading-6 text-zinc-400">
              A transparent trail of lessons, experiments, and backend patterns
              I am adopting while moving into fullstack delivery.
            </p>
          </div>
          <Link
            href="/blog"
            className="text-sm font-semibold text-orange-300 transition hover:text-orange-200"
          >
            View learning posts →
          </Link>
        </div>
      </FadeIn>
      <div className="grid gap-4 md:grid-cols-3">
        {posts.map((post) => (
          <FadeIn key={post.slug} className="h-full">
            <div className="flex h-full flex-col gap-4 rounded-2xl border border-zinc-800/70 bg-zinc-900/50 p-6">
              <div className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                {post.status}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-zinc-100">
                  {post.title}
                </h3>
                <p className="text-sm leading-6 text-zinc-400">
                  {post.summary}
                </p>
              </div>
              <div className="mt-auto flex flex-wrap gap-2 text-xs text-zinc-500">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-zinc-800 px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
