"use strict";

exports.__esModule = true;
exports.LayoutContainerTB8px = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styles = require("@material-ui/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyle = (0, _styles.makeStyles)({
  line: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    paddingTop: 8,
    paddingBottom: 8
  }
});

function LayoutContainerTB8px(props) {
  var children = props.children;

  var classes = useStyle();
  return _react2.default.createElement(
    "div",
    { className: classes.line },
    children
  );
}
exports.LayoutContainerTB8px = LayoutContainerTB8px;