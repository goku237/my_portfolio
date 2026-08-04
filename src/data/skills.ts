import type { LucideIcon } from "lucide-react";
import {
  Code2,
  MonitorSmartphone,
  Server,
  Database,
  Cloud,
  BrainCircuit,
  Wrench,
  Layers,
} from "lucide-react";

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  blurb: string;
  skills: { name: string; level: number; note?: string }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: Code2,
    blurb: "Core languages I write production and academic code with.",
    skills: [
      { name: "Python", level: 92, note: "Primary language" },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 80 },
      { name: "Java", level: 70 },
      { name: "Prolog", level: 55, note: "Logic programming" },
    ],
  },
  {
    title: "Frontend",
    icon: MonitorSmartphone,
    blurb: "Crafting responsive, accessible and delightful interfaces.",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 92 },
      { name: "HTML5 & CSS3", level: 95 },
      { name: "Vite", level: 85 },
      { name: "Framer Motion", level: 75 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    blurb: "Designing REST APIs and full-stack application logic.",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express", level: 88 },
      { name: "Django", level: 75 },
      { name: "Flask", level: 82 },
      { name: "REST API Design", level: 85 },
    ],
  },
  {
    title: "Database",
    icon: Database,
    blurb: "Modelling, querying and managing relational & NoSQL data.",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 82 },
      { name: "PostgreSQL", level: 78 },
      { name: "Firebase", level: 86 },
      { name: "Supabase", level: 80 },
      { name: "Oracle DBA", level: 60 },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    blurb: "Shipping and operating applications in the cloud.",
    skills: [
      { name: "Vercel", level: 88 },
      { name: "Docker", level: 72 },
      { name: "CI/CD", level: 70 },
      { name: "Neon (Serverless PG)", level: 70 },
      { name: "Netlify", level: 75 },
    ],
  },
  {
    title: "AI / ML",
    icon: BrainCircuit,
    blurb: "Building intelligent features and ML-powered experiences.",
    skills: [
      { name: "Machine Learning", level: 82 },
      { name: "Deep Learning", level: 70 },
      { name: "Natural Language Processing", level: 74 },
      { name: "OpenCV", level: 68 },
      { name: "Scikit-learn", level: 78 },
    ],
  },
  {
    title: "Web3 & Blockchain",
    icon: Layers,
    blurb: "Experimenting with smart contracts and decentralised apps.",
    skills: [
      { name: "Clarity (Stacks)", level: 72 },
      { name: "Solidity", level: 60 },
      { name: "Hardhat", level: 55 },
      { name: "IPFS", level: 55 },
    ],
  },
  {
    title: "Tools & Workflow",
    icon: Wrench,
    blurb: "The everyday toolkit that keeps my workflow fast.",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Postman", level: 82 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 68 },
      { name: "Streamlit", level: 78 },
    ],
  },
];

export const techStackCloud = [
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Python",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Firebase",
  "Supabase",
  "Django",
  "Flask",
  "Framer Motion",
  "Vite",
  "Docker",
  "GitHub Actions",
  "Scikit-learn",
  "OpenCV",
  "Clarity",
  "Solidity",
  "Streamlit",
  "Prisma",
  "HTML5",
  "CSS3",
  "Java",
  "Prolog",
];
