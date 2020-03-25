<br/>
<h1 align="center">solidoc-base-component-lib</h1>

<br/>
<div align="center">

React UI 库

[![CircleCI branch](https://img.shields.io/circleci/project/github/ant-design/ant-design/master.svg?style=flat-square)](https://circleci.com/gh/ant-design/ant-design)
[![CI Status](https://github.com/ant-design/ant-design/workflows/test/badge.svg)](https://github.com/ant-design/ant-design/actions?query=workflow%3Atest)

[![](https://flat.badgen.net/npm/v/antd?icon=npm)](https://www.npmjs.com/package/solidoc-base-component-lib)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fant-design%2Fant-design.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fant-design%2Fant-design?ref=badge_shield)

</div>
<br/>

## 👨🏻‍💻 说明

- 通用 UI 组件, 帮助快速构建 React 项目

<br/>

## 💻 环境支持

- Modern browsers and Internet Explorer 11+

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Electron |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE11, Edge                                                                                                                                                                                                     | last 2 versions                                                                                                                                                                                                  | last 2 versions                                                                                                                                                                                              | last 2 versions                                                                                                                                                                                              | last 2 versions                                                                                                                                                                                                      |

<br/>

### 📦 安装

```
npm i solidoc-base-component-lib
or
cnpm i solidoc-base-component-lib
or
yarn add solidoc-base-component-lib
```

<br/>

### ⚙️ 使用

```js
import { LayoutContainerTB6px, Divider } from "solidoc-base-component-lib";

const App = () => (
  <div>
    <LayoutContainerTB6px>
      hello
      <Divider />
      world
    </LayoutContainerTB6px>
  </div>
);
```

<br/>

### 📁 组件列表

| 组件名称                                 | 描述                      |
| ---------------------------------------- | ------------------------- |
| ---------布局容器组件----------------    |                           |
| MainContainerTB6px                       | 主容器布局, 上 8px 下 8px |
| LayoutContainerTB                        | 布局容器, 上 0px 下 0px   |
| LayoutContainerTB6px                     | 布局容器, 上 6px 下 6px   |
| LayoutContainerTB8px                     | 布局容器, 上 8px 下 8px   |
| LayoutContainerT6px                      | 布局容器, 上 6px 下 0px   |
| LayoutContainerB6px                      | 布局容器, 上 0px 下 6px   |
| Divider                                  | 分割线                    |
| ------------------                       |                           |
| Display                                  | 通用标题组件              |
| SidebarSwitch                            | 侧边栏切换组件            |
| Breadcrumb                               | 面包屑组件                |
| StickyBlockBox                           | 锚点导航栏组件            |
| ChangeIconMenu                           | 点击更换图标组件          |
| ShowEmoji                                | emoji 渲染组件            |
| SearchEmoji                              | emoji 查找组件            |
| Draggable                                | 拖拽组组件                |
| --------菜单----------                   |                           |
| Menu                                     | 菜单组件                  |
| MainMenu                                 | 主菜单                    |
| SubMenu                                  | 子菜单                    |
| --菜单 base-component 基础组件--------   |                           |
| SmallIconView                            | 小图标组件                |
| MediumIconView                           | 中图标组件                |
| BigIconView                              | 大图标组件                |
| EmojiIconView                            | emoji 图标组件            |
| DragView                                 | 拖拽组件                  |
| ColorView                                | 颜色组件                  |
| ----菜单 other-component 其他组件------  |                           |
| FilterInputView                          | 过滤组件                  |
| GroupTitleView                           | 分组标题组件              |
| HintText                                 | 提示文本                  |
| HintButton                               | 提示按钮                  |
| ----菜单 complex-component 复杂组件----- |                           |
| DragGroupView                            | 拖拽组合组件              |
| SelectGroupView                          | 单选组合组件              |
| ------菜单 user-component 用户组价------ |                           |
| UserInfoView                             | 显示用户信息的组件        |
| UserWorkView                             | 显示用户工作区域的组件    |
| UserAddButton                            | 一个带添加按钮的组件      |
| ---菜单 sub_component 子组件-------      |                           |
| Text                                     | 纯文本组件                |
| Arrow                                    | 箭头组件                  |
| ShortcutsKey                             | 快捷键 ⌘+C                |
| SwitchButton                             | 开关                      |
| SelectButton                             | 选择框                    |
| MoreButton                               | 更多按钮                  |
| SelectedIcon                             | 选中图标 ✔️               |

<br/>

API 文档
https://www.notion.so/guookai/solidoc-ase-component-lib-2222a3768b08408286397b96f7bf15fd
