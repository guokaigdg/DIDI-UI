"use strict";

exports.__esModule = true;
exports.ShowEmoji = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _all = require("../../public/data-emoji/all.json");

var _all2 = _interopRequireDefault(_all);

var _nimbleEmoji = require("./emoji/nimble-emoji");

var _nimbleEmoji2 = _interopRequireDefault(_nimbleEmoji);

var _sharedProps = require("./utils/shared-props");

var _sharedDefaultProps = require("./utils/shared-default-props");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ShowEmoji = function ShowEmoji(props) {
  for (var k in ShowEmoji.defaultProps) {
    if (props[k] == undefined && ShowEmoji.defaultProps[k] != undefined) {
      props[k] = ShowEmoji.defaultProps[k];
    }
  }
  return (0, _nimbleEmoji2.default)(_extends({}, props));
};

ShowEmoji.propTypes /* remove-proptypes */ = process.env.NODE_ENV !== "production" ? _sharedProps.EmojiPropTypes : {};
ShowEmoji.defaultProps = _extends({}, _sharedDefaultProps.EmojiDefaultProps, { data: _all2.default });

exports.ShowEmoji = ShowEmoji;