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
      "Modern developer portfolio showcasing projects, skills, experience and contact information with premium animations, responsive design and optimized performance.",

    image: portfolio,

    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],

    live: "#", // Vercel deploy ke baad yahan URL dalenge

    github: "https://github.com/nitishkumar437/nitish-portfolio",
  },

  {
    title: "Notes CRUD App",

    description:
      "Full Stack Notes application with authentication, CRUD operations and MongoDB database integration.",

    image: notes,

    technologies: ["React", "Express", "MongoDB", "Node.js"],

    live: "#",

    github: "#",
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
