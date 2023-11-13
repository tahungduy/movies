import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import svgrPlugin from "vite-plugin-svgr";
import envCompatible from "vite-plugin-env-compatible";

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "classic",
    }),
    viteTsconfigPaths(),
    svgrPlugin(),
    envCompatible({
      mountedPath: "process.env",
      prefix: "REACT_APP_",
    }),
  ],
  css: {
    postcss: "./postcss.config.js",
  },
});
