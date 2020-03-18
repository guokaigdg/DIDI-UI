import React from "react";
import PropTypes from "prop-types";
import StickyBlockBox from "./StickyBlockBox";

function StickyBlockBoxWrap(props) {
  var list = props.list;

  return React.createElement(
    "div",
    null,
    React.createElement(StickyBlockBox, { list: list })
  );
}
StickyBlockBoxWrap.protoTypes = {
  list: PropTypes.object
};
StickyBlockBoxWrap.defaultProps = {
  list: [{
    name: "文章标题H1",
    type: "H1",
    href: "#h1"
  }, {
    name: "文章标题H2",
    type: "H2",
    href: "#h2"
  }]
};
export { StickyBlockBoxWrap };