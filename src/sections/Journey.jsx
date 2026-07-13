import { motion } from "framer-motion";

import SectionHeading from "../components/ui/SectionHeading";

import TimelineCard from "../components/journey/TimelineCard";
import { journey } from "../data/journey";

const Journey = () => {
  return (
    <section
      id="journey"
      className="relative overflow-hidden bg-slate-950 py-28"
    >
      <div className="absolute -top-40 left-0 h-96 w-96 rounded-full bg-sky-500/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-112.5 w-112.5 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          badge="MY JOURNEY"
          title="Learning"
          gradient="Timeline"
          description="My journey from learning programming fundamentals to building complete MERN Stack applications."
        />

        <div className="relative mt-24">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="
absolute
left-6
md:left-1/2
md:-translate-x-1/2
top-0
w-0.75
rounded-full
bg-linear-to-b
from-sky-400
via-cyan-400
to-blue-500
"
          />

          {journey.map((item, index) => (
            <TimelineCard key={index} item={item} index={index} />
          ))}
        </div>

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
          <h3 className="text-4xl font-black text-white">
            Ready For My Next Journey 🚀
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            I'm actively looking for internship opportunities where I can
            contribute, learn from experienced developers, and grow as a Full
            Stack MERN Developer.
          </p>

          <a
            href="#contact"
            className="
              mt-10
              inline-flex
              rounded-xl
              bg-linear-to-r
              from-sky-500
              to-cyan-500
              px-8
              py-4
              font-semibold
              text-white
              shadow-[0_0_30px_rgba(56,189,248,.35)]
              transition
              hover:scale-105
            "
          >
            Let's Connect
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Journey;
