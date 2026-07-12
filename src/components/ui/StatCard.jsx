import { motion } from "framer-motion";

const StatCard = ({ number, title, delay = 0 }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
        delay,
      }}
      whileHover={{
        y: -6,
        scale: 1.03,
      }}
      className="
      relative
      overflow-hidden
      rounded-2xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      px-6
      py-5
      transition-all
      duration-300
      hover:border-sky-400/40
      hover:shadow-[0_0_35px_rgba(56,189,248,.18)]
      "
    >
      {/* Glow */}
      <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-sky-500/10 blur-2xl"></div>

      <h3 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-sky-300 to-cyan-400 bg-clip-text text-transparent">
        {number}
      </h3>

      <p className="mt-2 text-sm text-slate-400">{title}</p>
    </motion.div>
  );
};

export default StatCard;
