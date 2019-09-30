// 全局注册 Element 组件库
import Vue from 'vue'
import SmartUI from '../../../packages'
// import demoBlock from './components/demo-block';
// Vue.component('demo-block', demoBlock);

export default ({
  Vue
}) => {
  Vue.use(SmartUI)
}