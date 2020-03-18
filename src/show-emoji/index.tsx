import NimbleEmoji from "./nimble-emoji";
import { EmojiPropTypes } from "./utils/shared-props";
import { EmojiDefaultProps } from "./utils/shared-default-props";
// import data from "../../public/data/all.json";

const data = require("../../public/data/all.json");
const ShowEmoji = (props: any) => {
  for (let k in ShowEmoji.defaultProps) {
    if (props[k] == undefined && ShowEmoji.defaultProps[k] != undefined) {
      props[k] = ShowEmoji.defaultProps[k];
    }
  }
  return NimbleEmoji({ ...props });
};

ShowEmoji.propTypes = EmojiPropTypes;
ShowEmoji.defaultProps = { ...EmojiDefaultProps, data };

export { ShowEmoji };
