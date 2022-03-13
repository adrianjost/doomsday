import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "papercss/dist/paper.min.css";

const app = createApp(App);

app.use(router);

app.mount("#app");

import { registerSW } from "virtual:pwa-register";
const updateSW = registerSW({
  onNeedRefresh() {
    confirm("New version available - reload?");
  },
});
