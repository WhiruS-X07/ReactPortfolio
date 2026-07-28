import campusHub from "../assets/ProjectImg/campusHub.png";
import rhythmix from "../assets/ProjectImg/rhythmix.png";
import portfolio from "../assets/ProjectImg/portfolio.png";
import snapSorter from "../assets/ProjectImg/snapSorter.png";
import whyverse from "../assets/ProjectImg/whyverse.png";

export const projects = [
  {
    id: 1,
    title: "WhyVerse",
    image: whyverse,
    description:
      "A modern entertainment discovery platform powered by the TMDB API, allowing users to explore trending movies, TV shows, and popular people.",
    tech: [
      "React",
      "Vite",
      "React Router",
      "TMDB API",
      "Tailwind CSS",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
    github: "https://github.com/WhiruS-X07/WhyVerse",
    live: "https://why-verse.vercel.app/",
    featured: true,
  },

  {
    id: 2,
    title: "Developer Portfolio",
    image: portfolio,
    description:
      "My personal portfolio website showcasing my skills, projects, journey, and contact information with smooth animations, reusable components, and responsive design.",
    tech: [
      "React",
      "Vite",
      "React Router",
      "Tailwind CSS",
      "Framer Motion",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
    github: "https://github.com/WhiruS-X07/whirus-portfolio",
    live: "https://whirus-portfolio.netlify.app/",
    featured: true,
  },

  {
    id: 3,
    title: "Rhythmix",
    image: rhythmix,
    description:
      "A modern music player powered by the Jamendo API featuring search, favorites, queue management, shuffle, repeat, and a responsive streaming-inspired interface.",
    tech: ["JavaScript", "Tailwind CSS", "Jamendo API", "HTML5", "CSS3"],
    github: "https://github.com/WhiruS-X07/rhythmix",
    live: "https://whirus-x07.github.io/rhythmix/",
    featured: true,
  },

  {
    id: 4,
    title: "Campus Hub",
    image: campusHub,
    description:
      "A college management platform built for students and faculty with features like notices, resources, and academic utilities. Developed as my major final-year project.",
    tech: ["PHP", "MySQL", "Bootstrap", "JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/WhiruS-X07/Campus-Hub",
    live: "https://whirus.42web.io/",
    featured: false,
  },

  {
    id: 5,
    title: "SnapSorter",
    image: snapSorter,
    description:
      "A browser-based image reviewing and sorting utility designed for fast workflows with folder access, keyboard shortcuts, drag-and-drop support, and local saving.",
    tech: ["JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
    github: "https://github.com/WhiruS-X07/Snap-Sorter",
    live: "https://whirus-x07.github.io/Snap-Sorter/",
    featured: false,
  },
];
