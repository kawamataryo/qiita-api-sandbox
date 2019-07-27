import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Other from "../views/Other.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/other",
    name: "other",
    component: Other
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
