import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Contact = () => {
  const inputStyle =
    "w-full rounded-2xl border border-white/10 bg-[#111111] px-5 py-4 text-white placeholder:text-zinc-500 outline-none transition-all duration-300 hover:border-white/25 hover:bg-[#151515] focus:border-red-500 focus:bg-[#151515] focus:shadow-[0_0_0_4px_rgba(220,38,38,0.12)]";

  return (
    <main className="relative overflow-hidden bg-[#050505] pt-28 lg:pt-36">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[150px]" />

      <section className="relative mx-auto max-w-5xl px-6 pb-28">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.45em] text-red-500">
            Contact
          </span>

          <h1 className="mt-5 text-5xl font-black text-white md:text-6xl">
            Let's Work Together.
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Whether you have a project, an internship opportunity, or simply
            want to connect, I'd love to hear from you.
          </p>
        </motion.div>

        {/* Contact Links */}
        <div className="mt-16 flex flex-wrap justify-center gap-5">
          {[
            {
              icon: <Mail size={18} />,
              text: "Email",
              link: "mailto:piyush1672003@gmail.com",
            },
            {
              icon: <FaGithub />,
              text: "GitHub",
              link: "https://github.com/WhiruS-X07",
            },
            {
              icon: <FaLinkedin />,
              text: "LinkedIn",
              link: "https://www.linkedin.com/in/whirus",
            },
          ].map((item) => (
            <a
              key={item.text}
              href={item.link}
              target={item.text !== "Email" ? "_blank" : undefined}
              rel={
                item.text !== "Email" ? "noopener noreferrer" : undefined
              }
              className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-[#111111]/50 px-6 py-3 text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:border-red-500 hover:bg-[#171717] hover:text-white hover:shadow-[0_10px_30px_rgba(220,38,38,0.15)]"
            >
              <span className="transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </span>
              {item.text}
            </a>
          ))}
        </div>

        {/* Form */}
        <form className="mx-auto mt-20 max-w-3xl space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <input
              type="text"
              placeholder="Your Name"
              className={inputStyle}
            />

            <input
              type="email"
              placeholder="Email Address"
              className={inputStyle}
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
            className={inputStyle}
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            className={`${inputStyle} resize-none`}
          />

          <button
            type="submit"
            className="group inline-flex items-center gap-2 rounded-full bg-red-600 px-8 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-500 hover:shadow-[0_12px_35px_rgba(220,38,38,0.35)] active:translate-y-0"
          >
            Send Message

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </button>
        </form>
      </section>
    </main>
  );
};

export default Contact;