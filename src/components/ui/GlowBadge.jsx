import { motion } from "framer-motion";

const GlowBadge = ({ children, color = "sky" }) => {
  const colors = {
    sky: {
      border: "border-sky-500/30",
      bg: "bg-sky-500/10",
      text: "text-sky-300",
      glow: "shadow-[0_0_20px_rgba(56,189,248,0.25)]",
    },

    green: {
      border: "border-emerald-500/30",
      bg: "bg-emerald-500/10",
      text: "text-emerald-300",
      glow: "shadow-[0_0_20px_rgba(16,185,129,0.25)]",
    },

    purple: {
      border: "border-violet-500/30",
      bg: "bg-violet-500/10",
      text: "text-violet-300",
      glow: "shadow-[0_0_20px_rgba(139,92,246,0.25)]",
    },
  };

  const theme = colors[color] || colors.sky;

  return (
    <motion.span
      whileHover={{
        scale: 1.05,
        y: -2,
      }}
      transition={{
        duration: 0.2,
      }}
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium backdrop-blur-xl transition-all duration-300 ${theme.border} ${theme.bg} ${theme.text} ${theme.glow}`}
    >
      {children}
    </motion.span>
  );
};

export default GlowBadge;
