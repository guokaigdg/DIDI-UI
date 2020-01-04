import React from "react";
import { makeStyles } from "@material-ui/styles";
const useStyle = makeStyles({
  line: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    paddingTop: 6
  }
});

function LyoutContainerT6px(props) {
  const { children } = props;
  const classes = useStyle();
  return <div className={classes.line}>{children}</div>;
}
export default LyoutContainerT6px;