import { motion } from "framer-motion";
import { Code2, Layers3, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "I build responsive and scalable web applications using modern technologies like React, JavaScript, Tailwind CSS, PHP, and MySQL.",
  },
  {
    icon: Layers3,
    title: "UI Development",
    description:
      "I enjoy creating clean, modern, and intuitive interfaces that focus on user experience, performance, and responsive design.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "I love turning ideas into real-world solutions through logical thinking, continuous learning, and writing clean, maintainable code.",
  },
];

const WhatIDo = () => {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.45em] text-red-500">
            What I Do
          </span>

          <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
            Turning Ideas Into
            <span className="block text-red-600">
              Modern Digital Experiences.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
            I focus on building applications that are fast, responsive, and
            user-friendly while continuously improving my skills and exploring
            modern web technologies.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group rounded-3xl border border-white/10 bg-[#111111] p-8 transition-all duration-300 hover:border-red-600/40 hover:shadow-[0_0_35px_rgba(220,38,38,.15)]"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600/10 transition-all duration-300 group-hover:bg-red-600/20">
                  <Icon
                    size={32}
                    className="text-red-500 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="mt-5 leading-8 text-zinc-400">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;