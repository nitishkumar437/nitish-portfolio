import { motion } from "framer-motion";

import SectionHeading from "../components/ui/SectionHeading";
import SkillCategory from "../components/skills/SkillCategory";

import { skillCategories } from "../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-slate-950 py-24 lg:py-32"
    >
      {/* Background Glow */}

      <div className="absolute -top-40 -left-40 w-[450px] h-[450px] rounded-full bg-sky-500/10 blur-[160px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[170px]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeading
          badge="MY SKILLS"
          title="Technologies"
          gradient="I Work With"
          description="I enjoy building modern full-stack web applications using the latest technologies. Here are the tools and technologies I use regularly."
        />

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.title}
              category={category}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}

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
            duration: 0.8,
          }}
          className="
            mt-20
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-10
            text-center
          "
        >
          <h3 className="text-3xl font-bold text-white">Always Learning 🚀</h3>

          <p className="mx-auto mt-5 max-w-3xl text-slate-400 leading-8">
            Technology evolves every day, and so do I. I continuously improve my
            skills by building real-world projects, exploring new tools, and
            learning modern best practices.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              "Clean Code",
              "Responsive Design",
              "REST API",
              "Problem Solving",
              "Team Collaboration",
            ].map((item) => (
              <span
                key={item}
                className="
                  rounded-full
                  border
                  border-sky-500/20
                  bg-sky-500/10
                  px-5
                  py-2
                  text-sm
                  text-sky-300
                "
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
