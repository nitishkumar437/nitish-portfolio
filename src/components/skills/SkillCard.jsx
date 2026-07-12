import { motion } from "framer-motion";
import SkillProgress from "./SkillProgress";

const SkillCard = ({ skill, delay = 0 }) => {
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
        delay,
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-6
        transition-all
        duration-300
        hover:border-sky-400/40
        hover:shadow-[0_0_40px_rgba(56,189,248,.20)]
      "
    >
      {/* Hover Glow */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition
          duration-500
          bg-gradient-to-br
          from-sky-500/10
          via-cyan-500/5
          to-transparent
        "
      />

      {/* Icon */}
      <div
        className="
          relative
          z-10
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-xl
          border
          border-sky-500/20
          bg-sky-500/10
          text-sky-400
          transition-all
          duration-300
          group-hover:scale-110
          group-hover:rotate-6
        "
      >
        <Icon size={28} />
      </div>

      {/* Skill Name */}
      <h3 className="relative z-10 mt-5 text-xl font-bold text-white">
        {skill.name}
      </h3>

      {/* Progress */}
      <div className="relative z-10">
        <SkillProgress level={skill.level} />
      </div>
    </motion.div>
  );
};

export default SkillCard;
