import { BsLinkedin, BsGithub, BsWhatsapp, BsTelegram } from "react-icons/bs";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  nextjs,
  sass,
  springboard,
  beebtech,
  Crown,
  Shareme,
  Threads,
  Faceapp,
  postgres,
  Jotion,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: web,
  },
  {
    title: "JavaScript Developer",
    icon: backend,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Redux Toolkit",
    icon: redux,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Sass",
    icon: sass,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostgresSQL",
    icon: postgres,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Junior Frontend Developer",
    company_name: "Springboard Language Academy",
    icon: springboard,
    iconBg: "#383E56",
    date: "May 2022 - Mar 2023",
    points: [
      "Coded using React to develop features for both mobile and desktop platforms.",
      "Collaborating with cross-functional teams including UX/UI designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Designed and updated layouts to meet usabilty and performance requirements.",
      "Worked with Git version control to manage code.",
      "Increased productivity with more than 50%.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company_name: "Beebtech",
    icon: beebtech,
    iconBg: "#E6DEDD",
    date: "Oct 2020 - Dec 2021",
    points: [
      "Researched emerging web technologies and trends for possible incorpration into sites.",
      "Teamed on user centric design strategy in translation of UX and business requirements into coded solutions.",
      "Produced websites compatible with multiple browsers.",
      "Designed and updated layouts to meet usability and performance requirements.",
      "coded using HTML, CSS and JavaScript to develop features for both mobile and desktop platforms.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Jotion",
    description:
      "A robust web based notion-like app, which include Notion-style editing, light/dark modes, infinite documents, and secure authentication. Effortlessly manage files, experience responsive design, publish notes online, and recover deleted files.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "convex",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "clerk",
        color: "green-text-gradient",
      },
      {
        name: "edgestore",
        color: "blue-text-gradient",
      },
    ],
    image: Jotion,
    source_code_link: "https://github.com/kishky101/Jotion",
    live_link: "https://notes-app-red-kappa.vercel.app/",
  },
  {
    name: "Crown Clothing",
    description:
      "An exceptional web-based E-commerce venture, providing robust user authentication, seamless product browsing, detailed product insights, effortless cart management including addition and removal of items, streamlined checkout process, and secure credit card payment functionality.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "styled-component",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "blue-text-gradient",
      },
    ],
    image: Crown,
    source_code_link: "https://github.com/kishky101/crown-clothing",
    live_link: "https://crown-clothingreact.netlify.app/",
  },
  {
    name: "Shareme",
    description:
      "A cutting-edge web-based social media application tailored for image aficionados. This innovative platform offers streamlined user authentication via Google, effortless sharing of captivating images with fellow users, the convenience of downloading and saving shared visuals, interactive engagement through comments, and a sophisticated image search functionality.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "sanity",
        color: "blue-text-gradient",
      },
    ],
    image: Shareme,
    source_code_link: "https://github.com/kishky101/shareit_frontend",
    live_link: "https://lets-shareit.netlify.app/",
  },
  {
    name: "Threads",
    description:
      "A sophisticated web-based social media platform that excels in user authentication, effortless thread sharing, engaging multi-level thread commenting, comprehensive activity tracking, seamless organization creation, user-invite functionality for organizations, and intelligent user and organization suggestions for an enriched viewing experience.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "clerk",
        color: "blue-text-gradient",
      },
    ],
    image: Threads,
    source_code_link: "https://github.com/kishky101/Threads_app",
    live_link: "https://threads-app-delta.vercel.app/",
  },
  {
    name: "Face Recognition",
    description:
      "An advanced facial recognition application, seamlessly integrating user authentication. This state-of-the-art app empowers users to submit image URLs via an intuitive input element, triggering the emergence of a highlighted box around detected faces within the image.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tachyons",
        color: "pink-text-gradient",
      },
      {
        name: "Node",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "postgresSQL",
        color: "blue-text-gradient",
      },
    ],
    image: Faceapp,
    source_code_link: "https://github.com/kishky101/face-recognition",
    live_link: "https://face-recognition-app-wwfg.onrender.com/",
  },
];

const links = [
  {
    name: "Linkedin",
    icon: BsLinkedin,
    url: "https://www.linkedin.com/in/kishky101/",
  },
  {
    name: "Github",
    icon: BsGithub,
    url: "https://github.com/kishky101",
  },
  {
    name: "Whatsapp",
    icon: BsWhatsapp,
    url: "https://wa.me/48733026916",
  },
  {
    name: "Telegram",
    icon: BsTelegram,
    url: "https://t.me/+48733026916",
  },
];

export { services, technologies, experiences, testimonials, projects, links };
