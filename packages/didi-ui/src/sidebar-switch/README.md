# SidebarSwitch(侧边栏切换组件)

## 说明

- 一个可以切换侧边栏工作区的组件
- 宽度自适应,支持缩略显示内容

## 实现方式

- 字符串省略显示... 实现方式

```javascript
overflow: "hidden",
textOverflow: "ellipsis",
whiteSpace: "nowrap
```

- 图标实现方式

## 用到的第三方库

```js
import PropTypes from "prop-types"; //传值类型校验
import "material-design-icons-iconfont/dist/material-design-icons.css";
import Icon from "@material-ui/core/Icon"; //传值类型校验
import { makeStyles } from "@material-ui/styles";
```

## 使用

```js
import { SidebarSwitchWrap } from "solidoc-base-component-lib";
<SidebarSwitch
  icon="🍉"
  title="我的工作区"
  onSelect={result => {
    alert(`你点击了${result}`);
  }}
/>;
```

### API

| 标题     | 类型     | 默认值     | 描述                            |
| -------- | -------- | ---------- | ------------------------------- |
| icon     | String   | 👽️        | icon:图标                       |
| title    | String   | 我的工作区 | title: 标题名                   |
| onSelect | function | ()=>{}     | 点击事件，获取点击的 title 标题 |
