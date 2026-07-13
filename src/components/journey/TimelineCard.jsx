import { motion } from "framer-motion";

const TimelineCard = ({ item, index }) => {
  const isLeft = index % 2 === 0;

  return (
    <div
      className={`
      relative
      flex
      w-full
      mb-12

      md:mb-16
      ${isLeft ? "md:justify-start" : "md:justify-end"}
      justify-start
    `}
    >
      <div
        className="
        absolute

        left-6
        md:left-1/2

        md:-translate-x-1/2

        z-20

        flex
        h-12
        w-12

        md:h-14
        md:w-14

        items-center
        justify-center

        rounded-full

        border-4
        border-slate-950

        bg-linear-to-br
        from-sky-400
        to-cyan-500

        text-xl
        md:text-2xl

        shadow-[0_0_25px_rgba(56,189,248,.45)]
      "
      >
        {item.icon}
      </div>

      {/* Card */}

      <motion.div
        initial={{
          opacity: 0,
          x: isLeft ? -60 : 60,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.7,
        }}
        whileHover={{
          y: -6,
        }}
        className="
          ml-20

          md:ml-0

          w-[calc(100%-80px)]

          md:w-[45%]

          rounded-3xl

          border
          border-white/10

          bg-white/5

          backdrop-blur-xl

          p-6
          md:p-7

          transition-all
          duration-300

          hover:border-sky-400/40
          hover:shadow-[0_0_35px_rgba(56,189,248,.15)]
        "
      >
        {/* Year */}

        <span
          className="
          inline-flex
          rounded-full
          border
          border-sky-500/20
          bg-sky-500/10
          px-4
          py-2
          text-sm
          font-medium
          text-sky-300
        "
        >
          {item.year}
        </span>

        {/* Title */}

        <h3
          className="
          mt-5
          text-2xl
          font-bold
          text-white
          leading-tight
        "
        >
          {item.title}
        </h3>

        {/* Description */}

        <p
          className="
          mt-4
          text-slate-400
          leading-8
        "
        >
          {item.description}
        </p>
      </motion.div>
    </div>
  );
};

export default TimelineCard;
