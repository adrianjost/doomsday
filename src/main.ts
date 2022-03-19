import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

import { registerSW } from "virtual:pwa-register";
registerSW({
  onNeedRefresh() {
    confirm("New version available - reload?");
  },
});

app.mount("#app");
