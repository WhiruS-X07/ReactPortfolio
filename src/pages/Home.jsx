import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Download } from "lucide-react";

import Profile from "../assets/profile.png";

const Home = () => {
  return (
    <section className="relative overflow-hidden bg-[#050505]">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[180px]" />

      {/* Right Glow */}
      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-red-600/20 blur-[140px] md:h-[550px] md:w-[550px]" />

      <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl flex-col items-center px-6 pt-24 lg:flex-row lg:justify-between lg:gap-12">
        {/* ================= LEFT ================= */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full text-center lg:w-1/2 lg:text-left"
        >
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-red-600/30 bg-red-600/10 px-5 py-2">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-red-500" />
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-red-500">
              Available For Work
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              Piyush
            </span>
          </h1>

          {/* Type Animation */}
          <div className="mt-6 h-14 text-2xl font-bold text-zinc-200 sm:text-3xl lg:text-4xl">
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                1800,
                "React Developer",
                1800,
                "UI Engineer",
                1800,
                "Aspiring Full-Stack Developer",
                1800,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg lg:mx-0">
            I build responsive React applications with clean architecture,
            reusable components, and modern UI focused on performance and user
            experience.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-wrap justify-center gap-5 lg:justify-start">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-3 rounded-full bg-red-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-red-500 hover:shadow-[0_0_35px_rgba(220,38,38,.35)]"
            >
              View Projects
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-[#111111] px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-red-600 hover:bg-[#171717]"
            >
              Download Resume
              <Download
                size={18}
                className="transition-transform group-hover:translate-y-1"
              />
            </a>
          </div>
        </motion.div>

        {/* ================= RIGHT ================= */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="mt-12 flex w-full justify-center lg:mt-0 lg:w-1/2 lg:justify-end"
        >
          <div className="relative h-[360px] w-[280px] sm:h-[480px] sm:w-[380px] lg:h-[650px] lg:w-full">
            {/* Glass Background */}
            <div className="absolute left-1/2 top-1/2 h-[75%] w-full -translate-x-1/2 -translate-y-1/2 rounded-[20px] bg-gradient-to-b from-white/[0.04] to-transparent backdrop-blur-sm shadow-[0_0_40px_rgba(220,38,38,0.12)] lg:rounded-[32px]" />

            {/* Background Glow */}
            <div className="absolute left-1/2 top-1/2 h-[75%] w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/15 blur-[90px] lg:blur-[120px]" />

            {/* Back Outline */}
            <div className="absolute left-[58%] top-[42%] h-[75%] w-full -translate-x-1/2 -translate-y-1/2 rounded-[20px] border border-white/20 lg:rounded-[32px]" />

            {/* Front Outline */}
            <div className="absolute left-[42%] top-[58%] h-[75%] w-full -translate-x-1/2 -translate-y-1/2 rounded-[20px] border border-white/20 lg:rounded-[32px]" />

            {/* Main Frame */}
            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[75%]
                w-full
                -translate-x-1/2
                -translate-y-1/2
                rounded-[20px]
                border
                border-red-500/40
                lg:rounded-[32px]
              "
            >
              {/* Image */}
              <img
                src={Profile}
                alt="Piyush"
                className="
                  h-full
                  w-full
                  rounded-[20px]
                  object-contain
                  select-none
                  pointer-events-none
                  drop-shadow-[0_25px_60px_rgba(0,0,0,0.7)]
                  lg:rounded-[32px]
                  lg:drop-shadow-[0_35px_80px_rgba(0,0,0,0.75)]
                "
              />

              {/* Corner Accents */}
              <div className="absolute -left-2 -top-2 h-8 w-8 border-l-[3px] border-t-[3px] border-red-500 sm:h-10 sm:w-10 lg:-left-3 lg:-top-3 lg:h-14 lg:w-14" />

              <div className="absolute -right-2 -top-2 h-8 w-8 border-r-[3px] border-t-[3px] border-red-500 sm:h-10 sm:w-10 lg:-right-3 lg:-top-3 lg:h-14 lg:w-14" />

              <div className="absolute -bottom-2 -left-2 h-8 w-8 border-b-[3px] border-l-[3px] border-red-500 sm:h-10 sm:w-10 lg:-bottom-3 lg:-left-3 lg:h-14 lg:w-14" />

              <div className="absolute -bottom-2 -right-2 h-8 w-8 border-b-[3px] border-r-[3px] border-red-500 sm:h-10 sm:w-10 lg:-bottom-3 lg:-right-3 lg:h-14 lg:w-14" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
