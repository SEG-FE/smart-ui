// 全局注册 Element 组件库
import Vue from 'vue'
import Element from 'element-ui'
import '../../assets/scss/element-variables.scss'
import SmartUI from '../../../packages'
// import demoBlock from './components/demo-block';
// Vue.component('demo-block', demoBlock);

export default ({
  Vue
}) => {
  Vue.use(Element);
  Vue.use(SmartUI);
}
