"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _StickyBlockBox = require("./StickyBlockBox");

var _StickyBlockBox2 = _interopRequireDefault(_StickyBlockBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function StickyBlockBoxWrap(props) {
  var list = props.list;

  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(_StickyBlockBox2.default, { list: list })
  );
}
StickyBlockBoxWrap.protoTypes = {
  list: _propTypes2.default.object
};
StickyBlockBoxWrap.defaultProps = {
  list: [{
    name: "文章标题H1",
    type: "H1",
    href: "#h1"
  }, {
    name: "文章标题H2",
    type: "H2",
    href: "#h2"
  }]
};
exports.default = StickyBlockBoxWrap;
module.exports = exports["default"];