// 全局注册 Element 组件库
import Vue from 'vue'
import Element from 'element-ui'
import SmartUI from '../../../packages/index'
// import VueRouter from 'vue-router';
// import hljs from 'highlight.js';
import demoBlock from './components/demo-block';

import 'element-ui/lib/theme-chalk/index.css'

// Vue.use(VueRouter);
// const router = new VueRouter({
//   base: __dirname,
//   routes: [{
//     path: "/base/alert",
//     name: "alert",
//     component: r => {
//       console.log(r);
//     }
//   }]
// });
// Vue.component('demo-block', demoBlock);

// router.afterEach(route => {
//   console.log(route);
//   // https://github.com/highlightjs/highlight.js/issues/909#issuecomment-131686186
//   Vue.nextTick(() => {
//     const blocks = document.querySelectorAll('pre code:not(.hljs)');
//     console.log(blobks);
//     Array.prototype.forEach.call(blocks, hljs.highlightBlock);
//   });
// });

export default ({
  Vue,
  // options,
  // router
}) => {
  Vue.use(Element)
  Vue.use(SmartUI)
}