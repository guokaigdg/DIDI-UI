"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
require("material-design-icons-iconfont/dist/material-design-icons.css");
var Icon_1 = tslib_1.__importDefault(require("@material-ui/core/Icon"));
var styles_1 = require("@material-ui/styles");
var useStyles = styles_1.makeStyles({
    displayWrap: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        height: 29,
        "&:hover": {
            background: "#E6E9F1",
            cursor: "pointer"
        },
        "&:active": {
            backgroundColor: "#DAD9D7"
        }
    },
    displayIcon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        width: 20,
        height: 20,
        marginLeft: 24,
        marginRight: 7
    },
    materialIcons: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    displayTitle: {
        height: 20,
        fontSize: 14,
        marginRight: 24,
        fontWeight: 500,
        color: "#262C33",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
    }
});
function Display(props) {
    var list = props.list, onclickDisplay = props.onclickDisplay;
    var classes = useStyles();
    return (React.createElement("div", null, list.map(function (item, index) { return (React.createElement("div", { className: classes.displayWrap, key: index, onClick: function () { return onclickDisplay(item.href); } },
        React.createElement("div", { className: classes.displayIcon },
            React.createElement("div", { className: classes.materialIcons },
                React.createElement(Icon_1.default, { style: { fontSize: 16 } }, item.icon))),
        React.createElement("span", { className: classes.displayTitle }, item.title))); })));
}
exports.default = Display;
//# sourceMappingURL=display.js.map