import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

const SkillCategory = ({ category, index = 0 }) => {
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
        delay: index * 0.15,
      }}
      whileHover={{
        y: -6,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-2xl
        p-7
        transition-all
        duration-300
        hover:border-sky-400/30
        hover:shadow-[0_0_50px_rgba(56,189,248,.15)]
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
          from-sky-500/5
          via-cyan-500/5
          to-transparent
        "
      />

      {/* Category Header */}

      <div className="relative z-10 flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-white">{category.title}</h2>

        <div
          className="
            flex
            items-center
            justify-center
            w-12
            h-12
            rounded-xl
            bg-sky-500/10
            border
            border-sky-500/20
            text-sky-400
            font-bold
          "
        >
          {category.skills.length}
        </div>
      </div>

      {/* Divider */}

      <div className="relative z-10 h-px bg-gradient-to-r from-sky-500/40 via-white/10 to-transparent mb-8" />

      {/* Skills */}

      <div className="grid gap-5">
        {category.skills.map((skill, skillIndex) => (
          <SkillCard key={skill.name} skill={skill} delay={skillIndex * 0.08} />
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCategory;
