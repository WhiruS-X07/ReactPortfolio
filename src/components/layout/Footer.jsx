import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505]">
      {/* Top Glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-600/60 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-24">
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <span className="mb-4 text-xs uppercase tracking-[0.45em] text-red-500">
            AVAILABLE FOR WORK
          </span>

          <h2 className="max-w-3xl text-5xl font-black leading-tight text-white md:text-6xl">
            Let's create something
            <span className="block text-red-600"> unforgettable.</span>
          </h2>

          <p className="mt-6 max-w-xl text-lg text-zinc-400">
            I'm always interested in building modern web experiences,
            collaborating on exciting ideas, and solving real problems.
          </p>

          <a
            href="mailto:your@email.com"
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-red-600 px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-red-500 hover:shadow-[0_0_35px_rgba(220,38,38,.35)]"
          >
            Get In Touch
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </motion.div>

        {/* Divider */}
        <div className="my-20 h-px w-full bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <span className="text-3xl font-black text-white">P</span>

            <motion.span
              animate={{
                opacity: [0.6, 1, 0.6],
                scale: [1, 1.2, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="h-2.5 w-2.5 rounded-full bg-red-600 shadow-[0_0_20px_rgba(220,38,38,.9)]"
            />

            <span className="text-3xl font-black text-white">W</span>
          </motion.div>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/WhiruS-X07"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-full border border-white/10 p-3 text-zinc-400 transition-all duration-300 hover:border-red-600 hover:bg-red-600 hover:text-white"
            >
              <FaGithub
                size={18}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/whirus"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-full border border-white/10 p-3 text-zinc-400 transition-all duration-300 hover:border-red-600 hover:bg-red-600 hover:text-white"
            >
              <FaLinkedin
                size={18}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </a>

            <a
              href="mailto:piyush1672003@gmail.com"
              className="group rounded-full border border-white/10 p-3 text-zinc-400 transition-all duration-300 hover:border-red-600 hover:bg-red-600 hover:text-white"
            >
              <Mail
                size={18}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Piyush. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
