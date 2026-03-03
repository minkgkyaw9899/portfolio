"use client";

import { FadeIn } from "@/components/ui/fade-in";

export const Contact = () => (
  <section className="space-y-6 pb-20 pt-20" id="contact">
    <FadeIn>
      <div className="rounded-3xl border border-zinc-800/70 bg-zinc-900/50 p-8 text-center sm:p-12">
        <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
          Let&apos;s Build Together
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-zinc-50">
          Open to fullstack roles and complex mobile-web systems
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-zinc-400">
          Reach out for opportunities in fintech, enterprise, or education
          platforms where reliability, security, and UX matter.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:minkaungkyaw9899@gmail.com"
            className="rounded-full bg-orange-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-orange-300"
          >
            Email me
          </a>
          <a
            href="tel:+959762637636"
            className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-100 transition hover:border-zinc-500"
          >
            +95 9 762637636
          </a>
          <a
            href="https://github.com/minkgkyaw9899"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-100 transition hover:border-zinc-500"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/minkaungkyaw/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-100 transition hover:border-zinc-500"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </FadeIn>
  </section>
);
