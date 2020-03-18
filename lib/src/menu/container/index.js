"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var styles_1 = require("@material-ui/styles");
var core_1 = require("@material-ui/core");
var useStyle = styles_1.makeStyles({
    line: {
        display: "flex",
        alignItems: "center",
        width: "100%",
        paddingTop: 6,
        paddingBottom: 6,
        boxShadow: "0px 2px 4px 0px rgba(0,0,0,0.3)",
        borderRadius: "4px 4px 4px 4px"
    }
});
function MainContainerTB6px(props) {
    var children = props.children;
    var classes = useStyle();
    return (React.createElement(core_1.Grid, null,
        React.createElement(core_1.Paper, { elevation: 3 },
            React.createElement("div", { className: classes.line }, children))));
}
exports.MainContainerTB6px = MainContainerTB6px;
//# sourceMappingURL=index.js.map