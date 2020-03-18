"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("material-design-icons-iconfont/dist/material-design-icons.css");

var _Icon = require("@material-ui/core/Icon");

var _Icon2 = _interopRequireDefault(_Icon);

var _styles = require("@material-ui/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _styles.makeStyles)({
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
  return _react2.default.createElement(
    "div",
    {
      role: classes.button,
      className: classes.sidebarSwitchWrap,
      onClick: handleonclickSidebarSwitch
    },
    _react2.default.createElement(
      "div",
      { className: classes.sidebarSwitchIcon },
      icon
    ),
    _react2.default.createElement(
      "div",
      { className: classes.sidebarSwitchTitle },
      title
    ),
    _react2.default.createElement(
      "div",
      { className: classes.sidebarSwitchButtonWrap },
      _react2.default.createElement(
        _Icon2.default,
        { className: classes.sidebarSwitchButton },
        "unfold_more"
      )
    )
  );
}
exports.default = SidebarSwitch;
module.exports = exports["default"];