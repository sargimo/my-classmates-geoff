import Vue from "vue";
import App from "./App.vue";
import Home from "./components/Home.vue";
import Geoff from "./components/geoff/Geoff.vue";
import VueRouter from "vue-router";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  {path: "/", component: Home},
  {path: "/geoff", component: Geoff}
];

const router = new VueRouter({
  routes,
  mode: "history"
});


new Vue({
  render: h => h(App),
  router
}).$mount("#app");
