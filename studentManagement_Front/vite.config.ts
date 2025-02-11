import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": new URL("./src", import.meta.url).pathname,
      "@widgets": new URL("./src/widgets", import.meta.url).pathname,
      "@features": new URL("./src/features", import.meta.url).pathname,
      "@entities": new URL("./src/entities", import.meta.url).pathname,
    },
  },
});
