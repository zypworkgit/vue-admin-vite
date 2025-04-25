<template>
  <div class="hamburger-container" @click="toggleClick">
    <svg-icon :iconName="iconName"></svg-icon>
  </div>
</template>
<script setup>
import { usesUserStore } from "@/stores/user.js";
import { computed } from "vue";
const userstore = usesUserStore();
const toggleClick = () => {
  userstore.siderType = !userstore.siderType;
};
const iconName = computed(() => {
  return userstore.siderType ? "hamburger-opened" : "hamburger-closed";
});
</script>
<style lang="scss" scoped>
.hamburger-container {
  margin-right: 16px;
  box-sizing: border-box;
  cursor: pointer;
}
</style>
