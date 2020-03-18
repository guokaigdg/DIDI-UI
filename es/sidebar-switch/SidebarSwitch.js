import React from "react";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/styles";

var useStyles = makeStyles({
  sidebarSwitchWrap: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: 29,
    "&:hover": {
      background: "#E6ECF1",
      cursor: "pointer"
    },
    "&:active": {
      backgroundColor: "#DCDCDC"
    }
  },
  sidebarSwitchIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
    fontSize: 20,
    width: 23,
    height: 29,
    marginLeft: 15,
    marginRight: 8
  },
  sidebarSwitchTitle: {
    height: 20,
    fontSize: 14,
    fontWeight: 500,
    color: "#262C33",
    marginRight: 8,
    /* 字符串省略显示... */
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  },
  sidebarSwitchButtonWrap: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 20,
    height: 20,
    marginRight: 15
  },
  sidebarSwitchButton: {
    fontSize: 15,
    color: "#8E9193FF"
  }
});

function SidebarSwitch(props) {
  var icon = props.icon,
      title = props.title,
      clickSidebarSwitch = props.clickSidebarSwitch;

  var classes = useStyles();
  var handleonclickSidebarSwitch = function handleonclickSidebarSwitch() {
    clickSidebarSwitch(title);
  };
  return React.createElement(
    "div",
    {
      role: classes.button,
      className: classes.sidebarSwitchWrap,
      onClick: handleonclickSidebarSwitch
    },
    React.createElement(
      "div",
      { className: classes.sidebarSwitchIcon },
      icon
    ),
    React.createElement(
      "div",
      { className: classes.sidebarSwitchTitle },
      title
    ),
    React.createElement(
      "div",
      { className: classes.sidebarSwitchButtonWrap },
      React.createElement(
        Icon,
        { className: classes.sidebarSwitchButton },
        "unfold_more"
      )
    )
  );
}
export default SidebarSwitch;