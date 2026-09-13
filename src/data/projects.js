import studysync from "../assets/projects/studysync.png";
import portfolio from "../assets/projects/portfolio.png";
import razorpay from "../assets/projects/razorpay.png";

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

  live: "https://studysync-omega-lake.vercel.app/",

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

    live: "https://nitish-portfolio-dun.vercel.app/",

    github: "https://github.com/nitishkumar437/nitish-portfolio",
  },

  {
    title: "Razorpay Landing Page Clone",

    description:
      "Responsive payment-platform landing page recreated using React.js and Tailwind CSS with reusable components and modern UI design.",

    image: razorpay,

    technologies: ["React", "Tailwind CSS", "Vite"],

    live: "https://razarpay-clone-peach.vercel.app/",

    github: "https://github.com/nitishkumar437/Razorpay-clone",
  },
];
