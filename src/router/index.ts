import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: import("@/views/login/index.vue"),
  },

  {
    path: "/",
    name: "/",
    component: () => import("@/layout/index.vue"),
    redirect: "/system/user",
    children: [
      {
        path: "/system/user",
        name: "users",
        component: () => import("@/views/system/user.vue"),
      },

      {
        path: "/system/role",
        name: "role",
        component: () => import("@/views/system/role.vue"),
      },
      {
        path: "/system/menu",
        name: "menu",
        component: () => import("@/views/system/menu.vue"),
      },

      {
        path: "/categories",
        name: "categories",
        component: () => import("@/views/categories/index.vue"),
      },
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/views/dashboard/index.vue"),
      },
      {
        path: "/content",
        name: "content",
        redirect: "/content/article",
        children: [
          {
            path: "/content/article",
            name: "article",
            component: () => import("@/views/content/article.vue"),
          },
          {
            path: "/content/category",
            name: "category",
            component: () => import("@/views/content/category.vue"),
          },
        ],
      },
      {
        path: "/content",
        name: "params",
        component: () => import("@/views/params/index.vue"),
      },
      {
        path: "reports",
        name: "reports",
        component: () => import("@/views/reports/index.vue"),
      },
      {
        path: "rights",
        name: "rights",
        component: () => import("@/views/rights/index.vue"),
      },
      {
        path: "roles",
        name: "roles",
        component: () => import("@/views/roles/index.vue"),
      },
    ],
  },
];
export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
