import Vue from 'vue'
import App from './App.vue'
import router from './router'
import PortalVue from 'portal-vue'
import BootstrapVue from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Pagination from 'bootstrap-vue/es/components/pagination'



Vue.use(PortalVue, BootstrapVue, Pagination)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')






