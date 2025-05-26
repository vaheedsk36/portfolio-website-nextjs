import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaSass,
  FaPython,
  FaNodeJs,
  FaDocker,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMediumM,
  FaJava
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import {
  TbBrandTypescript,
  TbBrandJavascript,
  TbBrandCpp,
  TbBrandRedux,
  TbBrandBootstrap
} from "react-icons/tb";
import { BiLogoJquery } from "react-icons/bi";
import {
  SiPug,
  SiExpress,
  SiPostman,
  SiGnubash,
  SiNextdotjs,
} from "react-icons/si";
import { AiFillCode } from "react-icons/ai";
import { FaHashnode } from "react-icons/fa6";
import {
  BsGlobe,
  BsCodeSlash,
  BsRobot,
  BsFileBarGraph,
  BsGit
} from "react-icons/bs";
import { GiArchiveResearch, GiArtificialIntelligence } from "react-icons/gi";
import { FcElectronics } from "react-icons/fc";
import { SiTailwindcss } from "react-icons/si";
import { 
  SiVite, 
  SiRabbitmq, 
  SiKeycloak, 
  SiNginx, 
  SiApache, 
  SiLinux,
  SiGitlab,
  SiGithubactions,
  SiMailchimp,
  SiSpringboot,
  SiMongodb,
  SiRedis,
  SiPostgresql,
  SiMysql,
  SiFastapi,
  SiJest,
  SiSelenium,
  SiPlaywright,
  SiHtmx,
  SiC,
  SiLangchain,
  SiFirebase,
  SiSupabase,
  SiWebpack,
  SiMarkdown
} from "react-icons/si";
import { BsBox } from "react-icons/bs";

export const links = [
  { text: "Home", path: "/" },
  { text: "About", path: "/about" },
  { text: "Skills", path: "/skills" },
  { text: "Projects", path: "/projects" },
  { text: "Experience", path: "/experience" },
  { text: "Blogs", path: "/blogs" },
  { text: "Contact", path: "/contact" }
];

export const interestsData = [
  {
    interest: "Software Engineering",
    icon: BsCodeSlash,
  },
  {
    interest: "Tech Blog",
    icon: FaHashnode,
  },
  {
    interest: "Internet of Things",
    icon: FcElectronics,
  },
  {
    interest: "Market Research",
    icon: GiArchiveResearch,
  },
  {
    interest: "Visualization",
    icon: BsFileBarGraph,
  },
  {
    interest: "Software Development",
    icon: AiFillCode,
  },
  {
    interest: "Robotics",
    icon: BsRobot,
  },
  {
    interest: "Web Scraping",
    icon: BsGlobe,
  },
];

