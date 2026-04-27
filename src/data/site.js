export const site = {
  name: "Masood Akhtar Vaheed",
  shortName: "Vaheed Shaik",
  initials: "mav",
  role: "Software Engineer",
  tagline:
    "Full-stack engineer at 1Digitalstack.ai. 4+ years building production platforms — from migrations and APIs to AI-augmented analytics.",
  pillStatus: "Full-Stack Engineer · Open for Freelance",
  location: "Hyderabad, India",
  email: "vaheedsk36@gmail.com",
  resume: "/files/vaheed_cv.pdf",
  url: "https://vaheedshaik.tech",
  replyWithin: "Replies within a day.",
  avatar: "/images/profile-casual.jpg",
  portrait: "/images/profile-blazer.jpg",
};

export const socials = [
  { label: "GitHub", href: "https://github.com/vaheedsk36", handle: "@vaheedsk36" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sk36/", handle: "@sk36" },
  { label: "Medium", href: "https://medium.com/@vaheedsk36", handle: "@vaheedsk36" },
  { label: "Instagram", href: "https://www.instagram.com/codersk36/", handle: "@codersk36" },
  { label: "X", href: "https://twitter.com/codersk36", handle: "@codersk36" },
];

export const about = [
  "I'm a full-stack engineer with 4+ years at 1Digitalstack.ai. My day-to-day swings between modernizing legacy stacks, designing performant APIs, shipping the user-facing layers, and lately, building configuration-driven analytics dashboards with AI-augmented insights.",
  "Some recent wins: a solo PugJS → React migration on Reviniti — our e-commerce analytics product — that delivered 40% page-load gains and shaved development cycles in half; a self-serve newsletter platform with a custom drag-and-drop editor that drove a 40% lift in engagement; and a Sphinx-backed search system over 1M+ records that's now 70% faster.",
  "I reach for TypeScript, React, Node, Postgres, and Docker. I mentor the junior engineers on my team, write occasionally on Medium, and stay close to where the AI-tooling stack is heading (currently exploring MCP and agentic patterns).",
];

export const currently = [
  { label: "Currently", value: "Software Engineer 3 @ 1Digitalstack.ai" },
  { label: "Exploring", value: "Model Context Protocol (MCP), LangChain agents" },
  { label: "Reading", value: "Designing Data-Intensive Applications" },
];

export const experience = [
  {
    company: "1Digitalstack.ai",
    location: "Remote",
    roles: [
      {
        title: "Software Engineer 3",
        period: "Apr 2025 — Present",
        bullets: [
          "Leading the development of a configuration-driven analytics dashboard with AI-powered insights for enterprise decision-making.",
          "Collaborating on a market-intelligence chatbot interface powered by LangChain — built the frontend and middleware service.",
          "Mentoring junior engineers through planning sessions, code reviews, and 1:1 guidance.",
          "Cross-functional collaboration to streamline analytics workflows across product and ops.",
        ],
        stack: ["React", "TypeScript", "Node.js", "LangChain", "PostgreSQL"],
      },
      {
        title: "Software Engineer 2",
        period: "Apr 2024 — May 2025",
        bullets: [
          "Built a self-serve newsletter platform for e-commerce sellers, with a custom drag-and-drop editor — 40% lift in engagement.",
          "Implemented scheduling for dashboard updates and automated performance reports.",
          "Partnered with cross-functional teams to ship integrated, user-friendly flows end-to-end.",
        ],
        stack: ["React", "TypeScript", "Node.js", "MJML", "PostgreSQL"],
      },
      {
        title: "Software Engineer 1",
        period: "Mar 2022 — Mar 2024",
        bullets: [
          "Worked on Reviniti — a bid manager + analytics product for e-commerce platforms.",
          "Solo-migrated the codebase from PugJS to React + TypeScript end-to-end, with proper state management, auth, and a reusable component layer — 40% perf gain, 50% faster dev cycles.",
          "Designed scalable REST APIs and a Sphinx-based search system over 1M+ records — 70% faster search times.",
          "Architected an Apache Superset-based BI integration serving 50+ enterprise clients — 30% fewer custom-report requests.",
        ],
        stack: ["React", "TypeScript", "PugJS", "Webpack", "Node.js", "PostgreSQL", "Redis", "Sphinx", "Apache Superset"],
      },
    ],
  },
  {
    company: "Fact.MR",
    location: "Pune, India",
    roles: [
      {
        title: "Associate Consultant L1",
        period: "Dec 2020 — Jul 2021",
        bullets: [
          "Built automated data-collection systems in Python — 70% faster market analysis processes.",
          "Designed Power BI dashboards used by clients — 40% engagement increase, 25% faster report delivery.",
        ],
        stack: ["Python", "SQL", "Power BI"],
      },
    ],
  },
];

export const selectedWork = [
  {
    slug: "reviniti-migration",
    year: "2022 — 2024",
    title: "Reviniti — PugJS → React/TS migration",
    blurb:
      "Solo-migrated a critical e-commerce analytics codebase from PugJS to React + TypeScript end-to-end, with proper state management, auth, and a reusable component layer. 40% perf gain, 50% faster development cycles.",
    stack: ["React", "TypeScript", "Webpack", "Node.js", "PostgreSQL"],
    href: null,
    repo: null,
    confidential: true,
  },
  {
    slug: "newsletter-platform",
    year: "2024",
    title: "Self-serve newsletter platform",
    blurb:
      "Drag-and-drop email editor + scheduler for e-commerce sellers. Analytics dashboard drove a 40% lift in user engagement.",
    stack: ["React", "TypeScript", "Node.js", "MJML", "PostgreSQL"],
    href: null,
    repo: null,
    confidential: true,
  },
  {
    slug: "ai-analytics-dashboard",
    year: "2025",
    title: "Config-driven analytics dashboard (AI insights)",
    blurb:
      "Configuration-driven analytics surface with AI-augmented insights for enterprise decision-making. Currently shipping at 1Digitalstack.ai.",
    stack: ["React", "TypeScript", "Node.js", "LangChain"],
    href: null,
    repo: null,
    confidential: true,
  },
  {
    slug: "market-intel-chatbot",
    year: "2025",
    title: "Market-intelligence chatbot — FE & middleware",
    blurb:
      "Frontend and middleware service for a LangChain-powered market-intelligence chatbot — collaborative effort with the data and platform teams.",
    stack: ["React", "TypeScript", "Node.js", "LangChain"],
    href: null,
    repo: null,
    confidential: true,
  },
  {
    slug: "sphinx-search-apis",
    year: "2023",
    title: "REST APIs + Sphinx search",
    blurb:
      "Designed scalable REST APIs with caching and a Sphinx-based search system over 1M+ records — 70% faster search times.",
    stack: ["Node.js", "Sphinx", "Redis", "PostgreSQL"],
    href: null,
    repo: null,
    confidential: true,
  },
];

export const archive = [
  { year: "2025", title: "Config-driven analytics dashboard (AI insights)", made: "1Digitalstack.ai", stack: ["React", "TypeScript", "LangChain"], href: null },
  { year: "2025", title: "Market-intelligence chatbot — FE & middleware", made: "1Digitalstack.ai", stack: ["React", "TypeScript", "LangChain"], href: null },
  { year: "2024", title: "Self-serve newsletter platform", made: "1Digitalstack.ai", stack: ["React", "TypeScript", "Node.js", "MJML"], href: null },
  { year: "2023", title: "Apache Superset BI platform (50+ clients)", made: "1Digitalstack.ai", stack: ["React", "Apache Superset", "PostgreSQL"], href: null },
  { year: "2023", title: "REST APIs + Sphinx search (1M+ records)", made: "1Digitalstack.ai", stack: ["Node.js", "Sphinx", "Redis"], href: null },
  { year: "2022 — 2024", title: "Reviniti — PugJS → React/TS migration", made: "1Digitalstack.ai", stack: ["React", "TypeScript", "Webpack"], href: null },
  { year: "2024", title: "Movie Magnet", made: "Side", stack: ["React", "Vite"], href: "https://movie-magnet-smoky.vercel.app/", repo: "https://github.com/vaheedsk36/movie-magnet" },
  { year: "2023", title: "Portfolio website (v1)", made: "Side", stack: ["Next.js", "Chakra UI"], repo: "https://github.com/vaheedsk36/portfolio-website-nextjs" },
  { year: "2022", title: "Notes App", made: "Side", stack: ["React"], href: "https://vaheedsk36.github.io/react-notes-app/", repo: "https://github.com/vaheedsk36/react-notes-app" },
  { year: "2022", title: "Weather App", made: "Side", stack: ["JavaScript", "OpenWeather API"], href: "https://vaheedsk36.github.io/weather-app/", repo: "https://github.com/vaheedsk36/weather-app" },
  { year: "2021", title: "Text Utility App", made: "Side", stack: ["React"], href: "https://vaheedsk36.github.io/text-utility-app/", repo: "https://github.com/vaheedsk36/text-utility-app" },
  { year: "2021", title: "Delta — desktop voice assistant", made: "Side", stack: ["Python"], repo: "https://github.com/vaheedsk36/Delta-Desktop-Virtual-Assistant" },
  { year: "2021", title: "Landing page", made: "Side", stack: ["HTML", "CSS", "Bootstrap"], href: "https://vaheedsk36.github.io/demo-frontend-bootcamp", repo: "https://github.com/vaheedsk36/demo-frontend-bootcamp" },
  { year: "2020 — 2021", title: "Power BI dashboards + Python collectors", made: "Fact.MR", stack: ["Python", "Power BI", "SQL"], href: null },
  { year: "2020", title: "Dice Multiplayer", made: "Side", stack: ["JavaScript"], href: "https://vaheedsk36.github.io/dice-multiplayer", repo: "https://github.com/vaheedsk36/dice-multiplayer" },
  { year: "2020", title: "Guess my Number", made: "Side", stack: ["JavaScript"], href: "https://vaheedsk36.github.io/guess-my-number", repo: "https://github.com/vaheedsk36/guess-my-number" },
  { year: "2020", title: "Snake Game", made: "Side", stack: ["JavaScript"], href: "https://vaheedsk36.github.io/Snake-game" },
];

export const stack = {
  reachFor: ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "Redis", "Docker", "REST APIs", "Tailwind CSS"],
  comfortable: ["JavaScript", "Python", "Express", "MongoDB", "LangChain", "MJML", "Webpack", "Vite", "PugJS", "Bootstrap", "SASS", "Trino", "RabbitMQ", "Keycloak", "Nginx", "Apache", "Git", "GitHub Actions", "GitLab", "Apache Superset", "Sphinx"],
  pastLife: ["jQuery", "Power BI", "Excel"],
};

