# StickyBlockBox(锚点导航栏组件)

## 说明

- 实现点击文章标题即可跳转到对应位置的锚点导航组件

## 实现方式

- link 控制的点击事件，点击完成之后，网址会自动更新，网址末尾生成一个带#的字符串，例如 http://localhost:3000/#javascript 中的#javascript , 然后文章根据#javascript跳转至相应位置

## 用到的第三方库

```javascript
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import FormatAlignLeftIcon from "@material-ui/icons/FormatAlignLeft";
import CX from "classnames";
```

## 数据格式

```js
const data = [
  {
    name: "react", //文章标题
    type: "h1", //标题类型登记 H1/H2
    href: "#miao" //锚点
  },
  {
    name: "JavaScript",
    type: "H1",
    href: "#javascript"
  }
];
```

## 使用

```js
import { StickyBlockBox } from "solidoc-base-component-lib";
<StickyBlockBox list={data} />;
```

### API

| 标题 | 类型   | 默认值 | 描述     |
| ---- | ------ | ------ | -------- |
| name | string |        | 文章标题 |
| type | string |        | 标题类型 |
| href | string |        | 锚点位置 |
