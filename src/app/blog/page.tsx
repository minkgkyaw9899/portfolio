import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { getBlogPosts } from "@/lib/content";

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="space-y-12">
      <FadeIn>
        <Link
          href="/#learning"
          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-accent transition-colors hover:text-accent-light group"
        >
          <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Learning
        </Link>
      </FadeIn>

      <FadeIn>
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
            Learning Log
          </p>
          <h1 className="text-4xl font-semibold text-zinc-50 sm:text-5xl">
            Golang Growth Journey
          </h1>
          <p className="max-w-2xl text-base leading-7 text-zinc-400">
            Tracking backend milestones as I move from mobile-first delivery to
            fullstack systems engineering.
          </p>
        </div>
      </FadeIn>

      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <FadeIn key={post.slug} className="h-full">
            <article className="flex h-full flex-col gap-4 rounded-2xl border border-zinc-800/70 bg-zinc-900/50 p-6 transition-all hover:border-accent/30 hover:bg-zinc-900/80">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-zinc-500">
                <span>{post.status}</span>
                <span>{post.date}</span>
              </div>
              <h2 className="text-xl font-semibold text-zinc-100">
                {post.title}
              </h2>
              <p className="text-sm leading-6 text-zinc-400">{post.summary}</p>
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
            </article>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
