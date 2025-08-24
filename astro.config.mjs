// @ts-check

import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://mosidas.github.io",
  integrations: [icon()],
  
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
