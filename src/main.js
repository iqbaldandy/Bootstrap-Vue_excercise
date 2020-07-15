import Vue from 'vue'
// import App from './App.vue'
import Desktop1 from './Desktop1.vue'
// import AnimSidebar from './AnimSidebar.vue'
// import Desktop5 from './Desktop5.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './style/style.css'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  render: h => h(Desktop1),
}).$mount('#app')
