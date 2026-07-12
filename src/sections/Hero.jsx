import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import profile from "../assets/images/profile.png";

import TypingText from "../components/ui/TypingText";
import AuroraBackground from "../components/ui/AuroraBackground";
import MouseGlow from "../components/ui/MouseGlows";
import CodeWindow from "../components/ui/CodeWindow";
import StatCard from "../components/ui/StatCard";
import GradientButton from "../components/ui/GradientButton";
import GlowBadge from "../components/ui/GlowBadge";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-950 text-white pt-24 sm:pt-28 pb-16 lg:min-h-screen flex items-center"
    >
      <MouseGlow />
      <AuroraBackground />

      <div className="relative max-w-7xl mx-auto w-full px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* ================= LEFT ================= */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <GlowBadge>🚀 Open to Internship</GlowBadge>

            <h1 className="mt-7 font-black leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Hi, I'm
              <br />
              <span className="bg-gradient-to-r from-white via-sky-300 to-sky-500 bg-clip-text text-transparent">
                Nitish Kumar
              </span>
            </h1>

            <div className="mt-6 flex justify-center lg:justify-start">
              <TypingText />
            </div>

            <p className="mt-8 max-w-sm sm:max-w-lg lg:max-w-xl mx-auto lg:mx-0 text-slate-400 text-base sm:text-lg leading-8">
              Passionate MERN Stack Developer focused on building scalable,
              responsive and modern web applications using React, Node.js,
              Express.js and MongoDB.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <GradientButton href="#contact">Hire Me</GradientButton>

              <GradientButton
                href="/resume.pdf"
                download
                primary={false}
                icon={false}
              >
                <Download size={18} />

                <span>Download Resume</span>
              </GradientButton>
            </div>

            <div className="mt-10 flex justify-center lg:justify-start gap-5">
              <a
                href="https://github.com/nitishkumar437"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 hover:border-sky-400 hover:text-sky-400 transition-all duration-300 flex items-center justify-center"
              >
                <FaGithub className="text-xl" />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 hover:border-sky-400 hover:text-sky-400 transition-all duration-300 flex items-center justify-center"
              >
                <FaLinkedin className="text-xl" />
              </a>

              <a
                href="mailto:ns8078287@gmail.com"
                className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 hover:border-sky-400 hover:text-sky-400 transition-all duration-300 flex items-center justify-center"
              >
                <FaEnvelope className="text-xl" />
              </a>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <StatCard number="10+" title="Projects" delay={0.2} />

              <StatCard number="1+" title="Years Learning" delay={0.4} />

              <StatCard number="100+" title="DSA Problems" delay={0.6} />
            </div>
          </motion.div>
          {/* ================= RIGHT ================= */}

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -10, 0],
            }}
            transition={{
              duration: 0.8,
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="order-1 lg:order-2 flex flex-col items-center w-full"
          >
            {/* Glass Card */}

            <div className="w-full max-w-sm sm:max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 sm:p-6 shadow-[0_20px_80px_rgba(0,0,0,.35)]">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-sky-500 blur-[70px] opacity-30"></div>

                  <img
                    src={profile}
                    alt="Nitish Kumar"
                    className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 lg:w-60 lg:h-60 rounded-full object-cover object-top border-4 border-sky-400"
                  />
                </div>
              </div>

              <h3 className="mt-6 text-center text-2xl sm:text-3xl font-bold">
                Nitish Kumar
              </h3>

              <p className="mt-2 text-center text-sky-400 text-sm sm:text-base">
                MERN Stack Developer
              </p>

              {/* Tech Stack */}

              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {[
                  "React",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "Tailwind",
                  "JavaScript",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-full bg-slate-800 border border-sky-500/20 text-xs sm:text-sm hover:border-sky-400 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Code Window */}

            <div className="mt-8 w-full max-w-sm sm:max-w-md">
              <CodeWindow />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
