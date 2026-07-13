import { motion } from "framer-motion";

const SectionHeading = ({ badge, title, gradient, description }) => {
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
      transition={{
        duration: 0.7,
      }}
      viewport={{
        once: true,
      }}
      className="text-center max-w-3xl mx-auto"
    >
      {/* Badge */}

      <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-5 py-2 text-sm font-medium text-sky-300 shadow-[0_0_25px_rgba(56,189,248,.15)]">
        {badge}
      </div>

      {/* Heading */}

      <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
        {title}

        <br />

        <span className="bg-linear-to-r from-sky-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
          {gradient}
        </span>
      </h2>
 

      <p className="mt-7 text-slate-400 leading-8 text-base sm:text-lg">
        {description}
      </p>
    </motion.div>
  );
};

export default SectionHeading;
