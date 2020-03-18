var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";
import data from "../../public/data-emoji/all.json";
import NimbleEmoji from "./emoji/nimble-emoji";
import { EmojiPropTypes } from "./utils/shared-props";
import { EmojiDefaultProps } from "./utils/shared-default-props";

var ShowEmoji = function ShowEmoji(props) {
  for (var k in ShowEmoji.defaultProps) {
    if (props[k] == undefined && ShowEmoji.defaultProps[k] != undefined) {
      props[k] = ShowEmoji.defaultProps[k];
    }
  }
  return NimbleEmoji(_extends({}, props));
};

ShowEmoji.propTypes /* remove-proptypes */ = process.env.NODE_ENV !== "production" ? EmojiPropTypes : {};
ShowEmoji.defaultProps = _extends({}, EmojiDefaultProps, { data: data });

export { ShowEmoji };