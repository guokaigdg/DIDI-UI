import React from "react";

function Search() {
  const search = (
    value,
    { emojisToShowFilter, maxResults, include, exclude, custom = [] } = {}
  ) => {
    if (this.customEmojisList != custom)
      this.addCustomToPool(custom, this.originalPool);

    const skinTone = store.get("skin") || 1;

    maxResults || (maxResults = 75);
    include || (include = []);
    exclude || (exclude = []);

    var results = null,
      pool = this.originalPool;

    if (value.length) {
      if (value == "-" || value == "-1") {
        return [this.emojis["-1"][skinTone]];
      }

      var values = value.toLowerCase().split(/[\s|,|\-|_]+/),
        allResults = [];

      if (values.length > 2) {
        values = [values[0], values[1]];
      }

      if (include.length || exclude.length) {
        pool = {};

        this.data.categories.forEach(category => {
          let isIncluded =
            include && include.length
              ? include.indexOf(category.id) > -1
              : true;
          let isExcluded =
            exclude && exclude.length
              ? exclude.indexOf(category.id) > -1
              : false;
          if (!isIncluded || isExcluded) {
            return;
          }

          category.emojis.forEach(
            emojiId => (pool[emojiId] = this.data.emojis[emojiId])
          );
        });

        if (custom.length) {
          let customIsIncluded =
            include && include.length ? include.indexOf("custom") > -1 : true;
          let customIsExcluded =
            exclude && exclude.length ? exclude.indexOf("custom") > -1 : false;
          if (customIsIncluded && !customIsExcluded) {
            this.addCustomToPool(custom, pool);
          }
        }
      }

      allResults = values
        .map(value => {
          var aPool = pool,
            aIndex = this.index,
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

                  if (this.emojis[id] && this.emojis[id][skinTone]) {
                    aIndex.results.push(this.emojis[id][skinTone]);
                  } else {
                    aIndex.results.push(this.emojis[id]);
                  }
                  aIndex.pool[id] = emoji;

                  scores[id] = score;
                }
              }

              aIndex.results.sort((a, b) => {
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
        .filter(a => a);

      if (allResults.length > 1) {
        results = intersect.apply(null, allResults);
      } else if (allResults.length) {
        results = allResults[0];
      } else {
        results = [];
      }
    }

    if (results) {
      if (emojisToShowFilter) {
        results = results.filter(result => emojisToShowFilter(pool[result.id]));
      }

      if (results && results.length > maxResults) {
        results = results.slice(0, maxResults);
      }
    }

    return results;
  };
  return <div>123</div>;
}

export { Search };
