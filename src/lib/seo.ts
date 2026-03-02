import type { Metadata } from "next";
import type { Project } from "@/lib/content";

export const buildProjectMetadata = (project: Project): Metadata => {
  const title = `${project.name} | Portfolio Case Study`;
  const description = project.summary;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: project.image,
          alt: project.name,
        },
      ],
    },
  };
};
