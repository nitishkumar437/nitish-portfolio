import { motion } from "framer-motion";

import SectionHeading from "../components/ui/SectionHeading";
import FeaturedProject from "../components/projects/FeaturedProject";
import ProjectCard from "../components/projects/ProjectCard";

import { featuredProject, projects } from "../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-950 py-24 lg:py-32"
    >
      {/* Background Glow */}

      <div className="absolute -top-40 left-0 w-[450px] h-[450px] rounded-full bg-sky-500/10 blur-[160px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[170px]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeading
          badge="MY PROJECTS"
          title="Featured"
          gradient="Work"
          description="A collection of real-world projects built using modern technologies including React, Node.js, Express.js and MongoDB."
        />

        {/* Featured Project */}

        <div className="mt-20">
          <FeaturedProject project={featuredProject} />
        </div>

        {/* Other Projects */}

        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white mb-10">
            Other Projects
          </h3>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                delay={index * 0.15}
              />
            ))}
          </div>
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
            mt-24
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-10
            text-center
          "
        >
          <h3 className="text-3xl font-bold text-white">
            More Projects Coming Soon 🚀
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-slate-400 leading-8">
            I'm continuously working on new full-stack applications and
            improving my existing projects. Stay tuned for more exciting work.
          </p>

          <a
            href="https://github.com/nitishkumar437"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              mt-8
              rounded-xl
              bg-gradient-to-r
              from-sky-500
              to-cyan-500
              px-7
              py-4
              font-semibold
              text-white
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-[0_0_35px_rgba(56,189,248,.40)]
            "
          >
            Visit My GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
