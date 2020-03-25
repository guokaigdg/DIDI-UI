import {
  getData,
  getSanitizedData,
  intersect
} from "../change-icon-menu/utils/index";
import { uncompress } from "../change-icon-menu/utils/data";
import store from "./store";

class NimbleEmojiIndex {
  constructor(data: any, set?: any) {
    if (data.compressed) {
      uncompress(data);
    }
    this["data"] = data || {};
    this["set"] = set || null;
    this["originalPool"] = {};
    this["index"] = {};
    this["emojis"] = {};
    this["emoticons"] = {};
    this["customEmojisList"] = [];

    this.buildIndex();
  }

  buildIndex() {
    for (let emoji in this["data"].emojis) {
      let emojiData = this["data"].emojis[emoji],
        { short_names, emoticons, skin_variations } = emojiData,
        id = short_names[0];

      if (emoticons) {
        emoticons.forEach((emoticon: any) => {
          //todo
          if (this["emoticons"][emoticon]) {
            return;
          }

          this["emoticons"][emoticon] = id;
        });
      }
      //如果 外观皮肤包括这些
      if (skin_variations) {
        this["emojis"][id] = {};
        for (let skinTone = 1; skinTone <= 6; skinTone++) {
          this["emojis"][id][skinTone] = getSanitizedData(
            { id, skin: skinTone },
            skinTone,
            this["set"],
            this["data"]
          );
        }
      } else {
        this["emojis"][id] = getSanitizedData(
          id,
          null,
          this["set"],
          this["data"]
        );
      }

      this["originalPool"][id] = emojiData;
    }
  }

  clearCustomEmojis(pool: any) {
    this["customEmojisList"].forEach((emoji: any) => {
      //todo
      let emojiId = emoji.id || emoji.short_names[0];

      delete pool[emojiId];
      delete this["emojis"][emojiId];
    });
  }

  addCustomToPool(custom: any, pool: any) {
    if (this["customEmojisList"].length) this.clearCustomEmojis(pool);

    custom.forEach((emoji: any) => {
      //todo
      let emojiId = emoji.id || emoji.short_names[0];

      if (emojiId && !pool[emojiId]) {
        pool[emojiId] = getData(emoji, null, null, this["data"]);
        this["emojis"][emojiId] = getSanitizedData(
          emoji,
          null,
          null,
          this["data"]
        );
      }
    });

    this["customEmojisList"] = custom;
    this["index"] = {};
  }

  search(
    value: any,
    {
      // emojisToShowFilter = () => {},  //todo error
      maxResults = 0,
      include = [],
      exclude = [],
      custom = []
    } = {}
  ) {
    if (this["customEmojisList"] != custom)
      this.addCustomToPool(custom, this["originalPool"]);

    const skinTone = store.get("skin") || 1;

    maxResults || (maxResults = 75);
    include || (include = []);
    exclude || (exclude = []);

    var results: any = null,
      pool = this["originalPool"];

    if (value.length) {
      if (value == "-" || value == "-1") {
        return [this["emojis"]["-1"][skinTone]];
      }

      var values = value.toLowerCase().split(/[\s|,|\-|_]+/),
        allResults = [];

      if (values.length > 2) {
        values = [values[0], values[1]];
      }

      if (include.length || exclude.length) {
        pool = {};

        this["data"].categories.forEach((category: any) => {
          //todo
          let isIncluded =
            include && include.length
              ? include.indexOf["category.id"] > -1 //todo error
              : true;
          let isExcluded =
            exclude && exclude.length
              ? exclude.indexOf["category.id"] > -1 //todo error
              : false;
          if (!isIncluded || isExcluded) {
            return;
          }

          category["emojis"].forEach(
            (emojiId: any) => (pool[emojiId] = this["data"]["emojis"][emojiId])
          );
        });

        if (custom.length) {
          let customIsIncluded =
            include && include.length ? include.indexOf["custom"] > -1 : true;
          let customIsExcluded =
            exclude && exclude.length ? exclude.indexOf["custom"] > -1 : false;
          if (customIsIncluded && !customIsExcluded) {
            this.addCustomToPool(custom, pool);
          }
        }
      }

      allResults = values
        .map((value: any) => {
          var aPool = pool,
            aIndex = this["index"],
            length = 0;

          for (let charIndex = 0; charIndex < value.length; charIndex++) {
            const char = value[charIndex];
            length++;

            aIndex[char] || (aIndex[char] = {});
            aIndex = aIndex[char];

            if (!aIndex.results) {
              let scores = {};

              aIndex.results = [];
              aIndex.pool = {};

              for (let id in aPool) {
                let emoji = aPool[id],
                  { search } = emoji,
                  sub = value.substr(0, length),
                  subIndex = search.indexOf(sub);

                if (subIndex != -1) {
                  let score = subIndex + 1;
                  if (sub == id) score = 0;

                  if (this["emojis"][id] && this["emojis"][id][skinTone]) {
                    aIndex.results.push(this["emojis"][id][skinTone]);
                  } else {
                    aIndex.results.push(this["emojis"][id]);
                  }
                  aIndex.pool[id] = emoji;

                  scores[id] = score;
                }
              }

              aIndex.results.sort((a: any, b: any) => {
                var aScore = scores[a.id],
                  bScore = scores[b.id];

                if (aScore == bScore) {
                  return a.id.localeCompare(b.id);
                } else {
                  return aScore - bScore;
                }
              });
            }

            aPool = aIndex.pool;
          }

          return aIndex.results;
        })
        .filter((a: any) => a);

      if (allResults.length > 1) {
        results = intersect.apply(null, allResults);
      } else if (allResults.length) {
        results = allResults[0];
      } else {
        results = [];
      }
    }

    if (results) {
      // if (emojisToShowFilter) {
      //   results = results.filter((result: any) =>
      //     emojisToShowFilter(pool[result.id])
      //   );
      // }

      if (results && results.length > maxResults) {
        results = results.slice(0, maxResults);
      }
    }
    return results;
  }
}
export default NimbleEmojiIndex;
