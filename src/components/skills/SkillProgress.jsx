import { motion } from "framer-motion";

const SkillProgress = ({ level }) => {
  return (
    <div className="mt-4">
      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-700">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1.4,
            ease: "easeOut",
          }}
          className="h-full rounded-full bg-linear-to-r from-sky-400 via-cyan-400 to-blue-500"
        />
      </div>

      <div className="mt-2 flex justify-end">
        <span className="text-sm font-medium text-sky-400">{level}%</span>
      </div>
    </div>
  );
};

export default SkillProgress;