export const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      {
        name: "JavaScript",
        icon: TbBrandJavascript,
        color: "#F7DF1E"
      },
      {
        name: "TypeScript",
        icon: TbBrandTypescript,
        color: "#3178C6"
      },
      {
        name: "Python",
        icon: FaPython,
        color: "#3776AB"
      },
      {
        name: "C++",
        icon: TbBrandCpp,
        color: "#00599C"
      },
      {
        name: "C",
        icon: SiC,
        color: "#A8B9CC"
      },
      {
        name: "Java",
        icon: FaJava,
        color: "#007396"
      },
      {
        name: "Bash",
        icon: SiGnubash,
        color: "#4EAA25"
      },
    ]
  },
  {
    category: "JavaScript Frameworks",
    skills: [
      {
        name: "React.js",
        icon: FaReact,
        color: "#61DAFB"
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "#000000"
      },
      {
        name: "Redux",
        icon: TbBrandRedux,
        color: "#764ABC"
      },
      {
        name: "Node.js",
        icon: FaNodeJs,
        color: "#339933"
      },
      {
        name: "Express.js",
        icon: SiExpress,
        color: "#000000"
      },
      {
        name: "Spring Boot",
        icon: SiSpringboot,
        color: "#6DB33F"
      },
      {
        name: "FastAPI",
        icon: SiFastapi,
        color: "#009688"
      },
    ]
  },
  {
    category: "Version Control Systems",
    skills: [
      {
        name: "Git",
        icon: BsGit,
        color: "#F05032"
      },
      {
        name: "GitLab",
        icon: SiGitlab,
        color: "#FC6D26"
      },
      {
        name: "GitHub Actions",
        icon: SiGithubactions,
        color: "#2088FF"
      },
    ]
  },
  {
    category: "Web Technologies",
    skills: [
      {
        name: "HTML5",
        icon: FaHtml5,
        color: "#E34F26"
      },
      {
        name: "CSS3",
        icon: FaCss3,
        color: "#1572B6"
      },
      {
        name: "SASS",
        icon: FaSass,
        color: "#CC6699"
      },
      {
        name: "Bootstrap",
        icon: TbBrandBootstrap,
        color: "#7952B3"
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#06B6D4"
      },
      {
        name: "jQuery",
        icon: BiLogoJquery,
        color: "#0769AD"
      },
      {
        name: "Vite",
        icon: SiVite,
        color: "#646CFF"
      },
      {
        name: "Parcel",
        icon: BsBox,
        color: "#2D8CFF"
      },
      {
        name: "Webpack",
        icon: SiWebpack,
        color: "#8DD6F9"
      },
      {
        name: "PugJS",
        icon: SiPug,
        color: "#A86454"
      },
      {
        name: "MJML",
        icon: SiMailchimp,
        color: "#FF0080"
      },
      {
        name: "HTMX",
        icon: SiHtmx,
        color: "#1A1A1A"
      },
      {
        name: "RESTful APIs",
        icon: SiExpress,
        color: "#000000"
      },
      {
        name: "Postman",
        icon: SiPostman,
        color: "#FF6C37"
      },
      {
        name: "Markdown",
        icon: SiMarkdown,
        color: "#000000"
      },
    ]
  },
  {
    category: "Databases",
    skills: [
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "#336791"
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "#47A248"
      },
      {
        name: "Redis",
        icon: SiRedis,
        color: "#DC382D"
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "#4479A1"
      },
      {
        name: "Firebase",
        icon: SiFirebase,
        color: "#FFCA28"
      },
      {
        name: "Supabase",
        icon: SiSupabase,
        color: "#3ECF8E"
      },
    ]
  },
  {
    category: "Testing Tools",
    skills: [
      {
        name: "Jest",
        icon: SiJest,
        color: "#C21325"
      },
      {
        name: "Selenium",
        icon: SiSelenium,
        color: "#43B02A"
      },
      {
        name: "Playwright",
        icon: SiPlaywright,
        color: "#2EAD33"
      },
    ]
  },
  {
    category: "AI & Development Tools",
    skills: [
      {
        name: "RAG",
        icon: GiArtificialIntelligence,
        color: "#FF6B6B"
      },
      {
        name: "LangChain",
        icon: BsRobot,
        color: "#00A67E"
      },
      {
        name: "Prompt Engineering",
        icon: GiArtificialIntelligence,
        color: "#FF6B6B"
      },
      {
        name: "Docker",
        icon: FaDocker,
        color: "#2496ED"
      },
      {
        name: "RabbitMQ",
        icon: SiRabbitmq,
        color: "#FF6600"
      },
      {
        name: "Keycloak",
        icon: SiKeycloak,
        color: "#EDEDED"
      },
      {
        name: "Nginx",
        icon: SiNginx,
        color: "#009639"
      },
      {
        name: "Apache",
        icon: SiApache,
        color: "#D22128"
      },
      {
        name: "Linux",
        icon: SiLinux,
        color: "#FCC624"
      },
    ]
  }
];

export const workData = [
  {
    company: "1Digitalstack.ai",
    companyImg: "1ds.jpg",
    roles: [
      {
        designation: "Software Engineer 3",
        duration: "April 2025 - Present",
        description: (
          <>
            <ul>
              <li>
                Spearheaded the design and development of a chatbot using Retrieval-Augmented Generation (RAG) for actionable insights in e-commerce.
              </li>
              <li>
                Built frontend, backend, and integrated with RAG-based APIs to enable analytics and automate actions.
              </li>
            </ul>
          </>
        ),
      },
      {
        designation: "Software Engineer 2",
        duration: "April 2024 - March 2025",
        description: (
          <>
            <ul>
              <li>
                Developed a self-serve email platform for ecommerce companies with a custom drag-and-drop editor.
              </li>
              <li>
                Implemented scheduling functionality for dashboard updates and performance reports.
              </li>
              <li>
                Collaborated with cross-functional teams to ensure seamless integration and user-friendly experience.
              </li>
            </ul>
          </>
        ),
      },
      {
        designation: "Software Engineer 1",
        duration: "March 2022 - March 2024",
        description: (
          <>
            <ul>
              <li>
                Worked on Reviniti, a bid manager and analytics product for players operating in e-commerce platforms.
              </li>
              <li>
                Solely migrated the old codebase from PugJS to React-TypeScript, implementing efficient state management, authentication, reusable components and layouts.
              </li>
              <li>
                Key responsibilities included:
                <ul style={{ marginLeft: "2rem", marginTop: "0.5rem" }}>
                  <li>Developing new features and REST APIs</li>
                  <li>Code refactoring and performance optimization</li>
                  <li>Bug fixing and product testing</li>
                  <li>Writing data acquisition scripts</li>
                  <li>Contributing to product scalability</li>
                </ul>
              </li>
            </ul>
          </>
        ),
      }
    ]
  },
  {
    company: "Fact.MR",
    companyImg: "fmr.svg",
    roles: [
      {
        designation: "Associate Consultant Level-1",
        duration: "December 2020 - July 2021",
        description: (
          <>
            <ul>
              <li>
                Developed and implemented automated data collection systems using Python, resulting in 70% faster market analysis processes. Created dynamic PowerBI dashboards that provided real-time market insights, leading to a 40% increase in client engagement and a 25% improvement in report delivery times.
              </li>
            </ul>
          </>
        ),
      }
    ]
  },
];

