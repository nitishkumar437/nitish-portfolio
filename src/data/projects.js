import studysync from "../assets/projects/studysync.png";
import portfolio from "../assets/projects/portfolio.png";
import notes from "../assets/projects/notes.png";
import blog from "../assets/projects/blog.png";

// ================= Featured Project =================

export const featuredProject = {
  title: "StudySync",

  description:
    "A modern MERN Stack study management platform where students can manage notes, tasks, study sessions, goals and track productivity with a beautiful dashboard.",

  image: studysync,

  technologies: [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "JWT",
    "Tailwind CSS",
  ],

  live: "https://my-studysync.vercel.app",

  github: "https://github.com/nitishkumar437/studysync",
};

// ================= Other Projects =================

export const projects = [
  {
    title: "Developer Portfolio",

    description:
      "Personal portfolio built using React, Framer Motion and Tailwind CSS with premium UI animations and responsive design.",

    image: portfolio,

    technologies: ["React", "Tailwind", "Framer Motion"],

    live: "https://your-portfolio.vercel.app",

    github: "https://github.com/nitishkumar437",
  },

  {
    title: "Notes CRUD App",

    description:
      "Full Stack Notes application with authentication, CRUD operations and MongoDB database integration.",

    image: notes,

    technologies: ["React", "Express", "MongoDB", "Node.js"],

    live: "#",

    github: "https://github.com/nitishkumar437",
  },

  {
    title: "Blog Application",

    description:
      "Modern blog platform with authentication, image upload and complete CRUD functionality.",

    image: blog,

    technologies: ["React", "Node.js", "Express", "MongoDB"],

    live: "#",

    github: "https://github.com/nitishkumar437",
  },
];
