<template>
  <div>
    <count-to :usegroup="true" :end="12345678"></count-to>
  </div>
</template>
<script>
import countTo from "./index";
export default {
  components: {
    countTo
  }
};
</script>
