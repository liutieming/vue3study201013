import {createRouter, createWebHashHistory, RouterOptions} from "vue-router";

const myRoutes = [{
  path: "/"
  , name: "home"
  // , component: Home
}, {
  path: "/about"
  , name: "About"
}, {
  path: "/demo"
  , name: "demo"
}];

const router = createRouter({
  history: createWebHashHistory()
  , myRoutes
});

export default router;
