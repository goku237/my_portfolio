export type BlogPost = {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  emoji: string;
  published?: boolean;
};

export const blogPosts: BlogPost[] = [
  {
    title: "Building a full-stack app as a first-time intern",
    excerpt:
      "What I learned shipping real features end-to-end — schema design, API boundaries, and why ownership changes how you code.",
    date: "2026",
    readTime: "6 min",
    emoji: "🚀",
    published: true,
  },
  {
    title: "Smart contracts for beginners: my first Clarity dApp",
    excerpt:
      "How I went from web developer to writing auditable, on-chain logic for a micro-investment banking dashboard.",
    date: "Coming soon",
    readTime: "8 min",
    emoji: "⛓️",
  },
  {
    title: "My AI learning roadmap",
    excerpt:
      "From NPTEL fundamentals to deep learning — the path, the projects, and the mistakes worth making.",
    date: "Coming soon",
    readTime: "5 min",
    emoji: "🧠",
  },
];
