<template>
  <el-dropdown @command="handleCommand">
    <svg-icon iconName="language"></svg-icon>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="zh" :disabled="currentLanguage === 'zh'"
          >中文</el-dropdown-item
        >
        <el-dropdown-item command="en" :disabled="currentLanguage === 'en'"
          >English</el-dropdown-item
        >
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { computed } from "vue";
import { usesUserStore } from "@/stores/user";
const i18n = useI18n();
const store = usesUserStore();
const currentLanguage = computed(() => {
  return i18n.locale.value;
});

const handleCommand = (val) => {
  i18n.locale.value = val;
  store.lang = val;
  localStorage.setItem("lang", val);
};
</script>

<style lang="scss" scoped></style>
