<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item
      v-for="(item, index) in breadcrumbList"
      :key="`breadCrumb${item.index}`"
    >
      <span class="no-redirect" v-if="index === breadcrumbList.length - 1">{{
        $t(`menus.${item.name}`)
      }}</span>
      <span class="redirect" v-else @click="handleRedirect(item.path)">{{
        $t(`menus.${item.name}`)
      }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref, watch } from "vue";
const route = useRoute();
const router = useRouter();
const breadcrumbList = ref([]);
const initBreadCrumbList = () => {
  breadcrumbList.value = route.matched;
  console.log("asdasdasdasdas", route.matched);
};
const handleRedirect = (path) => {
  router.push(path);
};
watch(
  route,
  () => {
    initBreadCrumbList();
  },
  { deep: true, immediate: true }
);
</script>
<style lang="scss" scoped>
.no-redirect {
  color: #97a8be;
  cursor: text;
}

.redirect {
  color: #666;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: $menuBg;
  }
}
</style>
