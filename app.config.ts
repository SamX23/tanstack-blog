import { defineConfig } from "vinxi";
import { tanstackStart } from "@tanstack/start";

export default defineConfig({
  server: {
    preset: "node-server",
  },
  routers: [
    tanstackStart({
      appDirectory: "src",
      client: {
        entry: "./app.tsx",
        generatedRouteTree: "./routeTree.gen.ts",
      },
      server: {
        entry: "./ssr.tsx",
        generatedRouteTree: "./routeTree.gen.ts",
      },
    }),
  ],
});
