import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Learning } from "@/components/sections/learning";
import { Projects } from "@/components/sections/projects";
import { Stack } from "@/components/sections/stack";
import { Experience } from "@/components/sections/experience";

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      <Stack />
      <Learning />
      <Contact />
    </>
  );
}
