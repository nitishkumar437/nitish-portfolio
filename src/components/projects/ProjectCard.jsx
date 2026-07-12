import { motion } from "framer-motion";

import TechBadge from "./TechBadge";
import ProjectButtons from "./ProjectButtons";

const ProjectCard = ({ project, delay = 0 }) => {
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
        duration: 0.7,
        delay,
      }}
      whileHover={{
        y: -10,
      }}
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-sky-400/40
        hover:shadow-[0_20px_60px_rgba(56,189,248,.15)]
      "
    >
      {/* Project Image */}

      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="
            h-56
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-110
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-slate-950
            via-slate-950/10
            to-transparent
          "
        />
      </div>

      {/* Content */}

      <div className="p-6">
        <h3 className="text-2xl font-bold text-white">{project.title}</h3>

        <p className="mt-4 text-slate-400 leading-7">{project.description}</p>

        {/* Tech Stack */}

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>

        {/* Buttons */}

        <ProjectButtons live={project.live} github={project.github} />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
