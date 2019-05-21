import Vue from 'vue'
import App from './App.vue'
import router from './router'
import PortalVue from 'portal-vue'
import mysql from 'mysql'
// let database = require('../config/config')




Vue.use(PortalVue, mysql)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')






