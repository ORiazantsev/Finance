import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Copy from "../views/Login copy.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/copy",
    name: "Copy",
    component: Copy,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import('../views/Login.vue'),
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: () => import('../views/SignUp.vue'),
  },
  {
    path: "/main",
    name: "Main",
    component: () => import('../views/Main.vue'),
  },
  {
    path: "/new-category",
    name: "NewCategory",
    component: () => import('../views/NewCategory.vue'),
  },
  {
    path: "/update-category-balance/:category_id",
    name: "UpdateCategoryBalance",
    component: () => import('../views/UpdateCategoryBalance.vue'),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
