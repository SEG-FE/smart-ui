import Vue from 'vue'
import App from './App.vue'

import Element from 'element-ui'
import './assets/scss/element-variables.scss'
import SmartUI from '../packages'
Vue.use(Element);
Vue.use(SmartUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
