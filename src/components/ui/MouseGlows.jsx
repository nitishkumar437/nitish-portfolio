import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const MouseGlow = () => {
  const [enabled, setEnabled] = useState(false);

  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  const x = useSpring(mouseX, {
    stiffness: 120,
    damping: 25,
  });

  const y = useSpring(mouseY, {
    stiffness: 120,
    damping: 25,
  });

  useEffect(() => {
    // Disable on Mobile
    if (window.innerWidth < 1024) return;

    setEnabled(true);

    const move = (e) => {
      mouseX.set(e.clientX - 180);
      mouseY.set(e.clientY - 180);
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  if (!enabled) return null;

  return (
    <motion.div
      style={{
        x,
        y,
      }}
      className="
      pointer-events-none
      fixed
      left-0
      top-0
      z-0
      h-90
      w-90
      rounded-full
      bg-sky-500/15
      blur-[120px]
      "
    />
  );
};

export default MouseGlow;
