<template>
  <el-menu
    active-text-color="#ffd04b"
    :background-color="`$menuBg`"
    class="el-menu-vertical-demo"
    :default-active="defaultActive"
    text-color="#fff"
    router
    unique-opened
    :collapse="!userstore.siderType"
  >
    <el-sub-menu
      :index="item.id"
      v-for="(item, index) in menusList"
      :key="item.id"
    >
      <template #title>
        <el-icon>
          <component :is="item.icon"></component>
        </el-icon>
        <span>{{ item.name }}</span>
      </template>
      <el-menu-item
        :index="el.path"
        v-for="(el, i) in item.children"
        :key="el.id"
        @click="savePath(el.path)"
      >
        <template #title>
          <el-icon>
            <component :is="el.icon"></component>
          </el-icon>
          <span>{{ item.name }}</span>

          <!-- <span>{{ $t(`menus.${el.path.substring(1)}`) }}</span> -->
        </template>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>
<script setup>
import { menuList } from "@/api/menu.js";
import { ref, computed } from "vue";
import { usesUserStore } from "@/stores/user.js";
const userstore = usesUserStore();
const iconlist = ref(["user", "setting", "shop", "tickets", "pie-chart"]);
const defaultActive = ref(sessionStorage.getItem("path") || "/system/user");
const menusList = ref([]);
const initMenusList = async () => {
  menusList.value = await menuList();
};
const savePath = (path) => {
  sessionStorage.setItem("path", path);
};
initMenusList();
</script>
