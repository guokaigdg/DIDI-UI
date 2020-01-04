import React from "react";
import Breadcrumb from "../../../../../../../src/Breadcrumb/index";
// import { Link } from "react-router-dom";

export default function RouterMngHome(props) {
  return (
    <div>
      <div>
        <Breadcrumb icon={"🍇"} title="路由管理" history={props.history} />
      </div>
      <div
        style={{
          position: "absolute",
          top: "100px",
          left: "20px",
          width: "100%"
        }}
      >
        <h3>路由管理</h3>
        路由管理Router
      </div>
    </div>
  );
}
