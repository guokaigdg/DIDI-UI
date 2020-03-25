"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var PropTypes = tslib_1.__importStar(require("prop-types"));
var SidebarSwitch_1 = tslib_1.__importDefault(require("./SidebarSwitch"));
function SidebarSwitchWrap(props) {
    var icon = props.icon, title = props.title, onSelect = props.onSelect;
    var handleonSelect = function (result) {
        onSelect(result);
    };
    return (React.createElement("div", null,
        React.createElement(SidebarSwitch_1.default, { icon: icon, title: title, clickSidebarSwitch: handleonSelect })));
}
exports.SidebarSwitchWrap = SidebarSwitchWrap;
SidebarSwitchWrap.protoTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    onSelect: PropTypes.func
};
SidebarSwitchWrap.defaultProps = {
    icon: "👽️",
    title: "我的工作区",
    onSelect: function () {
        console.log("ok");
    }
};
//# sourceMappingURL=index.js.map