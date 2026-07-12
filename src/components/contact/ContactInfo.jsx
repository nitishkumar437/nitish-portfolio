import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

import SocialLinks from "./SocialLinks";

const contactItems = [
  {
    icon: Mail,
    title: "Email",
    value: "ns8078287@gmail.com",
    href: "mailto:ns8078287@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 74818 82035",
    href: "tel:+917481882035",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Bihar, India",
    href: "#",
  },
];

const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-6
        md:p-8
      "
    >
      {/* Badge */}

      <span
        className="
          inline-flex
          items-center
          rounded-full
          border
          border-emerald-500/20
          bg-emerald-500/10
          px-5
          py-2.5
          text-xs
          sm:text-sm
          font-medium
          text-emerald-300
        "
      >
        🟢 Available For Internship
      </span>

      {/* Heading */}

      <h2
        className="
          mt-6
          text-4xl
          sm:text-5xl
          lg:text-6xl
          font-black
          leading-tight
          text-white
        "
      >
        Let's Build
        <br />
        Something Great 🚀
      </h2>

      <p
        className="
          mt-6
          text-base
          md:text-lg
          leading-8
          text-slate-400
        "
      >
        I'm always open to discussing internships, freelance projects,
        collaborations or simply talking about web development.
      </p>

      {/* Contact Items */}

      <div className="mt-10 space-y-5">
        {contactItems.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.title}
              href={item.href}
              className="
                group
                flex
                items-center
                gap-4
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-4
                md:p-5
                transition-all
                duration-300
                hover:border-sky-400
                hover:bg-sky-500/10
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  md:h-14
                  md:w-14
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-sky-500/10
                  text-sky-400
                "
              >
                <Icon size={22} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm text-slate-400">{item.title}</p>

                <h4
                  className="
                    mt-1
                    font-semibold
                    text-white
                    text-base
                    md:text-lg
                    break-all
                  "
                >
                  {item.value}
                </h4>
              </div>
            </a>
          );
        })}
      </div>

      {/* Social */}

      <div className="mt-10">
        <h3 className="mb-5 text-lg font-semibold text-white">Follow Me</h3>

        <SocialLinks />
      </div>
    </motion.div>
  );
};

export default ContactInfo;
