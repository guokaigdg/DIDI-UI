"use strict";

exports.__esModule = true;
exports.LayoutContainerB6px = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styles = require("@material-ui/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyle = (0, _styles.makeStyles)({
  line: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    paddingBottom: 6
  }
});

function LayoutContainerB6px(props) {
  var children = props.children;

  var classes = useStyle();
  return _react2.default.createElement(
    "div",
    { className: classes.line },
    children
  );
}
exports.LayoutContainerB6px = LayoutContainerB6px;