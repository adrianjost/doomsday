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
      path: "/train-day",
      name: "trainDay",
      component: () => import("../views/TrainDayView.vue"),
    },
    {
      path: "/train-year",
      name: "trainYear",
      component: () => import("../views/TrainYearView.vue"),
    },
  ],
});

export default router;
