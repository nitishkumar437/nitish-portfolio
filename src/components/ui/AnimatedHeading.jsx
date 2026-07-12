import { motion } from "framer-motion";

const AnimatedHeading = ({ title, subtitle }) => {
  return (
    <>
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4 uppercase tracking-[6px] text-sky-400"
      >
        {subtitle}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.15,
        }}
        className="bg-gradient-to-r from-white via-sky-300 to-cyan-400 bg-clip-text text-5xl font-black leading-tight text-transparent md:text-7xl"
      >
        {title}
      </motion.h1>
    </>
  );
};

export default AnimatedHeading;
