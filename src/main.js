import Vue from 'vue'
import App from './App.vue'
import store from './store'
import 'es6-promise/auto'
import router from './router'
import { BootstrapVue } from 'bootstrap-vue'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
