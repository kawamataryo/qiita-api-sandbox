import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { plugin } from "vue-function-api";
import dotenv from "dotenv";

dotenv.config();

Vue.config.productionTip = false;

Vue.use(plugin);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
