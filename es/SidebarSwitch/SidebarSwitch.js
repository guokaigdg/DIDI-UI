import React from "react";
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
    height: 20
  },
  sidebarSwitchButton: {
    width: 11,
    height: 11
  }
});

function SidebarSwitch(props) {
  var icon = props.icon,
      title = props.title,
      clickSidebarSwitch = props.clickSidebarSwitch;

  var classes = useStyles();
  return React.createElement(
    "div",
    {
      role: classes.button,
      className: classes.sidebarSwitchWrap,
      onClick: clickSidebarSwitch
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
      React.createElement("img", {
        className: classes.sidebarSwitchButton,
        src: require("../../public/sidebar-switch-button.png")
      })
    )
  );
}
export default SidebarSwitch;