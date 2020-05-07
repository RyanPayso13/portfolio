import Vue from "vue";
import VueAnalytics from "vue-analytics";
import App from "./App.vue";
import "./assets/font.css";
import "./assets/tailwind.css";

Vue.config.productionTip = false;

Vue.use(VueAnalytics, {
  id: "UA-18220018-2"
});

new Vue({
  render: h => h(App)
}).$mount("#app");
