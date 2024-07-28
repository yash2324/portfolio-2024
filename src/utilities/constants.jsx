import { LuLinkedin, LuGithub } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { IoMdDocument } from "react-icons/io";
export const navLinks = [
  {
    url: "/#",
    name: "Home",
  },
  {
    url: "/#about",
    name: "About",
  },

  {
    url: "/#projects",
    name: "Projects",
  },
  {
    url: "/#contact",
    name: "Contact",
  },
];

export const skills = [
  "Java",
  "JavaScript (ES+)",
  "React Js",
  "Redux Toolkit",
  "Tailwind",
  "API Handling",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Next.js",
];

export const social_links = [
  {
    url: "https://github.com/yash2324/",
    icon: <LuGithub className="w-[22px] h-[22px]" />,
    name: "Github",
  },
  {
    url: "https://www.linkedin.com/in/thisisyashgupta/",
    icon: <LuLinkedin className="w-[22px] h-[22px]" />,
    name: "Linkedin",
  },
  {
    url: "https://twitter.com/yashgupta023",
    icon: <FaXTwitter className="w-[22px] h-[22px]" />,
    name: "Twitter",
  },
  {
    url: "https://drive.google.com/file/d/1w_AY_fYKSz_Dp9UXZb-nc5JpUIy6cLBF/view",
    icon: <IoMdDocument className="w-[22px] h-[22px]" />,
    name: "Resume",
  },

  {
    url: "https://leetcode.com/yash2324/",
    icon: <SiLeetcode className="w-[22px] h-[22px]" />,
    name: "Leetcode",
  },
];

