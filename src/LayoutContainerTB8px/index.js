import React from "react";
import { makeStyles } from "@material-ui/styles";
const useStyle = makeStyles({
  line: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    paddingTop: 8,
    paddingBottom: 8
  }
});

function LayoutContainerTB8px(props) {
  const { children } = props;
  const classes = useStyle();
  return <div className={classes.line}>{children}</div>;
}
export default LayoutContainerTB8px;
