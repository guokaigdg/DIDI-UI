"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
require("material-design-icons-iconfont/dist/material-design-icons.css");
var Icon_1 = tslib_1.__importDefault(require("@material-ui/core/Icon"));
var styles_1 = require("@material-ui/styles");
var useStyles = styles_1.makeStyles({
    topbar: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        height: 66,
        paddingLeft: 28
    },
    buttonWrap: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: 24,
        flexShrink: 0,
        width: 55,
        marginRight: 23,
        lineHeight: 66
    },
    goback: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 24,
        height: 24,
        borderRadius: 2.5,
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "#F7F6F3",
            cursor: "pointer"
        },
        "&:active": {
            backgroundColor: "#DAD9D7"
        }
    },
    goforword: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 24,
        height: 24,
        borderRadius: 2.5,
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "#F7F6F3",
            cursor: "pointer"
        },
        "&:active": {
            backgroundColor: "#DAD9D7"
        }
    },
    arrowIcon: {
        width: 20,
        height: 20,
        color: "#A6AAAB",
        fontSize: 20
    },
    breadcrumbWrap: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        height: 66
    },
    breadcrumbLink: {
        paddingLeft: 4,
        paddingRight: 4,
        textDecoration: "none",
        "&:hover": {
            height: 24,
            borderRadius: 3,
            backgroundColor: "#F7F6F3",
            cursor: "pointer"
        },
        "&:active": {
            backgroundColor: "#DAD9D7"
        }
    },
    icon: {
        width: 21,
        height: 26,
        fontSize: 16,
        paddingRight: 3,
        flexShrink: 0
    },
    title: {
        height: 20,
        width: 5,
        fontSize: 14,
        fontWeight: 400,
        borderRadius: 2.5,
        color: "#868581",
        lineHeight: 22
    },
    backslash: {
        height: 20,
        paddingRight: 5,
        paddingLeft: 5,
        textAlign: "center",
        fontSize: 14,
        fontWeight: 400,
        color: "#8E9294",
        lineHeight: 20
    },
    content: {
        position: "absolute",
        top: 50,
        left: 100
    }
});
function Breadcrumb(props) {
    var titleList = props.titleList;
    var classes = useStyles();
    var history = react_router_dom_1.useHistory();
    return (React.createElement("div", { className: classes.topbar },
        React.createElement("div", { className: classes.buttonWrap },
            React.createElement("div", { className: classes.goback, onClick: function () {
                    history.goBack();
                } },
                React.createElement(Icon_1.default, { className: classes.arrowIcon }, "arrow_back")),
            React.createElement("div", { className: classes.goforword, onClick: function () {
                    history.goForward();
                } },
                React.createElement(Icon_1.default, { className: classes.arrowIcon }, "arrow_forward"))),
        React.createElement("div", { className: classes.breadcrumbWrap }, titleList.map(function (item, index) { return (React.createElement("div", { key: index },
            React.createElement(react_router_dom_1.Link, { to: item.url, className: classes.breadcrumbLink },
                React.createElement("span", { className: classes.icon }, item.icon),
                item.title.length <= 29 && (React.createElement("span", { className: classes.title },
                    item.title,
                    " ")),
                item.title.length > 29 && (React.createElement("span", { className: classes.title }, item.title.slice(0, 29) + "..."))),
            index !== titleList.length - 1 && (React.createElement("span", { className: classes.backslash }, "/")))); }))));
}
exports.default = Breadcrumb;
//# sourceMappingURL=Breadcrumb.js.map