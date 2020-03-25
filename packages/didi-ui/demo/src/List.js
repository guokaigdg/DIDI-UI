import React from "react";
import { Route, Switch } from "react-router-dom";
function ITPage() {
  return (
    <div style={{ width: "500px" }}>
      <span>
        react-router v4 使用 history 控制路由跳转 historyreact-router4 阅读约 6
        分钟 原文地址: https://github.com/brickspert...
        （如果你觉得对你有帮助，可以去github上点个star哦。）
        github上会更新，这里不更新 问题 当我们使用react-router
        v3的时候，我们想跳转路径，我们一般这样处理
        我们从react-router导出browserHistory。
        我们使用browserHistory.push()等等方法操作路由跳转。 类似下面这样 import
        browserHistory from 'react-router'; export function addProduct(props) {}
        but!! 问题来了，在react-router v4中，不提供browserHistory等的导出~~
        那怎么办？我如何控制路由跳转呢？？？
      </span>
    </div>
  );
}
function ReactPage() {
  return (
    <div style={{ width: "500px" }}>
      <span>
        我们从react-router导出browserHistory。
        我们使用browserHistory.push()等等方法操作路由跳转。 类似下面这样 import
        browserHistory from 'react-router'; export function addProduct(props) {}
        but!! 问题来了，在react-router v4中，不提供browserHistory等的导出~~
        那怎么办？我如何控制路由跳转呢？？？
      </span>
    </div>
  );
}
function RouterPage() {
  return (
    <div style={{ width: "500px" }}>
      <span>
        https://github.com/brickspert...
        （如果你觉得对你有帮助，可以去github上点个star哦。）
        github上会更新，这里不更新 问题 当我们使用react-router
        v3的时候提供browserHistory等的导出~~
        那怎么办？我如何控制路由跳转呢？？？
      </span>
    </div>
  );
}

function List() {
  return (
    <div style={{ marginLeft: 30 }}>
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
    </div>
  );
}
export default List;
