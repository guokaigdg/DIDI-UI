import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { SplitLine, LayoutContainerTB6px } from "../index";
import ChangeIconMenuRoute from "./ChangeIconMenuRoute";
import ChangeIconMenuLink from "./ChangeIconMenuLink";
const useStyles = makeStyles({
  Wrap: {
    width: 446,
    height: 356,
    background: "rgba(63,68,71,1)",
    boxShadow: " 0 2 4 0 rgba(0,0,0,0.3)",
    borderRadius: "2 0 2 2"
  },
  contentWrap: {
    display: "flex",
    flexDirection: "column"
  },

  RouteWrap: {
    width: 446,
    height: 303,
    backgroundColor: "green"
  }
});
function ChangeIconMenu() {
  const classes = useStyles();

  useEffect(() => {
    console.log("🙆‍♂️");
  });

  return (
    <div className={classes.Wrap}>
      <LayoutContainerTB6px>
        <Router>
          <div className={classes.contentWrap}>
            <ChangeIconMenuLink
              clickButton1={() => {
                alert("点击了随机");
              }}
              clickButton2={() => {
                alert("点击了移除");
              }}
            />
            <SplitLine />
            <ChangeIconMenuRoute
              chooseImage={() => {
                alert("你选择了一个图片");
              }}
            />
          </div>
        </Router>
      </LayoutContainerTB6px>
    </div>
  );
}

//传入emoji
//出入随机事件
//传入移除事件
//传入选择了摸个emoji事件
//出传入上传照片事件

export default ChangeIconMenu;
