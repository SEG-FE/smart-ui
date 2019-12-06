import { shallowMount } from "@vue/test-utils";
import Alert from "@/components/alert/src/main.vue";

describe("Alert.vue", () => {
  it("渲染Alert组件", () => {
    const wrapper = shallowMount(Alert);
    expect(wrapper.element).toMatchSnapshot();
  });
});
