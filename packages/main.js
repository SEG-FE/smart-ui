import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 自动加载 global 目录下的 .vue 结尾的文件
const componentsContext = require.context("./", true, /index\.js$/);
var components = []
componentsContext.keys().forEach(component => {
  const componentConfig = componentsContext(component);
  // 兼容 import export 和 require module.export 两种规范
  const ctrl = componentConfig.default || componentConfig;
  components.push(ctrl)
});

// 定义 install 方法
const install = function (Vue) {
  Vue.use(Element);
  if (install.installed) return
  install.installed = true
  // 遍历并注册全局组件
  components.map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  // 导出的对象必须具备一个 install 方法
  install,
  // 组件列表
  ...components
}