import React from "react";
import Breadcrumb from "../../../../../../../src/Breadcrumb/index";

export default function Mobx(props) {
  return (
    <div>
      <div>
        <Breadcrumb icon={"🍇"} title="Mobx" history={props.history} />
      </div>

      <div
        style={{
          position: "absolute",
          top: "100px",
          left: "20px",
          width: "100%"
        }}
      >
        <h3>Mobx</h3>
        1. 一本书 《习惯的力量》（The Power of
        Habit）。这本书让我意识到自己的坏习惯是需要科学的方法来改变的，一味地自责和焦虑是没用的。习惯的改变靠的不是主观意志力，而是
      </div>
    </div>
  );
}
