import Vue from "vue";
import VueRouter from "vue-router";
import DiskManager from "@/views/DiskManager.vue";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/manager",
    name: "DiskManager",
    component: DiskManager,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
