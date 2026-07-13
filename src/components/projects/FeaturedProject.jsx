import { motion } from "framer-motion";

import TechBadge from "./TechBadge";
import ProjectButtons from "./ProjectButtons";

const FeaturedProject = ({ project }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.8,
      }}
      className="
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        shadow-[0_20px_70px_rgba(0,0,0,.30)]
      "
    >
      <div className="grid lg:grid-cols-2">
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="
w-full
h-64
sm:h-80
lg:h-full
object-cover
transition-transform
duration-700
hover:scale-105
"
          />

          <div
            className="
              absolute
              inset-0
              bg-linear-to-t
              from-slate-950/70
              via-transparent
              to-transparent
            "
          />
        </div>

        <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
          <span
            className="
              inline-flex
              w-fit
              rounded-full
              border
              border-sky-500/20
              bg-sky-500/10
              px-4
              py-2
              text-sm
              font-medium
              text-sky-300
            "
          >
            ⭐ Featured Project
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl font-black text-white">
            {project.title}
          </h2>

          <p className="mt-6 text-base leading-7 sm:leading-8 text-slate-400">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>

          <ProjectButtons live={project.live} github={project.github} />
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedProject;
