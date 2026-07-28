import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "../../data/project";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiVite,
  SiGit,
  SiGithub,
  SiPhp,
  SiMysql,
  SiFramer,
} from "react-icons/si";
import { X, FolderOpen, Wrench } from "lucide-react";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
    ],
  },
  {
    title: "Styling & UI",
    skills: [
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
    ],
  },
  {
    title: "Tools & Backend Fundamentals",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ],
  },
];

const skillInfo = {
  HTML5: {
    description:
      "I use semantic HTML as the foundation for every project, focusing on clean structure, accessibility, and maintainable markup.",

    learned: [
      "Semantic HTML elements",
      "Accessible page structure",
      "Forms & validation",
      "Responsive layouts",
    ],
  },

  CSS3: {
    description:
      "CSS helped me learn responsive layouts, positioning, animations, and modern UI design before moving to utility-first styling with Tailwind CSS.",

    learned: [
      "Flexbox",
      "CSS Grid",
      "Media Queries",
      "Transitions & Animations",
    ],
  },

  JavaScript: {
    description:
      "JavaScript is the core language behind my projects. I use it for DOM manipulation, asynchronous APIs, and building interactive applications.",

    learned: [
      "ES6+",
      "Async / Await",
      "Fetch API",
      "DOM Manipulation",
      "Array Methods",
      "Modules",
    ],
  },

  React: {
    description:
      "React is the framework I use most. It allows me to build reusable, component-based applications with clean architecture and responsive interfaces.",

    learned: [
      "Functional Components",
      "Hooks (useState, useEffect)",
      "Component Composition",
      "Props",
      "Conditional Rendering",
      "API Integration",
    ],
  },

  Vite: {
    description:
      "I use Vite as my preferred build tool because of its fast development experience and optimized production builds.",

    learned: [
      "Project setup",
      "Development server",
      "Production builds",
      "Asset management",
    ],
  },

  "Tailwind CSS": {
    description:
      "Tailwind CSS is my primary styling framework. I use it to build responsive interfaces quickly while keeping styles consistent and maintainable.",

    learned: [
      "Responsive Design",
      "Flexbox & Grid",
      "Custom Components",
      "Dark UI",
      "Utility-first workflow",
    ],
  },

  Bootstrap: {
    description:
      "Bootstrap introduced me to responsive UI development and was used while building my Campus Hub project.",

    learned: ["Grid System", "Bootstrap Components", "Responsive Layouts"],
  },

  "Framer Motion": {
    description:
      "I use Framer Motion to create smooth page transitions, hover effects, and polished animations throughout my portfolio.",

    learned: [
      "Page Transitions",
      "Scroll Animations",
      "Hover Animations",
      "Motion Components",
    ],
  },

  Git: {
    description:
      "Git is my primary version control system for tracking changes and managing project history.",

    learned: ["Commits", "Branches", "Merging", "Version Control Workflow"],
  },

  GitHub: {
    description:
      "GitHub is where I host my projects, collaborate, and showcase my work through public repositories.",

    learned: [
      "Repository Management",
      "GitHub Pages",
      "Pull Requests",
      "Issue Tracking",
    ],
  },

  PHP: {
    description:
      "I learned PHP while building full-stack web applications with server-side functionality and database integration.",

    learned: ["Sessions", "Authentication", "CRUD Operations", "Backend Logic"],
  },

  MySQL: {
    description:
      "I use MySQL to design and manage relational databases for web applications.",

    learned: [
      "Database Design",
      "SQL Queries",
      "Relationships",
      "CRUD Operations",
    ],
  },
};

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const selectedSkillData = selectedSkill ? skillInfo[selectedSkill] : null;

  const relatedProjects = selectedSkill
    ? selectedSkill === "Git" || selectedSkill === "GitHub"
      ? projects
      : projects.filter((project) =>
          project.tech.some(
            (tech) => tech.toLowerCase() === selectedSkill.toLowerCase(),
          ),
        )
    : [];

  return (
    <section className="py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.45em] text-red-500">
            Skills
          </span>

          <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
            Technologies I Use
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Click any technology below to see where I've used it and what I've
            learned.
          </p>
        </motion.div>

        {/* Skill Groups */}
        <div className="space-y-16">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIndex * 0.1 }}
            >
              {/* Group Title */}
              <div className="mb-8 flex items-center gap-5">
                <h3 className="text-xl font-semibold text-white">
                  {group.title}
                </h3>

                <div className="h-px flex-1 bg-gradient-to-r from-red-600/40 to-transparent" />
              </div>

              {/* Skills */}
              <div className="grid grid-cols-2 gap-y-12 sm:grid-cols-3 md:grid-cols-5">
                {group.skills.map((skill, index) => {
                  const Icon = skill.icon;

                  return (
                    <motion.button
                      key={skill.name}
                      type="button"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{
                        y: -8,
                        scale: 1.08,
                      }}
                      whileTap={{
                        scale: 0.96,
                      }}
                      onClick={() => setSelectedSkill(skill.name)}
                      className="group flex flex-col items-center outline-none"
                    >
                      <Icon
                        size={58}
                        color={skill.color}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />

                      <span className="mt-4 text-sm font-medium text-zinc-400 transition-colors duration-300 group-hover:text-white">
                        {skill.name}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSkill(null)}
          >
            <motion.div
              className="relative w-full max-w-2xl rounded-3xl border border-zinc-700 bg-zinc-900 p-8 shadow-2xl"
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedSkill(null)}
                className="absolute right-5 top-5 rounded-full p-2 text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
              >
                <X size={22} />
              </button>

              {/* Skill Name */}
              <h2 className="mb-6 text-4xl font-bold text-white">
                {selectedSkill}
              </h2>

              {/* Description */}
              <p className="mb-8 leading-8 text-zinc-400">
                {selectedSkillData.description}
              </p>

              {/* Learned */}
              <div className="mb-8">
                <div className="mb-4 flex items-center gap-2 text-white">
                  <Wrench className="text-red-500" size={20} />
                  <h3 className="text-xl font-semibold">What I've Learned</h3>
                </div>

                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {selectedSkillData.learned.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg bg-zinc-800 px-4 py-3 text-zinc-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Projects */}
              <div>
                <div className="mb-4 flex items-center gap-2 text-white">
                  <FolderOpen className="text-red-500" size={20} />
                  <h3 className="text-xl font-semibold">
                    Projects Using This Skill
                  </h3>
                </div>

                <div className="grid gap-5">
                  {relatedProjects.length > 0 ? (
                    <>
                      {relatedProjects.slice(0, 2).map((project) => (
                        <div
                          key={project.id}
                          className="rounded-2xl border border-zinc-700 bg-zinc-800/60 p-5"
                        >
                          <h4 className="text-lg font-semibold text-white">
                            {project.title}
                          </h4>

                          <p className="mt-2 text-sm leading-6 text-zinc-400">
                            {project.description}
                          </p>

                          <div className="mt-4 flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                              <span
                                key={tech}
                                className="rounded-full bg-red-500/10 px-3 py-1 text-xs text-red-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          <div className="mt-5 flex gap-3">
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noreferrer"
                              className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
                            >
                              Live Demo
                            </a>

                            <a
                              href={project.github}
                              target="_blank"
                              rel="noreferrer"
                              className="rounded-lg border border-zinc-600 px-4 py-2 text-sm text-zinc-300 transition hover:border-white hover:text-white"
                            >
                              GitHub
                            </a>
                          </div>
                        </div>
                      ))}

                      {relatedProjects.length > 2 && (
                        <p className="text-center text-sm text-zinc-400">
                          +{relatedProjects.length - 2} more project
                          {relatedProjects.length - 2 > 1 ? "s" : ""} use this
                          technology.
                        </p>
                      )}
                    </>
                  ) : (
                    <p className="text-zinc-400">
                      No projects found for this skill.
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Skills;
