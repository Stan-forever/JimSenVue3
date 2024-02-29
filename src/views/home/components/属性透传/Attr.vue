<template>
  <!-- <div> -->
    <div class="line1" v-bind="$attrs">123</div>
    <div class="line2">456</div>
    <div>attrs: {{ $attrs }}</div>
  <!-- </div> -->
</template>
<script setup lang="ts">
defineOptions({
  inheritAttrs: false
});
import { useAttrs } from "vue";
</script>

<style lang="scss" scoped>
.line1 {
  height: 30px;
  width: 100px;
  background-color: antiquewhite;
}
.line2 {
  height: 30px;
  width: 100px;
  background-color: aqua;
}
.white-color {
  color: blue;
}
</style>
