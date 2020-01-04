import React from "react";
import { makeStyles } from "@material-ui/styles";
var useStyle = makeStyles({
  line: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    paddingBottom: 6
  }
});

function LyoutContainerB6px(props) {
  var children = props.children;

  var classes = useStyle();
  return React.createElement(
    "div",
    { className: classes.line },
    children
  );
}
export default LyoutContainerB6px;