"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require("react-router-dom");

require("material-design-icons-iconfont/dist/material-design-icons.css");

var _Icon = require("@material-ui/core/Icon");

var _Icon2 = _interopRequireDefault(_Icon);

var _uuid = require("uuid");

var _uuid2 = _interopRequireDefault(_uuid);

var _styles = require("@material-ui/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *   面包屑
 *+-------------------------------------------+
 *| ◀️ ▶️  🐻 IT技术 / 🍔React / 🍉React-hook
 *+-------------------------------------------+
 * @param {titleList}    数据对象,包括 icon, title, url, components
 * @param
 * @returns
 */
var useStyles = (0, _styles.makeStyles)({
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
  var history = (0, _reactRouterDom.useHistory)();
  return _react2.default.createElement(
    "div",
    { className: classes.topbar },
    _react2.default.createElement(
      "div",
      { className: classes.buttonWrap },
      _react2.default.createElement(
        "div",
        {
          className: classes.goback,
          onClick: function onClick() {
            history.goBack();
          }
        },
        _react2.default.createElement(
          _Icon2.default,
          { className: classes.arrowIcon },
          "arrow_back"
        )
      ),
      _react2.default.createElement(
        "div",
        {
          className: classes.goforword,
          onClick: function onClick() {
            history.goForward();
          }
        },
        _react2.default.createElement(
          _Icon2.default,
          { className: classes.arrowIcon },
          "arrow_forward"
        )
      )
    ),
    _react2.default.createElement(
      "div",
      { className: classes.breadcrumbWrap },
      titleList.map(function (item, index) {
        return _react2.default.createElement(
          "div",
          { key: (0, _uuid2.default)() },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: item.url, className: classes.breadcrumbLink },
            _react2.default.createElement(
              "span",
              { className: classes.icon },
              item.icon
            ),
            _react2.default.createElement(
              "span",
              { className: classes.title },
              item.title
            )
          ),
          index !== titleList.length - 1 && _react2.default.createElement(
            "span",
            { className: classes.backslash },
            "/"
          )
        );
      })
    )
  );
}

exports.default = Breadcrumb;
module.exports = exports["default"];