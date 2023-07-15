import { createRouter, createWebHistory } from "vue-router";
import MainView from "./../views/MainView";
import RegisterView from "@/views/RegisterView";

const routes = [
  {
    path: "/",
    name: "main",
    component: MainView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
