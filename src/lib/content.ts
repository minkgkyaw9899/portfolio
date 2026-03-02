import blogData from "@/content/blog.json";
import projectsData from "@/content/projects.json";

export type Project = {
  slug: string;
  name: string;
  domain: string;
  summary: string;
  role: string;
  stack: string[];
  challenges: string[];
  outcomes: string[];
  image: string;
  featured: boolean;
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  status: string;
};

const projects = projectsData as Project[];
const blogPosts = blogData as BlogPost[];

export const getProjects = () => projects;

export const getFeaturedProjects = () =>
  projects.filter((project) => project.featured);

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);

export const getBlogPosts = () => blogPosts;
