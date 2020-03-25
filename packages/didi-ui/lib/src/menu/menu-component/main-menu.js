"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var styles_1 = require("@material-ui/styles");
var index_1 = require("../../index");
var useStyle = styles_1.makeStyles({
    MainMenu: function (newType) { return ({
        width: newType.width,
        height: newType.height
    }); },
    MainMenuWrap: function (newType) { return ({
        width: newType.width,
        display: "flex",
        flexDirection: "column"
    }); }
});
function ViewType(props) {
    var data = props.data, onClick = props.onClick;
    return (React.createElement("div", null, data.map(function (item, index) { return (React.createElement("div", { key: index },
        item.type === "small_icon_view" && (React.createElement(index_1.SmallIconView, { icon: item.icon, text: item.text, children: item.nodes === undefined ? "" : item.nodes, onClick: onClick })),
        item.type === "medium_icon_view" && (React.createElement(index_1.MediumIconView, { url: item.url, text: item.text, children: item.nodes === undefined ? "" : item.nodes })),
        item.type === "big_icon_view" && (React.createElement(index_1.BigIconView, { url: item.url, text: item.text, desc: item.desc, children: item.nodes === undefined ? "" : item.nodes, onClick: onClick })),
        item.type === "emoji_icon_view" && (React.createElement(index_1.EmojiIconView, { emoji: item.emoji, text: item.text, children: item.nodes === undefined ? "" : item.nodes, onClick: onClick })),
        item.type === "drag_view" && (React.createElement(index_1.DragView, { icon: item.icon, text: item.text, children: item.nodes === undefined ? "" : item.nodes, onClick: onClick })),
        item.type === "color_view" && (React.createElement(index_1.ColorView, { color: item.color, text: item.text, children: item.nodes === undefined ? "" : item.nodes, onClick: onClick })),
        item.type === "user_info_view" && (React.createElement(index_1.UserInfoView, { url: item.url, text: item.text, desc: item.desc })),
        item.type === "user_work_view" && (React.createElement(index_1.UserWorkView, { emoji: item.emoji, text: item.text, desc: item.desc, children: item.nodes === undefined ? "" : item.nodes, onClick: onClick })),
        item.type === "big_add_button" && (React.createElement(index_1.UserAddButton, { text: item.text, onClick: onClick })),
        item.type === "filter_input_view" && (React.createElement(index_1.FilterInputView, { placeholder: item.placeholder })),
        item.type === "group_title_view" && (React.createElement(index_1.GroupTitleView, { text: item.text })),
        item.type === "hint_text" && React.createElement(index_1.HintText, { text: item.text }),
        item.type === "hint_button" && React.createElement(index_1.HintButton, { text: item.text }),
        item.type === "drag_group_view" && (React.createElement(index_1.DragGroupView, { data: item.nodes })),
        item.type === "select_group_view" && (React.createElement(index_1.SelectGroupView, { data: item.nodes, onClick: onClick })),
        item.type === "divider" && React.createElement(index_1.Divider, null))); })));
}
function MainMenu(props) {
    var data = props.data, onClick = props.onClick;
    var newType = {
        width: data.nodes.size.width === "default" ? 320 : data.nodes.size.width,
        height: data.nodes.size.max_height === "default"
            ? "100%"
            : data.nodes.size.max_height
    };
    var classes = useStyle(newType);
    return (React.createElement("div", null, data.nodes.type === "main_container_tb6px" && (React.createElement("div", { className: classes.MainMenu },
        React.createElement(index_1.MainContainerTB6px, null,
            React.createElement("div", null, data.nodes.nodes.map(function (item, index) { return (React.createElement("div", { key: index, className: classes.MainMenuWrap },
                item.type === "layout_container" && (React.createElement(index_1.LayoutContainerTB, null,
                    React.createElement("div", { className: classes.MainMenuWrap },
                        React.createElement(ViewType, { data: item.nodes, onClick: onClick })))),
                item.type === "layout_container_t6px" && (React.createElement(index_1.LayoutContainerT6px, null,
                    React.createElement("div", { className: classes.MainMenuWrap },
                        React.createElement(ViewType, { data: item.nodes, onClick: onClick })))),
                item.type === "layout_container_b6px" && (React.createElement(index_1.LayoutContainerB6px, null,
                    React.createElement("div", { className: classes.MainMenuWrap },
                        React.createElement(ViewType, { data: item.nodes, onClick: onClick })))),
                item.type === "layout_container_tb3px" && (React.createElement(index_1.LayoutContainerTB3px, null,
                    React.createElement("div", { className: classes.MainMenuWrap },
                        React.createElement(ViewType, { data: item.nodes, onClick: onClick })))),
                item.type === "layout_container_tb6px" && (React.createElement(index_1.LayoutContainerTB6px, null,
                    React.createElement("div", { className: classes.MainMenuWrap },
                        React.createElement(ViewType, { data: item.nodes, onClick: onClick })))),
                item.type === "layout_container_tb8px" && (React.createElement(index_1.LayoutContainerTB8px, null,
                    React.createElement("div", { className: classes.MainMenuWrap },
                        React.createElement(ViewType, { data: item.nodes, onClick: onClick })))),
                item.type === "divider" && React.createElement(index_1.Divider, null))); })))))));
}
exports.MainMenu = MainMenu;
//# sourceMappingURL=main-menu.js.map