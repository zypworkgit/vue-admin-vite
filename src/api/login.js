import request from "@/api/request.js";

export const loginApi = (data) => {
    console.log('hahahahahahahaha',)
    return request({
        url: '/mock/api/login',
        method: 'POST',
        data
    })
}