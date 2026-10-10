export type EducationEntry = {
  degree: string;
  institution: string;
  years: string;
  detail?: string;
  score?: string;
  coursework?: string[];
  current?: boolean;
};

export const education: EducationEntry[] = [
  {
    degree: "B.Tech — Computer Science & Engineering",
    institution: "SRM University, Chennai",
    years: "2024 — 2028",
    detail: "Pursuing a B.Tech in Computer Science and Engineering.",
    current: true,
    coursework: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Artificial Intelligence",
      "Machine Learning",
    ],
  },
  {
    degree: "Credit Linked Program — Data Science",
    institution: "Indian Institute of Technology, Guwahati",
    years: "2025 — 2026",
    detail: "Completed a specialised data science program taken as a credit-linked course.",
    coursework: ["Data Science", "Statistical Analysis", "Machine Learning"],
  },
  {
    degree: "Class XII — CBSE",
    institution: "Central Board of Secondary Education",
    years: "2024",
    score: "79%",
    detail: "Higher Secondary education with a focus on the science stream.",
  },
  {
    degree: "Class X — CBSE",
    institution: "Central Board of Secondary Education",
    years: "2022",
    score: "88%",
    detail: "Secondary education completed with distinction.",
  },
];
