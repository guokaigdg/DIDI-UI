"use strict";

exports.__esModule = true;
exports.Divider = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styles = require("@material-ui/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyle = (0, _styles.makeStyles)({
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#E6ECF1"
  }
});

function Divider() {
  var classes = useStyle();
  return _react2.default.createElement("div", { className: classes.line });
}
exports.Divider = Divider;