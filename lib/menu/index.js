"use strict";

exports.__esModule = true;
exports.Menu = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styles = require("@material-ui/styles");

var _index = require("../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyle = (0, _styles.makeStyles)({
  menu: {
    width: 320,
    height: 428,
    // background: "rgba(63, 68, 71, 1)",
    background: "rgba(120,120,120,1)",
    boxShadow: "0 2 4 0 rgba(0,0,0,0.3)",
    borderRadius: "2 0 2 2"
  },
  menu_ccontainer: {
    display: "flex",
    flexDirection: "column"
  },
  divder: {
    marginTop: 3,
    marginBottom: 3
  },
  main: {
    width: 320,
    height: 72,
    background: "rgba(71,176,80,1)"
  },
  work_space: {
    display: "flex",
    flexDirection: "column",

    width: 320
  },

  work_space_title: {
    width: 292,
    height: 15,
    marginLeft: 14,
    fontSize: 11,
    fontWeight: 400,
    color: "rgba(174,176,77,1)",
    lineHeight: 16,
    background: "rgba(63,68,71,1)"
  },
  work_space_item: {
    width: 292,
    height: 67,
    marginLeft: 14,
    marginRight: 14,
    background: "rgba(171,76,80,1)"
  },
  setting: {
    width: 292,
    height: "100%",
    marginLeft: 14,
    marginRight: 14,
    background: "pink"
  }
});

function Menu() {
  var classes = useStyle();
  return _react2.default.createElement(
    "div",
    { className: classes.menu },
    _react2.default.createElement(
      _index.LayoutContainerTB6px,
      null,
      _react2.default.createElement(
        "div",
        { className: classes.menu_container },
        _react2.default.createElement(
          "div",
          { className: classes.main },
          _react2.default.createElement(
            _index.LayoutContainerTB,
            null,
            "\u5934\u50CF \u4FE1\u606F"
          )
        ),
        _react2.default.createElement(
          "div",
          { className: classes.divder },
          _react2.default.createElement(_index.Divider, null)
        ),
        _react2.default.createElement(
          "div",
          { className: classes.work_space },
          _react2.default.createElement(
            _index.LayoutContainerT6px,
            null,
            _react2.default.createElement(
              "div",
              { className: classes.work_space_title },
              "222"
            )
          ),
          _react2.default.createElement(
            _index.LayoutContainerTB6px,
            null,
            _react2.default.createElement(
              "div",
              { className: classes.work_space },
              _react2.default.createElement(
                "div",
                { className: classes.work_space_item },
                "\u6211\u7684\u5DE5\u4F5C\u533A1"
              ),
              _react2.default.createElement(_index.Divider, null),
              _react2.default.createElement(
                "div",
                { className: classes.work_space_item },
                "\u6211\u7684\u5DE5\u4F5C\u533A2"
              ),
              _react2.default.createElement(_index.Divider, null),
              _react2.default.createElement(
                "div",
                { className: classes.work_space_item },
                "\u6211\u7684\u5DE5\u4F5C\u533A3"
              )
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: classes.divder },
          _react2.default.createElement(_index.Divider, null)
        ),
        _react2.default.createElement(
          _index.LayoutContainerTB6px,
          null,
          _react2.default.createElement(
            "div",
            { className: classes.setting },
            " 222"
          )
        )
      )
    )
  );
}
exports.Menu = Menu;