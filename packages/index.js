// 自动加载 components 目录下的 index.js 文件
const componentsContext = require.context("./components", true, /index\.js$/);
var components = [];
componentsContext.keys().forEach(component => {
  const componentConfig = componentsContext(component);
  // 兼容 import export 和 require module.export 两种规范
  const ctrl = componentConfig.default || componentConfig;
  components.push(ctrl);
});

// 定义 install 方法
const install = function(Vue) {
  if (install.installed) return;
  install.installed = true;
  // 遍历并注册全局组件
  components.map(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  // 导出的对象必须具备一个 install 方法
  install,
  // 组件列表
  ...components
};
