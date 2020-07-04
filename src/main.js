import Vue from 'vue'
// import App from './App.vue'
import Sidebar from './Sidebar.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './style/style.css'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  render: h => h(Sidebar),
}).$mount('#app')
