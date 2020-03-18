import React from "react";
import { makeStyles } from "@material-ui/styles";
var useStyle = makeStyles({
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#E6ECF1"
  }
});

function Divider() {
  var classes = useStyle();
  return React.createElement("div", { className: classes.line });
}
export { Divider };