import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import tunnel from "astro-tunnel";
import vercelServerless from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  renderers: ["@astrojs/renderer-react", "@astrojs/renderer-svelte"],
  integrations: [tailwind(), react(), tunnel()],
  output: "server",
  adapter: vercelServerless(),
});