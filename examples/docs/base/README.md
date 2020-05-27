## 安装

### npm 安装

推荐使用 npm 的方式安装，它能更好地和 [webpack](https://webpack.js.org/) 打包工具配合使用。

```
npm i @seg-fe/smart-ui -S 
```

## 快速上手

本节将介绍如何在项目中使用 smart。

### 引入 smart

在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import smartUI from '@seg-fe/smart-ui';
import App from './App.vue';

Vue.use(smartUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

以上代码便完成了 smart 的引入。
