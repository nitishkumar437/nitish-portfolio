import { motion } from "framer-motion";
import { User, GraduationCap, MapPin, Mail, Download } from "lucide-react";

import SectionHeading from "../components/ui/SectionHeading";
import AboutImageCard from "../components/ui/AboutImageCard";
import InfoCard from "../components/ui/InfoCard";
import AchievementCard from "../components/ui/AchievementCard";
import GradientButton from "../components/ui/GradientButton";

const infoCards = [
  {
    icon: User,
    title: "Full Name",
    value: "Nitish Kumar",
  },
  {
    icon: GraduationCap,
    title: "Education",
    value: "Bachelor of Computer Applications (BCA)",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Bihar, India",
  },
  {
    icon: Mail,
    title: "Email",
    value: "ns8078287@gmail.com",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-900 py-24 lg:py-32"
    >
 

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-sky-500/10 blur-[130px]" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeading
          badge="ABOUT ME"
          title="Passionate"
          gradient="Full Stack Developer"
          description="I'm a MERN Stack Developer passionate about building beautiful, scalable and high-performance web applications with modern technologies."
        />

        <div className="grid lg:grid-cols-2 gap-20 items-center mt-24">
          {/* Left */}

          <AboutImageCard />

          {/* Right */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
          >
            <span className="inline-flex rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-2 text-sm text-sky-300">
              Who I Am
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight text-white">
              Building Modern Web
              <br />
              Experiences That Matter
            </h2>

            <p className="mt-8 text-slate-400 leading-8">
              I'm currently pursuing my Bachelor of Computer Applications (BCA)
              while mastering Full Stack Web Development. My primary focus is
              building scalable, responsive and production-ready web
              applications using the MERN Stack.
            </p>

            <p className="mt-6 text-slate-400 leading-8">
              I enjoy solving real-world problems, writing clean code and
              continuously learning modern technologies to become a better
              software engineer every day.
            </p>
            

            <div className="grid sm:grid-cols-2 gap-5 mt-10">
              {infoCards.map((item, index) => (
                <InfoCard
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  value={item.value}
                  delay={index * 0.1}
                />
              ))}
            </div>
 

            <div className="grid grid-cols-2 gap-5 mt-10">
              <AchievementCard
                number={10}
                suffix="+"
                title="Projects"
                subtitle="Completed"
                delay={0.1}
              />

              <AchievementCard
                number={100}
                suffix="+"
                title="DSA"
                subtitle="Problems Solved"
                delay={0.2}
              />

              <AchievementCard
                number={1}
                suffix="+"
                title="Years"
                subtitle="Learning"
                delay={0.3}
              />

              <AchievementCard
                number={6}
                suffix="+"
                title="Technologies"
                subtitle="Working With"
                delay={0.4}
              />
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-semibold text-white mb-5">
                Tech Stack
              </h3>

              <div className="flex flex-wrap gap-3">
                {[
                  "React",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "JavaScript",
                  "Tailwind CSS",
                  "Git",
                  "GitHub",
                ].map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{
                      scale: 1.08,
                      y: -4,
                    }}
                    className="
                      rounded-full
                      border
                      border-sky-500/20
                      bg-white/5
                      px-4
                      py-2
                      text-sm
                      text-slate-300
                      backdrop-blur-xl
                      hover:border-sky-400
                      hover:text-sky-300
                      transition-all
                      duration-300
                    "
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
 

            <div className="mt-12 flex flex-wrap gap-4">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
