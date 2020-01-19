const EmojiDefaultProps = {
  skin: 1,
  set: "apple",
  sheetSize: 64,
  sheetColumns: 52,
  sheetRows: 52,
  native: false,
  forceSize: false,
  tooltip: false,
  backgroundImageFn: () =>
    `https://unpkg.com/emoji-datasource-apple@4.0.4/img/apple/sheets-256/64.png`
};

const PickerDefaultProps = {
  onClick: () => {},
  onSelect: () => {},
  onSkinChange: () => {},
  emojiSize: 24,
  perLine: 9,
  i18n: {},
  style: {},
  title: "Emoji Mart™",
  emoji: "department_store",
  color: "#ae65c5",
  set: EmojiDefaultProps.set,
  skin: null,
  defaultSkin: EmojiDefaultProps.skin,
  native: EmojiDefaultProps.native,
  sheetSize: EmojiDefaultProps.sheetSize,
  backgroundImageFn: EmojiDefaultProps.backgroundImageFn,
  emojisToShowFilter: null,
  showPreview: true,
  showSkinTones: true,
  darkMode: !!(
    typeof matchMedia === "function" &&
    matchMedia("(prefers-color-scheme: dark)").matches
  ),
  emojiTooltip: EmojiDefaultProps.tooltip,
  autoFocus: false,
  custom: [],
  skinEmoji: "",
  notFound: () => {},
  notFoundEmoji: "sleuth_or_spy",
  icons: {}
};

export { PickerDefaultProps, EmojiDefaultProps };
