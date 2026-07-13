import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggle);

    return () => window.removeEventListener("scroll", toggle);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollTop}
      className={`fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-50 rounded-full bg-sky-500 p-3 sm:p-4 text-white shadow-[0_0_25px_rgba(56,189,248,.35)] transition-all duration-300 sm:hover:bg-sky-400 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <ArrowUp className="h-5 w-5 sm:h-5.5 sm:w-5.5" />
    </button>
  );
};

export default ScrollToTop;
