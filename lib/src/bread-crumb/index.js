"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var Breadcrumb_1 = tslib_1.__importDefault(require("./Breadcrumb"));
function BreadcrumbWrap(props) {
    var upDateList = props.upDateList;
    var location = react_router_dom_1.useLocation();
    var titleList = upDateList(location.pathname);
    return (React.createElement("div", null,
        React.createElement(Breadcrumb_1.default, { titleList: titleList })));
}
exports.BreadcrumbWrap = BreadcrumbWrap;
//# sourceMappingURL=index.js.map