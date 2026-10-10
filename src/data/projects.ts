export type Project = {
  name: string;
  category: string;
  tagline: string;
  description: string;
  features: string[];
  tech: string[];
  architecture?: string;
  challenge?: string;
  github?: string;
  demo?: string;
  featured?: boolean;
  year: string;
  emoji: string;
};

export const featuredProjects: Project[] = [
  {
    name: "CloudBase",
    category: "Cloud · Full Stack",
    tagline: "Secure cloud media storage & sharing platform",
    description:
      "A full-featured cloud file storage web app with account auth, folder organisation, media upload/download, instant search and granular sharing controls — built to feel like a production SaaS rather than a classroom project.",
    features: [
      "JWT + cookie based authentication with session handling",
      "Folder structure with nested media organisation",
      "Streaming upload & download via multer",
      "Full-text search across files and folders",
      "Granular sharing with per-user permissions",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Supabase Storage", "JWT", "multer"],
    architecture:
      "React SPA (Vite) consuming an Express REST API, with PostgreSQL for metadata and Supabase Storage buckets for object persistence.",
    challenge:
      "Designed a permission model that lets users share folders or files with specific people and roles without exposing the underlying object URLs.",
    github: "https://github.com/goku237/cloudbase_client",
    featured: true,
    year: "2025",
    emoji: "☁️",
  },
  {
    name: "Sukoon",
    category: "Music · Full Stack",
    tagline: "Modern music & podcast streaming platform",
    description:
      "A music and podcast streaming web application with playlists, a personal library, liked songs, podcasts and admin uploads — a premium listening experience backed by a real-time cloud database.",
    features: [
      "13-screen app: Home, Music, Playlists, Library, Liked, Podcasts and more",
      "Playlist creation with drag-and-drop reordering",
      "Recently played history and listening analytics",
      "Admin upload flow for songs and podcasts",
      "Supabase auth tied to per-user likes",
    ],
    tech: ["React", "Vite", "React Router", "Supabase", "Express", "Framer Motion", "dnd-kit"],
    architecture:
      "React SPA with an Express API layer on top of Supabase for authentication, storage and real-time data.",
    challenge:
      "Built a per-user media model where likes, playlists and history are scoped to accounts without leaking data across sessions.",
    github: "https://github.com/goku237/Sukoon",
    featured: true,
    year: "2025",
    emoji: "🎵",
  },
  {
    name: "ExpenseTracker AI",
    category: "AI · SaaS",
    tagline: "AI-powered expense tracking with smart insights",
    description:
      "A modern, AI-powered expense tracking web app built with Next.js 15 that categorises transactions automatically, surfaces real-time analytics and serves personalised financial insights through a conversational AI assistant.",
    features: [
      "AI-driven transaction categorisation",
      "Insights dashboard with confidence-scored alerts & tips",
      "Conversational AI chat about spending habits",
      "Daily, weekly and monthly interactive charts",
      "Clerk multi-provider authentication (Google, GitHub & more)",
    ],
    tech: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Chart.js", "Prisma", "Neon", "OpenAI SDK", "Clerk"],
    architecture:
      "Next.js App Router full-stack app with Prisma + Neon (serverless Postgres) and the OpenAI SDK for categorisation and insight generation.",
    challenge:
      "Engineered prompt pipelines that return structured categorisation and explainable insight messages with confidence scores.",
    github: "https://github.com/goku237/ExpenseTracker",
    featured: true,
    year: "2025",
    emoji: "🤖",
  },
  {
    name: "BugHive",
    category: "Developer Tools · SaaS",
    tagline: "Jira & Linear-inspired issue tracker",
    description:
      "A full-featured MERN issue tracker with Kanban drag-and-drop, threaded comments, filters and full-text search.",
    features: [
      "JWT authentication & colour-coded projects",
      "Kanban board: To Do → In Progress → Done",
      "Threaded comments on tickets",
      "Filters, search & dashboard stats",
    ],
    tech: ["React", "Vite", "TanStack Query", "Node.js", "Express", "MongoDB", "JWT"],
    architecture:
      "React SPA using TanStack Query for server state, talking to an Express REST API backed by MongoDB with JWT authentication.",
    challenge:
      "Modelled projects, tickets and threaded comments so Kanban drag-and-drop, filters and search stay in sync without redundant round-trips.",
    featured: true,
    year: "2026",
    emoji: "🐝",
  },
  {
    name: "BitSave",
    category: "Web3 · DeFi",
    tagline: "Micro-investment banking dApp on Stacks",
    description:
      "A polished banking-style dashboard micro-investment dApp built on the Stacks blockchain with Clarity smart contracts and a React + Tailwind frontend — designed for hackathon-grade demos.",
    features: [
      "Deposit / withdraw with smart-contract credit ledger",
      "Savings goals with animated progress tracking",
      "Connect Wallet flows for Hiro & Xverse",
      "Clarinet test suite for contract logic",
      "Testnet deployment script",
    ],
    tech: ["Clarity", "Stacks", "React", "Tailwind CSS", "Vite", "Clarinet", "Hiro Wallet"],
    architecture:
      "Clarity smart contracts on the Stacks testnet, consumed by a React dashboard through wallet connectors.",
    challenge:
      "Designed contract state so balances, goals and interest credits remain auditable and tamper-proof on-chain.",
    github: "https://github.com/goku237/Bitsave",
    featured: true,
    year: "2025",
    emoji: "💰",
  },
  {
    name: "Unbound",
    category: "Web3 · Creator Economy",
    tagline: "Token-gated content marketplace on-chain",
    description:
      "A Web3 content marketplace where creators record or upload audio and video, register it on-chain with an IPFS CID, and gate access behind a micro-payment smart contract.",
    features: [
      "In-browser audio & video recorders with uploads",
      "IPFS content addressing (CID) stored on-chain",
      "Pay-per-access unlock gate (0.01 ETH) via smart contract",
      "On-chain events: content registered, access granted, withdrawals",
      "Deployed to Polygon Amoy testnet",
    ],
    tech: ["Next.js", "React", "Solidity", "Hardhat", "IPFS", "viem", "Express", "Polygon"],
    architecture:
      "Next.js client + Express API, with a Solidity contract on Polygon Amoy (Hardhat) handling registry and gating logic.",
    challenge:
      "Wired wallet-driven unlock flows so content is only revealed after a successful on-chain payment event.",
    github: "https://github.com/goku237/unbound",
    featured: true,
    year: "2026",
    emoji: "🔓",
  },
];

export const allProjects: Project[] = [
  {
    name: "EchoTrack",
    category: "Productivity",
    tagline: "Personal digital growth tracker",
    description:
      "A non-social growth tracker that visualises learning progress over time with daily logging across skill areas.",
    features: [
      "Daily learning activity logging",
      "Skill selection across 5 areas",
      "Growth timelines & insights",
      "Weekly & monthly summaries",
    ],
    tech: ["React 19", "Vite", "Tailwind CSS"],
    year: "2026",
    emoji: "🌱",
  },
  {
    name: "Smart Student Dashboard",
    category: "Productivity",
    tagline: "Tasks, focus timer & analytics for students",
    description:
      "A productivity dashboard for students combining task management, a Pomodoro focus timer and visual analytics, synced to a real-time cloud database with authentication.",
    features: [
      "Full task manager (add, edit, complete, delete)",
      "Pomodoro timer for focus sessions",
      "Productivity analytics with charts",
      "Real-time cloud sync via Firestore",
    ],
    tech: ["React", "React Router", "Firebase", "recharts", "react-calendar"],
    github: "https://github.com/goku237/SmartStudentDashboard",
    demo: "https://smart-student-dashboard-blond.vercel.app",
    year: "2025",
    emoji: "📊",
  },
  {
    name: "FoodShare",
    category: "Social Impact",
    tagline: "Food distribution hub",
    description:
      "A Flask web app that connects food donations with orphanages and shelters through share and donate flows.",
    features: [
      "Donation listing with image uploads",
      "Orphanage & shelter directory",
      "Share & donate forms with sessions",
    ],
    tech: ["Flask", "SQLite", "HTML", "CSS"],
    github: "https://github.com/goku237/foodshare",
    year: "2025",
    emoji: "🍲",
  },
  {
    name: "NewsStream",
    category: "Data · APIs",
    tagline: "Trending news aggregator API",
    description:
      "Pulls top stories from Hacker News and Reddit and ranks them with a time-decay engagement score, served through a clean Streamlit interface.",
    features: [
      "Category tabs across 6 domains",
      "Time-decay scoring with log-scaled points",
      "Docker + Caddy deployment with auto-HTTPS",
    ],
    tech: ["Python", "Streamlit", "pandas", "httpx", "Docker"],
    github: "https://github.com/goku237/news_streamlit",
    year: "2025",
    emoji: "📰",
  },
  {
    name: "Sports Buddy",
    category: "Social · Firebase",
    tagline: "Sports matchmaking web app",
    description:
      "A Firebase-powered platform for discovering and creating sports events, with separate admin moderation.",
    features: [
      "Login & register flows",
      "Event creation with category & location",
      "Admin moderation panel",
    ],
    tech: ["Firebase", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/goku237/Sports_buddy",
    year: "2025",
    emoji: "⚽",
  },
  {
    name: "Realtime Translator",
    category: "AI · Voice",
    tagline: "Voice-to-voice language translation",
    description:
      "Translates spoken speech between languages, giving a real-time conversation experience across language barriers.",
    features: [
      "Voice input and spoken output",
      "Multi-language translation",
      "Low-friction conversational UI",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Speech APIs"],
    github: "https://github.com/goku237/realtime_translator",
    year: "2025",
    emoji: "🗣️",
  },
  {
    name: "ATM Management System",
    category: "Academic · DBMS",
    tagline: "Simulated banking system with DB",
    description:
      "A DBMS course project simulating an ATM with a dashboard, database viewer and PIN lockout security.",
    features: [
      "8 banking modules",
      "3-attempt PIN lockout",
      "SQL schema + in-browser DB viewer",
    ],
    tech: ["HTML", "CSS", "JavaScript", "MySQL", "PostgreSQL"],
    github: "https://github.com/goku237/Atm_management_system",
    year: "2025",
    emoji: "🏧",
  },
  {
    name: "AI Route Optimizer",
    category: "AI · Algorithms",
    tagline: "Heuristic shortest-path finder",
    description:
      "A Java application that finds the shortest route between cities using the Best First Search algorithm, with an interactive Swing GUI.",
    features: [
      "Heuristic-driven pathfinding",
      "Interactive route visualisation",
      "Console + GUI modes",
    ],
    tech: ["Java", "Swing", "Best First Search"],
    github: "https://github.com/goku237/route_optimizer",
    year: "2026",
    emoji: "🗺️",
  },
  {
    name: "Weather App",
    category: "Frontend · API",
    tagline: "Minimal live weather lookup",
    description:
      "A clean weather app (defaults to Chennai) showing current temperature, conditions and icons from the OpenWeatherMap API.",
    features: [
      "City search with metric units",
      "Graceful error handling",
      "Weather condition icons",
    ],
    tech: ["React", "OpenWeatherMap API"],
    github: "https://github.com/goku237/weather-app",
    year: "2025",
    emoji: "🌤️",
  },
];
