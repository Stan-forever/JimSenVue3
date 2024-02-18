<template>
  <svg aria-hidden="true" :style="iconStyle">
    <use :xlink:href="symbolId" :fill="fillColor" />
  </svg>
</template>

<script lang="ts" setup name="iconSvg">
import { computed } from "vue";

interface SvgProps {
  name: string;
  prefix?: string;
  iconStyle?: any;
  fillColor?: string;
}

const props = withDefaults(defineProps<SvgProps>(), {
  prefix: "icon",
  iconStyle: () => ({
    width: "16px",
    height: "16px"
  }),
  fillColor: "#a8abb2"
});

const symbolId = computed(() => `#${props.prefix}-${props.name}`);
</script>
