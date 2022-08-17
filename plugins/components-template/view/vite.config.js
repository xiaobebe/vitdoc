import { defineConfig } from "vite";
import cdnExternals from "vite-plugin-cdn-externals";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env.NODE_ENV": '"production"',
  },
  build: {
    minify: false,
    outDir: "dist",
    emptyOutDir: false,
    lib: {
      name: "runtime",
      entry: "./src/runtime.tsx",
      formats: ["es"],
    },
    rollupOptions: {
      output: {
        entryFileNames: "[name].js",
      },
    },
  },
});
