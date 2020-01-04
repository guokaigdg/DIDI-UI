"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SidebarSwitch = require("./SidebarSwitch.js");

var _SidebarSwitch2 = _interopRequireDefault(_SidebarSwitch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 导航栏切换
 * @param {icon} 图标emoji
 * @param {title} 导航栏标题
 * @param {onSelct} 点击之后的方法
 * @returns
 */

function SidebarSwitchWrap(props) {
  var icon = props.icon,
      title = props.title,
      onSelct = props.onSelct;

  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(_SidebarSwitch2.default, { icon: icon, title: title, clickSidebarSwitch: onSelct })
  );
}
SidebarSwitchWrap.protoTypes = {
  icon: _propTypes2.default.string,
  title: _propTypes2.default.string,
  onSelct: _propTypes2.default.func
};
SidebarSwitchWrap.defaultProps = {
  icon: "👽️",
  title: "我的工作区",
  onSelct: function onSelct() {
    console.log("ok");
  }
};
exports.default = SidebarSwitchWrap;
module.exports = exports["default"];