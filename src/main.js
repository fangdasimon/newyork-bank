import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import locale from "element-ui/lib/locale/lang/en.js"; //引入内置组件英文

import "@/styles/index.scss"; // global css

Vue.config.productionTip = false;

import { mockXHR } from "./mock"; // mock data
mockXHR();

Vue.use(ElementUI, { locale });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
