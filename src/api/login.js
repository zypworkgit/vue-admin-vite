import request from "@/api/request.js";

export const loginApi = (data) => {
    return request({
        url: '/mock/api/login',
        method: 'POST',
        data
    })
}