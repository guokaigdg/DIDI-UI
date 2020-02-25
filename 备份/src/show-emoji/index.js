import React from "react";
import data from "./data/apple.json";
import NimbleEmoji from "./emoji/nimble-emoji";
import { EmojiPropTypes } from "./utils/shared-props";
import { EmojiDefaultProps } from "./utils/shared-default-props";

const ShowEmoji = props => {
  for (let k in ShowEmoji.defaultProps) {
    if (props[k] == undefined && ShowEmoji.defaultProps[k] != undefined) {
      props[k] = ShowEmoji.defaultProps[k];
    }
  }
  return NimbleEmoji({ ...props });
};

ShowEmoji.propTypes /* remove-proptypes */ = EmojiPropTypes;
ShowEmoji.defaultProps = { ...EmojiDefaultProps, data };

export { ShowEmoji };
