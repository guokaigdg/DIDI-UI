import React from "react";
import { makeStyles } from "@material-ui/styles";
const useStyle = makeStyles({
  line: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    paddingTop: 6,
    paddingBottom: 6
  }
});

function LayoutContainerTB6px(props) {
  const { children } = props;
  const classes = useStyle();
  return <div className={classes.line}>{children}</div>;
}
export { LayoutContainerTB6px };
