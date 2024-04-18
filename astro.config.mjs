import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";
import react from "@astrojs/react";
import tunnel from "astro-tunnel";

// https://astro.build/config
export default defineConfig({
  renderers: ["@astrojs/renderer-react", "@astrojs/renderer-svelte"],
  integrations: [tailwind(), react(), tunnel()],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});