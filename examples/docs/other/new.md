### 新增组件流程

[仓库地址](https://github.com/SEG-FE/smart-ui.git)

## 文件结构

:::tip
新增组件存放在 `packages/components` 文件夹下，包括组件代码 `main.vue`，以及导出组件`index.js`
:::

```
|-- packages // 新增 packages 用于存放组件
    |-- components
        |-- alert // 示例组件
            |-- src
                |-- main.vue
            |-- index.js // 导出单个组件
    |-- index.js // 整合所有组件并导出              全局导出
```

## 编写组件

::: tip

熟悉组件

:::

::: danger 注意

组件 name 不可省略

:::

```js
// src/index.js
// 导入组件，组件必须声明 name
import Alert from "./src/main";

// 为组件提供 install 安装方法，供按需引入
Alert.install = function(Vue) {
  Vue.component(Alert.name, Alert);
};
// 默认导出组件
export default Alert;
```

## 调试组件

::: tip

本项目中集成了vue项目和vuepress项目，有两种方式支持调试。

:::

#### 在 vue 项目中运行：

文件位置：example/App.vue

```
npm run serve
```

### 方式二：markdown

文件位置：example/docs/base/xxx.md

```
npm run docs:dev
```

## 编写组件说明文档

::: tip 
 集成了[vuepress](https://link.juejin.im/?target=https%3A%2F%2Fv1.vuepress.vuejs.org%2Fzh%2F)作为文档编写工具，具体使用请参考官方文档
:::

```
文件基本结构
docs
├─ README.md    //首页
├─ .vuepress    //vuepress文件夹
│    ├─ components  //公共组件,该目录中的 Vue 组件将会被自动注册为全局组件。
│    │    └─ demo-block.vue   //DemoBlock组件
│    ├─ config.js   //vuepress配置文件
│    ├─ enhanceApp.js   //客户端应用的增强,相当于vue中的main.js
│    └─ styles  //用于存放样式相关的文件。
│           └─ palette.styl     //用于重写默认颜色常量，或者设置新的 stylus 颜色常量。
├─ base
│    ├─ README.md   // /base/ 路由首页
│    ├─ alert.md    // /base/alert  组件文档
│    └─ tab-list.md
└─ i18n
     └─ component.json
```

1. base 文件夹下新增 `.md` 文件（命名和组件名一致），
2. 在 `.vuepress/config.js` 文件中配置侧边栏，把我们刚刚新建的文档添加进去

```js
// 为以下路由添加侧边栏
sidebar: {
  '/base/': [{
    title: 'Notice',
    collapsable: false,
    children: [
      'alert',
      'tab-list'
      ...
    ]
  }]
}
```

3. 编写组件文档，demo 调试(去掉转义符`\`)

````html
\::: demo Alert 组件提供四种主题，由`type`属性指定，默认值为`info`。 \```html
<template>
  <el-alert title="成功提示的文案" type="success"> </el-alert>
  <el-alert title="消息提示的文案" type="info"> </el-alert>
  <el-alert title="警告提示的文案" type="warning"> </el-alert>
  <el-alert title="错误提示的文案" type="error"> </el-alert>
</template>
\``` \:::
````

![Image text](./images/demo1.png)

## 发布

代码`push`到`master`分支

打包文件并发布到 npm

登录

```
npm login
```

打包并发版

```
npm run publish
```

更新线上文档

```
npm run deploy:build
```
