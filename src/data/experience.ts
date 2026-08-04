export type Experience = {
  company: string;
  role: string;
  duration: string;
  location: string;
  summary: string;
  responsibilities: string[];
  tech: string[];
  achievements: string[];
  current?: boolean;
};

export const experiences: Experience[] = [
  {
    company: "Labmentix",
    role: "Full Stack Developer Intern",
    duration: "Dec 2025 — Mar 2026",
    location: "Remote",
    summary:
      "Built and shipped scalable web applications across the full stack, collaborating closely with engineering teams on real-world product problems.",
    responsibilities: [
      "Developed frontend interfaces and backend services for production-grade web applications",
      "Designed and consumed REST APIs to power dynamic, data-driven features",
      "Worked in a collaborative environment using agile workflows and code reviews",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Git"],
    achievements: [
      "Gained hands-on ownership of full-stack features from schema to UI",
      "Improved debugging and shipping velocity through systematic testing",
    ],
  },
  {
    company: "Unified Mentor",
    role: "Full Stack Development Intern",
    duration: "Jun 2025 — Jul 2025",
    location: "Remote",
    summary:
      "Gained practical, end-to-end experience building web applications with modern JavaScript tooling and cloud data services.",
    responsibilities: [
      "Built responsive interfaces with HTML, CSS, JavaScript and React",
      "Developed server-side logic with Node.js and wired real-time data via Firebase",
      "Integrated authentication and database flows into full-stack features",
    ],
    tech: ["React", "Node.js", "Firebase", "JavaScript", "HTML", "CSS"],
    achievements: [
      "Delivered multiple complete features within a 6-week sprint cycle",
      "Strengthened frontend-to-backend integration skills on real projects",
    ],
  },
  {
    company: "Pinnacle Labs",
    role: "Machine Learning Intern",
    duration: "May 2025 — Jun 2025",
    location: "Remote",
    summary:
      "Explored machine learning, deep learning and real-world AI applications, building models and understanding modern ML workflows.",
    responsibilities: [
      "Implemented machine learning and deep learning models on practical datasets",
      "Applied data preprocessing, feature engineering and model evaluation",
      "Studied real-world AI application pipelines and deployment concerns",
    ],
    tech: ["Python", "Scikit-learn", "Deep Learning", "NLP", "OpenCV"],
    achievements: [
      "Completed structured hands-on training across ML, DL and AI domains",
      "Translated classroom theory into working, evaluable models",
    ],
  },
];
