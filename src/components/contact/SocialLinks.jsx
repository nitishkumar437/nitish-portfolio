import { motion } from "framer-motion";
import { socialLinks } from "../../data/socialLinks";

const SocialLinks = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {socialLinks.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * 0.1,
              duration: 0.5,
            }}
            whileHover={{
              y: -6,
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              group
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              border
              border-sky-500/20
              bg-white/5
              backdrop-blur-xl
              text-sky-400
              transition-all
              duration-300
              hover:border-sky-400
              hover:bg-sky-500/10
              hover:shadow-[0_0_30px_rgba(56,189,248,.35)]
            "
          >
            <Icon
              size={24}
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </motion.a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
