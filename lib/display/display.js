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
  displayWrap: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: 29,

    "&:hover": {
      background: "#E6E9F1",
      cursor: "pointer"
    },
    "&:active": {
      backgroundColor: "#DAD9D7"
    }
  },

  displayIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    width: 20,
    height: 20,
    marginLeft: 24,
    marginRight: 7
  },
  materialIcons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  displayTitle: {
    height: 20,
    fontSize: 14,
    marginRight: 24,
    fontWeight: 500,
    color: "#262C33",
    /* 字符串省略显示... */
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }
});

function Display(props) {
  var list = props.list,
      onclickDisplay = props.onclickDisplay;

  var classes = useStyles();
  return _react2.default.createElement(
    "div",
    null,
    list.map(function (item, index) {
      return _react2.default.createElement(
        "div",
        {
          className: classes.displayWrap,
          key: index,
          onClick: function onClick() {
            return onclickDisplay(item.href);
          }
        },
        _react2.default.createElement(
          "div",
          { className: classes.displayIcon },
          _react2.default.createElement(
            "div",
            { className: classes.materialIcons },
            _react2.default.createElement(
              _Icon2.default,
              { style: { fontSize: 16 } },
              item.icon
            )
          )
        ),
        _react2.default.createElement(
          "span",
          { className: classes.displayTitle },
          item.title
        )
      );
    })
  );
}
exports.default = Display;
module.exports = exports["default"];