import { buildSearch } from "./data";
import stringFromCodePoint from "./stringFromCodePoint";

const COLONS_REGEX = /^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;
const SKINS = ["1F3FA", "1F3FB", "1F3FC", "1F3FD", "1F3FE", "1F3FF"];
const _JSON = JSON; //不要让babel包含所有用于stringify/parse的核心-js

function unifiedToNative(unified: any) {
  var unicodes = unified.split("-"),
    codePoints = unicodes.map((u: any) => `0x${u}`);

  return stringFromCodePoint.apply(null, codePoints);
}

function sanitize(emoji: any) {
  //todo
  var {
      name,
      short_names,
      skin_tone,
      skin_variations,
      emoticons,
      unified,
      custom,
      customCategory,
      imageUrl
    } = emoji,
    id = emoji.id || short_names[0],
    colons = `:${id}:`;

  if (custom) {
    return {
      id,
      name,
      short_names,
      colons,
      emoticons,
      custom,
      customCategory,
      imageUrl
    };
  }

  if (skin_tone) {
    colons += `:skin-tone-${skin_tone}:`;
  }

  return {
    id,
    name,
    short_names,
    colons,
    emoticons,
    unified: unified.toLowerCase(),
    skin: skin_tone || (skin_variations ? 1 : null),
    native: unifiedToNative(unified)
  };
}

function getSanitizedData(emoji: any, skin: any, set: any, data: any) {
  return sanitize(getData(emoji, skin, set, data));
}

function getData(emoji: any, skin: any, set: any, data: any) {
  var emojiData: any = {};

  if (typeof emoji == "string") {
    let matches = emoji.match(COLONS_REGEX);

    if (matches) {
      emoji = matches[1];

      if (matches[2]) {
        skin = parseInt(matches[2], 10);
      }
    }

    if (data.aliases.hasOwnProperty(emoji)) {
      emoji = data.aliases[emoji];
    }

    if (data.emojis.hasOwnProperty(emoji)) {
      emojiData = data.emojis[emoji];
    } else {
      return null;
    }
  } else if (emoji.id) {
    if (data.aliases.hasOwnProperty(emoji.id)) {
      emoji.id = data.aliases[emoji.id];
    }

    if (data.emojis.hasOwnProperty(emoji.id)) {
      emojiData = data.emojis[emoji.id];
      skin || (skin = emoji.skin);
    }
  }

  if (!Object.keys(emojiData).length) {
    emojiData = emoji;
    emojiData["custom"] = true;

    if (!emojiData["search"]) {
      emojiData["search"] = buildSearch(emoji);
    }
  }

  emojiData["emoticons"] || (emojiData["emoticons"] = []);
  emojiData["variations"] || (emojiData["variations"] = []);

  if (emojiData["skin_variations"] && skin > 1) {
    emojiData = _JSON.parse(_JSON.stringify(emojiData));

    var skinKey = SKINS[skin - 1],
      variationData = emojiData["skin_variations"][skinKey];

    if (!variationData.variations && emojiData["variations"]) {
      delete emojiData["variations"];
    }

    if (
      (set &&
        (variationData[`has_img_${set}`] == undefined ||
          variationData[`has_img_${set}`])) ||
      !set
    ) {
      emojiData["skin_tone"] = skin;

      for (let k in variationData) {
        let v = variationData[k];
        emojiData[k] = v;
      }
    }
  }

  if (emojiData["variations"] && emojiData["variations"]["length"]) {
    emojiData = _JSON.parse(_JSON.stringify(emojiData));
    emojiData["unified"] = emojiData["variations"].shift();
  }

  return emojiData;
}
function uniq(arr: any) {
  //todo
  return arr.reduce((acc: any, item: any) => {
    //todo
    if (acc.indexOf(item) === -1) {
      acc.push(item);
    }
    return acc;
  }, []);
}
function intersect(a: any, b: any) {
  //todo
  const uniqA = uniq(a);
  const uniqB = uniq(b);
  return uniqA.filter((item: any) => uniqB.indexOf(item) >= 0);
}

export { getData, getSanitizedData, unifiedToNative, intersect, uniq };
