import React from "react";
import { Link, useHistory } from "react-router-dom";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import Icon from "@material-ui/core/Icon";
import uuid from "uuid";
import { makeStyles } from "@material-ui/styles";

/**
 *   面包屑
 *+-------------------------------------------+
 *| ◀️ ▶️  🐻 IT技术 / 🍔React / 🍉React-hook
 *+-------------------------------------------+
 * @param {titleList}    数据对象,包括 icon, title, url, components
 * @param
 * @returns
 */
var useStyles = makeStyles({
  topbar: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: 66,
    paddingLeft: 28
  },
  buttonWrap: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 24,
    flexShrink: 0,
    width: 55,
    marginRight: 23,
    lineHeight: 66
  },
  goback: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 24,
    height: 24,
    borderRadius: 2.5,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#F7F6F3",
      cursor: "pointer"
    },
    "&:active": {
      backgroundColor: "#DAD9D7"
    }
  },
  goforword: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 24,
    height: 24,
    borderRadius: 2.5,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#F7F6F3",
      cursor: "pointer"
    },
    "&:active": {
      backgroundColor: "#DAD9D7"
    }
  },
  arrowIcon: {
    width: 20,
    height: 20,
    color: "#A6AAAB",
    fontSize: 20
  },
  breadcrumbWrap: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 66,
    width: "100%"
  },
  breadcrumbLink: {
    textDecoration: "none"
  },
  icon: {
    width: 21,
    height: 26,
    fontSize: 16,
    paddingRight: 3,
    flexShrink: 0
  },
  title: {
    /* bug 暂时100%宽度之后改缩略 */
    /* width: 100%; */
    height: 20,
    width: 5,
    fontSize: 14,
    fontWeight: 400,
    borderRadius: 2.5,
    color: "#868581",
    lineHeight: 22,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    "&:hover": {
      // height: 22,
      backgroundColor: "#F7F6F3",
      cursor: "pointer"
      // "&:active": {
      //   backgroundColor: "#DAD9D7"
      // }
    } },

  backslash: {
    height: 20,
    paddingRight: 5,
    paddingLeft: 5,
    textAlign: "center",
    fontSize: 14,
    fontWeight: 400,
    color: "#8E9294",
    lineHeight: 20
  },
  content: {
    position: "absolute",
    top: 50,
    left: 100
  }
});

function Breadcrumb(props) {
  var titleList = props.titleList;

  var classes = useStyles();
  var history = useHistory();
  return React.createElement(
    "div",
    { className: classes.topbar },
    React.createElement(
      "div",
      { className: classes.buttonWrap },
      React.createElement(
        "div",
        {
          className: classes.goback,
          onClick: function onClick() {
            history.goBack();
          }
        },
        React.createElement(
          Icon,
          { className: classes.arrowIcon },
          "arrow_back"
        )
      ),
      React.createElement(
        "div",
        {
          className: classes.goforword,
          onClick: function onClick() {
            history.goForward();
          }
        },
        React.createElement(
          Icon,
          { className: classes.arrowIcon },
          "arrow_forward"
        )
      )
    ),
    React.createElement(
      "div",
      { className: classes.breadcrumbWrap },
      titleList.map(function (item, index) {
        return React.createElement(
          "div",
          { key: uuid() },
          React.createElement(
            Link,
            { to: item.url, className: classes.breadcrumbLink },
            React.createElement(
              "span",
              { className: classes.icon },
              item.icon
            ),
            React.createElement(
              "span",
              { className: classes.title },
              item.title
            )
          ),
          index !== titleList.length - 1 && React.createElement(
            "span",
            { className: classes.backslash },
            "/"
          )
        );
      })
    )
  );
}

export default Breadcrumb;