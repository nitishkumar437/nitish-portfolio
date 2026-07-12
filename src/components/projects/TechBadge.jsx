import { motion } from "framer-motion";

const TechBadge = ({ name }) => {
  return (
    <motion.span
      whileHover={{
        scale: 1.08,
        y: -2,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        rounded-full
        border
        border-sky-500/20
        bg-sky-500/10
        px-3
        py-1.5
        text-xs
        font-medium
        text-sky-300
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-sky-400
        hover:bg-sky-500/20
        hover:text-white
      "
    >
      {name}
    </motion.span>
  );
};

export default TechBadge;
