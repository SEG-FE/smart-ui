<template>
  <div id="app">
    <el-alert title="成功提示的文案" type="success"> </el-alert>
    <el-alert title="消息提示的文案" type="info"> </el-alert>
    <el-alert title="警告提示的文案" type="warning"> </el-alert>
    <el-alert title="错误提示的文案" type="error"> </el-alert>

    <div style="width:600px">
      <TabList
        label="年级"
        :value="value"
        :label-style="labelStyle"
        :list="tablist"
        @tab-click="tabclick"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // label样式
      labelStyle: {
        // color: "red",
        // width: "120px"
      },
      // value 默认选中的tab值
      value: "1",
      // list tab数组，name、value
      tablist: [
        {
          name: "全部",
          id: ""
        },
        {
          name: "一年级",
          id: "1"
        },
        {
          name: "二年级",
          id: "2"
        },
        {
          name: "三年级",
          id: "3"
        },
        {
          name: "四年级",
          id: "4"
        },
        {
          name: "五年级",
          id: "5"
        },
        {
          name: "六年级",
          id: "6"
        },
        {
          name: "七年级",
          id: "7"
        },
        {
          name: "八年级",
          id: "8"
        },
        {
          name: "八年级",
          id: "8"
        },
        {
          name: "八年级",
          id: "8"
        }
      ]
    };
  },
  methods: {
    tabclick() {}
  }
};
</script>

<style lang="scss">
#app {
  background-color: #f5f5f5;
}
</style>
