import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" keeps asset paths relative so the build works on GitHub Pages
// or any sub-folder hosting.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
