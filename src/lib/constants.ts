// Personal information & constants
export const PERSONAL = {
  name: "Min Kaung Kyaw",
  nickname: "Min Kaung",
  title: "Fullstack & Mobile Engineer",
  email: "minkgkyaw9899@gmail.com",
  phones: ["+959762637636", "+959454807081"],
  github: "https://github.com/minkgkyaw9899",
  linkedin: "https://www.linkedin.com/in/min-kaung-kyaw-642673268/",
  address: "Yangon, Mayangone Township",
  dob: "1999-07-01",
  experience: "3+",
  businessUrl: "https://invisigate.asia",
  businessName: "Invisigate Asia",
  businessDescription: "VPN key sales & digital privacy solutions",
} as const;

export const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
] as const;

export const STATS = [
  { label: "Years Experience", value: 3, suffix: "+" },
  { label: "Projects Delivered", value: 12, suffix: "+" },
  { label: "Companies Worked", value: 4, suffix: "" },
  { label: "Technologies", value: 20, suffix: "+" },
] as const;

export const EXPERIENCES = [
  {
    company: "Yoma Fleet",
    role: "Software Engineer",
    period: "Present",
    url: "https://www.yomafleet.com/",
    description:
      "Developing Plus+, a lease-to-buy employee benefit platform. Building mobile apps with React Native CLI and admin portals with Next.js. Backend powered by Golang and microservices architecture.",
    projects: ["PLUS+ Application", "PLUS+ Admin Portal", "Merchant Portal"],
    tech: ["React Native", "Next.js", "TypeScript", "Golang"],
  },
  {
    company: "ACE Data Systems",
    role: "Senior Software Engineer",
    period: "Previous",
    url: "https://acedatasystems.com/",
    description:
      "Architected and developed secure mobile banking suites including FPB Mobile Banking and SMEDB Mobile Banking. Also built HR application for internal use with Expo.",
    projects: [
      "FPB Mobile Banking",
      "SMEDB Mobile Banking",
      "HR Hive (Internal)",
    ],
    tech: ["React Native CLI", "Expo", "TypeScript", "Redux"],
  },
  {
    company: "Tech Breeze",
    role: "Director & Frontend/Mobile Developer",
    period: "Previous",
    url: "https://www.tech-breeze.com.mm/about-grand",
    description:
      "Led technical direction for event e-ticketing platform (Breeze) and built Yuzana Palm Oil Factory Management web panel. Breeze being rewritten with native, launching before April 2026.",
    projects: ["Breeze E-Ticketing", "Oil Factory Management App"],
    tech: ["Expo", "React", "Inertia.js", "Laravel"],
  },
  {
    company: "MCY",
    role: "Freelance Mobile Developer",
    period: "Previous",
    url: undefined,
    description:
      "Delivered custom mobile solutions including Alpha Learn LMS application and EPS Topik Korean language learning app with quiz features.",
    projects: ["Alpha Learn LMS", "EPS Topik App"],
    tech: ["React Native CLI", "Redux", "Zustand", "React Query"],
  },
] as const;

type StackCategory = {
  title: string;
  items: Array<{
    name: string;
    level: "expert" | "advanced" | "intermediate" | "learning";
  }>;
};

export const TECH_STACK: StackCategory[] = [
  {
    title: "Languages",
    items: [
      { name: "JavaScript", level: "expert" },
      { name: "TypeScript", level: "expert" },
      { name: "HTML/CSS", level: "expert" },
      { name: "PHP", level: "intermediate" },
      { name: "C#", level: "intermediate" },
      { name: "Python", level: "learning" },
      { name: "Golang", level: "learning" },
    ],
  },
  {
    title: "Frontend & Mobile",
    items: [
      { name: "React", level: "expert" },
      { name: "React Native", level: "expert" },
      { name: "Next.js", level: "advanced" },
      { name: "Expo", level: "advanced" },
      { name: "Tailwind CSS", level: "advanced" },
      { name: "Inertia.js", level: "advanced" },
    ],
  },
  {
    title: "State & Data",
    items: [
      { name: "Redux / RTK", level: "expert" },
      { name: "Zustand", level: "advanced" },
      { name: "React Query", level: "advanced" },
      { name: "React Hook Form", level: "advanced" },
      { name: "Axios / KY", level: "advanced" },
      { name: "Zod", level: "advanced" },
    ],
  },
  {
    title: "Backend & DevOps",
    items: [
      { name: "Laravel", level: "intermediate" },
      { name: "Node.js", level: "intermediate" },
      { name: "Golang", level: "learning" },
      { name: "Microservices", level: "intermediate" },
      { name: "Docker", level: "intermediate" },
      { name: "CI/CD", level: "learning" },
    ],
  },
];

export const LEARNING_GOALS_2026 = [
  {
    title: "Golang",
    description:
      "Deepening backend skills with Go for high-performance microservices",
    icon: "code",
    progress: 30,
  },
  {
    title: "Python for AI",
    description:
      "Exploring machine learning and AI integration in applications",
    icon: "brain",
    progress: 15,
  },
  {
    title: "Server & Infrastructure",
    description:
      "Learning server management, deployment, and cloud architecture",
    icon: "server",
    progress: 20,
  },
  {
    title: "CI/CD Pipelines",
    description: "Automating build, test, and deployment workflows",
    icon: "workflow",
    progress: 25,
  },
  {
    title: "AI-Powered Development",
    description: "Using AI tools to improve development speed and code quality",
    icon: "sparkles",
    progress: 40,
  },
];
