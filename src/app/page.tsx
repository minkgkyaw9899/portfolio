import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Learning } from "@/components/sections/learning";
import { Projects } from "@/components/sections/projects";
import { Stack } from "@/components/sections/stack";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Stack />
      <Learning />
      <Contact />
    </>
  );
}
