import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", redirect: "/index" },
  {
    path: "/index",
    name: "index",
    component: () => import("../views/index/Index.vue"),
  },
  {},
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
