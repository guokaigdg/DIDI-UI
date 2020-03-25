"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var styles_1 = require("@material-ui/styles");
var PropTypes = tslib_1.__importStar(require("prop-types"));
var Icon_1 = tslib_1.__importDefault(require("@material-ui/core/Icon"));
var index_1 = require("../../../index");
var MenuItem_1 = tslib_1.__importDefault(require("@material-ui/core/MenuItem"));
var useStyles = styles_1.makeStyles({
    SmallIconView: {
        width: "100%",
        height: 28
    },
    SmallIconView_wrap: {
        height: 28,
        display: "flex",
        alignItems: "center",
        marginLeft: 14,
        marginRight: 12,
        justifyContent: "space-between"
    },
    SmallIconView_left: {
        height: 28,
        display: "flex",
        alignItems: "center"
    },
    SmallIconView_icon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 18,
        height: 18,
        marginRight: 8
    },
    SmallIconView_name: {
        height: 20,
        fontSize: 14,
        fontWeight: 400
    },
    SmallIconView_right: {
        fontSize: 12,
        fontWeight: 400
    },
    MediumIconView: {
        width: "100%",
        height: 28
    },
    MediumIconView_wrap: {
        height: 28,
        display: "flex",
        alignItems: "center",
        marginLeft: 14,
        marginRight: 12,
        justifyContent: "space-between"
    },
    MediumIconView_left: {
        height: 28,
        display: "flex",
        alignItems: "center"
    },
    MediumIconView_icon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 22,
        height: 22,
        marginRight: 8,
        borderRadius: 2
    },
    MediumIconView_name: {
        height: 20,
        fontSize: 14,
        fontWeight: 400
    },
    MediumIconView_right: {
        height: 17,
        fontSize: 12,
        fontWeight: 400
    },
    BigIconView: {
        width: "100%",
        height: 55
    },
    BigIconView_wrap: {
        height: 55,
        display: "flex",
        alignItems: "center",
        marginLeft: 14,
        marginRight: 12,
        justifyContent: "space-between"
    },
    BigIconView_left: {
        height: 55,
        display: "flex",
        alignItems: "center"
    },
    BigIconView_icon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 46,
        height: 46,
        marginRight: 8,
        borderRadius: 2
    },
    BigIconView_title: {
        display: "flex",
        flexDirection: "column",
        height: 38
    },
    BigIconView_title_name: {
        height: 20,
        fontSize: 14,
        fontWeight: 500
    },
    BigIconView_title_desc: {
        height: 17,
        fontSize: 12,
        fontWeight: 500
    },
    BigIconView_right: {
        height: 17,
        fontSize: 12,
        fontWeight: 400
    },
    EmojiIconView: {
        width: "100%",
        height: 28
    },
    EmojiIconView_wrap: {
        height: 28,
        marginLeft: 14,
        marginRight: 12,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    EmojiIconView_left: {
        height: 28,
        display: "flex",
        alignItems: "center"
    },
    EmojiIconView_icon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 21,
        height: 28,
        fontSize: 16,
        marginRight: 8
    },
    EmojiIconView_name: {
        height: 20,
        fontSize: 14,
        fontWeight: 400
    },
    EmojiIconView_right: {
        height: 17,
        fontSize: 12,
        fontWeight: 400
    },
    DragView: {
        width: "100%",
        height: 28
    },
    DragView_wrap: {
        height: 28,
        display: "flex",
        alignItems: "center",
        marginLeft: 10,
        marginRight: 12,
        justifyContent: "space-between"
    },
    DragView_left: {
        height: 28,
        display: "flex",
        alignItems: "center"
    },
    DragView_dragicon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 18,
        height: 18,
        marginRight: 7,
        color: "#96999BFF"
    },
    DragView_icon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 18,
        height: 18,
        marginRight: 8
    },
    DragView_name: {
        height: 20,
        fontSize: 14,
        fontWeight: 400
    },
    DragView_right: {
        height: 17,
        fontSize: 12,
        fontWeight: 400
    },
    ColorView: {
        width: "100%",
        height: 28
    },
    ColorView_wrap: {
        height: 28,
        display: "flex",
        alignItems: "center",
        marginLeft: 14,
        marginRight: 12,
        justifyContent: "space-between"
    },
    ColorView_left: {
        height: 28,
        display: "flex",
        alignItems: "center"
    },
    ColorView_icon: function (newType) { return ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 18,
        height: 18,
        marginRight: 8,
        background: newType.background,
        borderRadius: 2
    }); },
    ColorView_name: {
        height: 20,
        fontSize: 14,
        fontWeight: 400
    },
    ColorView_right: {
        height: 17,
        fontSize: 12,
        fontWeight: 400
    }
});
function SmallIconView(props) {
    var icon = props.icon, text = props.text, children = props.children, onClick = props.onClick;
    var classes = useStyles();
    var handleOnClick = function () {
        onClick(text);
    };
    return (React.createElement(MenuItem_1.default, { disableGutters: true },
        React.createElement("div", { className: classes.SmallIconView, onClick: handleOnClick },
            React.createElement("div", { className: classes.SmallIconView_wrap },
                React.createElement("div", { className: classes.SmallIconView_left },
                    icon && (React.createElement("div", { className: classes.SmallIconView_icon },
                        React.createElement(Icon_1.default, { style: { fontSize: 18 } }, icon))),
                    React.createElement("div", { className: classes.SmallIconView_name }, text)),
                React.createElement("div", { className: classes.SmallIconView_right },
                    React.createElement(index_1.SubComponents, { data: children }))))));
}
exports.SmallIconView = SmallIconView;
function MediumIconView(props) {
    var url = props.url, text = props.text, children = props.children, onClick = props.onClick;
    var classes = useStyles();
    var handleOnClick = function () {
        onClick(text);
    };
    return (React.createElement(MenuItem_1.default, { disableGutters: true },
        React.createElement("div", { className: classes.MediumIconView, onClick: handleOnClick },
            React.createElement("div", { className: classes.MediumIconView_wrap },
                React.createElement("div", { className: classes.MediumIconView_left },
                    React.createElement("img", { className: classes.MediumIconView_icon, src: url }),
                    React.createElement("div", { className: classes.MediumIconView_name },
                        " ",
                        text,
                        " ")),
                React.createElement("div", { className: classes.MediumIconView_right },
                    React.createElement(index_1.SubComponents, { data: children }))))));
}
exports.MediumIconView = MediumIconView;
function BigIconView(props) {
    var url = props.url, text = props.text, desc = props.desc, children = props.children, onClick = props.onClick;
    var classes = useStyles();
    var handleOnClick = function () {
        onClick(text);
    };
    return (React.createElement(MenuItem_1.default, { disableGutters: true },
        React.createElement("div", { className: classes.BigIconView, onClick: handleOnClick },
            React.createElement("div", { className: classes.BigIconView_wrap },
                React.createElement("div", { className: classes.BigIconView_left },
                    React.createElement("img", { className: classes.BigIconView_icon, src: url }),
                    React.createElement("div", { className: classes.BigIconView_title },
                        React.createElement("div", { className: classes.BigIconView_title_name },
                            text,
                            " "),
                        React.createElement("div", { className: classes.BigIconView_title_desc }, desc))),
                React.createElement("div", { className: classes.BigIconView_right },
                    React.createElement(index_1.SubComponents, { data: children }))))));
}
exports.BigIconView = BigIconView;
function EmojiIconView(props) {
    var emoji = props.emoji, text = props.text, children = props.children, onClick = props.onClick;
    var classes = useStyles();
    var handleOnClick = function () {
        onClick(text);
    };
    return (React.createElement(MenuItem_1.default, { disableGutters: true },
        React.createElement("div", { className: classes.EmojiIconView, onClick: handleOnClick },
            React.createElement("div", { className: classes.EmojiIconView_wrap },
                React.createElement("div", { className: classes.EmojiIconView_left },
                    React.createElement("div", { className: classes.EmojiIconView_icon }, emoji),
                    React.createElement("div", { className: classes.EmojiIconView_name },
                        " ",
                        text,
                        " ")),
                React.createElement("div", { className: classes.EmojiIconView_right },
                    React.createElement(index_1.SubComponents, { data: children }))))));
}
exports.EmojiIconView = EmojiIconView;
function DragView(props) {
    var icon = props.icon, text = props.text, children = props.children, onClick = props.onClick;
    var classes = useStyles();
    var handleOnClick = function () {
        onClick(text);
    };
    return (React.createElement(MenuItem_1.default, { disableGutters: true },
        React.createElement("div", { className: classes.DragView, onClick: handleOnClick },
            React.createElement("div", { className: classes.DragView_wrap },
                React.createElement("div", { className: classes.DragView_left },
                    React.createElement("div", { className: classes.DragView_dragicon },
                        React.createElement(Icon_1.default, { style: { fontSize: 16 } }, "drag_indicator")),
                    React.createElement("div", { className: classes.DragView_icon },
                        React.createElement(Icon_1.default, null, icon)),
                    React.createElement("div", { className: classes.DragView_name },
                        " ",
                        text)),
                React.createElement("div", { className: classes.DragView_right },
                    React.createElement(index_1.SubComponents, { data: children }))))));
}
exports.DragView = DragView;
function ColorView(props) {
    var color = props.color, text = props.text, children = props.children, onClick = props.onClick;
    var newType = { background: color };
    var classes = useStyles(newType);
    var handleOnClick = function () {
        onClick(text);
    };
    return (React.createElement(MenuItem_1.default, { disableGutters: true },
        React.createElement("div", { className: classes.ColorView, onClick: handleOnClick },
            React.createElement("div", { className: classes.ColorView_wrap },
                React.createElement("div", { className: classes.ColorView_left },
                    React.createElement("div", { className: classes.ColorView_icon }),
                    React.createElement("div", { className: classes.ColorView_name },
                        " ",
                        text)),
                React.createElement("div", { className: classes.ColorView_right },
                    React.createElement(index_1.SubComponents, { data: children }))))));
}
exports.ColorView = ColorView;
ColorView.protoTypes = {
    color: PropTypes.string,
    text: PropTypes.string
};
ColorView.defaultProps = {
    color: "#C6C8C8FF",
    text: "灰色"
};
//# sourceMappingURL=index.js.map