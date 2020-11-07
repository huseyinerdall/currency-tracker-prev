import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false;
Vue.use(VueAxios, axios)

Vue.filter('signint', function (value) {
  if (value>=0) return "+"+value.toFixed(2);
  return value.toFixed(2);
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
