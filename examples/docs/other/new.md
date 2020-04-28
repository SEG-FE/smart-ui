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
::: tip 步骤
  - 在packages/components文件夹下新建组件文件夹，命名为组件名称（全部小写，`-`作为连接符），例：`tab-list`。
  - 在组件文件夹下创建src文件夹，用来保存main.vue组件。
  - 在组件文件夹下创建index.js，用来导出组件。
:::

```
文件结构示例：
packages
├─ components
│    └─ tab-list
│         ├─ src
│         │    └─ main.vue
│         └─ index.js 
```

index.js
```js
// 导入组件，组件必须声明 name
import Alert from "./src/main";

// 为组件提供 install 安装方法，供按需引入
Alert.install = function(Vue) {
  Vue.component(Alert.name, Alert);
};
// 默认导出组件
export default Alert;
```
src/main.vue
```html
<template>
  <div class="tablist-tab tab-item" ref="tablist" :style="{ height: height }">
    <label :style="labelStyle">{{ label }}</label>
    <div class="list-con" ref="listcon">
      <i
        v-if="isShow"
        class="icon collapse-icon"
        :class="isOpen ? 'el-icon-arrow-up' : 'el-icon-arrow-down'"
        @click="openMore()"
      ></i>
      <span
        v-for="(item, index) in list"
        :key="index"
        :class="{
          'active-tab': currentValue === item.id
        }"
        @click.stop.prevent="clickType(item.id)"
      >
        {{ item.name }}
        <el-tooltip
          class="item"
          effect="dark"
          :content="item.tip"
          placement="top"
        >
          <i class="el-icon-info" v-if="item.tip"></i> </el-tooltip
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabList",
  props: {
    height: {
      type: Number,
      default: 32
    },
    label: {
      type: String,
      default: ""
    },
    labelStyle: {
      type: Object,
      default: () => {}
    },
    value: {
      type: [String, Number],
      default: ""
    },
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      isShow: false,
      isOpen: false,
      currentValue: ""
    };
  },
  methods: {
    clickType(value) {
      this.currentValue = value;
      this.$emit("tab-click", this.currentValue);
      this.$emit("input", this.currentValue);
    },
    //  图标 切换 加载更多
    openMore() {
      let _ev = this.$refs.tablist;
      if (!_ev) return;
      let _height = Number(_ev.dataset["height"]);
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        _ev.style.height = _height + "px";
        _ev.style.transition = "height .5s";
      } else {
        _ev.style.height = this.height + "px";
        _ev.style.transition = "height .5s";
      }
    },
    // 计算折叠面板高度
    calculateHeight() {
      this.currentValue = this.value;
      this.isShow = false;
      this.isOpen = false;
      this.$nextTick(() => {
        let _node = this.$refs.tablist;
        _node.style.height = this.height + "px";
        if (!_node) return;
        let _group = this.$refs.listcon;
        _node.setAttribute("data-height", _group.clientHeight);
        if (_group.clientHeight > this.height + 10) {
          this.isShow = true;
        }
      });
    }
  },
  watch: {
    value(newValue) {
      this.currentValue = newValue;
    },
    list() {
      this.calculateHeight();
    }
  },
  mounted() {
    this.calculateHeight();
  }
};
</script>

<style scoped lang="scss">
.tablist-tab {
  line-height: 28px;
  margin-bottom: 6px;
  display: flex;
  align-items: flex-start;
  overflow: hidden;
  text-align: left;
  background-color: #fff;
  & > label {
    width: 60px;
    color: #919191;
    font-size: 12px;
    flex-shrink: 0;
  }
  & > .list-con {
    width: 100%;
    & > span {
      color: #545454;
      margin-right: 30px;
      padding: 5px 8px;
      background: #fff;
      border-radius: 4px;
      cursor: pointer;
      font-size: 12px;
      display: inline-block;
      line-height: 18px;
      margin-bottom: 6px;
      &:hover,
      &.active-tab {
        color: #2f60e2;
        background: #f2f2f2;
      }
    }
    .el-icon-info {
      color: #2f60e2;
      margin-left: 5px;
    }
  }
}

.collapse-icon {
  float: right;
  margin-top: 7px;
  cursor: pointer;
}
</style>

```

::: danger 注意

组件 name 不可省略，遵循大驼峰命名规范。

:::

## 调试组件

::: tip

本项目中集成了vuepress，支持运行vue组件。你也可以选择在自己的项目中调试。

:::

#### 在markdown中调试组件：

文件位置：example/docs/base/xxx.md

```
npm run docs:dev
```


## 编写组件说明文档

::: tip 
 集成了[vuepress](https://link.juejin.im/?target=https%3A%2F%2Fv1.vuepress.vuejs.org%2Fzh%2F)作为文档编写工具，具体使用请参考官方文档
:::

```
vuepress项目文件基本结构
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

1. base 文件夹下新增 `.md` 文件（命名和组件文件夹命名一致），
2. 在 `.vuepress/config.js` 文件中配置侧边栏，把我们刚刚新建的文档添加进去

```js
// 为以下路由添加侧边栏
sidebar: {
  '/base/': [
    '',
    'alert',
    'tab-list',
    'dropdown'
  ]
}
```

3. 编写组件文档，demo 调试(去掉转义符`\`)

````html
\::: demo Alert 组件提供四种主题，由`type`属性指定，默认值为`info`。 
\```html
<template>
  <el-alert title="成功提示的文案" type="success"> </el-alert>
  <el-alert title="消息提示的文案" type="info"> </el-alert>
  <el-alert title="警告提示的文案" type="warning"> </el-alert>
  <el-alert title="错误提示的文案" type="error"> </el-alert>
</template>
\``` 
\:::
````

![Image text](./images/demo1.png)

## 发布

目前只有seg-fe账号有发版权限，发布前需要在github平台上提交pull request。

打包文件并发布到 npm

登录

```
npm login
```

打包并发版(打包并发布到 npm、更新组件文档)

```
npm run publish
```

仅更新线上文档

```
npm run deploy:build
```
