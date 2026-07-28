import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

const ProjectCard = ({ project, reverse }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`grid items-center gap-14 lg:grid-cols-2 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Screenshot */}
      <motion.a
        whileHover={{ y: -8 }}
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#111111]"
      >
        <img
          src={project.image}
          alt={project.title}
          className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
      </motion.a>

      {/* Content */}
      <div>
        <span className="text-sm uppercase tracking-[0.35em] text-red-500">
          Featured Project
        </span>

        <h2 className="mt-4 text-4xl font-black text-white">{project.title}</h2>

        <p className="mt-6 text-lg leading-8 text-zinc-400">
          {project.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-[#111111] px-4 py-2 text-sm text-zinc-300"
            >
              {tech}
            </span>
          ))}

          {project.tech.length > 4 && (
            <span className="rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-300">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="mt-10 flex gap-4">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 font-medium text-white transition hover:bg-red-500"
          >
            Live Demo
            <ArrowUpRight size={18} />
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 font-medium text-zinc-300 transition hover:border-red-500 hover:text-white"
          >
            GitHub
            <FaGithub size={18} />
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
