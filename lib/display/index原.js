"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _display = require("./display.js");

var _display2 = _interopRequireDefault(_display);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Display
 * @param {icon} 图标显示
 * @param {title} 标题
 * @param {onSelct} 点击之后的方法
 * @returns
 */

function DisplayWrap(props) {
  var dia = props.dia;

  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(_display2.default, { icon: icon, title: title, clickDisplay: onSelct })
  );
}
DisplayWrap.protoTypes = {
  icon: _propTypes2.default.string,
  title: _propTypes2.default.string,
  onSelct: _propTypes2.default.func
};
DisplayWrap.defaultProps = {
  icon: "book",
  title: "工作区",
  onSelct: function onSelct() {
    console.log("ok");
  }
};
exports.default = DisplayWrap;
module.exports = exports["default"];