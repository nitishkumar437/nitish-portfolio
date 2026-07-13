import { motion } from "framer-motion";

const blobs = [
  {
    className: "w-[420px] h-[420px] bg-sky-500/20 top-[-120px] left-[-120px]",
    duration: 18,
  },
  {
    className:
      "w-[500px] h-[500px] bg-cyan-500/15 bottom-[-180px] right-[-120px]",
    duration: 22,
  },
  {
    className: "w-[380px] h-[380px] bg-indigo-500/15 top-1/3 left-1/2",
    duration: 20,
  },
  {
    className: "w-[300px] h-[300px] bg-blue-400/10 bottom-20 left-1/4",
    duration: 16,
  },
];

const AuroraBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full blur-[140px] ${blob.className}`}
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.15, 0.95, 1],
            rotate: [0, 8, -8, 0],
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Grid Overlay */}

      <div
        className="
        absolute
        inset-0
        bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]
        bg-size[70px_70px]
        opacity-30
        "
      />

      {/* Dark Gradient */}

      <div className="absolute inset-0 bg-linear-to-b from-transparent via-slate-950/20 to-slate-950"></div>
    </div>
  );
};

export default AuroraBackground;
