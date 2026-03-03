"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { Building2 } from "lucide-react";

const experiences = [
  {
    company: "MCY",
    role: "Freelancer",
    description:
      "Delivering custom web and mobile solutions independently for diverse clients and domains.",
  },
  {
    company: "Tech Breeze",
    role: "Director & Software Engineer",
    description:
      "Leading technical directions and building event e-ticketing system app & Oil Factory Management App using React and Laravel.",
  },
  {
    company: "Yoma Fleet",
    role: "Software Engineer",
    description:
      "Developing the PLUS+ application (a lease-to-buy program) and PLUS admin & merchant portal.",
  },
  {
    company: "ACE Data System",
    role: "Senior Software Engineer",
    description:
      "Architecting and developing secure mobile banking suites and scalable financial systems.",
  },
];

export const Experience = () => {
  return (
    <section className="space-y-8 pt-20" id="experience">
      <FadeIn>
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
            Professional Background
          </p>
          <h2 className="text-3xl font-semibold text-zinc-50">Company List</h2>
          <p className="max-w-xl text-sm leading-6 text-zinc-400">
            My career journey and recent roles across multiple forward-thinking
            organizations.
          </p>
        </div>
      </FadeIn>
      <div className="grid gap-6 md:grid-cols-2">
        {experiences.map((exp) => (
          <FadeIn key={exp.company} className="h-full">
            <div className="flex h-full flex-col gap-4 rounded-2xl border border-zinc-800/70 bg-zinc-900/50 p-6 transition hover:bg-zinc-900/80">
              <div className="flex items-center gap-4 text-zinc-100">
                <span className="rounded-xl border border-zinc-800 bg-zinc-950 p-3 text-zinc-300">
                  <Building2 className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{exp.company}</h3>
                  <p className="text-xs uppercase tracking-widest text-orange-200/80">
                    {exp.role}
                  </p>
                </div>
              </div>
              <p className="text-sm leading-6 text-zinc-400">
                {exp.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
