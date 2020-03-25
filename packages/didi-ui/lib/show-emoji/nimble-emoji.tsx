import * as React from "react";
import * as PropTypes from "prop-types";
import {
  getData,
  getSanitizedData,
  unifiedToNative
} from "../change-icon-menu/utils/index";
import { uncompress } from "../change-icon-menu/utils/data";
import { EmojiPropTypes } from "./utils/shared-props";
import { EmojiDefaultProps } from "./utils/shared-default-props";

const _getData = (props: { emoji: any; skin: any; set: any; data: any }) => {
  //todo
  var { emoji, skin, set, data } = props;
  return getData(emoji, skin, set, data);
};

const _getPosition = (props: any) => {
  var { sheet_x, sheet_y } = _getData(props),
    multiplyX = 100 / (props.sheetColumns - 1),
    multiplyY = 100 / (props.sheetRows - 1);

  return `${multiplyX * sheet_x}% ${multiplyY * sheet_y}%`;
};

const _getSanitizedData = (props: {
  //todo
  emoji: any;
  skin: any;
  set: any;
  data: any;
}) => {
  var { emoji, skin, set, data } = props;
  return getSanitizedData(emoji, skin, set, data);
};

const _handleClick = (e: any, props: any) => {
  if (!props.onClick) {
    return;
  }
  var { onClick } = props,
    emoji = _getSanitizedData(props);

  onClick(emoji, e);
};

const _handleOver = (e: any, props: any) => {
  if (!props.onOver) {
    return;
  }
  var { onOver } = props,
    emoji = _getSanitizedData(props);

  onOver(emoji, e);
};

const _handleLeave = (e: any, props: any) => {
  if (!props.onLeave) {
    return;
  }
  var { onLeave } = props,
    emoji = _getSanitizedData(props);

  onLeave(emoji, e);
};

const _isNumeric = (value: any) => {
  return !isNaN(value - parseFloat(value));
};

const _convertStyleToCSS = (style: any) => {
  let div = document.createElement("div");

  for (let key in style) {
    let value = style[key];

    if (_isNumeric(value)) {
      value += "px";
    }

    div.style[key] = value;
  }
  return div.getAttribute("style");
};

const NimbleEmoji = (props: any) => {
  if (props.data.compressed) {
    uncompress(props.data);
  }

  for (let k in NimbleEmoji.defaultProps) {
    if (props[k] == undefined && NimbleEmoji.defaultProps[k] != undefined) {
      props[k] = NimbleEmoji.defaultProps[k];
    }
  }

  let data = _getData(props);
  if (!data) {
    if (props.fallback) {
      return props.fallback(null, props);
    } else {
      return null;
    }
  }

  let { unified, custom, short_names, imageUrl } = data,
    style = {},
    children = props.children,
    className = "emoji-mart-emoji",
    nativeEmoji = unified && unifiedToNative(unified),
    //将表情符号本身和所有的短码组合成一个可访问的标签
    label = [nativeEmoji]
      .concat(short_names)
      .filter(Boolean)
      .join(", "),
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
      // style.display = "inline-block";
      // style.width = props.size;
      // style.height = props.size;
      // style.wordBreak = "keep-all";
      style = {
        display: "inline-block",
        width: props.size,
        height: props.size,
        wordBreak: "keep-all"
      };
    }
  } else if (custom) {
    className += " emoji-mart-emoji-custom";
    style = {
      width: props.size,
      height: props.size,
      display: "inline-block"
    };
    if (data["spriteUrl"]) {
      style = {
        ...style,
        backgroundImage: `url(${data["spriteUrl"]})`,
        backgroundSize: `${100 * props.sheetColumns}% ${100 *
          props.sheetRows}%`,
        backgroundPosition: _getPosition(props)
      };
    } else {
      style = {
        ...style,
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
      };
    }
  } else {
    let setHasEmoji =
      data[`has_img_${props.set}`] == undefined || data[`has_img_${props.set}`];

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
        // backgroundImage: `url(${props.backgroundImageFn(
        //   props.set,
        //   props.sheetSize
        // )})`,
        backgroundImage: `url("../public/data/64.png")`,
        backgroundSize: `${100 * props.sheetColumns}% ${100 *
          props.sheetRows}%`,
        backgroundPosition: _getPosition(props)
      };
    }
  }

  var Tag: { name: string; props: any } = {
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
    let style: any = {};
    style = _convertStyleToCSS(style);
    return `<${Tag.name} style='${style}' aria-label='${label}' ${
      title ? `title='${title}'` : ""
    } class='${className}'>${children || ""}</${Tag.name}>`;
  } else {
    return (
      <Tag.name
        onClick={(e: any) => _handleClick(e, props)}
        onMouseEnter={(e: any) => _handleOver(e, props)}
        onMouseLeave={(e: any) => _handleLeave(e, props)}
        aria-label={label}
        title={title}
        className={className}
        {...Tag.props}
      >
        <span style={style}>{children}</span>
      </Tag.name>
    );
  }
};

NimbleEmoji.propTypes = {
  ...EmojiPropTypes,
  data: PropTypes.object.isRequired
};
NimbleEmoji.defaultProps = EmojiDefaultProps;

export default NimbleEmoji;
