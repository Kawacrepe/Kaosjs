import Vue from "vue";
// @ts-ignore
import App from "./App.vue"; 
import kaos from '../../src';

Vue.config.productionTip = false;
Vue.use(kaos);

new Vue({
  render: h => h(App)
}).$mount("#app");
