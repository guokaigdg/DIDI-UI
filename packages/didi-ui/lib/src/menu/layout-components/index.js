"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var styles_1 = require("@material-ui/styles");
var useStyle = styles_1.makeStyles({
    LayoutContainerTB: {
        display: "flex",
        alignItems: "center",
        width: "100%"
    },
    LayoutContainerTB6px: {
        display: "flex",
        alignItems: "center",
        width: "100%",
        paddingTop: 6,
        paddingBottom: 6
    },
    LayoutContainerTB3px: {
        display: "flex",
        alignItems: "center",
        width: "100%",
        paddingTop: 3,
        paddingBottom: 3
    },
    LayoutContainerB6px: {
        display: "flex",
        alignItems: "center",
        width: "100%",
        paddingBottom: 6
    },
    LayoutContainerT6px: {
        display: "flex",
        alignItems: "center",
        width: "100%",
        paddingTop: 6
    },
    LayoutContainerTB8px: {
        display: "flex",
        alignItems: "center",
        width: "100%",
        paddingTop: 8,
        paddingBottom: 8
    }
});
function LayoutContainerTB(props) {
    var children = props.children;
    var classes = useStyle(props);
    return React.createElement("div", { className: classes.LayoutContainerTB }, children);
}
exports.LayoutContainerTB = LayoutContainerTB;
var LayoutContainerT6px = function (props) {
    var children = props.children;
    var classes = useStyle();
    return React.createElement("div", { className: classes.LayoutContainerT6px }, children);
};
exports.LayoutContainerT6px = LayoutContainerT6px;
var LayoutContainerB6px = function (props) {
    var children = props.children;
    var classes = useStyle();
    return React.createElement("div", { className: classes.LayoutContainerB6px }, children);
};
exports.LayoutContainerB6px = LayoutContainerB6px;
var LayoutContainerTB3px = function (props) {
    var children = props.children;
    var classes = useStyle();
    return React.createElement("div", { className: classes.LayoutContainerTB3px }, children);
};
exports.LayoutContainerTB3px = LayoutContainerTB3px;
var LayoutContainerTB6px = function (props) {
    var children = props.children;
    var classes = useStyle();
    return React.createElement("div", { className: classes.LayoutContainerTB6px }, children);
};
exports.LayoutContainerTB6px = LayoutContainerTB6px;
function LayoutContainerTB8px(props) {
    var children = props.children;
    var classes = useStyle();
    return React.createElement("div", { className: classes.LayoutContainerTB8px }, children);
}
exports.LayoutContainerTB8px = LayoutContainerTB8px;
//# sourceMappingURL=index.js.map