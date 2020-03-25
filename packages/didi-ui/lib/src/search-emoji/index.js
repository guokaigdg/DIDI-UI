"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var nimble_emoji_index_1 = tslib_1.__importDefault(require("./nimble-emoji-index"));
var data = require("../../public/data/all.json");
var emojiIndex = new nimble_emoji_index_1.default(data);
function search(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return emojiIndex.search.apply(emojiIndex, tslib_1.__spread([firstName], restOfName));
}
exports.default = { search: search };
//# sourceMappingURL=index.js.map