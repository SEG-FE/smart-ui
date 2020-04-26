<template>
  <section
    class="tal-dropdown"
    @mouseleave="userMouseleave"
    @mouseenter="userMouseenter"
  >
    <span>
      <slot></slot>
      <i class="arrow" :class="[isEnter ? 'up' : 'down']"></i>
    </span>
    <div
      v-show="isEnter"
      @mouseleave="userItemleave"
      class="dropdown-item"
      :style="curTop"
    >
      <ul>
        <li
          :key="index"
          v-for="(item, index) of list"
          @click="handleClik(item)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  name: "dropdown",
  components: {},
  props: {
    list: {
      type: Array,
      default: () => []
    },
    top: {
      type: String,
      default: "32px"
    }
  },
  data() {
    return {
      curTop: 0,
      isEnter: false
    };
  },
  computed: {},
  methods: {
    handleClik() {
      console.log("click");
      this.isEnter = false;
    },
    userMouseenter() {
      this.isEnter = true;
    },
    userItemleave() {
      console.log("leave");
    },
    userMouseleave() {
      this.isEnter = false;
    }
  },
  watch: {},
  created() {},
  mounted() {
    console.log(this.$el);
    this.$nextTick(() => {
      this.curTop = {
        paddingTop: this.top || this.$el.clientHeight
      };
    });
  }
};
</script>
<style lang="scss" scoped>
.tal-dropdown {
  position: relative;
  display: inline-block;
  & > span {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
}
.dropdown-item {
  min-width: 100%;
  position: absolute;
  background: transparent;
  padding: 5px;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.3s;
  z-index: 10;
  ul {
    margin: 0;
    padding: 10px 0;
    background-color: white;
    border: 1px solid #ebeef5;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-bottom-color: #ebeef5;
    position: relative;
  }
  ul:before {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    right: auto;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    height: 0;
    width: 0;
    border: 8px solid transparent;
    border-bottom-color: #ffffff;
    -webkit-transition: opacity 0.3s;
    transition: opacity 0.3s;
    z-index: 10;
  }
  li {
    list-style: none;
    line-height: 36px;
    padding: 0 20px;
    margin: 0;
    font-size: 14px;
    color: #606266;
    cursor: pointer;
    outline: none;
    white-space: nowrap;
    &:hover {
      background-color: #e8eeff;
      color: #4470e4;
    }
  }
}
</style>
