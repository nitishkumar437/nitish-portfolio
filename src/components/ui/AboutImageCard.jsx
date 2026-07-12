import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import profile from "../../assets/images/profile.png";

const AboutImageCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative flex justify-center"
    >
      <div className="absolute w-80 h-80 rounded-full bg-sky-500/20 blur-[120px]" />

      {/* Glass Card */}

      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.35 }}
        className="
          relative
          rounded-[30px]
          border
          border-white/10
          bg-white/5
          backdrop-blur-2xl
         p-5 sm:p-6
          shadow-[0_20px_80px_rgba(0,0,0,.35)]
        "
      >
        {/* Rotating Ring */}

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            inset-6
            rounded-full
            border-2
            border-dashed
            border-sky-500/40
          "
        />

        {/* Profile */}

        <img
          src={profile}
          alt="Nitish Kumar"
          className="
  relative
  z-10
  w-60
  h-60
  sm:w-64
  sm:h-64
  lg:w-80
  lg:h-80
  rounded-full
  object-cover
  object-top
  border-[5px]
  border-sky-400
  shadow-[0_0_45px_rgba(56,189,248,.30)]
"
        />

        {/* Experience */}

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{
            repeat: Infinity,
            duration: 3,
          }}
          className="
            absolute
            z-20
           -lg:-left-10
           -left-6
            top-16
            w-32
            rounded-2xl
            border
            border-sky-500/25
            bg-slate-900/95
            backdrop-blur-xl
            p-4
            shadow-xl
          "
        >
          <Briefcase size={24} className="text-sky-400" />

          <h3 className="mt-3 text-3xl font-bold text-white">
            1<span className="text-sky-400">+</span>
          </h3>

          <p className="mt-1 text-sm text-slate-400">Years Learning</p>
        </motion.div>

        {/* Location */}

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            repeat: Infinity,
            duration: 3,
          }}
          className="
            absolute
            z-20
            -right-8
            top-40
            w-32
            rounded-2xl
            border
            border-sky-500/25
            bg-slate-900/95
            backdrop-blur-xl
            p-4
            shadow-xl
          "
        >
          <MapPin size={22} className="text-sky-400" />

          <h3 className="mt-3 text-lg  font-bold text-white">Bihar</h3>

          <p className="text-sm text-slate-400">India</p>
        </motion.div>

        {/* Online Status */}

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="
    absolute
    z-30
    bottom-12
    right-14
  "
        >
          <div className="relative">
            <span className="absolute inset-0 rounded-full bg-emerald-400 blur-md opacity-80"></span>

            <span className="absolute h-5 w-5 rounded-full bg-emerald-400 animate-ping opacity-50"></span>

            <span className="relative block h-4 w-4 rounded-full bg-emerald-500 border-2 border-white"></span>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutImageCard;
