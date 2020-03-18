"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var nimble_emoji_1 = tslib_1.__importDefault(require("./nimble-emoji"));
var shared_props_1 = require("./utils/shared-props");
var shared_default_props_1 = require("./utils/shared-default-props");
var data = require("../../public/data/all.json");
var ShowEmoji = function (props) {
    for (var k in ShowEmoji.defaultProps) {
        if (props[k] == undefined && ShowEmoji.defaultProps[k] != undefined) {
            props[k] = ShowEmoji.defaultProps[k];
        }
    }
    return nimble_emoji_1.default(tslib_1.__assign({}, props));
};
exports.ShowEmoji = ShowEmoji;
ShowEmoji.propTypes = shared_props_1.EmojiPropTypes;
ShowEmoji.defaultProps = tslib_1.__assign(tslib_1.__assign({}, shared_default_props_1.EmojiDefaultProps), { data: data });
//# sourceMappingURL=index.js.map