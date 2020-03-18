"use strict";

exports.__esModule = true;
exports.PickerPropTypes = exports.EmojiPropTypes = undefined;

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EmojiPropTypes = {
  data: _propTypes2.default.object.isRequired,
  onOver: _propTypes2.default.func,
  onLeave: _propTypes2.default.func,
  onClick: _propTypes2.default.func,
  fallback: _propTypes2.default.func,
  backgroundImageFn: _propTypes2.default.func,
  native: _propTypes2.default.bool,
  forceSize: _propTypes2.default.bool,
  tooltip: _propTypes2.default.bool,
  skin: _propTypes2.default.oneOf([1, 2, 3, 4, 5, 6]),
  sheetSize: _propTypes2.default.oneOf([16, 20, 32, 64]),
  sheetColumns: _propTypes2.default.number,
  sheetRows: _propTypes2.default.number,
  set: _propTypes2.default.oneOf(["apple", "google", "twitter", "emojione", "messenger", "facebook"]),
  size: _propTypes2.default.number.isRequired,
  emoji: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired
};

var PickerPropTypes = {
  onClick: _propTypes2.default.func,
  onSelect: _propTypes2.default.func,
  onSkinChange: _propTypes2.default.func,
  perLine: _propTypes2.default.number,
  emojiSize: _propTypes2.default.number,
  i18n: _propTypes2.default.object,
  style: _propTypes2.default.object,
  title: _propTypes2.default.string,
  emoji: _propTypes2.default.string,
  color: _propTypes2.default.string,
  set: EmojiPropTypes.set,
  skin: EmojiPropTypes.skin,
  native: _propTypes2.default.bool,
  backgroundImageFn: EmojiPropTypes.backgroundImageFn,
  sheetSize: EmojiPropTypes.sheetSize,
  emojisToShowFilter: _propTypes2.default.func,
  showPreview: _propTypes2.default.bool,
  showSkinTones: _propTypes2.default.bool,
  emojiTooltip: EmojiPropTypes.tooltip,
  include: _propTypes2.default.arrayOf(_propTypes2.default.string),
  exclude: _propTypes2.default.arrayOf(_propTypes2.default.string),
  recent: _propTypes2.default.arrayOf(_propTypes2.default.string),
  autoFocus: _propTypes2.default.bool,
  custom: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    name: _propTypes2.default.string.isRequired,
    short_names: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
    emoticons: _propTypes2.default.arrayOf(_propTypes2.default.string),
    keywords: _propTypes2.default.arrayOf(_propTypes2.default.string),
    imageUrl: _propTypes2.default.string,
    spriteUrl: _propTypes2.default.string,
    sheet_x: _propTypes2.default.number,
    sheet_y: _propTypes2.default.number,
    size: _propTypes2.default.number,
    sheetColumns: _propTypes2.default.number,
    sheetRows: _propTypes2.default.number
  })),
  skinEmoji: _propTypes2.default.string,
  notFound: _propTypes2.default.func,
  notFoundEmoji: _propTypes2.default.string,
  icons: _propTypes2.default.object
};

exports.EmojiPropTypes = EmojiPropTypes;
exports.PickerPropTypes = PickerPropTypes;