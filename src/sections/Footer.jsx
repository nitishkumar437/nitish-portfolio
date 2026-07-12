import { Heart } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950">
      {/* Background Glow */}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-sky-500/10 blur-[120px]" />

        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-14 md:py-16 lg:py-20">
        {/* Top */}

        <div className="flex flex-col items-center gap-12 text-center lg:flex-row lg:items-start lg:justify-between lg:text-left">
          {/* Logo */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black">
              <span className="text-sky-400">Nitish</span>

              <span className="text-white">.</span>
            </h2>

            <p className="mt-5 max-w-md text-slate-400 leading-8">
              Passionate MERN Stack Developer building modern, scalable and
              responsive web applications.
            </p>
          </motion.div>

          {/* Navigation */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              grid
              grid-cols-2
              sm:grid-cols-3
              gap-x-10
              gap-y-5
              text-center
            "
          >
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Skills", "#skills"],
              ["Projects", "#projects"],
              ["Journey", "#journey"],
              ["Contact", "#contact"],
            ].map(([name, link]) => (
              <a
                key={name}
                href={link}
                className="
                  text-slate-300
                  transition
                  duration-300
                  hover:text-sky-400
                "
              >
                {name}
              </a>
            ))}
          </motion.div>

          {/* Social */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <a
              href="https://github.com/nitishkumar437"
              target="_blank"
              rel="noreferrer"
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                border
                border-white/10
                bg-white/5
                text-2xl
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-sky-400
                hover:text-sky-400
                hover:shadow-[0_0_25px_rgba(56,189,248,.35)]
              "
            >
              <FaGithub />
            </a>

            <a
              href="#"
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                border
                border-white/10
                bg-white/5
                text-2xl
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-sky-400
                hover:text-sky-400
                hover:shadow-[0_0_25px_rgba(56,189,248,.35)]
              "
            >
              <FaLinkedin />
            </a>

            <a
              href="#"
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                border
                border-white/10
                bg-white/5
                text-2xl
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-pink-500
                hover:text-pink-500
                hover:shadow-[0_0_25px_rgba(236,72,153,.35)]
              "
            >
              <FaInstagram />
            </a>
          </motion.div>
        </div>

        {/* Divider */}

        <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Bottom */}

        <div className="flex flex-col items-center gap-5 text-center lg:flex-row lg:justify-between">
          <p className="text-sm md:text-base leading-7 text-slate-400">
            © {new Date().getFullYear()} Nitish Kumar. All Rights Reserved.
          </p>

          <p className="flex flex-wrap items-center justify-center gap-2 text-sm md:text-base text-slate-400">
            Made with
            <Heart
              size={18}
              className="fill-red-500 text-red-500 animate-pulse"
            />
            using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
