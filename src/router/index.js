import { createRouter, createWebHistory } from "vue-router";
import LayoutDefault from "../components/layout/LayoutDefault.vue";
export const routes = [
  {
    path: "/",
    name: "layoutdefault",
    component: LayoutDefault,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
    