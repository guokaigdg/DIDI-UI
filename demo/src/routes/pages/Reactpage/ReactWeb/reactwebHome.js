import React from "react";
import Breadcrumb from "../../../../../../src/Breadcrumb/index";
import { Link } from "react-router-dom";

export default function ReactWebHome(props) {
  return (
    <div>
      <div>
        <Breadcrumb
          icon={"🍇"}
          title="react首页"
          history={props.history}
          isHome={true}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "100px",
          left: "20px",
          width: "100%"
        }}
      >
        {/* <h1>react</h1> */}
        <div id="links">
          <Link to="/Reactpage">React</Link>
          <Link to="/StatemngHome">状态</Link>
          <Link to="/RoutermngHome">路由</Link>
        </div>
      </div>
    </div>
  );
}
