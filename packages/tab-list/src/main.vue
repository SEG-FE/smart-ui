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
