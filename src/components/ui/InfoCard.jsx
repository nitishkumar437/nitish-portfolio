import { motion } from "framer-motion";

const InfoCard = ({ icon: Icon, title, value, delay = 0 }) => {
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
        duration: 0.5,
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
        p-5
        transition-all
        duration-300
        hover:border-sky-400/50
        hover:shadow-[0_0_35px_rgba(56,189,248,.15)]
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
          from-sky-500/5
          to-cyan-500/5
        "
      />

      <div
        className="
          relative
          w-14
          h-14
          rounded-xl
          bg-sky-500/10
          border
          border-sky-500/20
          flex
          items-center
          justify-center
          text-sky-400
          group-hover:rotate-6
          group-hover:scale-110
          transition-all
          duration-300
        "
      >
        <Icon size={26} />
      </div>

      <h4 className="relative mt-5 text-lg font-semibold text-white">
        {title}
      </h4>

      <p className="relative mt-2 text-slate-400 leading-7 wrap-break-word">
        {value}
      </p>
    </motion.div>
  );
};

export default InfoCard;
