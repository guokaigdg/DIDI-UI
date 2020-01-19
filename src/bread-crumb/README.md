# Breadcrumb (顶部导航栏组件)

## 说明

- 一个顶部导航栏组件，由面包屑组件加返回按钮组件构成的
- 可以显示当前页面在系统层级结构中的位置，并能向上返回。实现菜单导航功能
- 导航栏 title 标题支持缩略显示，超过 29 个字符显示...

## 使用场景

1.  当系统拥有超过两级以上的层级结构时；
2.  当需要告知用户『你在哪里』时；
3.  当需要向上导航的功能时。

## 实现方法

​		利用react路由，react-router-dom创建一个Link 这样就可以改变网址，然后面包屑根据网址内容渲染出对应路径显示出来，你需要告诉组件一个方法，用来预定网址变化后路径的变化规则，比如现在导航栏显示的是“标题一 / 标题二  / 标题三 ”，你点击了标题二，此时网址变成 "./two" ，你的方法拿到这个 "./ two " 之后生成一个渲染路径"./ 标题一 / 标题二",  然后 "./ 标题一 / 标题二  "会显示到面包屑，完成一次导航栏更新



## 示例

## 用到的第三方库

```js
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { useLocation } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import Icon from "@material-ui/core/Icon";
import uuid from "uuid";
```

## 数据格式

```js
[
  {
    icon: "🍉",
    title: "IT技术",
    url: "./it",
    component: "ITPage"
  }
];
```

### 需要传的的值：

- 数据对象，由upDateList 方法提供
- upDateList 方法，此方法会更新list并返给组件

## 使用

### 需要自己创建路由器 Router：（Link + Route + upDateList）

- **Link**：只需要传入数据对象，<Breadcrumb />组件帮你创建 Link，如下面 index.js
- **route** ：传入路由路径，如下面的 List.js
- **upDateList**：一个可以根据获取的 url 更新数据对象的方法，如下面  upDateList方法

```js
//index.js
import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Breadcrumb } from "solidoc-ase-component-lib"; //引用Breadcrumb
import List from ".xxxxxxxxxx/List"; //更改为自己的List路径

function Demo() {
  const upDateList = type => {
    switch (type) {
      case "/it":
        return [
          {
            icon: "🍉",
            title: "IT技术",
            url: "./it",
            component: "ITPage"
          }
        ];
      case "/react":
        return [
          {
            icon: "🍉",
            title: "IT技术",
            url: "./it",
            component: "ITPage"
          },
          {
            icon: "🍔",
            title: "React",
            url: "./react",
            component: "ReactPage"
          }
        ];
      case "/":
        return [
          {
            icon: "🍉",
            title: "IT技术",
            url: "./it",
            component: "ITPage"
          },
          {
            icon: "🍔",
            title: "React",
            url: "./react",
            component: "ReactPage"
          },
          {
            icon: "🥭",
            title: " React-hook",
            url: "./router",
            component: "RouterPage"
          }
        ];
    }
  };

  return (
    <div>
      <Router>
->      <Breadcrumb upDateList={upDateList} /> // 添加Link
        <Switch>
->        <List /> //List添加route
        </Switch>
      </Router>
    </div>
  );
}
export default Demo;
```

```js
//List.js  创建路由路径
import React from "react";
import { Route, Switch } from "react-router-dom";
function ITPage() {
  //相匹配的component
  return (
    <div style={{ width: "500px" }}>
      <span>IT</span>
    </div>
  );
}
function ReactPage() {
  return (
    <div style={{ width: "500px" }}>
      <span>React</span>
    </div>
  );
}
function RouterPage() {
  return (
    <div style={{ width: "500px" }}>
      <span>Router</span>
    </div>
  );
}

function List() {
  return (
    <Switch>
      <Route exact path="/it">
        <ITPage />
      </Route>
      <Route exact path="/react">
        <ReactPage />
      </Route>
      <Route exact path="/router">
        <RouterPage />
      </Route>
    </Switch>
  );
}
export default List;
```

### API

| 标题       | 类型     | 默认值 | 描述               |
| ---------- | -------- | ------ | ------------------ |
| upDateList | function | ()=>{} | 跟新数据列表的方法 |
| icon       | string   | -      | 文章图标           |
| title      | string   | -      | 文章标题           |
| url        | string   | -      | 文章路径           |
| component  | function | -      | 文章内容页         |
