<template>
  <svg
    aria-hidden="true"
    focusable="false"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
  >
    <use :xlink:href="`#icon-${iconName}`" />
  </svg>
</template>

<script setup>
import { defineProps, ref, onMounted, computed } from "vue";
import { defineAsyncComponent } from "vue";
const props = defineProps({
  iconName: String,
  width: {
    type: [Number, String],
    default: 24,
  },
  height: {
    type: [Number, String],
    default: 24,
  },
});
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
