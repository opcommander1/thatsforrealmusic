import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { sync } from 'vuex-router-sync'
import PortalVue from 'portal-vue'
import mysql from 'mysql'
import store from '@/store/store'


Vue.use(PortalVue, mysql)


sync(store, router)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')






