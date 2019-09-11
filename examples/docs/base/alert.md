### Alert 警告

用于页面中展示重要的提示信息。

### 基本用法

页面中的非浮层元素，不会自动消失。

<demo-block>
Alert 组件提供四种主题，由`type`属性指定，默认值为`info`。
```html
<el-alert title="成功提示的文案" type="success"> </el-alert>
<el-alert title="消息提示的文案" type="info"> </el-alert>
```
<template slot="source">
  <el-alert title="成功提示的文案" type="success"> </el-alert>
  <el-alert title="消息提示的文案" type="info"> </el-alert>
</template>
</demo-block>
