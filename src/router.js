import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Orders from "./views/Orders.vue";
import Products from "./views/Products.vue";
import Tasks form "./views/Tasks.vue"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/products",
      name: "products",
      component: Products
    },
    {
      path: "/orders",
      name: "orders",
      component: Orders
    },
    {
      path: "/tasks",
      name: "tasks",
      component: Tasks
    }
  ]
});
