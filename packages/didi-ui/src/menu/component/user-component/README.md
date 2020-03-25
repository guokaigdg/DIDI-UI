# 用户组件

- UserInfoView ： 显示用户信息的组件
- UserWorkView ： 显示用户工作区的组件
- UserAddButton ： 一个带添加按钮的组件

### UserInfoView (显示用户信息的组件)

#### API

| 标题 | 类型   | 默认值 | 描述         |
| ---- | ------ | ------ | ------------ |
| url  | String |        | 头像图片地址 |
| text | String |        | 用户昵称     |
| desc | String |        | 用户邮箱     |

### UserWorkView (显示用户工作区的组件 )

#### API

| 标题     | 类型   | 默认值 | 描述             |
| -------- | ------ | ------ | ---------------- |
| emoji    | String |        | emoji            |
| text     | String | " "    | 工作区域标题     |
| desc     | String | " "    | 工作区域内容描述 |
| children | nodes  | " "    | 子菜单           |

#### UserAddButton ( 一个带添加按钮的组件)

#### API

| 标题 | 类型   | 默认值         | 描述               |
| ---- | ------ | -------------- | ------------------ |
| text | String | 创建或加入社区 | 增加按钮的内容描述 |
