"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var PropTypes = tslib_1.__importStar(require("prop-types"));
var StickyBlockBox_1 = tslib_1.__importDefault(require("./StickyBlockBox"));
function StickyBlockBoxWrap(props) {
    var list = props.list;
    return (React.createElement("div", null,
        React.createElement(StickyBlockBox_1.default, { list: list })));
}
exports.StickyBlockBoxWrap = StickyBlockBoxWrap;
StickyBlockBoxWrap.protoTypes = {
    list: PropTypes.object
};
StickyBlockBoxWrap.defaultProps = {
    list: [
        {
            name: "文章标题H1",
            type: "H1",
            href: "#h1"
        },
        {
            name: "文章标题H2",
            type: "H2",
            href: "#h2"
        }
    ]
};
//# sourceMappingURL=index.js.map