"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styles_1 = require("@material-ui/styles");
var core_1 = require("@material-ui/core");
var PropTypes = tslib_1.__importStar(require("prop-types"));
var useStyles = styles_1.makeStyles({
    FilterInputView: {
        width: "100%",
        height: 30
    },
    FilterInputView_wrap: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 14,
        marginRight: 14,
        height: 30
    },
    FilterInputView_content: {
        display: "flex",
        alignItems: "center",
        width: "100%",
        height: 30,
        borderRadius: 2,
        border: "1px solid rgba(42,46,46,1)"
    },
    FilterInputView_foot: {
        width: "100%",
        fontSize: 14,
        fontWeight: 400,
        marginLeft: 9,
        marginRight: 9
    },
    GroupTitleView: {
        width: "100%",
        height: 15
    },
    GroupTitleView_wrap: {
        display: "flex",
        alignItems: "center",
        height: 15,
        marginLeft: 14,
        marginRight: 14,
        fontSize: 11,
        fontWeight: 400
    },
    HintText: {
        width: "100%",
        height: 21
    },
    HintText_wrap: {
        display: "flex",
        alignItems: "center",
        height: 21,
        fontSize: 12,
        marginLeft: 14,
        marginRight: 14,
        fontWeight: 500
    },
    HintButton: {
        display: "flex",
        alignItems: "center",
        height: 28,
        width: "100%"
    },
    HintButton_icon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 13,
        height: 13,
        marginRight: 8,
        marginLeft: 14
    },
    HintButton_name: {
        height: 17,
        marginRight: 14,
        fontSize: 12,
        fontWeight: 400
    },
    cancelIcon: {
        marginRight: 5,
        fontSize: 16,
        cursor: "pointer"
    }
});
function FilterInputView(props) {
    var classes = useStyles();
    var placeholder = props.placeholder;
    var _a = tslib_1.__read(react_1.default.useState(""), 2), value = _a[0], setValue = _a[1];
    var handleValue = function (e) {
        setValue(e.target.value);
    };
    var handleClearValue = function () {
        console.log(value);
        setValue("");
    };
    return (react_1.default.createElement("div", { className: classes.FilterInputView },
        react_1.default.createElement("div", { className: classes.FilterInputView_wrap },
            react_1.default.createElement("div", { className: classes.FilterInputView_content },
                react_1.default.createElement(core_1.Input, { className: classes.FilterInputView_foot, placeholder: placeholder, disableUnderline: true, value: value, onChange: handleValue }),
                value !== "" && (react_1.default.createElement(core_1.Icon, { className: classes.cancelIcon, onClick: handleClearValue }, "cancel"))))));
}
exports.FilterInputView = FilterInputView;
function GroupTitleView(props) {
    var text = props.text;
    var classes = useStyles();
    return (react_1.default.createElement("div", { className: classes.GroupTitleView },
        react_1.default.createElement("div", { className: classes.GroupTitleView_wrap }, text)));
}
exports.GroupTitleView = GroupTitleView;
function HintText(props) {
    var text = props.text;
    var classes = useStyles();
    return (react_1.default.createElement("div", { className: classes.HintText },
        react_1.default.createElement("div", { className: classes.HintText_wrap }, text)));
}
exports.HintText = HintText;
function HintButton(props) {
    var text = props.text;
    var classes = useStyles();
    return (react_1.default.createElement("div", { className: classes.HintButton },
        react_1.default.createElement("div", { className: classes.HintButton_icon },
            react_1.default.createElement(core_1.Icon, { style: { fontSize: 16 } }, "help_outline")),
        react_1.default.createElement("div", { className: classes.HintButton_name }, text)));
}
exports.HintButton = HintButton;
HintButton.protoTypes = {
    text: PropTypes.string
};
HintButton.defaultProps = {
    text: ""
};
//# sourceMappingURL=index.js.map