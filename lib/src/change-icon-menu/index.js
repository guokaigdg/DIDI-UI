"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var PropTypes = tslib_1.__importStar(require("prop-types"));
var react_router_dom_1 = require("react-router-dom");
var styles_1 = require("@material-ui/core/styles");
var index_1 = require("../index");
var ChangeIconMenuRoute_1 = require("./ChangeIconMenuRoute");
var ChangeIconMenuLink_1 = require("./ChangeIconMenuLink");
var data_1 = tslib_1.__importDefault(require("./data"));
var useStyles = styles_1.makeStyles({
    Wrap: {
        width: 446,
        height: 356,
        background: "rgba(63,68,71,1)",
        boxShadow: " 0 2 4 0 rgba(0,0,0,0.3)",
        borderRadius: "2 2 2 2",
        zIndex: 2
    },
    contentWrap: {
        display: "flex",
        flexDirection: "column"
    },
    RouteWrap: {
        width: 446,
        height: 303,
        backgroundColor: "green"
    }
});
function ChangeIconMenu(props) {
    var onChooseEmoji = props.onChooseEmoji, chooseImage = props.chooseImage;
    var classes = useStyles();
    var _a = tslib_1.__read(react_1.useState(""), 2), emojiIcon = _a[0], setEmojiIcon = _a[1];
    var handleClickEmoji = function (result) {
        setEmojiIcon(result);
        onChooseEmoji(result);
    };
    var handleRandomemoji = function () {
        var count = [217, 82, 62, 40, 153, 118, 167, 258];
        var randomType = Math.floor(Math.random() * 8);
        var randomIcon = Math.floor(Math.random() * (count[randomType] + 1));
        var randomResult = data_1.default[0].categories[randomType].emojis[randomIcon];
        setEmojiIcon(randomResult);
        onChooseEmoji(emojiIcon);
    };
    var handleClearemoji = function () {
        onChooseEmoji("");
    };
    return (react_1.default.createElement("div", { className: classes.Wrap },
        react_1.default.createElement(index_1.LayoutContainerTB6px, null,
            react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
                react_1.default.createElement("div", { className: classes.contentWrap },
                    react_1.default.createElement(ChangeIconMenuLink_1.ChangeIconMenuLink, { clickButton1: handleRandomemoji, clickButton2: handleClearemoji }),
                    react_1.default.createElement(index_1.Divider, null),
                    react_1.default.createElement(ChangeIconMenuRoute_1.ChangeIconMenuRoute, { chooseImage: chooseImage, onClickEmoji: handleClickEmoji }))))));
}
exports.ChangeIconMenu = ChangeIconMenu;
ChangeIconMenu.protoTypes = {
    chooseImage: PropTypes.func,
    onClickEmoji: PropTypes.func
};
ChangeIconMenu.defaultProps = {
    chooseImage: function () {
        alert("上传照片功能正在开发中, 稍后推出");
    },
    onChooseEmoji: function (result) {
        console.log(result);
    }
};
//# sourceMappingURL=index.js.map