<template>
  <el-container class="app-wrapper">
    <el-aside :width="sideBarWidth" class="sidebar-container">
      <Menu />
    </el-aside>
    <el-container
      class="container"
      :class="{ hidderContainer: !userstore.siderType }"
    >
      <el-header><Headers /></el-header>
      <el-main><router-view /></el-main>
    </el-container>
  </el-container>
</template>
<script setup>
import { ref, computed } from "vue";
import Menu from "./Menu/index.vue";
import Headers from "./headers/index.vue";
import { usesUserStore } from "@/stores/user.js";
const rootStyle = getComputedStyle(document.documentElement);
const userstore = usesUserStore();
const sideBarWidth = computed(() => {
  return userstore.siderType
    ? rootStyle.getPropertyValue("--sidebar-width").trim()
    : rootStyle.getPropertyValue("--hide-sidebar-width").trim();
});
</script>
<style></style>
<style lang="scss" scoped>
.app-container {
  position: relative;
  width: 100%;
  height: 100%;
}
.container {
  width: calc(100% - $sideBarWidth);
  height: 100%;

  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  transition: all 0.28s;
  &.hidderContainer {
    width: calc(100% - $hideSideBarWidth);
  }
}
::v-deep .el-header {
  padding: 0;
}
</style>
