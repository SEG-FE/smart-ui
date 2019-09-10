import Vue from 'vue'
import App from './App.vue'

import IslandUI from '../packages/index'
Vue.use(IslandUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')