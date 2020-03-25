import React from "react";
import ReactDOM from "react-dom";
import { Menu } from "../../src/index";
// import { DragTree } from "../../src/darg-tree/ContentTree";
// import { DragTreeNode } from "../../src/darg-tree/ContentTreNode";
const data_all = require("./data-all.json");
// const data1 = require("./data1.json");
// const data2 = require("./data2.json");
// const data3 = require("./data3.json");
// const data4 = require("./data4.json");
// const data5 = require("./data5.json");
// const submenu_selectColor = require("./submenu_selectColor.json");
// const mainmenu_DragView = require("./mainmenu_DragView.json");
// const data8 = require("./data8.json");
// const data9 = require("./data9.json");
// const data10 = require("./data10.json");
const data11 = require("./data11.json");
const App2 = () => {
  return (
    <div>
      <Menu data={data_all} />
      {/* <Menu data={data1} />
      <Menu data={data2} />
      <Menu data={data3} /> */}
      {/* <Menu data={data4} /> */}
      {/* <Menu data={data5} /> */}
      {/* <Menu data={submenu_selectColor} /> */}
      {/* <Menu data={mainmenu_DragView} /> */}
      {/* <Menu data={data8} /> */}
      {/* <Menu data={data9} /> */}
      {/* <Menu data={data10} /> */}
      <Menu data={data11} />
      {/* <DragTree /> */}
      {/* <DragTreeNode /> */}
    </div>
  );
};
ReactDOM.render(<App2 />, document.querySelector("#demo"));
