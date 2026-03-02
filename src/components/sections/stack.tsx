"use client";

import { Server, Smartphone, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

const stackGroups = [
  {
    title: "Mobile",
    icon: Smartphone,
    items: ["React Native", "Expo", "TypeScript", "Geofencing"],
  },
  {
    title: "Frontend",
    icon: Sparkles,
    items: ["React", "Next.js", "Tailwind CSS", "Design Systems"],
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Golang", "Laravel", "Node.js", "API Design"],
  },
];

export const Stack = () => (
  <section className="space-y-8 pt-20" id="stack">
    <FadeIn>
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
          Technology Stack
        </p>
        <h2 className="text-3xl font-semibold text-zinc-50">
          Balanced across mobile, web, and backend systems
        </h2>
      </div>
    </FadeIn>
    <div className="grid gap-6 md:grid-cols-3">
      {stackGroups.map((group) => {
        const Icon = group.icon;
        return (
          <FadeIn key={group.title} className="h-full">
            <div className="flex h-full flex-col gap-4 rounded-2xl border border-zinc-800/70 bg-zinc-900/50 p-6">
              <div className="flex items-center gap-3 text-zinc-100">
                <span className="rounded-xl border border-zinc-800 bg-zinc-950 p-3">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        );
      })}
    </div>
  </section>
);
