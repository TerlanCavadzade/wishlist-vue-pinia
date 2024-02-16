import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Wishlist from "../views/WishList.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/wishlist",
    name: "Wishlist",
    component: Wishlist,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
