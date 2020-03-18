"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var styles_1 = require("@material-ui/core/styles");
var useStyles = styles_1.makeStyles({
    Wrap: {
        display: "flex",
        alignItems: "center",
        width: 446,
        height: 40
    },
    emojiWrap: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: 40,
        width: 28,
        marginLeft: 23
    },
    imageWrap: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: 40,
        width: 56,
        marginLeft: 24
    },
    emojiFont: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 35,
        height: 25,
        fontSize: 14,
        fontWeight: 500,
        marginTop: 8,
        color: "rgba(231,232,232,1)",
        textDecoration: "none",
        borderRadius: 3,
        "&:hover": {
            backgroundColor: "rgba(70,76,80,1)"
        },
        "&:active": {
            backgroundColor: "rgba(63,68,71,1)"
        }
    },
    imageFont: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 63,
        height: 25,
        fontSize: 14,
        fontWeight: 500,
        marginTop: 8,
        color: "rgba(231,232,232,1)",
        textDecoration: "none",
        borderRadius: 3,
        "&:hover": {
            backgroundColor: "rgba(70,76,80,1)"
        },
        "&:active": {
            backgroundColor: "rgba(63,68,71,1)"
        }
    },
    emojiHint: {
        position: "absolute",
        width: 28,
        height: 2,
        marginTop: 38,
        backgroundColor: "#EEEFEEFF"
    },
    imageHint: {
        position: "absolute",
        width: 56,
        height: 2,
        marginTop: 38,
        backgroundColor: "#EEEFEEFF"
    },
    buttonLeft: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 35,
        height: 25,
        fontSize: 14,
        fontWeight: 400,
        borderRadius: 3,
        color: "rgba(231,232,232,1)",
        marginLeft: 210,
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "rgba(70,76,80,1)"
        },
        "&:active": {
            backgroundColor: "rgba(63,68,71,1)"
        }
    },
    buttonRight: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 35,
        height: 25,
        fontSize: 14,
        fontWeight: 400,
        borderRadius: 3,
        color: "rgba(231,232,232,1)",
        marginLeft: 15,
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "rgba(70,76,80,1)"
        },
        "&:active": {
            backgroundColor: "rgba(63,68,71,1)"
        }
    }
});
function ChangeIconMenuLink(props) {
    var clickButton1 = props.clickButton1, clickButton2 = props.clickButton2;
    var classes = useStyles();
    var location = react_router_dom_1.useLocation();
    var pathname = location.pathname;
    return (React.createElement("div", { className: classes.Wrap },
        React.createElement("div", { className: classes.emojiWrap },
            React.createElement(react_router_dom_1.Link, { className: classes.emojiFont, to: "./" }, "\u8868\u60C5"),
            pathname === "/" && React.createElement("span", { className: classes.emojiHint })),
        React.createElement("div", { className: classes.imageWrap },
            React.createElement(react_router_dom_1.Link, { className: classes.imageFont, to: "./image" }, "\u4E0A\u4F20\u56FE\u7247"),
            pathname === "/image" && React.createElement("span", { className: classes.imageHint })),
        React.createElement("div", { className: classes.buttonLeft, onClick: clickButton1 }, "\u968F\u673A"),
        React.createElement("div", { className: classes.buttonRight, onClick: clickButton2 }, "\u79FB\u9664")));
}
exports.ChangeIconMenuLink = ChangeIconMenuLink;
//# sourceMappingURL=ChangeIconMenuLink.js.map