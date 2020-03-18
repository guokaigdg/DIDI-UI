"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require("react-router-dom");

var _styles = require("@material-ui/styles");

var _FormatAlignLeft = require("@material-ui/icons/FormatAlignLeft");

var _FormatAlignLeft2 = _interopRequireDefault(_FormatAlignLeft);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _styles.makeStyles)({
  itemLeft: {
    flexShrink: 0,
    height: 29,
    width: 2,
    backgroundColor: "#E6ECF1"
  },

  contentOutline: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 225,
    height: 29
  },
  icon: {
    display: "flex",
    alignItems: "center",
    marginLeft: 22,
    width: 16,
    height: 16
  },

  title: {
    marginLeft: 7,
    height: 17,
    fontSize: 12,
    fontWeight: 500,
    color: "#9DAAB6"
  },

  itemWrap: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 225,
    height: 29,
    cursor: "pointer",
    textDecoration: "none",

    "&:hover": {
      backgroundColor: "#E6ECF1"
    }
  },
  itemIcon: {
    position: "absolute",
    width: 2,
    height: 29,
    background: "#A44EED"
  },

  fontH1Default: {
    marginLeft: 23,
    fontSize: 12,
    fontWeight: 500,
    color: "#7C8893",
    /* 字符串省略显示... */
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  },

  fontH1Choosen: {
    color: "#A755ED"
  },

  fontH2Default: {
    marginLeft: 40,
    fontSize: 12,
    fontWeight: 500,
    color: "#7C8893",
    /* 字符串省略显示... */
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  },

  fontH2Choosen: {
    color: "#A755ED"
  }
});

function StickyBlockBox(props) {
  var list = props.list;

  var location = (0, _reactRouterDom.useLocation)();
  var newHref = location.hash;
  console.log(newHref);

  var classes = useStyles();
  return _react2.default.createElement(
    "div",
    null,
    list && _react2.default.createElement(
      "div",
      { className: classes.contentOutline },
      _react2.default.createElement("div", { className: classes.itemLeft }),
      _react2.default.createElement(
        "span",
        { className: classes.icon },
        _react2.default.createElement(_FormatAlignLeft2.default, { style: { fontSize: 16 } })
      ),
      _react2.default.createElement(
        "span",
        { className: classes.title },
        "\u5185\u5BB9\u5927\u7EB2"
      )
    ),
    list.map(function (item, index) {
      var _CX, _CX2;

      return _react2.default.createElement(
        _reactRouterDom.Link,
        { to: item.href, className: classes.itemWrap, key: index + item },
        _react2.default.createElement("div", { className: classes.itemLeft }),
        item.href === newHref && _react2.default.createElement("span", { className: classes.itemIcon }),
        item.type === "H1" && _react2.default.createElement(
          "span",
          {
            className: (0, _classnames2.default)((_CX = {}, _CX[classes.fontH1Default] = true, _CX[classes.fontH1Choosen] = item.href === newHref, _CX))
          },
          item.name
        ),
        item.type === "H2" && _react2.default.createElement(
          "div",
          {
            className: (0, _classnames2.default)((_CX2 = {}, _CX2[classes.fontH2Default] = true, _CX2[classes.fontH2Choosen] = item.href === newHref, _CX2))
          },
          item.name
        )
      );
    })
  );
}
exports.default = StickyBlockBox;
module.exports = exports["default"];