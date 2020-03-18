"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var PropTypes = tslib_1.__importStar(require("prop-types"));
var index_1 = require("../change-icon-menu/utils/index");
var data_1 = require("../change-icon-menu/utils/data");
var shared_props_1 = require("./utils/shared-props");
var shared_default_props_1 = require("./utils/shared-default-props");
var _getData = function (props) {
    var emoji = props.emoji, skin = props.skin, set = props.set, data = props.data;
    return index_1.getData(emoji, skin, set, data);
};
var _getPosition = function (props) {
    var _a = _getData(props), sheet_x = _a.sheet_x, sheet_y = _a.sheet_y, multiplyX = 100 / (props.sheetColumns - 1), multiplyY = 100 / (props.sheetRows - 1);
    return multiplyX * sheet_x + "% " + multiplyY * sheet_y + "%";
};
var _getSanitizedData = function (props) {
    var emoji = props.emoji, skin = props.skin, set = props.set, data = props.data;
    return index_1.getSanitizedData(emoji, skin, set, data);
};
var _handleClick = function (e, props) {
    if (!props.onClick) {
        return;
    }
    var onClick = props.onClick, emoji = _getSanitizedData(props);
    onClick(emoji, e);
};
var _handleOver = function (e, props) {
    if (!props.onOver) {
        return;
    }
    var onOver = props.onOver, emoji = _getSanitizedData(props);
    onOver(emoji, e);
};
var _handleLeave = function (e, props) {
    if (!props.onLeave) {
        return;
    }
    var onLeave = props.onLeave, emoji = _getSanitizedData(props);
    onLeave(emoji, e);
};
var _isNumeric = function (value) {
    return !isNaN(value - parseFloat(value));
};
var _convertStyleToCSS = function (style) {
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
var NimbleEmoji = function (props) {
    if (props.data.compressed) {
        data_1.uncompress(props.data);
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
        }
        else {
            return null;
        }
    }
    var unified = data.unified, custom = data.custom, short_names = data.short_names, imageUrl = data.imageUrl, style = {}, children = props.children, className = "emoji-mart-emoji", nativeEmoji = unified && index_1.unifiedToNative(unified), label = [nativeEmoji]
        .concat(short_names)
        .filter(Boolean)
        .join(", "), title = null;
    if (!unified && !custom) {
        if (props.fallback) {
            return props.fallback(data, props);
        }
        else {
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
            style = {
                display: "inline-block",
                width: props.size,
                height: props.size,
                wordBreak: "keep-all"
            };
        }
    }
    else if (custom) {
        className += " emoji-mart-emoji-custom";
        style = {
            width: props.size,
            height: props.size,
            display: "inline-block"
        };
        if (data["spriteUrl"]) {
            style = tslib_1.__assign(tslib_1.__assign({}, style), { backgroundImage: "url(" + data["spriteUrl"] + ")", backgroundSize: 100 * props.sheetColumns + "% " + 100 *
                    props.sheetRows + "%", backgroundPosition: _getPosition(props) });
        }
        else {
            style = tslib_1.__assign(tslib_1.__assign({}, style), { backgroundImage: "url(" + imageUrl + ")", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center" });
        }
    }
    else {
        var setHasEmoji = data["has_img_" + props.set] == undefined || data["has_img_" + props.set];
        if (!setHasEmoji) {
            if (props.fallback) {
                return props.fallback(data, props);
            }
            else {
                return null;
            }
        }
        else {
            style = {
                width: props.size,
                height: props.size,
                display: "inline-block",
                backgroundImage: "url(\"../public/data/64.png\")",
                backgroundSize: 100 * props.sheetColumns + "% " + 100 *
                    props.sheetRows + "%",
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
        var style_1 = {};
        style_1 = _convertStyleToCSS(style_1);
        return "<" + Tag.name + " style='" + style_1 + "' aria-label='" + label + "' " + (title ? "title='" + title + "'" : "") + " class='" + className + "'>" + (children || "") + "</" + Tag.name + ">";
    }
    else {
        return (React.createElement(Tag.name, tslib_1.__assign({ onClick: function (e) { return _handleClick(e, props); }, onMouseEnter: function (e) { return _handleOver(e, props); }, onMouseLeave: function (e) { return _handleLeave(e, props); }, "aria-label": label, title: title, className: className }, Tag.props),
            React.createElement("span", { style: style }, children)));
    }
};
NimbleEmoji.propTypes = tslib_1.__assign(tslib_1.__assign({}, shared_props_1.EmojiPropTypes), { data: PropTypes.object.isRequired });
NimbleEmoji.defaultProps = shared_default_props_1.EmojiDefaultProps;
exports.default = NimbleEmoji;
//# sourceMappingURL=nimble-emoji.js.map