"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var styles_1 = require("@material-ui/styles");
var useStyle = styles_1.makeStyles({
    line: {
        width: "100%",
        height: 1,
        background: "rgba(79,84,86,1)"
    }
});
function Divider() {
    var classes = useStyle();
    return React.createElement("div", { className: classes.line });
}
exports.Divider = Divider;
//# sourceMappingURL=index.js.map