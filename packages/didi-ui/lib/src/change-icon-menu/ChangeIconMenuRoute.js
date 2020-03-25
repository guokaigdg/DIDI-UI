"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var styles_1 = require("@material-ui/core/styles");
var index_1 = require("../index");
var Icon_1 = tslib_1.__importDefault(require("@material-ui/core/Icon"));
require("material-design-icons-iconfont/dist/material-design-icons.css");
var data_1 = tslib_1.__importDefault(require("./data"));
var useStyles = styles_1.makeStyles({
    viewWrap: {
        display: "flex",
        flexDirection: "column",
        width: 400,
        height: 288,
        marginLeft: 22,
        marginTop: 21
    },
    search: {
        display: "flex",
        alignItems: "center",
        width: 400,
        height: 30,
        background: "rgba(36,40,42,1)",
        borderRadius: 2,
        border: "1px solid rgba(32,32,34,1)"
    },
    searchIcon: {
        marginLeft: 9,
        fontSize: 16,
        color: "#CACCCE"
    },
    cancelIcon: {
        marginLeft: 57,
        fontSize: 16,
        color: "#CACCCE",
        cursor: "pointer"
    },
    searchInput: {
        width: 287,
        height: 20,
        fontSize: 14,
        marginLeft: 5,
        fontWeight: 500,
        color: "rgba(231,232,232,1)",
        background: "rgba(36,40,42,1)",
        outlineColor: "invert",
        outlineStyle: "none ",
        outlineWidth: 0,
        border: "none",
        boxShadow: "none",
        borderStyle: "none",
        textShadow: "none"
    },
    emojiWrap: {
        width: 417,
        flexWrap: "wrap",
        height: 260,
        overflow: "auto",
        overflowX: "hidden",
        "&::-webkit-scrollbar": {
            width: 6
        },
        "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(184,186,186,1)",
            borderRadius: 2
        }
    },
    recentEmoji: {
        display: "flex",
        flexDirection: "column",
        width: 400,
        marginTop: 23,
        marginBottom: 14
    },
    emojiPackage: {
        display: "flex",
        flexDirection: "column",
        width: 417,
        marginTop: 9
    },
    title: {
        height: 17,
        fontSize: 12,
        fontWeight: 500,
        color: "rgba(184,186,186,1)"
    },
    recentIconWrap: {
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        width: 417,
        marginTop: 17
    },
    emojiIconWrap: {
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        marginTop: 9
    },
    emojiIcon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        fontSize: 0,
        marginRight: 4,
        marginBottom: 7,
        height: 30,
        width: 30,
        cursor: "pointer",
        borderRadius: 3,
        "&:hover": {
            backgroundColor: "rgba(70,76,80,1)"
        },
        "&:active": {
            backgroundColor: "rgba(63,68,71,1)"
        }
    },
    uploadImage: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 300,
        height: 30,
        marginLeft: 50,
        marginTop: 25,
        background: "rgba(0,158,202,1)",
        borderRadius: 5,
        cursor: "pointer"
    },
    uploadImageFont: {
        fontSize: 14,
        fontWeight: 500,
        color: "#E7E8E8FF"
    }
});
function EmojiIcon(props) {
    var onClickUploadEmoji = props.onClickUploadEmoji;
    var _a = tslib_1.__read(react_1.useState(""), 2), value = _a[0], setValue = _a[1];
    var _b = tslib_1.__read(react_1.useState([
        "joy",
        "heart",
        "heart_eyes",
        "recycle",
        "sob"
    ]), 2), recentList = _b[0], setRecentList = _b[1];
    var handleValue = function (e) {
        setValue(e.target.value);
    };
    var handleClearValue = function () {
        setValue("");
    };
    var updateRecentList = function (newEmoji) {
        for (var i = 0; i <= recentList.length; i++) {
            if (newEmoji === recentList[i]) {
                recentList.splice(i, 1);
                setRecentList(tslib_1.__spread([newEmoji], recentList));
            }
            else {
                if (recentList.length <= 19) {
                    setRecentList(tslib_1.__spread([newEmoji], recentList));
                }
                else {
                    recentList.pop();
                    setRecentList(tslib_1.__spread([newEmoji], recentList));
                }
            }
        }
    };
    var handleOnClickEmoji = function (result) {
        updateRecentList(result);
        onClickUploadEmoji(result);
    };
    var classes = useStyles();
    return (react_1.default.createElement("div", { className: classes.viewWrap },
        react_1.default.createElement("div", { className: classes.search },
            react_1.default.createElement(Icon_1.default, { className: classes.searchIcon }, "search"),
            react_1.default.createElement("input", { placeholder: "\u5FEB\u901F\u67E5\u627E", className: classes.searchInput, onChange: handleValue, value: value }),
            value !== "" && (react_1.default.createElement(Icon_1.default, { className: classes.cancelIcon, onClick: handleClearValue }, "cancel"))),
        react_1.default.createElement("div", { className: classes.emojiWrap },
            value === "" && (react_1.default.createElement("div", { className: classes.recentEmoji },
                react_1.default.createElement("span", { className: classes.title }, "\u6700\u8FD1"),
                react_1.default.createElement("div", { className: classes.recentIconWrap }, recentList.map(function (item, index) { return (react_1.default.createElement("div", { className: classes.emojiIcon, key: index + item, onClick: function () {
                        handleOnClickEmoji(item);
                    } },
                    react_1.default.createElement(index_1.ShowEmoji, { emoji: "" + item, size: 28 }))); })))),
            value === "" &&
                ["人物", "自然", "食物", "活动", "地点", "物体", "符号", "旗帜"].map(function (item, indexType) { return (react_1.default.createElement("div", { key: indexType, className: classes.emojiPackage },
                    react_1.default.createElement("span", { className: classes.title }, item),
                    react_1.default.createElement("div", { className: classes.emojiIconWrap }, data_1.default[0].categories[indexType].emojis.map(function (item, index) { return (react_1.default.createElement("div", { className: classes.emojiIcon, key: index + item, onClick: function () {
                            handleOnClickEmoji(item);
                        } },
                        react_1.default.createElement(index_1.ShowEmoji, { emoji: "" + item, size: 28 }))); })))); }),
            value !== "" && (react_1.default.createElement("div", { className: classes.recentEmoji },
                react_1.default.createElement("span", { className: classes.title }, "\u641C\u7D22\u7ED3\u679C"),
                react_1.default.createElement("div", { className: classes.recentIconWrap }, index_1.SearchEmoji.search(value)
                    .map(function (o) { return o.short_names; })
                    .map(function (item, index) { return (react_1.default.createElement("div", { className: classes.emojiIcon, key: index + item, onClick: function () {
                        handleOnClickEmoji(item);
                    } },
                    react_1.default.createElement(index_1.ShowEmoji, { emoji: "" + item, size: 28 }))); })))))));
}
function UploadImage(props) {
    var onClickUploadImage = props.onClickUploadImage;
    var classes = useStyles();
    return (react_1.default.createElement("div", { className: classes.viewWrap },
        react_1.default.createElement("div", { className: classes.uploadImage },
            react_1.default.createElement("span", { className: classes.uploadImageFont, onClick: onClickUploadImage }, "\u9009\u62E9\u4E00\u4E2A\u56FE\u7247"))));
}
function ChangeIconMenuRoute(props) {
    var chooseImage = props.chooseImage, onClickEmoji = props.onClickEmoji;
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(react_router_dom_1.Switch, null,
            react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/" },
                react_1.default.createElement(EmojiIcon, { onClickUploadEmoji: onClickEmoji })),
            react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/image" },
                react_1.default.createElement(UploadImage, { onClickUploadImage: chooseImage })))));
}
exports.ChangeIconMenuRoute = ChangeIconMenuRoute;
//# sourceMappingURL=ChangeIconMenuRoute.js.map