export const mainProjects = [
  {
    title: "BizGenAI",
    description:
      "A full-stack proposal generation application for freelancers and businesses using Next.js, Prisma, and MongoDB. It allows users to generate professional business proposals with ease.",
    tags: ["Next.js", "Prisma", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/yash2324/proposal-gen",
    demo: "https://proposal-gen-beta.vercel.app/",
    image:
      "https://res.cloudinary.com/dljzvv5dh/image/upload/v1722127348/Portfolio/mvmvr9ueqceqlm2ix9pm.png",
  },
  {
    title: "Innov8Tech",
    description:
      "A blog application using Next.js, PostgreSQL, and Prisma. Innov8Tech allows users to post, edit, and delete blog posts, providing a seamless blogging experience.",
    tags: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
    github: "https://github.com/yash2324/Innov8tech",
    demo: "https://innov8tech.vercel.app/",
    image:
      "https://res.cloudinary.com/dljzvv5dh/image/upload/v1722127347/Portfolio/uu3f1ekvauduezlibjml.png",
  },
  {
    title: "Quizlo",
    description:
      "A full-stack quiz application serving over 250 active users. Developed using React, Node.js, and MongoDB, it offers real-time quizzes and interactive gameplay.",
    tags: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/yash2324/quizlo",
    demo: "https://quiz.csiinnowave.com/",
    image:
      "https://res.cloudinary.com/dljzvv5dh/image/upload/v1722127254/Portfolio/mndngvb4abjvezqhln9e.png",
  },
  {
    title: "FlixAI",
    description:
      "FlixAI replicates an OTT platform with integrated ChatGPT for personalized movie recommendations. Developed with React, Firebase, and Redux, it ensures real-time updates, seamless authentication, and a mobile-friendly design.",
    tags: ["React.js", "Tailwind CSS", "Firebase", "Redux", "OpenAI"],
    github: "https://github.com/yash2324/FlixAI",
    demo: "https://flix-ai.vercel.app/",
    image:
      "https://res.cloudinary.com/dljzvv5dh/image/upload/v1708365673/Portfolio/ijn4dxogasi8y2errjpn.png",
  },
  {
    title: "Swift Flavours",
    description:
      "I made a food ordering app's UI fetching real-time restaurant data from Swiggy's API. Also used Redux to build the cart functionality and make the site more efficient. Also, made the website very mobile friendly.",
    tags: ["React.js", "Tailwind CSS", "Redux", "Shimmer UI", "Jest"],
    github: "https://github.com/yash2324/Swift-Flavours",
    demo: "https://swift-flavours.vercel.app/",
    image:
      "https://res.cloudinary.com/dljzvv5dh/image/upload/v1707853866/Portfolio/Swiftflavours-screenshots/sip56zuqbp8pmyg4ica7.png",
  },
  {
    title: "CSI Innowave",
    description:
      "Built the official website for CSI Innowave, Technical Society of my college. Leading a team and emphasizing Git Workflow, I developed the site using React, Tailwind and backend using Node, Express, and MongoDB. Also, used Cloudinary for image hosting.",
    tags: ["React.js", "Tailwind CSS", "Express", "Acertinity UI"],
    github: "https://github.com/yash2324/CSI-Innowave",
    demo: "https://csiinnowave.com",
    image:
      "https://res.cloudinary.com/dljzvv5dh/image/upload/v1722127348/Portfolio/jenz6xuqaiq3to3nqocz.png",
  },
];

export const otherProjects = [
  {
    title: "Meme Generator",
    description:
      "Made the front-end for a Crime Analysis System, using the past crimes data of India the model predicts the crime stats of a particular district for the upcoming years and also visualizes the past stats of that district and area.",
    tags: ["React.js", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/yash2324/Meme-Generator-2",
    demo: "https://meme-generator-yg.netlify.app/",
    image:
      "https://res.cloudinary.com/dljzvv5dh/image/upload/v1708366940/Portfolio/Swiftflavours-screenshots/dron8hyjrqtbpjtdj22g.png",
  },
  {
    title: "Smart Secure",
    description:
      "Made the front-end for a Crime Analysis System , using the past crimes data of India the model predicts the crime stats of a particular district for the upcoming years and also visualises the past stats of that district and area",
    tags: ["React.js", "Tailwind CSS", "Express", "Acertinity UI", "Node"],
    github: "https://github.com/yash2324/CSI-Innowave",
    demo: "https://csiinnowave.vercel.app/",
  },
  {
    title: "Tenzies",
    description:
      "I made a basic tenzies Game , using React made the game more fun by adding confetti, Also used hooks to manage the state of the game",
    tags: ["React.js", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/yash2324/Tenzies",
    demo: "https://tenzies-game-yg.netlify.app/",
  },
  {
    title: "Chat SAT",
    description:
      "A basic frontend of a SAT prep Application built using Next.js,Typescript,Tailwind CSS.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/yash2324/Chat-SAT",
    demo: "https://chat-sat-yg.vercel.app/",
  },
  {
    title: "Save Tab Chrome Extension",
    description:
      "An extension to save all the links you want to bookmark but in an ordered manner.The link attached is of how the extension would look to actually try it kindly download and deploy the project.",
    tags: ["HTML", "CSS", "JavaScript", "Local Storage"],
    github: "https://github.com/yash2324/save-tab-chrome-extension",
    demo: "https://leadstracker-chrome-extension.netlify.app/",
  },
  {
    title: "AirBnb Landing Page",
    description:
      "A basic Landing page to display services offered at an AirBnb built while learning React from Scrimba",
    tags: ["React", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/yash2324/Airbnb-clone-scrimba",
    demo: "https://airbnb-clone-yg.netlify.app/",
  },
  {
    title: "React Info",
    description:
      "A static Page listing all the information about React and its features.My first project to explore React.",
    tags: ["React", "HTML", "Vanilla CSS", "JavaScript"],
    github: "https://github.com/yash2324/React-proj-1",
    demo: "https://react-proj1-yg.netlify.app/",
  },
  {
    title: "Notes App",
    description:
      "This is a basic notes app to locally make notes , I have made some changes to the already given codes on Scrimba",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    github: "https://github.com/yash2324/Notes-App",
    demo: "https://notes-app-yg.netlify.app/",
  },
  {
    title: "BlackJack Game",
    description:
      "Welcome to the Blackjack Game repository! This simple and interactive website is designed to let users enjoy the classic card game of Blackjack right in their web browsers. Whether you're a seasoned pro or new to the world of card games, this project provides a fun way to test your luck and strategy.",
    tags: ["HTML5", "CSS", "JavaScript"],
    github: "https://github.com/yash2324/BlackJackJS",
    demo: "https://blackjack-game-yg.netlify.app/",
  },
  {
    title: "Counter",
    description:
      "Welcome to the Subway Passenger Counter, a simple JavaScript-based website that helps you keep track of the number of passengers entering a subway station. This project provides a user-friendly interface for station attendants or operators to monitor and update passenger counts in real-time.",
    tags: ["HTML5", "CSS", "JavaScript", "DOM"],
    github: "https://github.com/yash2324/Counter",
    demo: "https://gleaming-tanuki-a47424.netlify.app/",
  },
  {
    title: "Tic Tac Toe Game",
    description: "A basic Tic Tac Toe Game",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/yash2324",
    demo: "https://tic-tac-toe-yg.netlify.app/",
  },
  {
    title: "Parallax Animation",
    description:
      "A Landing page with Parallax Animation , made using HTML and CSS",
    tags: ["HTML5", "CSS"],
    github: "https://github.com/yash2324/",
    demo: "https://parallax-animation-yg.netlify.app/",
  },
  {
    title: "Coffee Card",
    description: "A Coffee Card made using HTML and CSS",
    tags: ["HTML5", "CSS"],
    github: "https://github.com/yash2324/",
    demo: "https://coffee-card-yg.netlify.app/",
  },
];
