export type Certification = {
  title: string;
  org: string;
  year: string;
  blurb: string;
  link?: string;
};

export const certifications: Certification[] = [
  {
    title: "Fundamentals of Artificial Intelligence",
    org: "NPTEL",
    year: "2025",
    blurb:
      "Completed NPTEL's certified course covering the core concepts of artificial intelligence — search, reasoning and intelligent agents.",
  },
  {
    title: "Getting Started with Generative AI",
    org: "Online Certification",
    year: "2025",
    blurb:
      "Foundational certification on generative AI — how models work, prompt design and real-world generative applications.",
  },
  {
    title: "Stacks Fullstack Bootcamp",
    org: "Stacks Bootcamp",
    year: "2025",
    blurb:
      "Fullstack bootcamp certificate covering web development with a focus on Clarity smart contracts and the Stacks blockchain.",
  },
];
