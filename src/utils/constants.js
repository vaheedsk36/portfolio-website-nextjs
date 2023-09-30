import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaBitbucket,
  FaNodeJs,
  FaGithub,
  FaLinkedin,
  FaGamepad,
} from "react-icons/fa";

import {
  TbBrandCSharp,
  TbBrandJavascript,
  TbBrandCpp,
  TbDatabaseSearch,
  TbBrandBootstrap,
} from "react-icons/tb";
import { BiLogoJquery, BiLogoJava ,BiLogoPhp} from "react-icons/bi";
import {
  SiAdobephotoshop,
  SiExpress,
  SiPostman,
  SiGnubash,
} from "react-icons/si";
import { AiFillCode } from "react-icons/ai";
import {
  BsGlobe,
  BsCodeSlash,
  BsFiletypeSql,
  BsGit,
  BsAndroid2,
} from "react-icons/bs";
import { GiArchiveResearch, GiArtificialIntelligence } from "react-icons/gi";

export const links = [
  { text: "Home", path: "/" },
  { text: "About", path: "/about" },
  { text: "Skills", path: "/skills" },
  { text: "Projects", path: "/projects" },
  { text: "Experience", path: "/experience" },
  { text: "Resume", path: "/resume" },
  { text: "Contact", path: "/contact" },
];

export const interestsData = [
  {
    interest: "Coding",
    icon: BsCodeSlash,
  },
  {
    interest: "Web Development",
    icon: BsGlobe,
  },
  {
    interest: "Mobile App Development",
    icon: BsAndroid2,
  },
  {
    interest: "Software Development",
    icon: AiFillCode,
  },
  {
    interest: "Market Research",
    icon: GiArchiveResearch,
  },
  {
    interest: "Analyst",
    icon: TbDatabaseSearch,
  },
  {
    interest: "Gaming",
    icon: FaGamepad,
  },

];

export const skillsData = [
  {
    name: "HTML5",
    icon: FaHtml5,
  },
  {
    name: "CSS3",
    icon: FaCss3,
  },
  {
    name: "Javascript",
    icon: TbBrandJavascript,
  },
  {
    name: "Jquery",
    icon: BiLogoJquery,
  },
  {
    name: "C#",
    icon: TbBrandCSharp,
  },
  {
    name: "Java",
    icon: BiLogoJava,
  },
  {
    name: "Bootstrap",
    icon: TbBrandBootstrap,
  },
  {
    name: "C/C++",
    icon: TbBrandCpp,
  },
  {
    name: "PHP",
    icon: BiLogoPhp,
  },
  {
    name: "ReactJS",
    icon: FaReact,
  },
  {
    name: "SQL",
    icon: BsFiletypeSql,
  },
  {
    name: "Android",
    icon: BsAndroid2,
  },
  {
    name: "NodeJs",
    icon: FaNodeJs,
  },
  {
    name: "Express",
    icon: SiExpress,
  },
  {
    name: "Photoshop",
    icon: SiAdobephotoshop,
  },
  {
    name: "Postman",
    icon: SiPostman,
  },
  {
    name: "Git",
    icon: BsGit,
  },
  {
    name: "Github",
    icon: FaGithub,
  },
  {
    name: "Bitbucket",
    icon: FaBitbucket,
  },
  {
    name: "ChatGPT",
    icon: GiArtificialIntelligence,
  },
  {
    name: "Bash",
    icon: SiGnubash,
  },
];


export const workData = [
  {
    company: "Freelancer",
    designation: "Computer Development",
    duration: "2018 - 2022",
    companyImg: "freelancer.png",
    description: (
      <>
        <ol>
          <li>
          Capture customer needs.
          </li>
          <li>
          Transmit customer needs to developers.
          </li>
          <li>
          Manage developers to meet customer needs in the creation of websites and mobile applications.
          </li>
          <li>
          Manage clients and ensure customer satisfaction.
          </li>
        </ol>
      </>
    ),
  },
];

export const otherWorkData = [
  {
    company: "Company Bicha et Cie, Morocco",
    designation: "Intern Stock Management Supervisor.",
    duration: "February 2019 - May 2019",
    companyImg: "bicha.png",
    description: (
      <>
        <ul>
          <li>
          Plan deliveries with suppliers.
          </li>
          <li>
          Monitor supplier performance criteria (delivery times, adherence to negotiated terms by the company).
          </li>
          <li>
          Quality and quantity control of goods.
          </li>
          <li>
          Negotiate alternative solutions with suppliers in case of malfunction, sometimes in emergency situations.
          </li>
        </ul>
      </>
    ),
  },
  {
    company: "Zarotti, Morocco",
    designation: "Intern Accounting Assistant.",
    duration: "February 2018 - March 2018",
    companyImg: "zarotti.png",
    description: (
      <>
        <ul>
          <li>
            Engaged in creating comprehensive client-specific and syndicated
            research reports, along with SEO-focused articles and collateral
            materials within the domains of chemicals, materials, consumer
            goods, and industrial goods.
          </li>
          <li>
            Expertly estimated market valuations and conducted primary research
            in collaboration with industry experts to validate data, extract
            valuable market insights.
          </li>
        </ul>
      </>
    ),
  },
];

export const education = [
  {
    company: "Universel College, Montreal",
    designation: "Programming And Technologies Web - Attestation of College Studies",
    duration: "May 2022 - Present",
    companyImg: "universel.png",
    description: (
      <>
      </>
    ),
  },
  {
    company: "Ibn Zohr University, Morocco",
    designation: "Economics and Management Sciences.",
    duration: "2015 - 2018",
    companyImg: "ibnzohr.png",
    description: (
      <>
      </>
    ),
  },
];

