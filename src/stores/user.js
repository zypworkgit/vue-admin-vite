import { defineStore } from 'pinia'
import router from "@/router"
import { loginApi } from "@/api/login.js";

export const usesUserStore = defineStore('userStore', {
    state: () => ({
        token: localStorage.getItem('token') || ''
    }),
    actions: {
        async toLogin(data) {
            try {
                const res = await loginApi(data)
                console.log(res)
                router.replace('/')
                this.token = res.data.access_token
                localStorage.setItem('token', res.data.access_token)
            } catch(error) {

            }
        }
    }

})