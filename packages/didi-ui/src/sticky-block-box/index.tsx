import * as React from "react";
import * as PropTypes from "prop-types";
import StickyBlockBox from "./StickyBlockBox";

function StickyBlockBoxWrap(props: { list: any }) {
  const { list } = props;
  return (
    <div>
      <StickyBlockBox list={list} />
    </div>
  );
}
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
export { StickyBlockBoxWrap };
