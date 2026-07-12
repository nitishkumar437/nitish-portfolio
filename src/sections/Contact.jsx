import { motion } from "framer-motion";

import SectionHeading from "../components/ui/SectionHeading";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 py-16 md:py-24 lg:py-32"
    >
      {/* Background Glow */}

      <div className="absolute -top-32 left-0 h-72 w-72 md:h-96 md:w-96 rounded-full bg-sky-500/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-80 w-80 md:h-[500px] md:w-[500px] rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          badge="CONTACT"
          title="Let's"
          gradient="Work Together"
          description="Have a project in mind or looking for a MERN Stack Developer? Feel free to contact me anytime."
        />

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            mt-12
            md:mt-16
            lg:mt-20
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-8
            md:gap-10
            lg:gap-14
            items-start
          "
        >
          {/* Left Side */}

          <ContactInfo />

          {/* Right Side */}

          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
