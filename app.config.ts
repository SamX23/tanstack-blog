import { defineConfig } from "@tanstack/start/config";
import tsConfig from "./tsconfig.json";

export default defineConfig({
  server: {
    preset: "node-server",
  },
  routers: [
    {
      type: "http",
      name: "public",
      base: "/",
      dir: "./public",
    },
    {
      type: "react",
      name: "client",
      appDirectory: "./src",
      clientEntry: "./app.tsx",
      generatedRouteTree: "./.tanstack/routeTree.gen.ts",
    },
    {
      type: "react",
      name: "server",
      appDirectory: "./src",
      serverEntry: "./ssr.tsx",
      generatedRouteTree: "./.tanstack/routeTree.gen.ts",
      apiBase: "/api",
    },
  ],
});
