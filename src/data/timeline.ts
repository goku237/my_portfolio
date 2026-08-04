export type TimelineEntry = {
  period: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  current?: boolean;
};

export const timeline: TimelineEntry[] = [
  {
    period: "2022 — 2024",
    title: "Schooling — CBSE",
    subtitle: "Higher & Secondary Education",
    description:
      "Completed Class X (88%) and Class XII (79%) through the CBSE board, building a strong foundation in science and mathematics.",
    icon: "graduation-cap",
  },
  {
    period: "May 2025",
    title: "First Internship",
    subtitle: "Pinnacle Labs — ML Intern",
    description:
      "Stepped into the industry as a Machine Learning intern, exploring deep learning and real-world AI applications.",
    icon: "brain",
  },
  {
    period: "Jun — Jul 2025",
    title: "Full Stack Internship",
    subtitle: "Unified Mentor",
    description:
      "Built real features with React, Node.js and Firebase, going end-to-end from UI to cloud data services.",
    icon: "code",
  },
  {
    period: "2024 — Present",
    title: "B.Tech Computer Science",
    subtitle: "SRM University, Chennai",
    description:
      "Pursuing a B.Tech in CSE at SRM University alongside the IIT Guwahati credit-linked data science program.",
    icon: "university",
    current: true,
  },
  {
    period: "Dec 2025 — Mar 2026",
    title: "Professional Full Stack Role",
    subtitle: "Labmentix — Full Stack Developer Intern",
    description:
      "Building scalable web applications across the stack, shipping features from schema design to polished interfaces.",
    icon: "rocket",
  },
];
