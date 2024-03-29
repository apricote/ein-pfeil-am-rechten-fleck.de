import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { imagetools } from "vite-imagetools";

export default defineConfig({
  plugins: [
    imagetools({
      defaultDirectives: new URLSearchParams({
        as: "metadata",
        format: "avif;webp;png",
      }),
    }),
    sveltekit(),
  ],
});
