"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var index_1 = require("../change-icon-menu/utils/index");
var data_1 = require("../change-icon-menu/utils/data");
var store_1 = tslib_1.__importDefault(require("./store"));
var NimbleEmojiIndex = (function () {
    function NimbleEmojiIndex(data, set) {
        if (data.compressed) {
            data_1.uncompress(data);
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
    NimbleEmojiIndex.prototype.buildIndex = function () {
        var _this = this;
        var _loop_1 = function (emoji) {
            var emojiData = this_1["data"].emojis[emoji], short_names = emojiData.short_names, emoticons = emojiData.emoticons, skin_variations = emojiData.skin_variations, id = short_names[0];
            if (emoticons) {
                emoticons.forEach(function (emoticon) {
                    if (_this["emoticons"][emoticon]) {
                        return;
                    }
                    _this["emoticons"][emoticon] = id;
                });
            }
            if (skin_variations) {
                this_1["emojis"][id] = {};
                for (var skinTone = 1; skinTone <= 6; skinTone++) {
                    this_1["emojis"][id][skinTone] = index_1.getSanitizedData({ id: id, skin: skinTone }, skinTone, this_1["set"], this_1["data"]);
                }
            }
            else {
                this_1["emojis"][id] = index_1.getSanitizedData(id, null, this_1["set"], this_1["data"]);
            }
            this_1["originalPool"][id] = emojiData;
        };
        var this_1 = this;
        for (var emoji in this["data"].emojis) {
            _loop_1(emoji);
        }
    };
    NimbleEmojiIndex.prototype.clearCustomEmojis = function (pool) {
        var _this = this;
        this["customEmojisList"].forEach(function (emoji) {
            var emojiId = emoji.id || emoji.short_names[0];
            delete pool[emojiId];
            delete _this["emojis"][emojiId];
        });
    };
    NimbleEmojiIndex.prototype.addCustomToPool = function (custom, pool) {
        var _this = this;
        if (this["customEmojisList"].length)
            this.clearCustomEmojis(pool);
        custom.forEach(function (emoji) {
            var emojiId = emoji.id || emoji.short_names[0];
            if (emojiId && !pool[emojiId]) {
                pool[emojiId] = index_1.getData(emoji, null, null, _this["data"]);
                _this["emojis"][emojiId] = index_1.getSanitizedData(emoji, null, null, _this["data"]);
            }
        });
        this["customEmojisList"] = custom;
        this["index"] = {};
    };
    NimbleEmojiIndex.prototype.search = function (value, _a) {
        var _this = this;
        var _b = _a === void 0 ? {} : _a, _c = _b.maxResults, maxResults = _c === void 0 ? 0 : _c, _d = _b.include, include = _d === void 0 ? [] : _d, _e = _b.exclude, exclude = _e === void 0 ? [] : _e, _f = _b.custom, custom = _f === void 0 ? [] : _f;
        if (this["customEmojisList"] != custom)
            this.addCustomToPool(custom, this["originalPool"]);
        var skinTone = store_1.default.get("skin") || 1;
        maxResults || (maxResults = 75);
        include || (include = []);
        exclude || (exclude = []);
        var results = null, pool = this["originalPool"];
        if (value.length) {
            if (value == "-" || value == "-1") {
                return [this["emojis"]["-1"][skinTone]];
            }
            var values = value.toLowerCase().split(/[\s|,|\-|_]+/), allResults = [];
            if (values.length > 2) {
                values = [values[0], values[1]];
            }
            if (include.length || exclude.length) {
                pool = {};
                this["data"].categories.forEach(function (category) {
                    var isIncluded = include && include.length
                        ? include.indexOf["category.id"] > -1
                        : true;
                    var isExcluded = exclude && exclude.length
                        ? exclude.indexOf["category.id"] > -1
                        : false;
                    if (!isIncluded || isExcluded) {
                        return;
                    }
                    category["emojis"].forEach(function (emojiId) { return (pool[emojiId] = _this["data"]["emojis"][emojiId]); });
                });
                if (custom.length) {
                    var customIsIncluded = include && include.length ? include.indexOf["custom"] > -1 : true;
                    var customIsExcluded = exclude && exclude.length ? exclude.indexOf["custom"] > -1 : false;
                    if (customIsIncluded && !customIsExcluded) {
                        this.addCustomToPool(custom, pool);
                    }
                }
            }
            allResults = values
                .map(function (value) {
                var aPool = pool, aIndex = _this["index"], length = 0;
                var _loop_2 = function (charIndex) {
                    var char = value[charIndex];
                    length++;
                    aIndex[char] || (aIndex[char] = {});
                    aIndex = aIndex[char];
                    if (!aIndex.results) {
                        var scores_1 = {};
                        aIndex.results = [];
                        aIndex.pool = {};
                        for (var id in aPool) {
                            var emoji = aPool[id], search = emoji.search, sub = value.substr(0, length), subIndex = search.indexOf(sub);
                            if (subIndex != -1) {
                                var score = subIndex + 1;
                                if (sub == id)
                                    score = 0;
                                if (_this["emojis"][id] && _this["emojis"][id][skinTone]) {
                                    aIndex.results.push(_this["emojis"][id][skinTone]);
                                }
                                else {
                                    aIndex.results.push(_this["emojis"][id]);
                                }
                                aIndex.pool[id] = emoji;
                                scores_1[id] = score;
                            }
                        }
                        aIndex.results.sort(function (a, b) {
                            var aScore = scores_1[a.id], bScore = scores_1[b.id];
                            if (aScore == bScore) {
                                return a.id.localeCompare(b.id);
                            }
                            else {
                                return aScore - bScore;
                            }
                        });
                    }
                    aPool = aIndex.pool;
                };
                for (var charIndex = 0; charIndex < value.length; charIndex++) {
                    _loop_2(charIndex);
                }
                return aIndex.results;
            })
                .filter(function (a) { return a; });
            if (allResults.length > 1) {
                results = index_1.intersect.apply(null, allResults);
            }
            else if (allResults.length) {
                results = allResults[0];
            }
            else {
                results = [];
            }
        }
        if (results) {
            if (results && results.length > maxResults) {
                results = results.slice(0, maxResults);
            }
        }
        return results;
    };
    return NimbleEmojiIndex;
}());
exports.default = NimbleEmojiIndex;
//# sourceMappingURL=nimble-emoji-index.js.map