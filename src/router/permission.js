import router from './index'
import { usesUserStore } from '@/stores/user.js'

const whiteList = ['/login'] 
router.beforeEach((to, from, next) => {
    const userStore = usesUserStore()
    console.log(userStore.token)
    if(userStore.token) {
        if (to.path === '/login') {
            next('/')
        } else {
            next()
        }
    } else {
        if(whiteList.includes(to.path)) {
            next()
        } else {
            next('/login')
        }
    }
})