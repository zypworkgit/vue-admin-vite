import { createRouter, createWebHashHistory } from "vue-router";
import Home from '@/view/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: import('@/view/login/index.vue')
    }
]
export const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router