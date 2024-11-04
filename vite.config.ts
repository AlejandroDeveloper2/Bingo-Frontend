import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/socket.io": {
        target: "http://localhost:3002",
        ws: true,
      },
    },
  },
  resolve: {
    alias: [
      { find: "@assets", replacement: "/src/assets" },
      { find: "@components", replacement: "/src/components" },
      { find: "@constants", replacement: "/src/constants" },
      { find: "@helpers", replacement: "/src/helpers" },
      { find: "@hooks", replacement: "/src/hooks" },
      { find: "@services", replacement: "/src/services" },
      { find: "@store", replacement: "/src/store" },
      { find: "@interfaces", replacement: "/src/types" },
      { find: "@utils", replacement: "/src/utils" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@routes", replacement: "/src/routes" },
      { find: "@config", replacement: "/src/config" },
      { find: "@layout", replacement: "/src/layout" },
      { find: "@styles", replacement: "/src/styles" },
    ],
  },
});
