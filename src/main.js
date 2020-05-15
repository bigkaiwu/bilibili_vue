import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import http from '../http'
Vue.prototype.$http = http

import { Toast } from 'vant';
Vue.prototype.$msg = Toast

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
