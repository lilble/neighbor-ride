import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  css: [
    "~/assets/css/tailwind.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // plugins: ["~/plugins/fontawesome.js"],
});
