import Vue from 'vue'
import App from './App.vue'

import SmartUI from '../packages'
Vue.use(SmartUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')