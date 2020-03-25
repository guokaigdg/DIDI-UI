"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var Grid_1 = tslib_1.__importDefault(require("@material-ui/core/Grid"));
var Typography_1 = tslib_1.__importDefault(require("@material-ui/core/Typography"));
var styles_1 = require("@material-ui/core/styles");
var Switch_1 = tslib_1.__importDefault(require("@material-ui/core/Switch"));
var styles_2 = require("@material-ui/styles");
var PropTypes = tslib_1.__importStar(require("prop-types"));
var FormGroup_1 = tslib_1.__importDefault(require("@material-ui/core/FormGroup"));
var Icon_1 = tslib_1.__importDefault(require("@material-ui/core/Icon"));
var index_1 = require("../../index");
var hooks_1 = require("@umijs/hooks");
var useStyles = styles_2.makeStyles({
    SelectButton: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        cursor: "pointer"
    },
    TextButton: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        marginRight: 2,
        cursor: "pointer"
    }
});
var AntSwitch = styles_1.withStyles(function (theme) {
    return styles_1.createStyles({
        root: {
            width: 30,
            height: 18,
            padding: 0,
            display: "flex"
        },
        switchBase: {
            padding: 1,
            color: "white",
            "&$checked": {
                transform: "translateX(12px)",
                color: theme.palette.common.white,
                "& + $track": {
                    opacity: 1,
                    backgroundColor: "rgba(46,170,220,1)",
                    borderColor: theme.palette.primary.main
                }
            }
        },
        thumb: {
            width: 16,
            height: 16,
            boxShadow: "none"
        },
        track: {
            borderRadius: 16,
            opacity: 1,
            backgroundColor: "rgba(108,112,114,1)"
        },
        checked: {}
    });
})(Switch_1.default);
function SubComponents(props) {
    var data = props.data;
    return (React.createElement("div", null, data !== "" && (React.createElement("div", null,
        data.menu !== undefined && (React.createElement("div", null,
            data.type === "text" && (React.createElement(index_1.SubPopover, { children: React.createElement(Text, { text: data.text }), content: data.menu })),
            data.type === "arrow" && (React.createElement(index_1.SubPopover, { children: React.createElement(Arrow, null), content: data.menu })),
            data.type === "shortcuts_key" && (React.createElement(index_1.SubPopover, { children: React.createElement(ShortcutsKey, { keys: data.keys }), content: data.menu })),
            data.type === "select_button" && (React.createElement(index_1.SubPopover, { children: React.createElement(SelectButton, { placeholder: data.placeholder }), content: data.menu })),
            data.type === "more_button" && (React.createElement(index_1.SubPopover, { children: React.createElement(MoreButton, null), content: data.menu })))),
        data.menu === undefined && (React.createElement("div", null,
            data.type === "text" && React.createElement(Text, { text: data.text }),
            data.type === "arrow" && React.createElement(Arrow, null),
            data.type === "shortcuts_key" && (React.createElement(ShortcutsKey, { keys: data.keys })),
            data.type === "switch_button" && React.createElement(SwitchButton, null),
            data.type === "select_button" && (React.createElement(SelectButton, { placeholder: data.placeholder })),
            data.type === "more_button" && React.createElement(MoreButton, null),
            data.type === "selected_icon" && React.createElement(SelectedIcon, null)))))));
}
exports.SubComponents = SubComponents;
function Text(props) {
    var text = props.text;
    var classes = useStyles();
    return React.createElement("div", { className: classes.TextButton }, text);
}
exports.Text = Text;
function Arrow() {
    var classes = useStyles();
    return (React.createElement("div", { className: classes.SelectButton },
        React.createElement(Icon_1.default, { style: { fontSize: 15 } }, "play_arrow")));
}
exports.Arrow = Arrow;
function ShortcutsKey(props) {
    var keys = props.keys;
    var classes = useStyles();
    return (React.createElement("div", { className: classes.TextButton, role: "button", onClick: function () {
            console.log({ keys: keys });
        } }, keys));
}
exports.ShortcutsKey = ShortcutsKey;
function SwitchButton(props) {
    var onChange = props.onChange;
    var _a = hooks_1.useToggle(true), state = _a.state, toggle = _a.toggle;
    var classes = useStyles();
    return (React.createElement("div", { className: classes.SelectButton },
        React.createElement(FormGroup_1.default, null,
            React.createElement(Typography_1.default, { component: "div" },
                React.createElement(Grid_1.default, { component: "label", container: true, alignItems: "center", spacing: 1 },
                    React.createElement(Grid_1.default, { item: true },
                        React.createElement(AntSwitch, { onChange: function () { return toggle(onChange(state)); }, value: "checked" })))))));
}
exports.SwitchButton = SwitchButton;
function SelectButton(props) {
    var placeholder = props.placeholder;
    var classes = useStyles();
    return (React.createElement("div", { className: classes.SelectButton },
        placeholder,
        React.createElement(Icon_1.default, { style: { fontSize: 15 } }, "keyboard_arrow_down")));
}
exports.SelectButton = SelectButton;
function MoreButton(props) {
    var onChange = props.onChange;
    var classes = useStyles();
    return (React.createElement("div", { className: classes.SelectButton, onClick: onChange },
        React.createElement(Icon_1.default, { style: { fontSize: 16 } }, "more_horiz")));
}
exports.MoreButton = MoreButton;
function SelectedIcon() {
    var classes = useStyles();
    return (React.createElement("div", { className: classes.SelectButton },
        React.createElement(Icon_1.default, { style: { fontSize: 16 } }, "done")));
}
exports.SelectedIcon = SelectedIcon;
Text.protoTypes = {
    text: PropTypes.string
};
Text.defaultProps = {
    text: ""
};
//# sourceMappingURL=index.js.map