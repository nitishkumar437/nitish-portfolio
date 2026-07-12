import { ArrowRight } from "lucide-react";

const GradientButton = ({
  children,
  href = "#",
  download = false,
  primary = true,
  icon = true,
}) => {
  return (
    <a
      href={href}
      download={download}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-xl px-7 py-4 font-semibold transition-all duration-300 hover:scale-105 active:scale-95
      ${
        primary
          ? "bg-gradient-to-r from-sky-500 via-cyan-500 to-sky-600 text-white shadow-[0_0_30px_rgba(56,189,248,.35)]"
          : "border border-slate-700 bg-slate-900/70 backdrop-blur hover:border-sky-400 text-white"
      }`}
    >
      {/* Glow */}
      <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-300"></span>

      {/* Shine Effect */}
      <span className="absolute -left-24 top-0 h-full w-16 rotate-12 bg-white/20 blur-md group-hover:left-[120%] transition-all duration-700"></span>

      {/* Content */}
      <span className="relative flex items-center gap-2">
        {children}

        {icon && (
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        )}
      </span>
    </a>
  );
};

export default GradientButton;
