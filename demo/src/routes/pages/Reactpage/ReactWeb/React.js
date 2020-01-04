import React from "react";
import Breadcrumb from "../../../../../../src/Breadcrumb/index";

export default function ReactPage(props) {
  return (
    <div>
      <div>
        <Breadcrumb icon={"🍇"} title="React" history={props.history} />
      </div>

      <div
        style={{
          position: "absolute",
          top: "100px",
          left: "20px",
          width: "700px"
        }}
      >
        {/* <h3>React</h3> */}
        这本书让我意识到自己的坏习惯是需要科学的方法来改变的，一味地自责和焦虑是没用的
      </div>
    </div>
  );
}
