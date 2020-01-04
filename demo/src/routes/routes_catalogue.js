import React, { useState, useEffect } from "react";

// Reactpage/ReactWeb
import ReactwebHome from "./pages/Reactpage/ReactWeb/reactwebHome";
import Reactpage from "./pages/Reactpage/ReactWeb/React";
// Reactpage/ReactWeb/RouteMng
import RoutermngHome from "./pages/Reactpage/ReactWeb/RouteMng/routemngHome";
// Reactpage/ReactWeb/StateMng
import Mobx from "./pages/Reactpage/ReactWeb/StateMng/Mobx";
import Redux from "./pages/Reactpage/ReactWeb/StateMng/Redux";
import StatemngHome from "./pages/Reactpage/ReactWeb/StateMng/statemngHome";

import { Route } from "react-router";

import uuid from "uuid";
/*
 * 路由目录
 * 为每一个路由封装 react-router 的<Rouet>
 */
const routeCatloague = [
  {
    component: ReactwebHome,
    exact: true,
    path: "/"
  },
  {
    component: Reactpage,
    exact: true,
    path: "/Reactpage"
  },

  {
    component: RoutermngHome,
    exact: true,
    path: "/RoutermngHome"
  },
  {
    component: Mobx,
    exact: true,
    path: "/Mobx"
  },
  {
    component: Redux,
    exact: true,
    path: "/Redux"
  },
  {
    component: StatemngHome,
    exact: true,
    path: "/StatemngHome"
  }
];

function Routescatalogue() {
  const [Routes, setRoutes] = useState([]);
  useEffect(() => {
    let Routes = routeCatloague.map(page => {
      if (page.exact) {
        return (
          <Route
            exact
            path={page.path}
            component={page.component}
            key={uuid()}
          ></Route>
        );
      } else {
        return (
          <Route
            path={page.path}
            component={page.component}
            key={uuid()}
          ></Route>
        );
      }
    });
    setRoutes(Routes);
  }, [routeCatloague]);

  return Routes;
}
export default Routescatalogue;
