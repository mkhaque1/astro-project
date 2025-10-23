// svelte.config.js
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";

export default {
  preprocess: sveltePreprocess({
    scss: {
      // Optional: global SCSS variables
      prependData: `@import 'src/scss/themes/default.scss';`,
      // Or inline:
      // prependData: `$primary: #ff4d4d;`
    },
  }),
  // Use Vite preprocessor (required for Astro + Svelte)
  preprocess: [vitePreprocess(), sveltePreprocess()],
};
