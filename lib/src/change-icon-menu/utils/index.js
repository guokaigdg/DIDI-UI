"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var data_1 = require("./data");
var stringFromCodePoint_1 = tslib_1.__importDefault(require("./stringFromCodePoint"));
var COLONS_REGEX = /^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;
var SKINS = ["1F3FA", "1F3FB", "1F3FC", "1F3FD", "1F3FE", "1F3FF"];
var _JSON = JSON;
function unifiedToNative(unified) {
    var unicodes = unified.split("-"), codePoints = unicodes.map(function (u) { return "0x" + u; });
    return stringFromCodePoint_1.default.apply(null, codePoints);
}
exports.unifiedToNative = unifiedToNative;
function sanitize(emoji) {
    var name = emoji.name, short_names = emoji.short_names, skin_tone = emoji.skin_tone, skin_variations = emoji.skin_variations, emoticons = emoji.emoticons, unified = emoji.unified, custom = emoji.custom, customCategory = emoji.customCategory, imageUrl = emoji.imageUrl, id = emoji.id || short_names[0], colons = ":" + id + ":";
    if (custom) {
        return {
            id: id,
            name: name,
            short_names: short_names,
            colons: colons,
            emoticons: emoticons,
            custom: custom,
            customCategory: customCategory,
            imageUrl: imageUrl
        };
    }
    if (skin_tone) {
        colons += ":skin-tone-" + skin_tone + ":";
    }
    return {
        id: id,
        name: name,
        short_names: short_names,
        colons: colons,
        emoticons: emoticons,
        unified: unified.toLowerCase(),
        skin: skin_tone || (skin_variations ? 1 : null),
        native: unifiedToNative(unified)
    };
}
function getSanitizedData(emoji, skin, set, data) {
    return sanitize(getData(emoji, skin, set, data));
}
exports.getSanitizedData = getSanitizedData;
function getData(emoji, skin, set, data) {
    var emojiData = {};
    if (typeof emoji == "string") {
        var matches = emoji.match(COLONS_REGEX);
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
        }
        else {
            return null;
        }
    }
    else if (emoji.id) {
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
            emojiData["search"] = data_1.buildSearch(emoji);
        }
    }
    emojiData["emoticons"] || (emojiData["emoticons"] = []);
    emojiData["variations"] || (emojiData["variations"] = []);
    if (emojiData["skin_variations"] && skin > 1) {
        emojiData = _JSON.parse(_JSON.stringify(emojiData));
        var skinKey = SKINS[skin - 1], variationData = emojiData["skin_variations"][skinKey];
        if (!variationData.variations && emojiData["variations"]) {
            delete emojiData["variations"];
        }
        if ((set &&
            (variationData["has_img_" + set] == undefined ||
                variationData["has_img_" + set])) ||
            !set) {
            emojiData["skin_tone"] = skin;
            for (var k in variationData) {
                var v = variationData[k];
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
exports.getData = getData;
function uniq(arr) {
    return arr.reduce(function (acc, item) {
        if (acc.indexOf(item) === -1) {
            acc.push(item);
        }
        return acc;
    }, []);
}
exports.uniq = uniq;
function intersect(a, b) {
    var uniqA = uniq(a);
    var uniqB = uniq(b);
    return uniqA.filter(function (item) { return uniqB.indexOf(item) >= 0; });
}
exports.intersect = intersect;
//# sourceMappingURL=index.js.map