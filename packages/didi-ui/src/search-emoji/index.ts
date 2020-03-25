import NimbleEmojiIndex from "./nimble-emoji-index";

const data = require("../../public/data/all.json");
const emojiIndex = new NimbleEmojiIndex(data);
// const { emojis, emoticons } = emojiIndex;

function search(firstName: any, ...restOfName: any[]) {
  return emojiIndex.search(firstName, ...restOfName);
}

// export default { search, emojis, emoticons };
export default { search };
