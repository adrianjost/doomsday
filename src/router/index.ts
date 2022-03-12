import { createRouter, createWebHistory } from "vue-router";
import DayView from "../views/DayView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "day",
      component: DayView,
    },
    {
      path: "/doomsday",
      name: "doomsday",
      component: () => import("../views/DoomsdayView.vue"),
    },
  ],
});

export default router;
