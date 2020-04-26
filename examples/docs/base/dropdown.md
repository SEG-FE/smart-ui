### 标题dropdown

::: demo 我的h1菜单dropdown

```html
<template>
<dropdown :list="list">
我的菜单
</dropdown>
</template>
<script>
export default {
  data(){
    return {
      list:[{
         name: "首页1",
          path: "/2",
      }]
    }
  }
}


</script>
<style>
body{
  background: red !important;
}
</style>
```

:::

::: demo 我的h2菜单dropdown

```html
<template>
<dropdown :list="list">
我的菜单
</dropdown>
</template>
<script>
export default {
  data(){
    return {
      list:[{
         name: "首页2",
          path: "/2",
      }]
    }
  }
}


</script>

```
<style>

</style>
:::