export const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "Writing", href: "/#writing" },
  { label: "About", href: "/#about" },
  { label: "Archive", href: "/archive" },
  { label: "Uses", href: "/uses" },
];

export const stats = [
  { value: 4, suffix: "+", label: "Years at 1Digitalstack" },
  { value: 5, suffix: "", label: "Prod projects shipped" },
  { value: 50, suffix: "+", label: "Enterprise clients served" },
];

export const techMarquee = {
  row1: [
    { name: "TypeScript", icon: "TbBrandTypescript", color: "#3178C6" },
    { name: "React", icon: "FaReact", color: "#61DAFB" },
    { name: "Next.js", icon: "SiNextdotjs", color: "#FFFFFF" },
    { name: "Node.js", icon: "FaNodeJs", color: "#22C55E" },
    { name: "Express", icon: "SiExpress", color: "#FFFFFF" },
    { name: "Python", icon: "FaPython", color: "#3776AB" },
    { name: "Tailwind", icon: "SiTailwindcss", color: "#06B6D4" },
    { name: "Redux", icon: "TbBrandRedux", color: "#A78BFA" },
    { name: "Vite", icon: "SiVite", color: "#A78BFA" },
    { name: "REST APIs", icon: "SiPostman", color: "#FF6C37" },
  ],
  row2: [
    { name: "PostgreSQL", icon: "SiPostgresql", color: "#4DB8FF" },
    { name: "MongoDB", icon: "SiMongodb", color: "#22C55E" },
    { name: "Redis", icon: "SiRedis", color: "#F97316" },
    { name: "Docker", icon: "FaDocker", color: "#2496ED" },
    { name: "LangChain", icon: "SiLangchain", color: "#22D3EE" },
    { name: "RabbitMQ", icon: "SiRabbitmq", color: "#F97316" },
    { name: "Nginx", icon: "SiNginx", color: "#22C55E" },
    { name: "Linux", icon: "SiLinux", color: "#FACC15" },
    { name: "Git", icon: "BsGit", color: "#F97316" },
    { name: "GitHub Actions", icon: "SiGithubactions", color: "#A78BFA" },
  ],
};

export const uses = {
  hardware: [
    { label: "Laptop", value: "MacBook Pro" },
    { label: "Keyboard", value: "Logitech MX Mechanical Mini" },
    { label: "Mouse", value: "Logitech MX Master" },
    { label: "Audio", value: "Sony WH-1000XM4" },
  ],
  editor: [
    { label: "Editor", value: "VS Code" },
    { label: "AI pairing", value: "Claude Code" },
    { label: "Terminal", value: "Warp / iTerm2 with Zsh" },
    { label: "Font", value: "Geist Mono, JetBrains Mono" },
  ],
  daily: [
    { label: "Notes", value: "Obsidian, plain Markdown" },
    { label: "Tasks", value: "Linear at work, paper at home" },
    { label: "Browser", value: "Arc, Chrome for DevTools" },
    { label: "Music", value: "Spotify on loop while shipping" },
  ],
};
