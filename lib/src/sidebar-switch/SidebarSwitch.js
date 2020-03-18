"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
require("material-design-icons-iconfont/dist/material-design-icons.css");
var Icon_1 = tslib_1.__importDefault(require("@material-ui/core/Icon"));
var styles_1 = require("@material-ui/styles");
var useStyles = styles_1.makeStyles({
    sidebarSwitchWrap: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        height: 29,
        "&:hover": {
            background: "#E6ECF1",
            cursor: "pointer"
        },
        "&:active": {
            backgroundColor: "#DCDCDC"
        }
    },
    sidebarSwitchIcon: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexShrink: 0,
        fontSize: 20,
        width: 23,
        height: 29,
        marginLeft: 15,
        marginRight: 8
    },
    sidebarSwitchTitle: {
        height: 20,
        fontSize: 14,
        fontWeight: 500,
        color: "#262C33",
        marginRight: 8,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
    },
    sidebarSwitchButtonWrap: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 20,
        height: 20,
        marginRight: 15
    },
    sidebarSwitchButton: {
        fontSize: 15,
        color: "#8E9193FF"
    }
});
function SidebarSwitch(props) {
    var icon = props.icon, title = props.title, clickSidebarSwitch = props.clickSidebarSwitch;
    var classes = useStyles();
    var handleonclickSidebarSwitch = function () {
        clickSidebarSwitch(title);
    };
    return (React.createElement("div", { role: "button", className: classes.sidebarSwitchWrap, onClick: handleonclickSidebarSwitch },
        React.createElement("div", { className: classes.sidebarSwitchIcon }, icon),
        React.createElement("div", { className: classes.sidebarSwitchTitle }, title),
        React.createElement("div", { className: classes.sidebarSwitchButtonWrap },
            React.createElement(Icon_1.default, { className: classes.sidebarSwitchButton }, "unfold_more"))));
}
exports.default = SidebarSwitch;
//# sourceMappingURL=SidebarSwitch.js.map