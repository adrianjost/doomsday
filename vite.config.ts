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
        background_color: "#443",
        description:
          "A webapp to learn the doomsday method of calculating the day of week for every date",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        related_applications: [
          {
            platform: "Web",
            url: "https://doomsday.adrianjost.dev/",
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
