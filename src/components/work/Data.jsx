import work2 from "../../assets/work2.png";
import carrotar from "../../assets/Carrotar.PNG";
import work6 from "../../assets/work6.JPG";
import Rph from "../../assets/rph.PNG";
import TL from "../../assets/teacherLunch.JPG";
import GlossHammer from "../../assets/gloss.JPG";
import Diyafah from "../../assets/diyafah.png";
import regive from "../../assets/regive.png";
import edsidera from "../../assets/edsidera.png";
import skillSync from "../../assets/skillSync.png";

export const projectData = [
  {
    id: 1,
    image: edsidera,
    title: "Edsidera - EdTech Platform",
    category: "fullstack",
    description:
      "A comprehensive EdTech solution for school onboarding and student management. Developed the full-stack web portal and mobile backend, featuring Stripe integration for fee payments, learning material management, and real-time push notifications via FCM. Engineered with a robust NestJS architecture using TypeORM.",
    tech: ["Next.js", "NestJS", "Stripe", "TypeORM", "PostgreSQL", "FCM",],
    link: "https://edsidera.com/",
  },
  {
    id: 2,
    image: TL,
    title: "Teacher Lunch",
    category: "fullstack",
    description:
      "A full-stack web application developed using Next.js, NestJS, Tailwind CSS, and PostgreSQL. It includes real-time communication with Socket.io, secure authentication",
    tech: ["Tailwind Css", "Next Js", "Nest js", "Socket", "PosgresSql"],
    link: "https://teacher-web.futurbyte.co/auth/sign-in",
  },
  {
    id: 3,
    image: Diyafah,
    title: "Diyafah School (UAE)",
    category: "frontend",
    description:
      "A sophisticated educational platform for a prominent school in Abu Dhabi, UAE. Developed with Next.js and Tailwind CSS for high performance, featuring smooth Framer Motion animations and dynamic content managed via Strapi CMS.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Strapi CMS"],
    link: "https://diyafahinternationalschool.com/",
  },
  {
    id: 4,
    image: regive,
    title: "Regive Hub (App & Admin)",
    category: "backend",
    description:
      "Engineered a scalable backend for a live community-driven marketplace. Developed real-time features including Chat and Voice calls using Socket.io, and integrated FCM for push notifications. Managed complex data relations for product listings, user interactions (follow, review, like), and an onboarding system.",
    tech: ["NestJS", "PostgreSQL", "Socket.io", "Firebase (FCM)", "AWS S3"],
    link: "https://play.google.com/store/apps/details?id=com.futurbyte.regive.hub&hl=en",
  },

  {
    id: 5,
    image: skillSync,
    title: "SkillSync - Service Marketplace",
    category: "backend",
    description:
      "Developed a robust backend for an on-demand service platform (Babysitting, Trainers, etc.). Engineered features for hourly-based bookings, location-aware service posts, and social media elements like feeds, likes, and comments. Integrated Stripe for secure service transactions and FCM for real-time booking alerts.",
    tech: [
      "NestJS",
      "PostgreSQL",
      "Stripe",
      "Socket.io",
      "Firebase (FCM)",
      "TypeORM",
    ],
    link: "https://play.google.com/store/apps/details?id=com.futurbyte.skill.sync&hl=en",
  },
  {
    id: 6,
    image: GlossHammer,
    title: "Gloss & Hammer",
    category: "fullstack",
    description:
      "A business management dashboard developed using Node.js, Express.js, Next.js, and MUI. It provides a sleek and intuitive interface for managing users.",
    tech: ["Node.js", "Express.js", "Next.js", "MUI"],
    link: "https://glossandhammer-web.futurbyte.co/",
  },
  {
    id: 7,
    image: Rph,
    title: "Research Publishing House",
    category: "frontend",
    description:
      "A responsive website built with React, Tailwind CSS, Node.js, Express.js, PHP, and MySQL/MongoDB for seamless user experience across devices.",
    tech: [
      "Tailwind Css",
      "React Js",
      "Node js",
      "Express js",
      "Mongodb",
      "MySql",
    ],
    link: "https://researchpublishinghouse.com/",
  },
  {
    id: 8,
    image: work6,
    title: "Coffee Shop",
    category: "frontend",
    description:
      "Build a simple Todo app with React, featuring add, delete, and delete all functionality for managing tasks efficiently.",
    tech: ["Tailwind Css", "ReactJs", "Next js"],
    link: "https://coffee-store-nextjs-ktg9-git-main-mshafyalis-projects.vercel.app/",
  },
  {
    id: 9,
    image: work2,
    title: "Youtube Clone",
    category: "frotend",
    description:
      "YouTube clone using React, creating a user-friendly interface for a seamless viewing experience",
    tech: ["Html", "CSS", "ReactJs", "Rest APIs"],
    link: "#",
  },
  {
    id: 10,
    image: carrotar,
    title: "Carrotar Landing Page",
    category: "frontend",
    description:
      "I have developed this page following a detailed design from Figma.The page features a sleek & modern interface,optimized for user experience & responsiveness.",
    tech: ["Tailwand", "ReactJs"],
    link: "https://carrator-landing-page.vercel.app/",
  },
];

export const projectsNav = [
  { name: "all" },
  { name: "frontend" },
  { name: "backend" },
  { name: "fullstack" },
];
