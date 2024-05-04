import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
   base: "https://pilotikfn.github.io/Skibigun/",
   plugins: [react()],
});
