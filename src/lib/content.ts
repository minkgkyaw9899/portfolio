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
  /** When false, project is shown as app store listing (not case study) */
  isCaseStudy?: boolean;
  /** Company where the project was built */
  company?: string;
  /** App store links for published apps (non-case-study projects) */
  appStoreLinks?: { android?: string; ios?: string };
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

const SHOWCASE_SLUGS = [
  "fpb-banking-suite",
  "smedb-banking-suite",
  "plus-financial-platform",
];

export const getProjects = () => projects;

export const getShowcaseProjects = () =>
  SHOWCASE_SLUGS.map((slug) => projects.find((p) => p.slug === slug)).filter(
    Boolean,
  ) as Project[];

export const getFeaturedProjects = () =>
  projects.filter((project) => project.featured);

export const getCaseStudyProjects = () =>
  projects.filter((p) => p.featured && p.isCaseStudy !== false);

export const getAppStoreProjects = () =>
  projects.filter((p) => p.featured && p.isCaseStudy === false);

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);

export const getBlogPosts = () => blogPosts;
