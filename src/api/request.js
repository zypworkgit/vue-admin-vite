import axios from "axios";
import { ElMessage } from "element-plus";
import { diffTokenTime } from "@/utils/auth.js"
import { usesUserStore } from "../stores/user";
const service = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    timeout: 1000
})
service.interceptors.request.use(config => {
    const userStore = usesUserStore()
    if(localStorage.getItem('token')) {
        if(diffTokenTime()) {
            userStore.logout()
            return Promise.reject(new Error(' token 失效了'))
        }
    }
    config.headers.Authorization = localStorage.getItem('token')
    return config
}, error => {
    return Promise.reject(new error(error))
})
// axios的响应请求拦截器
service.interceptors.response.use(response => {
    const { data, meta } = response.data
    console.log('拦截响应')
    if (meta.status === 200 || meta.status === 201) {
        ElMessage({
            message: meta.msg,
            type: 'success',
          })
          console.log(data)
        return data
    } else {
        ElMessage({
            message: meta.msg,
            type: 'error',
        })
        return Promise.reject(new Error(meta.msg))
    }
}, error => {
    error.response && ElMessage({
        message: error.response.data,
        type: 'error'
    })
    console.log(error)
    // return Promise.reject(new Error(error.response.data))
})

export default service
