import Vue from 'vue'
import App from './App.vue'
import BootStrap from 'bootstrap-vue'
import { router } from './routes/index'
import { store } from '@/store/index'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootStrap); 
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
