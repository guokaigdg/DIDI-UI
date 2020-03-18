"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require("../utils");

var _data = require("../utils/data");

var _sharedProps = require("../utils/shared-props");

var _sharedDefaultProps = require("../utils/shared-default-props");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _getData = function _getData(props) {
  var emoji = props.emoji,
      skin = props.skin,
      set = props.set,
      data = props.data;

  return (0, _utils.getData)(emoji, skin, set, data);
};

var _getPosition = function _getPosition(props) {
  var _getData2 = _getData(props),
      sheet_x = _getData2.sheet_x,
      sheet_y = _getData2.sheet_y,
      multiplyX = 100 / (props.sheetColumns - 1),
      multiplyY = 100 / (props.sheetRows - 1);

  return multiplyX * sheet_x + "% " + multiplyY * sheet_y + "%";
};

var _getSanitizedData = function _getSanitizedData(props) {
  var emoji = props.emoji,
      skin = props.skin,
      set = props.set,
      data = props.data;

  return (0, _utils.getSanitizedData)(emoji, skin, set, data);
};

var _handleClick = function _handleClick(e, props) {
  if (!props.onClick) {
    return;
  }
  var onClick = props.onClick,
      emoji = _getSanitizedData(props);


  onClick(emoji, e);
};

var _handleOver = function _handleOver(e, props) {
  if (!props.onOver) {
    return;
  }
  var onOver = props.onOver,
      emoji = _getSanitizedData(props);


  onOver(emoji, e);
};

var _handleLeave = function _handleLeave(e, props) {
  if (!props.onLeave) {
    return;
  }
  var onLeave = props.onLeave,
      emoji = _getSanitizedData(props);


  onLeave(emoji, e);
};

var _isNumeric = function _isNumeric(value) {
  return !isNaN(value - parseFloat(value));
};

var _convertStyleToCSS = function _convertStyleToCSS(style) {
  var div = document.createElement("div");

  for (var key in style) {
    var value = style[key];

    if (_isNumeric(value)) {
      value += "px";
    }

    div.style[key] = value;
  }

  return div.getAttribute("style");
};

var NimbleEmoji = function NimbleEmoji(props) {
  if (props.data.compressed) {
    (0, _data.uncompress)(props.data);
  }

  for (var k in NimbleEmoji.defaultProps) {
    if (props[k] == undefined && NimbleEmoji.defaultProps[k] != undefined) {
      props[k] = NimbleEmoji.defaultProps[k];
    }
  }

  var data = _getData(props);
  if (!data) {
    if (props.fallback) {
      return props.fallback(null, props);
    } else {
      return null;
    }
  }

  var unified = data.unified,
      custom = data.custom,
      short_names = data.short_names,
      imageUrl = data.imageUrl,
      style = {},
      children = props.children,
      className = "emoji-mart-emoji",
      nativeEmoji = unified && (0, _utils.unifiedToNative)(unified),
      label = [nativeEmoji].concat(short_names).filter(Boolean).join(", "),
      title = null;


  if (!unified && !custom) {
    if (props.fallback) {
      return props.fallback(data, props);
    } else {
      return null;
    }
  }

  if (props.tooltip) {
    title = short_names[0];
  }

  if (props.native && unified) {
    className += " emoji-mart-emoji-native";
    style = { fontSize: props.size };
    children = nativeEmoji;

    if (props.forceSize) {
      style.display = "inline-block";
      style.width = props.size;
      style.height = props.size;
      style.wordBreak = "keep-all";
    }
  } else if (custom) {
    className += " emoji-mart-emoji-custom";
    style = {
      width: props.size,
      height: props.size,
      display: "inline-block"
    };
    if (data.spriteUrl) {
      style = _extends({}, style, {
        backgroundImage: "url(" + data.spriteUrl + ")",
        backgroundSize: 100 * props.sheetColumns + "% " + 100 * props.sheetRows + "%",
        backgroundPosition: _getPosition(props)
      });
    } else {
      style = _extends({}, style, {
        backgroundImage: "url(" + imageUrl + ")",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
      });
    }
  } else {
    var setHasEmoji = data["has_img_" + props.set] == undefined || data["has_img_" + props.set];

    if (!setHasEmoji) {
      if (props.fallback) {
        return props.fallback(data, props);
      } else {
        return null;
      }
    } else {
      style = {
        width: props.size,
        height: props.size,
        display: "inline-block",
        backgroundImage: "url(" + props.backgroundImageFn(props.set, props.sheetSize) + ")",
        backgroundSize: 100 * props.sheetColumns + "% " + 100 * props.sheetRows + "%",
        backgroundPosition: _getPosition(props)
      };
    }
  }

  var Tag = {
    name: "span",
    props: {}
  };

  if (props.onClick) {
    Tag.name = "button";
    Tag.props = {
      type: "button"
    };
  }

  if (props.html) {
    style = _convertStyleToCSS(style);
    return "<" + Tag.name + " style='" + style + "' aria-label='" + label + "' " + (title ? "title='" + title + "'" : "") + " class='" + className + "'>" + (children || "") + "</" + Tag.name + ">";
  } else {
    return _react2.default.createElement(
      Tag.name,
      _extends({
        onClick: function onClick(e) {
          return _handleClick(e, props);
        },
        onMouseEnter: function onMouseEnter(e) {
          return _handleOver(e, props);
        },
        onMouseLeave: function onMouseLeave(e) {
          return _handleLeave(e, props);
        },
        "aria-label": label,
        title: title,
        className: className
      }, Tag.props),
      _react2.default.createElement(
        "span",
        { style: style },
        children
      )
    );
  }
};

NimbleEmoji.propTypes /* remove-proptypes */ = process.env.NODE_ENV !== "production" ? _extends({}, _sharedProps.EmojiPropTypes, {
  data: _propTypes2.default.object.isRequired
}) : {};
NimbleEmoji.defaultProps = _sharedDefaultProps.EmojiDefaultProps;

exports.default = NimbleEmoji;
module.exports = exports["default"];