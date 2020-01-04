import React from "react";
import Breadcrumb from "../../../../../../../src/Breadcrumb/index";

export default function Redux(props) {
  return (
    <div>
      <div>
        <Breadcrumb icon={"☀️"} title="Redux" history={props.history} />
      </div>
      <div
        style={{
          position: "absolute",
          top: "100px",
          left: "20px",
          width: "100%"
        }}
      >
        <h3>Redux</h3>
        1. 一本书 《习惯的力量》（The Power of Habit）
      </div>
    </div>
  );
}
