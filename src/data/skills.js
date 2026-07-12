import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostman,
} from "react-icons/si";

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML5",
        icon: FaHtml5,
        level: 95,
      },
      {
        name: "CSS3",
        icon: FaCss3Alt,
        level: 90,
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        level: 88,
      },
      {
        name: "React",
        icon: FaReact,
        level: 90,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        level: 92,
      },
    ],
  },

  {
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: FaNodeJs,
        level: 85,
      },
      {
        name: "Express.js",
        icon: SiExpress,
        level: 82,
      },
    ],
  },

  {
    title: "Database",
    skills: [
      {
        name: "MongoDB",
        icon: SiMongodb,
        level: 84,
      },
    ],
  },

  {
    title: "Tools",
    skills: [
      {
        name: "Git",
        icon: FaGitAlt,
        level: 90,
      },
      {
        name: "GitHub",
        icon: FaGithub,
        level: 90,
      },
      {
        name: "Postman",
        icon: SiPostman,
        level: 85,
      },
    ],
  },
];
