import carrotar from "../../assets/Carrotar.PNG";
import work6 from "../../assets/work6.JPG";
import Rph from "../../assets/rph.PNG";
import TL from "../../assets/teacherLunch.JPG";
import GlossHammer from "../../assets/gloss.JPG";
import Diyafah from "../../assets/diyafah.png";
import regive from "../../assets/regive.png";
import edsidera from "../../assets/edsidera.png";
import skillSync from "../../assets/skillSync.png";
import ourLive from "../../assets/ourLive.png";
import fb from "../../assets/fb.png";
import encoder from "../../assets/encoder.png";
import fme from "../../assets/fme.png";
import Lynx from "../../assets/Lynx.png";

export const projectData = [
  {
    id: 1,
    image: edsidera,
    title: "Edsidera - EdTech Platform",
    category: "fullstack",
    description:
      "A comprehensive EdTech solution for school onboarding and student management. Developed the full-stack web portal and mobile backend, featuring Stripe integration for fee payments, learning material management, and real-time push notifications via FCM. Engineered with a robust NestJS architecture using TypeORM.",
    tech: ["Next.js", "NestJS", "Stripe", "TypeORM", "PostgreSQL", "FCM"],
    link: "https://edsidera.com/",
  },
  {
    id: 2,
    image: regive,
    title: "Regive Hub (App & Admin)",
    category: "backend",
    description:
      "Engineered a scalable backend for a live community-driven marketplace. Developed real-time features including Chat and Voice calls using Socket.io, and integrated FCM for push notifications. Managed complex data relations for product listings, user interactions (follow, review, like), and an onboarding system.",
    tech: ["NestJS", "PostgreSQL", "Socket.io", "Firebase (FCM)", "AWS S3"],
    link: "https://play.google.com/store/apps/details?id=com.futurbyte.regive.hub&hl=en",
  },
  {
    id: 3,
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
    id: 4,
    image: ourLive,
    title: "OurLive - Streaming Platform",
    category: "backend",
    description:
      "Architected a high-concurrency backend for a global live streaming ecosystem. Integrated WebRTC for low-latency real-time communication and Socket.io for interactive fan engagement. Managed a diverse world of culture through seamless content delivery and live talent sharing features.",
    tech: [
      "NestJS",
      "PostgreSQL",
      "WebRTC",
      "Socket.io",
      "Firebase (FCM)",
      "TypeORM",
    ],
    link: "https://play.google.com/store/apps/details?id=com.ourlive.app&hl=en",
  },
  {
    id: 5,
    image: Diyafah,
    title: "Diyafah School (UAE)",
    category: "frontend",
    description:
      "A sophisticated educational platform for a prominent school in Abu Dhabi, UAE. Developed with Next.js and Tailwind CSS for high performance, featuring smooth Framer Motion animations and dynamic content managed via Strapi CMS.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Strapi CMS"],
    link: "https://diyafahinternationalschool.com/",
  },
  {
    id: 6,
    image: TL,
    title: "Teacher Lunch",
    category: "fullstack",
    description:
      "A full-stack web application developed using Next.js, NestJS, Tailwind CSS, and PostgreSQL. It includes real-time communication with Socket.io, secure authentication",
    tech: ["Tailwind Css", "Next Js", "Nest js", "Socket", "PosgresSql"],
    link: "https://apps.apple.com/in/app/the-teachers-lunch/id6751944050",
  },
  {
    id: 7,
    image: fb,
    title: "Futurbyte Official Website",
    category: "frontend",
    description:
      "Developed the official corporate website for Futurbyte, a leading software development firm. Focused on a high-performance, SEO-friendly architecture using Next.js, featuring modern UI components and smooth aesthetic transitions with Framer Motion.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "React Hook Form"],
    link: "https://futurbyte.co/",
  },
  {
    id: 8,
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
    id: 9,
    image: encoder,
    title: "Encoders - Software Agency",
    category: "frontend",
    description:
      "Developed the official platform for Encoders, a software development agency. Implemented a highly responsive design with Next.js and Tailwind CSS, featuring smooth Framer Motion interactions and integrated Tawk.to live chat for real-time client engagement.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Tawk.to"],
    link: "https://encoders.com.pk/",
  },

  {
    id: 10,
    image: fme,
    title: "HMS FMCE Dubai - Sports Medicine",
    category: "fullstack",
    description:
      "A comprehensive full-stack platform for a FIFA-accredited sports medicine centre in Dubai. Engineered with Next.js and Tailwind CSS, featuring a customized Strapi CMS dashboard that empowers the client to manage medical content and fitness data independently.",
    tech: ["Next.js", "Strapi CMS", "PostgreSQL", "Tailwind CSS"],
    link: "https://fmcedubai.ae/",
  },
  {
    id: 11,
    image: Lynx,
    title: "TheLynxNet - Professional Services",
    category: "backend",
    description:
      "Engineered a robust backend for an on-demand service marketplace connecting families with top-tier trainers and sitters. Implemented secure payment processing via Stripe with Webhooks for real-time transaction updates, and integrated Socket.io with FCM for instant chat and booking notifications.",
    tech: [
      "Express.js",
      "Stripe",
      "Webhooks",
      "Socket.io",
      "Firebase (FCM)",
      "PostgreSQL",
    ],
    link: "https://play.google.com/store/apps/details?id=com.futurbyte.the.lynx.net",
  },
  {
    id: 12,
    image: GlossHammer,
    title: "Gloss & Hammer",
    category: "fullstack",
    description:
      "A business management dashboard developed using Node.js, Express.js, Next.js, and MUI. It provides a sleek and intuitive interface for managing users.",
    tech: ["Node.js", "Express.js", "Next.js", "MUI"],
    link: "https://glossandhammer-web.futurbyte.co/",
  },
  {
    id: 13,
    image: work6,
    title: "Coffee Shop",
    category: "frontend",
    description:
      "Build a simple Todo app with React, featuring add, delete, and delete all functionality for managing tasks efficiently.",
    tech: ["Tailwind Css", "ReactJs", "Next js"],
    link: "https://coffee-store-nextjs-ktg9-git-main-mshafyalis-projects.vercel.app/",
  },
  {
    id: 14,
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
