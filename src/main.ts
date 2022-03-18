import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "papercss/dist/paper.min.css";

const app = createApp(App);

app.use(router);

app.mount("#app");
