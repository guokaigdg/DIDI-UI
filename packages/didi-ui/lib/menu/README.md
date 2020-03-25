# menu 菜单组件

## menu 菜单组件 API

### 目录

- menu 菜单
  - menu-component 菜单组件
    - main-menu.tsx
      - MainMenu 主菜单
    - sub-menu.tsx
      - SubMenu 子菜单
    - sub-popover.tsx
      - SubPopover 连接主菜单与子菜单组件
  - container 容器组件
    - index.tsx
      - MainContainerTB6px 上边距 0px，下内边距为 0px 的容器组件
  - layout-components 布局组件
    - index.tsx
      - LayoutContainerTB 上边距 0px，下内边距为 0px
      - LayoutContainerT6px 上边距 6px，下内边距为 0px
      - LayoutContainerB6px 上边距 0px，下内边距为 6px
      - LayoutContainerTB3px 上边距 3px，下内边距为 3px
      - LayoutContainerTB6px 上边距 6px，下内边距为 6px
      - LayoutContainerTB8px 上边距 8px，下内边距为 8px
  - components
    - base-components 基础组件
      - index.tsx
        - SmallIconView 小图标组件
        - MediumIconView 中图标组件
        - BigIconView 大图标组件
        - EmojiIconView emoji 图标组件
        - DragView 拖拽组件
        - ColorView 颜色组件
    - complex-component 复杂组件
      - index.tsx
        - DragGroupView ： 拖拽组合组件
        - SelectGroupView ： 单选组合组件
    - user-components 用户组件
      - index.tsx
        - UserInfoView ： 显示用户信息的组件
        - UserWorkView ： 显示用户工作区的组件
        - UserAddButton ： 一个带添加按钮的组件
    - other-components 其他组件
      - index.tsx
        - FilterInputView 过滤输入框
        - GroupTitleView 分组标题组件
        - HintText 提示文本
        - HintButton 提示按钮
    - sub_component 子组件
      - index.tsx
        - Arrow 箭头
        - ShortcutsKey 快捷键
        - SwitchButton 开关
        - SelectButton 选择框
        - MoreButton 更多按钮
        - SelectedIcon 选中图标
        - SubComponents: 子菜单

### menu API

| 标题    | 类型     | 默认值 | 描述     |
| ------- | -------- | ------ | -------- |
| data    | nodes    |        | 节点数据 |
| onClick | function |        | 点击事件 |
