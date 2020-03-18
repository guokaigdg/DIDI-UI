import React from "react";

function Search() {
  var _this = this;

  var search = function search(value) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        emojisToShowFilter = _ref.emojisToShowFilter,
        maxResults = _ref.maxResults,
        include = _ref.include,
        exclude = _ref.exclude,
        _ref$custom = _ref.custom,
        custom = _ref$custom === undefined ? [] : _ref$custom;

    if (_this.customEmojisList != custom) _this.addCustomToPool(custom, _this.originalPool);

    var skinTone = store.get("skin") || 1;

    maxResults || (maxResults = 75);
    include || (include = []);
    exclude || (exclude = []);

    var results = null,
        pool = _this.originalPool;

    if (value.length) {
      if (value == "-" || value == "-1") {
        return [_this.emojis["-1"][skinTone]];
      }

      var values = value.toLowerCase().split(/[\s|,|\-|_]+/),
          allResults = [];

      if (values.length > 2) {
        values = [values[0], values[1]];
      }

      if (include.length || exclude.length) {
        pool = {};

        _this.data.categories.forEach(function (category) {
          var isIncluded = include && include.length ? include.indexOf(category.id) > -1 : true;
          var isExcluded = exclude && exclude.length ? exclude.indexOf(category.id) > -1 : false;
          if (!isIncluded || isExcluded) {
            return;
          }

          category.emojis.forEach(function (emojiId) {
            return pool[emojiId] = _this.data.emojis[emojiId];
          });
        });

        if (custom.length) {
          var customIsIncluded = include && include.length ? include.indexOf("custom") > -1 : true;
          var customIsExcluded = exclude && exclude.length ? exclude.indexOf("custom") > -1 : false;
          if (customIsIncluded && !customIsExcluded) {
            _this.addCustomToPool(custom, pool);
          }
        }
      }

      allResults = values.map(function (value) {
        var aPool = pool,
            aIndex = _this.index,
            length = 0;

        for (var charIndex = 0; charIndex < value.length; charIndex++) {
          var char = value[charIndex];
          length++;

          aIndex[char] || (aIndex[char] = {});
          aIndex = aIndex[char];

          if (!aIndex.results) {
            (function () {
              var scores = {};

              aIndex.results = [];
              aIndex.pool = {};

              for (var id in aPool) {
                var emoji = aPool[id],
                    _search = emoji.search,
                    sub = value.substr(0, length),
                    subIndex = _search.indexOf(sub);


                if (subIndex != -1) {
                  var score = subIndex + 1;
                  if (sub == id) score = 0;

                  if (_this.emojis[id] && _this.emojis[id][skinTone]) {
                    aIndex.results.push(_this.emojis[id][skinTone]);
                  } else {
                    aIndex.results.push(_this.emojis[id]);
                  }
                  aIndex.pool[id] = emoji;

                  scores[id] = score;
                }
              }

              aIndex.results.sort(function (a, b) {
                var aScore = scores[a.id],
                    bScore = scores[b.id];

                if (aScore == bScore) {
                  return a.id.localeCompare(b.id);
                } else {
                  return aScore - bScore;
                }
              });
            })();
          }

          aPool = aIndex.pool;
        }

        return aIndex.results;
      }).filter(function (a) {
        return a;
      });

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
        results = results.filter(function (result) {
          return emojisToShowFilter(pool[result.id]);
        });
      }

      if (results && results.length > maxResults) {
        results = results.slice(0, maxResults);
      }
    }

    return results;
  };
  return React.createElement(
    "div",
    null,
    "123"
  );
}

export { Search };