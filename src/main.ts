import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { plugin } from "vue-function-api";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

Vue.use(plugin);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
