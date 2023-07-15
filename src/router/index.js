import { createRouter, createWebHistory } from "vue-router";
import MainView from "./../views/MainView";
import SortView from "@/views/SortView";

const routes = [
  {
    path: "/",
    name: "main",
    component: MainView,
  },
  {
    path: "/sort",
    name: "sort",
    component: SortView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
