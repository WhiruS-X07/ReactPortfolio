import { motion } from "framer-motion";
import ProjectCard from "../components/project/ProjectCard";
import { projects } from "../data/project";

const Projects = () => {
  return (
    <main className="bg-[#050505] pt-28 lg:pt-36">
      {/* Intro */}
      <section className="relative overflow-hidden">
        {/* Glow */}
        <div className="absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-red-600/10 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.45em] text-red-500">
              Projects
            </span>

            <h1 className="mt-5 text-5xl font-black text-white md:text-6xl">
              Things I've Built.
            </h1>

            <p className="mx-auto mt-6 text-lg leading-8 text-zinc-400">
              A collection of projects that showcase my journey in web
              development, from responsive user interfaces to full-stack
              applications powered by modern technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="space-y-32">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                reverse={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Ending */}
      <section className="pb-32">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl px-6 text-center"
        >
          <h2 className="text-3xl font-bold text-white">
            More Projects Coming Soon
          </h2>

          <p className="mt-5 text-lg leading-8 text-zinc-400">
            I'm continuously building new projects, exploring React and the
            MERN stack, and improving my development skills through real-world
            applications.
          </p>
        </motion.div>
      </section>
    </main>
  );
};

export default Projects;