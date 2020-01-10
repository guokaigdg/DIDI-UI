import React from "react";
import { makeStyles } from "@material-ui/styles";
const useStyle = makeStyles({
  line: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    paddingBottom: 6
  }
});

function LayoutContainerB6px(props) {
  const { children } = props;
  const classes = useStyle();
  return <div className={classes.line}>{children}</div>;
}
export default LayoutContainerB6px;
