import React from "react";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/styles";

var useStyles = makeStyles({
  displayWrap: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: 29,

    "&:hover": {
      background: "#E6E9F1",
      cursor: "pointer"
    },
    "&:active": {
      backgroundColor: "#DAD9D7"
    }
  },

  displayIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    width: 20,
    height: 20,
    marginLeft: 24,
    marginRight: 7
  },
  materialIcons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  displayTitle: {
    height: 20,
    fontSize: 14,
    fontWeight: 500,
    color: "#262C33",
    /* 字符串省略显示... */
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }
});

function Display(props) {
  var icon = props.icon,
      title = props.title,
      clickDisplay = props.clickDisplay;

  var classes = useStyles();
  return React.createElement(
    "div",
    { className: classes.displayWrap, onClick: clickDisplay },
    React.createElement(
      "div",
      { className: classes.displayIcon },
      React.createElement(
        "div",
        { className: classes.materialIcons },
        React.createElement(
          Icon,
          { style: { fontSize: 16 } },
          icon
        )
      )
    ),
    React.createElement(
      "span",
      { className: classes.displayTitle },
      title
    )
  );
}
export default Display;