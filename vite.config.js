import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  server: {
    allowedHosts: ["record-reshuffle-fondly.ngrok-free.dev"],
    // Optional but useful for ngrok:
    // host: "0.0.0.0",
  },

  plugins: [
    react(),

    babel({
      presets: [reactCompilerPreset()],
    }),

    tailwindcss(),
  ],
});