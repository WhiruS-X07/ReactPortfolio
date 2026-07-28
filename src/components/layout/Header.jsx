import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  FolderGit2,
  Mail,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

const navItems = [
  {
    name: "Home",
    path: "/",
    icon: Home,
  },
  {
    name: "About",
    path: "/about",
    icon: User,
  },
  {
    name: "Projects",
    path: "/projects",
    icon: FolderGit2,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: Mail,
  },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#090909]/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          to="/"
          className="group flex items-center text-3xl font-black tracking-tight select-none"
        >
          <span className="text-white transition-transform duration-300 group-hover:-translate-y-0.5">
            P
          </span>

          <motion.span
            whileHover={{ scale: 1.4 }}
            transition={{ type: "spring", stiffness: 350 }}
            className="mx-2 h-2.5 w-2.5 rounded-full bg-red-600 shadow-[0_0_18px_rgba(220,38,38,.8)]"
          />

          <span className="text-white transition-transform duration-300 group-hover:translate-y-0.5">
            W
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
          <div className="rounded-full border border-white/10 bg-[#111111]/90 px-4 py-3 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,.55)]">
            <ul className="flex items-center gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;

                return (
                  <li key={item.name}>
                    <NavLink to={item.path}>
                      {({ isActive }) => (
                        <div className="relative">
                          {isActive && (
                            <motion.div
                              layoutId="navbar"
                              transition={{
                                type: "spring",
                                stiffness: 450,
                                damping: 35,
                              }}
                              className="absolute inset-0 rounded-full bg-gradient-to-r from-red-700 to-red-500 shadow-lg shadow-red-600/30"
                            />
                          )}

                          <motion.div
                            whileHover={{
                              y: -2,
                              scale: 1.03,
                            }}
                            whileTap={{ scale: 0.97 }}
                            className={`relative z-10 flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                              isActive
                                ? "text-white"
                                : "text-zinc-400 hover:text-white"
                            }`}
                          >
                            <Icon size={18} strokeWidth={2.2} />
                            <span>{item.name}</span>
                          </motion.div>
                        </div>
                      )}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Resume */}
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden items-center gap-2 font-semibold text-white lg:flex"
          >
            <span>Resume</span>

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="border-t border-white/10 bg-[#090909]/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-2 px-6 py-5">
              {navItems.map((item) => {
                const Icon = item.icon;

                return (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-xl px-4 py-3 font-medium transition-all ${
                        isActive
                          ? "bg-red-600 text-white"
                          : "text-zinc-300 hover:bg-white/10 hover:text-white"
                      }`
                    }
                  >
                    <Icon size={20} />
                    <span>{item.name}</span>
                  </NavLink>
                );
              })}

              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-2 flex items-center gap-3 rounded-xl px-4 py-3 font-medium text-white transition-all hover:bg-white/10"
              >
                <ArrowUpRight size={20} />
                <span>Resume</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
