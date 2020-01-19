# Display (通用标题组件)

## 说明

- 一个通用的标题显示组件 ， 可以显示图标和文字标题
- 支持宽度自适应且缩略显示内容

## 实现方式

- 图标实现方式

借助第三方库"@material-ui/core/Icon"实现图标渲染

- 字符串省略显示... 实现方式

```javascript
overflow: "hidden",
textOverflow: "ellipsis",
whiteSpace: "nowrap
```

-

## 示例

## 用到的第三方库

```js
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import Icon from "@material-ui/core/Icon";
```

## 数据

```javascript
disPlayList={[
	{
  	icon: "add",
  	title: "添加新页面",
   	href: "add"
   },
   {
     icon: "delete_outline",
     title: "回收站",
     href: "delete_outline"
    },
 ]}
```

### icon 名字选取需要从以下网站中挑选（需要开启科学上网）

[Material Icon 库](https://material.io/resources/icons/?style=baseline)

## 使用

```js
import { Display } from "solidoc-base-component-lib";
<Display
  disPlayList={disPlayList}
  onSelect={result => {
    console.log(result);
  }}
/>;
```

### API

| 标题     | 类型     | 默认值 | 描述                                                                                      |
| -------- | -------- | ------ | ----------------------------------------------------------------------------------------- |
| icon     | object   | book   | 图标名，需要从[Material Icon 库](https://material.io/resources/icons/?style=baseline)选取 |
| title    | string   | 工作区 | 标题名                                                                                    |
| href     | String   |        | 跳转路径，自己定义                                                                        |
| onSelect | function | ()=>{} | 点击事件，获取点击的 title 标题                                                           |
