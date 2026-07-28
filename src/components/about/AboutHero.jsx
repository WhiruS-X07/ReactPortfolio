import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="relative py-20">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-red-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.45em] text-red-500">
            About
          </span>

          <h1 className="mt-5 text-4xl font-black text-white md:text-6xl">
            More than just code.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            Here's a quick overview of my background, the technologies I work
            with, what I'm currently learning, and how I approach building
            modern web applications.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;