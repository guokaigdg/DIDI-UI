import React from "react";
import { makeStyles } from "@material-ui/styles";
const useStyle = makeStyles({
  line: {
    display: "flex",
    alignItems: "center",
    width: "100%"
  }
});

function LayoutContainerTB(props) {
  const { children } = props;
  const classes = useStyle();
  return <div className={classes.line}>{children}</div>;
}
export { LayoutContainerTB };
