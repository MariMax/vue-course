import Vue from 'vue'
import App from './App.vue'

//@ts-ignore
import store from "./store/index.js";

import "@/styles/reset.css";
import "@/styles/global.scss";

Vue.config.productionTip = false;

new Vue({
  //@ts-ignore
  store,
  render: h => h(App),
}).$mount('#app')
