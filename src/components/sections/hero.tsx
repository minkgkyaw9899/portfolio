"use client";

import { FadeIn } from "@/components/ui/fade-in";

export const Hero = () => (
  <section className="space-y-10 pt-24" id="home">
    <FadeIn>
      <div className="inline-flex items-center gap-3 rounded-full border border-zinc-800/70 bg-zinc-900/60 px-4 py-2 text-xs uppercase tracking-[0.35em] text-zinc-400">
        <span className="h-2 w-2 rounded-full bg-orange-400" />
        Fullstack Engineer · Mobile Specialist
      </div>
    </FadeIn>
    <FadeIn delay={0.05}>
      <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-zinc-50 sm:text-5xl lg:text-6xl">
        Fullstack Developer with deep{" "}
        <span className="text-orange-300">Mobile expertise</span>, bridging
        React Native systems with modern web and Go backends.
      </h1>
    </FadeIn>
    <FadeIn delay={0.1}>
      <p className="max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
        Currently at Yoma Fleet, transitioning from specialized mobile
        development into fullstack delivery across Fintech, LMS, and Enterprise
        platforms.
      </p>
    </FadeIn>
    <FadeIn delay={0.15}>
      <div className="flex flex-wrap gap-4">
        <a
          href="#projects"
          className="rounded-full bg-orange-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-orange-300"
        >
          View case studies
        </a>
        <a
          href="#learning"
          className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-100 transition hover:border-zinc-500"
        >
          Go learning path
        </a>
      </div>
    </FadeIn>
    <FadeIn delay={0.2}>
      <div className="grid gap-4 rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 text-sm text-zinc-400 sm:grid-cols-3">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            Fintech
          </p>
          <p className="text-lg font-semibold text-zinc-100">
            Banking + Benefits Platforms
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            Enterprise
          </p>
          <p className="text-lg font-semibold text-zinc-100">
            Workforce & Operations Systems
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            Education
          </p>
          <p className="text-lg font-semibold text-zinc-100">
            LMS + Ticketing Experiences
          </p>
        </div>
      </div>
    </FadeIn>
  </section>
);
