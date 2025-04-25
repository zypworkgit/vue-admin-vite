import { defineStore } from 'pinia'
import router from "@/router"
import { loginApi } from "@/api/login.js";
import { setTokenTime } from '../utils/auth';
export const usesUserStore = defineStore('userStore', {
    state: () => ({
        token: localStorage.getItem('token') || '',
        siderType: true,
        lang: localStorage.getItem('lang') || 'zh'
    }),
    actions: {
        async toLogin(data) {
            try {
                const res = await loginApi(data)
                console.log(res)
                router.replace('/')
                setTokenTime()
                this.token = res.data.access_token
                localStorage.setItem('token', res.data.access_token)
            } catch(error) {

            }
        },
        async logout() {
            try {
                this.token = ''
                localStorage.clear()
                router.replace('/login')
            } catch(error) {

            }
        }
    }

})