export const projectsData = [
  {
    type: "WEB-APP",
    title: "Movie Magnet",
    image: "movie-magnet",
    link: "https://movie-magnet-smoky.vercel.app/",
    source: "https://github.com/vaheedsk36/movie-magnet",
  },
  {
    type: "WEB-APP",
    title: "Portfolio Website",
    image: "portfolio-website",
    link: null,
    source: "https://github.com/vaheedsk36/portfolio-website-nextjs",
  },
  {
    type: "WEB-APP",
    title: "Weather App",
    image: "weather-app",
    link: "https://vaheedsk36.github.io/weather-app/",
    source: "https://github.com/vaheedsk36/weather-app",
  },
  {
    type: "WEB-APP",
    title: "Landing Page",
    image: "landing-page",
    link: "https://vaheedsk36.github.io/demo-frontend-bootcamp",
    source: "https://github.com/vaheedsk36/demo-frontend-bootcamp",
  },
  {
    type: "WEB-APP",
    title: "Guess Game",
    image: "guess-game",
    link: "https://vaheedsk36.github.io/guess-my-number",
    source: "https://github.com/vaheedsk36/guess-my-number",
  },
  {
    type: "WEB-APP",
    title: "Notes App",
    image: "react-notes-app",
    link: "https://vaheedsk36.github.io/react-notes-app/",
    source: "https://github.com/vaheedsk36/react-notes-app",
  },
  {
    type: "WEB-APP",
    title: "Dice Multiplayer",
    image: "dice-multiplayer",
    link: "https://vaheedsk36.github.io/dice-multiplayer",
    source: "https://github.com/vaheedsk36/dice-multiplayer",
  },
  {
    type: "PROJECT",
    title: "Snake Game",
    image: "snake-game",
    link: "https://vaheedsk36.github.io/Snake-game",
    source: "",
  },
  {
    type: "PROJECT",
    title: "Delta Assistant",
    image: "delta-assistant",
    link: "",
    source: "https://github.com/vaheedsk36/Delta-Desktop-Virtual-Assistant",
  },
  {
    type: "WEB-APP",
    title: "Text Utility App",
    image: "text-utility-app",
    link: "https://vaheedsk36.github.io/text-utility-app/",
    source: "https://github.com/vaheedsk36/text-utility-app",
  },
];


export const socialMediaLinks = [
  {
    href: "https://github.com/vaheedsk36",
    icon: FaGithub,
    backgroundColor: "gray.700",
    hoverColor: "gray.600",
  },
  {
    href: "https://www.instagram.com/codersk36/",
    icon: FaInstagram,
    backgroundColor: "social.instagram",
    hoverColor: "social.instagramHover",
  },
  {
    href: "https://www.linkedin.com/in/sk36/",
    icon: FaLinkedin,
    backgroundColor: "social.linkedin",
    hoverColor: "social.linkedinHover",
  },
  {
    href: "https://twitter.com/codersk36",
    icon: FaXTwitter,
    backgroundColor: "gray.700",
    hoverColor: "gray.600",
  },
  {
    href: "https://codersk36.hashnode.dev/",
    icon: FaHashnode,
    backgroundColor: "social.hashnode",
    hoverColor: "social.hashnodeHover",
  },
  {
    href: "https://medium.com/@vaheedsk36",
    icon: FaMediumM,
    backgroundColor: "gray.700",
    hoverColor: "gray.600",
  }
];

export const query = `
query Publication($after: String) {
  publication(host: "codersk36.hashnode.dev") {
    posts(first: 20, after: $after) {
      totalDocuments
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          title
          brief
          slug
          publishedAt
          coverImage {
            url
          }
        }
      }
    }
  }
}

`;


