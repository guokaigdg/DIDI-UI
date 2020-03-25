"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var styles_1 = require("@material-ui/styles");
var Icon_1 = tslib_1.__importDefault(require("@material-ui/core/Icon"));
var index_1 = require("../../../index");
var MenuItem_1 = tslib_1.__importDefault(require("@material-ui/core/MenuItem"));
var useStyles = styles_1.makeStyles({
    UserInfoView: {
        display: "flex",
        alignItems: "center",
        height: 72,
        paddingLeft: 14,
        paddingRight: 14
    },
    UserInfoView_icon: {
        width: 40,
        height: 40,
        marginRight: 8,
        borderRadius: 20
    },
    UserInfoView_information: {
        display: "flex",
        flexDirection: "column",
        height: 37
    },
    UserInfoView_name: {
        height: 20,
        fontSize: 14,
        fontWeight: 500
    },
    UserInfoView_email: {
        height: 17,
        fontSize: 12,
        fontWeight: 500
    },
    UserWorkView: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 67,
        paddingLeft: 14,
        paddingRight: 14
    },
    UserWorkView_left: {
        display: "flex",
        alignItems: "center",
        height: 40
    },
    UserWorkView_icon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 40,
        height: 40,
        fontSize: 32,
        fontWeight: 500,
        marginRight: 8
    },
    UserWorkView_information: {
        display: "flex",
        flexDirection: "column",
        height: 38
    },
    UserWorkView_name: {
        height: 20,
        marginBottom: 1,
        fontSize: 14,
        fontWeight: 500
    },
    UserWorkView_desc: {
        height: 17,
        fontSize: 12,
        fontFamily: "PingFangSC-Medium,PingFang SC",
        fontWeight: 500
    },
    UserWorkView_right: {
        height: 17,
        fontSize: 12,
        fontWeight: 400
    },
    UserAddButton: {
        display: "flex",
        alignItems: "center",
        height: 72,
        paddingLeft: 14,
        paddingRight: 14
    },
    UserAddButton_icon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 40,
        height: 40,
        marginRight: 8,
        borderRadius: 2
    },
    UserAddButton_name: {
        height: 20,
        fontSize: 14,
        fontWeight: 400
    }
});
function UserInfoView(props) {
    var url = props.url, text = props.text, desc = props.desc;
    var classes = useStyles();
    return (React.createElement("div", { className: classes.UserInfoView },
        React.createElement("img", { className: classes.UserInfoView_icon, src: url }),
        React.createElement("div", { className: classes.UserInfoView_information },
            React.createElement("div", { className: classes.UserInfoView_name }, text),
            React.createElement("div", { className: classes.UserInfoView_email }, desc))));
}
exports.UserInfoView = UserInfoView;
function UserWorkView(props) {
    var emoji = props.emoji, text = props.text, desc = props.desc, children = props.children, onClick = props.onClick;
    var classes = useStyles();
    var handleOnClickUserWorkView = function () {
        onClick(text);
    };
    return (React.createElement(MenuItem_1.default, { disableGutters: true },
        React.createElement("div", { className: classes.UserWorkView, onClick: handleOnClickUserWorkView },
            React.createElement("div", { className: classes.UserWorkView_left },
                React.createElement("div", { className: classes.UserWorkView_icon }, emoji),
                React.createElement("div", { className: classes.UserWorkView_information },
                    React.createElement("div", { className: classes.UserWorkView_name }, text),
                    React.createElement("div", { className: classes.UserWorkView_desc }, desc))),
            React.createElement("div", { className: classes.UserWorkView_right },
                React.createElement(index_1.SubComponents, { data: children })))));
}
exports.UserWorkView = UserWorkView;
function UserAddButton(props) {
    var text = props.text, onClick = props.onClick;
    var classes = useStyles();
    var handleOnClickUserAddButton = function () {
        onClick(text);
    };
    return (React.createElement(MenuItem_1.default, { disableGutters: true },
        React.createElement("div", { className: classes.UserAddButton, onClick: handleOnClickUserAddButton },
            React.createElement("div", { className: classes.UserAddButton_icon },
                React.createElement(Icon_1.default, { style: { fontSize: 40 } }, "add_box")),
            React.createElement("div", { className: classes.UserAddButton_name }, text))));
}
exports.UserAddButton = UserAddButton;
//# sourceMappingURL=index.js.map