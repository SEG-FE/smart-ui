# 组件文档编写规范
组件功能描述（必选）【owner】

### 基础用法
用法描述（可选）

::: demo

```html
<template>
  <div>demo</div>
</template>
<script>
export default {
  data(){
    return {
    }
  }
}
</script>
```
:::
### Attributes
| 参数        | 说明                            | 类型    | 可选值                     | 默认值 |
| ----------- | ----------------------------- | ------- | -------------------------- | ------ |
| title       | 标题                           | string  | —                          | —      |
| type        | 主题                           | string  | success/warning/info/error | info   |
### slot
| Name  | Description |
| ----- | ----------- |
| title | 标题的内容  |
### Events
| 事件名称 | 说明                    | 回调参数 |
| -------- | ----------------------- | -------- |
| close    | 关闭时触发的事件 | —        |
