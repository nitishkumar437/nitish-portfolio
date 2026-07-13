import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      toast.success("Message sent successfully 🚀");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      toast.error("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      initial={{
        opacity: 0,
        x: 60,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.7,
      }}
      onSubmit={handleSubmit}
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-8
      "
    >
      <h2 className="text-3xl font-bold text-white">Send Message</h2>

      <p className="mt-3 text-slate-400">
        Fill out the form below and I'll get back to you as soon as possible.
      </p>
 

      <div className="mt-8">
        <label className="mb-2 block text-sm text-slate-300">Full Name</label>

        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
          className="
            w-full
            rounded-xl
            border
            border-slate-700
            bg-slate-900/60
            px-4
            py-3
            text-white
            outline-none
            transition
            focus:border-sky-400
          "
        />
      </div>
 

      <div className="mt-6">
        <label className="mb-2 block text-sm text-slate-300">Email</label>

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
          className="
            w-full
            rounded-xl
            border
            border-slate-700
            bg-slate-900/60
            px-4
            py-3
            text-white
            outline-none
            transition
            focus:border-sky-400
          "
        />
      </div>
 

      <div className="mt-6">
        <label className="mb-2 block text-sm text-slate-300">Subject</label>

        <input
          type="text"
          name="subject"
          placeholder="Enter subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="
            w-full
            rounded-xl
            border
            border-slate-700
            bg-slate-900/60
            px-4
            py-3
            text-white
            outline-none
            transition
            focus:border-sky-400
          "
        />
      </div>
 

      <div className="mt-6">
        <label className="mb-2 block text-sm text-slate-300">Message</label>

        <textarea
          rows={6}
          name="message"
          placeholder="Write your message..."
          value={formData.message}
          onChange={handleChange}
          required
          className="
            w-full
            resize-none
            rounded-xl
            border
            border-slate-700
            bg-slate-900/60
            px-4
            py-3
            text-white
            outline-none
            transition
            focus:border-sky-400
          "
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="
    mt-8
    flex
    w-full
    items-center
    justify-center
    gap-2
    rounded-xl
    bg-linear-to-r
    from-sky-500
    to-cyan-500
    px-6
    py-4
    font-semibold
    text-white
    transition-all
    duration-300
    hover:scale-[1.02]
    hover:shadow-[0_0_35px_rgba(56,189,248,.35)]
    disabled:opacity-60
    disabled:cursor-not-allowed
  "
      >
        {loading ? (
          <>
            <Loader2 className="animate-spin" size={18} />
            Sending...
          </>
        ) : (
          <>
            <Send size={18} />
            Send Message
          </>
        )}
      </button>
    </motion.form>
  );
};

export default ContactForm;
