import React from "react";
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import FormatAlignLeftIcon from "@material-ui/icons/FormatAlignLeft";
import CX from "classnames";

var useStyles = makeStyles({
  itemLeft: {
    flexShrink: 0,
    height: 29,
    width: 2,
    backgroundColor: "#E6ECF1"
  },

  contentOutline: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 225,
    height: 29
  },
  icon: {
    display: "flex",
    alignItems: "center",
    marginLeft: 22,
    width: 16,
    height: 16
  },

  title: {
    marginLeft: 7,
    height: 17,
    fontSize: 12,
    fontWeight: 500,
    color: "#9DAAB6"
  },

  itemWrap: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 225,
    height: 29,
    cursor: "pointer",
    textDecoration: "none",

    "&:hover": {
      backgroundColor: "#E6ECF1"
    }
  },
  itemIcon: {
    position: "absolute",
    width: 2,
    height: 29,
    background: "#A44EED"
  },

  fontH1Default: {
    marginLeft: 23,
    fontSize: 12,
    fontWeight: 500,
    color: "#7C8893",
    /* 字符串省略显示... */
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  },

  fontH1Choosen: {
    color: "#A755ED"
  },

  fontH2Default: {
    marginLeft: 40,
    fontSize: 12,
    fontWeight: 500,
    color: "#7C8893",
    /* 字符串省略显示... */
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  },

  fontH2Choosen: {
    color: "#A755ED"
  }
});

function StickyBlockBox(props) {
  var list = props.list;

  var location = useLocation();
  var newHref = location.hash;
  console.log(newHref);

  var classes = useStyles();
  return React.createElement(
    "div",
    null,
    list && React.createElement(
      "div",
      { className: classes.contentOutline },
      React.createElement("div", { className: classes.itemLeft }),
      React.createElement(
        "span",
        { className: classes.icon },
        React.createElement(FormatAlignLeftIcon, { style: { fontSize: 16 } })
      ),
      React.createElement(
        "span",
        { className: classes.title },
        "\u5185\u5BB9\u5927\u7EB2"
      )
    ),
    list.map(function (item, index) {
      var _CX, _CX2;

      return React.createElement(
        Link,
        { to: item.href, className: classes.itemWrap, key: index + item },
        React.createElement("div", { className: classes.itemLeft }),
        item.href === newHref && React.createElement("span", { className: classes.itemIcon }),
        item.type === "H1" && React.createElement(
          "span",
          {
            className: CX((_CX = {}, _CX[classes.fontH1Default] = true, _CX[classes.fontH1Choosen] = item.href === newHref, _CX))
          },
          item.name
        ),
        item.type === "H2" && React.createElement(
          "div",
          {
            className: CX((_CX2 = {}, _CX2[classes.fontH2Default] = true, _CX2[classes.fontH2Choosen] = item.href === newHref, _CX2))
          },
          item.name
        )
      );
    })
  );
}
export default StickyBlockBox;