import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = (scrollTop / height) * 100;

      setScroll(progress);
    };

    window.addEventListener("scroll", updateScroll);

    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-sky-400 z-9999 transition-all duration-150"
      style={{ width: `${scroll}%` }}
    />
  );
};

export default ScrollProgress;