export const projectsData = [
  {
    type: "WEB-APP",
    title: "Memory Game",
    image: "memory-games",
    link: "https://boussemousset.github.io/memory-game/",
    source: "https://github.com/BoussemousseT/memory-game",
    description: "It's a game to find 8 pairs of hidden images behind '?' in the grid. Click on two images to reveal them. If they match, they remain displayed; otherwise, they hide again.",
    languages: "Javascript, HTML, CSS",
    team: "Taoufik Boussemousse - Cong Tai Ho",
  },
  {
    type: "WEB-APP",
    title: "Video Game",
    image: "jeu-video-website",
    link: "https://boussemousset.github.io/Site-jeux-video",
    source: "https://github.com/BoussemousseT/Site-jeux-video",
    description: "This website is dedicated to video game enthusiasts. Explore reviews, news, and tips for your favorite games, as well as a vibrant gaming community.",
    languages: "HTML, CSS",
    team: "Taoufik Boussemousse - Kokouvi Biova Arnold Adadji",
  },
  {
    type: "MOBILE-APP",
    title: "Chat AI - Image Text Scanner",
    image: "mobile-app-chat-ai",
    link: "https://play.google.com/store/apps/details?id=com.chatbotai.textscannerbotai",
    source: "https://github.com/BoussemousseT/Chat-AI-Image-Text-Scanner",
    description: "This project was created by me using an open-source text scanner, to which I integrated the ChatGPT API. This application allows the user to send a message directly to ChatGPT and receive a response. It also offers the capability to take an image containing a paragraph of text, convert it to text format, and then send it to ChatGPT. This feature greatly simplifies manual text input, providing a smoother and more convenient experience for interacting with ChatGPT.",
    languages: "Java",
    team: "Taoufik Boussemousse",
  },
  {
    type: "WEB-APP",
    title: "Electronics Store",
    image: "e-boutique-electronique",
    link: null,
    source: "https://github.com/BoussemousseT/Site-web-E-Boutique-mobile-application",
    description: "It is an online sales platform specializing in electronic and technological products. Our website offers a diverse range of high-quality electronic products, ranging from smartphones and laptops to gadgets and electronic accessories.",
    languages: "JavaScript, Reactjs, Bootstrap, HTML, CSS",
    team: "Taoufik Boussemousse  - Evan Cholette - Antoine Ouellet - Cong Tai Ho - Charles-Maximilien Gros - Sara Salek",
  },
  {
    type: "WEB-APP",
    title: "Notes App",
    image: "react-notes-app",
    link: "https://sk36.github.io/react-notes-app/",
    source: "https://github.com/sk36/react-notes-app",
    description: "https://github.com/BoussemousseT",
    languages: "Javascript, HTML, CSS",
    team: "Taoufik Boussemousse - Cong Tai Ho",
  },
  {
    type: "WEB-APP",
    title: "Dice Multiplayer",
    image: "dice-multiplayer",
    link: "https://sk36.github.io/dice-multiplayer",
    source: "https://github.com/sk36/dice-multiplayer",
    description: "https://github.com/BoussemousseT",
    languages: "Javascript, HTML, CSS",
    team: "Taoufik Boussemousse - Cong Tai Ho",
  },
  {
    type: "PROJECT",
    title: "Snake Game",
    image: "snake-game",
    link: "https://sk36.github.io/Snake-game",
    source: "",
    description: "https://github.com/BoussemousseT",
    languages: "Javascript, HTML, CSS",
    team: "Taoufik Boussemousse - Cong Tai Ho",
  },
  {
    type: "PROJECT",
    title: "Delta Assistant",
    image: "delta-assistant",
    link: "",
    source: "https://github.com/sk36/Delta-Desktop-Virtual-Assistant",
    description: "https://github.com/BoussemousseT",
    languages: "Javascript, HTML, CSS",
    team: "Taoufik Boussemousse - Cong Tai Ho",
  },
  {
    type: "WEB-APP",
    title: "Text Utility App",
    image: "text-utility-app",
    link: "https://sk36.github.io/text-utility-app/",
    source: "https://github.com/sk36/text-utility-app",
    description: "https://github.com/BoussemousseT",
    languages: "Javascript, HTML, CSS",
    team: "Taoufik Boussemousse - Cong Tai Ho",
  },
];


export const socialMediaLinks = [
  {
    href: "https://github.com/BoussemousseT",
    icon: FaGithub,
    backgroundColor: "gray.700",
    hoverColor: "gray.600",
  },
  {
    href: "https://www.linkedin.com/in/t-boussemousse/",
    icon: FaLinkedin,
    backgroundColor: "social.linkedin",
    hoverColor: "social.linkedinHover",
  },
  // {
  //   href: "https://twitter.com/codersk36",
  //   icon: FaTwitter,
  //   backgroundColor: "social.twitter",
  //   hoverColor: "social.twitterHover",
  // },
  // {
  //   href: "https://www.instagram.com/taoufik_boussemousse/",
  //   icon: FaInstagram,
  //   backgroundColor: "social.instagram",
  //   hoverColor: "social.instagramHover",
  // },
  // {
  //   href: "https://codersk36.hashnode.dev/",
  //   icon: FaHashnode,
  //   backgroundColor: "social.hashnode",
  //   hoverColor: "social.hashnodeHover",
  // },
];

export const query = `
query GetUserArticles($page: Int = 0) {
  user(username: "") {
    publication {
      posts(page: $page) {
        title
        brief
        slug
        coverImage
      }
    }
  }
}
`;
