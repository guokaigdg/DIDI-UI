"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var PropTypes = tslib_1.__importStar(require("prop-types"));
var display_1 = tslib_1.__importDefault(require("./display"));
function DisplayWrap(props) {
    var disPlayList = props.disPlayList, onSelect = props.onSelect;
    var handleonCelct = function (titleName) {
        onSelect(titleName);
    };
    return (React.createElement("div", null,
        React.createElement(display_1.default, { list: disPlayList, onclickDisplay: handleonCelct })));
}
exports.DisplayWrap = DisplayWrap;
DisplayWrap.protoTypes = {
    disPlayList: PropTypes.object,
    onSelect: PropTypes.func
};
DisplayWrap.defaultProps = {
    disPlayList: [{ icon: "book", title: "工作区" }],
    onSelect: function () { }
};
//# sourceMappingURL=index.js.map