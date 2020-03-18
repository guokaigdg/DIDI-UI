# ChangeIconMenu(更换图标菜单组件)

## 说明

- 一个图标菜单，提供 emoji 候选项，支持选择 emoji 作为图标，提供上传照片功能，支持上传照片作为图标

## 设计思路

从 json 获取数据，然后渲染所有的 emoji 图标，使用 emoji-mart 第三方库把 emoji 的 short_names 渲染成图标形式，

点击某一个图标，都返回当前 emoji 的短码

## 用到的第三方库

```js
import PropTypes from "prop-types";
import { Divider, LayoutContainerTB6px } from "../index";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import Icon from "@material-ui/core/Icon";
import "emoji-mart/css/emoji-mart.css";
import { Emoji } from "emoji-mart";
import { emojiIndex } from "emoji-mart";
```

## 使用

```js
import { ChangeIconMenu } from "solidoc-base-component-lib";
const handleOnChooseEmoji = result => {
  setEmojiIcon(result);
};
<ChangeIconMenu
  chooseImage={() => {
    alert("上传照片功能正在开发中, 稍后推出");
  }}
  onChooseEmoji={handleOnChooseEmoji}
/>;
```

### API

| 标题          | 类型     | 默认值 | 描述                |
| ------------- | -------- | ------ | ------------------- |
| chooseImage   | function | ()=>{} | 选择 emoji 图标上传 |
| onChooseEmoji | function | ()=>{} | 选择照上传          |

### 主流 emoji 数据库数量对比（此组件采用的是 messenger 数据库）

| 数据名    | 人物（people） | 自然（nature） | 食物（foods） | 活动（activity） | 地点（places） | 物体（objects） | 符号（symbols） | 旗帜（flags） |
| --------- | -------------- | -------------- | ------------- | ---------------- | -------------- | --------------- | --------------- | ------------- |
| Apple     | 447            | 113            | 102           | 60               | 207            | 162             | 202             | 266           |
| Google    | 447            | 113            | 102           | 60               | 207            | 162             | 205             | 248           |
| Facebook  | 401            | 113            | 102           | 60               | 207            | 162             | 191             | 266           |
| Twitter   | 446            | 113            | 102           | 60               | 207            | 162             | 203             | 266           |
| messenger | 217            | 82             | 62            | 40               | 153            | 118             | 167             | 258           |
| emojione  | 447            | 113            | 102           | 60               | 207            | 162             | 205             | 266           |
| all.json  | 447            | 113            | 102           | 60               | 207            | 162             | 205             | 266           |
