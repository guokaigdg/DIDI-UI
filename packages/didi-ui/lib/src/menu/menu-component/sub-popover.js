"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styles_1 = require("@material-ui/core/styles");
var Popover_1 = tslib_1.__importDefault(require("@material-ui/core/Popover"));
var index_1 = require("../../index");
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        typography: {
            padding: theme.spacing(0, 0, 0, 0)
        }
    });
});
function SubPopover(props) {
    var children = props.children, content = props.content;
    var classes = useStyles();
    var _a = tslib_1.__read(react_1.default.useState(null), 2), anchorEl = _a[0], setAnchorEl = _a[1];
    var handleClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function () {
        setAnchorEl(null);
    };
    var open = Boolean(anchorEl);
    var id = open ? "simple-popover" : undefined;
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("span", { role: "button", "aria-describedby": id, onClick: handleClick }, children),
        react_1.default.createElement(Popover_1.default, { id: id, open: open, anchorEl: anchorEl, onClose: handleClose, anchorOrigin: {
                vertical: "top",
                horizontal: "right"
            }, transformOrigin: {
                vertical: "center",
                horizontal: "left"
            } },
            react_1.default.createElement("div", { className: classes.typography },
                react_1.default.createElement(index_1.SubMenu, { data: content })))));
}
exports.SubPopover = SubPopover;
//# sourceMappingURL=sub-popover.js.map