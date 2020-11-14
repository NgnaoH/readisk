import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import('@/views/Home'),
  },
  {
    path: "/infor",
    name: "Information",
    component: () => import('@/views/Information'),
  },
  {
    path: "/about",
    name: "About",
    component: () => import('@/views/About'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
