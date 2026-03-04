import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Stack } from "@/components/sections/stack";
import { Learning } from "@/components/sections/learning";
import { Business } from "@/components/sections/business";
import { Contact } from "@/components/sections/contact";
import { AnimationOrchestrator } from "@/components/ui/animation-orchestrator";

export default function Home() {
  return (
    <>
      <AnimationOrchestrator />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Stack />
      <Learning />
      <Business />
      <Contact />
    </>
  );
}
