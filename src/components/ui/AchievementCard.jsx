import { motion } from "framer-motion";

const AchievementCard = ({
  number,
  suffix = "",
  title,
  subtitle,
  delay = 0,
}) => {
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
        scale: 1.03,
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
        text-center
        transition-all
        duration-300
        hover:border-sky-400/40
        hover:shadow-[0_0_35px_rgba(56,189,248,.18)]
      "
    >
      <div
        className="
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition
          duration-500
          bg-linear-to-br
          from-sky-500/10
          to-cyan-500/5
        "
      />
      <h3 className="relative text-4xl font-black text-sky-400">
        {number}
        {suffix}
      </h3>

      <h4 className="relative mt-3 text-lg font-semibold text-white">
        {title}
      </h4>

      <p className="relative mt-2 text-sm leading-6 text-slate-400">
        {subtitle}
      </p>
    </motion.div>
  );
};

export default AchievementCard;
