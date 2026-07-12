import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";

import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";

const techStack = [
  {
    name: "React",
    icon: FaReact,
  },
  {
    name: "Node",
    icon: FaNodeJs,
  },
  {
    name: "Express",
    icon: SiExpress,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
  },
  {
    name: "Git",
    icon: FaGitAlt,
  },
];

const CodeWindow = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: [0, -8, 0],
      }}
      transition={{
        opacity: {
          duration: 0.8,
        },
        y: {
          duration: 5,
          repeat: Infinity,
        },
      }}
      className="
      mt-8
      w-full
      rounded-3xl
      overflow-hidden
      border
      border-white/10
      bg-slate-900/80
      backdrop-blur-xl
      shadow-[0_0_60px_rgba(56,189,248,.12)]
      "
    >
      {/* Header */}

      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500"></span>

          <span className="h-3 w-3 rounded-full bg-yellow-500"></span>

          <span className="h-3 w-3 rounded-full bg-green-500"></span>
        </div>

        <p className="text-sm text-slate-400">portfolio.js</p>

        <div className="flex items-center gap-2 text-xs text-emerald-400">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Live
        </div>
      </div>

      {/* Code */}

      <div className="p-6 font-mono text-sm leading-8">
        <p>
          <span className="text-purple-400">const</span>{" "}
          <span className="text-cyan-400">developer</span>{" "}
          <span className="text-white">=</span>{" "}
          <span className="text-yellow-400">{"{"}</span>
        </p>

        <p className="ml-5">
          <span className="text-pink-400">name</span>:
          <span className="text-emerald-400"> "Nitish Kumar",</span>
        </p>

        <p className="ml-5">
          <span className="text-pink-400">role</span>:
          <span className="text-emerald-400"> "Full Stack Developer",</span>
        </p>

        <p className="ml-5">
          <span className="text-pink-400">location</span>:
          <span className="text-emerald-400"> "Bihar, India",</span>
        </p>

        <p className="ml-5">
          <span className="text-pink-400">available</span>:
          <span className="text-orange-400"> true,</span>
        </p>

        <p className="text-yellow-400">{"}"}</p>
      </div>

      {/* Divider */}

      <div className="border-t border-white/10"></div>

      {/* Skills */}

      <div className="p-5">
        <h4 className="mb-4 text-sm text-slate-400">Tech Stack</h4>

        <div className="flex flex-wrap gap-3">
          {techStack.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.name}
                whileHover={{
                  y: -4,
                  scale: 1.05,
                }}
                className="
                flex
                items-center
                gap-2
                rounded-xl
                border
                border-white/10
                bg-white/5
                px-3
                py-2
                text-sm
                "
              >
                <Icon className="text-sky-400 text-lg" />

                <span>{item.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default CodeWindow;
