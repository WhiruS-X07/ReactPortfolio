import { motion } from "framer-motion";
import { GraduationCap, Calendar, School } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institute: "Indira Gandhi National Open University (IGNOU)",
    duration: "2022 — 2025",
    status: "Graduated",
  },
  {
    degree: "Senior Secondary Education (CBSE)",
    institute: "Government Sarvodaya Bal Vidyalaya",
    duration: "2020 — 2022",
    status: "Completed",
  },
];

const Education = () => {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.45em] text-red-500">
            Education
          </span>

          <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
            Academic Background
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            My academic journey has given me a solid foundation in computer
            science while encouraging continuous learning, problem-solving, and
            practical software development.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="space-y-8">
          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{
                y: -6,
                scale: 1.01,
              }}
              className="group rounded-3xl border border-white/10 bg-[#111111] p-8 transition-all duration-300 hover:border-red-600/40 hover:shadow-[0_0_35px_rgba(220,38,38,.12)]"
            >
              <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                <div className="flex items-start gap-6">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-red-600/10 transition-colors duration-300 group-hover:bg-red-600/20">
                    <GraduationCap
                      size={30}
                      className="text-red-500"
                    />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {item.degree}
                    </h3>

                    <div className="mt-4 flex items-center gap-2 text-zinc-400">
                      <School size={18} />
                      <span>{item.institute}</span>
                    </div>

                    <div className="mt-3 flex items-center gap-2 text-zinc-500">
                      <Calendar size={18} />
                      <span>{item.duration}</span>
                    </div>
                  </div>
                </div>

                <span
                  className={`rounded-full px-5 py-2 text-sm font-semibold ${
                    item.status === "Graduated"
                      ? "bg-green-500/15 text-green-400"
                      : "bg-zinc-800 text-zinc-300"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;