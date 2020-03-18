"use strict";

exports.__esModule = true;
exports.DisplayWrap = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _display = require("./display.js");

var _display2 = _interopRequireDefault(_display);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Display
 * @param {icon} 图标
 * @param {title} 标题
 * @param {onSelect} 点击标题返回标题吗名字的方法
 * @returns
 */

function DisplayWrap(props) {
  var disPlayList = props.disPlayList,
      onSelect = props.onSelect;

  var handleonCelct = function handleonCelct(titleName) {
    onSelect(titleName);
  };
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(_display2.default, { list: disPlayList, onclickDisplay: handleonCelct })
  );
}
DisplayWrap.protoTypes = {
  disPlayList: _propTypes2.default.object,
  onSelect: _propTypes2.default.func
};
DisplayWrap.defaultProps = {
  disPlayList: [{ icon: "book", title: "工作区" }],
  onSelect: function onSelect() {}
};
exports.DisplayWrap = DisplayWrap;