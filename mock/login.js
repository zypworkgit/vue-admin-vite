export default [
    {
        url: '/mock/api/login',
        method: 'post',
        response: () => {
            return {
                "code": 0,
                "data": {
                  "data": {
                    "user_id": "550e8400-e29b-41d4-a716-446655440000",
                    "username": "john_doe",
                    "email": "john@example.com",
                    "phone": "+8613812345678",
                    "avatar": "https://cdn.example.com/avatars/john.jpg",
                    "roles": ["user", "premium_member"],
                    "registration_date": "2023-01-15T08:30:00Z",
                    "access_token": "Bearer yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
                  },
                },
                "meta": {
                    msg: "登录成功",
                    status: 200
                  }
            }
        }
    },
    {
      url: '/mock/api/menus',
      method: 'get',
      response: () => {
        return {
          "code": 200,
          "meta": {
              msg: "登录成功",
              status: 200
            },
          "data": [
            {
              "id": 1,
              "name": "系统管理",
              "path": "/system",
              "icon": "setting",
              "children": [
                {
                  "id": 11,
                  "name": "用户管理",
                  "path": "/system/user",
                  "icon": "User",
                  "roles": ["admin"], // 权限控制字段
                  "children": []
                },
                {
                  "id": 12,
                  "name": "角色管理",
                  "path": "/system/role",
                  "icon": "Avatar",
                  "roles": ["admin"]
                },
                {
                  "id": 13,
                  "name": "菜单配置",
                  "path": "/system/menu",
                  "icon": "Menu",
                  "roles": ["admin"]
                }
              ]
            },
            {
              "id": 2,
              "name": "仪表盘",
              "path": "/dashboard",
              "icon": "DataAnalysis",
              "hidden": false, // 是否隐藏菜单
              "children": [
                {
                  "id": 31,
                  "name": "仪表盘",
                  "path": "/dashboard/index",
                  "icon": "Notebook"
                },
              ]
            },
            {
              "id": 3,
              "name": "内容管理",
              "path": "/content",
              "icon": "Document",
              "children": [
                {
                  "id": 31,
                  "name": "文章管理",
                  "path": "/content/article",
                  "icon": "Notebook"
                },
                {
                  "id": 32,
                  "name": "分类管理",
                  "path": "/content/category",
                  "icon": "Folder"
                }
              ]
            },
          ]
        }
      }
    }
]