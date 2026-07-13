import { useEffect, useState } from "react";
import { Menu, X, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Journey", href: "#journey" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = (window.scrollY / totalHeight) * 100;

      setScrollProgress(progress);

      let current = "home";

      document.querySelectorAll("section").forEach((section) => {
        const top = section.offsetTop - 140;
        const height = section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {
          current = section.id;
        }
      });

      setActive(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-99999 transition-all duration-500 ${
        scrolled
          ? "bg-slate-950/75 backdrop-blur-2xl border-b border-slate-800 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="absolute top-0 left-0 w-full h-0.5 bg-transparent">
        <motion.div
          className="h-full bg-linear-to-r from-sky-400 via-cyan-400 to-blue-500"
          animate={{
            width: `${scrollProgress}%`,
          }}
          transition={{
            duration: 0.2,
          }}
        />
      </div>
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-6 lg:px-8 py-4">
        <a href="#home" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{
              rotate: 8,
              scale: 1.08,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
      w-11
      h-11
      rounded-xl
      bg-linear-to-br
      from-sky-400
      via-cyan-400
      to-blue-500
      flex
      items-center
      justify-center
      font-black
      text-slate-950
      shadow-[0_0_30px_rgba(56,189,248,.45)]
    "
          >
            N
          </motion.div>

          <div className="leading-none">
            <h2 className="text-2xl lg:text-3xl font-black tracking-tight">
              <span className="text-sky-400">Nitish</span>

              <span className="text-white">.</span>
            </h2>

            <p className="text-[11px] text-slate-500 mt-1 tracking-wider uppercase">
              MERN Developer
            </p>
          </div>
        </a>
        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = active === link.href.substring(1);

            return (
              <li key={link.name} className="relative">
                <a
                  href={link.href}
                  className={`font-medium transition-all duration-300 ${
                    isActive
                      ? "text-sky-400"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.name}
                </a>

                {isActive && (
                  <motion.span
                    layoutId="active-navbar"
                    className="absolute left-0 -bottom-2 h-0.75 w-full rounded-full bg-sky-400 shadow-[0_0_15px_rgba(56,189,248,.8)]"
                  />
                )}
              </li>
            );
          })}
        </ul>
        <div className="hidden lg:flex items-center gap-4">
          <motion.a
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.97,
            }}
            href="/resume.pdf"
            download
            className="
    flex
    items-center
    gap-2
    rounded-xl
    bg-sky-500
    px-5
    py-2.5
    font-medium
    text-white
    hover:bg-sky-400
    shadow-[0_0_25px_rgba(56,189,248,.35)]
    transition
    "
          >
            <Download size={17} />
            Resume
          </motion.a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
    lg:hidden
    w-11
    h-11
    rounded-xl
    border
    border-slate-700
    bg-slate-900/70
    backdrop-blur-xl
    flex
    items-center
    justify-center
    text-white
    hover:border-sky-400
    hover:scale-105
    transition-all
    duration-300
  "
        >
          <motion.div
            animate={{
              rotate: menuOpen ? 180 : 0,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.div>
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              x: "100%",
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: "100%",
            }}
            transition={{
              duration: 0.35,
            }}
            className="
      fixed
      inset-0
      z-9999
      lg:hidden
      bg-slate-950/95
      backdrop-blur-2xl
      "
          >
            <div className="flex flex-col justify-center items-center h-screen pt-20 px-8">
              <ul className="space-y-7 text-center">
                {navLinks.map((link, index) => {
                  const isActive = active === link.href.substring(1);

                  return (
                    <motion.li
                      key={link.name}
                      initial={{
                        opacity: 0,
                        y: 30,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: index * 0.08,
                      }}
                    >
                      <a
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className={`text-2xl font-bold transition ${
                          isActive
                            ? "text-sky-400"
                            : "text-slate-300 hover:text-white"
                        }`}
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>

              <div className="flex gap-5 mt-10">
                <a
                  href="https://github.com/nitishkumar437"
                  target="_blank"
                  rel="noreferrer"
                  className="
            w-12
            h-12
            rounded-full
            border
            border-slate-700
            flex
            items-center
            justify-center
            hover:border-sky-400
            transition
            "
                >
                  <FaGithub className="text-xl" />
                </a>

                <a
                  href="https://linkedin.com/in/nitish-kumar-a2ab47375"
                  target="_blank"
                  rel="noreferrer"
                  className="
            w-12
            h-12
            rounded-full
            border
            border-slate-700
            flex
            items-center
            justify-center
            hover:border-sky-400
            transition
            "
                >
                  <FaLinkedin className="text-xl" />
                </a>

                <a
                  href="mailto:ns8078287@gmail.com"
                  className="
            w-12
            h-12
            rounded-full
            border
            border-slate-700
            flex
            items-center
            justify-center
            hover:border-sky-400
            transition
            "
                >
                  <Mail size={20} />
                </a>
              </div>

              <motion.a
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                href="/resume.pdf"
                download
                className="
          mt-8
          flex
          items-center
          gap-2
          rounded-xl
          bg-sky-500
          px-8
          py-4
          text-white
          font-medium
          shadow-[0_0_25px_rgba(56,189,248,.35)]
          "
              >
                <Download size={18} />
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
