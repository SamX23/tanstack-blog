import { createStartHandler, defaultStreamHandler } from "@tanstack/start/server";
import { router } from "./router";

export const handler = createStartHandler({
  createRouter: () => router,
})(defaultStreamHandler);
