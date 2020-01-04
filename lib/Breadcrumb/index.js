"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require("react-router-dom");

var _Breadcrumb = require("./Breadcrumb");

var _Breadcrumb2 = _interopRequireDefault(_Breadcrumb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {upDateList} 根据ur更新数据
 * @param {titleList}  通过upDateList获取到更新后的数据对象
 * @returns
 */

function BreadcrumbWrap(props) {
  var upDateList = props.upDateList;

  var location = (0, _reactRouterDom.useLocation)();
  var titleList = upDateList(location.pathname);
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(_Breadcrumb2.default, { titleList: titleList })
  );
}

exports.default = BreadcrumbWrap;
module.exports = exports["default"];