import { motion } from "framer-motion";
import { Brain, Rocket, Code2 } from "lucide-react";

const learning = [
  {
    icon: Brain,
    title: "MERN Stack",
    description:
      "Strengthening my knowledge of MongoDB, Express.js, React, and Node.js by building real-world applications.",
  },
  {
    icon: Rocket,
    title: "Performance & UI",
    description:
      "Learning how to build fast, accessible, and visually polished user experiences using modern web technologies.",
  },
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Continuously improving my coding practices by writing maintainable, scalable, and reusable code.",
  },
];

const CurrentlyLearning = () => {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.45em] text-red-500">
            Currently Learning
          </span>

          <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
            Always Growing.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-zinc-400">
            Technology evolves every day, and I'm committed to continuously
            improving my skills through hands-on projects, experimentation, and
            learning modern development practices.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {learning.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-white/10 bg-[#111111] p-8 transition-all duration-300 hover:border-red-600/40 hover:shadow-[0_0_35px_rgba(220,38,38,.15)]"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600/10">
                  <Icon className="text-red-500" size={28} />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CurrentlyLearning;