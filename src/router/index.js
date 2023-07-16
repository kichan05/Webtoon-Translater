import { createRouter, createWebHistory } from "vue-router";
import MainView from "./../views/MainView";
import SortView from "@/views/SortView";
import OcrErrorEdit from "@/views/OcrErrorEdit";

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
  {
    path: "/edit",
    name: "OcrErrorEdit",
    component: OcrErrorEdit,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
