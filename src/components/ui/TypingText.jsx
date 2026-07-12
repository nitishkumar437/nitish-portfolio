import { useEffect, useState } from "react";

const roles = [
  "MERN Stack Developer",
  "Full Stack Developer",
  "React Developer",
  "Node.js Developer",
  "Backend Developer",
];

const TypingText = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const speed = isDeleting ? 40 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1));

        if (text === currentRole) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setText(currentRole.substring(0, text.length - 1));

        if (text === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <div className="mt-6 h-14 flex items-center justify-center lg:justify-start">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
        <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-500 bg-clip-text text-transparent">
          {text}
        </span>

        <span className="text-sky-400 animate-pulse">|</span>
      </h2>
    </div>
  );
};

export default TypingText;
