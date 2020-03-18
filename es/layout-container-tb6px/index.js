import React from "react";
import { makeStyles } from "@material-ui/styles";
var useStyle = makeStyles({
  line: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    paddingTop: 6,
    paddingBottom: 6
  }
});

function LayoutContainerTB6px(props) {
  var children = props.children;

  var classes = useStyle();
  return React.createElement(
    "div",
    { className: classes.line },
    children
  );
}
export { LayoutContainerTB6px };