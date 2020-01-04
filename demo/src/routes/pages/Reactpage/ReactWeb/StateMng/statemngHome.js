import React from "react";
import Breadcrumb from "../../../../../../../src/Breadcrumb/index";
import { Link } from "react-router-dom";

export default function StateMngHome(props) {
  return (
    <div>
      <div>
        <Breadcrumb icon={"🍑"} title="状态管理 首页" history={props.history} />
      </div>
      {/* <h1>状态管理</h1> */}
      <div
        style={{
          position: "absolute",
          top: "100px",
          left: "20px",
          width: "100%"
        }}
      >
        <div id="links">
          <Link to="/Redux">Redux</Link>
          <Link to="/Mobx">Mobx</Link>
        </div>
      </div>
    </div>
  );
}
