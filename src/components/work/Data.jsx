import work1 from "../../assets/gym.png";
import work2 from "../../assets/work2.png";
import project3 from "../../assets/project3.png";
import carrotar from "../../assets/Carrotar.PNG";
import toDo from "../../assets/to-do.PNG";
import work6 from "../../assets/work6.JPG";
import Rph from "../../assets/rph.PNG";
import ebook from "../../assets/ebook.JPG";
import clickCease from "../../assets/clickecease.PNG";
import Sj from "../../assets/Sj.PNG";
import TL from "../../assets/teacherLunch.JPG";
import Preatoni from "../../assets/pr.JPG";
import GlossHammer from "../../assets/gloss.JPG";

export const projectData = [
  {
    id: 1,
    image: TL,
    title: "Teacher Lunch",
    category: "Web",
    description:
      "A full-stack web application developed using Next.js, NestJS, Tailwind CSS, and PostgreSQL. It includes real-time communication with Socket.io, secure authentication",
    tech: ["Tailwind Css", "Next Js", "Nest js", "Socket", "PosgresSql"],
    link: "https://teacher-web.futurbyte.co/auth/sign-in",
  },
  {
    id: 2,
    image: Preatoni, // import your image at the top, e.g. import Preatoni from "@/assets/preatoni.png";
    title: "Preatoni Properties",
    category: "Web",
    description:
      "A modern real estate website built with Next.js, Tailwind CSS, and Strapi. It features dynamic property listings, content management via Strapi CMS",
    tech: ["Next.js", "Tailwind CSS", "Strapi"],
    link: "https://dev.preatoniproperties.com/",
  },
  {
    id: 3,
    image: GlossHammer, 
    title: "Gloss & Hammer",
    category: "Web",
    description:
      "A business management dashboard developed using Node.js, Express.js, Next.js, and MUI. It provides a sleek and intuitive interface for managing users.",
    tech: ["Node.js", "Express.js", "Next.js", "MUI"],
    link: "https://glossandhammer-web.futurbyte.co/",
  },
  {
    id: 4,
    image: Rph,
    title: "Research Publishing House",
    category: "Web",
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
    link: "#",
  },
  {
    id: 5,
    image: Sj,
    title: "Scopus Publishing House",
    category: "Web",
    description:
      "A mobile-friendly website developed using React, Tailwind CSS, Node.js, Express.js, PHP, and MySQL/MongoDB to ensure optimal performance.",
    tech: [
      "Tailwind Css",
      "React Js",
      "Node js",
      "Express js",
      "Mongodb",
      "MySql",
    ],
    link: "#",
  },
  {
    id: 6,
    image: work6,
    title: "Coffee Shop",
    category: "Web",
    description:
      "Build a simple Todo app with React, featuring add, delete, and delete all functionality for managing tasks efficiently.",
    tech: ["Tailwind Css", "ReactJs", "Next js"],
    link: "https://coffee-store-nextjs-ktg9-git-main-mshafyalis-projects.vercel.app/",
  },
  {
    id: 7,
    image: work2,
    title: "Youtube Clone",
    category: "web",
    description:
      "YouTube clone using React, creating a user-friendly interface for a seamless viewing experience",
    tech: ["Html", "CSS", "ReactJs", "Rest APIs"],
    link: "#",
  },
  {
    id: 8,
    image: ebook,
    title: "Ebook",
    category: "Web",
    description:
      "Design a responsive mobile website using HTML,Tailwind Css, React js  ensuring optimal user experience across various devices.create for Client ",
    tech: ["Tailwind Css", "React Js"],
    link: "#",
  },

  {
    id: 9,
    image: project3,
    title: "Ecommerce Frontend",
    category: "web",
    description:
      "Build a modern Ecommerce website design using React and Tailwind CSS",

    tech: ["Tailwand", "React"],
    link: "https://ecommerce-two-swart-26.vercel.app/",
  },
  {
    id: 10,
    image: carrotar,
    title: "Carrotar Landing Page",
    category: "design",
    description:
      "I have developed this page following a detailed design from Figma.The page features a sleek & modern interface,optimized for user experience & responsiveness.",
    tech: ["Tailwand", "ReactJs"],
    link: "https://carrator-landing-page.vercel.app/",
  },
  {
    id: 11,
    image: clickCease,
    title: "ClickCease Fraud Protection ",
    category: "design",
    description:
      "I have developed this software to prevent click fraud and ensure ad campaigns deliver genuine traffic. Featuring an intuitive and user-friendly interface.",
    tech: ["Node.js", "React.js", "MySQL"],
    link: "https://carrator-landing-page.vercel.app/",
  },

  {
    id: 12,
    image: toDo,
    title: "To DO App",
    category: "web",
    description:
      "Built a ToDo app  Features include task creation, editing, and deletion with a clean, responsive UI. Utilized Context API for efficient state management across components.",
    tech: ["Tailwind Css", "React Js", "Context"],
    link: "https://todo-app-xi-bice.vercel.app/",
  },

  {
    id: 13,
    image: work1,
    title: "Mern Auth",
    category: "web",
    description:
      "This is a fullstack Web. It includes authentication features that allow users to sign up, log in, and log out, and provides access to protected routes only for authenticated users.",
    tech: ["Tailwand", "ReactJs", "Node Js", "Express", "MongoDb"],
    link: "https://mern-auth-5pnp.onrender.com/",
  },
  {
    id: 14,
    image: carrotar,
    title: "Carrotar Landing Page",
    category: "design",
    description:
      "I have developed this page following a detailed design from Figma.The page features a sleek & modern interface,optimized for user experience & responsiveness.",
    tech: ["Tailwand", "ReactJs"],
    link: "https://carrator-landing-page.vercel.app/",
  },
];

export const projectsNav = [
  { name: "all" },
  // { name: "web" },
  // // { name: "app" },
  // { name: "design" },
];
