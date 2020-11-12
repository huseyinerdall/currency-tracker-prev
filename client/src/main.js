import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts);

Vue.component('apexchart', VueApexCharts);
Vue.config.productionTip = false;

axios.defaults.baseConfig = "http://localhost:4000/";
Vue.use(VueAxios, axios)

Vue.filter('signint', function (value) {
  if (value>=0) return "+"+value.toFixed(2);
  return value.toFixed(2);
})

Vue.filter('uppercase', function (value) {
  return value.toUpperCase()
})

Vue.filter('tofixedftwo', function (value) {
  value = +value;
  return value.toFixed(2);
})

Vue.filter('tofixedfour', function (value) {
  value = +value;
  return value.toFixed(4);
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
