import Image from "next/image";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/ui/fade-in";
import { getProjectBySlug, getProjects } from "@/lib/content";
import { buildProjectMetadata } from "@/lib/seo";

type ProjectPageProps = {
  params: { slug: string };
};

export const generateStaticParams = () =>
  getProjects().map((project) => ({ slug: project.slug }));

export const generateMetadata = ({ params }: ProjectPageProps) => {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return {};
  }
  return buildProjectMetadata(project);
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-12">
      <FadeIn>
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
            {project.domain} Case Study
          </p>
          <h1 className="text-4xl font-semibold text-zinc-50 sm:text-5xl">
            {project.name}
          </h1>
          <p className="max-w-2xl text-base leading-7 text-zinc-400">
            {project.summary}
          </p>
          <p className="text-sm font-semibold text-orange-300">
            Role: {project.role}
          </p>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="overflow-hidden rounded-3xl border border-zinc-800/70 bg-zinc-950">
          <Image
            src={project.image}
            alt={project.name}
            width={1400}
            height={900}
            className="h-[320px] w-full object-cover sm:h-[420px]"
            priority
          />
        </div>
      </FadeIn>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <FadeIn>
          <div className="space-y-6 rounded-2xl border border-zinc-800/70 bg-zinc-900/50 p-6">
            <h2 className="text-xl font-semibold text-zinc-100">
              Technical Challenges Solved
            </h2>
            <ul className="space-y-3 text-sm text-zinc-400">
              {project.challenges.map((challenge) => (
                <li key={challenge} className="leading-6">
                  • {challenge}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="space-y-6 rounded-2xl border border-zinc-800/70 bg-zinc-900/50 p-6">
            <h2 className="text-xl font-semibold text-zinc-100">Outcome</h2>
            <ul className="space-y-3 text-sm text-zinc-400">
              {project.outcomes.map((outcome) => (
                <li key={outcome} className="leading-6">
                  • {outcome}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.stack.map((item) => (
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
      </div>
    </div>
  );
}
