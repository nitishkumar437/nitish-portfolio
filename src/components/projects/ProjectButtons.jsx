import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const ProjectButtons = ({ live, github }) => {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      <motion.a
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.95,
        }}
        href={live}
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-flex
          items-center
          gap-2
          rounded-xl
          bg-gradient-to-r
          from-sky-500
          to-cyan-500
          px-5
          py-3
          text-sm
          font-semibold
          text-white
          shadow-lg
          transition-all
          duration-300
          hover:shadow-[0_0_30px_rgba(56,189,248,.45)]
        "
      >
        <ExternalLink size={18} />
        Live Demo
      </motion.a>

      <motion.a
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.95,
        }}
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-flex
          items-center
          gap-2
          rounded-xl
          border
          border-slate-700
          bg-slate-900/70
          px-5
          py-3
          text-sm
          font-semibold
          text-white
          transition-all
          duration-300
          hover:border-sky-400
          hover:bg-slate-800
          hover:text-sky-300
        "
      >
        <FaGithub size={18} />
        GitHub
      </motion.a>
    </div>
  );
};

export default ProjectButtons;
