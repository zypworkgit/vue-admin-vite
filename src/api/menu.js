import request from './request'

export const menuList = () => {
    return request({
            url: '/mock/api/menus',
            method: 'get'
        })
}