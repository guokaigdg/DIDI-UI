"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var styles_1 = require("@material-ui/styles");
var FormatAlignLeft_1 = tslib_1.__importDefault(require("@material-ui/icons/FormatAlignLeft"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var useStyles = styles_1.makeStyles({
    itemLeft: {
        flexShrink: 0,
        height: 29,
        width: 2,
        backgroundColor: "#E6ECF1"
    },
    contentOutline: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        width: 225,
        height: 29
    },
    icon: {
        display: "flex",
        alignItems: "center",
        marginLeft: 22,
        width: 16,
        height: 16
    },
    title: {
        marginLeft: 7,
        height: 17,
        fontSize: 12,
        fontWeight: 500,
        color: "#9DAAB6"
    },
    itemWrap: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        width: 225,
        height: 29,
        cursor: "pointer",
        textDecoration: "none",
        "&:hover": {
            backgroundColor: "#E6ECF1"
        }
    },
    itemIcon: {
        position: "absolute",
        width: 2,
        height: 29,
        background: "#A44EED"
    },
    fontH1Default: {
        marginLeft: 23,
        fontSize: 12,
        fontWeight: 500,
        color: "#7C8893",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
    },
    fontH1Choosen: {
        color: "#A755ED"
    },
    fontH2Default: {
        marginLeft: 40,
        fontSize: 12,
        fontWeight: 500,
        color: "#7C8893",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
    },
    fontH2Choosen: {
        color: "#A755ED"
    }
});
function StickyBlockBox(props) {
    var list = props.list;
    var location = react_router_dom_1.useLocation();
    var newHref = location.hash;
    console.log(newHref);
    var classes = useStyles();
    return (React.createElement("div", null,
        list && (React.createElement("div", { className: classes.contentOutline },
            React.createElement("div", { className: classes.itemLeft }),
            React.createElement("span", { className: classes.icon },
                React.createElement(FormatAlignLeft_1.default, { style: { fontSize: 16 } })),
            React.createElement("span", { className: classes.title }, "\u5185\u5BB9\u5927\u7EB2"))),
        list.map(function (item, index) {
            var _a, _b;
            return (React.createElement(react_router_dom_1.Link, { to: item.href, className: classes.itemWrap, key: index + item },
                React.createElement("div", { className: classes.itemLeft }),
                item.href === newHref && React.createElement("span", { className: classes.itemIcon }),
                item.type === "H1" && (React.createElement("span", { className: classnames_1.default((_a = {},
                        _a[classes.fontH1Default] = true,
                        _a[classes.fontH1Choosen] = item.href === newHref,
                        _a)) }, item.name)),
                item.type === "H2" && (React.createElement("div", { className: classnames_1.default((_b = {},
                        _b[classes.fontH2Default] = true,
                        _b[classes.fontH2Choosen] = item.href === newHref,
                        _b)) }, item.name))));
        })));
}
exports.default = StickyBlockBox;
//# sourceMappingURL=StickyBlockBox.js.map