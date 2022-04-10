import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      devOptions: {
        enabled: true,
      },
      base: "/",
      srcDir: "src",
      filename: "sw.ts",
      strategies: "injectManifest",
      manifest: {
        id: "adrianjost-doomsday",
        name: "Doomsday",
        short_name: "Doomsday",
        start_url: "/",
        display: "standalone",
        orientation: "portrait",
        theme_color: "#229cef",
        background_color: "#443",
        description:
          "An app to learn the doomsday method of calculating the day of week for every date. It includes multiple training views to learn the skill step by step. There's also a comprehensive help page that will assist you if you are stuck somewhere.",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/mask-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/mask-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
        related_applications: [
          {
            platform: "Web",
            url: "https://doomsday.adrianjost.dev/",
          },
        ],
        screenshots: [
          {
            src: "/train-year.png",
            sizes: "1280x720",
            type: "image/png",
            platform: "narrow",
            label:
              "Here you can learn to calculate the weekday of the doomsday of any year.",
          },
          {
            src: "/train-day.png",
            sizes: "1280x720",
            type: "image/png",
            platform: "narrow",
            label:
              "On this view you can train to calculate a day of week based on a given doomsday.",
          },
          {
            src: "/help.png",
            sizes: "1280x720",
            type: "image/png",
            platform: "narrow",
            label: "If you are stuck, there is always a little help available.",
          },
          {
            src: "/test-yourself.png",
            sizes: "1280x720",
            type: "image/png",
            platform: "narrow",
            label:
              "Finally you can pull all your knowledge together and test your combined skills. Guess the Weekday of a given day.",
          },
          {
            src: "/confetti.png",
            sizes: "1280x720",
            type: "image/png",
            platform: "narrow",
            label:
              "Of course there is confetti to spark some joy when you did it right. 🥳",
          },
        ],
      },
      workbox: {
        cleanupOutdatedCaches: true,
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    host: true,
  },
});
