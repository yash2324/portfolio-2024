import { LuLinkedin, LuGithub } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { IoMdDocument } from "react-icons/io";
import Snapgram from "../assets/project_snapgram.jpg";
import CssGen from "../assets/project_css_gen.jpg";
import Movix from "../assets/project_movix.jpg";

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
    url: "https://www.linkedin.com/in/yash-gupta-012769206/",
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

  // {
  //   url: "https://leetcode.com/yg232004/",
  //   icon: <SiLeetcode className="w-[22px] h-[22px]" />,
  //   name: "Leetcode",
  // },
];

export const mainProjects = [
  {
    title: "FlixAI",
    description:
      "FlixAI, replicates an OTT platform with integrated ChatGPT for personalized movie recommendations. Developed with React, Firebase, and Redux, it ensures real-time updates, seamless authentication, and a mobile-friendly design.",
    tags: ["React.js", "Tailwind CSS", "Firebase", "Redux", "OpenAI"],
    github: "https://github.com/yash2324/FlixAI",
    demo: "https://flix-ai.vercel.app/",
    image:
      "https://res.cloudinary.com/dljzvv5dh/image/upload/v1708365673/Portfolio/ijn4dxogasi8y2errjpn.png",
  },
  {
    title: "Swift Flavours",
    description:
      "I made a food ordering app's UI fetching realtime restaurant data from Swiggy's API. Also used Redux to build the cart functionality and make the site more efficient. Also, made the website very mobile friendly",
    tags: ["React.js", "Tailwind CSS", "Redux", "Shimmer UI", "Jest"],
    github: "https://github.com/yash2324/Swift-Flavours",
    demo: "https://swift-flavours.vercel.app/",
    image:
      "https://res.cloudinary.com/dljzvv5dh/image/upload/v1707853866/Portfolio/Swiftflavours-screenshots/sip56zuqbp8pmyg4ica7.png",
  },
  {
    title: "CSI Innowave",
    description:
      "Built the official website for CSI Innowave , Technical Society of my college.Leading a team and emphasis on Git Workflow, I developed the site using React, Tailwind and backend using Node , Express and Mongo DB.Also, used Cloudinary for image hosting.",
    tags: ["React.js", "Tailwind CSS", "Express", "Acertinity UI", "Node"],
    github: "https://github.com/yash2324/CSI-Innowave",
    demo: "https://csiinnowave.vercel.app/",
    image:
      "https://res.cloudinary.com/dljzvv5dh/image/upload/v1709126018/Portfolio/zvc0uoeobifdbknwov7p.png",
  },
  {
    title: "Meme Generator",
    description:
      "Made the front-end for a Crime Analysis System , using the past crimes data of India the model predicts the crime stats of a particular district for the upcoming years and also visualises the past stats of that district and area",
    tags: ["React.js", "Tailwind CSS", "Express", "Acertinity UI", "Node"],
    github: "https://github.com/yash2324/Meme-Generator-2",
    demo: "https://meme-generator-yg.netlify.app/",
    image:
      "https://res.cloudinary.com/dljzvv5dh/image/upload/v1708366940/Portfolio/Swiftflavours-screenshots/dron8hyjrqtbpjtdj22g.png",
  },
];

export const otherProjects = [
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
    title: "GeeksforGeeks Landing Page Clone",
    description:
      "The clone closely resembles the original GeeksforGeeks landing page. This clone is designed to be responsive and adapts to different screen sizes.",
    tags: ["HTML", "Vanilla CSS"],
    github: "https://github.com/Tapesh-1308/GeeksforGeeks-Clone",
    demo: "https://tapesh-1308.github.io/GeeksforGeeks-Clone/",
  },
  {
    title: "Notes App",
    description:
      "Organize your notes easily with my straightforward Notes App. Built with HTML, CSS, and JavaScript,with the power of local storage and markdown parser.",
    tags: ["HTML", "CSS", "JavaScript", "Markdown Parser"],
    github: "https://github.com/Tapesh-1308/todo-app",
    demo: "https://tapesh-1308.github.io/todo-app/",
  },
  {
    title: "Password Generator",
    description:
      "Simple UI crafted using HTML, CSS, and JS, this tool offers multiple filters for customizing your passwords. Copy your generated passwords with a single click.",
    tags: ["HTML5", "CSS", "JavaScript", "DOM"],
    github: "https://github.com/Tapesh-1308/password-generator",
    demo: "https://tapesh-1308.github.io/password-generator/",
  },
  {
    title: "Random Jokes",
    description:
      "Developed with HTML, CSS, and JavaScript, this web app pulls jokes dynamically from an API, ensuring a constant supply of humor.",
    tags: ["HTML5", "CSS", "JavaScript", "DOM", "API"],
    github: "https://github.com/Tapesh-1308/random-jokes-generator",
    demo: "https://tapesh-1308.github.io/random-jokes-generator/",
  },
];
